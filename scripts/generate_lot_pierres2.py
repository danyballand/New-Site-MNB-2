"""Lot pierres2 — 11 pierres semi-précieuses.

Source : public/shop/products/perles_a_ajouter2/*.png (fond transparent)
Sortie : public/shop/products/mnb_pierre_*_v1.jpg (1400×1400, fond blanc)
       + 2 fragments TS (image assets + product entries) à injecter
         dans lib/shopify/mock-products.ts
"""
from PIL import Image
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
SRC = ROOT / "public/shop/products/perles_a_ajouter2"
DST = ROOT / "public/shop/products"

# (uuid_prefix, slug, title, alt, description, descriptionHtml, color_tags, price)
PIERRES = [
    (
        "075868ad",
        "pierre-oeil-tigre-caramel",
        "Pierre Œil de Tigre Caramel",
        "Pierre oeil de tigre caramel My Nice Bracelet",
        "Pierre œil de tigre aux reflets caramel et miel, finition brillante.",
        "<p>Perles taillées dans l'œil de tigre, pierre brun-caramel aux reflets soyeux et chatoyants. Chaque perle présente sa propre orientation de fibres : l'effet d'un rang entier rappelle un velours doré.</p><p>S'associe avec le doré, l'ivoire et le marron foncé pour une création chaude et chic.</p>",
        ["oeil-de-tigre", "caramel", "marron", "dore"],
        1.20,
    ),
    (
        "0e539527",
        "pierre-rhodochrosite-rose-facettee",
        "Pierre Rhodochrosite Rose Facettée",
        "Pierre rhodochrosite rose facettee My Nice Bracelet",
        "Pierre rhodochrosite rose poudré, finition facettée qui attrape la lumière.",
        "<p>Perles facettées dans la rhodochrosite, pierre rose-saumon aux veines blanches et grises. Les facettes captent la lumière et donnent un éclat plus vif que les versions polies lisses.</p><p>À associer avec du doré rosé, du blanc nacré ou du vert pâle pour une création douce et lumineuse.</p>",
        ["rhodochrosite", "rose", "facettee", "naturelle"],
        1.20,
    ),
    (
        "12016c2b",
        "pierre-lave-noire",
        "Pierre de Lave Noire",
        "Pierre de lave noire poreuse My Nice Bracelet",
        "Pierre de lave volcanique noire, surface poreuse texturée.",
        "<p>Perles taillées dans la pierre de lave, noir profond avec une surface poreuse très texturée. Légère en main, idéale pour rythmer un rang de pierres polies.</p><p>S'associe avec le doré mat, le cuivre ou les bois clairs pour une création minérale et brute.</p>",
        ["lave", "noire", "porous", "mate"],
        0.95,
    ),
    (
        "3dd8e095",
        "pierre-lune-creme",
        "Pierre de Lune Crème",
        "Pierre de lune creme soyeuse My Nice Bracelet",
        "Pierre de lune crème, finition soyeuse aux légères stries naturelles.",
        "<p>Perles taillées dans la pierre de lune, teinte crème-ivoire à reflets soyeux et translucides. Chaque perle a sa propre veine naturelle, l'aspect global est doux et lumineux.</p><p>S'accorde avec le doré, le rose poudré et le bleu glacier pour une création raffinée.</p>",
        ["pierre-de-lune", "creme", "ivoire", "translucide"],
        1.20,
    ),
    (
        "4f93ce8d",
        "pierre-labradorite-grise",
        "Pierre Labradorite Grise",
        "Pierre labradorite gris fonce My Nice Bracelet",
        "Pierre labradorite gris foncé piquetée, reflets minéraux.",
        "<p>Perles taillées dans la labradorite, gris-anthracite naturellement piqueté de noir. Sous certaines lumières, on devine les reflets irisés caractéristiques de la pierre.</p><p>À associer avec l'argenté, le blanc cassé ou le bleu nuit pour une création graphique et nocturne.</p>",
        ["labradorite", "gris", "anthracite", "naturelle"],
        1.10,
    ),
    (
        "8d9f6ca9",
        "pierre-jaspe-vert-mousse",
        "Pierre Jaspe Vert Mousse",
        "Pierre jaspe vert mousse My Nice Bracelet",
        "Pierre jaspe vert mousse aux taches blanches, finition mate naturelle.",
        "<p>Perles taillées dans le jaspe, ici dans une teinte vert mousse avec des taches blanches et grises caractéristiques. Aspect terreux et organique, pas de brillant artificiel.</p><p>S'associe avec le doré mat, le bois clair ou le crème pour une création botanique et bohème.</p>",
        ["jaspe", "vert", "mousse", "mate"],
        1.10,
    ),
    (
        "989f40b5",
        "pierre-lapis-lazuli",
        "Pierre Lapis Lazuli",
        "Pierre lapis lazuli bleu marine My Nice Bracelet",
        "Pierre lapis lazuli bleu marine profond, pailletée d'or naturel.",
        "<p>Perles taillées dans le lapis lazuli, pierre bleu marine intense souvent piquetée d'inclusions dorées de pyrite. Chaque perle a ses propres reflets — l'effet d'un rang est profond et noble.</p><p>À associer avec le doré, le blanc nacré ou le rouge brique pour une création précieuse.</p>",
        ["lapis-lazuli", "bleu", "marine", "naturelle"],
        1.20,
    ),
    (
        "a02bb1b1",
        "pierre-onyx-noir-mat",
        "Pierre Onyx Noir Mat",
        "Pierre onyx noir mat My Nice Bracelet",
        "Pierre onyx noir profond, finition mate sans brillance.",
        "<p>Perles taillées dans l'onyx, pierre noir profond avec une finition mate volontaire (pas de polish). Densité visuelle forte, idéal en rang de fond ou comme contraste.</p><p>S'accorde avec le doré, l'argent ou les pierres claires comme la pierre de lune pour un contraste graphique.</p>",
        ["onyx", "noir", "mate", "naturelle"],
        0.95,
    ),
    (
        "a3b18958",
        "pierre-unakite-rose-vert",
        "Pierre Unakite Rose & Vert",
        "Pierre unakite rose et vert My Nice Bracelet",
        "Pierre unakite, mélange naturel de rose poudré et vert mousse.",
        "<p>Perles taillées dans l'unakite, pierre qui mêle naturellement le rose-saumon et le vert mousse en taches irrégulières. Chaque perle est unique par sa proportion rose/vert.</p><p>À associer avec le doré rosé, le crème ou le vert kaki pour une création terre & rose très organique.</p>",
        ["unakite", "rose", "vert", "naturelle"],
        1.20,
    ),
    (
        "b656c384",
        "pierre-howlite-gris-lilas",
        "Pierre Howlite Gris Lilas",
        "Pierre howlite gris lilas My Nice Bracelet",
        "Pierre howlite teintée gris lilas, finition lisse et mate.",
        "<p>Perles taillées dans la howlite teintée d'un gris-lilas très doux. Surface lisse et mate, idéale pour adoucir un rang de pierres plus contrastées.</p><p>S'accorde avec l'argenté, le blanc nacré et le violet poudré pour une création tendre et délicate.</p>",
        ["howlite", "gris", "lilas", "mate"],
        0.95,
    ),
    (
        "d94c1f15",
        "pierre-jaspe-rouge-brique",
        "Pierre Jaspe Rouge Brique",
        "Pierre jaspe rouge brique My Nice Bracelet",
        "Pierre jaspe rouge brique profond, finition brillante.",
        "<p>Perles taillées dans le jaspe rouge, teinte brique chaude et saturée. Finition brillante qui met en valeur la profondeur de la pierre.</p><p>À associer avec le doré, l'orange caramel ou le marron cacao pour une création automnale et chaleureuse.</p>",
        ["jaspe", "rouge", "brique", "naturelle"],
        1.10,
    ),
]


