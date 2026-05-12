"""Lot pierres3 — 11 nouvelles fiches (8 pierres + 3 charmes/perles).

Source : public/shop/products/perles_a_ajouter2/<uuid>.png (fond
       transparent, mélange charmes & pierres).
Sortie : public/shop/products/mnb_*_v1.jpg (1400x1400, fond blanc)
       + 2 fragments TS injectés dans lib/shopify/mock-products.ts.

NB : la catégorie "perles" englobe maintenant les charmes (cf. refonte
     taxonomie : nœud rose, ours verre rose → catégorie perles, pas
     une catégorie séparée).
"""
from PIL import Image
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
SRC = ROOT / "public/shop/products/perles_a_ajouter2"
DST = ROOT / "public/shop/products"

# Schema : (uuid_prefix, slug, title, alt, description, descriptionHtml,
#          extra_tags, price, category, productType, option_name,
#          option_value)
ENTRIES = [
    (
        "0a6c73cc",
        "charme-noeud-rose-pastel",
        "Charme Nœud Rose Pastel",
        "Charme noeud rose pastel My Nice Bracelet",
        "Charme nœud rose pastel, fini brillant.",
        "<p>Charme en forme de petit nœud, rose pastel à fini brillant. Se glisse entre les perles ou comme point focal sur un bracelet doux.</p><p>S'accorde avec les perles nacrées, le doré rosé et les pierres roses.</p>",
        ["charme", "noeud", "rose", "pastel"],
        0.85, "perles", "Perles",
        "Couleur", "Rose pastel",
    ),
    (
        "1cc6dde9",
        "perle-magenta-etoiles-argent",
        "Perle Magenta Étoiles Argent",
        "Perle magenta etoiles argent My Nice Bracelet",
        "Perle magenta semée d'étoiles argentées brillantes.",
        "<p>Perle ronde magenta vif, parsemée d'étoiles argentées en relief. Apporte du clinquant à un rang plus sobre.</p><p>S'accorde avec l'argent, le noir et les perles cristal pour un effet nuit étoilée.</p>",
        ["rondes", "magenta", "rose", "etoiles", "argent"],
        0.85, "perles", "Perles",
        "Couleur", "Magenta étoiles",
    ),
    (
        "479b8f0e",
        "perle-jaune-mouchetee",
        "Perle Jaune Mouchetée",
        "Perle jaune mouchetee texturee My Nice Bracelet",
        "Perle jaune mate à texture mouchetée organique.",
        "<p>Perle ronde jaune soutenu, surface mouchetée non polie qui rappelle une éponge naturelle. Aspect organique, idéal pour rythmer un rang lisse.</p><p>S'associe avec le doré mat, le caramel et le blanc cassé pour une création solaire.</p>",
        ["rondes", "jaune", "mouchetee", "mate"],
        0.65, "perles", "Perles",
        "Couleur", "Jaune mouchetée",
    ),
    (
        "5923f950",
        "pierre-oeil-tigre-fonce",
        "Pierre Œil de Tigre Foncé",
        "Pierre oeil de tigre fonce My Nice Bracelet",
        "Pierre œil de tigre brun foncé aux reflets dorés, finition brillante.",
        "<p>Perles taillées dans l'œil de tigre, ici dans une version brun-foncé presque chocolat aux reflets dorés et chatoyants. Plus profonde et chic que la version caramel.</p><p>À associer avec le doré, le crème ou le rouge brique pour une création chaude et intense.</p>",
        ["oeil-de-tigre", "marron", "fonce", "dore"],
        1.20, "pierres", "Pierres semi-precieuses",
        "Pierre", "Œil de Tigre Foncé",
    ),
    (
        "8dc0162d",
        "pierre-lapis-lazuli-pyrite",
        "Pierre Lapis Lazuli Pyrite",
        "Pierre lapis lazuli pyrite My Nice Bracelet",
        "Pierre lapis lazuli bleu marine fortement piqueté d'éclats de pyrite dorée.",
        "<p>Perles taillées dans le lapis lazuli, ici dans une variante riche en inclusions de pyrite qui scintillent comme des éclats d'or naturels. Effet plus minéral et nuageux que la version unie.</p><p>À associer avec le doré, le blanc nacré ou le rouge brique pour une création précieuse.</p>",
        ["lapis-lazuli", "bleu", "marine", "pyrite"],
        1.30, "pierres", "Pierres semi-precieuses",
        "Pierre", "Lapis Lazuli Pyrite",
    ),
    (
        "97744e48",
        "pierre-grenat-rouge",
        "Pierre Grenat Rouge",
        "Pierre grenat rouge profond My Nice Bracelet",
        "Pierre grenat rouge profond, finition brillante presque vitreuse.",
        "<p>Perles taillées dans le grenat, pierre rouge profond aux reflets bordeaux. Finition très brillante qui donne un effet vitreux et précieux.</p><p>S'accorde avec le doré, le noir et l'ivoire pour une création raffinée et romantique.</p>",
        ["grenat", "rouge", "bordeaux", "brillant"],
        1.30, "pierres", "Pierres semi-precieuses",
        "Pierre", "Grenat Rouge",
    ),
    (
        "a707180f",
        "charme-ours-verre-rose",
        "Charme Ours Verre Rose",
        "Charme ours verre rose My Nice Bracelet",
        "Charme petit ours en verre transparent, intérieur rose poudré.",
        "<p>Charme en verre soufflé en forme d'ours mignon, transparent à l'extérieur et rose poudré à l'intérieur. Effet bonbon en verre, délicat et tactile.</p><p>S'accorde avec les perles nacrées, le doré rosé et les pierres roses pour une création kawaii et tendre.</p>",
        ["charme", "ours", "verre", "rose", "kawaii"],
        1.10, "perles", "Perles",
        "Couleur", "Rose verre",
    ),
    (
        "b51cd892",
        "pierre-labradorite-verte",
        "Pierre Labradorite Verte",
        "Pierre labradorite verte My Nice Bracelet",
        "Pierre labradorite teintée vert mousse aux reflets minéraux.",
        "<p>Perles taillées dans la labradorite, ici dans une teinte vert sombre veinée de noir et de jaune naturel. Reflets irisés caractéristiques.</p><p>À associer avec l'argenté, le crème ou le brun bois pour une création forestière.</p>",
        ["labradorite", "vert", "mousse", "naturelle"],
        1.10, "pierres", "Pierres semi-precieuses",
        "Pierre", "Labradorite Verte",
    ),
    (
        "bbbd431c",
        "pierre-jade-noir",
        "Pierre Jade Noir",
        "Pierre jade noir My Nice Bracelet",
        "Pierre jade noir profond aux subtiles veines vertes.",
        "<p>Perles taillées dans le jade noir, ici un noir profond traversé de fines veines vert sombre, à peine visibles. Densité visuelle forte.</p><p>S'accorde avec le doré, l'argent et les pierres claires pour un contraste graphique.</p>",
        ["jade", "noir", "vert-fonce", "naturelle"],
        1.20, "pierres", "Pierres semi-precieuses",
        "Pierre", "Jade Noir",
    ),
    (
        "e1cd79af",
        "pierre-agate-cornaline",
        "Pierre Agate Cornaline",
        "Pierre agate cornaline marron My Nice Bracelet",
        "Pierre agate cornaline marron-rouge marbrée naturellement.",
        "<p>Perles taillées dans l'agate cornaline, pierre brun-rouge marbrée de stries plus claires. Aspect chaud et terreux.</p><p>À associer avec le doré, le caramel et l'ivoire pour une création automnale.</p>",
        ["agate", "cornaline", "marron", "rouge"],
        1.10, "pierres", "Pierres semi-precieuses",
        "Pierre", "Agate Cornaline",
    ),
    (
        "f2b4ac06",
        "pierre-quartz-fume",
        "Pierre Quartz Fumé",
        "Pierre quartz fume brun My Nice Bracelet",
        "Pierre quartz fumé brun-violet brillant, presque translucide.",
        "<p>Perles taillées dans le quartz fumé, teinte brun-prune profonde avec des transparences qui laissent passer la lumière. Effet noble et discret.</p><p>S'accorde avec le doré, le crème et le rose poudré pour une création douce et chic.</p>",
        ["quartz", "fume", "brun", "violet", "translucide"],
        1.20, "pierres", "Pierres semi-precieuses",
        "Pierre", "Quartz Fumé",
    ),
]


