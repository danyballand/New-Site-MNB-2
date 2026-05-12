"""Lot pierres4 — 33 nouvelles fiches (4 pierres + 13 charmes + 16 perles).

Source : public/shop/products/perles_a_ajouter2/<uuid>.png (fond
       transparent, mélange charmes / perles / pierres).
Sortie : public/shop/products/mnb_*_v1.jpg (1400x1400, fond blanc)
       + 2 fragments TS injectés dans lib/shopify/mock-products.ts.
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
    # ─── CHARMES (catégorie perles) ────────────────────────────────
    (
        "0dd05fad", "charme-ours-magenta", "Charme Ours Magenta",
        "Charme ours resine magenta My Nice Bracelet",
        "Charme petit ours en résine magenta saturé, finition brillante.",
        "<p>Charme en forme d'ours en résine d'un magenta vif et brillant. Plein, sans transparence, idéal comme point focal sur un bracelet pastel ou en accent coloré sur un rang clair.</p><p>S'accorde avec le doré, l'argenté et les perles roses pour une création kawaii et énergique.</p>",
        ["charme", "ours", "magenta", "fuchsia", "kawaii"],
        0.95, "perles", "Perles", "Style", "Ours magenta",
    ),
    (
        "1c822559", "charme-coeur-violet-glitter", "Charme Cœur Violet Glitter",
        "Charme coeur violet glitter My Nice Bracelet",
        "Charme cœur évidé en résine violet pailleté.",
        "<p>Charme en forme de gros cœur évidé, résine translucide saupoudrée de paillettes violettes et dorées. Effet bonbon glacé, transparence et brillance.</p><p>À associer avec les perles cristal, l'argenté et le rose pour une création romantique.</p>",
        ["charme", "coeur", "violet", "glitter", "paillete"],
        1.10, "perles", "Perles", "Style", "Cœur violet glitter",
    ),
    (
        "37fe498e", "charme-lettre-b-fuchsia", "Charme Lettre B Fuchsia",
        "Charme lettre B fuchsia My Nice Bracelet",
        "Charme lettre B en résine fuchsia brillante.",
        "<p>Charme alphabet en forme de lettre B, résine fuchsia brillante avec léger débordement coloré sur les contours. Personnalise un bracelet avec une initiale.</p><p>S'accorde avec n'importe quelle base (perles nacrées, pastel, cristal) — la lettre devient le point focal.</p>",
        ["charme", "lettre", "alphabet", "B", "fuchsia"],
        1.05, "perles", "Perles", "Style", "Lettre B fuchsia",
    ),
    (
        "514953a9", "charme-noeud-fuchsia", "Charme Nœud Fuchsia",
        "Charme noeud fuchsia My Nice Bracelet",
        "Charme nœud résine fuchsia vif, finition brillante.",
        "<p>Charme en forme de petit nœud, résine fuchsia vif à finition brillante. Version plus saturée que le nœud rose pastel, pour un effet plus pop.</p><p>S'accorde avec le noir, l'argenté ou les perles cristal pour une création girly punchy.</p>",
        ["charme", "noeud", "fuchsia", "rose"],
        0.85, "perles", "Perles", "Style", "Nœud fuchsia",
    ),
    (
        "5944dc26", "charme-coeur-verre-rose", "Charme Cœur Verre Rose",
        "Charme coeur verre rose My Nice Bracelet",
        "Charme cœur en verre, intérieur rose vif inséré.",
        "<p>Charme en verre transparent en forme de cœur, avec un cœur fuchsia inséré à l'intérieur. Effet bonbon en verre, double couche transparent + couleur.</p><p>À associer avec les perles nacrées, le doré et les pierres roses pour une création tendre et lumineuse.</p>",
        ["charme", "coeur", "verre", "rose", "fuchsia"],
        1.05, "perles", "Perles", "Style", "Cœur verre rose",
    ),
    (
        "7b012298", "charme-fleur-framboise", "Charme Fleur Framboise",
        "Charme fleur framboise My Nice Bracelet",
        "Charme fleur cinq pétales en résine framboise brillante.",
        "<p>Charme en forme de petite fleur à cinq pétales, résine d'un rouge-framboise profond et brillant. Forme stylisée façon bande dessinée.</p><p>S'accorde avec le vert, le crème et le doré pour une création botanique chaude.</p>",
        ["charme", "fleur", "framboise", "rouge", "rose"],
        0.80, "perles", "Perles", "Style", "Fleur framboise",
    ),
    (
        "7efbfe72", "charme-lettre-m-fuchsia", "Charme Lettre M Fuchsia",
        "Charme lettre M fuchsia My Nice Bracelet",
        "Charme lettre M en résine fuchsia brillante.",
        "<p>Charme alphabet en forme de lettre M (ou W selon orientation), résine fuchsia brillante. Personnalise un bracelet avec une initiale.</p><p>S'accorde avec n'importe quelle base — la lettre devient le point focal.</p>",
        ["charme", "lettre", "alphabet", "M", "fuchsia"],
        1.05, "perles", "Perles", "Style", "Lettre M fuchsia",
    ),
    (
        "a0a024a3", "charme-fleur-cristal-rose", "Charme Fleur Cristal Rose",
        "Charme fleur cristal rose My Nice Bracelet",
        "Charme fleur cinq pétales en cristal rose facetté.",
        "<p>Charme en forme de fleur à cinq pétales taillés dans un cristal rose translucide et facetté. Chaque pétale capte la lumière comme un petit bijou.</p><p>S'accorde avec le doré rosé, les perles nacrées et l'argenté pour une création élégante et féminine.</p>",
        ["charme", "fleur", "cristal", "rose", "facette"],
        1.10, "perles", "Perles", "Style", "Fleur cristal rose",
    ),
    (
        "d30796ad", "charme-ours-verre-magenta", "Charme Ours Verre Magenta",
        "Charme ours verre magenta My Nice Bracelet",
        "Charme ours en verre, intérieur magenta vif inséré.",
        "<p>Charme en verre transparent en forme d'ours mignon, avec un cœur magenta vif à l'intérieur. Version plus saturée que le rose poudré, pour un effet plus pop.</p><p>S'accorde avec les perles nacrées, l'argenté et le noir pour une création kawaii et punchy.</p>",
        ["charme", "ours", "verre", "magenta", "fuchsia"],
        1.10, "perles", "Perles", "Style", "Ours verre magenta",
    ),
    (
        "d7243eaa", "charme-etoile-verre-rose", "Charme Étoile Verre Rose",
        "Charme etoile verre rose My Nice Bracelet",
        "Charme étoile en verre, intérieur rose poudré inséré.",
        "<p>Charme en verre transparent en forme d'étoile à cinq branches, avec une étoile rose poudré insérée à l'intérieur. Effet bonbon, double couche transparent + couleur.</p><p>À associer avec les perles nacrées, le doré et les pierres roses pour une création douce et nocturne.</p>",
        ["charme", "etoile", "verre", "rose"],
        1.05, "perles", "Perles", "Style", "Étoile verre rose",
    ),
    (
        "f8009eed", "charme-lettre-c-irisee", "Charme Lettre C Irisée",
        "Charme lettre C irisee My Nice Bracelet",
        "Charme lettre C en résine irisée nacrée.",
        "<p>Charme alphabet en forme de lettre C, résine aux reflets irisés rose et doré qui changent selon la lumière. Effet bijou délicat.</p><p>S'accorde avec les perles nacrées, le doré rosé et le crème.</p>",
        ["charme", "lettre", "alphabet", "C", "irise", "nacre"],
        1.05, "perles", "Perles", "Style", "Lettre C irisée",
    ),
    (
        "f89358d8", "charme-trio-spheres-fuchsia", "Charme Trio Sphères Fuchsia",
        "Charme trio spheres fuchsia My Nice Bracelet",
        "Charme trio de petites sphères fuchsia en triangle.",
        "<p>Charme composé de trois petites sphères fuchsia disposées en triangle autour d'un anneau central. Effet rythmique, idéal pour casser un rang lisse.</p><p>S'accorde avec les perles cristal, le doré et le noir pour une création graphique.</p>",
        ["charme", "trio", "spheres", "fuchsia", "rose"],
        0.95, "perles", "Perles", "Style", "Trio sphères",
    ),
    (
        "fbb29465", "charme-lapin-fuchsia", "Charme Lapin Fuchsia",
        "Charme lapin fuchsia My Nice Bracelet",
        "Charme petit lapin en résine fuchsia brillante.",
        "<p>Charme en forme de petit lapin assis, résine fuchsia vif et brillante. Style kawaii, plein sans transparence.</p><p>S'accorde avec les perles nacrées, le blanc et l'argenté pour une création tendre et joueuse.</p>",
        ["charme", "lapin", "fuchsia", "kawaii", "animal"],
        1.00, "perles", "Perles", "Style", "Lapin fuchsia",
    ),
    # ─── PERLES rondes / cubes / divers (catégorie perles) ──────────
    (
        "0c59c243", "perle-cube-mauve-translucide", "Perle Cube Mauve Translucide",
        "Perle cube mauve translucide My Nice Bracelet",
        "Perle cube verre mauve clair, légèrement translucide.",
        "<p>Perle cubique en verre mauve aux contours adoucis. Translucidité partielle qui laisse passer la lumière, effet doux et mat.</p><p>S'accorde avec le doré, le crème et les perles cristal pour une création apaisée.</p>",
        ["cube", "mauve", "violet", "translucide", "verre"],
        0.65, "perles", "Perles", "Couleur", "Mauve translucide",
    ),
    (
        "28483ffa", "perle-rose-fluo-marbree", "Perle Rose Fluo Marbrée",
        "Perle rose fluo marbree My Nice Bracelet",
        "Perle ronde rose fluo marbrée de blanc, finition mate.",
        "<p>Perle ronde au rose fluo nuagé de blanc, surface mate et facettée. Effet marbré naturel, comme une dragée artisanale.</p><p>S'accorde avec le blanc, l'argenté et les pastels pour une création douce et fun.</p>",
        ["rondes", "rose", "fluo", "marbree", "mate"],
        0.55, "perles", "Perles", "Couleur", "Rose fluo marbrée",
    ),
    (
        "290929c9", "perle-tube-verre-rose", "Perle Tube Verre Rose",
        "Perle tube verre rose My Nice Bracelet",
        "Perle tube en verre transparent avec cylindre rose inséré.",
        "<p>Perle tubulaire en verre transparent, abritant un cylindre rose poudré à l'intérieur. Double couche, effet vitrine miniature.</p><p>S'associe avec les perles rondes nacrées et le doré rosé pour une création tendre et originale.</p>",
        ["tube", "verre", "rose", "cylindre", "transparent"],
        0.70, "perles", "Perles", "Couleur", "Tube rose",
    ),
    (
        "353932a6", "perle-ronde-magenta-brillante", "Perle Ronde Magenta Brillante",
        "Perle ronde magenta brillante My Nice Bracelet",
        "Perle ronde magenta vif, finition très brillante.",
        "<p>Perle ronde d'un magenta saturé à finition très brillante. Couleur dense, pour un effet pop sur un rang.</p><p>S'accorde avec l'argenté, le noir et les perles cristal pour une création énergique.</p>",
        ["rondes", "magenta", "rose", "brillante"],
        0.55, "perles", "Perles", "Couleur", "Magenta brillant",
    ),
    (
        "4f8ad5a2", "perle-cylindre-verre-rose-poudre", "Perle Cylindre Verre Rose Poudré",
        "Perle cylindre verre rose poudre My Nice Bracelet",
        "Perle cylindre verre transparent avec cœur rose poudré.",
        "<p>Perle cylindrique en verre transparent, traversée par un cœur de couleur rose poudré. Effet de profondeur, le verre amplifie la couleur centrale.</p><p>S'accorde avec les perles nacrées et le doré pour une création raffinée.</p>",
        ["cylindre", "verre", "rose", "poudre", "transparent"],
        0.75, "perles", "Perles", "Couleur", "Cylindre rose poudré",
    ),
    (
        "5adbd05c", "perle-cube-rose-poudre", "Perle Cube Rose Poudré",
        "Perle cube rose poudre My Nice Bracelet",
        "Perle cubique rose poudré, finition brillante.",
        "<p>Perle cubique d'un rose poudré tendre et brillant. Aux arêtes adoucies, dégage une douceur très portable.</p><p>S'accorde avec le doré rosé, le crème et les pastels pour une création romantique.</p>",
        ["cube", "rose", "poudre", "brillant"],
        0.55, "perles", "Perles", "Couleur", "Rose poudré",
    ),
    (
        "628087cc", "perle-verre-transparente-rose", "Perle Verre Transparente Rose",
        "Perle verre transparente rose My Nice Bracelet",
        "Perle ronde verre transparent rose, cœur blanc.",
        "<p>Perle ronde en verre transparent légèrement teinté rose, abritant une perle blanche à l'intérieur. Effet bulle de verre, double couche.</p><p>S'accorde avec les perles nacrées et l'argenté.</p>",
        ["rondes", "verre", "transparent", "rose"],
        0.65, "perles", "Perles", "Couleur", "Transparent rose",
    ),
    (
        "6759ce21", "perle-olive-marbree-saumon", "Perle Olive Marbrée Saumon",
        "Perle olive marbree saumon My Nice Bracelet",
        "Perle ovale saumon nuancée de blanc, effet marbré naturel.",
        "<p>Perle de forme ovale (olive), surface marbrée mêlant saumon et blanc en stries naturelles. Aspect organique, chaque perle est unique.</p><p>S'associe avec le doré, le crème et le rose poudré.</p>",
        ["olive", "ovale", "saumon", "rose", "marbree"],
        0.65, "perles", "Perles", "Couleur", "Saumon marbré",
    ),
    (
        "83d34107", "perle-rondelle-rose-pandora", "Perle Rondelle Rose Pandora",
        "Perle rondelle rose noire rouge My Nice Bracelet",
        "Perle rondelle rose pastel cerclée de noir, gros trou central.",
        "<p>Perle rondelle (donut) au format pandora-like : rose pastel sur les côtés, cerclage noir, et trou central rouge. Style charm bracelet.</p><p>S'accorde avec les chaînes argent et les perles fines pour un effet bijou statement.</p>",
        ["rondelle", "donut", "rose", "pandora", "noir"],
        0.85, "perles", "Perles", "Couleur", "Rose pandora",
    ),
    (
        "8d2acb5e", "perle-ronde-noire-brillante", "Perle Ronde Noire Brillante",
        "Perle ronde noire brillante My Nice Bracelet",
        "Perle ronde noir profond à finition brillante.",
        "<p>Perle ronde d'un noir profond aux reflets bruns subtils, finition très brillante presque vernis. Base graphique pour mettre en valeur les pierres claires.</p><p>S'accorde avec l'argent, le doré et les perles cristal pour un contraste fort.</p>",
        ["rondes", "noire", "brillante", "neutre"],
        0.55, "perles", "Perles", "Couleur", "Noir brillant",
    ),
    (
        "99c19b9e", "perle-donut-fuchsia", "Perle Donut Fuchsia",
        "Perle donut fuchsia My Nice Bracelet",
        "Perle donut (gros trou) fuchsia vif, finition brillante.",
        "<p>Perle en forme de gros donut fuchsia vif et brillant. Le trou central large permet de la passer sur des cordons épais ou des chaînes statement.</p><p>S'accorde avec l'argenté, le noir et les perles cristal.</p>",
        ["donut", "rondelle", "fuchsia", "rose"],
        0.85, "perles", "Perles", "Couleur", "Fuchsia donut",
    ),
    (
        "a4fd668d", "perle-carre-rose-pastel", "Perle Carré Rose Pastel",
        "Perle carre rose pastel My Nice Bracelet",
        "Perle carrée plate rose pastel, finition brillante.",
        "<p>Perle carrée plate aux angles légèrement arrondis, d'un rose pastel doux et brillant. Format coussin, idéal en alternance avec des perles rondes.</p><p>S'accorde avec le doré, le crème et les perles nacrées.</p>",
        ["carre", "coussin", "rose", "pastel", "brillant"],
        0.55, "perles", "Perles", "Couleur", "Rose pastel",
    ),
    (
        "ad6791a2", "perle-cube-verre-lavande", "Perle Cube Verre Lavande",
        "Perle cube verre lavande My Nice Bracelet",
        "Perle cube verre transparent teinté lavande.",
        "<p>Perle cubique en verre transparent légèrement teinté lavande. Finition brillante, transparence qui laisse passer la lumière.</p><p>S'accorde avec le doré, le blanc nacré et le rose poudré.</p>",
        ["cube", "verre", "lavande", "violet", "translucide"],
        0.65, "perles", "Perles", "Couleur", "Lavande transparent",
    ),
    (
        "c5e73c5e", "perle-verre-translucide-rose", "Perle Verre Translucide Rose",
        "Perle verre translucide rose My Nice Bracelet",
        "Perle ronde verre rose translucide, cœur blanc inséré.",
        "<p>Perle ronde en verre rose translucide abritant un cœur blanc opaque à l'intérieur. Double couche, effet de profondeur.</p><p>S'accorde avec les perles nacrées et le doré rosé.</p>",
        ["rondes", "verre", "rose", "translucide"],
        0.65, "perles", "Perles", "Couleur", "Rose translucide",
    ),
    (
        "e978e307", "perle-cristal-rose-coeur", "Perle Cristal Rose Cœur",
        "Perle cristal rose coeur My Nice Bracelet",
        "Perle cristal facetté avec cœur rose visible au centre.",
        "<p>Perle ronde en cristal facetté transparent, abritant un cœur rose poudré visible à travers les facettes. Effet bijou complexe, chaque facette capture une nuance différente.</p><p>S'accorde avec le doré, le blanc nacré et l'argenté pour une création précieuse.</p>",
        ["rondes", "cristal", "rose", "facette", "coeur"],
        0.95, "perles", "Perles", "Couleur", "Cristal rose cœur",
    ),
    (
        "e9b7fb69", "perle-cristal-iridescent-rose", "Perle Cristal Iridescent Rose",
        "Perle cristal iridescent rose My Nice Bracelet",
        "Perle cristal facetté irisé multicolore, cœur rose.",
        "<p>Perle ronde en cristal facetté à finition irisée qui passe du rose au turquoise selon l'angle, cœur rose vif au centre. Effet aurora prismatique.</p><p>S'accorde avec le doré, l'argenté et les perles cristal pour une création hyper lumineuse.</p>",
        ["rondes", "cristal", "iridescent", "rose", "facette"],
        0.95, "perles", "Perles", "Couleur", "Cristal iridescent",
    ),
    # ─── PIERRES (catégorie pierres) ────────────────────────────────
    (
        "912daaea", "pierre-lapis-lazuli-facette", "Pierre Lapis Lazuli Facetté",
        "Pierre lapis lazuli facette My Nice Bracelet",
        "Pierre lapis lazuli bleu marine taillée à facettes, éclats de pyrite.",
        "<p>Perles facettées dans le lapis lazuli, bleu marine profond piqueté d'inclusions de pyrite dorée. Les facettes captent la lumière et donnent un éclat plus vif que les versions polies lisses.</p><p>À associer avec le doré, le blanc nacré et le rouge brique pour une création précieuse.</p>",
        ["lapis-lazuli", "bleu", "marine", "facette"],
        1.30, "pierres", "Pierres semi-precieuses", "Pierre", "Lapis Lazuli Facetté",
    ),
    (
        "e2a3070d", "pierre-lave-noire-granuleuse", "Pierre de Lave Noire Granuleuse",
        "Pierre de lave noire granuleuse My Nice Bracelet",
        "Pierre de lave volcanique noire à surface granuleuse fine.",
        "<p>Perles taillées dans la pierre de lave, noir profond avec une texture granuleuse plus fine et régulière que la version standard. Toucher tactile, légère en main.</p><p>S'associe avec le doré mat, le cuivre et le bois clair pour une création minérale.</p>",
        ["lave", "noire", "porous", "granuleuse", "mate"],
        1.00, "pierres", "Pierres semi-precieuses", "Pierre", "Lave Granuleuse",
    ),
    (
        "f1e84008", "pierre-jaspe-rouge-facette", "Pierre Jaspe Rouge Facetté",
        "Pierre jaspe rouge facette My Nice Bracelet",
        "Pierre jaspe rouge profond taillée à facettes, finition naturelle.",
        "<p>Perles facettées dans le jaspe rouge, teinte rouge-bordeaux profonde avec des nuances naturelles plus claires. Les facettes adoucies (pas vitreuses) gardent l'aspect minéral.</p><p>À associer avec le doré, l'ivoire et le noir pour une création chaleureuse et chic.</p>",
        ["jaspe", "rouge", "bordeaux", "facette"],
        1.30, "pierres", "Pierres semi-precieuses", "Pierre", "Jaspe Rouge Facetté",
    ),
    (
        "fb3dcf2e", "pierre-jade-vert-profond", "Pierre Jade Vert Profond",
        "Pierre jade vert profond My Nice Bracelet",
        "Pierre jade vert profond uniforme, finition très brillante.",
        "<p>Perles taillées dans le jade, teinte vert sombre profonde et uniforme, finition très brillante. Couleur dense, presque forestière.</p><p>S'accorde avec le doré, le crème et le brun bois pour une création naturelle et noble.</p>",
        ["jade", "vert", "profond", "fonce", "brillante"],
        1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Jade Vert Profond",
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
    lines = ["", "// ─── Lot pierres4 — 33 nouvelles fiches (mai 2026) ─────────────"]
    for uuid, slug, title, alt, *_ in ENTRIES:
        filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
        vname = var_name(slug)
        lines.append(f'const {vname} = productAsset("{filename}", "{alt}");')
    return "\n".join(lines) + "\n"


def gen_product_entries() -> str:
    lines = ["  // ─── Lot pierres4 — 33 fiches : 13 charmes + 16 perles + 4 pierres ──"]
    for (uuid, slug, title, alt, desc, desc_html, extra_tags, price,
         category, product_type, opt_name, opt_value) in ENTRIES:
        vname = var_name(slug)
        if category == "pierres":
            tags = ["pierres", "semi-precieuses"] + extra_tags + ["naturelle", "nouveaute"]
        else:
            tags = ["perles"] + extra_tags + ["nouveaute"]
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
    (out_dir / "pierres4_image_assets.tsfragment").write_text(gen_image_assets(), encoding="utf-8")
    (out_dir / "pierres4_products.tsfragment").write_text(gen_product_entries(), encoding="utf-8")
    print(f"\n{len(ENTRIES)} fiches generees, fragments dans scripts/out/")


if __name__ == "__main__":
    main()