def process_image(uuid_prefix: str, slug: str) -> str:
    """Resize PNG → JPG 1400×1400 fond blanc, retourne le filename de sortie."""
    candidates = list(SRC.glob(f"{uuid_prefix}*.png"))
    if not candidates:
        raise FileNotFoundError(f"Photo source introuvable pour {uuid_prefix}")
    src_path = candidates[0]

    img = Image.open(src_path).convert("RGBA")

    # Compose sur fond blanc pour aplatir la transparence (la photo
    # source a un alpha qui montre l'arrière-plan de la page).
    bg = Image.new("RGB", img.size, (255, 255, 255))
    bg.paste(img, mask=img.split()[3])  # use alpha channel as mask

    # Center-crop carré : prendre le plus petit côté.
    w, h = bg.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    bg = bg.crop((left, top, left + side, top + side))

    # Resize final 1400×1400.
    bg = bg.resize((1400, 1400), Image.LANCZOS)

    dst_filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
    dst_path = DST / dst_filename
    bg.save(dst_path, "JPEG", quality=88, optimize=True)
    return dst_filename


def var_name(slug: str) -> str:
    """Convert 'pierre-jaspe-rouge-brique' -> 'pierreJaspeRougeBriqueImage'."""
    parts = slug.split("-")
    return "".join([parts[0]] + [p.capitalize() for p in parts[1:]]) + "Image"


