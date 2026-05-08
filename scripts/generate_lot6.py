"""Lot 6 — Generates TypeScript fragments + resizes all 48 remaining
raw photos in `perles_a_ajouter`. One-shot batch processor for the
final lot, intended to be run once and then deleted.

Outputs :
  - public/shop/products/<slug>_v1.jpg    (resized 1400x1400)
  - /tmp/lot6_img_decls.ts                (TS image declarations)
  - /tmp/lot6_products.ts                 (TS product entries)

Then we hand-paste the two TS fragments into mock-products.ts at the
designated insertion points (image declarations near the top, product
entries near the bottom of the array).
"""
from PIL import Image
from pathlib import Path
import tempfile

# (source, dest_filename, slug, title, category, productType, price, stock,
#  option_name, option_value, alt_text, descriptionHtml, badges_extra, tags)
PRODUCTS = [
    ('IMG_0092.JPG', 'mnb_perle_porcelaine_blanc_motif_vert_v1.jpg', 'perle-porcelaine-blanc-motif-vert',
     'Perles Porcelaine Blanc Motif Vert', 'perles', 'Perles', 0.85, 250, 'Motif', 'Blanc fleur verte',
     'Perle porcelaine blanc motif vert My Nice Bracelet',
     "<p>Perles rondes en porcelaine blanc, motif fleur vert peint a la main. Aspect ceramique artisanale.</p><p>A glisser au centre d'un rang de perles unies pour rythmer une creation.</p>",
     ['Selection atelier'], ['perles', 'porcelaine', 'blanc', 'vert', 'motif', 'peinte-main', 'nouveaute']),
    ('IMG_0093.JPG', 'mnb_perle_mouchetee_oeuf_caille_v1.jpg', 'perle-mouchetee-oeuf-caille',
     'Perles Mouchetees Oeuf de Caille', 'perles', 'Perles', 0.55, 600, 'Couleur', 'Mouchetee oeuf de caille',
     'Perle mouchetee oeuf de caille My Nice Bracelet',
     "<p>Perles rondes beige clair mouchetees de marron, evoquant la coquille d'un oeuf de caille. Variations naturelles.</p><p>S'associent avec du dore mat, du blanc casse ou du brun.</p>",
     [], ['perles', 'rondes', 'mouchetee', 'beige', 'naturelle-effet', 'nouveaute']),
    ('IMG_0094.JPG', 'mnb_perle_orange_vif_v1.jpg', 'perle-orange-vif',
     'Perles Rondes Orange Vif', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Orange vif',
     'Perle ronde orange vif My Nice Bracelet',
     "<p>Perles rondes orange vif sature, finition lisse. Couleur pop qui apporte un coup d'eclat a une creation pastel.</p>",
     [], ['perles', 'rondes', 'orange', 'vif', 'pop', 'nouveaute']),
    ('IMG_0095.JPG', 'mnb_perle_bordeaux_marbree_v1.jpg', 'perle-bordeaux-marbree',
     'Perles Rondes Bordeaux Marbrees', 'perles', 'Perles', 0.55, 500, 'Couleur', 'Bordeaux marbre',
     'Perle ronde bordeaux marbree My Nice Bracelet',
     "<p>Perles rondes bordeaux profond avec inclusions marbrees plus claires. Aspect mineral, chaque perle a sa propre nuance.</p>",
     [], ['perles', 'rondes', 'bordeaux', 'marbree', 'rouge', 'nouveaute']),
    ('IMG_0096.JPG', 'mnb_perle_noire_mate_v1.jpg', 'perle-noire-mate',
     'Perles Rondes Noires Mates', 'perles', 'Perles', 0.50, 700, 'Couleur', 'Noir mat',
     'Perle ronde noire mate My Nice Bracelet',
     "<p>Perles rondes noires a finition mate, sans brillance. L'essentielle universelle pour rang de fond ou separation entre elements colores.</p>",
     ['Selection atelier'], ['perles', 'rondes', 'noires', 'mate', 'essentielle', 'nouveaute']),
    ('IMG_0097.JPG', 'mnb_perle_rouge_brique_brillante_v1.jpg', 'perle-rouge-brique-brillante',
     'Perles Rondes Rouge Brique Brillantes', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Rouge brique',
     'Perle ronde rouge brique brillante My Nice Bracelet',
     "<p>Perles rondes rouge brique a finition brillante. Couleur chaude, intense, parfaite comme rang de signature.</p>",
     [], ['perles', 'rondes', 'rouge', 'brique', 'brillantes', 'nouveaute']),
    ('IMG_0101.JPG', 'mnb_perle_noire_petite_v1.jpg', 'perle-noire-petite',
     'Petites Perles Rondes Noires', 'perles', 'Perles', 0.40, 800, 'Couleur', 'Noir petit format',
     'Petite perle ronde noire My Nice Bracelet',
     "<p>Perles rondes noires en petit format (diametre reduit). Ideales pour des creations fines ou comme perles de remplissage.</p>",
     [], ['perles', 'rondes', 'noires', 'petite-taille', 'fines', 'nouveaute']),
    ('IMG_0126.JPG', 'mnb_perle_jaune_vif_petite_v1.jpg', 'perle-jaune-vif-petite',
     'Petites Perles Rondes Jaune Vif', 'perles', 'Perles', 0.40, 700, 'Couleur', 'Jaune vif petite',
     'Petite perle ronde jaune vif My Nice Bracelet',
     "<p>Perles rondes jaune vif lumineuses, en petit format. Couleur saturee qui apporte un effet \"soleil\" a une creation pastel.</p>",
     [], ['perles', 'rondes', 'jaune', 'vif', 'petite-taille', 'nouveaute']),
    ('IMG_0134.JPG', 'mnb_perle_bleu_cobalt_v1.jpg', 'perle-bleu-cobalt',
     'Perles Rondes Bleu Cobalt', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Bleu cobalt',
     'Perle ronde bleu cobalt My Nice Bracelet',
     "<p>Perles rondes bleu cobalt profond, finition brillante. Couleur dense et bijou.</p>",
     [], ['perles', 'rondes', 'bleu', 'cobalt', 'brillantes', 'nouveaute']),
    ('IMG_0142.JPG', 'mnb_perle_bleu_pastel_petite_v1.jpg', 'perle-bleu-pastel-petite',
     'Petites Perles Rondes Bleu Pastel', 'perles', 'Perles', 0.40, 800, 'Couleur', 'Bleu pastel petit',
     'Petite perle ronde bleu pastel My Nice Bracelet',
     "<p>Perles rondes bleu pastel doux, en petit format. Effet aerien et leger.</p>",
     [], ['perles', 'rondes', 'bleu', 'pastel', 'petite-taille', 'nouveaute']),
    ('IMG_0143.JPG', 'mnb_perle_argent_metallique_v1.jpg', 'perle-argent-metallique',
     'Perles Rondes Argent Metallique', 'perles', 'Perles', 0.60, 500, 'Couleur', 'Argent metallique',
     'Perle ronde argent metallique My Nice Bracelet',
     "<p>Perles rondes argent metallique, finition brillante miroir. Reflechissent fortement la lumiere.</p>",
     [], ['perles', 'rondes', 'argent', 'metallique', 'brillantes', 'nouveaute']),
    ('IMG_0285.JPG', 'mnb_perle_vert_fonce_marbree_v1.jpg', 'perle-vert-fonce-marbree',
     'Perles Rondes Vert Fonce Marbrees', 'perles', 'Perles', 0.55, 500, 'Couleur', 'Vert fonce marbre',
     'Perle ronde vert fonce marbree My Nice Bracelet',
     "<p>Perles rondes vert fonce avec inclusions marbrees plus claires. Aspect mineral, naturel.</p>",
     [], ['perles', 'rondes', 'vert', 'fonce', 'marbree', 'nouveaute']),
    ('IMG_0288.JPG', 'mnb_perle_bleu_marine_mate_v1.jpg', 'perle-bleu-marine-mate',
     'Perles Rondes Bleu Marine Mates', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Bleu marine mat',
     'Perle ronde bleu marine mate My Nice Bracelet',
     "<p>Perles rondes bleu marine profond, finition mate. Couleur classique et raffinee.</p>",
     [], ['perles', 'rondes', 'bleu', 'marine', 'mate', 'nouveaute']),
    ('IMG_0331.JPG', 'mnb_perle_cube_rouge_framboise_v1.jpg', 'perle-cube-rouge-framboise',
     'Perles Cube Rouge Framboise', 'perles', 'Perles', 0.55, 400, 'Couleur', 'Rouge framboise',
     'Perle cube rouge framboise My Nice Bracelet',
     "<p>Cubes en resine rouge framboise mate. Format graphique pour rythmer un rang de perles rondes.</p>",
     [], ['perles', 'cube', 'rouge', 'framboise', 'mate', 'nouveaute']),
    ('IMG_0336.JPG', 'mnb_perle_rose_pois_blancs_v1.jpg', 'perle-rose-pois-blancs',
     'Perles Rondes Rose a Pois Blancs', 'perles', 'Perles', 0.60, 400, 'Couleur', 'Rose pois blancs',
     'Perle ronde rose a pois blancs My Nice Bracelet',
     "<p>Perles rondes fond rose vif a pois blancs imprimes. Effet vintage-pop, parfait pour une creation festive.</p>",
     [], ['perles', 'rondes', 'rose', 'pois', 'motif', 'nouveaute']),
    ('IMG_4403.JPG', 'mnb_perle_cristal_vert_inclusions_v1.jpg', 'perle-cristal-vert-inclusions',
     'Perles Cristal Vert Inclusions', 'perles', 'Perles', 0.75, 350, 'Effet', 'Cristal vert',
     'Perle cristal vert inclusions My Nice Bracelet',
     "<p>Perles spheriques en resine cristal transparent avec inclusions vertes. Effet bulle de savon brillante.</p>",
     [], ['perles', 'cristal', 'transparent', 'vert', 'inclusions', 'nouveaute']),
    ('IMG_4404.JPG', 'mnb_charme_noeud_jaune_paillete_v1.jpg', 'charme-noeud-jaune-paillete',
     'Charme Noeud Jaune Paillete', 'charmes', 'Charmes', 0.85, 300, 'Forme', 'Noeud jaune paillete',
     'Charme noeud jaune paillete My Nice Bracelet',
     "<p>Charme en forme de noeud, resine jaune translucide pailletee. Effet bijou-gateau-anniversaire.</p>",
     ['Selection atelier'], ['charmes', 'noeud', 'jaune', 'pailletee', 'nouveaute']),
    ('IMG_4405.JPG', 'mnb_charme_fleur_vert_clair_v1.jpg', 'charme-fleur-vert-clair',
     'Charme Fleur Vert Clair', 'charmes', 'Charmes', 0.75, 350, 'Forme', 'Fleur vert clair',
     'Charme fleur vert clair My Nice Bracelet',
     "<p>Charme en forme de fleur a 5 petales, resine vert clair translucide. Doux et printanier.</p>",
     [], ['charmes', 'fleur', 'vert', 'clair', 'nouveaute']),
    ('IMG_4406.JPG', 'mnb_charme_etoile_orange_mate_v1.jpg', 'charme-etoile-orange-mate',
     'Charme Etoile Orange Mate', 'charmes', 'Charmes', 0.80, 300, 'Forme', 'Etoile orange',
     'Charme etoile orange mate My Nice Bracelet',
     "<p>Charme en forme d'etoile a 5 branches, resine orange mate. Couleur chaude pour une creation joyeuse.</p>",
     [], ['charmes', 'etoile', 'orange', 'mate', 'nouveaute']),
    ('IMG_4407.JPG', 'mnb_perle_cristal_rose_pailletee_v1.jpg', 'perle-cristal-rose-pailletee',
     'Perles Cristal Rose Pailletees', 'perles', 'Perles', 0.85, 300, 'Effet', 'Cristal rose paillete',
     'Perle cristal rose pailletee My Nice Bracelet',
     "<p>Perles spheriques en resine cristal transparent avec inclusion rose pailletee au centre. Effet bijou-bulle festive.</p>",
     ['Selection atelier'], ['perles', 'cristal', 'transparent', 'rose', 'pailletee', 'nouveaute']),
    ('IMG_4408.JPG', 'mnb_perle_vert_pale_translucide_v1.jpg', 'perle-vert-pale-translucide',
     'Perles Rondes Vert Pale Translucides', 'perles', 'Perles', 0.60, 500, 'Couleur', 'Vert pale translucide',
     'Perle ronde vert pale translucide My Nice Bracelet',
     "<p>Perles rondes vert pale en resine translucide. Couleur fraiche et lumineuse.</p>",
     [], ['perles', 'rondes', 'vert', 'pale', 'translucide', 'nouveaute']),
    ('IMG_4409.JPG', 'mnb_charme_noeud_blanc_v1.jpg', 'charme-noeud-blanc',
     'Charme Noeud Blanc', 'charmes', 'Charmes', 0.80, 350, 'Forme', 'Noeud blanc',
     'Charme noeud blanc My Nice Bracelet',
     "<p>Charme en forme de noeud, resine blanche neutre. Format universel a glisser dans toute creation.</p>",
     [], ['charmes', 'noeud', 'blanc', 'essentielle', 'nouveaute']),
    ('IMG_4410.JPG', 'mnb_perle_cube_bleu_turquoise_v1.jpg', 'perle-cube-bleu-turquoise',
     'Perles Cube Bleu Turquoise', 'perles', 'Perles', 0.55, 450, 'Couleur', 'Bleu turquoise',
     'Perle cube bleu turquoise My Nice Bracelet',
     "<p>Cubes en resine bleu turquoise mat. Couleur ete-vacances, format graphique.</p>",
     [], ['perles', 'cube', 'bleu', 'turquoise', 'mate', 'nouveaute']),
    ('IMG_4411.JPG', 'mnb_charme_ourson_rose_translucide_v1.jpg', 'charme-ourson-rose-translucide',
     'Charme Ourson Rose Translucide', 'charmes', 'Charmes', 0.95, 250, 'Forme', 'Ourson rose translucide',
     'Charme ourson rose translucide My Nice Bracelet',
     "<p>Charme en forme d'ourson, resine rose blush translucide. Effet bijou-doudou tres doux.</p>",
     ['Selection atelier'], ['charmes', 'ourson', 'rose', 'translucide', 'nouveaute']),
    ('IMG_4412.JPG', 'mnb_perle_cristal_jaune_v1.jpg', 'perle-cristal-jaune',
     'Perles Cristal Jaune', 'perles', 'Perles', 0.85, 300, 'Effet', 'Cristal jaune',
     'Perle cristal jaune My Nice Bracelet',
     "<p>Perles spheriques en resine cristal transparent avec inclusion jaune au centre. Effet bulle solaire.</p>",
     [], ['perles', 'cristal', 'transparent', 'jaune', 'nouveaute']),
    ('IMG_4413.JPG', 'mnb_charme_coeur_argent_metallique_v1.jpg', 'charme-coeur-argent-metallique',
     'Charme Coeur Argent Metallique', 'charmes', 'Charmes', 1.00, 300, 'Forme', 'Coeur argent',
     'Charme coeur argent metallique My Nice Bracelet',
     "<p>Charme en forme de coeur 3D, finition argent metallique brillant. Effet bijou-amulette.</p>",
     ['Selection atelier'], ['charmes', 'coeur', 'argent', 'metallique', 'nouveaute']),
    ('IMG_4414.JPG', 'mnb_charme_noeud_bleu_pastel_v1.jpg', 'charme-noeud-bleu-pastel',
     'Charme Noeud Bleu Pastel', 'charmes', 'Charmes', 0.80, 350, 'Forme', 'Noeud bleu pastel',
     'Charme noeud bleu pastel My Nice Bracelet',
     "<p>Charme en forme de noeud, resine bleu pastel mate. Doux et fraicheur ete.</p>",
     [], ['charmes', 'noeud', 'bleu', 'pastel', 'nouveaute']),
    ('IMG_4415.JPG', 'mnb_charme_fleur_turquoise_coeur_rouge_v1.jpg', 'charme-fleur-turquoise-coeur-rouge',
     'Charme Fleur Turquoise Coeur Rouge', 'charmes', 'Charmes', 0.85, 300, 'Forme', 'Fleur turquoise coeur rouge',
     'Charme fleur turquoise coeur rouge My Nice Bracelet',
     "<p>Charme en forme de fleur, petales turquoise et coeur rouge. Effet pop et joyeux.</p>",
     [], ['charmes', 'fleur', 'turquoise', 'rouge', 'bicolore', 'nouveaute']),
    ('IMG_4416.JPG', 'mnb_charme_fleur_vert_coeur_rose_v1.jpg', 'charme-fleur-vert-coeur-rose',
     'Charme Fleur Vert Coeur Rose', 'charmes', 'Charmes', 0.85, 300, 'Forme', 'Fleur vert coeur rose',
     'Charme fleur vert coeur rose My Nice Bracelet',
     "<p>Charme en forme de fleur, petales verts et coeur rose. Effet vintage doux.</p>",
     [], ['charmes', 'fleur', 'vert', 'rose', 'bicolore', 'nouveaute']),
    ('IMG_4417.JPG', 'mnb_perle_cube_blanc_cristal_v1.jpg', 'perle-cube-blanc-cristal',
     'Perles Cube Blanc Cristal', 'perles', 'Perles', 0.65, 400, 'Couleur', 'Blanc cristal',
     'Perle cube blanc cristal My Nice Bracelet',
     "<p>Cubes en resine cristal transparent semi-blanche, effet glace. Format graphique avec luminosite.</p>",
     [], ['perles', 'cube', 'blanc', 'cristal', 'transparent', 'nouveaute']),
    ('IMG_4418.JPG', 'mnb_perle_cristal_argentee_v1.jpg', 'perle-cristal-argentee',
     'Perles Cristal Argentees', 'perles', 'Perles', 0.85, 300, 'Effet', 'Cristal argente',
     'Perle cristal argentee My Nice Bracelet',
     "<p>Perles spheriques en resine cristal transparent avec inclusion argentee. Effet diamant brillant.</p>",
     [], ['perles', 'cristal', 'transparent', 'argent', 'brillantes', 'nouveaute']),
    ('IMG_4419.JPG', 'mnb_perle_vert_coeur_sombre_v1.jpg', 'perle-vert-coeur-sombre',
     'Perles Rondes Vert Coeur Sombre', 'perles', 'Perles', 0.55, 450, 'Couleur', 'Vert coeur sombre',
     'Perle ronde vert coeur sombre My Nice Bracelet',
     "<p>Perles rondes vert vif avec un anneau central plus sombre. Effet bicolore subtil.</p>",
     [], ['perles', 'rondes', 'vert', 'bicolore', 'nouveaute']),
    ('IMG_4420.JPG', 'mnb_perle_rose_peche_v1.jpg', 'perle-rose-peche',
     'Perles Rondes Rose Peche', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Rose peche',
     'Perle ronde rose peche My Nice Bracelet',
     "<p>Perles rondes rose peche, ton chaud entre rose et orange. Doux et estival.</p>",
     [], ['perles', 'rondes', 'rose', 'peche', 'nouveaute']),
    ('IMG_4421.JPG', 'mnb_charme_bonbon_papillote_v1.jpg', 'charme-bonbon-papillote',
     'Charme Bonbon Papillote', 'charmes', 'Charmes', 1.20, 250, 'Forme', 'Bonbon papillote',
     'Charme bonbon papillote My Nice Bracelet',
     "<p>Charme en forme de bonbon dans sa papillote (avec les torsades aux deux extremites). Effet boutique-de-bonbons retro.</p>",
     ['Selection atelier'], ['charmes', 'bonbon', 'papillote', 'figuratif', 'nouveaute']),
    ('IMG_4422.JPG', 'mnb_perle_cristal_paillete_argent_v1.jpg', 'perle-cristal-paillete-argent',
     'Perles Cristal Pailletees Argent', 'perles', 'Perles', 0.85, 300, 'Effet', 'Cristal argent paillete',
     'Perle cristal pailletee argent My Nice Bracelet',
     "<p>Perles spheriques en resine cristal pailletees argent. Reflets discoball, effet boule a facettes.</p>",
     [], ['perles', 'cristal', 'argent', 'pailletee', 'nouveaute']),
    ('IMG_4423.JPG', 'mnb_charme_noeud_bleu_cyan_v1.jpg', 'charme-noeud-bleu-cyan',
     'Charme Noeud Bleu Cyan', 'charmes', 'Charmes', 0.85, 300, 'Forme', 'Noeud bleu cyan',
     'Charme noeud bleu cyan My Nice Bracelet',
     "<p>Charme en forme de noeud, resine bleu cyan brillant. Couleur eclatante et fraiche.</p>",
     [], ['charmes', 'noeud', 'bleu', 'cyan', 'brillantes', 'nouveaute']),
    ('IMG_4424.JPG', 'mnb_charme_etoile_vert_sage_v1.jpg', 'charme-etoile-vert-sage',
     'Charme Etoile Vert Sage', 'charmes', 'Charmes', 0.80, 300, 'Forme', 'Etoile vert sage',
     'Charme etoile vert sage My Nice Bracelet',
     "<p>Charme en forme d'etoile a 5 branches, resine vert sage translucide. Aspect doux et zen.</p>",
     [], ['charmes', 'etoile', 'vert', 'sage', 'translucide', 'nouveaute']),
    ('IMG_4425.JPG', 'mnb_perle_noire_mini_v1.jpg', 'perle-noire-mini',
     'Mini Perles Rondes Noires', 'perles', 'Perles', 0.35, 1000, 'Couleur', 'Noir mini',
     'Mini perle ronde noire My Nice Bracelet',
     "<p>Tres petites perles rondes noires, format mini (4-5mm). Pour micro-creations ou comme separateur.</p>",
     [], ['perles', 'rondes', 'noires', 'mini', 'fines', 'nouveaute']),
    ('IMG_4433.JPG', 'mnb_perle_cristal_iris_vert_v1.jpg', 'perle-cristal-iris-vert',
     'Perles Cristal Iridescentes Vertes', 'perles', 'Perles', 0.85, 350, 'Effet', 'Cristal iris vert',
     'Perle cristal iridescente verte My Nice Bracelet',
     "<p>Perles spheriques cristal avec effet iridescent vert qui change de teinte selon l'angle de la lumiere.</p>",
     [], ['perles', 'cristal', 'iris', 'vert', 'nouveaute']),
    ('IMG_4434.JPG', 'mnb_charme_sucette_jaune_rose_v1.jpg', 'charme-sucette-jaune-rose',
     'Charme Sucette Jaune Rose', 'charmes', 'Charmes', 1.10, 250, 'Forme', 'Sucette jaune rose',
     'Charme sucette jaune rose My Nice Bracelet',
     "<p>Charme en forme de sucette a baton, resine bicolore jaune et rose. Effet bonbonnerie kawaii.</p>",
     ['Selection atelier'], ['charmes', 'sucette', 'jaune', 'rose', 'figuratif', 'nouveaute']),
    ('IMG_4435.JPG', 'mnb_charme_papillon_vert_anis_v1.jpg', 'charme-papillon-vert-anis',
     'Charme Papillon Vert Anis', 'charmes', 'Charmes', 0.95, 300, 'Forme', 'Papillon vert anis',
     'Charme papillon vert anis My Nice Bracelet',
     "<p>Charme en forme de papillon, resine vert anis vif. Ailes detaillees, format leger.</p>",
     [], ['charmes', 'papillon', 'vert', 'anis', 'nouveaute']),
    ('IMG_4436.JPG', 'mnb_charme_papillon_vert_clair_v1.jpg', 'charme-papillon-vert-clair',
     'Charme Papillon Vert Clair', 'charmes', 'Charmes', 0.95, 300, 'Forme', 'Papillon vert clair',
     'Charme papillon vert clair My Nice Bracelet',
     "<p>Charme en forme de papillon, resine vert clair pastel. Plus doux que la version vert anis.</p>",
     [], ['charmes', 'papillon', 'vert', 'clair', 'pastel', 'nouveaute']),
    ('IMG_4437.JPG', 'mnb_perle_rouge_profond_v1.jpg', 'perle-rouge-profond',
     'Perles Rondes Rouge Profond', 'perles', 'Perles', 0.50, 600, 'Couleur', 'Rouge profond',
     'Perle ronde rouge profond My Nice Bracelet',
     "<p>Perles rondes rouge intense, finition lustree. Couleur dense et puissante.</p>",
     [], ['perles', 'rondes', 'rouge', 'profond', 'brillantes', 'nouveaute']),
    ('IMG_4438.JPG', 'mnb_perle_jaune_translucide_v1.jpg', 'perle-jaune-translucide',
     'Perles Rondes Jaune Translucide', 'perles', 'Perles', 0.55, 500, 'Couleur', 'Jaune translucide',
     'Perle ronde jaune translucide My Nice Bracelet',
     "<p>Perles rondes jaune en resine translucide. Effet ambre, lumineux et chaleureux.</p>",
     [], ['perles', 'rondes', 'jaune', 'translucide', 'nouveaute']),
    ('IMG_4439.JPG', 'mnb_perle_cristal_rose_pale_v1.jpg', 'perle-cristal-rose-pale',
     'Perles Cristal Rose Pale', 'perles', 'Perles', 0.75, 350, 'Effet', 'Cristal rose pale',
     'Perle cristal rose pale My Nice Bracelet',
     "<p>Perles spheriques cristal rose pale semi-translucide. Effet bulle de quartz rose.</p>",
     [], ['perles', 'cristal', 'rose', 'pale', 'translucide', 'nouveaute']),
    ('IMG_4440.JPG', 'mnb_perle_rouge_pois_blancs_v1.jpg', 'perle-rouge-pois-blancs',
     'Perles Rondes Rouge a Pois Blancs', 'perles', 'Perles', 0.60, 400, 'Couleur', 'Rouge pois blancs',
     'Perle ronde rouge a pois blancs My Nice Bracelet',
     "<p>Perles rondes rouge vif a pois blancs imprimes. Effet vintage pin-up, festif.</p>",
     [], ['perles', 'rondes', 'rouge', 'pois', 'motif', 'nouveaute']),
    ('IMG_4441.JPG', 'mnb_perle_cristal_paillete_intense_v1.jpg', 'perle-cristal-paillete-intense',
     'Perles Cristal Pailletees Intenses', 'perles', 'Perles', 0.90, 250, 'Effet', 'Cristal paillete intense',
     'Perle cristal pailletee intense My Nice Bracelet',
     "<p>Perles spheriques cristal avec paillette argent intense, effet plus dense que le paillete classique.</p>",
     [], ['perles', 'cristal', 'paillete', 'intense', 'argent', 'nouveaute']),
    ('IMG_4442.JPG', 'mnb_perle_bleu_glace_translucide_v1.jpg', 'perle-bleu-glace-translucide',
     'Perles Rondes Bleu Glace Translucides', 'perles', 'Perles', 0.55, 500, 'Couleur', 'Bleu glace translucide',
     'Perle ronde bleu glace translucide My Nice Bracelet',
     "<p>Perles rondes bleu glace en resine translucide. Effet ete frais, lumineux.</p>",
     [], ['perles', 'rondes', 'bleu', 'glace', 'translucide', 'nouveaute']),
]

