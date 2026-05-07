"""Restore individual variant photos by extracting them from the
collection / hero shot of the same series.

WHY (root cause)
----------------
A previous run of `normalize_yume_thumbs.py` v2 used a "largest wide
contiguous block" heuristic to detect the figurine in keychain photos.
For series where the metal keyring (round, ~150 px wide) is wider than
the figurine itself (~100-130 px wide), the heuristic picked the
KEYRING as the figurine and cropped to it — discarding the actual
character sitting at the bottom of the keychain.

Affected series (figurines lost on disk) :
    Molang Scooter   (4 photos)
    Molang Snack     (4 photos)
    Camping Lamp     (5 photos, Hello Kitty kept its figurine)
    Raincoat         (5 photos, Hello Kitty kept its figurine)

Fortunately, the `*_collection_*.jpeg` shots were never touched by the
buggy normalizer. Each collection contains all variants of the series
laid out as multiple keychains in one shot, so we can recover the
individual variant photos by :

    1. Connected-component segmentation on the non-white mask.
    2. Filter out the packaging blob (large blob in top-left).
    3. Order remaining blobs : top-row first, then bottom row left→right.
    4. For each keychain blob, crop the BOTTOM 35 % of its bbox =
       figurine area, and pad to a square white canvas.

The user-supplied variant order maps slot index → filename.

USAGE
-----
    python scripts/restore_yume_from_collection.py
"""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_DIR = ROOT / "public" / "shop" / "products"

WHITE_THRESHOLD = 240
MIN_BLOB_SIZE = 1000
# Packaging detection (canvas-relative — works for 640² and 1080² alike) :
# the largest blob in the LEFT HALF + TOP HALF that covers > 4 % of the
# canvas is the packaging shot. The thresholds are deliberately loose
# because keychains never hit them : a single keychain bbox covers
# ~1.5 % of canvas, well below the 4 % packaging cutoff.
PACKAGING_LEFT_FRAC = 0.40
PACKAGING_TOP_FRAC = 0.55
PACKAGING_MIN_AREA_FRAC = 0.04
# Keychain photos (Molang, Raincoat, Camping) : the bbox includes the
# strap+ring at top, so we keep only the bottom slice.
FIGURINE_BOTTOM_FRAC = 0.35
# Standalone figurines (Mini-Doll, Balloon, Star) : no strap, the bbox
# IS the figurine. Aspect ratio test : width/height > this means stocky
# figurine (no tall strap above) → use full bbox.
STANDALONE_ASPECT_THRESHOLD = 0.5
SIDE_PADDING = 12               # px of padding around figurine in output square
ROW_BANDS = 4                   # vertical bands used to group blobs into rows

# Series → ordered list of variant filenames (matching slot order :
# top first, then bottom row left → right).
SERIES = {
    "molang_scooter": [
        "mnb_yume_molang_scooter_blue_v1.jpeg",
        "mnb_yume_molang_scooter_green_v1.jpeg",
        "mnb_yume_molang_scooter_purple_v1.jpeg",
        "mnb_yume_molang_scooter_pink_v1.jpeg",
    ],
    "molang_snack": [
        "mnb_yume_molang_snack_icecream_v1.jpeg",
        "mnb_yume_molang_snack_teacup_v1.jpeg",
        "mnb_yume_molang_snack_cupcake_v1.jpeg",
        "mnb_yume_molang_snack_donut_v1.jpeg",
    ],
    "raincoat": [
        "mnb_yume_raincoat_hello_kitty_v1.jpeg",
        "mnb_yume_raincoat_kuromi_v1.jpeg",
        "mnb_yume_raincoat_pochacco_v1.jpeg",
        "mnb_yume_raincoat_pompompurin_v1.jpeg",
        "mnb_yume_raincoat_my_melody_v1.jpeg",
    ],
    "camping": [
        "mnb_yume_hello_kitty_camping_v1.jpeg",
        "mnb_yume_kuromi_camping_v1.jpeg",
        "mnb_yume_pompompurin_camping_v1.jpeg",
        "mnb_yume_my_melody_camping_v1.jpeg",
        "mnb_yume_cinnamoroll_camping_v1.jpeg",
        "mnb_yume_pochacco_camping_v1.jpeg",
    ],
    # Mini-Doll has 3 visual rows in the collection :
    #   row 1 (top-right)    : chef (BIG hero shot)
    #   row 2 (middle area)  : salopette, pink dress
    #   row 3 (bottom row)   : pom-pom, pirate, yellow heart, denim, rockstar
    # The slot order below MUST match top→bottom + left→right within rows.
    "minidoll": [
        "mnb_yume_minidoll_chef_v1.jpeg",
        "mnb_yume_minidoll_overalls_v1.jpeg",
        "mnb_yume_minidoll_pink_dress_v1.jpeg",
        "mnb_yume_minidoll_cheerleader_v1.jpeg",
        "mnb_yume_minidoll_pirate_v1.jpeg",
        "mnb_yume_minidoll_yellow_heart_v1.jpeg",
        "mnb_yume_minidoll_denim_v1.jpeg",
        "mnb_yume_minidoll_rockstar_v1.jpeg",
    ],
}