def process_image(uuid_prefix: str, slug: str) -> str:
    candidates = list(SRC.glob(f"{uuid_prefix}*.png"))
    if not candidates:
        raise FileNotFoundError(f"Photo source introuvable pour {uuid_prefix}")
    src_path = candidates[0]

    img = Image.open(src_path).convert("RGBA")
    bg = Image.new("RGB", img.size, (255, 255, 255))
    bg.paste(img, mask=img.split()[3])

    w, h = bg.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    bg = bg.crop((left, top, left + side, top + side))
    bg = bg.resize((1400, 1400), Image.LANCZOS)

    dst_filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
    dst_path = DST / dst_filename
    bg.save(dst_path, "JPEG", quality=88, optimize=True)
    return dst_filename


def var_name(slug: str) -> str:
    parts = slug.split("-")
    return "".join([parts[0]] + [p.capitalize() for p in parts[1:]]) + "Image"


def gen_image_assets() -> str:
    lines = ["", "// ─── Lot pierres3 — 11 nouvelles fiches (mai 2026) ─────────────"]
    for uuid, slug, title, alt, *_ in ENTRIES:
        filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
        vname = var_name(slug)
        lines.append(f'const {vname} = productAsset("{filename}", "{alt}");')
    return "\n".join(lines) + "\n"


