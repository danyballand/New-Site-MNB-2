"""Audit v3 : identifie les photos PRODUIT pas correctement traitées.

Critère raffiné : une photo "propre" a un fond ~blanc pur (chaque canal
RGB ≥ 245). Une photo brute/non-traitée a un fond tinté gris/bleuté
(canaux 180-230). Sur les 4 coins de l'image on calcule la médiane —
si elle est dans la zone "tinted", on flag.

On ignore les photos Sanrio (yume_*) car leur fond est volontairement
blanc pur ; et on regarde uniquement les mnb_perle_*, mnb_pierre_*,
mnb_piece_* qui sont les produits potentiellement importés bruts.
"""
from PIL import Image
import numpy as np
from pathlib import Path
import json

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
DIR = ROOT / "public/shop/products"

CORNER_SIZE = 50
# Seuil : si UN canal du fond est < CLEAN_BG_MIN, la photo est tintée.
CLEAN_BG_MIN = 245


def sample_background(arr: np.ndarray) -> np.ndarray:
    h, w, _ = arr.shape
    samples = np.concatenate([
        arr[:CORNER_SIZE, :CORNER_SIZE].reshape(-1, 3),
        arr[:CORNER_SIZE, w-CORNER_SIZE:].reshape(-1, 3),
        arr[h-CORNER_SIZE:, :CORNER_SIZE].reshape(-1, 3),
        arr[h-CORNER_SIZE:, w-CORNER_SIZE:].reshape(-1, 3),
    ], axis=0)
    return np.median(samples, axis=0)


def main():
    # Ne regarder QUE les photos perle/pierre/piece (pas les Sanrio yume_ ni
    # collection_* qui sont pro shots).
    patterns = ["mnb_perle_*", "mnb_pierre_*", "mnb_piece_*", "mnb_charme_*"]
    images = []
    for pat in patterns:
        images.extend(DIR.glob(pat + ".jpg"))
        images.extend(DIR.glob(pat + ".jpeg"))
    images = sorted(set(images))

    results = []
    for img in images:
        arr = np.array(Image.open(img).convert("RGB"))
        bg = sample_background(arr)
        clean = all(c >= CLEAN_BG_MIN for c in bg)
        results.append((min(bg), int(bg[0]), int(bg[1]), int(bg[2]), img.name, clean))

    results.sort(key=lambda x: x[0])
    bad = [(name, b0, b1, b2) for (mn, b0, b1, b2, name, clean) in results if not clean]
    ok = [(name, b0, b1, b2) for (mn, b0, b1, b2, name, clean) in results if clean]

    print(f"=== {len(images)} perle/pierre/piece/charme images ===")
    print(f"  - {len(bad)} flagged (background tinted, not white) ===\n")
    for name, b0, b1, b2 in bad:
        print(f"  bg=rgb({b0:3d},{b1:3d},{b2:3d})  {name}")

    print(f"\n=== {len(ok)} OK (clean white background) ===")
    print(f"  (sample of 5)")
    for name, b0, b1, b2 in ok[:5]:
        print(f"  bg=rgb({b0:3d},{b1:3d},{b2:3d})  {name}")

    out_path = ROOT / "scripts" / "audit_zoom_result.json"
    out_path.write_text(
        json.dumps({"bad": [n for n, _, _, _ in bad]}, indent=2),
        encoding="utf-8",
    )
    print(f"\nWritten {out_path} ({len(bad)} files flagged)")


if __name__ == "__main__":
    main()
