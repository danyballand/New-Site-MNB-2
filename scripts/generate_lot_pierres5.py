"""Lot pierres5 — 45 nouvelles fiches.

Source : perles_a_ajouter2/<uuid>.png
Sortie : public/shop/products/mnb_<slug>_v1.jpg (1400x1400 fond blanc)
       + fragments TS injectes via inject_lot_pierres5.py

Categories :
 - "pierres" : pierres semi-precieuses naturelles (cornaline,
   obsidienne, labradorite, jaspe, jade, lapis, howlite,
   serpentine, ambre, hematite, calcite, aventurine, agate)
 - "perles" : perles ordinaires (porcelaine, verre, resine,
   ceramique, nacrée, mat) + charmes + spacers metalliques
"""
from PIL import Image
from pathlib import Path

ROOT = Path("C:/Users/thibe/Desktop/SUMMER_2026/1_Site_Bracelets/New-Site-MNB-2")
SRC = ROOT / "public/shop/products/perles_a_ajouter2"
DST = ROOT / "public/shop/products"

# Schema : (uuid_prefix, slug, title, alt, description, descriptionHtml,
#          extra_tags, price, category, productType, option_name, option_value)
ENTRIES = [
    # === PIERRES SEMI-PRECIEUSES ===
    ("0034014f", "pierre-cornaline-rouge-claire", "Pierre Cornaline Rouge Claire",
     "Pierre cornaline rouge claire brillante My Nice Bracelet",
     "Pierre cornaline rouge clair brillante, finition vitreuse.",
     "<p>Perles taillees dans la cornaline, pierre rouge-brique aux reflets chauds et finition tres brillante. Couleur saturee mais douce.</p><p>S'accorde avec le dore, l'ivoire et le marron pour une creation chaleureuse et lumineuse.</p>",
     ["cornaline", "rouge", "brillante"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Cornaline Rouge"),
    ("00e862b7", "pierre-obsidienne-noire", "Pierre Obsidienne Noire",
     "Pierre obsidienne noire brillante My Nice Bracelet",
     "Pierre obsidienne noire profond, finition vitreuse brillante.",
     "<p>Perles taillees dans l'obsidienne, verre volcanique noir profond avec une finition vitreuse tres brillante. Densite visuelle forte, eclat presque liquide.</p><p>A associer avec le dore, l'argent et les pierres claires pour un contraste graphique.</p>",
     ["obsidienne", "noir", "brillante"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Obsidienne Noire"),
    ("04cd0531", "pierre-cornaline-rouge-veinee", "Pierre Cornaline Rouge Veinée",
     "Pierre cornaline rouge veinee My Nice Bracelet",
     "Pierre cornaline rouge avec une veine sombre naturelle.",
     "<p>Perles cornaline rouge dont chaque exemplaire presente sa propre veine sombre — un trait noir-marron naturel qui traverse la pierre. Chaque perle est unique.</p><p>A associer avec le dore, le crème et le marron chocolat pour une creation chaude.</p>",
     ["cornaline", "rouge", "veinee", "unique"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Cornaline Veinée"),
    ("05475876", "pierre-ambre-pailletee", "Pierre Ambre Pailletée",
     "Pierre ambre pailletee marron My Nice Bracelet",
     "Pierre ambre marron-rouge pailletée d'or naturel.",
     "<p>Perles ambre, teinte marron-acajou avec des particules dorees naturelles qui scintillent sous la lumiere. Effet bijou subtil.</p><p>S'associe avec le dore, le caramel et l'ivoire pour une creation precieuse.</p>",
     ["ambre", "marron", "doree", "pailletee"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Ambre Pailletée"),
    ("12f64975", "pierre-cornaline-rouge-profond", "Pierre Cornaline Rouge Profond",
     "Pierre cornaline rouge profond brillante My Nice Bracelet",
     "Pierre cornaline rouge profond saturé, finition brillante.",
     "<p>Perles cornaline d'un rouge profond et sature, finition brillante. Plus intense et plus chaude que les versions claires.</p><p>A associer avec le dore, le noir mat ou l'ivoire pour une creation forte et chic.</p>",
     ["cornaline", "rouge", "profond", "brillante"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Cornaline Profonde"),
    ("1c797d61", "pierre-lapis-lazuli-mat", "Pierre Lapis Lazuli Mat",
     "Pierre lapis lazuli mat bleu marine My Nice Bracelet",
     "Pierre lapis lazuli bleu marine uni, finition mate.",
     "<p>Perles lapis lazuli bleu marine uni avec une finition mate volontaire (pas de polish brillant). Effet plus sourd et naturel que les versions cirees.</p><p>S'accorde avec le dore mat, le creme et le rouge brique pour une creation noble.</p>",
     ["lapis-lazuli", "bleu", "marine", "mat"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Lapis Mat"),
    ("2362ae2a", "pierre-howlite-brute", "Pierre Howlite Brute",
     "Pierre howlite forme libre blanche My Nice Bracelet",
     "Pierre howlite forme libre, blanc-creme aux veines naturelles.",
     "<p>Perles howlite en forme libre — chaque piece est unique, taillee dans la masse mais non spherique. Blanc casse aux veines beige naturelles.</p><p>A associer avec le dore, le turquoise et le naturel pour une creation boheme.</p>",
     ["howlite", "blanche", "creme", "brute", "unique"], 1.30, "pierres", "Pierres semi-precieuses", "Pierre", "Howlite Brute"),
    ("268105e1", "pierre-bleu-roi-facettee", "Pierre Bleu Roi Facettée",
     "Pierre bleu roi facettee My Nice Bracelet",
     "Pierre bleu roi saturé, taille facettée qui capte la lumière.",
     "<p>Perles taillees dans une pierre bleue saturee (bleu roi vif), avec des facettes prononcees qui accrochent la lumiere. Eclat plus dynamique qu'une polie lisse.</p><p>S'accorde avec le dore, le blanc nacre et le turquoise pour une creation electrique.</p>",
     ["bleu", "roi", "facettee", "vive"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Bleu Roi Facettée"),
    ("27856d56", "pierre-jaspe-rouge-mat", "Pierre Jaspe Rouge Mat",
     "Pierre jaspe rouge mat My Nice Bracelet",
     "Pierre jaspe rouge brique, finition mate naturelle.",
     "<p>Perles jaspe rouge a finition mate, sans polish. Teinte rouge-brique chaude et terreuse.</p><p>A associer avec le dore mat, le caramel et le bois clair pour une creation telluric.</p>",
     ["jaspe", "rouge", "brique", "mat"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Jaspe Rouge Mat"),
    ("3a452580", "pierre-serpentine-verte-mate", "Pierre Serpentine Verte Mate",
     "Pierre serpentine verte mate My Nice Bracelet",
     "Pierre serpentine verte sombre, finition mate granuleuse.",
     "<p>Perles serpentine, vert sombre marbre de noir et de blanc, finition mate non polie. Aspect minéral, terreux.</p><p>S'accorde avec le dore mat, l'ivoire et le bois pour une creation forestiere.</p>",
     ["serpentine", "vert", "fonce", "mat"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Serpentine Mate"),
    ("40700f54", "pierre-ambre-olive", "Pierre Ambre Olive",
     "Pierre ambre olive jaune My Nice Bracelet",
     "Pierre ambre olive aux nuances jaune-vert naturelles.",
     "<p>Perles ambre dans une teinte plus rare jaune-olive avec des inclusions noires naturelles. Forme libre legerement irreguliere.</p><p>A associer avec le dore, le vert kaki et le marron pour une creation organique.</p>",
     ["ambre", "olive", "jaune", "vert"], 1.30, "pierres", "Pierres semi-precieuses", "Pierre", "Ambre Olive"),
    ("40741d92", "pierre-hematite-grise-brillante", "Pierre Hématite Grise Brillante",
     "Pierre hematite grise brillante My Nice Bracelet",
     "Pierre hématite gris-anthracite à finition brillante métallique.",
     "<p>Perles hematite gris-anthracite, finition tres brillante presque metallique. Reflets argentes sous certaines lumieres.</p><p>S'associe avec le dore, le rouge profond et le blanc nacre pour une creation graphique.</p>",
     ["hematite", "gris", "anthracite", "brillante"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Hématite Brillante"),
    ("420de528", "pierre-serpentine-verte-brillante", "Pierre Serpentine Verte Brillante",
     "Pierre serpentine verte brillante My Nice Bracelet",
     "Pierre serpentine verte aux reflets dorés, finition polie brillante.",
     "<p>Perles serpentine vert vif marbre, finition brillante avec des reflets dores naturels (pyrite). Couleur plus riche que la version mate.</p><p>A associer avec le dore, l'ivoire et le noir pour une creation chic et naturelle.</p>",
     ["serpentine", "vert", "brillante"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Serpentine Brillante"),
    ("71fc978d", "pierre-cornaline-orange", "Pierre Cornaline Orange",
     "Pierre cornaline orange brillante My Nice Bracelet",
     "Pierre cornaline orange chaude, finition brillante vitreuse.",
     "<p>Perles cornaline dans une teinte orange chaude, plus claire et plus vive que les versions rouge profond. Finition tres brillante.</p><p>S'accorde avec le dore, le caramel et le creme pour une creation solaire.</p>",
     ["cornaline", "orange", "brillante"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Cornaline Orange"),
    ("82a9626e", "pierre-cornaline-marron-brune", "Pierre Cornaline Marron Brune",
     "Pierre cornaline marron brune My Nice Bracelet",
     "Pierre cornaline marron foncé presque chocolat, finition brillante.",
     "<p>Perles cornaline dans une teinte marron-brun profond, presque chocolat aux reflets rouges quand la lumiere passe. Plus discrete et plus chic que les versions vives.</p><p>A associer avec le dore, le creme et le caramel pour une creation chaude et raffinee.</p>",
     ["cornaline", "marron", "brun", "fonce"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Cornaline Brune"),
    ("97e5b7d9", "pierre-jaspe-dalmatien", "Pierre Jaspe Dalmatien",
     "Pierre jaspe dalmatien tachete My Nice Bracelet",
     "Pierre jaspe dalmatien crème tachetée de noir.",
     "<p>Perles jaspe dalmatien — pierre creme-beige naturellement tachetee de noir comme la robe d'un chien dalmatien. Chaque perle est unique par son motif.</p><p>S'accorde avec le dore, le noir et le creme pour une creation graphique et fun.</p>",
     ["jaspe", "dalmatien", "creme", "noir", "tachete"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Jaspe Dalmatien"),
    ("c5440e24", "pierre-aventurine-caramel", "Pierre Aventurine Caramel",
     "Pierre aventurine caramel mate My Nice Bracelet",
     "Pierre aventurine caramel doux, finition mate granuleuse.",
     "<p>Perles aventurine teintee caramel-beige, finition mate avec de tres legeres particules brillantes naturelles.</p><p>A associer avec le dore, le creme et le rose poudre pour une creation douce.</p>",
     ["aventurine", "caramel", "beige", "mat"], 1.00, "pierres", "Pierres semi-precieuses", "Pierre", "Aventurine Caramel"),
    ("cf629cfe", "pierre-labradorite-verte-irisee", "Pierre Labradorite Verte Irisée",
     "Pierre labradorite verte irisee My Nice Bracelet",
     "Pierre labradorite vert mousse aux reflets dorés irisés.",
     "<p>Perles labradorite teintee vert mousse, avec des reflets jaune-or naturels visibles sous certaines lumieres (effet labradorescence).</p><p>S'accorde avec l'argent, le dore et le noir pour une creation magique.</p>",
     ["labradorite", "vert", "mousse", "irisee"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Labradorite Irisée"),
    ("d3c8a748", "pierre-calcite-jaune-marbree", "Pierre Calcite Jaune Marbrée",
     "Pierre calcite jaune marbree My Nice Bracelet",
     "Pierre calcite jaune marbrée de stries naturelles.",
     "<p>Perles calcite teinte jaune-miel marbre de blanc et de creme. Aspect doux, lumineux, presque translucide par endroits.</p><p>A associer avec le dore, le creme et l'ambre pour une creation chaude et solaire.</p>",
     ["calcite", "jaune", "miel", "marbre"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Calcite Marbrée"),
    ("dc574bff", "pierre-aventurine-sanguine", "Pierre Aventurine Sanguine",
     "Pierre aventurine sanguine My Nice Bracelet",
     "Pierre aventurine vert-rouge avec inclusions naturelles.",
     "<p>Perles aventurine sanguine — pierre vert sombre traversee par des veines rouges naturelles. Chaque perle est unique par ses inclusions.</p><p>S'accorde avec le dore et l'ivoire pour une creation mystique et terreuse.</p>",
     ["aventurine", "sanguine", "vert", "rouge", "unique"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Aventurine Sanguine"),
    ("e0da1a3c", "pierre-jaspe-rouge-breche", "Pierre Jaspe Rouge Brèche",
     "Pierre jaspe rouge breche My Nice Bracelet",
     "Pierre jaspe rouge brèche fragmentée naturellement.",
     "<p>Perles jaspe brèche — variete rouge profond avec des fractures naturelles foncees qui creent un motif eclate. Aspect minéral brut.</p><p>A associer avec le dore et le noir pour une creation organique et forte.</p>",
     ["jaspe", "rouge", "breche", "fragmente"], 1.10, "pierres", "Pierres semi-precieuses", "Pierre", "Jaspe Brèche"),
    ("fbc489e3", "pierre-bleu-marine-facettee", "Pierre Bleu Marine Facettée",
     "Pierre bleu marine facettee My Nice Bracelet",
     "Pierre bleu marine profond taille facettée glitter.",
     "<p>Perles taillees dans une pierre bleu marine profond, finition pailletee et taille facettee qui demultiplie les reflets.</p><p>S'accorde avec l'argent, le dore et le blanc pour une creation soiree.</p>",
     ["bleu", "marine", "facettee", "glitter"], 1.30, "pierres", "Pierres semi-precieuses", "Pierre", "Bleu Marine Facettée"),
    ("fbddf2f5", "pierre-jade-vert-anis", "Pierre Jade Vert Anis",
     "Pierre jade vert anis My Nice Bracelet",
     "Pierre jade vert anis tachetée, finition mate naturelle.",
     "<p>Perles jade vert anis avec des taches plus claires et plus foncees naturelles. Finition mate et grain visible.</p><p>A associer avec le dore mat et le bois clair pour une creation botanique.</p>",
     ["jade", "vert", "anis", "mat"], 1.20, "pierres", "Pierres semi-precieuses", "Pierre", "Jade Anis"),
    # === PERLES ORDINAIRES (resine / verre / porcelaine) ===
    ("13efeee6", "perle-moutarde-brillante", "Perle Moutarde Brillante",
     "Perle ronde moutarde brillante My Nice Bracelet",
     "Perle ronde moutarde-ocre saturée, finition brillante.",
     "<p>Perle ronde dans une teinte moutarde-ocre chaude et saturee, finition brillante. Couleur automnale qui rythme bien les rangs sobres.</p><p>S'accorde avec le caramel, le marron et l'ivoire.</p>",
     ["rondes", "moutarde", "ocre", "brillante"], 0.65, "perles", "Perles", "Couleur", "Moutarde"),
    ("14d26b80", "perle-nacree-cuivre", "Perle Nacrée Cuivre",
     "Perle nacree cuivre My Nice Bracelet",
     "Perle nacrée aux reflets cuivre orangé.",
     "<p>Perle ronde nacree dans des reflets cuivre-orange chauds, finition lustree caracteristique des perles de verre nacrees.</p><p>A associer avec le dore, le marron et le creme pour une creation chic.</p>",
     ["rondes", "nacree", "cuivre", "orange"], 0.65, "perles", "Perles", "Couleur", "Cuivre"),
    ("1d780119", "perle-cylindre-violet", "Perle Cylindre Violet",
     "Perle cylindre violet My Nice Bracelet",
     "Perle cylindrique violet vif, résine brillante.",
     "<p>Perle en forme de cylindre courte, resine violet vif. Forme non spherique qui rythme un rang de perles rondes.</p><p>S'accorde avec l'argent, le rose vif et le blanc nacre.</p>",
     ["cylindre", "violet", "resine"], 0.55, "perles", "Perles", "Couleur", "Violet"),
    ("2b913e55", "perle-porcelaine-motif-cerisier", "Perle Porcelaine Motif Cerisier",
     "Perle porcelaine motif cerisier My Nice Bracelet",
     "Perle porcelaine blanche peinte à la main, motif fleurs de cerisier.",
     "<p>Perle ronde en porcelaine blanche peinte a la main avec un motif de fleurs de cerisier japonisant (rose, rouge, brun). Chaque piece est legerement differente.</p><p>A associer avec le dore, le rose poudre et le blanc nacre.</p>",
     ["porcelaine", "blanc", "motif", "cerisier", "peinte-main"], 0.95, "perles", "Perles", "Motif", "Cerisier"),
    ("4457568d", "perle-cube-hematite-irisee", "Perle Cube Hématite Irisée",
     "Perle cube hematite irisee bleu vert My Nice Bracelet",
     "Perle cube hématite aux reflets irisés bleu-vert métalliques.",
     "<p>Perle en forme de cube, finition hematite avec des reflets metalliques irises bleu-vert. Petit format graphique.</p><p>S'accorde avec l'argent, le noir et le blanc.</p>",
     ["cube", "hematite", "irisee", "metallique"], 0.85, "perles", "Perles", "Forme", "Cube hématite"),
    ("52ca38c5", "perle-orange-brillante", "Perle Orange Brillante",
     "Perle ronde orange brillante My Nice Bracelet",
     "Perle ronde orange vif saturée, finition brillante.",
     "<p>Perle ronde orange vif sature, finition brillante en resine. Couleur energique et chaude.</p><p>S'accorde avec le dore, le rouge brique et le creme.</p>",
     ["rondes", "orange", "vif", "brillante"], 0.55, "perles", "Perles", "Couleur", "Orange vif"),
    ("5382a033", "perle-cube-verre-vert-blanc", "Perle Cube Verre Vert Blanc",
     "Perle cube verre vert blanc raye My Nice Bracelet",
     "Perle cube en verre vert-jaune avec rayures blanches verticales.",
     "<p>Perle cube en verre fondu, fond vert-jaune translucide raye de bandes blanches verticales irregulieres. Effet artisanal.</p><p>S'accorde avec le dore, le blanc nacre et le vert mousse.</p>",
     ["cube", "verre", "vert", "blanc", "raye"], 0.85, "perles", "Perles", "Forme", "Cube vert"),
    ("75e0fcb6", "charme-panda-ceramique", "Charme Panda Céramique",
     "Charme panda ceramique bleu My Nice Bracelet",
     "Charme panda en céramique peinte, bleu pastel.",
     "<p>Charme en forme de tete de panda en ceramique, fond bleu pastel et yeux/oreilles peints en noir. Element ludique pour un bracelet enfant ou kawaii.</p><p>S'accorde avec le blanc, le rose poudre et l'argent.</p>",
     ["charme", "panda", "ceramique", "bleu", "kawaii"], 1.10, "perles", "Perles", "Style", "Panda bleu"),
    ("75fd94fc", "perle-cube-onyx-noir", "Perle Cube Onyx Noir",
     "Perle cube onyx noir My Nice Bracelet",
     "Perle cube en onyx noir profond, finition brillante.",
     "<p>Perle en forme de cube, taillee dans l'onyx noir profond, finition brillante. Petit format graphique.</p><p>S'accorde avec l'argent, le dore et le blanc nacre.</p>",
     ["cube", "onyx", "noir"], 0.85, "perles", "Perles", "Forme", "Cube onyx"),
    ("7946498b", "perle-porcelaine-motif-floral-noir", "Perle Porcelaine Motif Floral Noir",
     "Perle porcelaine blanche motif floral noir My Nice Bracelet",
     "Perle porcelaine blanche peinte avec un motif floral noir et gris.",
     "<p>Perle porcelaine blanc casse peinte a la main avec un motif floral en noir et gris (style chinoiserie). Chaque piece presente un motif unique.</p><p>A associer avec le dore, le noir et le blanc nacre.</p>",
     ["porcelaine", "blanc", "motif", "noir", "floral", "peinte-main"], 0.95, "perles", "Perles", "Motif", "Floral noir"),
    ("8fb12f6b", "perle-donut-hematite-noire", "Perle Donut Hématite Noire",
     "Perle donut hematite noire My Nice Bracelet",
     "Perle donut/spacer hématite noire brillante.",
     "<p>Perle en forme de donut (large trou central), finition hematite noire metallique brillante. Utilisee comme intercalaire ou comme accent.</p><p>S'accorde avec l'argent et les pierres claires.</p>",
     ["donut", "hematite", "noir", "intercalaire"], 0.55, "perles", "Perles", "Forme", "Donut hématite"),
    ("9073bdb1", "perle-cube-verre-blanc-vert", "Perle Cube Verre Blanc Vert",
     "Perle cube verre blanc et vert My Nice Bracelet",
     "Perle cube verre bicolore blanc-vert, finition brillante.",
     "<p>Perle cube en verre fondu bicolore : blanc casse sur une moitie, vert vif sur l'autre. Effet dip-dye artisanal.</p><p>S'accorde avec le dore, le vert mousse et le blanc nacre.</p>",
     ["cube", "verre", "blanc", "vert", "bicolore"], 0.85, "perles", "Perles", "Forme", "Cube bicolore"),
    ("93dad554", "perle-cabochon-gris", "Perle Cabochon Gris",
     "Perle cabochon gris brillante My Nice Bracelet",
     "Perle cabochon gris lumineux, finition vitreuse.",
     "<p>Perle en forme de cabochon (legerement applatie), couleur gris-lumineux a finition tres brillante presque vitreuse.</p><p>A associer avec l'argent, le blanc et les pierres bleues.</p>",
     ["cabochon", "gris", "brillante"], 0.75, "perles", "Perles", "Forme", "Cabochon gris"),
    ("9dfa5376", "perle-mat-bleu-marine", "Perle Mate Bleu Marine",
     "Perle ronde mat bleu marine My Nice Bracelet",
     "Perle ronde bleu marine, finition mate texturée naturelle.",
     "<p>Perle ronde bleu marine profond avec une finition mate volontairement texturee, sans polish. Aspect doux et organique.</p><p>S'accorde avec le dore, le creme et le rouge brique pour une creation marine.</p>",
     ["rondes", "bleu", "marine", "mat"], 0.65, "perles", "Perles", "Couleur", "Bleu marine"),
    ("a3fef57e", "perle-verre-orange-translucide", "Perle Verre Orange Translucide",
     "Perle verre orange translucide My Nice Bracelet",
     "Perle verre orange ambré translucide, finition brillante.",
     "<p>Perle ronde en verre ambre-orange translucide, finition brillante qui laisse passer la lumiere. Couleur chaude et lumineuse.</p><p>S'accorde avec le dore, le caramel et le creme.</p>",
     ["rondes", "verre", "orange", "translucide"], 0.65, "perles", "Perles", "Couleur", "Orange translucide"),
    ("cc94bd86", "perle-jaune-pumice", "Perle Jaune Pumice",
     "Perle jaune pumice texturee My Nice Bracelet",
     "Perle jaune éponge texturée, finition mate poreuse.",
     "<p>Perle ronde jaune saturé avec une surface ponce/eponge tres texturee. Format leger, aspect organique.</p><p>S'accorde avec le caramel, le dore mat et le blanc casse.</p>",
     ["rondes", "jaune", "pumice", "porous", "mat"], 0.65, "perles", "Perles", "Couleur", "Jaune pumice"),
    ("d5145b06", "perle-verre-vert-olive", "Perle Verre Vert Olive",
     "Perle verre vert olive translucide My Nice Bracelet",
     "Perle verre vert olive translucide, finition brillante.",
     "<p>Perle ronde en verre vert olive translucide qui laisse passer la lumiere. Couleur naturelle et douce.</p><p>S'accorde avec le dore, le creme et le marron.</p>",
     ["rondes", "verre", "vert", "olive", "translucide"], 0.65, "perles", "Perles", "Couleur", "Vert olive"),
    ("e93f3d78", "perle-cylindre-violet-mat", "Perle Cylindre Violet Mat",
     "Perle cylindre violet mat My Nice Bracelet",
     "Perle cylindrique violet foncé, finition mate.",
     "<p>Perle cylindre violet sombre, finition mate. Plus discrete que la version brillante.</p><p>A associer avec l'argent et les pierres violettes pour une creation harmonieuse.</p>",
     ["cylindre", "violet", "mat"], 0.55, "perles", "Perles", "Couleur", "Violet mat"),
    ("268105e1-extra", "perle-bleu-roi-facettee-perle", "Perle Bleu Roi Facettée Résine",
     "Perle bleu roi facettee resine My Nice Bracelet",
     "Perle résine bleu roi vif, taille facettée.",
     "<p>Perle resine bleu roi (variante economique de la pierre bleue facettee), avec un format facette qui multiplie les reflets.</p><p>S'accorde avec l'argent et le blanc nacre.</p>",
     ["facettee", "bleu", "roi", "resine"], 0.65, "perles", "Perles", "Couleur", "Bleu roi"),  # SKIP -- doublon, sera filtre
    # === CHARMES & SPACERS ===
    ("6043047f", "charme-dragon-cinnabre", "Charme Dragon Cinnabre",
     "Charme dragon cinnabre rouge sculpte My Nice Bracelet",
     "Charme dragon en cinabre rouge sculpté, motif asiatique.",
     "<p>Charme cylindrique en cinabre rouge profond sculpte avec un motif asiatique en relief (dragon stylise). Element bijou riche et detaille.</p><p>S'accorde avec le dore, le creme et le noir pour une creation orientale chic.</p>",
     ["charme", "dragon", "cinnabre", "rouge", "sculpte", "oriental"], 1.50, "perles", "Perles", "Style", "Dragon cinnabre"),
    ("6278341a", "spacer-argent-rosace", "Spacer Argent Rosace",
     "Spacer argent rosace metallique My Nice Bracelet",
     "Spacer/intercalaire en métal argenté motif rosace.",
     "<p>Petit intercalaire en metal argente avec un motif de rosace en relief, format plat type donut. Utilisee entre deux perles pour rythmer un rang.</p><p>S'accorde avec toutes les couleurs.</p>",
     ["spacer", "intercalaire", "argent", "metal", "rosace"], 0.45, "perles", "Perles", "Forme", "Spacer rosace"),
    ("f1d6359b", "spacer-bronze-etoile", "Spacer Bronze Étoile",
     "Spacer bronze etoile metal My Nice Bracelet",
     "Spacer en métal bronze antique avec motif étoile.",
     "<p>Petit intercalaire en metal bronze antique avec un motif d'etoile en relief, format plat. Effet vintage et chaud.</p><p>S'accorde avec le dore, le marron et l'ivoire.</p>",
     ["spacer", "intercalaire", "bronze", "metal", "etoile", "vintage"], 0.45, "perles", "Perles", "Forme", "Spacer bronze"),
    ("f6e267d7", "spacer-argent-poli", "Spacer Argent Poli",
     "Spacer argent poli brillant My Nice Bracelet",
     "Spacer en métal argent poli, finition brillante lisse.",
     "<p>Petit intercalaire en metal argent poli brillant, finition lisse. Pour des creations minimalistes et chic.</p><p>Polyvalent, s'accorde avec toutes les pierres.</p>",
     ["spacer", "intercalaire", "argent", "poli", "brillant"], 0.45, "perles", "Perles", "Forme", "Spacer argent"),
]
# Filtrage : on enleve les doublons marques avec '-extra'
ENTRIES = [e for e in ENTRIES if "-extra" not in e[0]]


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
    bg.save(DST / dst_filename, "JPEG", quality=88, optimize=True)
    return dst_filename


def var_name(slug: str) -> str:
    parts = slug.split("-")
    return "".join([parts[0]] + [p.capitalize() for p in parts[1:]]) + "Image"


def gen_image_assets() -> str:
    lines = ["", "// ─── Lot pierres5 — 44 nouvelles fiches (mai 2026) ─────────────"]
    for uuid, slug, title, alt, *_ in ENTRIES:
        filename = f"mnb_{slug.replace('-', '_')}_v1.jpg"
        lines.append(f'const {var_name(slug)} = productAsset("{filename}", "{alt}");')
    return "\n".join(lines) + "\n"


def gen_product_entries() -> str:
    lines = ["  // ─── Lot pierres5 — 44 nouvelles fiches pierres+perles+charmes ─"]
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
    (out_dir / "pierres5_image_assets.tsfragment").write_text(gen_image_assets(), encoding="utf-8")
    (out_dir / "pierres5_products.tsfragment").write_text(gen_product_entries(), encoding="utf-8")
    print("Fragments ecrits dans scripts/out/")


if __name__ == "__main__":
    main()
