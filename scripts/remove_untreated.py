"""Supprime les produits qui utilisent une photo non-traitée (fond
tinté gris/bleu plutôt que blanc pur). La liste vient de
audit_zoom_result.json.

Pour chaque filename mnb_*.jpg flaggé :
  1. Cherche la const `xxxImage = productAsset("filename", ...)`
  2. Supprime cette ligne
  3. Cherche les blocs `{ ... featuredImage: xxxImage ... }` et les
     supprime entièrement (un bloc = une fiche produit)
  4. Supprime le fichier JPG dans public/shop/products/

Vérifie ensuite via typecheck que mock-products.ts est valide.
"""
import json
import re
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
MOCK_FILE = ROOT / "lib/shopify/mock-products.ts"
PHOTO_DIR = ROOT / "public/shop/products"
AUDIT_FILE = ROOT / "scripts/audit_zoom_result.json"


def main():
    audit = json.loads(AUDIT_FILE.read_text(encoding="utf-8"))
    bad_files = audit["bad"]
    print(f"Removing {len(bad_files)} products + image files...\n")

    content = MOCK_FILE.read_text(encoding="utf-8")
    deleted_products = 0
    deleted_files = 0
    not_found_in_ts = []

    for filename in bad_files:
        # 1. Trouver la const Image associée au filename
        # ex : const perleFleurRoseIrisImage = productAsset("mnb_perle_fleur_rose_iris_v1.jpg", ...);
        # ou : const lot6Img_xxx = productAsset("filename", ...);
        m = re.search(
            r'^const\s+(\w+)\s*=\s*productAsset\(\s*"' + re.escape(filename) + r'"',
            content,
            flags=re.MULTILINE,
        )
        if not m:
            not_found_in_ts.append(filename)
            continue
        var_name = m.group(1)

        # 2. Trouver et supprimer le bloc produit qui utilise cette
        #    variable (featuredImage: xxxImage). Un bloc = de `  {` à
        #    `  },` à indentation 2 spaces.
        # Pattern : on cherche `  {` puis backward search jusqu'à la
        # ligne contenant `featuredImage: var_name,`.
        # Approche : scanner ligne par ligne et identifier les blocs
        # via le compteur d'accolades.
        lines = content.split("\n")
        new_lines = []
        i = 0
        removed_product = False
        while i < len(lines):
            line = lines[i]
            # Détecter début d'un bloc produit (ligne `  {` exacte)
            if line == "  {":
                # Capturer le bloc jusqu'à `  },`
                block_end = i
                depth = 1
                j = i + 1
                while j < len(lines) and depth > 0:
                    if "{" in lines[j]:
                        depth += lines[j].count("{")
                    if "}" in lines[j]:
                        depth -= lines[j].count("}")
                    j += 1
                block = lines[i:j]
                # Vérifier si ce bloc utilise notre variable
                block_text = "\n".join(block)
                if f"featuredImage: {var_name}" in block_text or f"featuredImage:{var_name}" in block_text:
                    # Skipper ce bloc
                    i = j
                    removed_product = True
                    continue
                else:
                    new_lines.extend(block)
                    i = j
                    continue
            new_lines.append(line)
            i += 1
        if removed_product:
            content = "\n".join(new_lines)
            deleted_products += 1

        # 3. Supprimer la déclaration de variable Image
        content = re.sub(
            r'^const\s+' + re.escape(var_name) + r'\s*=\s*productAsset\([^)]*\);\s*\n',
            '',
            content,
            count=1,
            flags=re.MULTILINE,
        )

        # 4. Supprimer le fichier JPG
        photo_path = PHOTO_DIR / filename
        if photo_path.exists():
            photo_path.unlink()
            deleted_files += 1

    MOCK_FILE.write_text(content, encoding="utf-8")
    print(f"  - {deleted_products} product entries removed from mock-products.ts")
    print(f"  - {deleted_files} JPG files deleted from public/shop/products/")
    if not_found_in_ts:
        print(f"  - {len(not_found_in_ts)} files NOT FOUND in TS (deleted anyway):")
        for f in not_found_in_ts[:5]:
            print(f"     {f}")
            # Delete orphan files anyway
            p = PHOTO_DIR / f
            if p.exists():
                p.unlink()
                deleted_files += 1


if __name__ == "__main__":
    main()