def gen_product_entries() -> str:
    lines = ["  // ─── Lot pierres3 — 11 fiches : 8 pierres + 3 perles/charmes ──"]
    for (uuid, slug, title, alt, desc, desc_html, extra_tags, price,
         category, product_type, opt_name, opt_value) in ENTRIES:
        vname = var_name(slug)
        if category == "pierres":
            tags = ["pierres", "semi-precieuses"] + extra_tags + ["naturelle", "nouveaute"]
        else:
            tags = ["perles"] + extra_tags + ["nouveaute"]
        # Dedupe en gardant ordre
        seen = set()
        tags = [t for t in tags if not (t in seen or seen.add(t))]
        tags_str = ", ".join([f'"{t}"' for t in tags])
        lines.append(f"""  {{
    id: "mock-product-{slug}",
    handle: "{slug}",
    title: "{title}",
    description: "{desc}",
    descriptionHtml:
      "{desc_html}",
    productType: "{product_type}",
    category: "{category}",
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
      {{ name: "{opt_name}", value: "{opt_value}" }},
      VRAC_PIECE_TIERS,
    ),
  }},""")
    return "\n".join(lines)


def main():
    print(f"Processing {len(ENTRIES)} photos...")
    for uuid, slug, *_ in ENTRIES:
        out = process_image(uuid, slug)
        print(f"  OK {uuid[:8]} -> {out}")

    out_dir = ROOT / "scripts" / "out"
    out_dir.mkdir(exist_ok=True)
    (out_dir / "pierres3_image_assets.tsfragment").write_text(gen_image_assets(), encoding="utf-8")
    (out_dir / "pierres3_products.tsfragment").write_text(gen_product_entries(), encoding="utf-8")
    print("\nFragments ecrits dans scripts/out/ (extension .tsfragment pour eviter tsc).")


if __name__ == "__main__":
    main()
