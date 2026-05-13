"""Migrate the entire catalog to the new pricing scheme:

  - perles / pierres : grille catalogue unifiee (1.20 → 0.50 €/u
    selon la taille du lot 20/50/100/250/500). Tous les produits
    bascules sur `vracPiecePricingVariants` helper.
  - figurines / porte-cles : prix fixe 6.99 € (toplevel + chaque
    variant character).

Lit lib/shopify/mock-products.ts, parse les blocs produits, applique
la transformation par categorie, et reecrit le fichier.
"""
import re
from pathlib import Path

PATH = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2/lib/shopify/mock-products.ts")

content = PATH.read_text(encoding="utf-8")

# ─── Split into top-level product blocks ─────────────────────────
# On localise le tableau mockProducts ; chaque produit est un bloc
# indenté à 2 espaces, démarrant par "  {" et finissant par "  },".
ARRAY_START = "export const mockProducts: ShopProduct[] = [\n"
i = content.find(ARRAY_START) + len(ARRAY_START)
head = content[:i]
rest = content[i:]
# La fin du tableau est le "\n];\n" à la fin du fichier
last_close = rest.rfind("\n];")
tail = rest[last_close:]
body = rest[:last_close]


# Split par blocs : on parcourt char par char en suivant la
# profondeur d'accolades pour identifier chaque produit (les blocs
# imbriquent variants/selectedOptions etc.)
def split_top_blocks(text: str):
    blocks = []
    depth = 0
    start = None
    i = 0
    while i < len(text):
        c = text[i]
        if c == "{":
            if depth == 0:
                start = i
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0 and start is not None:
                # avancer jusqu'a la virgule de fermeture qui suit
                end = i + 1
                while end < len(text) and text[end] in ",\n":
                    end += 1
                blocks.append((start, end, text[start:end]))
                start = None
        i += 1
    return blocks


blocks = split_top_blocks(body)
print(f"Found {len(blocks)} product blocks")

# ─── Transformations par catégorie ───────────────────────────────
def migrate_block(block: str) -> tuple[str, str]:
    """Retourne (new_block, category) ou (block, 'unchanged') si rien."""
    cat_match = re.search(r'category:\s*"([^"]+)"', block)
    if not cat_match:
        return block, "unchanged"
    category = cat_match.group(1)

    if category in ("perles", "pierres"):
        # 1. Le top-level `price: money("X.XX")` devient money("1.20")
        # (= prix d'appel "à partir de 1,20 €" affiché sur la card)
        block = re.sub(
            r'(    price:\s*)money\("[^"]+"\)',
            r'\1money("1.20")',
            block,
            count=1,
        )
        # 2. Remplacer l'appel pieceChoiceVariantsFromUnitPrice(...)
        # par vracPiecePricingVariants(slug, stock, option).
        # Le call multi-ligne :
        #   variants: pieceChoiceVariantsFromUnitPrice(
        #     "slug",
        #     1.2,
        #     400,
        #     { name: "Pierre", value: "..." },
        #     VRAC_PIECE_TIERS,
        #   ),
        # ou inline :
        #   variants: pieceChoiceVariantsFromUnitPrice("slug", 0.9, 120, { name: "Couleur", value: "Pastel mix" }),
        # On extrait : baseId + stock + option, et on régénère le bloc.
        # Pattern multiligne robuste avec re.DOTALL.
        def repl_variants(m: re.Match) -> str:
            args = m.group(1)
            # Parse args : "baseId", unitPrice, stock, optionObj[, tiers]
            # On va matcher les 4 premiers args (baseId, _unitPrice, stock, option).
            # baseId : "..." entre guillemets
            m1 = re.search(r'"([^"]+)"', args)
            base_id = m1.group(1) if m1 else "UNKNOWN"
            # Skip baseId, extraire les nombres et l'option
            after_base = args[m1.end():] if m1 else args
            # _unitPrice (number) puis stock (number)
            nums = re.findall(r'\b(\d+(?:\.\d+)?)\b', after_base)
            # stock = 2e nombre dans la liste (unitPrice est le 1er)
            stock = nums[1] if len(nums) >= 2 else "100"
            # option : { name: "X", value: "Y" } ou rien
            opt_match = re.search(r'\{\s*name:[^}]+\}', args)
            option_str = opt_match.group(0) if opt_match else None
            # Reconstruire le call
            if option_str:
                return (
                    f'variants: vracPiecePricingVariants(\n'
                    f'      "{base_id}",\n'
                    f'      {stock},\n'
                    f'      {option_str},\n'
                    f'    ),'
                )
            return (
                f'variants: vracPiecePricingVariants(\n'
                f'      "{base_id}",\n'
                f'      {stock},\n'
                f'    ),'
            )

        block = re.sub(
            r'variants:\s*pieceChoiceVariantsFromUnitPrice\((.*?)\),',
            repl_variants,
            block,
            count=1,
            flags=re.DOTALL,
        )
        return block, category

    elif category in ("figurines", "porte-cles"):
        # Tous les `money("X.XX")` du bloc → money("6.99")
        block = re.sub(
            r'money\("[\d.]+"\)',
            'money("6.99")',
            block,
        )
        return block, category

    return block, category


new_body_parts = []
prev_end = 0
counts = {"perles": 0, "pierres": 0, "figurines": 0, "porte-cles": 0, "other": 0}
for start, end, block in blocks:
    new_body_parts.append(body[prev_end:start])  # whitespace/commentaires entre blocs
    new_block, cat = migrate_block(block)
    new_body_parts.append(new_block)
    if cat in counts:
        counts[cat] += 1
    else:
        counts["other"] += 1
    prev_end = end
new_body_parts.append(body[prev_end:])

new_content = head + "".join(new_body_parts) + tail
PATH.write_text(new_content, encoding="utf-8")
print("Migration done. Counts by category:")
for k, v in counts.items():
    print(f"  {k}: {v}")
