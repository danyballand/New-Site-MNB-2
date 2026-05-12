import type { ShopImage, ShopProduct } from "@/lib/shopify/types";

const money = (amount: string) => ({ amount, currencyCode: "EUR" });

const productAsset = (file: string, altText: string, sizeOverride?: number): ShopImage => {
  const size = sizeOverride ?? (file.endsWith(".webp") ? 1400 : file.endsWith(".jpeg") ? 1080 : 2048);

  return {
    url: `/shop/products/${file}`,
    altText,
    width: size,
    height: size,
  };
};

const angeArgentImage = productAsset("mnb_ange_argent_v1_1400.webp", "Piece ange argent My Nice Bracelet");
const coeurBlancNacreImage = productAsset(
  "mnb_coeur_blanc_nacre_v1_1400.webp",
  "Piece coeur blanc nacre My Nice Bracelet",
);
const coeurJauneIrisImage = productAsset(
  "mnb_coeur_jaune_iris_motif_coeur_v1_1400.webp",
  "Piece coeur jaune iris motif coeur My Nice Bracelet",
);
const etoileBleuTransparentImage = productAsset(
  "mnb_etoile_bleu_transparent_v1_1400.webp",
  "Piece etoile bleu transparent My Nice Bracelet",
);
const fleurBlancIrisImage = productAsset("mnb_fleur_blanc_iris_v1_1400.webp", "Piece fleur blanc iris My Nice Bracelet");
const lapinTransparentIrisImage = productAsset(
  "mnb_lapin_transparent_iris_v1_1400.webp",
  "Piece lapin transparent iris My Nice Bracelet",
);
const oursonVertMentheImage = productAsset(
  "mnb_ourson_vert_menthe_transparent_v1_1400.webp",
  "Piece ourson vert menthe transparent My Nice Bracelet",
);
const papillonVertIrisImage = productAsset(
  "mnb_papillon_vert_iris_v1_1400.webp",
  "Piece papillon vert iris My Nice Bracelet",
);
const papillonVertPastelImage = productAsset(
  "mnb_papillon_vert_pastel_v1_1400.webp",
  "Piece papillon vert pastel My Nice Bracelet",
);
const perleCubeTransparentVertImage = productAsset(
  "mnb_perle_cube_transparent_vert_v1_1400.webp",
  "Perle cube transparent vert My Nice Bracelet",
);
const perleCubeVertAnisImage = productAsset(
  "mnb_perle_cube_vert_anis_facette_v1_1400.webp",
  "Perle cube vert anis facette My Nice Bracelet",
);

// ─── Nouvelles perles & pieces — photos brutes en attente de retouche ───
// Photos supplier shootees a la main, recadrees carre 1400x1400.
// Dany remplacera ces .jpg par les .webp finaux quand les vraies
// photos seront livrees ; les filenames sont stables (en `_v1`)
// donc le swap n'aura aucun impact sur les fiches.
const perleLilasPastelImage = productAsset(
  "mnb_perle_lilas_pastel_v1.jpg",
  "Perle ronde lilas pastel My Nice Bracelet",
);
const perleRhodoniteRoseImage = productAsset(
  "mnb_perle_rhodonite_rose_v1.jpg",
  "Perle pierre rhodonite rose My Nice Bracelet",
);
const perleCaramelDoreImage = productAsset(
  "mnb_perle_caramel_dore_v1.jpg",
  "Perle ronde caramel dore My Nice Bracelet",
);
const perleJaspeKakiImage = productAsset(
  "mnb_perle_jaspe_kaki_v1.jpg",
  "Perle pierre jaspe kaki My Nice Bracelet",
);
const perleMoutardeTextureeImage = productAsset(
  "mnb_perle_moutarde_texturee_v1.jpg",
  "Perle ronde moutarde texturee My Nice Bracelet",
);
const perleFuchsiaEtoilesImage = productAsset(
  "mnb_perle_fuchsia_etoiles_v1.jpg",
  "Perle ronde fuchsia motif etoiles My Nice Bracelet",
);
const pieceCoeurRoseTranslucideImage = productAsset(
  "mnb_piece_coeur_rose_translucide_v1.jpg",
  "Piece coeur rose translucide My Nice Bracelet",
);

// ─── Lot 2 — Perles & charme (photos brutes en attente de retouche) ───
const perleCubeRoseMagentaImage = productAsset(
  "mnb_perle_cube_rose_magenta_v1.jpg",
  "Perle cube verre rose magenta My Nice Bracelet",
);
const perleFleurRoseIrisImage = productAsset(
  "mnb_perle_fleur_rose_iris_v1.jpg",
  "Perle fleur rose iris pailletee My Nice Bracelet",
);
const perleIriseeBulleImage = productAsset(
  "mnb_perle_irisee_bulle_v1.jpg",
  "Perle ronde irisee bulle de savon My Nice Bracelet",
);
const perleNacreeRoseBlushImage = productAsset(
  "mnb_perle_nacree_rose_blush_v1.jpg",
  "Perle ronde nacree rose blush My Nice Bracelet",
);
const perleNoireBrillanteImage = productAsset(
  "mnb_perle_noire_brillante_v1.jpg",
  "Perle ronde noire brillante My Nice Bracelet",
);
const perleTerracottaMateImage = productAsset(
  "mnb_perle_terracotta_mate_v1.jpg",
  "Perle ronde terracotta mate My Nice Bracelet",
);
const charmePoissonRougeImage = productAsset(
  "mnb_charme_poisson_rouge_v1.jpg",
  "Charme figurine poisson rouge en verre My Nice Bracelet",
);

// ─── Lot 3 — Perles, pierres & charme (photos brutes) ──────────────
const perleHematiteMateImage = productAsset(
  "mnb_perle_hematite_mate_v1.jpg",
  "Perle pierre hematite gris fonce mate My Nice Bracelet",
);
const perleCacaoMateImage = productAsset(
  "mnb_perle_cacao_mate_v1.jpg",
  "Perle ronde cacao mate My Nice Bracelet",
);
const perleJadeOliveImage = productAsset(
  "mnb_perle_jade_olive_v1.jpg",
  "Perle pierre jade olive My Nice Bracelet",
);
const perleIrisVioletBombeeImage = productAsset(
  "mnb_perle_iris_violet_bombee_v1.jpg",
  "Perle ronde iris violet bombee My Nice Bracelet",
);
const perlePorcelaineVertFleurImage = productAsset(
  "mnb_perle_porcelaine_vert_fleur_v1.jpg",
  "Perle ronde porcelaine vert motif fleur My Nice Bracelet",
);
const perleOvaleJadeLavandeImage = productAsset(
  "mnb_perle_ovale_jade_lavande_v1.jpg",
  "Perle ovale jade lavande My Nice Bracelet",
);
const charmeEtoileViolettteCeramiqueImage = productAsset(
  "mnb_charme_etoile_violette_ceramique_v1.jpg",
  "Charme etoile violette ceramique motif etoile My Nice Bracelet",
);

// ─── Lot 4 — Perles & pierres (photos brutes) ──────────────────────
const perlePorcelaineBleuDamierImage = productAsset(
  "mnb_perle_porcelaine_bleu_damier_v1.jpg",
  "Perle porcelaine bleu damier My Nice Bracelet",
);
const perleOeilDeTigreDoreImage = productAsset(
  "mnb_perle_oeil_de_tigre_dore_v1.jpg",
  "Perle pierre oeil-de-tigre dore My Nice Bracelet",
);
const perleBleuCielPetiteImage = productAsset(
  "mnb_perle_bleu_ciel_petite_v1.jpg",
  "Perle ronde bleu ciel petite taille My Nice Bracelet",
);
const perleCornalineRougeImage = productAsset(
  "mnb_perle_cornaline_rouge_v1.jpg",
  "Perle pierre cornaline rouge My Nice Bracelet",
);
const perleBlancCraieImage = productAsset(
  "mnb_perle_blanc_craie_v1.jpg",
  "Perle ronde blanc craie mate My Nice Bracelet",
);
const perlePecheTranslucideImage = productAsset(
  "mnb_perle_peche_translucide_v1.jpg",
  "Perle ronde peche translucide My Nice Bracelet",
);
const perleMarronFonceBrillanteImage = productAsset(
  "mnb_perle_marron_fonce_brillante_v1.jpg",
  "Perle ronde marron fonce brillante My Nice Bracelet",
);

// ─── Lot 5 — Perles & charmes (photos brutes) ──────────────────────
const perleOliveBronzeImage = productAsset(
  "mnb_perle_olive_bronze_v1.jpg",
  "Perle ronde olive bronze My Nice Bracelet",
);
const charmeSacRougeCeramiqueImage = productAsset(
  "mnb_charme_sac_rouge_ceramique_v1.jpg",
  "Charme petit sac rouge ceramique My Nice Bracelet",
);
const perleVertMentheMateImage = productAsset(
  "mnb_perle_vert_menthe_mate_v1.jpg",
  "Perle ronde vert menthe pastel mate My Nice Bracelet",
);
const perlePorcelaineBlancMotifJauneImage = productAsset(
  "mnb_perle_porcelaine_blanc_motif_jaune_v1.jpg",
  "Perle porcelaine blanc motif jaune peint My Nice Bracelet",
);
const charmeCoquillageCauriImage = productAsset(
  "mnb_charme_coquillage_cauri_v1.jpg",
  "Charme coquillage cauri naturel My Nice Bracelet",
);
const perleBriqueMateImage = productAsset(
  "mnb_perle_brique_mate_v1.jpg",
  "Perle ronde brique mate My Nice Bracelet",
);
const perleOliveMarbreeImage = productAsset(
  "mnb_perle_olive_marbree_v1.jpg",
  "Perle ronde olive marbree My Nice Bracelet",
);

// ─── Lot 6 — Final batch (48 fiches photos brutes) ─────────────────
const lot6Img_perle_porcelaine_blanc_motif_vert = productAsset("mnb_perle_porcelaine_blanc_motif_vert_v1.jpg", "Perle porcelaine blanc motif vert My Nice Bracelet");
const lot6Img_perle_mouchetee_oeuf_caille = productAsset("mnb_perle_mouchetee_oeuf_caille_v1.jpg", "Perle mouchetee oeuf de caille My Nice Bracelet");
const lot6Img_perle_orange_vif = productAsset("mnb_perle_orange_vif_v1.jpg", "Perle ronde orange vif My Nice Bracelet");
const lot6Img_perle_bordeaux_marbree = productAsset("mnb_perle_bordeaux_marbree_v1.jpg", "Perle ronde bordeaux marbree My Nice Bracelet");
const lot6Img_perle_noire_mate = productAsset("mnb_perle_noire_mate_v1.jpg", "Perle ronde noire mate My Nice Bracelet");
const lot6Img_perle_rouge_brique_brillante = productAsset("mnb_perle_rouge_brique_brillante_v1.jpg", "Perle ronde rouge brique brillante My Nice Bracelet");
const lot6Img_perle_noire_petite = productAsset("mnb_perle_noire_petite_v1.jpg", "Petite perle ronde noire My Nice Bracelet");
const lot6Img_perle_jaune_vif_petite = productAsset("mnb_perle_jaune_vif_petite_v1.jpg", "Petite perle ronde jaune vif My Nice Bracelet");
const lot6Img_perle_bleu_cobalt = productAsset("mnb_perle_bleu_cobalt_v1.jpg", "Perle ronde bleu cobalt My Nice Bracelet");
const lot6Img_perle_bleu_pastel_petite = productAsset("mnb_perle_bleu_pastel_petite_v1.jpg", "Petite perle ronde bleu pastel My Nice Bracelet");
const lot6Img_perle_argent_metallique = productAsset("mnb_perle_argent_metallique_v1.jpg", "Perle ronde argent metallique My Nice Bracelet");
const lot6Img_perle_vert_fonce_marbree = productAsset("mnb_perle_vert_fonce_marbree_v1.jpg", "Perle ronde vert fonce marbree My Nice Bracelet");
const lot6Img_perle_bleu_marine_mate = productAsset("mnb_perle_bleu_marine_mate_v1.jpg", "Perle ronde bleu marine mate My Nice Bracelet");
const lot6Img_perle_cube_rouge_framboise = productAsset("mnb_perle_cube_rouge_framboise_v1.jpg", "Perle cube rouge framboise My Nice Bracelet");
const lot6Img_perle_rose_pois_blancs = productAsset("mnb_perle_rose_pois_blancs_v1.jpg", "Perle ronde rose a pois blancs My Nice Bracelet");
const lot6Img_perle_cristal_vert_inclusions = productAsset("mnb_perle_cristal_vert_inclusions_v1.jpg", "Perle cristal vert inclusions My Nice Bracelet");
const lot6Img_charme_noeud_jaune_paillete = productAsset("mnb_charme_noeud_jaune_paillete_v1.jpg", "Charme noeud jaune paillete My Nice Bracelet");
const lot6Img_charme_fleur_vert_clair = productAsset("mnb_charme_fleur_vert_clair_v1.jpg", "Charme fleur vert clair My Nice Bracelet");
const lot6Img_charme_etoile_orange_mate = productAsset("mnb_charme_etoile_orange_mate_v1.jpg", "Charme etoile orange mate My Nice Bracelet");
const lot6Img_perle_cristal_rose_pailletee = productAsset("mnb_perle_cristal_rose_pailletee_v1.jpg", "Perle cristal rose pailletee My Nice Bracelet");
const lot6Img_perle_vert_pale_translucide = productAsset("mnb_perle_vert_pale_translucide_v1.jpg", "Perle ronde vert pale translucide My Nice Bracelet");
const lot6Img_charme_noeud_blanc = productAsset("mnb_charme_noeud_blanc_v1.jpg", "Charme noeud blanc My Nice Bracelet");
const lot6Img_perle_cube_bleu_turquoise = productAsset("mnb_perle_cube_bleu_turquoise_v1.jpg", "Perle cube bleu turquoise My Nice Bracelet");
const lot6Img_charme_ourson_rose_translucide = productAsset("mnb_charme_ourson_rose_translucide_v1.jpg", "Charme ourson rose translucide My Nice Bracelet");
const lot6Img_perle_cristal_jaune = productAsset("mnb_perle_cristal_jaune_v1.jpg", "Perle cristal jaune My Nice Bracelet");
const lot6Img_charme_coeur_argent_metallique = productAsset("mnb_charme_coeur_argent_metallique_v1.jpg", "Charme coeur argent metallique My Nice Bracelet");
const lot6Img_charme_noeud_bleu_pastel = productAsset("mnb_charme_noeud_bleu_pastel_v1.jpg", "Charme noeud bleu pastel My Nice Bracelet");
const lot6Img_charme_fleur_turquoise_coeur_rouge = productAsset("mnb_charme_fleur_turquoise_coeur_rouge_v1.jpg", "Charme fleur turquoise coeur rouge My Nice Bracelet");
const lot6Img_charme_fleur_vert_coeur_rose = productAsset("mnb_charme_fleur_vert_coeur_rose_v1.jpg", "Charme fleur vert coeur rose My Nice Bracelet");
const lot6Img_perle_cube_blanc_cristal = productAsset("mnb_perle_cube_blanc_cristal_v1.jpg", "Perle cube blanc cristal My Nice Bracelet");
const lot6Img_perle_cristal_argentee = productAsset("mnb_perle_cristal_argentee_v1.jpg", "Perle cristal argentee My Nice Bracelet");
const lot6Img_perle_vert_coeur_sombre = productAsset("mnb_perle_vert_coeur_sombre_v1.jpg", "Perle ronde vert coeur sombre My Nice Bracelet");
const lot6Img_perle_rose_peche = productAsset("mnb_perle_rose_peche_v1.jpg", "Perle ronde rose peche My Nice Bracelet");
const lot6Img_charme_bonbon_papillote = productAsset("mnb_charme_bonbon_papillote_v1.jpg", "Charme bonbon papillote My Nice Bracelet");
const lot6Img_perle_cristal_paillete_argent = productAsset("mnb_perle_cristal_paillete_argent_v1.jpg", "Perle cristal pailletee argent My Nice Bracelet");
const lot6Img_charme_noeud_bleu_cyan = productAsset("mnb_charme_noeud_bleu_cyan_v1.jpg", "Charme noeud bleu cyan My Nice Bracelet");
const lot6Img_charme_etoile_vert_sage = productAsset("mnb_charme_etoile_vert_sage_v1.jpg", "Charme etoile vert sage My Nice Bracelet");
const lot6Img_perle_noire_mini = productAsset("mnb_perle_noire_mini_v1.jpg", "Mini perle ronde noire My Nice Bracelet");
const lot6Img_perle_cristal_iris_vert = productAsset("mnb_perle_cristal_iris_vert_v1.jpg", "Perle cristal iridescente verte My Nice Bracelet");
const lot6Img_charme_sucette_jaune_rose = productAsset("mnb_charme_sucette_jaune_rose_v1.jpg", "Charme sucette jaune rose My Nice Bracelet");
const lot6Img_charme_papillon_vert_anis = productAsset("mnb_charme_papillon_vert_anis_v1.jpg", "Charme papillon vert anis My Nice Bracelet");
const lot6Img_charme_papillon_vert_clair = productAsset("mnb_charme_papillon_vert_clair_v1.jpg", "Charme papillon vert clair My Nice Bracelet");
const lot6Img_perle_rouge_profond = productAsset("mnb_perle_rouge_profond_v1.jpg", "Perle ronde rouge profond My Nice Bracelet");
const lot6Img_perle_jaune_translucide = productAsset("mnb_perle_jaune_translucide_v1.jpg", "Perle ronde jaune translucide My Nice Bracelet");
const lot6Img_perle_cristal_rose_pale = productAsset("mnb_perle_cristal_rose_pale_v1.jpg", "Perle cristal rose pale My Nice Bracelet");
const lot6Img_perle_rouge_pois_blancs = productAsset("mnb_perle_rouge_pois_blancs_v1.jpg", "Perle ronde rouge a pois blancs My Nice Bracelet");
const lot6Img_perle_cristal_paillete_intense = productAsset("mnb_perle_cristal_paillete_intense_v1.jpg", "Perle cristal pailletee intense My Nice Bracelet");
const lot6Img_perle_bleu_glace_translucide = productAsset("mnb_perle_bleu_glace_translucide_v1.jpg", "Perle ronde bleu glace translucide My Nice Bracelet");


// ─── Lot pierres2 — 11 pierres semi-précieuses ─────────────────
const pierreOeilTigreCaramelImage = productAsset("mnb_pierre_oeil_tigre_caramel_v1.jpg", "Pierre oeil de tigre caramel My Nice Bracelet");
const pierreRhodochrositeRoseFacetteeImage = productAsset("mnb_pierre_rhodochrosite_rose_facettee_v1.jpg", "Pierre rose facettee My Nice Bracelet");
const pierreLaveNoireImage = productAsset("mnb_pierre_lave_noire_v1.jpg", "Pierre de lave noire poreuse My Nice Bracelet");
const pierreLuneCremeImage = productAsset("mnb_pierre_lune_creme_v1.jpg", "Pierre de lune creme soyeuse My Nice Bracelet");
const pierreLabradoriteGriseImage = productAsset("mnb_pierre_labradorite_grise_v1.jpg", "Pierre labradorite gris fonce My Nice Bracelet");
const pierreJaspeVertMousseImage = productAsset("mnb_pierre_jaspe_vert_mousse_v1.jpg", "Pierre jaspe vert mousse My Nice Bracelet");
const pierreLapisLazuliImage = productAsset("mnb_pierre_lapis_lazuli_v1.jpg", "Pierre lapis lazuli bleu marine My Nice Bracelet");
const pierreOnyxNoirMatImage = productAsset("mnb_pierre_onyx_noir_mat_v1.jpg", "Pierre onyx noir mat My Nice Bracelet");
const pierreUnakiteRoseVertImage = productAsset("mnb_pierre_unakite_rose_vert_v1.jpg", "Pierre unakite rose et vert My Nice Bracelet");
const pierreHowliteGrisLilasImage = productAsset("mnb_pierre_howlite_gris_lilas_v1.jpg", "Pierre howlite gris lilas My Nice Bracelet");
const pierreJaspeRougeBriqueImage = productAsset("mnb_pierre_jaspe_rouge_brique_v1.jpg", "Pierre jaspe rouge brique My Nice Bracelet");


// ─── Lot pierres3 — 11 nouvelles fiches (mai 2026) ─────────────
const charmeNoeudRosePastelImage = productAsset("mnb_charme_noeud_rose_pastel_v1.jpg", "Charme noeud rose pastel My Nice Bracelet");
const perleMagentaEtoilesArgentImage = productAsset("mnb_perle_magenta_etoiles_argent_v1.jpg", "Perle magenta etoiles argent My Nice Bracelet");
const perleJauneMoucheteeImage = productAsset("mnb_perle_jaune_mouchetee_v1.jpg", "Perle jaune mouchetee texturee My Nice Bracelet");
const pierreOeilTigreFonceImage = productAsset("mnb_pierre_oeil_tigre_fonce_v1.jpg", "Pierre oeil de tigre fonce My Nice Bracelet");
const pierreLapisLazuliPyriteImage = productAsset("mnb_pierre_lapis_lazuli_pyrite_v1.jpg", "Pierre lapis lazuli pyrite My Nice Bracelet");
const pierreGrenatRougeImage = productAsset("mnb_pierre_grenat_rouge_v1.jpg", "Pierre grenat rouge profond My Nice Bracelet");
const charmeOursVerreRoseImage = productAsset("mnb_charme_ours_verre_rose_v1.jpg", "Charme ours verre rose My Nice Bracelet");
const pierreLabradoriteVerteImage = productAsset("mnb_pierre_labradorite_verte_v1.jpg", "Pierre labradorite verte My Nice Bracelet");
const pierreJadeNoirImage = productAsset("mnb_pierre_jade_noir_v1.jpg", "Pierre jade noir My Nice Bracelet");
const pierreAgateCornalineImage = productAsset("mnb_pierre_agate_cornaline_v1.jpg", "Pierre agate cornaline marron My Nice Bracelet");
const pierreQuartzFumeImage = productAsset("mnb_pierre_quartz_fume_v1.jpg", "Pierre quartz fume brun My Nice Bracelet");