def find_keychain_bboxes(path: Path) -> tuple[Image.Image, list[tuple[int, tuple[int, int, int, int]]]]:
    """Find each individual keychain bbox in a collection photo.

    Returns the loaded PIL image plus an ordered list of (size, bbox)
    where bbox is (x0, y0, x1, y1). Order : top blobs first (by y),
    then bottom blobs left-to-right (by x).
    """
    img = Image.open(path).convert("RGB")
    arr = np.array(img)
    h, w = arr.shape[:2]
    canvas_area = h * w
    is_subj = np.any(arr < WHITE_THRESHOLD, axis=-1)
    labeled, n = ndimage.label(is_subj)
    sizes = ndimage.sum(is_subj, labeled, range(1, n + 1))
    bboxes = ndimage.find_objects(labeled)

    candidates: list[tuple[int, tuple[int, int, int, int]]] = []
    for sz, bb in zip(sizes, bboxes):
        if sz < MIN_BLOB_SIZE:
            continue
        ry, rx = bb
        cx = (rx.start + rx.stop) / 2
        cy = (ry.start + ry.stop) / 2
        # Filter packaging : large blob (≥ 4 % of canvas) sitting in the
        # left half + top half. Canvas-relative thresholds work for both
        # 640² (Molang/Raincoat) and 1080² (Camping/Balloon) collections.
        if (sz / canvas_area >= PACKAGING_MIN_AREA_FRAC
                and cx < w * PACKAGING_LEFT_FRAC
                and cy < h * PACKAGING_TOP_FRAC):
            continue
        # Filter border noise (very thin or full-height edge blobs).
        if (rx.stop - rx.start) < 10 or (ry.stop - ry.start) < 50:
            continue
        candidates.append((int(sz), (rx.start, ry.start, rx.stop, ry.stop)))

    # Group blobs into vertical row-bands (top→bottom), then sort each
    # row left-to-right. ROW_BANDS=4 means we split the canvas into 4
    # horizontal strips; blobs in the same strip belong to the same
    # visual row even if their cy differs by a few dozen pixels.
    band_h = h / ROW_BANDS

    def band_index(c: tuple[int, tuple[int, int, int, int]]) -> int:
        _, (_, y0, _, y1) = c
        cy = (y0 + y1) / 2
        return int(min(ROW_BANDS - 1, cy // band_h))

    candidates.sort(key=lambda c: (band_index(c), c[1][0]))
    return img, candidates


def crop_figurine(img: Image.Image, kc_bbox: tuple[int, int, int, int]) -> Image.Image:
    """Extract the figurine from a blob bbox and pad to a square canvas.

    Two modes, picked by aspect ratio :
      - Tall narrow bbox (keychain) → crop the bottom 35 % (= figurine
        area), discarding the strap+ring above.
      - Stocky bbox (standalone figurine, no strap) → use the full bbox.
    """
    x0, y0, x1, y1 = kc_bbox
    W = x1 - x0
    H = y1 - y0
    aspect = W / H if H > 0 else 1.0
    if aspect > STANDALONE_ASPECT_THRESHOLD:
        # Standalone figurine — full bbox.
        fig = img.crop((x0, y0, x1, y1))
    else:
        # Keychain — bottom slice only.
        fig_h = int(H * FIGURINE_BOTTOM_FRAC)
        fig = img.crop((x0, y1 - fig_h, x1, y1))
    fw, fh = fig.size
    side = max(fw, fh) + SIDE_PADDING
    canvas = Image.new("RGB", (side, side), (255, 255, 255))
    canvas.paste(fig, ((side - fw) // 2, (side - fh) // 2))
    return canvas


def main() -> None:
    for series, names in SERIES.items():
        coll = PHOTOS_DIR / f"mnb_yume_{series}_collection_v1.jpeg"
        if not coll.exists():
            print(f"SKIP   {series}: no collection photo at {coll}")
            continue
        img, kcs = find_keychain_bboxes(coll)
        print(f"\n{series}  ({len(kcs)} keychains found, expecting {len(names)}):")
        if len(kcs) < len(names):
            print(f"  WARN  fewer keychains than expected — skipping series")
            continue
        for i, name in enumerate(names):
            sz, bb = kcs[i]
            fig = crop_figurine(img, bb)
            out = PHOTOS_DIR / name
            fig.save(out, "JPEG", quality=92)
            w, h = fig.size
            print(f"  OK    {name:50s} {w}x{h}  (bbox size={sz})")


if __name__ == "__main__":
    main()