ROOT = Path(__file__).resolve().parent.parent
src_dir = ROOT / 'public' / 'shop' / 'products' / 'perles_a_ajouter'
dst_dir = ROOT / 'public' / 'shop' / 'products'
TARGET = 1400

# Step 1 : resize
ok = 0
for src_name, dst_name, *_ in PRODUCTS:
    src = src_dir / src_name
    if not src.exists():
        print(f'  MISS  {src_name}'); continue
    img = Image.open(src).convert('RGB')
    w, h = img.size
    side = min(w, h); left = (w - side) // 2; top = (h - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize((TARGET, TARGET), Image.LANCZOS)
    img.save(dst_dir / dst_name, 'JPEG', quality=88)
    ok += 1

print(f'\n{ok}/{len(PRODUCTS)} photos resized')

# Step 2 : generate TS image declarations
img_lines = []
for src_name, dst_name, slug, *_, alt, _, _, _ in [
    (s, d, sl, t, c, p, pr, st, on, ov, a, dh, b, tg) for s, d, sl, t, c, p, pr, st, on, ov, a, dh, b, tg in PRODUCTS
]:
    var_name = 'lot6Img_' + slug.replace('-', '_')
    img_lines.append(f'const {var_name} = productAsset("{dst_name}", "{alt}");')

