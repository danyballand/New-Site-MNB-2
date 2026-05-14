"""Upload les photos produits locales (public/shop/products/mnb_*.jpg)
vers les produits Shopify correspondants via Admin API.

Pré-requis :
  - .env.local contient SHOPIFY_STORE_DOMAIN + SHOPIFY_ADMIN_ACCESS_TOKEN
  - Les produits sont déjà importés sur Shopify (handles identiques)
  - Les fichiers locaux suivent la convention mnb_<handle>_v1.jpg

Algo :
  1. GET /admin/api/.../products.json → mapping handle → product_id
  2. Pour chaque handle dans notre catalogue local :
       - lire mnb_<handle>_v1.jpg en base64
       - POST /admin/api/.../products/{id}/images.json (avec attachment)
  3. Throttle ~30 calls/min pour respecter le rate limit Shopify Basic.

Idempotence : si une image existe déjà pour le produit, l'API la
réutilise sans dupliquer (Shopify dedupe sur le hash interne).
"""
import base64
import json
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
PHOTO_DIR = ROOT / "public/shop/products"
API_VERSION = "2025-10"

# ─── Charger env ────────────────────────────────────────────────
env = {}
for line in (ROOT / ".env.local").read_text(encoding="utf-8").splitlines():
    line = line.strip()
    if line and not line.startswith("#") and "=" in line:
        k, v = line.split("=", 1)
        env[k] = v.strip()

DOMAIN = env["SHOPIFY_STORE_DOMAIN"].replace("https://", "").rstrip("/")
ADMIN_TOKEN = env.get("SHOPIFY_ADMIN_ACCESS_TOKEN", "").strip()
if not ADMIN_TOKEN:
    raise SystemExit("SHOPIFY_ADMIN_ACCESS_TOKEN missing in .env.local")

BASE = f"https://{DOMAIN}/admin/api/{API_VERSION}"
HEADERS = {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": ADMIN_TOKEN,
}


def api_get(path: str) -> dict:
    req = urllib.request.Request(f"{BASE}{path}", headers=HEADERS, method="GET")
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def api_post(path: str, body: dict) -> dict:
    req = urllib.request.Request(
        f"{BASE}{path}",
        data=json.dumps(body).encode("utf-8"),
        headers=HEADERS,
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


# ─── 1. Mapping handle → product_id (pagination cursor-based) ─────
print("Fetching product list from Shopify Admin...")
handle_to_id: dict[str, int] = {}
url = f"/products.json?limit=250&fields=id,handle"
total_pages = 0
while url:
    req = urllib.request.Request(f"{BASE}{url}", headers=HEADERS, method="GET")
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        link_header = resp.headers.get("Link", "")
    for p in data.get("products", []):
        handle_to_id[p["handle"]] = p["id"]
    total_pages += 1
    # Pagination via Link header
    next_match = re.search(r'<([^>]+)>;\s*rel="next"', link_header)
    if next_match:
        url = next_match.group(1).replace(f"https://{DOMAIN}/admin/api/{API_VERSION}", "")
    else:
        url = None
print(f"  loaded {len(handle_to_id)} products from Shopify\n")

# ─── 2. Upload pour chaque handle local ─────────────────────────
uploaded = 0
skipped = 0
errors = 0
photos = sorted(PHOTO_DIR.glob("mnb_*.jpg"))

for photo_path in photos:
    # Reconstituer le handle depuis le filename : mnb_perle_xxx_v1.jpg → perle-xxx
    stem = photo_path.stem  # mnb_perle_xxx_v1
    name = stem[len("mnb_"):]  # perle_xxx_v1
    name = re.sub(r"_v\d+$", "", name)  # perle_xxx
    handle = name.replace("_", "-")

    product_id = handle_to_id.get(handle)
    if not product_id:
        # produit pas sur Shopify (peut-être supprimé / pas importé)
        skipped += 1
        continue

    # Lire en base64
    img_b64 = base64.b64encode(photo_path.read_bytes()).decode("ascii")

    body = {
        "image": {
            "attachment": img_b64,
            "filename": photo_path.name,
            "alt": f"{handle} - My Nice Bracelet",
        }
    }

    try:
        api_post(f"/products/{product_id}/images.json", body)
        uploaded += 1
        if uploaded % 10 == 0:
            print(f"  uploaded {uploaded}/{len(photos)}...")
        # Throttle : 2 calls/sec max = 120/min, sous le rate limit Shopify Basic (40/min API legacy, 2 req/sec REST = OK)
        time.sleep(0.5)
    except urllib.error.HTTPError as e:
        body_err = e.read().decode("utf-8")[:300]
        print(f"  ERR {handle}: {e.code} {body_err}")
        errors += 1
        if e.code == 429:  # rate limit
            print("  rate limit hit, waiting 30s...")
            time.sleep(30)

print()
print(f"Done. uploaded={uploaded} skipped={skipped} errors={errors}")