def gen_image_assets() -> str:
    lines = ["", "// ─── Lot pierres2 — 11 pierres semi-précieuses ─────────────────"]
    for uuid, slug, title, alt, *_ in PIERRES:
        filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
        vname = var_name(slug)
        lines.append(f'const {vname} = productAsset("{filename}", "{alt}");')
    return "\n".join(lines) + "\n"


def gen_product_entries() -> str:
    lines = ["  // ─── Lot pierres2 — 11 pierres semi-précieuses (mai 2026) ──────"]
    for uuid, slug, title, alt, desc, desc_html, color_tags, price in PIERRES:
        vname = var_name(slug)
        # Tags : pierres + semi-precieuses + color_tags + naturelle + nouveaute
        tags = ["pierres", "semi-precieuses"] + color_tags + ["nouveaute"]
        # Dédupliquer en gardant l'ordre
        seen = set()
        tags = [t for t in tags if not (t in seen or seen.add(t))]
        tags_str = ", ".join([f'"{t}"' for t in tags])

        # Pierre name : capitalise et nettoie le slug pour le selectedOption
        pierre_value = title.replace("Pierre ", "").replace("&", "et")

        lines.append(f"""  {{
    id: "mock-product-{slug}",
    handle: "{slug}",
    title: "{title}",
    description: "{desc}",
    descriptionHtml:
      "{desc_html}",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: [{tags_str}],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("{price:.2f}"),
    compareAtPrice: null,
    featuredImage: {vname},
    images: [{vname}],
    variants: pieceChoiceVariantsFromUnitPrice(
      "{slug}",
      {price},
      400,
      {{ name: "Pierre", value: "{pierre_value}" }},
      VRAC_PIECE_TIERS,
    ),
  }},""")
    return "\n".join(lines)


def main():
    print(f"Processing {len(PIERRES)} photos…")
    for uuid, slug, *_ in PIERRES:
        out = process_image(uuid, slug)
        print(f"  OK {uuid[:8]} -> {out}")

    assets_ts = gen_image_assets()
    products_ts = gen_product_entries()

    out_dir = ROOT / "scripts" / "out"
    out_dir.mkdir(exist_ok=True)
    (out_dir / "pierres2_image_assets.ts").write_text(assets_ts, encoding="utf-8")
    (out_dir / "pierres2_products.ts").write_text(products_ts, encoding="utf-8")
    print(f"\nTS fragments written:")
    print(f"  - {out_dir}/pierres2_image_assets.ts ({len(assets_ts)} chars)")
    print(f"  - {out_dir}/pierres2_products.ts ({len(products_ts)} chars)")


if __name__ == "__main__":
    main()
