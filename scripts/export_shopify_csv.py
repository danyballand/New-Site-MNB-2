"""Convert lib/shopify/mock-products.ts → Shopify products CSV.

Output : scripts/out/shopify_products_import.csv
Format : Shopify official product CSV spec (en-tête + 1 ligne par
variant, première ligne d'un produit porte les colonnes Title /
Body / etc., les variants suivants n'ont que Handle + variant data).

Image Src laissé VIDE — les photos restent gérées par le front
Next.js (override de `mapImage()` côté client.ts qui calcule l'URL
locale à partir du handle). Pas d'upload Shopify donc pas de coût
storage + pas de problèmes de désync.

Inventory : tracker = "shopify", policy = "deny" (pas d'oversell).
"""
import csv
import json
import re
import subprocess
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
OUT = ROOT / "scripts/out/shopify_products_import.csv"
OUT.parent.mkdir(exist_ok=True)

# Base URL pour les images : raw.githubusercontent.com (le repo est
# public, le commit pinné évite que les URLs bougent si on push à
# nouveau). Shopify download chaque URL au moment de l'import et
# upload sur son CDN — après ça, les URLs GitHub ne sont plus
# consultées, donc même si on change/supprime ces fichiers c'est OK.
IMAGE_BASE_URL = (
    "https://raw.githubusercontent.com/danyballand/New-Site-MNB-2/"
    "claude/lots-perles-taxonomy/public/shop/products"
)

# ─── Étape 1 : extraire les données depuis le TS via Node ───────
# Plus fiable que de parser le TS en regex — on exécute Node avec
# tsx pour évaluer mock-products.ts et dumper en JSON.
# NB : on écrit le JSON dans un fichier temp et on le relit en
# UTF-8 explicite. Avant : `console.log` + `capture_output=True`
# captait stdout via l'encoding système (cp1252 sur Windows), ce qui
# corrompait tous les caractères non-ASCII (em-dash, accents, etc.).
# Le passage par fichier intermédiaire évite complètement ce piège.
DUMPER_TS = ROOT / "scripts/dump_products.mts"
DUMP_JSON = ROOT / "scripts/out/products_dump.json"
DUMPER_TS.write_text(f"""\
import {{ writeFileSync }} from "fs";
import {{ mockProducts }} from "../lib/shopify/mock-products.ts";
writeFileSync("{DUMP_JSON.as_posix()}", JSON.stringify(mockProducts), {{ encoding: "utf-8" }});
""", encoding="utf-8")

print("Dumping mockProducts to JSON via tsx...")
result = subprocess.run(
    ["npx", "--yes", "tsx", str(DUMPER_TS)],
    cwd=ROOT,
    shell=True,
)
if result.returncode != 0:
    raise SystemExit(result.returncode)
with DUMP_JSON.open(encoding="utf-8") as f:
    products = json.load(f)
DUMP_JSON.unlink()
print(f"  loaded {len(products)} products with {sum(len(p['variants']) for p in products)} variants total")

# ─── Étape 2 : générer le CSV Shopify ─────────────────────────────
HEADERS = [
    "Handle", "Title", "Body (HTML)", "Vendor", "Type", "Tags",
    "Published",
    "Option1 Name", "Option1 Value", "Option2 Name", "Option2 Value",
    "Option3 Name", "Option3 Value",
    "Variant SKU", "Variant Grams", "Variant Inventory Tracker",
    "Variant Inventory Qty", "Variant Inventory Policy",
    "Variant Fulfillment Service",
    "Variant Price", "Variant Compare At Price",
    "Variant Requires Shipping", "Variant Taxable",
    "Variant Barcode",
    "Image Src", "Image Position", "Image Alt Text",
    "Gift Card",
    "SEO Title", "SEO Description",
    "Variant Image", "Variant Weight Unit", "Variant Tax Code",
    "Cost per item",
    "Status",
]

def clean(text: str) -> str:
    """Remplace caractères qui cassent le CSV (newlines internes, etc.)."""
    if text is None:
        return ""
    return text.replace("\r", " ").replace("\n", " ").strip()