# Step 3 : generate TS product entries
prod_lines = []
for src_name, dst_name, slug, title, category, productType, price, stock, opt_name, opt_value, alt, descHtml, badges_extra, tags in PRODUCTS:
    var_name = 'lot6Img_' + slug.replace('-', '_')
    badges = ['Nouveaute'] + badges_extra
    badges_ts = '[' + ', '.join(f'"{b}"' for b in badges) + ']'
    tags_ts = '[' + ', '.join(f'"{t}"' for t in tags) + ']'
    desc_short = descHtml.replace('<p>', '').replace('</p>', ' ').strip()
    if len(desc_short) > 200:
        desc_short = desc_short[:200].rsplit(' ', 1)[0] + '.'
    desc_short = desc_short.replace('"', '\\"')
    descHtml_escaped = descHtml.replace('"', '\\"')
    prod_lines.append(f'''  {{
    id: "mock-product-{slug}",
    handle: "{slug}",
    title: "{title}",
    description: "{desc_short}",
    descriptionHtml: "{descHtml_escaped}",
    productType: "{productType}",
    category: "{category}",
    tags: {tags_ts},
    badges: {badges_ts},
    availableForSale: true,
    totalInventory: {stock},
    price: money("{price:.2f}"),
    compareAtPrice: null,
    featuredImage: {var_name},
    images: [{var_name}],
    variants: pieceChoiceVariantsFromUnitPrice(
      "{slug}",
      {price},
      {stock},
      {{ name: "{opt_name}", value: "{opt_value}" }},
      VRAC_PIECE_TIERS,
    ),
  }},''')

tmp = Path(tempfile.gettempdir())
(tmp / 'lot6_img_decls.ts').write_text('\n'.join(img_lines), encoding='utf-8')
(tmp / 'lot6_products.ts').write_text('\n'.join(prod_lines), encoding='utf-8')
print(f'Image decls: {len(img_lines)} lines -> {tmp / "lot6_img_decls.ts"}')
print(f'Product entries: {len(prod_lines)} -> {tmp / "lot6_products.ts"}')