// ─── Lot pierres4 — 33 nouvelles fiches (mai 2026) ─────────────
const charmeOursMagentaImage = productAsset("mnb_charme_ours_magenta_v1.jpg", "Charme ours resine magenta My Nice Bracelet");
const charmeCoeurVioletGlitterImage = productAsset("mnb_charme_coeur_violet_glitter_v1.jpg", "Charme coeur violet glitter My Nice Bracelet");
const charmeLettreBFuchsiaImage = productAsset("mnb_charme_lettre_b_fuchsia_v1.jpg", "Charme lettre B fuchsia My Nice Bracelet");
const charmeNoeudFuchsiaImage = productAsset("mnb_charme_noeud_fuchsia_v1.jpg", "Charme noeud fuchsia My Nice Bracelet");
const charmeCoeurVerreRoseImage = productAsset("mnb_charme_coeur_verre_rose_v1.jpg", "Charme coeur verre rose My Nice Bracelet");
const charmeFleurFramboiseImage = productAsset("mnb_charme_fleur_framboise_v1.jpg", "Charme fleur framboise My Nice Bracelet");
const charmeLettreMFuchsiaImage = productAsset("mnb_charme_lettre_m_fuchsia_v1.jpg", "Charme lettre M fuchsia My Nice Bracelet");
const charmeFleurCristalRoseImage = productAsset("mnb_charme_fleur_cristal_rose_v1.jpg", "Charme fleur cristal rose My Nice Bracelet");
const charmeOursVerreMagentaImage = productAsset("mnb_charme_ours_verre_magenta_v1.jpg", "Charme ours verre magenta My Nice Bracelet");
const charmeEtoileVerreRoseImage = productAsset("mnb_charme_etoile_verre_rose_v1.jpg", "Charme etoile verre rose My Nice Bracelet");
const charmeLettreCIriseeImage = productAsset("mnb_charme_lettre_c_irisee_v1.jpg", "Charme lettre C irisee My Nice Bracelet");
const charmeTrioSpheresFuchsiaImage = productAsset("mnb_charme_trio_spheres_fuchsia_v1.jpg", "Charme trio spheres fuchsia My Nice Bracelet");
const charmeLapinFuchsiaImage = productAsset("mnb_charme_lapin_fuchsia_v1.jpg", "Charme lapin fuchsia My Nice Bracelet");
const perleCubeMauveTranslucideImage = productAsset("mnb_perle_cube_mauve_translucide_v1.jpg", "Perle cube mauve translucide My Nice Bracelet");
const perleRoseFluoMarbreeImage = productAsset("mnb_perle_rose_fluo_marbree_v1.jpg", "Perle rose fluo marbree My Nice Bracelet");
const perleTubeVerreRoseImage = productAsset("mnb_perle_tube_verre_rose_v1.jpg", "Perle tube verre rose My Nice Bracelet");
const perleRondeMagentaBrillanteImage = productAsset("mnb_perle_ronde_magenta_brillante_v1.jpg", "Perle ronde magenta brillante My Nice Bracelet");
const perleCylindreVerreRosePoudreImage = productAsset("mnb_perle_cylindre_verre_rose_poudre_v1.jpg", "Perle cylindre verre rose poudre My Nice Bracelet");
const perleCubeRosePoudreImage = productAsset("mnb_perle_cube_rose_poudre_v1.jpg", "Perle cube rose poudre My Nice Bracelet");
const perleVerreTransparenteRoseImage = productAsset("mnb_perle_verre_transparente_rose_v1.jpg", "Perle verre transparente rose My Nice Bracelet");
const perleOliveMarbreeSaumonImage = productAsset("mnb_perle_olive_marbree_saumon_v1.jpg", "Perle olive marbree saumon My Nice Bracelet");
const perleRondelleRosePandoraImage = productAsset("mnb_perle_rondelle_rose_pandora_v1.jpg", "Perle rondelle rose noire rouge My Nice Bracelet");
const perleRondeNoireBrillanteImage = productAsset("mnb_perle_ronde_noire_brillante_v1.jpg", "Perle ronde noire brillante My Nice Bracelet");
const perleDonutFuchsiaImage = productAsset("mnb_perle_donut_fuchsia_v1.jpg", "Perle donut fuchsia My Nice Bracelet");
const perleCarreRosePastelImage = productAsset("mnb_perle_carre_rose_pastel_v1.jpg", "Perle carre rose pastel My Nice Bracelet");
const perleCubeVerreLavandeImage = productAsset("mnb_perle_cube_verre_lavande_v1.jpg", "Perle cube verre lavande My Nice Bracelet");
const perleVerreTranslucideRoseImage = productAsset("mnb_perle_verre_translucide_rose_v1.jpg", "Perle verre translucide rose My Nice Bracelet");
const perleCristalRoseCoeurImage = productAsset("mnb_perle_cristal_rose_coeur_v1.jpg", "Perle cristal rose coeur My Nice Bracelet");
const perleCristalIridescentRoseImage = productAsset("mnb_perle_cristal_iridescent_rose_v1.jpg", "Perle cristal iridescent rose My Nice Bracelet");
const pierreLapisLazuliFacetteImage = productAsset("mnb_pierre_lapis_lazuli_facette_v1.jpg", "Pierre lapis lazuli facette My Nice Bracelet");
const pierreLaveNoireGranuleuseImage = productAsset("mnb_pierre_lave_noire_granuleuse_v1.jpg", "Pierre de lave noire granuleuse My Nice Bracelet");
const pierreJaspeRougeFacetteImage = productAsset("mnb_pierre_jaspe_rouge_facette_v1.jpg", "Pierre jaspe rouge facette My Nice Bracelet");
const pierreJadeVertProfondImage = productAsset("mnb_pierre_jade_vert_profond_v1.jpg", "Pierre jade vert profond My Nice Bracelet");