def variant_options(variant):
    """Retourne (opt1_name, opt1_value, opt2_name, opt2_value, opt3_name, opt3_value)."""
    opts = variant.get("selectedOptions", [])
    result = []
    for i in range(3):
        if i < len(opts):
            result.extend([opts[i].get("name", ""), opts[i].get("value", "")])
        else:
            result.extend(["", ""])
    return result


# utf-8-sig (= UTF-8 + BOM) : sans le BOM en début de fichier, Shopify
# devine Latin-1 et mange tous les accents. Symptôme classique : "é"
# devient "Ã©", "è" devient "Ã¨", etc. Le BOM force la lecture en UTF-8.
with OUT.open("w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f, quoting=csv.QUOTE_MINIMAL)
    writer.writerow(HEADERS)

    for product in products:
        handle = product["handle"]
        title = clean(product["title"])
        body_html = product.get("descriptionHtml") or product.get("description", "")
        body_html = clean(body_html)
        product_type = product.get("productType", "")
        tags = ", ".join(product.get("tags", []))
        # Status : "active" si availableForSale, sinon "draft"
        status = "active" if product.get("availableForSale", True) else "draft"
        published = "TRUE" if product.get("availableForSale", True) else "FALSE"

        variants = product["variants"]
        if not variants:
            # Edge case : produit sans variant → ligne unique avec prix top-level
            price = product["price"]["amount"]
            writer.writerow([
                handle, title, body_html, "My Nice Bracelet", product_type, tags,
                published,
                "Title", "Default Title", "", "", "", "",
                f"mnb-{handle}", "0", "shopify",
                str(product.get("totalInventory") or 100), "deny",
                "manual",
                price, "",
                "TRUE", "TRUE", "",
                "", "", "",
                "FALSE",
                "", "",
                "", "g", "",
                "",
                status,
            ])
            continue

        for i, variant in enumerate(variants):
            opt1n, opt1v, opt2n, opt2v, opt3n, opt3v = variant_options(variant)
            price = variant["price"]["amount"]
            compare_at = variant.get("compareAtPrice", {}).get("amount", "") if variant.get("compareAtPrice") else ""
            stock = variant.get("quantityAvailable") or 0
            sku = variant["id"].replace("mock-variant-", "mnb-")

            if i == 0:
                # Image Src : on utilise l'URL réelle du featuredImage
                # du produit (lue depuis le mock), pas la convention
                # naming. Certains vieux produits ne suivent pas le
                # pattern `mnb_<handle>_v1.jpg` (ex. perles-bonbon-paris
                # utilise mnb_perle_cube_transparent_vert_*).
                featured_url = product.get("featuredImage", {}).get("url", "")
                # featured_url ressemble à "/shop/products/mnb_xxx.jpg"
                # → on construit l'URL GitHub raw correspondante.
                image_filename = featured_url.replace("/shop/products/", "")
                image_url = f"{IMAGE_BASE_URL}/{image_filename}" if image_filename else ""
                image_alt = f"{title} - My Nice Bracelet"

                # Première ligne du produit : info produit + premier variant
                writer.writerow([
                    handle, title, body_html, "My Nice Bracelet", product_type, tags,
                    published,
                    opt1n, opt1v, opt2n, opt2v, opt3n, opt3v,
                    sku, "0", "shopify",
                    str(stock), "deny",
                    "manual",
                    price, compare_at,
                    "TRUE", "TRUE", "",
                    image_url, "1", image_alt,  # Image Src + Position + Alt
                    "FALSE",
                    "", "",
                    "", "g", "",
                    "",
                    status,
                ])
            else:
                # Lignes suivantes du même produit : Handle + données variant
                writer.writerow([
                    handle, "", "", "", "", "",
                    "",
                    opt1n, opt1v, opt2n, opt2v, opt3n, opt3v,
                    sku, "0", "shopify",
                    str(stock), "deny",
                    "manual",
                    price, compare_at,
                    "TRUE", "TRUE", "",
                    "", "", "",
                    "",
                    "", "",
                    "", "g", "",
                    "",
                    "",
                ])

# Cleanup le dumper TS
DUMPER_TS.unlink()
size_kb = OUT.stat().st_size / 1024
print(f"\nOK CSV written : {OUT}")
print(f"   {size_kb:.1f} KB | {sum(len(p['variants']) or 1 for p in products)} rows total")