// ─── YuMe Hello Kitty & Friends — Light-Up Camping Lamp Series ────
// Six personnages Sanrio en porte-clés lampe-camping lumineux. Photos
// fournies (JPEG fond blanc) ; chaque produit pointe sur sa photo
// principale + la photo de groupe en image secondaire pour montrer
// la collection complète depuis la fiche produit.
const yumeCollectionImage = productAsset(
  "mnb_yume_camping_collection_v1.jpeg",
  "Collection YuMe Hello Kitty & Friends Light-Up Camping Lamp",
);
const yumeHelloKittyImage = productAsset(
  "mnb_yume_hello_kitty_camping_v1.jpeg",
  "Porte-clé lampe camping Hello Kitty YuMe",
);
const yumeHelloKittyPackshotImage = {
  ...productAsset(
    "mnb_yume_hello_kitty_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping Hello Kitty YuMe",
    1400,
  ),
  label: "Packshot",
};
const yumeHelloKittyDetailImage = {
  ...productAsset(
    "mnb_yume_hello_kitty_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping Hello Kitty YuMe",
    1400,
  ),
  label: "Detail",
};
const yumeHelloKittyScaleImage = {
  ...productAsset(
    "mnb_yume_hello_kitty_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping Hello Kitty YuMe",
    1400,
  ),
  label: "Echelle",
};
const yumeHelloKittyContextImage = {
  ...productAsset(
    "mnb_yume_hello_kitty_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping Hello Kitty YuMe",
    1400,
  ),
  label: "Atelier",
};
const yumeMyMelodyImage = productAsset(
  "mnb_yume_my_melody_camping_v1.jpeg",
  "Porte-clé lampe camping My Melody YuMe",
);
const yumeMyMelodyPackshotImage = {
  ...productAsset(
    "mnb_yume_my_melody_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping My Melody YuMe",
    1400,
  ),
  label: "Packshot",
};
const yumeMyMelodyDetailImage = {
  ...productAsset(
    "mnb_yume_my_melody_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping My Melody YuMe",
    1400,
  ),
  label: "Detail",
};
const yumeMyMelodyScaleImage = {
  ...productAsset(
    "mnb_yume_my_melody_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping My Melody YuMe",
    1400,
  ),
  label: "Echelle",
};
const yumeMyMelodyContextImage = {
  ...productAsset(
    "mnb_yume_my_melody_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping My Melody YuMe",
    1400,
  ),
  label: "Atelier",
};
const yumeCinnamorollImage = productAsset(
  "mnb_yume_cinnamoroll_camping_v1.jpeg",
  "Porte-clé lampe camping Cinnamoroll YuMe",
);
const yumeCinnamorollPackshotImage = {
  ...productAsset(
    "mnb_yume_cinnamoroll_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping Cinnamoroll YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumeCinnamorollDetailImage = {
  ...productAsset(
    "mnb_yume_cinnamoroll_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping Cinnamoroll YuMe",
    1024,
  ),
  label: "Detail",
};
const yumeCinnamorollScaleImage = {
  ...productAsset(
    "mnb_yume_cinnamoroll_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping Cinnamoroll YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumeCinnamorollContextImage = {
  ...productAsset(
    "mnb_yume_cinnamoroll_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping Cinnamoroll YuMe",
    1024,
  ),
  label: "Atelier",
};
const yumePompompurinImage = productAsset(
  "mnb_yume_pompompurin_camping_v1.jpeg",
  "Porte-clé lampe camping Pompompurin YuMe",
);
const yumePompompurinPackshotImage = {
  ...productAsset(
    "mnb_yume_pompompurin_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping Pompompurin YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumePompompurinDetailImage = {
  ...productAsset(
    "mnb_yume_pompompurin_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping Pompompurin YuMe",
    1024,
  ),
  label: "Detail",
};
const yumePompompurinScaleImage = {
  ...productAsset(
    "mnb_yume_pompompurin_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping Pompompurin YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumePompompurinContextImage = {
  ...productAsset(
    "mnb_yume_pompompurin_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping Pompompurin YuMe",
    1024,
  ),
  label: "Atelier",
};
const yumePochaccoImage = productAsset(
  "mnb_yume_pochacco_camping_v1.jpeg",
  "Porte-clé lampe camping Pochacco YuMe",
);
const yumePochaccoPackshotImage = {
  ...productAsset(
    "mnb_yume_pochacco_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping Pochacco YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumePochaccoDetailImage = {
  ...productAsset(
    "mnb_yume_pochacco_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping Pochacco YuMe",
    1024,
  ),
  label: "Detail",
};
const yumePochaccoScaleImage = {
  ...productAsset(
    "mnb_yume_pochacco_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping Pochacco YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumePochaccoContextImage = {
  ...productAsset(
    "mnb_yume_pochacco_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping Pochacco YuMe",
    1024,
  ),
  label: "Atelier",
};
const yumeKuromiImage = productAsset(
  "mnb_yume_kuromi_camping_v1.jpeg",
  "Porte-clé lampe camping Kuromi YuMe",
);
const yumeKuromiPackshotImage = {
  ...productAsset(
    "mnb_yume_kuromi_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé lampe camping Kuromi YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumeKuromiDetailImage = {
  ...productAsset(
    "mnb_yume_kuromi_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé lampe camping Kuromi YuMe",
    1024,
  ),
  label: "Detail",
};
const yumeKuromiScaleImage = {
  ...productAsset(
    "mnb_yume_kuromi_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé lampe camping Kuromi YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumeKuromiContextImage = {
  ...productAsset(
    "mnb_yume_kuromi_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé lampe camping Kuromi YuMe",
    1024,
  ),
  label: "Atelier",
};

// ─── Balloon Series ──────────────────────────────────────────────
const yumeBalloonCollection = productAsset(
  "mnb_yume_balloon_collection_v1.jpeg",
  "Collection YuMe Hello Kitty Balloon Series",
);
const yumeBalloonHelloKittyPackshotImage = {
  ...productAsset(
    "mnb_yume_balloon_hello_kitty_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Hello Kitty sur ballon-cheval rose YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumeBalloonHelloKittyDetailImage = {
  ...productAsset(
    "mnb_yume_balloon_hello_kitty_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Hello Kitty sur ballon-cheval rose YuMe",
    1024,
  ),
  label: "Detail",
};
const yumeBalloonHelloKittyScaleImage = {
  ...productAsset(
    "mnb_yume_balloon_hello_kitty_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Hello Kitty sur ballon-cheval rose YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumeBalloonHelloKittyContextImage = {
  ...productAsset(
    "mnb_yume_balloon_hello_kitty_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé Hello Kitty sur ballon-cheval rose YuMe",
    1024,
  ),
  label: "Atelier",
};
const yumeBalloonMyMelodyPackshotImage = {
  ...productAsset(
    "mnb_yume_balloon_my_melody_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé My Melody sur ballon-cheval rose YuMe",
    1400,
  ),
  label: "Packshot",
};
const yumeBalloonMyMelodyDetailImage = {
  ...productAsset(
    "mnb_yume_balloon_my_melody_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé My Melody sur ballon-cheval rose YuMe",
    1400,
  ),
  label: "Detail",
};
const yumeBalloonMyMelodyScaleImage = {
  ...productAsset(
    "mnb_yume_balloon_my_melody_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé My Melody sur ballon-cheval rose YuMe",
    1400,
  ),
  label: "Echelle",
};
const yumeBalloonMyMelodyContextImage = {
  ...productAsset(
    "mnb_yume_balloon_my_melody_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé My Melody sur ballon-cheval rose YuMe",
    1400,
  ),
  label: "Atelier",
};
const yumeBalloonCinnamorollPackshotImage = {
  ...productAsset(
    "mnb_yume_balloon_cinnamoroll_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Cinnamoroll sur ballon-cheval bleu YuMe",
    1400,
  ),
  label: "Packshot",
};
const yumeBalloonCinnamorollDetailImage = {
  ...productAsset(
    "mnb_yume_balloon_cinnamoroll_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Cinnamoroll sur ballon-cheval bleu YuMe",
    1400,
  ),
  label: "Detail",
};
const yumeBalloonCinnamorollScaleImage = {
  ...productAsset(
    "mnb_yume_balloon_cinnamoroll_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Cinnamoroll sur ballon-cheval bleu YuMe",
    1400,
  ),
  label: "Echelle",
};
const yumeBalloonCinnamorollContextImage = {
  ...productAsset(
    "mnb_yume_balloon_cinnamoroll_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé Cinnamoroll sur ballon-cheval bleu YuMe",
    1400,
  ),
  label: "Atelier",
};
const yumeBalloonPompompurinPackshotImage = {
  ...productAsset(
    "mnb_yume_balloon_pompompurin_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Pompompurin sur ballon-cheval jaune YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumeBalloonPompompurinDetailImage = {
  ...productAsset(
    "mnb_yume_balloon_pompompurin_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Pompompurin sur ballon-cheval jaune YuMe",
    1024,
  ),
  label: "Detail",
};
const yumeBalloonPompompurinScaleImage = {
  ...productAsset(
    "mnb_yume_balloon_pompompurin_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Pompompurin sur ballon-cheval jaune YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumeBalloonPompompurinContextImage = {
  ...productAsset(
    "mnb_yume_balloon_pompompurin_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé Pompompurin sur ballon-cheval jaune YuMe",
    1024,
  ),
  label: "Atelier",
};
const yumeBalloonKuromiPackshotImage = {
  ...productAsset(
    "mnb_yume_balloon_kuromi_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Kuromi sur ballon-cheval violet YuMe",
    1024,
  ),
  label: "Packshot",
};
const yumeBalloonKuromiDetailImage = {
  ...productAsset(
    "mnb_yume_balloon_kuromi_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Kuromi sur ballon-cheval violet YuMe",
    1024,
  ),
  label: "Detail",
};
const yumeBalloonKuromiScaleImage = {
  ...productAsset(
    "mnb_yume_balloon_kuromi_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Kuromi sur ballon-cheval violet YuMe",
    1024,
  ),
  label: "Echelle",
};
const yumeBalloonKuromiContextImage = {
  ...productAsset(
    "mnb_yume_balloon_kuromi_contexte_atelier_mynicebracelet_v1.png",
    "Contexte atelier porte-clé Kuromi sur ballon-cheval violet YuMe",
    1024,
  ),
  label: "Atelier",
};

// ─── Nuage Series ────────────────────────────────────────────────
const yumeNuageHelloKittyPackshotImage = {
  ...productAsset(
    "mnb_yume_nuage_hello_kitty_packshot_mynicebracelet_hd_2800.png",
    "Packshot porte-clé Hello Kitty sur nuage jaune YuMe",
    2800,
  ),
  label: "Packshot",
};
const yumeNuageHelloKittyDetailImage = {
  ...productAsset(
    "mnb_yume_nuage_hello_kitty_detail_macro_mynicebracelet_hd_2800.png",
    "Detail macro porte-clé Hello Kitty sur nuage jaune YuMe",
    2800,
  ),
  label: "Detail",
};
const yumeNuageHelloKittyScaleImage = {
  ...productAsset(
    "mnb_yume_nuage_hello_kitty_echelle_main_mynicebracelet_hd_2800.png",
    "Echelle en main porte-clé Hello Kitty sur nuage jaune YuMe",
    2800,
  ),
  label: "Echelle",
};
const yumeNuageHelloKittyContextImage = {
  ...productAsset(
    "mnb_yume_nuage_hello_kitty_contexte_atelier_mynicebracelet_hd_2800.png",
    "Contexte atelier porte-clé Hello Kitty sur nuage jaune YuMe",
    2800,
  ),
  label: "Atelier",
};
const yumeNuageKuromiPackshotImage = {
  ...productAsset(
    "mnb_yume_nuage_kuromi_packshot_mynicebracelet_hd_2800.png",
    "Packshot porte-clé Kuromi sur nuage jaune YuMe",
    2800,
  ),
  label: "Packshot",
};
const yumeNuageKuromiDetailImage = {
  ...productAsset(
    "mnb_yume_nuage_kuromi_detail_macro_mynicebracelet_hd_2800.png",
    "Detail macro porte-clé Kuromi sur nuage jaune YuMe",
    2800,
  ),
  label: "Detail",
};
const yumeNuageKuromiScaleImage = {
  ...productAsset(
    "mnb_yume_nuage_kuromi_echelle_main_mynicebracelet_hd_2800.png",
    "Echelle en main porte-clé Kuromi sur nuage jaune YuMe",
    2800,
  ),
  label: "Echelle",
};
const yumeNuageKuromiContextImage = {
  ...productAsset(
    "mnb_yume_nuage_kuromi_contexte_atelier_mynicebracelet_hd_2800.png",
    "Contexte atelier porte-clé Kuromi sur nuage jaune YuMe",
    2800,
  ),
  label: "Atelier",
};

const yumeNuageCinnamorollPackshotImage = {
  ...productAsset(
    "mnb_yume_nuage_cinnamoroll_packshot_mynicebracelet_hd_2800.png",
    "Packshot porte-clé Cinnamoroll sur nuage jaune YuMe",
    2800,
  ),
  label: "Packshot",
};
const yumeNuageCinnamorollDetailImage = {
  ...productAsset(
    "mnb_yume_nuage_cinnamoroll_detail_macro_mynicebracelet_hd_2800.png",
    "Detail macro porte-clé Cinnamoroll sur nuage jaune YuMe",
    2800,
  ),
  label: "Detail",
};
const yumeNuageCinnamorollScaleImage = {
  ...productAsset(
    "mnb_yume_nuage_cinnamoroll_echelle_main_mynicebracelet_hd_2800.png",
    "Echelle en main porte-clé Cinnamoroll sur nuage jaune YuMe",
    2800,
  ),
  label: "Echelle",
};
const yumeNuageCinnamorollContextImage = {
  ...productAsset(
    "mnb_yume_nuage_cinnamoroll_contexte_atelier_mynicebracelet_hd_2800.png",
    "Contexte atelier porte-clé Cinnamoroll sur nuage jaune YuMe",
    2800,
  ),
  label: "Atelier",
};

const yumeNuageMyMelodyPackshotImage = {
  ...productAsset(
    "mnb_yume_nuage_my_melody_packshot_mynicebracelet_hd_2800.png",
    "Packshot porte-clé My Melody sur nuage jaune YuMe",
    2800,
  ),
  label: "Packshot",
};
const yumeNuageMyMelodyDetailImage = {
  ...productAsset(
    "mnb_yume_nuage_my_melody_detail_macro_mynicebracelet_hd_2800.png",
    "Detail macro porte-clé My Melody sur nuage jaune YuMe",
    2800,
  ),
  label: "Detail",
};
const yumeNuageMyMelodyScaleImage = {
  ...productAsset(
    "mnb_yume_nuage_my_melody_echelle_main_mynicebracelet_hd_2800.png",
    "Echelle en main porte-clé My Melody sur nuage jaune YuMe",
    2800,
  ),
  label: "Echelle",
};
const yumeNuageMyMelodyContextImage = {
  ...productAsset(
    "mnb_yume_nuage_my_melody_contexte_atelier_mynicebracelet_hd_2800.png",
    "Contexte atelier porte-clé My Melody sur nuage jaune YuMe",
    2800,
  ),
  label: "Atelier",
};

const yumeNuagePochaccoPackshotImage = {
  ...productAsset(
    "mnb_yume_nuage_pochacco_packshot_mynicebracelet_hd_2800.png",
    "Packshot porte-clé Pochacco sur nuage jaune YuMe",
    2800,
  ),
  label: "Packshot",
};
const yumeNuagePochaccoDetailImage = {
  ...productAsset(
    "mnb_yume_nuage_pochacco_detail_macro_mynicebracelet_hd_2800.png",
    "Detail macro porte-clé Pochacco sur nuage jaune YuMe",
    2800,
  ),
  label: "Detail",
};
const yumeNuagePochaccoScaleImage = {
  ...productAsset(
    "mnb_yume_nuage_pochacco_echelle_main_mynicebracelet_hd_2800.png",
    "Echelle en main porte-clé Pochacco sur nuage jaune YuMe",
    2800,
  ),
  label: "Echelle",
};
const yumeNuagePochaccoContextImage = {
  ...productAsset(
    "mnb_yume_nuage_pochacco_contexte_atelier_mynicebracelet_hd_2800.png",
    "Contexte atelier porte-clé Pochacco sur nuage jaune YuMe",
    2800,
  ),
  label: "Atelier",
};
const yumeNuageCollectionImage = {
  ...productAsset(
    "mnb_yume_star_collection_v1.jpeg",
    "Collection YuMe Hello Kitty & Friends Nuage",
    640,
  ),
  label: "Collection",
};

// ─── Star Series ────────────────────────────────────────────────
const yumeStarCollection = productAsset(
  "mnb_yume_star_collection_v1.jpeg",
  "Collection YuMe Hello Kitty & Friends Light-Up Star",
);
const yumeStarHelloKitty = productAsset(
  "mnb_yume_star_hello_kitty_v1.jpeg",
  "Porte-clé Hello Kitty sur étoile lumineuse YuMe",
);
const yumeStarKuromi = productAsset(
  "mnb_yume_star_kuromi_v1.jpeg",
  "Porte-clé Kuromi sur étoile lumineuse YuMe",
);
const yumeStarPochacco = productAsset(
  "mnb_yume_star_pochacco_v1.jpeg",
  "Porte-clé Pochacco sur étoile lumineuse YuMe",
);
const yumeStarMyMelody = productAsset(
  "mnb_yume_star_my_melody_v1.jpeg",
  "Porte-clé My Melody sur étoile lumineuse YuMe",
);
const yumeStarCinnamoroll = productAsset(
  "mnb_yume_star_cinnamoroll_v1.jpeg",
  "Porte-clé Cinnamoroll sur étoile lumineuse YuMe",
);

// ─── 5cm Mini-Doll Cute Outfit Series ────────────────────────────
const yumeMinidollCollection = productAsset(
  "mnb_yume_minidoll_collection_v1.jpeg",
  "Collection YuMe Hello Kitty 5cm Mini-Doll Cute Outfit",
);
const yumeMinidollPinkDressPackshotImage = {
  ...productAsset(
    "mnb_yume_minidoll_pink_dress_packshot_mynicebracelet_v2.png",
    "Packshot Mini-Doll Hello Kitty robe rose à nœuds YuMe",
    1600,
  ),
  label: "Packshot",
};
const yumeMinidollPinkDressDetailImage = {
  ...productAsset(
    "mnb_yume_minidoll_pink_dress_detail_macro_mynicebracelet_v2.png",
    "Detail macro Mini-Doll Hello Kitty robe rose à nœuds YuMe",
    1600,
  ),
  label: "Detail",
};
const yumeMinidollPinkDressScaleImage = {
  ...productAsset(
    "mnb_yume_minidoll_pink_dress_echelle_mynicebracelet_v2.png",
    "Echelle en main Mini-Doll Hello Kitty robe rose à nœuds YuMe",
    1600,
  ),
  label: "Echelle",
};
const yumeMinidollPinkDressContextImage = {
  ...productAsset(
    "mnb_yume_minidoll_pink_dress_contexte_mynicebracelet_v2.png",
    "Contexte collection Mini-Doll Hello Kitty robe rose à nœuds YuMe",
    1600,
  ),
  label: "Atelier",
};
const yumeMinidollRockstarPackshotImage = {
  ...productAsset(
    "mnb_yume_minidoll_rockstar_packshot_mynicebracelet_v2.png",
    "Packshot Mini-Doll Hello Kitty rockstar gingham YuMe",
    1600,
  ),
  label: "Packshot",
};
const yumeMinidollRockstarDetailImage = {
  ...productAsset(
    "mnb_yume_minidoll_rockstar_detail_macro_mynicebracelet_v2.png",
    "Detail macro Mini-Doll Hello Kitty rockstar gingham YuMe",
    1600,
  ),
  label: "Detail",
};
const yumeMinidollRockstarScaleImage = {
  ...productAsset(
    "mnb_yume_minidoll_rockstar_echelle_mynicebracelet_v2.png",
    "Echelle en main Mini-Doll Hello Kitty rockstar gingham YuMe",
    1600,
  ),
  label: "Echelle",
};
const yumeMinidollRockstarContextImage = {
  ...productAsset(
    "mnb_yume_minidoll_rockstar_contexte_mynicebracelet_v2.png",
    "Contexte collection Mini-Doll Hello Kitty rockstar gingham YuMe",
    1600,
  ),
  label: "Atelier",
};
const yumeMinidollDenimPackshotImage = {
  ...productAsset(
    "mnb_yume_minidoll_denim_packshot_mynicebracelet_v2.png",
    "Packshot Mini-Doll Hello Kitty veste denim YuMe",
    1600,
  ),
  label: "Packshot",
};
const yumeMinidollDenimDetailImage = {
  ...productAsset(
    "mnb_yume_minidoll_denim_detail_macro_mynicebracelet_v2.png",
    "Detail macro Mini-Doll Hello Kitty veste denim YuMe",
    1600,
  ),
  label: "Detail",
};
const yumeMinidollDenimScaleImage = {
  ...productAsset(
    "mnb_yume_minidoll_denim_echelle_mynicebracelet_v2.png",
    "Echelle en main Mini-Doll Hello Kitty veste denim YuMe",
    1600,
  ),
  label: "Echelle",
};
const yumeMinidollDenimContextImage = {
  ...productAsset(
    "mnb_yume_minidoll_denim_contexte_mynicebracelet_v2.png",
    "Contexte collection Mini-Doll Hello Kitty veste denim YuMe",
    1600,
  ),
  label: "Atelier",
};
const yumeMinidollYellowHeart = productAsset(
  "mnb_yume_minidoll_yellow_heart_v1.jpeg",
  "Mini-Doll Hello Kitty top jaune sac cœur YuMe",
);
const yumeMinidollCheerleader = productAsset(
  "mnb_yume_minidoll_cheerleader_v1.jpeg",
  "Mini-Doll Hello Kitty pom-pom girl YuMe",
);
const yumeMinidollOveralls = productAsset(
  "mnb_yume_minidoll_overalls_v1.jpeg",
  "Mini-Doll Hello Kitty salopette bleue YuMe",
);
const yumeMinidollPirate = productAsset(
  "mnb_yume_minidoll_pirate_v1.jpeg",
  "Mini-Doll Hello Kitty pirate fanion YuMe",
);
const yumeMinidollChef = productAsset(
  "mnb_yume_minidoll_chef_v1.jpeg",
  "Mini-Doll Hello Kitty chef tablier pomme YuMe",
);

// ─── Raincoat Series ─────────────────────────────────────────────
const yumeRaincoatCollection = productAsset(
  "mnb_yume_raincoat_collection_v1.jpeg",
  "Collection YuMe Hello Kitty Raincoat Series",
);
const yumeRaincoatHelloKitty = productAsset(
  "mnb_yume_raincoat_hello_kitty_v1.jpeg",
  "Porte-clé Hello Kitty imperméable rose YuMe",
);
const yumeRaincoatMyMelody = productAsset(
  "mnb_yume_raincoat_my_melody_v1.jpeg",
  "Porte-clé My Melody imperméable rose YuMe",
);
const yumeRaincoatPompompurin = productAsset(
  "mnb_yume_raincoat_pompompurin_v1.jpeg",
  "Porte-clé Pompompurin imperméable jaune YuMe",
);
const yumeRaincoatKuromi = productAsset(
  "mnb_yume_raincoat_kuromi_v1.jpeg",
  "Porte-clé Kuromi imperméable violet YuMe",
);
const yumeRaincoatPochacco = productAsset(
  "mnb_yume_raincoat_pochacco_v1.jpeg",
  "Porte-clé Pochacco imperméable bleu YuMe",
);

// ─── One Piece Pocket Hero (window box) ──────────────────────────
const yumeOnepieceCollection = productAsset(
  "mnb_yume_onepiece_collection_v1.jpeg",
  "Collection YuMe One Piece Pocket Hero",
);
const yumeOnepieceChopper = productAsset(
  "mnb_yume_onepiece_chopper_v1.jpeg",
  "Porte-clé One Piece Chopper YuMe Pocket Hero",
);
const yumeOnepieceLuffy = productAsset(
  "mnb_yume_onepiece_luffy_v1.jpeg",
  "Porte-clé One Piece Luffy YuMe Pocket Hero",
);
const yumeOnepieceZoro = productAsset(
  "mnb_yume_onepiece_zoro_v1.jpeg",
  "Porte-clé One Piece Zoro YuMe Pocket Hero",
);

// ─── YuMe Rainbow Strap Series ──────────────────────────────────
const yumeCharacterStrapMyMelodyPackshotImage = {
  ...productAsset(
    "mnb_yume_character_strap_my_melody_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé My Melody dragonne rose YuMe",
    1200,
  ),
  label: "Packshot",
};
const yumeCharacterStrapMyMelodyDetailImage = {
  ...productAsset(
    "mnb_yume_character_strap_my_melody_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé My Melody dragonne rose YuMe",
    1200,
  ),
  label: "Detail",
};
const yumeCharacterStrapMyMelodyScaleImage = {
  ...productAsset(
    "mnb_yume_character_strap_my_melody_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé My Melody dragonne rose YuMe",
    1200,
  ),
  label: "Echelle",
};
const yumeCharacterStrapMyMelodyContextImage = {
  ...productAsset(
    "mnb_yume_character_strap_my_melody_contexte_collection_mynicebracelet_v1.png",
    "Contexte collection porte-clé My Melody dragonne rose YuMe",
    1200,
  ),
  label: "Atelier",
};
const yumeCharacterStrapPochaccoPackshotImage = {
  ...productAsset(
    "mnb_yume_character_strap_pochacco_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Pochacco dragonne bleue YuMe",
    1200,
  ),
  label: "Packshot",
};
const yumeCharacterStrapPochaccoDetailImage = {
  ...productAsset(
    "mnb_yume_character_strap_pochacco_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Pochacco dragonne bleue YuMe",
    1200,
  ),
  label: "Detail",
};
const yumeCharacterStrapPochaccoScaleImage = {
  ...productAsset(
    "mnb_yume_character_strap_pochacco_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Pochacco dragonne bleue YuMe",
    1200,
  ),
  label: "Echelle",
};
const yumeCharacterStrapPochaccoContextImage = {
  ...productAsset(
    "mnb_yume_character_strap_pochacco_contexte_collection_mynicebracelet_v1.png",
    "Contexte collection porte-clé Pochacco dragonne bleue YuMe",
    1200,
  ),
  label: "Atelier",
};
const yumeCharacterStrapChopperPackshotImage = {
  ...productAsset(
    "mnb_yume_character_strap_chopper_packshot_mynicebracelet_v1.png",
    "Packshot porte-clé Chopper dragonne bleue YuMe",
    1200,
  ),
  label: "Packshot",
};
const yumeCharacterStrapChopperDetailImage = {
  ...productAsset(
    "mnb_yume_character_strap_chopper_detail_macro_mynicebracelet_v1.png",
    "Detail macro porte-clé Chopper dragonne bleue YuMe",
    1200,
  ),
  label: "Detail",
};
const yumeCharacterStrapChopperScaleImage = {
  ...productAsset(
    "mnb_yume_character_strap_chopper_echelle_main_mynicebracelet_v1.png",
    "Echelle en main porte-clé Chopper dragonne bleue YuMe",
    1200,
  ),
  label: "Echelle",
};
const yumeCharacterStrapChopperContextImage = {
  ...productAsset(
    "mnb_yume_character_strap_chopper_contexte_collection_mynicebracelet_v1.png",
    "Contexte collection porte-clé Chopper dragonne bleue YuMe",
    1200,
  ),
  label: "Atelier",
};

// ─── Molang Scooter Series ───────────────────────────────────────
const yumeMolangScooterCollection = productAsset(
  "mnb_yume_molang_scooter_collection_v1.jpeg",
  "Collection YuMe Molang Scooter",
);
const yumeMolangScooterPurple = productAsset(
  "mnb_yume_molang_scooter_purple_v1.jpeg",
  "Porte-clé Molang scooter violet YuMe",
);
const yumeMolangScooterBlue = productAsset(
  "mnb_yume_molang_scooter_blue_v1.jpeg",
  "Porte-clé Molang scooter bleu YuMe",
);
const yumeMolangScooterGreen = productAsset(
  "mnb_yume_molang_scooter_green_v1.jpeg",
  "Porte-clé Molang scooter vert menthe YuMe",
);
const yumeMolangScooterPink = productAsset(
  "mnb_yume_molang_scooter_pink_v1.jpeg",
  "Porte-clé Molang scooter rose YuMe",
);

// ─── Molang Snack Time Series ────────────────────────────────────
const yumeMolangSnackCollection = productAsset(
  "mnb_yume_molang_snack_collection_v1.jpeg",
  "Collection YuMe Molang Snack Time",
);
const yumeMolangSnackIcecream = productAsset(
  "mnb_yume_molang_snack_icecream_v1.jpeg",
  "Porte-clé Molang glace YuMe",
);
const yumeMolangSnackDonut = productAsset(
  "mnb_yume_molang_snack_donut_v1.jpeg",
  "Porte-clé Molang donut YuMe",
);
const yumeMolangSnackTeacup = productAsset(
  "mnb_yume_molang_snack_teacup_v1.jpeg",
  "Porte-clé Molang tasse à thé YuMe",
);
const yumeMolangSnackCupcake = productAsset(
  "mnb_yume_molang_snack_cupcake_v1.jpeg",
  "Porte-clé Molang cupcake YuMe",
);

type PieceChoiceVariant = {
  pieces: number;
  price: string;
  stock: number;
  option?: {
    name: string;
    value: string;
  };
};

const pieceLabel = (pieces: number) => `${pieces} piece${pieces > 1 ? "s" : ""}`;

const pieceChoiceVariants = (baseId: string, variants: PieceChoiceVariant[]): ShopProduct["variants"] =>
  variants.map((variant) => ({
    id: `mock-variant-${baseId}-${variant.pieces}-pieces`,
    title: pieceLabel(variant.pieces),
    availableForSale: true,
    quantityAvailable: variant.stock,
    price: money(variant.price),
    compareAtPrice: null,
    selectedOptions: [
      { name: "Nombre de pieces", value: pieceLabel(variant.pieces) },
      ...(variant.option ? [variant.option] : []),
    ],
  }));

/** Default tiers : keeps old products unchanged. Caller can pass
 *  custom tiers (e.g. [20, 50, 100, 250, 500] for the new "vrac
 *  perles" SKUs the atelier sells in larger lots only — we do not
 *  want a 1-piece option there because it doesn't match how those
 *  beads are sourced from the supplier). */
const DEFAULT_PIECE_TIERS: { pieces: number; multiplier: number }[] = [
  { pieces: 1, multiplier: 1 },
  { pieces: 5, multiplier: 1 },
  { pieces: 10, multiplier: 1 },
  { pieces: 50, multiplier: 1 },
  { pieces: 100, multiplier: 0.9 },
  { pieces: 250, multiplier: 0.82 },
  { pieces: 500, multiplier: 0.75 },
];

/** Tier preset for the "vrac perles" SKUs : five lot sizes only, with
 *  the same degressive scale used at and above 50 pieces in the
 *  default tiers (kept consistent so a user comparing two products
 *  doesn't see two different price curves at 100/250/500 pieces). */
const VRAC_PIECE_TIERS: { pieces: number; multiplier: number }[] = [
  { pieces: 20, multiplier: 1 },
  { pieces: 50, multiplier: 1 },
  { pieces: 100, multiplier: 0.9 },
  { pieces: 250, multiplier: 0.82 },
  { pieces: 500, multiplier: 0.75 },
];

const pieceChoiceVariantsFromUnitPrice = (
  baseId: string,
  unitPrice: number,
  stock: number,
  option?: PieceChoiceVariant["option"],
  tiers: { pieces: number; multiplier: number }[] = DEFAULT_PIECE_TIERS,
) =>
  pieceChoiceVariants(
    baseId,
    tiers.map(({ pieces, multiplier }) => ({
      pieces,
      price: (unitPrice * pieces * multiplier).toFixed(2),
      stock: Math.max(1, Math.floor(stock / pieces)),
      option,
    })),
  );

export const mockProducts: ShopProduct[] = [
  {
    id: "mock-product-perles-bonbon",
    handle: "perles-bonbon-paris",
    title: "Perles Bonbon Paris",
    description: "Un mix pastel choisi par l'atelier, vendu par paliers de pieces.",
    descriptionHtml:
      "<p>Lot de perles pastel et lumineuses, ideal pour prolonger l'experience My Nice Bracelet chez soi.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "atelier", "selection", "nouveaute"],
    badges: ["Selection atelier", "Nouveaute"],
    availableForSale: true,
    totalInventory: 48,
    price: money("0.90"),
    compareAtPrice: null,
    featuredImage: perleCubeTransparentVertImage,
    images: [perleCubeTransparentVertImage],
    variants: pieceChoiceVariantsFromUnitPrice("perles-bonbon-paris", 0.9, 120, {
      name: "Couleur",
      value: "Pastel mix",
    }),
  },
  {
    id: "mock-product-perles-nacrees",
    handle: "perles-nacrees-atelier",
    title: "Perles Nacrees Atelier",
    description: "Creme, rose poudre et bleu ciel, a choisir par nombre de pieces.",
    descriptionHtml:
      "<p>Finition nacree, diametre mixte, ideale pour une creation fine ou une harmonie pastel.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "best-seller", "atelier"],
    badges: ["Best-seller", "Selection atelier"],
    availableForSale: true,
    totalInventory: 32,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeVertAnisImage,
    images: [perleCubeVertAnisImage],
    variants: pieceChoiceVariantsFromUnitPrice("perles-nacrees-atelier", 1.2, 100, {
      name: "Finition",
      value: "Nacree",
    }),
  },
  {
    id: "mock-product-pierres-quartz-rose",
    handle: "perles-quartz-rose-douceur",
    title: "Perles Quartz Rose Douceur",
    description: "Des nuances rose tendre pour une creation naturelle, douce et tres personnelle.",
    descriptionHtml:
      "<p>Chaque pierre peut presenter de legeres variations de couleur: c'est ce qui rend votre creation unique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "quartz", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 22,
    price: money("2.00"),
    compareAtPrice: null,
    featuredImage: coeurBlancNacreImage,
    images: [coeurBlancNacreImage],
    variants: pieceChoiceVariantsFromUnitPrice("perles-quartz-rose-douceur", 2, 80, {
      name: "Pierre",
      value: "Quartz rose",
    }),
  },
  {
    id: "mock-product-pierres-amethyste",
    handle: "perles-amethyste-violet",
    title: "Perles Amethyste Violet",
    description: "Une selection violette plus profonde, a associer avec du nacre, du dore ou des perles lettres.",
    descriptionHtml:
      "<p>Amethystes polies pour composer une creation elegante, inspiree des ateliers classiques My Nice Bracelet.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "amethyste", "petit-stock"],
    badges: ["Petit stock"],
    availableForSale: true,
    totalInventory: 7,
    price: money("2.30"),
    compareAtPrice: null,
    featuredImage: fleurBlancIrisImage,
    images: [fleurBlancIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice("perles-amethyste-violet", 2.3, 50, {
      name: "Pierre",
      value: "Amethyste",
    }),
  },
  {
    id: "mock-product-piece-ange-argent",
    handle: "piece-ange-argent",
    title: "Piece Ange Argent",
    description: "Une piece argentee lumineuse pour donner une note bijou et protectrice a une creation.",
    descriptionHtml:
      "<p>Piece coup de coeur a associer avec des perles nacrees, transparentes ou pastel pour une composition douce.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["figurines", "ange", "argent", "selection", "petit-stock"],
    badges: ["Selection atelier", "Petit stock"],
    availableForSale: true,
    totalInventory: 12,
    price: money("6.90"),
    compareAtPrice: null,
    featuredImage: angeArgentImage,
    images: [angeArgentImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-ange-argent", 6.9, 50, {
      name: "Finition",
      value: "Argent",
    }),
  },
  {
    id: "mock-product-piece-coeur-blanc-nacre",
    handle: "piece-coeur-blanc-nacre",
    title: "Piece Coeur Blanc Nacre",
    description: "Un coeur blanc nacre tres doux, parfait pour une creation tendre et lumineuse.",
    descriptionHtml:
      "<p>A associer avec des lettres, du dore ou des perles pastel pour une creation cadeau.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "coeur", "nacre", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 28,
    price: money("4.90"),
    compareAtPrice: null,
    featuredImage: coeurBlancNacreImage,
    images: [coeurBlancNacreImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-coeur-blanc-nacre", 4.9, 120, {
      name: "Couleur",
      value: "Blanc nacre",
    }),
  },
  {
    id: "mock-product-piece-coeur-jaune-iris",
    handle: "piece-coeur-jaune-iris",
    title: "Piece Coeur Jaune Iris",
    description: "Un coeur irise aux reflets jaunes, ideal pour une composition pastel plus solaire.",
    descriptionHtml:
      "<p>Ses reflets peuvent varier selon la lumiere, ce qui rend chaque association plus vivante.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "coeur", "iris", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 21,
    price: money("5.90"),
    compareAtPrice: null,
    featuredImage: coeurJauneIrisImage,
    images: [coeurJauneIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-coeur-jaune-iris", 5.9, 80, {
      name: "Couleur",
      value: "Jaune iris",
    }),
  },
  {
    id: "mock-product-piece-etoile-bleu-transparent",
    handle: "piece-etoile-bleu-transparent",
    title: "Piece Etoile Bleu Transparent",
    description: "Une etoile bleue translucide pour ajouter une touche fraiche et legere.",
    descriptionHtml:
      "<p>Fonctionne tres bien avec les perles nacrees, les lettres blanches et les harmonies bleu ciel.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "etoile", "bleu", "transparent", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 19,
    price: money("4.90"),
    compareAtPrice: null,
    featuredImage: etoileBleuTransparentImage,
    images: [etoileBleuTransparentImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-etoile-bleu-transparent", 4.9, 90, {
      name: "Couleur",
      value: "Bleu transparent",
    }),
  },
  {
    id: "mock-product-piece-fleur-blanc-iris",
    handle: "piece-fleur-blanc-iris",
    title: "Piece Fleur Blanc Iris",
    description: "Une fleur irisee, douce et lumineuse, pour une creation plus poetique.",
    descriptionHtml:
      "<p>Une piece florale facile a porter avec du nacre, du transparent ou des perles vert pastel.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "fleur", "iris", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 17,
    price: money("5.90"),
    compareAtPrice: null,
    featuredImage: fleurBlancIrisImage,
    images: [fleurBlancIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-fleur-blanc-iris", 5.9, 70, {
      name: "Couleur",
      value: "Blanc iris",
    }),
  },
  {
    id: "mock-product-piece-lapin-transparent-iris",
    handle: "piece-lapin-transparent-iris",
    title: "Piece Lapin Transparent Iris",
    description: "Un lapin irise tout en transparence, signature kawaii douce de l'atelier.",
    descriptionHtml:
      "<p>A utiliser comme piece principale d'une creation kawaii, avec des perles pastel ou nacrees.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "lapin", "kawaii", "iris", "petit-stock"],
    badges: ["Petit stock"],
    availableForSale: true,
    totalInventory: 10,
    price: money("7.90"),
    compareAtPrice: null,
    featuredImage: lapinTransparentIrisImage,
    images: [lapinTransparentIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-lapin-transparent-iris", 7.9, 60, {
      name: "Couleur",
      value: "Transparent iris",
    }),
  },
  {
    id: "mock-product-piece-ourson-vert-menthe",
    handle: "piece-ourson-vert-menthe",
    title: "Piece Ourson Vert Menthe",
    description: "Un ourson vert menthe transparent, doux et frais, pour une creation kawaii premium.",
    descriptionHtml:
      "<p>Une piece coup de coeur a associer avec du blanc nacre, du bleu clair ou du vert pastel.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "ourson", "kawaii", "vert", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 14,
    price: money("7.90"),
    compareAtPrice: null,
    featuredImage: oursonVertMentheImage,
    images: [oursonVertMentheImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-ourson-vert-menthe", 7.9, 70, {
      name: "Couleur",
      value: "Vert menthe",
    }),
  },
  {
    id: "mock-product-piece-papillon-vert-iris",
    handle: "piece-papillon-vert-iris",
    title: "Piece Papillon Vert Iris",
    description: "Un papillon irise aux reflets verts pour une creation lumineuse et delicate.",
    descriptionHtml:
      "<p>Parfait pour une harmonie Sakura Kawaii ou une selection pastel plus fraiche.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "papillon", "iris", "vert", "edition"],
    badges: ["Edition limitee"],
    availableForSale: true,
    totalInventory: 9,
    price: money("6.90"),
    compareAtPrice: null,
    featuredImage: papillonVertIrisImage,
    images: [papillonVertIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-papillon-vert-iris", 6.9, 50, {
      name: "Couleur",
      value: "Vert iris",
    }),
  },
  {
    id: "mock-product-piece-papillon-vert-pastel",
    handle: "piece-papillon-vert-pastel",
    title: "Piece Papillon Vert Pastel",
    description: "Un papillon vert pastel plus doux, a glisser dans une composition fleurie.",
    descriptionHtml:
      "<p>Une piece tendre pour composer une attache telephone, un porte-cle ou une creation lumineuse.</p>",
    productType: "Figurines",
    category: "perles",
    tags: ["figurines", "papillon", "vert", "pastel", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 18,
    price: money("5.90"),
    compareAtPrice: null,
    featuredImage: papillonVertPastelImage,
    images: [papillonVertPastelImage],
    variants: pieceChoiceVariantsFromUnitPrice("piece-papillon-vert-pastel", 5.9, 80, {
      name: "Couleur",
      value: "Vert pastel",
    }),
  },
  {
    id: "mock-product-perle-cube-transparent-vert",
    handle: "perle-cube-transparent-vert",
    title: "Perles Cube Transparent Vert",
    description: "Des cubes transparents aux reflets verts, disponibles par paliers de pieces.",
    descriptionHtml:
      "<p>Mini-lot facile a associer avec les figurines vert menthe, les fleurs irisees ou les perles nacrees.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "transparent", "vert", "selection"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 34,
    price: money("0.90"),
    compareAtPrice: null,
    featuredImage: perleCubeTransparentVertImage,
    images: [perleCubeTransparentVertImage],
    variants: pieceChoiceVariantsFromUnitPrice("perle-cube-transparent-vert", 0.9, 120, {
      name: "Couleur",
      value: "Transparent vert",
    }),
  },
  {
    id: "mock-product-perle-cube-vert-anis-facette",
    handle: "perle-cube-vert-anis-facette",
    title: "Perles Cube Vert Anis Facette",
    description: "Des cubes facettes vert anis, a choisir par nombre de pieces.",
    descriptionHtml:
      "<p>Mini-lot graphique, ideal pour contraster avec du blanc nacre, du bleu transparent ou du dore.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "facette", "vert", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 26,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: perleCubeVertAnisImage,
    images: [perleCubeVertAnisImage],
    variants: pieceChoiceVariantsFromUnitPrice("perle-cube-vert-anis-facette", 1.1, 110, {
      name: "Couleur",
      value: "Vert anis",
    }),
  },

  // ─── Lot 1 — Nouvelles perles & pieces (photos brutes) ───────────
  // Sept fiches creees a partir des photos shootees a la main par
  // l'atelier. Chaque produit est vendu en lots de 20 / 50 / 100 /
  // 250 / 500 pieces (preset VRAC_PIECE_TIERS) — pas de vente a la
  // piece sur ces SKUs, c'est de l'approvisionnement vrac. Le palier
  // 100 active la mention "Prix degressif applique" du
  // ProductPurchasePanel (seuil hasVolumeDiscount = 100).
  {
    id: "mock-product-perle-lilas-pastel",
    handle: "perle-lilas-pastel",
    title: "Perles Rondes Lilas Pastel",
    description: "Perles rondes lilas pastel, finition nacree douce.",
    descriptionHtml:
      "<p>Petites perles rondes lilas pastel, finition nacree douce. Diametre uniforme, percage central pour un enfilage facile.</p><p>Ideales pour composer une harmonie pastel ou rehausser un rang de perles blanches.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "lilas", "pastel", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.45"),
    compareAtPrice: null,
    featuredImage: perleLilasPastelImage,
    images: [perleLilasPastelImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-lilas-pastel",
      0.45,
      600,
      { name: "Couleur", value: "Lilas pastel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rhodonite-rose",
    handle: "perle-rhodonite-rose",
    title: "Perles Pierre Rhodonite Rose",
    description: "Pierre rhodonite naturelle aux veines roses uniques.",
    descriptionHtml:
      "<p>Perles taillees dans la rhodonite, pierre rose veinee de noir et de gris. Chaque perle presente une marbrure unique : aucune ne ressemble exactement a sa voisine.</p><p>A associer avec du dore, du blanc nacre ou du bois clair pour une creation au caractere naturel.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "rhodonite", "rose", "naturelle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleRhodoniteRoseImage,
    images: [perleRhodoniteRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rhodonite-rose",
      1.2,
      400,
      { name: "Pierre", value: "Rhodonite" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-caramel-dore",
    handle: "perle-caramel-dore",
    title: "Perles Rondes Caramel Dore",
    description: "Perles rondes caramel dore, finition nacree chaude.",
    descriptionHtml:
      "<p>Perles rondes aux reflets caramel et or, finition nacree chaude. Parfaites pour une creation automnale ou boheme.</p><p>S'accordent avec du blanc nacre, du bois et du dore pour un effet bijou subtil.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "caramel", "dore", "nacrees", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleCaramelDoreImage,
    images: [perleCaramelDoreImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-caramel-dore",
      0.55,
      600,
      { name: "Couleur", value: "Caramel dore" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-jaspe-kaki",
    handle: "perle-jaspe-kaki",
    title: "Perles Pierre Jaspe Kaki",
    description: "Pierre jaspe vert kaki au grain naturel, finition mate.",
    descriptionHtml:
      "<p>Perles taillees dans le jaspe, pierre opaque a grain naturel, ici dans une teinte vert kaki tres minerale. Finition mate, pas de polish brillant — l'aspect terre cuite est volontaire.</p><p>A associer avec du dore mat, du cuir ou du bois clair pour une creation telluric et boheme.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "kaki", "vert", "naturelle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: perleJaspeKakiImage,
    images: [perleJaspeKakiImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-jaspe-kaki",
      1.1,
      400,
      { name: "Pierre", value: "Jaspe kaki" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-moutarde-texturee",
    handle: "perle-moutarde-texturee",
    title: "Perles Rondes Moutarde Texturees",
    description: "Perles rondes moutarde au grain texture, lumineuses sur tons neutres. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Perles rondes moutarde a la texture mat-grainee, plus matte qu'une perle nacree classique. Couleur saturee, lumineuse sur des tons creme ou bois.</p><p>Idea : alterner avec du blanc nacre ou du transparent pour casser la densite de la couleur.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "moutarde", "jaune", "texturees", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: perleMoutardeTextureeImage,
    images: [perleMoutardeTextureeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-moutarde-texturee",
      0.5,
      500,
      { name: "Couleur", value: "Moutarde texturee" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-fuchsia-etoiles",
    handle: "perle-fuchsia-etoiles",
    title: "Perles Rondes Fuchsia Motif Etoiles",
    description: "Perles fuchsia parsemees de petites etoiles blanches. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes fuchsia / magenta a fond brillant, parsemees de petites etoiles blanches imprimees. Effet petillant, parfait pour une creation festive ou enfantine.</p><p>A associer avec du blanc nacre, du transparent ou du dore pour faire ressortir les etoiles.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "fuchsia", "rose", "etoiles", "motif", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.60"),
    compareAtPrice: null,
    featuredImage: perleFuchsiaEtoilesImage,
    images: [perleFuchsiaEtoilesImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-fuchsia-etoiles",
      0.6,
      500,
      { name: "Couleur", value: "Fuchsia etoile" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-piece-coeur-rose-translucide",
    handle: "piece-coeur-rose-translucide",
    title: "Piece Coeur Rose Translucide",
    description: "Coeur translucide rose a inclusions perlees.",
    descriptionHtml:
      "<p>Petit coeur en resine translucide rose, avec inclusions perlees au coeur de la piece. Effet lumineux a la lumiere, romantique sur fond clair.</p><p>A associer avec des perles nacrees blanc / rose pour une creation tendre, ou avec du dore pour un contraste plus tranche.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["figurines", "coeur", "rose", "translucide", "resine", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("1.50"),
    compareAtPrice: null,
    featuredImage: pieceCoeurRoseTranslucideImage,
    images: [pieceCoeurRoseTranslucideImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "piece-coeur-rose-translucide",
      1.5,
      350,
      { name: "Forme", value: "Coeur translucide" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── Lot 2 — Perles & charmes (photos brutes) ───────────────────
  // Sept SKUs supplementaires shootees a la main, meme template que
  // le Lot 1 : paliers vrac VRAC_PIECE_TIERS [20/50/100/250/500],
  // photos en .jpg recadrees 1400x1400 que Dany swappera plus tard.
  {
    id: "mock-product-perle-cube-rose-magenta",
    handle: "perle-cube-rose-magenta",
    title: "Perles Cube Verre Rose Magenta",
    description: "Cubes en verre transparent au coeur rose magenta. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Cubes en verre soufflé translucide, avec un noyau central rose magenta saturé. Effet bijou-bonbon, parfait pour casser un rang de perles rondes.</p><p>A associer avec du blanc nacré, du transparent ou du dore pour une creation pop.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "verre", "rose", "magenta", "transparent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleCubeRoseMagentaImage,
    images: [perleCubeRoseMagentaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-rose-magenta",
      0.65,
      400,
      { name: "Couleur", value: "Rose magenta" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-fleur-rose-iris",
    handle: "perle-fleur-rose-iris",
    title: "Perles Fleur Rose Iris Pailletee",
    description: "Perles en forme de fleur rose iris a 5 petales pailletees. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles taillees en fleur a 5 petales, finition rose iris pailletee. Moulees en resine semi-translucide, percage central — s'enfilent comme une perle classique.</p><p>Idee : alterner avec des perles rondes nacrees pour rythmer un bracelet.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "fleur", "rose", "iris", "pailletee", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.70"),
    compareAtPrice: null,
    featuredImage: perleFleurRoseIrisImage,
    images: [perleFleurRoseIrisImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-fleur-rose-iris",
      0.7,
      350,
      { name: "Forme", value: "Fleur 5 petales" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-irisee-bulle",
    handle: "perle-irisee-bulle",
    title: "Perles Rondes Irisees Bulle de Savon",
    description: "Petites perles rondes a effet rainbow bulle de savon. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes au revetement iridescent qui change de couleur selon l'angle de la lumiere — bleu, rose, violet, vert. Effet bulle de savon doux, plus subtil qu'un perle holographique.</p><p>S'utilisent en perle de signature au milieu d'un rang neutre, ou en serie pour un effet 100 % iris.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "irisees", "rainbow", "iris", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleIriseeBulleImage,
    images: [perleIriseeBulleImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-irisee-bulle",
      0.55,
      600,
      { name: "Couleur", value: "Iris bulle de savon" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-nacree-rose-blush",
    handle: "perle-nacree-rose-blush",
    title: "Perles Rondes Nacrees Rose Blush",
    description: "Perles rondes nacrees rose blush, finition douce et chaleureuse. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Perles rondes nacrees dans une teinte rose blush plus chaude que le rose poudre classique. Finition perlee, eclat subtil.</p><p>S'accordent avec du blanc casse, du dore et du beige pour une creation tendre et romantique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "nacrees", "rose", "blush", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.45"),
    compareAtPrice: null,
    featuredImage: perleNacreeRoseBlushImage,
    images: [perleNacreeRoseBlushImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-nacree-rose-blush",
      0.45,
      600,
      { name: "Couleur", value: "Rose blush" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-noire-brillante",
    handle: "perle-noire-brillante",
    title: "Perles Rondes Noires Brillantes",
    description: "Perles rondes noires brillantes, finition lustree. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes noires a finition brillante. Couleur profonde, contraste net — utiles comme separateur ou comme rang complet pour une creation graphique.</p><p>S'accordent avec absolument tout : nacre, dore, transparent, couleurs vives. La perle universelle du rang noir-blanc.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "noires", "brillantes", "essentielle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 700,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: perleNoireBrillanteImage,
    images: [perleNoireBrillanteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-noire-brillante",
      0.5,
      700,
      { name: "Couleur", value: "Noir brillant" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-terracotta-mate",
    handle: "perle-terracotta-mate",
    title: "Perles Rondes Terracotta Mate",
    description: "Perles rondes terracotta a finition mate, ton terre cuite chaud. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Perles rondes terracotta dans un brun-terre cuite mat, sans brillance. Aspect minéral, plus chaud que du beige classique.</p><p>A associer avec du dore mat, du bois clair, du blanc casse ou du vert kaki pour une creation boheme et terreuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "terracotta", "marron", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleTerracottaMateImage,
    images: [perleTerracottaMateImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-terracotta-mate",
      0.55,
      500,
      { name: "Couleur", value: "Terracotta mate" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-poisson-rouge",
    handle: "charme-poisson-rouge",
    title: "Charme Poisson Rouge en Verre",
    description: "Charme figurine poisson rouge soufflé verre, percé pour bracelet. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Petite figurine poisson rouge en verre soufflé, peinte a la main : corps rouge, oeil noir et pointes blanches. Trous traversants pour s'enfiler dans un bracelet ou un collier.</p><p>Piece signature, a glisser au centre d'une creation simple pour un effet bijou attachant.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "poisson", "verre", "rouge", "figurine", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmePoissonRougeImage,
    images: [charmePoissonRougeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-poisson-rouge",
      1.2,
      250,
      { name: "Forme", value: "Poisson rouge verre" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── Lot 3 — Perles, pierres & charme (photos brutes) ──────────────
  // Sept SKUs : 3 perles (cacao, iris violet, porcelaine vert fleur),
  // 3 pierres (hematite, jade olive, jade lavande ovale), 1 charme
  // (etoile violette ceramique). Memes paliers VRAC_PIECE_TIERS.
  {
    id: "mock-product-perle-hematite-mate",
    handle: "perle-hematite-mate",
    title: "Perles Pierre Hematite Mate",
    description: "Pierre hematite gris fonce a finition mate. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles taillees dans l'hematite, pierre dense au gris-anthracite metallique mais ici en finition mate, sans brillance. Tenue solide, eclat sourd.</p><p>A associer avec du dore, du rouge profond ou du blanc casse pour une creation graphique et bijou.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "hematite", "gris", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: perleHematiteMateImage,
    images: [perleHematiteMateImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-hematite-mate",
      1.1,
      400,
      { name: "Pierre", value: "Hematite mate" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cacao-mate",
    handle: "perle-cacao-mate",
    title: "Perles Rondes Cacao Mate",
    description: "Perles rondes cacao a finition mate, ton chocolat fonce. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes brun-cacao profond, finition mate. Couleur chaude et neutre qui se marie avec a peu pres tout — ideale comme rang de fond pour mettre en valeur les pierres ou les charmes au-dessus.</p><p>S'accordent avec le dore, le creme et les rouges chauds.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "cacao", "marron", "mate", "neutre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleCacaoMateImage,
    images: [perleCacaoMateImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cacao-mate",
      0.55,
      600,
      { name: "Couleur", value: "Cacao mat" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-jade-olive",
    handle: "perle-jade-olive",
    title: "Perles Pierre Jade Olive",
    description: "Pierre jade olive aux nuances vertes nuancees. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles taillees dans le jade olive, pierre semi-translucide aux variations vert-olive subtiles. Chaque perle a sa propre nuance — l'effet d'un rang complet est doux et organique.</p><p>S'associe avec du dore, du blanc nacre ou du bois pour une creation natuRELLE et boheme.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jade", "olive", "vert", "naturelle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleJadeOliveImage,
    images: [perleJadeOliveImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-jade-olive",
      1.2,
      400,
      { name: "Pierre", value: "Jade olive" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-iris-violet-bombee",
    handle: "perle-iris-violet-bombee",
    title: "Perles Rondes Iris Violet Bombees",
    description: "Grosses perles rondes a effet iris violet brillant. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes plus grosses que le format standard, finition iris violet a fort eclat. Effet bijou-bonbon spectaculaire — chaque perle reflete les couleurs voisines.</p><p>A utiliser comme perle signature au centre d'un bracelet, ou en plein rang pour une creation flashy.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "iris", "violet", "bombee", "grand-format", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.75"),
    compareAtPrice: null,
    featuredImage: perleIrisVioletBombeeImage,
    images: [perleIrisVioletBombeeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-iris-violet-bombee",
      0.75,
      350,
      { name: "Couleur", value: "Iris violet bombe" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-porcelaine-vert-fleur",
    handle: "perle-porcelaine-vert-fleur",
    title: "Perles Porcelaine Vert Motif Fleur",
    description: "Perles porcelaine peintes a la main motif fleur sur fond vert. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Perles rondes en porcelaine vert sauge avec un motif fleur peint a la main en blanc. Chaque perle est legerement differente — l'aspect artisanal est volontaire.</p><p>A glisser entre des perles unies pour rythmer un rang, ou utilisees seules comme accent dans une creation epuree.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "vert", "fleur", "motif", "peinte-main", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perlePorcelaineVertFleurImage,
    images: [perlePorcelaineVertFleurImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-porcelaine-vert-fleur",
      0.85,
      250,
      { name: "Motif", value: "Vert fleur peinte" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-ovale-jade-lavande",
    handle: "perle-ovale-jade-lavande",
    title: "Perles Ovales Jade Lavande",
    description: "Perles ovales en jade lavande, format allonge. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles ovales taillees dans le jade lavande, semi-translucide aux nuances violet doux. Format allonge (plus haut que large), parfait pour casser un rang de perles rondes.</p><p>S'associe avec du blanc nacre, du dore ou du violet plus profond pour une creation elegante.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jade", "lavande", "violet", "ovale", "naturelle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 300,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: perleOvaleJadeLavandeImage,
    images: [perleOvaleJadeLavandeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-ovale-jade-lavande",
      1.3,
      300,
      { name: "Pierre", value: "Jade lavande ovale" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-etoile-violette-ceramique",
    handle: "charme-etoile-violette-ceramique",
    title: "Charme Etoile Violette Ceramique",
    description: "Etoile violette en ceramique avec etoile blanche peinte. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Charme en forme d'etoile, ceramique violet profond, avec une etoile blanche peinte au centre. Effet bijou-jouet, parfait comme point focal d'un bracelet.</p><p>Percage transversal pour un enfilage facile.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "etoile", "ceramique", "violet", "motif", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 200,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: charmeEtoileViolettteCeramiqueImage,
    images: [charmeEtoileViolettteCeramiqueImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-etoile-violette-ceramique",
      0.95,
      200,
      { name: "Forme", value: "Etoile ceramique" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── Lot 4 — Perles & pierres (photos brutes) ──────────────────────
  // Sept SKUs : 5 perles (porcelaine bleu damier, bleu ciel petite,
  // blanc craie, peche translucide, marron fonce brillante) +
  // 2 pierres (oeil-de-tigre dore, cornaline rouge). Memes paliers
  // VRAC_PIECE_TIERS.
  {
    id: "mock-product-perle-porcelaine-bleu-damier",
    handle: "perle-porcelaine-bleu-damier",
    title: "Perles Porcelaine Bleu Damier",
    description: "Perles porcelaine bleu marine motif damier sur fond blanc. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes en porcelaine, motif damier (quadrillage) bleu marine peint a la main sur fond blanc. Aspect bijou-vintage, evoque les ceramiques de Delft.</p><p>A glisser au centre d'un rang de perles unies pour rythmer une creation, ou en serie pour un effet jacquard.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "bleu", "blanc", "damier", "motif", "peinte-main", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perlePorcelaineBleuDamierImage,
    images: [perlePorcelaineBleuDamierImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-porcelaine-bleu-damier",
      0.85,
      250,
      { name: "Motif", value: "Bleu damier" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-oeil-de-tigre-dore",
    handle: "perle-oeil-de-tigre-dore",
    title: "Perles Pierre Oeil-de-Tigre Dore",
    description: "Pierre oeil-de-tigre dore aux reflets chatoyants. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles taillees dans l'oeil-de-tigre dore, pierre semi-precieuse aux reflets miel et brun caramel. Effet chatoyant naturel : la lumiere semble courir dans la perle quand on la tourne.</p><p>Pierre symbolique de protection et de confiance — a associer avec du dore mat, du blanc casse ou du noir pour une creation bijou puissante.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "oeil-de-tigre", "dore", "naturelle", "chatoyant", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 350,
    price: money("1.40"),
    compareAtPrice: null,
    featuredImage: perleOeilDeTigreDoreImage,
    images: [perleOeilDeTigreDoreImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-oeil-de-tigre-dore",
      1.4,
      350,
      { name: "Pierre", value: "Oeil-de-tigre dore" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bleu-ciel-petite",
    handle: "perle-bleu-ciel-petite",
    title: "Petites Perles Rondes Bleu Ciel",
    description: "Petites perles rondes bleu ciel pale, format mini. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes en petit format (diametre reduit), couleur bleu ciel pale lumineuse. Idéales pour des creations fines ou comme perles de remplissage entre des elements plus gros.</p><p>S'associent avec du blanc nacre, du dore et des pierres bleues pour une creation aerienne.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "ciel", "petite-taille", "fines", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 800,
    price: money("0.40"),
    compareAtPrice: null,
    featuredImage: perleBleuCielPetiteImage,
    images: [perleBleuCielPetiteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bleu-ciel-petite",
      0.4,
      800,
      { name: "Couleur", value: "Bleu ciel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cornaline-rouge",
    handle: "perle-cornaline-rouge",
    title: "Perles Pierre Cornaline Rouge",
    description: "Pierre cornaline rouge brique, ton chaud naturel. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles taillees dans la cornaline, pierre semi-precieuse aux teintes rouge brique a orange profond. Variations naturelles d'une perle a l'autre — chaque perle a sa propre intensite.</p><p>Pierre dite d'energie et de vitalite. A associer avec du dore, du blanc nacre ou du noir pour une creation chaude et puissante.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "rouge", "naturelle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 350,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: perleCornalineRougeImage,
    images: [perleCornalineRougeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cornaline-rouge",
      1.3,
      350,
      { name: "Pierre", value: "Cornaline" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-blanc-craie",
    handle: "perle-blanc-craie",
    title: "Perles Rondes Blanc Craie",
    description: "Perles rondes blanc craie mat, finition opaque douce. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes blanc craie en finition mate, sans brillance. Plus douces visuellement qu'un blanc nacre, lumineuses sans flasher.</p><p>La perle universelle de transition : s'accordent avec absolument tout. Ideales en grand rang, ou comme perles de separation entre elements colores.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "blanc", "craie", "mate", "essentielle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 800,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: perleBlancCraieImage,
    images: [perleBlancCraieImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-blanc-craie",
      0.5,
      800,
      { name: "Couleur", value: "Blanc craie" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-peche-translucide",
    handle: "perle-peche-translucide",
    title: "Perles Rondes Peche Translucide",
    description: "Perles rondes peche translucide, ton rose-orange doux. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes en resine semi-translucide, teinte peche entre rose et orange pale. Effet bijou-bonbon, lumineuses a la lumiere du jour.</p><p>S'accordent avec du dore, du blanc nacre et des perles couleur creme pour une creation tendre et estivale.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "peche", "rose", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perlePecheTranslucideImage,
    images: [perlePecheTranslucideImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-peche-translucide",
      0.55,
      600,
      { name: "Couleur", value: "Peche translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-marron-fonce-brillante",
    handle: "perle-marron-fonce-brillante",
    title: "Perles Rondes Marron Fonce Brillantes",
    description: "Perles rondes marron fonce a finition brillante. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes brun-noir profond, finition brillante. Reflets dores a la lumiere directe — couleur dense qui contraste fort avec les perles claires.</p><p>A associer avec du blanc nacre, du dore ou du beige pour une creation chaleureuse type cafe-vanille.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "marron", "fonce", "brillantes", "neutre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleMarronFonceBrillanteImage,
    images: [perleMarronFonceBrillanteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-marron-fonce-brillante",
      0.55,
      600,
      { name: "Couleur", value: "Marron fonce" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── Lot 5 — Perles & charmes (photos brutes) ──────────────────────
  // Sept SKUs : 5 perles (olive bronze, vert menthe mate, porcelaine
  // blanc motif jaune, brique mate, olive marbree) + 2 charmes
  // (sac rouge ceramique, coquillage cauri).
  {
    id: "mock-product-perle-olive-bronze",
    handle: "perle-olive-bronze",
    title: "Perles Rondes Olive Bronze",
    description: "Perles rondes olive bronze sombre, finition mate. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes brun-olive sombre aux reflets bronze, finition mate. Couleur dense qui se marie avec les pierres terreuses (jaspe kaki, hematite) ou avec du dore.</p><p>A utiliser comme rang de fond pour faire ressortir des perles claires ou colorees.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "olive", "bronze", "mate", "neutre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleOliveBronzeImage,
    images: [perleOliveBronzeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-olive-bronze",
      0.55,
      600,
      { name: "Couleur", value: "Olive bronze" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-sac-rouge-ceramique",
    handle: "charme-sac-rouge-ceramique",
    title: "Charme Petit Sac Rouge Ceramique",
    description: "Charme en forme de petit sac a pochon rouge, ceramique. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Charme miniature en forme de petit sac a pochon noue, ceramique rouge profond. Detail soigne (les plis du sac sont sculptes), peut s'enfiler comme une perle classique.</p><p>Effet bijou-bonbonniere : a glisser au centre d'un bracelet pour creer un point focal narratif.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "sac", "ceramique", "rouge", "figuratif", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: charmeSacRougeCeramiqueImage,
    images: [charmeSacRougeCeramiqueImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-sac-rouge-ceramique",
      1.1,
      250,
      { name: "Forme", value: "Sac rouge ceramique" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-vert-menthe-mate",
    handle: "perle-vert-menthe-mate",
    title: "Perles Rondes Vert Menthe Mate",
    description: "Perles rondes vert menthe pastel a finition mate. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes vert menthe pastel doux, finition mate sans brillance. Couleur fraiche et lumineuse, parfaite pour une creation printaniere.</p><p>S'accordent avec du blanc nacre, du dore ou du rose poudre pour une harmonie tendre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "vert", "menthe", "pastel", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleVertMentheMateImage,
    images: [perleVertMentheMateImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-vert-menthe-mate",
      0.55,
      600,
      { name: "Couleur", value: "Vert menthe mate" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-porcelaine-blanc-motif-jaune",
    handle: "perle-porcelaine-blanc-motif-jaune",
    title: "Perles Porcelaine Blanc Motif Jaune",
    description: "Perles porcelaine blanc avec motif fleur jaune peint a la main. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Perles rondes en porcelaine blanc, motif fleur jaune peint a la main. Chaque perle est legerement differente, l'aspect artisanal est volontaire.</p><p>A utiliser comme perle d'accent au centre d'un rang uni, ou pour rythmer une composition multicolore.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "blanc", "jaune", "motif", "fleur", "peinte-main", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perlePorcelaineBlancMotifJauneImage,
    images: [perlePorcelaineBlancMotifJauneImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-porcelaine-blanc-motif-jaune",
      0.85,
      250,
      { name: "Motif", value: "Blanc fleur jaune" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-coquillage-cauri",
    handle: "charme-coquillage-cauri",
    title: "Charme Coquillage Cauri",
    description: "Charme coquillage cauri naturel, ouverture noire au centre. Lots de 20 a 500.",
    descriptionHtml:
      "<p>Petit coquillage cauri naturel, fond beige nacre avec ouverture noire striee au centre. Coquillage symbolique (richesse, protection) — chaque piece est unique de par sa forme et ses motifs.</p><p>A enfiler avec un cordon ou en breloque sur un bracelet boheme. Style ethnic, plage, voyage.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "coquillage", "cauri", "naturel", "ethnique", "boheme", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: charmeCoquillageCauriImage,
    images: [charmeCoquillageCauriImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-coquillage-cauri",
      0.95,
      300,
      { name: "Forme", value: "Coquillage cauri" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-brique-mate",
    handle: "perle-brique-mate",
    title: "Perles Rondes Brique Mate",
    description: "Perles rondes brique mat, ton terre cuite chaud. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes brun-orange brique, finition mate. Couleur chaude et chaleureuse qui rappelle la terre cuite ou la poterie.</p><p>S'associent avec du dore, du blanc casse, du vert kaki ou d'autres tons terreux pour une creation boheme.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "brique", "marron", "orange", "mate", "terre-cuite", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleBriqueMateImage,
    images: [perleBriqueMateImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-brique-mate",
      0.55,
      600,
      { name: "Couleur", value: "Brique mate" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-olive-marbree",
    handle: "perle-olive-marbree",
    title: "Perles Rondes Olive Marbrees",
    description: "Perles rondes olive avec inclusions vertes marbrees. Lots de 20 a 500 pieces.",
    descriptionHtml:
      "<p>Perles rondes brun-olive avec des inclusions verdatres marbrees, donnant un effet pierre semi-precieuse a chaque perle. Variations naturelles d'une perle a l'autre.</p><p>S'accordent avec du dore mat, du blanc casse ou du marron fonce pour une creation telluric.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "olive", "marbree", "vert", "naturelle-effet", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleOliveMarbreeImage,
    images: [perleOliveMarbreeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-olive-marbree",
      0.55,
      500,
      { name: "Couleur", value: "Olive marbree" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── Lot 6 — Final batch (48 fiches) ────────────────────────────
  {
    id: "mock-product-perle-porcelaine-blanc-motif-vert",
    handle: "perle-porcelaine-blanc-motif-vert",
    title: "Perles Porcelaine Blanc Motif Vert",
    description: "Perles rondes en porcelaine blanc, motif fleur vert peint a la main. Aspect ceramique artisanale. A glisser au centre d'un rang de perles unies pour rythmer une creation.",
    descriptionHtml: "<p>Perles rondes en porcelaine blanc, motif fleur vert peint a la main. Aspect ceramique artisanale.</p><p>A glisser au centre d'un rang de perles unies pour rythmer une creation.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "blanc", "vert", "motif", "peinte-main", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_porcelaine_blanc_motif_vert,
    images: [lot6Img_perle_porcelaine_blanc_motif_vert],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-porcelaine-blanc-motif-vert",
      0.85,
      250,
      { name: "Motif", value: "Blanc fleur verte" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-mouchetee-oeuf-caille",
    handle: "perle-mouchetee-oeuf-caille",
    title: "Perles Mouchetees Oeuf de Caille",
    description: "Perles rondes beige clair mouchetees de marron, evoquant la coquille d'un oeuf de caille. Variations naturelles. S'associent avec du dore mat, du blanc casse ou du brun.",
    descriptionHtml: "<p>Perles rondes beige clair mouchetees de marron, evoquant la coquille d'un oeuf de caille. Variations naturelles.</p><p>S'associent avec du dore mat, du blanc casse ou du brun.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "mouchetee", "beige", "naturelle-effet", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_mouchetee_oeuf_caille,
    images: [lot6Img_perle_mouchetee_oeuf_caille],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-mouchetee-oeuf-caille",
      0.55,
      600,
      { name: "Couleur", value: "Mouchetee oeuf de caille" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-orange-vif",
    handle: "perle-orange-vif",
    title: "Perles Rondes Orange Vif",
    description: "Perles rondes orange vif sature, finition lisse. Couleur pop qui apporte un coup d'eclat a une creation pastel.",
    descriptionHtml: "<p>Perles rondes orange vif sature, finition lisse. Couleur pop qui apporte un coup d'eclat a une creation pastel.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "orange", "vif", "pop", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_orange_vif,
    images: [lot6Img_perle_orange_vif],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-orange-vif",
      0.5,
      600,
      { name: "Couleur", value: "Orange vif" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bordeaux-marbree",
    handle: "perle-bordeaux-marbree",
    title: "Perles Rondes Bordeaux Marbrees",
    description: "Perles rondes bordeaux profond avec inclusions marbrees plus claires. Aspect mineral, chaque perle a sa propre nuance.",
    descriptionHtml: "<p>Perles rondes bordeaux profond avec inclusions marbrees plus claires. Aspect mineral, chaque perle a sa propre nuance.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bordeaux", "marbree", "rouge", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_bordeaux_marbree,
    images: [lot6Img_perle_bordeaux_marbree],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bordeaux-marbree",
      0.55,
      500,
      { name: "Couleur", value: "Bordeaux marbre" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-noire-mate",
    handle: "perle-noire-mate",
    title: "Perles Rondes Noires Mates",
    description: "Perles rondes noires a finition mate, sans brillance. L'essentielle universelle pour rang de fond ou separation entre elements colores.",
    descriptionHtml: "<p>Perles rondes noires a finition mate, sans brillance. L'essentielle universelle pour rang de fond ou separation entre elements colores.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "noires", "mate", "essentielle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 700,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_noire_mate,
    images: [lot6Img_perle_noire_mate],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-noire-mate",
      0.5,
      700,
      { name: "Couleur", value: "Noir mat" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rouge-brique-brillante",
    handle: "perle-rouge-brique-brillante",
    title: "Perles Rondes Rouge Brique Brillantes",
    description: "Perles rondes rouge brique a finition brillante. Couleur chaude, intense, parfaite comme rang de signature.",
    descriptionHtml: "<p>Perles rondes rouge brique a finition brillante. Couleur chaude, intense, parfaite comme rang de signature.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rouge", "brique", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_rouge_brique_brillante,
    images: [lot6Img_perle_rouge_brique_brillante],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rouge-brique-brillante",
      0.5,
      600,
      { name: "Couleur", value: "Rouge brique" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-noire-petite",
    handle: "perle-noire-petite",
    title: "Petites Perles Rondes Noires",
    description: "Perles rondes noires en petit format (diametre reduit). Ideales pour des creations fines ou comme perles de remplissage.",
    descriptionHtml: "<p>Perles rondes noires en petit format (diametre reduit). Ideales pour des creations fines ou comme perles de remplissage.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "noires", "petite-taille", "fines", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 800,
    price: money("0.40"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_noire_petite,
    images: [lot6Img_perle_noire_petite],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-noire-petite",
      0.4,
      800,
      { name: "Couleur", value: "Noir petit format" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-jaune-vif-petite",
    handle: "perle-jaune-vif-petite",
    title: "Petites Perles Rondes Jaune Vif",
    description: "Perles rondes jaune vif lumineuses, en petit format. Couleur saturee qui apporte un effet \"soleil\" a une creation pastel.",
    descriptionHtml: "<p>Perles rondes jaune vif lumineuses, en petit format. Couleur saturee qui apporte un effet \"soleil\" a une creation pastel.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "jaune", "vif", "petite-taille", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 700,
    price: money("0.40"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_jaune_vif_petite,
    images: [lot6Img_perle_jaune_vif_petite],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-jaune-vif-petite",
      0.4,
      700,
      { name: "Couleur", value: "Jaune vif petite" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bleu-cobalt",
    handle: "perle-bleu-cobalt",
    title: "Perles Rondes Bleu Cobalt",
    description: "Perles rondes bleu cobalt profond, finition brillante. Couleur dense et bijou.",
    descriptionHtml: "<p>Perles rondes bleu cobalt profond, finition brillante. Couleur dense et bijou.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "cobalt", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_bleu_cobalt,
    images: [lot6Img_perle_bleu_cobalt],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bleu-cobalt",
      0.5,
      600,
      { name: "Couleur", value: "Bleu cobalt" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bleu-pastel-petite",
    handle: "perle-bleu-pastel-petite",
    title: "Petites Perles Rondes Bleu Pastel",
    description: "Perles rondes bleu pastel doux, en petit format. Effet aerien et leger.",
    descriptionHtml: "<p>Perles rondes bleu pastel doux, en petit format. Effet aerien et leger.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "pastel", "petite-taille", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 800,
    price: money("0.40"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_bleu_pastel_petite,
    images: [lot6Img_perle_bleu_pastel_petite],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bleu-pastel-petite",
      0.4,
      800,
      { name: "Couleur", value: "Bleu pastel petit" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-argent-metallique",
    handle: "perle-argent-metallique",
    title: "Perles Rondes Argent Metallique",
    description: "Perles rondes argent metallique, finition brillante miroir. Reflechissent fortement la lumiere.",
    descriptionHtml: "<p>Perles rondes argent metallique, finition brillante miroir. Reflechissent fortement la lumiere.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "argent", "metallique", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.60"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_argent_metallique,
    images: [lot6Img_perle_argent_metallique],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-argent-metallique",
      0.6,
      500,
      { name: "Couleur", value: "Argent metallique" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-vert-fonce-marbree",
    handle: "perle-vert-fonce-marbree",
    title: "Perles Rondes Vert Fonce Marbrees",
    description: "Perles rondes vert fonce avec inclusions marbrees plus claires. Aspect mineral, naturel.",
    descriptionHtml: "<p>Perles rondes vert fonce avec inclusions marbrees plus claires. Aspect mineral, naturel.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "vert", "fonce", "marbree", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_vert_fonce_marbree,
    images: [lot6Img_perle_vert_fonce_marbree],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-vert-fonce-marbree",
      0.55,
      500,
      { name: "Couleur", value: "Vert fonce marbre" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bleu-marine-mate",
    handle: "perle-bleu-marine-mate",
    title: "Perles Rondes Bleu Marine Mates",
    description: "Perles rondes bleu marine profond, finition mate. Couleur classique et raffinee.",
    descriptionHtml: "<p>Perles rondes bleu marine profond, finition mate. Couleur classique et raffinee.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "marine", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_bleu_marine_mate,
    images: [lot6Img_perle_bleu_marine_mate],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bleu-marine-mate",
      0.5,
      600,
      { name: "Couleur", value: "Bleu marine mat" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-rouge-framboise",
    handle: "perle-cube-rouge-framboise",
    title: "Perles Cube Rouge Framboise",
    description: "Cubes en resine rouge framboise mate. Format graphique pour rythmer un rang de perles rondes.",
    descriptionHtml: "<p>Cubes en resine rouge framboise mate. Format graphique pour rythmer un rang de perles rondes.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "rouge", "framboise", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cube_rouge_framboise,
    images: [lot6Img_perle_cube_rouge_framboise],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-rouge-framboise",
      0.55,
      400,
      { name: "Couleur", value: "Rouge framboise" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rose-pois-blancs",
    handle: "perle-rose-pois-blancs",
    title: "Perles Rondes Rose a Pois Blancs",
    description: "Perles rondes fond rose vif a pois blancs imprimes. Effet vintage-pop, parfait pour une creation festive.",
    descriptionHtml: "<p>Perles rondes fond rose vif a pois blancs imprimes. Effet vintage-pop, parfait pour une creation festive.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rose", "pois", "motif", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.60"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_rose_pois_blancs,
    images: [lot6Img_perle_rose_pois_blancs],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rose-pois-blancs",
      0.6,
      400,
      { name: "Couleur", value: "Rose pois blancs" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-vert-inclusions",
    handle: "perle-cristal-vert-inclusions",
    title: "Perles Cristal Vert Inclusions",
    description: "Perles spheriques en resine cristal transparent avec inclusions vertes. Effet bulle de savon brillante.",
    descriptionHtml: "<p>Perles spheriques en resine cristal transparent avec inclusions vertes. Effet bulle de savon brillante.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "transparent", "vert", "inclusions", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.75"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_vert_inclusions,
    images: [lot6Img_perle_cristal_vert_inclusions],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-vert-inclusions",
      0.75,
      350,
      { name: "Effet", value: "Cristal vert" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-noeud-jaune-paillete",
    handle: "charme-noeud-jaune-paillete",
    title: "Charme Noeud Jaune Paillete",
    description: "Charme en forme de noeud, resine jaune translucide pailletee. Effet bijou-gateau-anniversaire.",
    descriptionHtml: "<p>Charme en forme de noeud, resine jaune translucide pailletee. Effet bijou-gateau-anniversaire.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "noeud", "jaune", "pailletee", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_noeud_jaune_paillete,
    images: [lot6Img_charme_noeud_jaune_paillete],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-jaune-paillete",
      0.85,
      300,
      { name: "Forme", value: "Noeud jaune paillete" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-fleur-vert-clair",
    handle: "charme-fleur-vert-clair",
    title: "Charme Fleur Vert Clair",
    description: "Charme en forme de fleur a 5 petales, resine vert clair translucide. Doux et printanier.",
    descriptionHtml: "<p>Charme en forme de fleur a 5 petales, resine vert clair translucide. Doux et printanier.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "fleur", "vert", "clair", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.75"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_fleur_vert_clair,
    images: [lot6Img_charme_fleur_vert_clair],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-fleur-vert-clair",
      0.75,
      350,
      { name: "Forme", value: "Fleur vert clair" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-etoile-orange-mate",
    handle: "charme-etoile-orange-mate",
    title: "Charme Etoile Orange Mate",
    description: "Charme en forme d'etoile a 5 branches, resine orange mate. Couleur chaude pour une creation joyeuse.",
    descriptionHtml: "<p>Charme en forme d'etoile a 5 branches, resine orange mate. Couleur chaude pour une creation joyeuse.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "etoile", "orange", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.80"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_etoile_orange_mate,
    images: [lot6Img_charme_etoile_orange_mate],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-etoile-orange-mate",
      0.8,
      300,
      { name: "Forme", value: "Etoile orange" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-rose-pailletee",
    handle: "perle-cristal-rose-pailletee",
    title: "Perles Cristal Rose Pailletees",
    description: "Perles spheriques en resine cristal transparent avec inclusion rose pailletee au centre. Effet bijou-bulle festive.",
    descriptionHtml: "<p>Perles spheriques en resine cristal transparent avec inclusion rose pailletee au centre. Effet bijou-bulle festive.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "transparent", "rose", "pailletee", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_rose_pailletee,
    images: [lot6Img_perle_cristal_rose_pailletee],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-rose-pailletee",
      0.85,
      300,
      { name: "Effet", value: "Cristal rose paillete" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-vert-pale-translucide",
    handle: "perle-vert-pale-translucide",
    title: "Perles Rondes Vert Pale Translucides",
    description: "Perles rondes vert pale en resine translucide. Couleur fraiche et lumineuse.",
    descriptionHtml: "<p>Perles rondes vert pale en resine translucide. Couleur fraiche et lumineuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "vert", "pale", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.60"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_vert_pale_translucide,
    images: [lot6Img_perle_vert_pale_translucide],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-vert-pale-translucide",
      0.6,
      500,
      { name: "Couleur", value: "Vert pale translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-noeud-blanc",
    handle: "charme-noeud-blanc",
    title: "Charme Noeud Blanc",
    description: "Charme en forme de noeud, resine blanche neutre. Format universel a glisser dans toute creation.",
    descriptionHtml: "<p>Charme en forme de noeud, resine blanche neutre. Format universel a glisser dans toute creation.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "noeud", "blanc", "essentielle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.80"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_noeud_blanc,
    images: [lot6Img_charme_noeud_blanc],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-blanc",
      0.8,
      350,
      { name: "Forme", value: "Noeud blanc" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-bleu-turquoise",
    handle: "perle-cube-bleu-turquoise",
    title: "Perles Cube Bleu Turquoise",
    description: "Cubes en resine bleu turquoise mat. Couleur ete-vacances, format graphique.",
    descriptionHtml: "<p>Cubes en resine bleu turquoise mat. Couleur ete-vacances, format graphique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "bleu", "turquoise", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 450,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cube_bleu_turquoise,
    images: [lot6Img_perle_cube_bleu_turquoise],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-bleu-turquoise",
      0.55,
      450,
      { name: "Couleur", value: "Bleu turquoise" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-ourson-rose-translucide",
    handle: "charme-ourson-rose-translucide",
    title: "Charme Ourson Rose Translucide",
    description: "Charme en forme d'ourson, resine rose blush translucide. Effet bijou-doudou tres doux.",
    descriptionHtml: "<p>Charme en forme d'ourson, resine rose blush translucide. Effet bijou-doudou tres doux.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "ourson", "rose", "translucide", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_ourson_rose_translucide,
    images: [lot6Img_charme_ourson_rose_translucide],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-ourson-rose-translucide",
      0.95,
      250,
      { name: "Forme", value: "Ourson rose translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-jaune",
    handle: "perle-cristal-jaune",
    title: "Perles Cristal Jaune",
    description: "Perles spheriques en resine cristal transparent avec inclusion jaune au centre. Effet bulle solaire.",
    descriptionHtml: "<p>Perles spheriques en resine cristal transparent avec inclusion jaune au centre. Effet bulle solaire.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "transparent", "jaune", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_jaune,
    images: [lot6Img_perle_cristal_jaune],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-jaune",
      0.85,
      300,
      { name: "Effet", value: "Cristal jaune" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-coeur-argent-metallique",
    handle: "charme-coeur-argent-metallique",
    title: "Charme Coeur Argent Metallique",
    description: "Charme en forme de coeur 3D, finition argent metallique brillant. Effet bijou-amulette.",
    descriptionHtml: "<p>Charme en forme de coeur 3D, finition argent metallique brillant. Effet bijou-amulette.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "coeur", "argent", "metallique", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 300,
    price: money("1.00"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_coeur_argent_metallique,
    images: [lot6Img_charme_coeur_argent_metallique],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-coeur-argent-metallique",
      1.0,
      300,
      { name: "Forme", value: "Coeur argent" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-noeud-bleu-pastel",
    handle: "charme-noeud-bleu-pastel",
    title: "Charme Noeud Bleu Pastel",
    description: "Charme en forme de noeud, resine bleu pastel mate. Doux et fraicheur ete.",
    descriptionHtml: "<p>Charme en forme de noeud, resine bleu pastel mate. Doux et fraicheur ete.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "noeud", "bleu", "pastel", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.80"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_noeud_bleu_pastel,
    images: [lot6Img_charme_noeud_bleu_pastel],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-bleu-pastel",
      0.8,
      350,
      { name: "Forme", value: "Noeud bleu pastel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-fleur-turquoise-coeur-rouge",
    handle: "charme-fleur-turquoise-coeur-rouge",
    title: "Charme Fleur Turquoise Coeur Rouge",
    description: "Charme en forme de fleur, petales turquoise et coeur rouge. Effet pop et joyeux.",
    descriptionHtml: "<p>Charme en forme de fleur, petales turquoise et coeur rouge. Effet pop et joyeux.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "fleur", "turquoise", "rouge", "bicolore", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_fleur_turquoise_coeur_rouge,
    images: [lot6Img_charme_fleur_turquoise_coeur_rouge],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-fleur-turquoise-coeur-rouge",
      0.85,
      300,
      { name: "Forme", value: "Fleur turquoise coeur rouge" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-fleur-vert-coeur-rose",
    handle: "charme-fleur-vert-coeur-rose",
    title: "Charme Fleur Vert Coeur Rose",
    description: "Charme en forme de fleur, petales verts et coeur rose. Effet vintage doux.",
    descriptionHtml: "<p>Charme en forme de fleur, petales verts et coeur rose. Effet vintage doux.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "fleur", "vert", "rose", "bicolore", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_fleur_vert_coeur_rose,
    images: [lot6Img_charme_fleur_vert_coeur_rose],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-fleur-vert-coeur-rose",
      0.85,
      300,
      { name: "Forme", value: "Fleur vert coeur rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-blanc-cristal",
    handle: "perle-cube-blanc-cristal",
    title: "Perles Cube Blanc Cristal",
    description: "Cubes en resine cristal transparent semi-blanche, effet glace. Format graphique avec luminosite.",
    descriptionHtml: "<p>Cubes en resine cristal transparent semi-blanche, effet glace. Format graphique avec luminosite.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "blanc", "cristal", "transparent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cube_blanc_cristal,
    images: [lot6Img_perle_cube_blanc_cristal],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-blanc-cristal",
      0.65,
      400,
      { name: "Couleur", value: "Blanc cristal" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-argentee",
    handle: "perle-cristal-argentee",
    title: "Perles Cristal Argentees",
    description: "Perles spheriques en resine cristal transparent avec inclusion argentee. Effet diamant brillant.",
    descriptionHtml: "<p>Perles spheriques en resine cristal transparent avec inclusion argentee. Effet diamant brillant.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "transparent", "argent", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_argentee,
    images: [lot6Img_perle_cristal_argentee],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-argentee",
      0.85,
      300,
      { name: "Effet", value: "Cristal argente" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-vert-coeur-sombre",
    handle: "perle-vert-coeur-sombre",
    title: "Perles Rondes Vert Coeur Sombre",
    description: "Perles rondes vert vif avec un anneau central plus sombre. Effet bicolore subtil.",
    descriptionHtml: "<p>Perles rondes vert vif avec un anneau central plus sombre. Effet bicolore subtil.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "vert", "bicolore", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 450,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_vert_coeur_sombre,
    images: [lot6Img_perle_vert_coeur_sombre],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-vert-coeur-sombre",
      0.55,
      450,
      { name: "Couleur", value: "Vert coeur sombre" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rose-peche",
    handle: "perle-rose-peche",
    title: "Perles Rondes Rose Peche",
    description: "Perles rondes rose peche, ton chaud entre rose et orange. Doux et estival.",
    descriptionHtml: "<p>Perles rondes rose peche, ton chaud entre rose et orange. Doux et estival.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rose", "peche", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_rose_peche,
    images: [lot6Img_perle_rose_peche],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rose-peche",
      0.5,
      600,
      { name: "Couleur", value: "Rose peche" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-bonbon-papillote",
    handle: "charme-bonbon-papillote",
    title: "Charme Bonbon Papillote",
    description: "Charme en forme de bonbon dans sa papillote (avec les torsades aux deux extremites). Effet boutique-de-bonbons retro.",
    descriptionHtml: "<p>Charme en forme de bonbon dans sa papillote (avec les torsades aux deux extremites). Effet boutique-de-bonbons retro.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "bonbon", "papillote", "figuratif", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_bonbon_papillote,
    images: [lot6Img_charme_bonbon_papillote],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-bonbon-papillote",
      1.2,
      250,
      { name: "Forme", value: "Bonbon papillote" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-paillete-argent",
    handle: "perle-cristal-paillete-argent",
    title: "Perles Cristal Pailletees Argent",
    description: "Perles spheriques en resine cristal pailletees argent. Reflets discoball, effet boule a facettes.",
    descriptionHtml: "<p>Perles spheriques en resine cristal pailletees argent. Reflets discoball, effet boule a facettes.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "argent", "pailletee", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_paillete_argent,
    images: [lot6Img_perle_cristal_paillete_argent],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-paillete-argent",
      0.85,
      300,
      { name: "Effet", value: "Cristal argent paillete" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-noeud-bleu-cyan",
    handle: "charme-noeud-bleu-cyan",
    title: "Charme Noeud Bleu Cyan",
    description: "Charme en forme de noeud, resine bleu cyan brillant. Couleur eclatante et fraiche.",
    descriptionHtml: "<p>Charme en forme de noeud, resine bleu cyan brillant. Couleur eclatante et fraiche.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "noeud", "bleu", "cyan", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_noeud_bleu_cyan,
    images: [lot6Img_charme_noeud_bleu_cyan],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-bleu-cyan",
      0.85,
      300,
      { name: "Forme", value: "Noeud bleu cyan" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-etoile-vert-sage",
    handle: "charme-etoile-vert-sage",
    title: "Charme Etoile Vert Sage",
    description: "Charme en forme d'etoile a 5 branches, resine vert sage translucide. Aspect doux et zen.",
    descriptionHtml: "<p>Charme en forme d'etoile a 5 branches, resine vert sage translucide. Aspect doux et zen.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "etoile", "vert", "sage", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.80"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_etoile_vert_sage,
    images: [lot6Img_charme_etoile_vert_sage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-etoile-vert-sage",
      0.8,
      300,
      { name: "Forme", value: "Etoile vert sage" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-noire-mini",
    handle: "perle-noire-mini",
    title: "Mini Perles Rondes Noires",
    description: "Tres petites perles rondes noires, format mini (4-5mm). Pour micro-creations ou comme separateur.",
    descriptionHtml: "<p>Tres petites perles rondes noires, format mini (4-5mm). Pour micro-creations ou comme separateur.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "noires", "mini", "fines", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 1000,
    price: money("0.35"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_noire_mini,
    images: [lot6Img_perle_noire_mini],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-noire-mini",
      0.35,
      1000,
      { name: "Couleur", value: "Noir mini" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-iris-vert",
    handle: "perle-cristal-iris-vert",
    title: "Perles Cristal Iridescentes Vertes",
    description: "Perles spheriques cristal avec effet iridescent vert qui change de teinte selon l'angle de la lumiere.",
    descriptionHtml: "<p>Perles spheriques cristal avec effet iridescent vert qui change de teinte selon l'angle de la lumiere.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "iris", "vert", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_iris_vert,
    images: [lot6Img_perle_cristal_iris_vert],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-iris-vert",
      0.85,
      350,
      { name: "Effet", value: "Cristal iris vert" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-sucette-jaune-rose",
    handle: "charme-sucette-jaune-rose",
    title: "Charme Sucette Jaune Rose",
    description: "Charme en forme de sucette a baton, resine bicolore jaune et rose. Effet bonbonnerie kawaii.",
    descriptionHtml: "<p>Charme en forme de sucette a baton, resine bicolore jaune et rose. Effet bonbonnerie kawaii.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "sucette", "jaune", "rose", "figuratif", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 250,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_sucette_jaune_rose,
    images: [lot6Img_charme_sucette_jaune_rose],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-sucette-jaune-rose",
      1.1,
      250,
      { name: "Forme", value: "Sucette jaune rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-papillon-vert-anis",
    handle: "charme-papillon-vert-anis",
    title: "Charme Papillon Vert Anis",
    description: "Charme en forme de papillon, resine vert anis vif. Ailes detaillees, format leger.",
    descriptionHtml: "<p>Charme en forme de papillon, resine vert anis vif. Ailes detaillees, format leger.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "papillon", "vert", "anis", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_papillon_vert_anis,
    images: [lot6Img_charme_papillon_vert_anis],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-papillon-vert-anis",
      0.95,
      300,
      { name: "Forme", value: "Papillon vert anis" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-papillon-vert-clair",
    handle: "charme-papillon-vert-clair",
    title: "Charme Papillon Vert Clair",
    description: "Charme en forme de papillon, resine vert clair pastel. Plus doux que la version vert anis.",
    descriptionHtml: "<p>Charme en forme de papillon, resine vert clair pastel. Plus doux que la version vert anis.</p>",
    productType: "Charmes",
    category: "perles",
    tags: ["charmes", "papillon", "vert", "clair", "pastel", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 300,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: lot6Img_charme_papillon_vert_clair,
    images: [lot6Img_charme_papillon_vert_clair],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-papillon-vert-clair",
      0.95,
      300,
      { name: "Forme", value: "Papillon vert clair" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rouge-profond",
    handle: "perle-rouge-profond",
    title: "Perles Rondes Rouge Profond",
    description: "Perles rondes rouge intense, finition lustree. Couleur dense et puissante.",
    descriptionHtml: "<p>Perles rondes rouge intense, finition lustree. Couleur dense et puissante.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rouge", "profond", "brillantes", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 600,
    price: money("0.50"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_rouge_profond,
    images: [lot6Img_perle_rouge_profond],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rouge-profond",
      0.5,
      600,
      { name: "Couleur", value: "Rouge profond" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-jaune-translucide",
    handle: "perle-jaune-translucide",
    title: "Perles Rondes Jaune Translucide",
    description: "Perles rondes jaune en resine translucide. Effet ambre, lumineux et chaleureux.",
    descriptionHtml: "<p>Perles rondes jaune en resine translucide. Effet ambre, lumineux et chaleureux.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "jaune", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_jaune_translucide,
    images: [lot6Img_perle_jaune_translucide],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-jaune-translucide",
      0.55,
      500,
      { name: "Couleur", value: "Jaune translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-rose-pale",
    handle: "perle-cristal-rose-pale",
    title: "Perles Cristal Rose Pale",
    description: "Perles spheriques cristal rose pale semi-translucide. Effet bulle de quartz rose.",
    descriptionHtml: "<p>Perles spheriques cristal rose pale semi-translucide. Effet bulle de quartz rose.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "rose", "pale", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 350,
    price: money("0.75"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_rose_pale,
    images: [lot6Img_perle_cristal_rose_pale],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-rose-pale",
      0.75,
      350,
      { name: "Effet", value: "Cristal rose pale" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rouge-pois-blancs",
    handle: "perle-rouge-pois-blancs",
    title: "Perles Rondes Rouge a Pois Blancs",
    description: "Perles rondes rouge vif a pois blancs imprimes. Effet vintage pin-up, festif.",
    descriptionHtml: "<p>Perles rondes rouge vif a pois blancs imprimes. Effet vintage pin-up, festif.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rouge", "pois", "motif", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.60"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_rouge_pois_blancs,
    images: [lot6Img_perle_rouge_pois_blancs],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rouge-pois-blancs",
      0.6,
      400,
      { name: "Couleur", value: "Rouge pois blancs" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-paillete-intense",
    handle: "perle-cristal-paillete-intense",
    title: "Perles Cristal Pailletees Intenses",
    description: "Perles spheriques cristal avec paillette argent intense, effet plus dense que le paillete classique.",
    descriptionHtml: "<p>Perles spheriques cristal avec paillette argent intense, effet plus dense que le paillete classique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cristal", "paillete", "intense", "argent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 250,
    price: money("0.90"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_cristal_paillete_intense,
    images: [lot6Img_perle_cristal_paillete_intense],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-paillete-intense",
      0.9,
      250,
      { name: "Effet", value: "Cristal paillete intense" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-bleu-glace-translucide",
    handle: "perle-bleu-glace-translucide",
    title: "Perles Rondes Bleu Glace Translucides",
    description: "Perles rondes bleu glace en resine translucide. Effet ete frais, lumineux.",
    descriptionHtml: "<p>Perles rondes bleu glace en resine translucide. Effet ete frais, lumineux.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "glace", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 500,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: lot6Img_perle_bleu_glace_translucide,
    images: [lot6Img_perle_bleu_glace_translucide],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-bleu-glace-translucide",
      0.55,
      500,
      { name: "Couleur", value: "Bleu glace translucide" },
      VRAC_PIECE_TIERS,
    ),
  },

  // ─── YuMe Hello Kitty & Friends — Light-Up Camping Lamp Series ───
  // Une seule fiche produit avec 6 variantes-personnages (Hello Kitty,
  // My Melody, Cinnamoroll, Pompompurin, Pochacco, Kuromi). Chaque
  // variante porte sa propre image — ProductPurchasePanel détecte
  // `image` sur les variants et affiche un picker en mosaïque au lieu
  // des boutons texte habituels. Pas de palier quantité ici : ces
  // porte-clés se vendent à l'unité, l'utilisateur ajuste la qty avec
  // le stepper standard.
  {
    id: "mock-product-yume-camping-lamp-series",
    handle: "yume-hello-kitty-friends-camping-lamp",
    title: "Lampe Camping YuMe — Hello Kitty & Friends",
    description:
      "Porte-cle figurine illumine, serie officielle Sanrio sous licence YuMe. Choisis ton personnage parmi les 6 ci-dessous.",
    descriptionHtml:
      "<p>Petite figurine Sanrio dans sa lampe-tente miniature, illuminee par une LED interne. Dragonne en silicone aux couleurs du personnage avec sa signature etoile + lune sur le strap. Officielle Sanrio sous licence YuMe.</p><p>Six personnages au choix : Hello Kitty, My Melody, Cinnamoroll, Pompompurin, Pochacco, Kuromi.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "kawaii", "sanrio", "yume", "lampe", "porte-cle", "best-seller"],
    badges: ["Best-seller", "Selection atelier"],
    availableForSale: true,
    totalInventory: 103,
    price: money("12.00"),
    compareAtPrice: null,
    // Featured image = la collection complète : la card du grid montre
    // d'emblée que l'offre couvre tous les personnages, ce qui pousse
    // au clic vers la fiche pour choisir.
    featuredImage: yumeCollectionImage,
    images: [
      yumeCollectionImage,
      yumeHelloKittyImage,
      yumeMyMelodyImage,
      yumeCinnamorollImage,
      yumePompompurinImage,
      yumePochaccoImage,
      yumeKuromiImage,
    ],
    variants: [
      {
        id: "mock-variant-yume-hello-kitty",
        title: "Hello Kitty",
        availableForSale: true,
        quantityAvailable: 24,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Hello Kitty" }],
        image: yumeHelloKittyPackshotImage,
        images: [
          yumeHelloKittyPackshotImage,
          yumeHelloKittyDetailImage,
          yumeHelloKittyScaleImage,
          yumeHelloKittyContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 18,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeMyMelodyPackshotImage,
        images: [
          yumeMyMelodyPackshotImage,
          yumeMyMelodyDetailImage,
          yumeMyMelodyScaleImage,
          yumeMyMelodyContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-cinnamoroll",
        title: "Cinnamoroll",
        availableForSale: true,
        quantityAvailable: 22,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Cinnamoroll" }],
        image: yumeCinnamorollPackshotImage,
        images: [
          yumeCinnamorollPackshotImage,
          yumeCinnamorollDetailImage,
          yumeCinnamorollScaleImage,
          yumeCinnamorollContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-pompompurin",
        title: "Pompompurin",
        availableForSale: true,
        quantityAvailable: 16,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pompompurin" }],
        image: yumePompompurinPackshotImage,
        images: [
          yumePompompurinPackshotImage,
          yumePompompurinDetailImage,
          yumePompompurinScaleImage,
          yumePompompurinContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-pochacco",
        title: "Pochacco",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pochacco" }],
        image: yumePochaccoPackshotImage,
        images: [
          yumePochaccoPackshotImage,
          yumePochaccoDetailImage,
          yumePochaccoScaleImage,
          yumePochaccoContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-kuromi",
        title: "Kuromi",
        availableForSale: true,
        quantityAvailable: 9,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Kuromi" }],
        image: yumeKuromiPackshotImage,
        images: [
          yumeKuromiPackshotImage,
          yumeKuromiDetailImage,
          yumeKuromiScaleImage,
          yumeKuromiContextImage,
          { ...yumeCollectionImage, label: "Collection" },
        ],
      },
    ],
  },

  // ─── YuMe Hello Kitty & Friends — Balloon Series ────────────────
  // 5 personnages Sanrio chevauchant des animaux-ballons gonflables.
  // Variantes-images, prix unique 12 €, à l'unité (pas de dégressif).
  {
    id: "mock-product-yume-balloon-series",
    handle: "yume-hello-kitty-balloon-series",
    title: "Porte-clé YuMe Balloon Series — Hello Kitty & Friends",
    description:
      "Porte-cle figurine sur ballon-cheval coloré, série officielle Sanrio sous licence YuMe. Choisis ton personnage parmi les 5.",
    descriptionHtml:
      "<p>Mini figurine Sanrio assise sur un animal-ballon translucide rose ou bleu, dragonne en silicone aux couleurs du personnage avec sa signature étoile + lune. Officielle Sanrio sous licence YuMe.</p><p>Cinq personnages au choix : Hello Kitty, My Melody, Cinnamoroll, Pompompurin, Kuromi.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "kawaii", "sanrio", "yume", "ballon", "porte-cle"],
    badges: ["Selection atelier", "Best-seller"],
    availableForSale: true,
    totalInventory: 75,
    price: money("12.00"),
    compareAtPrice: null,
    featuredImage: yumeBalloonCollection,
    images: [
      yumeBalloonCollection,
      yumeBalloonHelloKittyPackshotImage,
      yumeBalloonMyMelodyPackshotImage,
      yumeBalloonCinnamorollPackshotImage,
      yumeBalloonPompompurinPackshotImage,
      yumeBalloonKuromiPackshotImage,
    ],
    variants: [
      {
        id: "mock-variant-yume-balloon-hello-kitty",
        title: "Hello Kitty",
        availableForSale: true,
        quantityAvailable: 18,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Hello Kitty" }],
        image: yumeBalloonHelloKittyPackshotImage,
        images: [
          yumeBalloonHelloKittyPackshotImage,
          yumeBalloonHelloKittyDetailImage,
          yumeBalloonHelloKittyScaleImage,
          yumeBalloonHelloKittyContextImage,
          { ...yumeBalloonCollection, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-balloon-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeBalloonMyMelodyPackshotImage,
        images: [
          yumeBalloonMyMelodyPackshotImage,
          yumeBalloonMyMelodyDetailImage,
          yumeBalloonMyMelodyScaleImage,
          yumeBalloonMyMelodyContextImage,
          { ...yumeBalloonCollection, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-balloon-cinnamoroll",
        title: "Cinnamoroll",
        availableForSale: true,
        quantityAvailable: 16,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Cinnamoroll" }],
        image: yumeBalloonCinnamorollPackshotImage,
        images: [
          yumeBalloonCinnamorollPackshotImage,
          yumeBalloonCinnamorollDetailImage,
          yumeBalloonCinnamorollScaleImage,
          yumeBalloonCinnamorollContextImage,
          { ...yumeBalloonCollection, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-balloon-pompompurin",
        title: "Pompompurin",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pompompurin" }],
        image: yumeBalloonPompompurinPackshotImage,
        images: [
          yumeBalloonPompompurinPackshotImage,
          yumeBalloonPompompurinDetailImage,
          yumeBalloonPompompurinScaleImage,
          yumeBalloonPompompurinContextImage,
          { ...yumeBalloonCollection, label: "Collection" },
        ],
      },
      {
        id: "mock-variant-yume-balloon-kuromi",
        title: "Kuromi",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Kuromi" }],
        image: yumeBalloonKuromiPackshotImage,
        images: [
          yumeBalloonKuromiPackshotImage,
          yumeBalloonKuromiDetailImage,
          yumeBalloonKuromiScaleImage,
          yumeBalloonKuromiContextImage,
          { ...yumeBalloonCollection, label: "Collection" },
        ],
      },
    ],
  },

  // ─── YuMe Hello Kitty & Friends — Nuage Series ─────────────────
  // Route historique conservee, photos remplacees par la serie Nuage.
  {
    id: "mock-product-yume-star-series",
    handle: "yume-hello-kitty-light-up-star-series",
    title: "Porte-clé YuMe Nuage — Hello Kitty & Friends",
    description:
      "Porte-cle figurine sur nuage lumineux, série officielle Sanrio sous licence YuMe. Cinq personnages au choix.",
    descriptionHtml:
      "<p>Mini figurine assise sur un nuage jaune translucide qui s'illumine via une LED interne. Dragonne pastel aux couleurs du personnage. Officielle Sanrio sous licence YuMe.</p><p>Cinq personnages au choix : Hello Kitty, My Melody, Cinnamoroll, Pochacco, Kuromi.</p>",
    productType: "Figurines",
    // Résolution conflit : Dany a rebrandé le produit "Star series" →
    // "Nuage series" (correspond à la vraie photo : figurine sur un
    // nuage lumineux, pas sur une étoile). Je garde son rename
    // (title/desc/tags "nuage") mais bascule la category de
    // "figurines" → "porte-cles" parce que le produit a une sangle +
    // anneau (cf. taxonomie : sangle = porte-clé, sans sangle =
    // figurine debout). Toutes les autres séries YuMe avec strap
    // (camping, balloon, raincoat, snack, scooter, one-piece) sont
    // déjà classées en porte-cles ; cohérence d'ensemble.
    category: "porte-cles",
    tags: ["figurines", "kawaii", "sanrio", "yume", "nuage", "lumineux", "porte-cle"],
    badges: ["Best-seller", "Selection atelier"],
    availableForSale: true,
    totalInventory: 70,
    price: money("14.00"),
    compareAtPrice: null,
    featuredImage: yumeNuageCollectionImage,
    images: [
      yumeNuageCollectionImage,
      yumeNuageHelloKittyPackshotImage,
      yumeNuageKuromiPackshotImage,
      yumeNuageCinnamorollPackshotImage,
      yumeNuageMyMelodyPackshotImage,
      yumeNuagePochaccoPackshotImage,
    ],
    variants: [
      {
        id: "mock-variant-yume-star-hello-kitty",
        title: "Hello Kitty",
        availableForSale: true,
        quantityAvailable: 16,
        price: money("14.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Hello Kitty" }],
        image: yumeNuageHelloKittyPackshotImage,
        images: [
          yumeNuageHelloKittyPackshotImage,
          yumeNuageHelloKittyDetailImage,
          yumeNuageHelloKittyScaleImage,
          yumeNuageHelloKittyContextImage,
          yumeNuageCollectionImage,
        ],
      },
      {
        id: "mock-variant-yume-star-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("14.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeNuageMyMelodyPackshotImage,
        images: [
          yumeNuageMyMelodyPackshotImage,
          yumeNuageMyMelodyDetailImage,
          yumeNuageMyMelodyScaleImage,
          yumeNuageMyMelodyContextImage,
          yumeNuageCollectionImage,
        ],
      },
      {
        id: "mock-variant-yume-star-cinnamoroll",
        title: "Cinnamoroll",
        availableForSale: true,
        quantityAvailable: 15,
        price: money("14.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Cinnamoroll" }],
        image: yumeNuageCinnamorollPackshotImage,
        images: [
          yumeNuageCinnamorollPackshotImage,
          yumeNuageCinnamorollDetailImage,
          yumeNuageCinnamorollScaleImage,
          yumeNuageCinnamorollContextImage,
          yumeNuageCollectionImage,
        ],
      },
      {
        id: "mock-variant-yume-star-pochacco",
        title: "Pochacco",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("14.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pochacco" }],
        image: yumeNuagePochaccoPackshotImage,
        images: [
          yumeNuagePochaccoPackshotImage,
          yumeNuagePochaccoDetailImage,
          yumeNuagePochaccoScaleImage,
          yumeNuagePochaccoContextImage,
          yumeNuageCollectionImage,
        ],
      },
      {
        id: "mock-variant-yume-star-kuromi",
        title: "Kuromi",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("14.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Kuromi" }],
        image: yumeNuageKuromiPackshotImage,
        images: [
          yumeNuageKuromiPackshotImage,
          yumeNuageKuromiDetailImage,
          yumeNuageKuromiScaleImage,
          yumeNuageKuromiContextImage,
          yumeNuageCollectionImage,
        ],
      },
    ],
  },

  // ─── YuMe Hello Kitty 5cm Mini-Doll Cute Outfit Series ──────────
  {
    id: "mock-product-yume-minidoll-outfit-series",
    handle: "yume-hello-kitty-mini-doll-cute-outfit",
    title: "Mini-Doll Hello Kitty — Cute Outfit Series",
    description:
      "Figurine Hello Kitty 5 cm avec tenue détaillée, série officielle Sanrio sous licence YuMe. Huit tenues à choisir.",
    descriptionHtml:
      "<p>Mini-figurine Hello Kitty 5 cm avec tenue émaillée détaillée. Officielle Sanrio sous licence YuMe — la collection complète couvre des styles très variés (chef, pirate, pom-pom girl, rockstar…).</p><p>Huit tenues au choix : Robe rose à nœuds, Rockstar gingham, Veste denim, Top jaune sac cœur, Pom-pom girl, Salopette bleue, Pirate, Chef tablier pomme.</p>",
    productType: "Figurines",
    category: "figurines",
    tags: ["figurines", "kawaii", "sanrio", "yume", "mini-doll", "tenue"],
    badges: ["Selection atelier", "Edition limitee"],
    availableForSale: true,
    totalInventory: 88,
    price: money("9.00"),
    compareAtPrice: null,
    featuredImage: yumeMinidollCollection,
    images: [
      yumeMinidollCollection,
      yumeMinidollPinkDressPackshotImage,
      yumeMinidollRockstarPackshotImage,
      yumeMinidollDenimPackshotImage,
      yumeMinidollYellowHeart,
      yumeMinidollCheerleader,
      yumeMinidollOveralls,
      yumeMinidollPirate,
      yumeMinidollChef,
    ],
    variants: [
      {
        id: "mock-variant-yume-minidoll-pink-dress",
        title: "Robe rose à nœuds",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Robe rose à nœuds" }],
        image: yumeMinidollPinkDressPackshotImage,
        images: [
          yumeMinidollPinkDressPackshotImage,
          yumeMinidollPinkDressDetailImage,
          yumeMinidollPinkDressScaleImage,
          yumeMinidollPinkDressContextImage,
        ],
      },
      {
        id: "mock-variant-yume-minidoll-rockstar",
        title: "Rockstar gingham",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Rockstar gingham" }],
        image: yumeMinidollRockstarPackshotImage,
        images: [
          yumeMinidollRockstarPackshotImage,
          yumeMinidollRockstarDetailImage,
          yumeMinidollRockstarScaleImage,
          yumeMinidollRockstarContextImage,
        ],
      },
      {
        id: "mock-variant-yume-minidoll-denim",
        title: "Veste denim",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Veste denim" }],
        image: yumeMinidollDenimPackshotImage,
        images: [
          yumeMinidollDenimPackshotImage,
          yumeMinidollDenimDetailImage,
          yumeMinidollDenimScaleImage,
          yumeMinidollDenimContextImage,
        ],
      },
      {
        id: "mock-variant-yume-minidoll-yellow-heart",
        title: "Top jaune sac cœur",
        availableForSale: true,
        quantityAvailable: 9,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Top jaune sac cœur" }],
        image: yumeMinidollYellowHeart,
      },
      {
        id: "mock-variant-yume-minidoll-cheerleader",
        title: "Pom-pom girl",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Pom-pom girl" }],
        image: yumeMinidollCheerleader,
      },
      {
        id: "mock-variant-yume-minidoll-overalls",
        title: "Salopette bleue",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Salopette bleue" }],
        image: yumeMinidollOveralls,
      },
      {
        id: "mock-variant-yume-minidoll-pirate",
        title: "Pirate",
        availableForSale: true,
        quantityAvailable: 8,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Pirate" }],
        image: yumeMinidollPirate,
      },
      {
        id: "mock-variant-yume-minidoll-chef",
        title: "Chef tablier pomme",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("9.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Chef tablier pomme" }],
        image: yumeMinidollChef,
      },
    ],
  },

  // ─── YuMe Hello Kitty & Friends — Raincoat Series ───────────────
  {
    id: "mock-product-yume-raincoat-series",
    handle: "yume-hello-kitty-raincoat-series",
    title: "Porte-clé YuMe Raincoat — Hello Kitty & Friends",
    description:
      "Porte-cle figurine en imperméable coloré, série officielle Sanrio sous licence YuMe. Cinq personnages au choix.",
    descriptionHtml:
      "<p>Mini figurine Sanrio enveloppée dans son imperméable assorti, dragonne arc-en-ciel + nuage. Parfait pour les jours pluvieux ou comme charm de sac. Officielle Sanrio sous licence YuMe.</p><p>Cinq personnages au choix : Hello Kitty, My Melody, Pompompurin, Kuromi, Pochacco.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "kawaii", "sanrio", "yume", "impermeable", "porte-cle", "nouveaute"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 60,
    price: money("12.00"),
    compareAtPrice: null,
    featuredImage: yumeRaincoatCollection,
    images: [
      yumeRaincoatCollection,
      yumeRaincoatHelloKitty,
      yumeRaincoatMyMelody,
      yumeRaincoatPompompurin,
      yumeRaincoatKuromi,
      yumeRaincoatPochacco,
    ],
    variants: [
      {
        id: "mock-variant-yume-raincoat-hello-kitty",
        title: "Hello Kitty",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Hello Kitty" }],
        image: yumeRaincoatHelloKitty,
      },
      {
        id: "mock-variant-yume-raincoat-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeRaincoatMyMelody,
      },
      {
        id: "mock-variant-yume-raincoat-pompompurin",
        title: "Pompompurin",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pompompurin" }],
        image: yumeRaincoatPompompurin,
      },
      {
        id: "mock-variant-yume-raincoat-kuromi",
        title: "Kuromi",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Kuromi" }],
        image: yumeRaincoatKuromi,
      },
      {
        id: "mock-variant-yume-raincoat-pochacco",
        title: "Pochacco",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pochacco" }],
        image: yumeRaincoatPochacco,
      },
    ],
  },

  // ─── One Piece — YuMe Pocket Hero Window Box ────────────────────
  // Petits porte-clés figurines One Piece (sous licence Toei). Trois
  // personnages disponibles à ce stade ; la photo de groupe montre la
  // ligne complète (Luffy, Nami, Sanji, Usopp, Zoro, Chopper) — les 3
  // autres seront ajoutés quand on aura les photos individuelles.
  {
    id: "mock-product-yume-onepiece-pocket-hero",
    handle: "yume-one-piece-pocket-hero",
    title: "Porte-clé YuMe One Piece — Pocket Hero",
    description:
      "Porte-cle figurine One Piece, série officielle Toei sous licence YuMe Pocket Hero. Trois personnages au choix.",
    descriptionHtml:
      "<p>Mini figurine chibi du Mugiwara crew, livrée dans son window box collectionneur. Officielle Toei Animation sous licence YuMe Pocket Hero.</p><p>Trois personnages disponibles : Chopper, Monkey D. Luffy, Roronoa Zoro.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "one-piece", "anime", "yume", "manga", "porte-cle", "best-seller"],
    badges: ["Best-seller", "Edition limitee"],
    availableForSale: true,
    totalInventory: 36,
    price: money("11.00"),
    compareAtPrice: null,
    featuredImage: yumeOnepieceCollection,
    images: [yumeOnepieceCollection, yumeOnepieceChopper, yumeOnepieceLuffy, yumeOnepieceZoro],
    variants: [
      {
        id: "mock-variant-yume-onepiece-chopper",
        title: "Chopper",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("11.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Chopper" }],
        image: yumeOnepieceChopper,
      },
      {
        id: "mock-variant-yume-onepiece-luffy",
        title: "Monkey D. Luffy",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("11.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Monkey D. Luffy" }],
        image: yumeOnepieceLuffy,
      },
      {
        id: "mock-variant-yume-onepiece-zoro",
        title: "Roronoa Zoro",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("11.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Roronoa Zoro" }],
        image: yumeOnepieceZoro,
      },
    ],
  },

  // ─── YuMe Rainbow Strap — My Melody, Pochacco & Chopper ────────
  {
    id: "mock-product-yume-character-strap-series",
    handle: "yume-character-strap-series",
    title: "Porte-clé YuMe Rainbow Strap — My Melody, Pochacco & Chopper",
    description:
      "Porte-cle figurine avec dragonne pastel, attache métallique et charm personnage. Trois modèles au choix.",
    descriptionHtml:
      "<p>Porte-cle figurine avec dragonne silicone pastel, petit motif arc-en-ciel ou nœud, et attache métallique dorée. Une série colorée à accrocher sur un sac, une trousse ou un jeu de clés.</p><p>Trois modèles au choix : My Melody rose, Pochacco bleu, Chopper bleu.</p>",
    productType: "Figurines",
    category: "figurines",
    tags: ["figurines", "kawaii", "sanrio", "one-piece", "anime", "yume", "dragonne", "porte-cle"],
    badges: ["Nouveaute", "Selection atelier"],
    availableForSale: true,
    totalInventory: 36,
    price: money("12.00"),
    compareAtPrice: null,
    featuredImage: yumeCharacterStrapMyMelodyPackshotImage,
    images: [
      yumeCharacterStrapMyMelodyPackshotImage,
      yumeCharacterStrapPochaccoPackshotImage,
      yumeCharacterStrapChopperPackshotImage,
    ],
    variants: [
      {
        id: "mock-variant-yume-character-strap-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeCharacterStrapMyMelodyPackshotImage,
        images: [
          yumeCharacterStrapMyMelodyPackshotImage,
          yumeCharacterStrapMyMelodyDetailImage,
          yumeCharacterStrapMyMelodyScaleImage,
          yumeCharacterStrapMyMelodyContextImage,
        ],
      },
      {
        id: "mock-variant-yume-character-strap-pochacco",
        title: "Pochacco",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pochacco" }],
        image: yumeCharacterStrapPochaccoPackshotImage,
        images: [
          yumeCharacterStrapPochaccoPackshotImage,
          yumeCharacterStrapPochaccoDetailImage,
          yumeCharacterStrapPochaccoScaleImage,
          yumeCharacterStrapPochaccoContextImage,
        ],
      },
      {
        id: "mock-variant-yume-character-strap-chopper",
        title: "Chopper",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("12.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Chopper" }],
        image: yumeCharacterStrapChopperPackshotImage,
        images: [
          yumeCharacterStrapChopperPackshotImage,
          yumeCharacterStrapChopperDetailImage,
          yumeCharacterStrapChopperScaleImage,
          yumeCharacterStrapChopperContextImage,
        ],
      },
    ],
  },

  // ─── Molang — Scooter Series ────────────────────────────────────
  {
    id: "mock-product-yume-molang-scooter",
    handle: "yume-molang-scooter-keychain",
    title: "Porte-clé YuMe Molang — Scooter",
    description:
      "Porte-cle Molang sur scooter coloré + breloque arc-en-ciel, série officielle YuMe. Quatre couleurs au choix.",
    descriptionHtml:
      "<p>Le petit lapin blanc tout doux (Molang) au volant de son scooter mignon. Dragonne assortie au scooter, breloque arc-en-ciel-fleur en bonus. Officielle YuMe.</p><p>Quatre couleurs disponibles : violet, bleu, vert menthe, rose.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "kawaii", "molang", "yume", "scooter", "porte-cle", "lapin"],
    badges: ["Selection atelier"],
    availableForSale: true,
    totalInventory: 48,
    price: money("13.00"),
    compareAtPrice: null,
    featuredImage: yumeMolangScooterCollection,
    images: [
      yumeMolangScooterCollection,
      yumeMolangScooterPurple,
      yumeMolangScooterBlue,
      yumeMolangScooterGreen,
      yumeMolangScooterPink,
    ],
    variants: [
      {
        id: "mock-variant-yume-molang-scooter-purple",
        title: "Violet",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Violet" }],
        image: yumeMolangScooterPurple,
      },
      {
        id: "mock-variant-yume-molang-scooter-blue",
        title: "Bleu",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Bleu" }],
        image: yumeMolangScooterBlue,
      },
      {
        id: "mock-variant-yume-molang-scooter-green",
        title: "Vert menthe",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Vert menthe" }],
        image: yumeMolangScooterGreen,
      },
      {
        id: "mock-variant-yume-molang-scooter-pink",
        title: "Rose",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Rose" }],
        image: yumeMolangScooterPink,
      },
    ],
  },

  // ─── Molang — Snack Time Series ─────────────────────────────────
  {
    id: "mock-product-yume-molang-snack-time",
    handle: "yume-molang-snack-time-keychain",
    title: "Porte-clé YuMe Molang — Snack Time",
    description:
      "Porte-cle Molang en mode goûter, série officielle YuMe. Quatre gourmandises au choix.",
    descriptionHtml:
      "<p>Molang en pleine pause goûter : glace italienne, donut, cupcake ou tasse à thé. Mini-charm gourmand assorti accroché à la dragonne (cône de glace, bretzel, frites…). Officielle YuMe.</p><p>Quatre styles au choix : Glace, Donut, Tasse à thé, Cupcake.</p>",
    productType: "Figurines",
    category: "porte-cles",
    tags: ["figurines", "kawaii", "molang", "yume", "snack", "gourmand", "porte-cle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 44,
    price: money("13.00"),
    compareAtPrice: null,
    featuredImage: yumeMolangSnackCollection,
    images: [
      yumeMolangSnackCollection,
      yumeMolangSnackIcecream,
      yumeMolangSnackDonut,
      yumeMolangSnackTeacup,
      yumeMolangSnackCupcake,
    ],
    variants: [
      {
        id: "mock-variant-yume-molang-snack-icecream",
        title: "Glace",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Glace" }],
        image: yumeMolangSnackIcecream,
      },
      {
        id: "mock-variant-yume-molang-snack-donut",
        title: "Donut",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Donut" }],
        image: yumeMolangSnackDonut,
      },
      {
        id: "mock-variant-yume-molang-snack-teacup",
        title: "Tasse à thé",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Tasse à thé" }],
        image: yumeMolangSnackTeacup,
      },
      {
        id: "mock-variant-yume-molang-snack-cupcake",
        title: "Cupcake",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("13.00"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Cupcake" }],
        image: yumeMolangSnackCupcake,
      },
    ],
  },
  // ─── Lot pierres2 — 11 pierres semi-précieuses (mai 2026) ──────
  {
    id: "mock-product-pierre-oeil-tigre-caramel",
    handle: "pierre-oeil-tigre-caramel",
    title: "Pierre Œil de Tigre Caramel",
    description: "Pierre œil de tigre aux reflets caramel et miel, finition brillante.",
    descriptionHtml:
      "<p>Perles taillées dans l'œil de tigre, pierre brun-caramel aux reflets soyeux et chatoyants. Chaque perle présente sa propre orientation de fibres : l'effet d'un rang entier rappelle un velours doré.</p><p>S'associe avec le doré, l'ivoire et le marron foncé pour une création chaude et chic.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "oeil-de-tigre", "caramel", "marron", "dore", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreOeilTigreCaramelImage,
    images: [pierreOeilTigreCaramelImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-oeil-tigre-caramel",
      1.2,
      400,
      { name: "Pierre", value: "Œil de Tigre Caramel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-rose-facettee",
    handle: "pierre-rose-facettee",
    title: "Pierre Rose Facettée",
    description: "Pierre naturelle rose poudré, taille facettée qui attrape la lumière.",
    descriptionHtml:
      "<p>Perles à facettes dans une pierre naturelle rose-saumon aux veines blanches et grises. Les facettes captent la lumière et donnent un éclat plus vif que les versions polies lisses.</p><p>À associer avec du doré rosé, du blanc nacré ou du vert pâle pour une création douce et lumineuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "rose", "facettee", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreRhodochrositeRoseFacetteeImage,
    images: [pierreRhodochrositeRoseFacetteeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-rose-facettee",
      1.2,
      400,
      { name: "Pierre", value: "Rose Facettée" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lave-noire",
    handle: "pierre-lave-noire",
    title: "Pierre de Lave Noire",
    description: "Pierre de lave volcanique noire, surface poreuse texturée.",
    descriptionHtml:
      "<p>Perles taillées dans la pierre de lave, noir profond avec une surface poreuse très texturée. Légère en main, idéale pour rythmer un rang de pierres polies.</p><p>S'associe avec le doré mat, le cuivre ou les bois clairs pour une création minérale et brute.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lave", "noire", "porous", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: pierreLaveNoireImage,
    images: [pierreLaveNoireImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lave-noire",
      0.95,
      400,
      { name: "Pierre", value: "de Lave Noire" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lune-creme",
    handle: "pierre-lune-creme",
    title: "Pierre de Lune Crème",
    description: "Pierre de lune crème, finition soyeuse aux légères stries naturelles.",
    descriptionHtml:
      "<p>Perles taillées dans la pierre de lune, teinte crème-ivoire à reflets soyeux et translucides. Chaque perle a sa propre veine naturelle, l'aspect global est doux et lumineux.</p><p>S'accorde avec le doré, le rose poudré et le bleu glacier pour une création raffinée.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "pierre-de-lune", "creme", "ivoire", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLuneCremeImage,
    images: [pierreLuneCremeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lune-creme",
      1.2,
      400,
      { name: "Pierre", value: "de Lune Crème" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-labradorite-grise",
    handle: "pierre-labradorite-grise",
    title: "Pierre Labradorite Grise",
    description: "Pierre labradorite gris foncé piquetée, reflets minéraux.",
    descriptionHtml:
      "<p>Perles taillées dans la labradorite, gris-anthracite naturellement piqueté de noir. Sous certaines lumières, on devine les reflets irisés caractéristiques de la pierre.</p><p>À associer avec l'argenté, le blanc cassé ou le bleu nuit pour une création graphique et nocturne.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "labradorite", "gris", "anthracite", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: pierreLabradoriteGriseImage,
    images: [pierreLabradoriteGriseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-labradorite-grise",
      1.1,
      400,
      { name: "Pierre", value: "Labradorite Grise" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-jaspe-vert-mousse",
    handle: "pierre-jaspe-vert-mousse",
    title: "Pierre Jaspe Vert Mousse",
    description: "Pierre jaspe vert mousse aux taches blanches, finition mate naturelle.",
    descriptionHtml:
      "<p>Perles taillées dans le jaspe, ici dans une teinte vert mousse avec des taches blanches et grises caractéristiques. Aspect terreux et organique, pas de brillant artificiel.</p><p>S'associe avec le doré mat, le bois clair ou le crème pour une création botanique et bohème.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "vert", "mousse", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: pierreJaspeVertMousseImage,
    images: [pierreJaspeVertMousseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-jaspe-vert-mousse",
      1.1,
      400,
      { name: "Pierre", value: "Jaspe Vert Mousse" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lapis-lazuli",
    handle: "pierre-lapis-lazuli",
    title: "Pierre Lapis Lazuli",
    description: "Pierre lapis lazuli bleu marine profond, pailletée d'or naturel.",
    descriptionHtml:
      "<p>Perles taillées dans le lapis lazuli, pierre bleu marine intense souvent piquetée d'inclusions dorées de pyrite. Chaque perle a ses propres reflets — l'effet d'un rang est profond et noble.</p><p>À associer avec le doré, le blanc nacré ou le rouge brique pour une création précieuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lapis-lazuli", "bleu", "marine", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliImage,
    images: [pierreLapisLazuliImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lapis-lazuli",
      1.2,
      400,
      { name: "Pierre", value: "Lapis Lazuli" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-onyx-noir-mat",
    handle: "pierre-onyx-noir-mat",
    title: "Pierre Onyx Noir Mat",
    description: "Pierre onyx noir profond, finition mate sans brillance.",
    descriptionHtml:
      "<p>Perles taillées dans l'onyx, pierre noir profond avec une finition mate volontaire (pas de polish). Densité visuelle forte, idéal en rang de fond ou comme contraste.</p><p>S'accorde avec le doré, l'argent ou les pierres claires comme la pierre de lune pour un contraste graphique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "onyx", "noir", "mate", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: pierreOnyxNoirMatImage,
    images: [pierreOnyxNoirMatImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-onyx-noir-mat",
      0.95,
      400,
      { name: "Pierre", value: "Onyx Noir Mat" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-unakite-rose-vert",
    handle: "pierre-unakite-rose-vert",
    title: "Pierre Unakite Rose & Vert",
    description: "Pierre unakite, mélange naturel de rose poudré et vert mousse.",
    descriptionHtml:
      "<p>Perles taillées dans l'unakite, pierre qui mêle naturellement le rose-saumon et le vert mousse en taches irrégulières. Chaque perle est unique par sa proportion rose/vert.</p><p>À associer avec le doré rosé, le crème ou le vert kaki pour une création terre & rose très organique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "unakite", "rose", "vert", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreUnakiteRoseVertImage,
    images: [pierreUnakiteRoseVertImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-unakite-rose-vert",
      1.2,
      400,
      { name: "Pierre", value: "Unakite Rose et Vert" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-howlite-gris-lilas",
    handle: "pierre-howlite-gris-lilas",
    title: "Pierre Howlite Gris Lilas",
    description: "Pierre howlite teintée gris lilas, finition lisse et mate.",
    descriptionHtml:
      "<p>Perles taillées dans la howlite teintée d'un gris-lilas très doux. Surface lisse et mate, idéale pour adoucir un rang de pierres plus contrastées.</p><p>S'accorde avec l'argenté, le blanc nacré et le violet poudré pour une création tendre et délicate.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "howlite", "gris", "lilas", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: pierreHowliteGrisLilasImage,
    images: [pierreHowliteGrisLilasImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-howlite-gris-lilas",
      0.95,
      400,
      { name: "Pierre", value: "Howlite Gris Lilas" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-jaspe-rouge-brique",
    handle: "pierre-jaspe-rouge-brique",
    title: "Pierre Jaspe Rouge Brique",
    description: "Pierre jaspe rouge brique profond, finition brillante.",
    descriptionHtml:
      "<p>Perles taillées dans le jaspe rouge, teinte brique chaude et saturée. Finition brillante qui met en valeur la profondeur de la pierre.</p><p>À associer avec le doré, l'orange caramel ou le marron cacao pour une création automnale et chaleureuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "rouge", "brique", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeBriqueImage,
    images: [pierreJaspeRougeBriqueImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-jaspe-rouge-brique",
      1.1,
      400,
      { name: "Pierre", value: "Jaspe Rouge Brique" },
      VRAC_PIECE_TIERS,
    ),
  },
  // ─── Lot pierres3 — 11 fiches : 8 pierres + 3 perles/charmes ──
  {
    id: "mock-product-charme-noeud-rose-pastel",
    handle: "charme-noeud-rose-pastel",
    title: "Charme Nœud Rose Pastel",
    description: "Charme nœud rose pastel, fini brillant.",
    descriptionHtml:
      "<p>Charme en forme de petit nœud, rose pastel à fini brillant. Se glisse entre les perles ou comme point focal sur un bracelet doux.</p><p>S'accorde avec les perles nacrées, le doré rosé et les pierres roses.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "noeud", "rose", "pastel", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: charmeNoeudRosePastelImage,
    images: [charmeNoeudRosePastelImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-rose-pastel",
      0.85,
      400,
      { name: "Couleur", value: "Rose pastel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-magenta-etoiles-argent",
    handle: "perle-magenta-etoiles-argent",
    title: "Perle Magenta Étoiles Argent",
    description: "Perle magenta semée d'étoiles argentées brillantes.",
    descriptionHtml:
      "<p>Perle ronde magenta vif, parsemée d'étoiles argentées en relief. Apporte du clinquant à un rang plus sobre.</p><p>S'accorde avec l'argent, le noir et les perles cristal pour un effet nuit étoilée.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "magenta", "rose", "etoiles", "argent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perleMagentaEtoilesArgentImage,
    images: [perleMagentaEtoilesArgentImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-magenta-etoiles-argent",
      0.85,
      400,
      { name: "Couleur", value: "Magenta étoiles" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-jaune-mouchetee",
    handle: "perle-jaune-mouchetee",
    title: "Perle Jaune Mouchetée",
    description: "Perle jaune mate à texture mouchetée organique.",
    descriptionHtml:
      "<p>Perle ronde jaune soutenu, surface mouchetée non polie qui rappelle une éponge naturelle. Aspect organique, idéal pour rythmer un rang lisse.</p><p>S'associe avec le doré mat, le caramel et le blanc cassé pour une création solaire.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "jaune", "mouchetee", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleJauneMoucheteeImage,
    images: [perleJauneMoucheteeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-jaune-mouchetee",
      0.65,
      400,
      { name: "Couleur", value: "Jaune mouchetée" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-oeil-tigre-fonce",
    handle: "pierre-oeil-tigre-fonce",
    title: "Pierre Œil de Tigre Foncé",
    description: "Pierre œil de tigre brun foncé aux reflets dorés, finition brillante.",
    descriptionHtml:
      "<p>Perles taillées dans l'œil de tigre, ici dans une version brun-foncé presque chocolat aux reflets dorés et chatoyants. Plus profonde et chic que la version caramel.</p><p>À associer avec le doré, le crème ou le rouge brique pour une création chaude et intense.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "oeil-de-tigre", "marron", "fonce", "dore", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreOeilTigreFonceImage,
    images: [pierreOeilTigreFonceImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-oeil-tigre-fonce",
      1.2,
      400,
      { name: "Pierre", value: "Œil de Tigre Foncé" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lapis-lazuli-pyrite",
    handle: "pierre-lapis-lazuli-pyrite",
    title: "Pierre Lapis Lazuli Pyrite",
    description: "Pierre lapis lazuli bleu marine fortement piqueté d'éclats de pyrite dorée.",
    descriptionHtml:
      "<p>Perles taillées dans le lapis lazuli, ici dans une variante riche en inclusions de pyrite qui scintillent comme des éclats d'or naturels. Effet plus minéral et nuageux que la version unie.</p><p>À associer avec le doré, le blanc nacré ou le rouge brique pour une création précieuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lapis-lazuli", "bleu", "marine", "pyrite", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliPyriteImage,
    images: [pierreLapisLazuliPyriteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lapis-lazuli-pyrite",
      1.3,
      400,
      { name: "Pierre", value: "Lapis Lazuli Pyrite" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-grenat-rouge",
    handle: "pierre-grenat-rouge",
    title: "Pierre Grenat Rouge",
    description: "Pierre grenat rouge profond, finition brillante presque vitreuse.",
    descriptionHtml:
      "<p>Perles taillées dans le grenat, pierre rouge profond aux reflets bordeaux. Finition très brillante qui donne un effet vitreux et précieux.</p><p>S'accorde avec le doré, le noir et l'ivoire pour une création raffinée et romantique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "grenat", "rouge", "bordeaux", "brillant", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: pierreGrenatRougeImage,
    images: [pierreGrenatRougeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-grenat-rouge",
      1.3,
      400,
      { name: "Pierre", value: "Grenat Rouge" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-ours-verre-rose",
    handle: "charme-ours-verre-rose",
    title: "Charme Ours Verre Rose",
    description: "Charme petit ours en verre transparent, intérieur rose poudré.",
    descriptionHtml:
      "<p>Charme en verre soufflé en forme d'ours mignon, transparent à l'extérieur et rose poudré à l'intérieur. Effet bonbon en verre, délicat et tactile.</p><p>S'accorde avec les perles nacrées, le doré rosé et les pierres roses pour une création kawaii et tendre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "ours", "verre", "rose", "kawaii", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: charmeOursVerreRoseImage,
    images: [charmeOursVerreRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-ours-verre-rose",
      1.1,
      400,
      { name: "Couleur", value: "Rose verre" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-labradorite-verte",
    handle: "pierre-labradorite-verte",
    title: "Pierre Labradorite Verte",
    description: "Pierre labradorite teintée vert mousse aux reflets minéraux.",
    descriptionHtml:
      "<p>Perles taillées dans la labradorite, ici dans une teinte vert sombre veinée de noir et de jaune naturel. Reflets irisés caractéristiques.</p><p>À associer avec l'argenté, le crème ou le brun bois pour une création forestière.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "labradorite", "vert", "mousse", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: pierreLabradoriteVerteImage,
    images: [pierreLabradoriteVerteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-labradorite-verte",
      1.1,
      400,
      { name: "Pierre", value: "Labradorite Verte" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-jade-noir",
    handle: "pierre-jade-noir",
    title: "Pierre Jade Noir",
    description: "Pierre jade noir profond aux subtiles veines vertes.",
    descriptionHtml:
      "<p>Perles taillées dans le jade noir, ici un noir profond traversé de fines veines vert sombre, à peine visibles. Densité visuelle forte.</p><p>S'accorde avec le doré, l'argent et les pierres claires pour un contraste graphique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jade", "noir", "vert-fonce", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJadeNoirImage,
    images: [pierreJadeNoirImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-jade-noir",
      1.2,
      400,
      { name: "Pierre", value: "Jade Noir" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-agate-cornaline",
    handle: "pierre-agate-cornaline",
    title: "Pierre Agate Cornaline",
    description: "Pierre agate cornaline marron-rouge marbrée naturellement.",
    descriptionHtml:
      "<p>Perles taillées dans l'agate cornaline, pierre brun-rouge marbrée de stries plus claires. Aspect chaud et terreux.</p><p>À associer avec le doré, le caramel et l'ivoire pour une création automnale.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "agate", "cornaline", "marron", "rouge", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: pierreAgateCornalineImage,
    images: [pierreAgateCornalineImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-agate-cornaline",
      1.1,
      400,
      { name: "Pierre", value: "Agate Cornaline" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-quartz-fume",
    handle: "pierre-quartz-fume",
    title: "Pierre Quartz Fumé",
    description: "Pierre quartz fumé brun-violet brillant, presque translucide.",
    descriptionHtml:
      "<p>Perles taillées dans le quartz fumé, teinte brun-prune profonde avec des transparences qui laissent passer la lumière. Effet noble et discret.</p><p>S'accorde avec le doré, le crème et le rose poudré pour une création douce et chic.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "quartz", "fume", "brun", "violet", "translucide", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreQuartzFumeImage,
    images: [pierreQuartzFumeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-quartz-fume",
      1.2,
      400,
      { name: "Pierre", value: "Quartz Fumé" },
      VRAC_PIECE_TIERS,
    ),
  },
  // ─── Lot pierres4 — 33 fiches : 13 charmes + 16 perles + 4 pierres ──
  {
    id: "mock-product-charme-ours-magenta",
    handle: "charme-ours-magenta",
    title: "Charme Ours Magenta",
    description: "Charme petit ours en résine magenta saturé, finition brillante.",
    descriptionHtml:
      "<p>Charme en forme d'ours en résine d'un magenta vif et brillant. Plein, sans transparence, idéal comme point focal sur un bracelet pastel ou en accent coloré sur un rang clair.</p><p>S'accorde avec le doré, l'argenté et les perles roses pour une création kawaii et énergique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "ours", "magenta", "fuchsia", "kawaii", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: charmeOursMagentaImage,
    images: [charmeOursMagentaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-ours-magenta",
      0.95,
      400,
      { name: "Style", value: "Ours magenta" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-coeur-violet-glitter",
    handle: "charme-coeur-violet-glitter",
    title: "Charme Cœur Violet Glitter",
    description: "Charme cœur évidé en résine violet pailleté.",
    descriptionHtml:
      "<p>Charme en forme de gros cœur évidé, résine translucide saupoudrée de paillettes violettes et dorées. Effet bonbon glacé, transparence et brillance.</p><p>À associer avec les perles cristal, l'argenté et le rose pour une création romantique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "coeur", "violet", "glitter", "paillete", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: charmeCoeurVioletGlitterImage,
    images: [charmeCoeurVioletGlitterImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-coeur-violet-glitter",
      1.1,
      400,
      { name: "Style", value: "Cœur violet glitter" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-lettre-b-fuchsia",
    handle: "charme-lettre-b-fuchsia",
    title: "Charme Lettre B Fuchsia",
    description: "Charme lettre B en résine fuchsia brillante.",
    descriptionHtml:
      "<p>Charme alphabet en forme de lettre B, résine fuchsia brillante avec léger débordement coloré sur les contours. Personnalise un bracelet avec une initiale.</p><p>S'accorde avec n'importe quelle base (perles nacrées, pastel, cristal) — la lettre devient le point focal.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lettre", "alphabet", "B", "fuchsia", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.05"),
    compareAtPrice: null,
    featuredImage: charmeLettreBFuchsiaImage,
    images: [charmeLettreBFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-lettre-b-fuchsia",
      1.05,
      400,
      { name: "Style", value: "Lettre B fuchsia" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-noeud-fuchsia",
    handle: "charme-noeud-fuchsia",
    title: "Charme Nœud Fuchsia",
    description: "Charme nœud résine fuchsia vif, finition brillante.",
    descriptionHtml:
      "<p>Charme en forme de petit nœud, résine fuchsia vif à finition brillante. Version plus saturée que le nœud rose pastel, pour un effet plus pop.</p><p>S'accorde avec le noir, l'argenté ou les perles cristal pour une création girly punchy.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "noeud", "fuchsia", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: charmeNoeudFuchsiaImage,
    images: [charmeNoeudFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-noeud-fuchsia",
      0.85,
      400,
      { name: "Style", value: "Nœud fuchsia" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-coeur-verre-rose",
    handle: "charme-coeur-verre-rose",
    title: "Charme Cœur Verre Rose",
    description: "Charme cœur en verre, intérieur rose vif inséré.",
    descriptionHtml:
      "<p>Charme en verre transparent en forme de cœur, avec un cœur fuchsia inséré à l'intérieur. Effet bonbon en verre, double couche transparent + couleur.</p><p>À associer avec les perles nacrées, le doré et les pierres roses pour une création tendre et lumineuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "coeur", "verre", "rose", "fuchsia", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.05"),
    compareAtPrice: null,
    featuredImage: charmeCoeurVerreRoseImage,
    images: [charmeCoeurVerreRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-coeur-verre-rose",
      1.05,
      400,
      { name: "Style", value: "Cœur verre rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-fleur-framboise",
    handle: "charme-fleur-framboise",
    title: "Charme Fleur Framboise",
    description: "Charme fleur cinq pétales en résine framboise brillante.",
    descriptionHtml:
      "<p>Charme en forme de petite fleur à cinq pétales, résine d'un rouge-framboise profond et brillant. Forme stylisée façon bande dessinée.</p><p>S'accorde avec le vert, le crème et le doré pour une création botanique chaude.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "fleur", "framboise", "rouge", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.80"),
    compareAtPrice: null,
    featuredImage: charmeFleurFramboiseImage,
    images: [charmeFleurFramboiseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-fleur-framboise",
      0.8,
      400,
      { name: "Style", value: "Fleur framboise" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-lettre-m-fuchsia",
    handle: "charme-lettre-m-fuchsia",
    title: "Charme Lettre M Fuchsia",
    description: "Charme lettre M en résine fuchsia brillante.",
    descriptionHtml:
      "<p>Charme alphabet en forme de lettre M (ou W selon orientation), résine fuchsia brillante. Personnalise un bracelet avec une initiale.</p><p>S'accorde avec n'importe quelle base — la lettre devient le point focal.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lettre", "alphabet", "M", "fuchsia", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.05"),
    compareAtPrice: null,
    featuredImage: charmeLettreMFuchsiaImage,
    images: [charmeLettreMFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-lettre-m-fuchsia",
      1.05,
      400,
      { name: "Style", value: "Lettre M fuchsia" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-fleur-cristal-rose",
    handle: "charme-fleur-cristal-rose",
    title: "Charme Fleur Cristal Rose",
    description: "Charme fleur cinq pétales en cristal rose facetté.",
    descriptionHtml:
      "<p>Charme en forme de fleur à cinq pétales taillés dans un cristal rose translucide et facetté. Chaque pétale capte la lumière comme un petit bijou.</p><p>S'accorde avec le doré rosé, les perles nacrées et l'argenté pour une création élégante et féminine.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "fleur", "cristal", "rose", "facette", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: charmeFleurCristalRoseImage,
    images: [charmeFleurCristalRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-fleur-cristal-rose",
      1.1,
      400,
      { name: "Style", value: "Fleur cristal rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-ours-verre-magenta",
    handle: "charme-ours-verre-magenta",
    title: "Charme Ours Verre Magenta",
    description: "Charme ours en verre, intérieur magenta vif inséré.",
    descriptionHtml:
      "<p>Charme en verre transparent en forme d'ours mignon, avec un cœur magenta vif à l'intérieur. Version plus saturée que le rose poudré, pour un effet plus pop.</p><p>S'accorde avec les perles nacrées, l'argenté et le noir pour une création kawaii et punchy.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "ours", "verre", "magenta", "fuchsia", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.10"),
    compareAtPrice: null,
    featuredImage: charmeOursVerreMagentaImage,
    images: [charmeOursVerreMagentaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-ours-verre-magenta",
      1.1,
      400,
      { name: "Style", value: "Ours verre magenta" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-etoile-verre-rose",
    handle: "charme-etoile-verre-rose",
    title: "Charme Étoile Verre Rose",
    description: "Charme étoile en verre, intérieur rose poudré inséré.",
    descriptionHtml:
      "<p>Charme en verre transparent en forme d'étoile à cinq branches, avec une étoile rose poudré insérée à l'intérieur. Effet bonbon, double couche transparent + couleur.</p><p>À associer avec les perles nacrées, le doré et les pierres roses pour une création douce et nocturne.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "etoile", "verre", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.05"),
    compareAtPrice: null,
    featuredImage: charmeEtoileVerreRoseImage,
    images: [charmeEtoileVerreRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-etoile-verre-rose",
      1.05,
      400,
      { name: "Style", value: "Étoile verre rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-lettre-c-irisee",
    handle: "charme-lettre-c-irisee",
    title: "Charme Lettre C Irisée",
    description: "Charme lettre C en résine irisée nacrée.",
    descriptionHtml:
      "<p>Charme alphabet en forme de lettre C, résine aux reflets irisés rose et doré qui changent selon la lumière. Effet bijou délicat.</p><p>S'accorde avec les perles nacrées, le doré rosé et le crème.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lettre", "alphabet", "C", "irise", "nacre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.05"),
    compareAtPrice: null,
    featuredImage: charmeLettreCIriseeImage,
    images: [charmeLettreCIriseeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-lettre-c-irisee",
      1.05,
      400,
      { name: "Style", value: "Lettre C irisée" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-trio-spheres-fuchsia",
    handle: "charme-trio-spheres-fuchsia",
    title: "Charme Trio Sphères Fuchsia",
    description: "Charme trio de petites sphères fuchsia en triangle.",
    descriptionHtml:
      "<p>Charme composé de trois petites sphères fuchsia disposées en triangle autour d'un anneau central. Effet rythmique, idéal pour casser un rang lisse.</p><p>S'accorde avec les perles cristal, le doré et le noir pour une création graphique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "trio", "spheres", "fuchsia", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: charmeTrioSpheresFuchsiaImage,
    images: [charmeTrioSpheresFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-trio-spheres-fuchsia",
      0.95,
      400,
      { name: "Style", value: "Trio sphères" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-charme-lapin-fuchsia",
    handle: "charme-lapin-fuchsia",
    title: "Charme Lapin Fuchsia",
    description: "Charme petit lapin en résine fuchsia brillante.",
    descriptionHtml:
      "<p>Charme en forme de petit lapin assis, résine fuchsia vif et brillante. Style kawaii, plein sans transparence.</p><p>S'accorde avec les perles nacrées, le blanc et l'argenté pour une création tendre et joueuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lapin", "fuchsia", "kawaii", "animal", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.00"),
    compareAtPrice: null,
    featuredImage: charmeLapinFuchsiaImage,
    images: [charmeLapinFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "charme-lapin-fuchsia",
      1.0,
      400,
      { name: "Style", value: "Lapin fuchsia" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-mauve-translucide",
    handle: "perle-cube-mauve-translucide",
    title: "Perle Cube Mauve Translucide",
    description: "Perle cube verre mauve clair, légèrement translucide.",
    descriptionHtml:
      "<p>Perle cubique en verre mauve aux contours adoucis. Translucidité partielle qui laisse passer la lumière, effet doux et mat.</p><p>S'accorde avec le doré, le crème et les perles cristal pour une création apaisée.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "mauve", "violet", "translucide", "verre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleCubeMauveTranslucideImage,
    images: [perleCubeMauveTranslucideImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-mauve-translucide",
      0.65,
      400,
      { name: "Couleur", value: "Mauve translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rose-fluo-marbree",
    handle: "perle-rose-fluo-marbree",
    title: "Perle Rose Fluo Marbrée",
    description: "Perle ronde rose fluo marbrée de blanc, finition mate.",
    descriptionHtml:
      "<p>Perle ronde au rose fluo nuagé de blanc, surface mate et facettée. Effet marbré naturel, comme une dragée artisanale.</p><p>S'accorde avec le blanc, l'argenté et les pastels pour une création douce et fun.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "rose", "fluo", "marbree", "mate", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleRoseFluoMarbreeImage,
    images: [perleRoseFluoMarbreeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rose-fluo-marbree",
      0.55,
      400,
      { name: "Couleur", value: "Rose fluo marbrée" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-tube-verre-rose",
    handle: "perle-tube-verre-rose",
    title: "Perle Tube Verre Rose",
    description: "Perle tube en verre transparent avec cylindre rose inséré.",
    descriptionHtml:
      "<p>Perle tubulaire en verre transparent, abritant un cylindre rose poudré à l'intérieur. Double couche, effet vitrine miniature.</p><p>S'associe avec les perles rondes nacrées et le doré rosé pour une création tendre et originale.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "tube", "verre", "rose", "cylindre", "transparent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.70"),
    compareAtPrice: null,
    featuredImage: perleTubeVerreRoseImage,
    images: [perleTubeVerreRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-tube-verre-rose",
      0.7,
      400,
      { name: "Couleur", value: "Tube rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-ronde-magenta-brillante",
    handle: "perle-ronde-magenta-brillante",
    title: "Perle Ronde Magenta Brillante",
    description: "Perle ronde magenta vif, finition très brillante.",
    descriptionHtml:
      "<p>Perle ronde d'un magenta saturé à finition très brillante. Couleur dense, pour un effet pop sur un rang.</p><p>S'accorde avec l'argenté, le noir et les perles cristal pour une création énergique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "magenta", "rose", "brillante", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleRondeMagentaBrillanteImage,
    images: [perleRondeMagentaBrillanteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-ronde-magenta-brillante",
      0.55,
      400,
      { name: "Couleur", value: "Magenta brillant" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cylindre-verre-rose-poudre",
    handle: "perle-cylindre-verre-rose-poudre",
    title: "Perle Cylindre Verre Rose Poudré",
    description: "Perle cylindre verre transparent avec cœur rose poudré.",
    descriptionHtml:
      "<p>Perle cylindrique en verre transparent, traversée par un cœur de couleur rose poudré. Effet de profondeur, le verre amplifie la couleur centrale.</p><p>S'accorde avec les perles nacrées et le doré pour une création raffinée.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cylindre", "verre", "rose", "poudre", "transparent", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.75"),
    compareAtPrice: null,
    featuredImage: perleCylindreVerreRosePoudreImage,
    images: [perleCylindreVerreRosePoudreImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cylindre-verre-rose-poudre",
      0.75,
      400,
      { name: "Couleur", value: "Cylindre rose poudré" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-rose-poudre",
    handle: "perle-cube-rose-poudre",
    title: "Perle Cube Rose Poudré",
    description: "Perle cubique rose poudré, finition brillante.",
    descriptionHtml:
      "<p>Perle cubique d'un rose poudré tendre et brillant. Aux arêtes adoucies, dégage une douceur très portable.</p><p>S'accorde avec le doré rosé, le crème et les pastels pour une création romantique.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "rose", "poudre", "brillant", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleCubeRosePoudreImage,
    images: [perleCubeRosePoudreImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-rose-poudre",
      0.55,
      400,
      { name: "Couleur", value: "Rose poudré" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-verre-transparente-rose",
    handle: "perle-verre-transparente-rose",
    title: "Perle Verre Transparente Rose",
    description: "Perle ronde verre transparent rose, cœur blanc.",
    descriptionHtml:
      "<p>Perle ronde en verre transparent légèrement teinté rose, abritant une perle blanche à l'intérieur. Effet bulle de verre, double couche.</p><p>S'accorde avec les perles nacrées et l'argenté.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "verre", "transparent", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleVerreTransparenteRoseImage,
    images: [perleVerreTransparenteRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-verre-transparente-rose",
      0.65,
      400,
      { name: "Couleur", value: "Transparent rose" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-olive-marbree-saumon",
    handle: "perle-olive-marbree-saumon",
    title: "Perle Olive Marbrée Saumon",
    description: "Perle ovale saumon nuancée de blanc, effet marbré naturel.",
    descriptionHtml:
      "<p>Perle de forme ovale (olive), surface marbrée mêlant saumon et blanc en stries naturelles. Aspect organique, chaque perle est unique.</p><p>S'associe avec le doré, le crème et le rose poudré.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "olive", "ovale", "saumon", "rose", "marbree", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleOliveMarbreeSaumonImage,
    images: [perleOliveMarbreeSaumonImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-olive-marbree-saumon",
      0.65,
      400,
      { name: "Couleur", value: "Saumon marbré" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-rondelle-rose-pandora",
    handle: "perle-rondelle-rose-pandora",
    title: "Perle Rondelle Rose Pandora",
    description: "Perle rondelle rose pastel cerclée de noir, gros trou central.",
    descriptionHtml:
      "<p>Perle rondelle (donut) au format pandora-like : rose pastel sur les côtés, cerclage noir, et trou central rouge. Style charm bracelet.</p><p>S'accorde avec les chaînes argent et les perles fines pour un effet bijou statement.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondelle", "donut", "rose", "pandora", "noir", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perleRondelleRosePandoraImage,
    images: [perleRondelleRosePandoraImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-rondelle-rose-pandora",
      0.85,
      400,
      { name: "Couleur", value: "Rose pandora" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-ronde-noire-brillante",
    handle: "perle-ronde-noire-brillante",
    title: "Perle Ronde Noire Brillante",
    description: "Perle ronde noir profond à finition brillante.",
    descriptionHtml:
      "<p>Perle ronde d'un noir profond aux reflets bruns subtils, finition très brillante presque vernis. Base graphique pour mettre en valeur les pierres claires.</p><p>S'accorde avec l'argent, le doré et les perles cristal pour un contraste fort.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "noire", "brillante", "neutre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleRondeNoireBrillanteImage,
    images: [perleRondeNoireBrillanteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-ronde-noire-brillante",
      0.55,
      400,
      { name: "Couleur", value: "Noir brillant" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-donut-fuchsia",
    handle: "perle-donut-fuchsia",
    title: "Perle Donut Fuchsia",
    description: "Perle donut (gros trou) fuchsia vif, finition brillante.",
    descriptionHtml:
      "<p>Perle en forme de gros donut fuchsia vif et brillant. Le trou central large permet de la passer sur des cordons épais ou des chaînes statement.</p><p>S'accorde avec l'argenté, le noir et les perles cristal.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "donut", "rondelle", "fuchsia", "rose", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.85"),
    compareAtPrice: null,
    featuredImage: perleDonutFuchsiaImage,
    images: [perleDonutFuchsiaImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-donut-fuchsia",
      0.85,
      400,
      { name: "Couleur", value: "Fuchsia donut" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-carre-rose-pastel",
    handle: "perle-carre-rose-pastel",
    title: "Perle Carré Rose Pastel",
    description: "Perle carrée plate rose pastel, finition brillante.",
    descriptionHtml:
      "<p>Perle carrée plate aux angles légèrement arrondis, d'un rose pastel doux et brillant. Format coussin, idéal en alternance avec des perles rondes.</p><p>S'accorde avec le doré, le crème et les perles nacrées.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "carre", "coussin", "rose", "pastel", "brillant", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.55"),
    compareAtPrice: null,
    featuredImage: perleCarreRosePastelImage,
    images: [perleCarreRosePastelImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-carre-rose-pastel",
      0.55,
      400,
      { name: "Couleur", value: "Rose pastel" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cube-verre-lavande",
    handle: "perle-cube-verre-lavande",
    title: "Perle Cube Verre Lavande",
    description: "Perle cube verre transparent teinté lavande.",
    descriptionHtml:
      "<p>Perle cubique en verre transparent légèrement teinté lavande. Finition brillante, transparence qui laisse passer la lumière.</p><p>S'accorde avec le doré, le blanc nacré et le rose poudré.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "verre", "lavande", "violet", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleCubeVerreLavandeImage,
    images: [perleCubeVerreLavandeImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cube-verre-lavande",
      0.65,
      400,
      { name: "Couleur", value: "Lavande transparent" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-verre-translucide-rose",
    handle: "perle-verre-translucide-rose",
    title: "Perle Verre Translucide Rose",
    description: "Perle ronde verre rose translucide, cœur blanc inséré.",
    descriptionHtml:
      "<p>Perle ronde en verre rose translucide abritant un cœur blanc opaque à l'intérieur. Double couche, effet de profondeur.</p><p>S'accorde avec les perles nacrées et le doré rosé.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "verre", "rose", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.65"),
    compareAtPrice: null,
    featuredImage: perleVerreTranslucideRoseImage,
    images: [perleVerreTranslucideRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-verre-translucide-rose",
      0.65,
      400,
      { name: "Couleur", value: "Rose translucide" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-rose-coeur",
    handle: "perle-cristal-rose-coeur",
    title: "Perle Cristal Rose Cœur",
    description: "Perle cristal facetté avec cœur rose visible au centre.",
    descriptionHtml:
      "<p>Perle ronde en cristal facetté transparent, abritant un cœur rose poudré visible à travers les facettes. Effet bijou complexe, chaque facette capture une nuance différente.</p><p>S'accorde avec le doré, le blanc nacré et l'argenté pour une création précieuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "cristal", "rose", "facette", "coeur", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: perleCristalRoseCoeurImage,
    images: [perleCristalRoseCoeurImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-rose-coeur",
      0.95,
      400,
      { name: "Couleur", value: "Cristal rose cœur" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-perle-cristal-iridescent-rose",
    handle: "perle-cristal-iridescent-rose",
    title: "Perle Cristal Iridescent Rose",
    description: "Perle cristal facetté irisé multicolore, cœur rose.",
    descriptionHtml:
      "<p>Perle ronde en cristal facetté à finition irisée qui passe du rose au turquoise selon l'angle, cœur rose vif au centre. Effet aurora prismatique.</p><p>S'accorde avec le doré, l'argenté et les perles cristal pour une création hyper lumineuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "cristal", "iridescent", "rose", "facette", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("0.95"),
    compareAtPrice: null,
    featuredImage: perleCristalIridescentRoseImage,
    images: [perleCristalIridescentRoseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "perle-cristal-iridescent-rose",
      0.95,
      400,
      { name: "Couleur", value: "Cristal iridescent" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lapis-lazuli-facette",
    handle: "pierre-lapis-lazuli-facette",
    title: "Pierre Lapis Lazuli Facetté",
    description: "Pierre lapis lazuli bleu marine taillée à facettes, éclats de pyrite.",
    descriptionHtml:
      "<p>Perles facettées dans le lapis lazuli, bleu marine profond piqueté d'inclusions de pyrite dorée. Les facettes captent la lumière et donnent un éclat plus vif que les versions polies lisses.</p><p>À associer avec le doré, le blanc nacré et le rouge brique pour une création précieuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lapis-lazuli", "bleu", "marine", "facette", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliFacetteImage,
    images: [pierreLapisLazuliFacetteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lapis-lazuli-facette",
      1.3,
      400,
      { name: "Pierre", value: "Lapis Lazuli Facetté" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-lave-noire-granuleuse",
    handle: "pierre-lave-noire-granuleuse",
    title: "Pierre de Lave Noire Granuleuse",
    description: "Pierre de lave volcanique noire à surface granuleuse fine.",
    descriptionHtml:
      "<p>Perles taillées dans la pierre de lave, noir profond avec une texture granuleuse plus fine et régulière que la version standard. Toucher tactile, légère en main.</p><p>S'associe avec le doré mat, le cuivre et le bois clair pour une création minérale.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lave", "noire", "porous", "granuleuse", "mate", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.00"),
    compareAtPrice: null,
    featuredImage: pierreLaveNoireGranuleuseImage,
    images: [pierreLaveNoireGranuleuseImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-lave-noire-granuleuse",
      1.0,
      400,
      { name: "Pierre", value: "Lave Granuleuse" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-jaspe-rouge-facette",
    handle: "pierre-jaspe-rouge-facette",
    title: "Pierre Jaspe Rouge Facetté",
    description: "Pierre jaspe rouge profond taillée à facettes, finition naturelle.",
    descriptionHtml:
      "<p>Perles facettées dans le jaspe rouge, teinte rouge-bordeaux profonde avec des nuances naturelles plus claires. Les facettes adoucies (pas vitreuses) gardent l'aspect minéral.</p><p>À associer avec le doré, l'ivoire et le noir pour une création chaleureuse et chic.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "rouge", "bordeaux", "facette", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.30"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeFacetteImage,
    images: [pierreJaspeRougeFacetteImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-jaspe-rouge-facette",
      1.3,
      400,
      { name: "Pierre", value: "Jaspe Rouge Facetté" },
      VRAC_PIECE_TIERS,
    ),
  },
  {
    id: "mock-product-pierre-jade-vert-profond",
    handle: "pierre-jade-vert-profond",
    title: "Pierre Jade Vert Profond",
    description: "Pierre jade vert profond uniforme, finition très brillante.",
    descriptionHtml:
      "<p>Perles taillées dans le jade, teinte vert sombre profonde et uniforme, finition très brillante. Couleur dense, presque forestière.</p><p>S'accorde avec le doré, le crème et le brun bois pour une création naturelle et noble.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jade", "vert", "profond", "fonce", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJadeVertProfondImage,
    images: [pierreJadeVertProfondImage],
    variants: pieceChoiceVariantsFromUnitPrice(
      "pierre-jade-vert-profond",
      1.2,
      400,
      { name: "Pierre", value: "Jade Vert Profond" },
      VRAC_PIECE_TIERS,
    ),
  },
];
