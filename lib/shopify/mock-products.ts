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
// ─── Lot 2 — Perles & charme (photos brutes en attente de retouche) ───
// ─── Lot 3 — Perles, pierres & charme (photos brutes) ──────────────
// ─── Lot 4 — Perles & pierres (photos brutes) ──────────────────────
// ─── Lot 5 — Perles & charmes (photos brutes) ──────────────────────
// ─── Lot 6 — Final batch (48 fiches photos brutes) ─────────────────
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
const charmeLettreZFuchsiaImage = productAsset("mnb_charme_lettre_z_fuchsia_v1.jpg", "Charme lettre Z fuchsia My Nice Bracelet");
const charmeFleurCristalRoseImage = productAsset("mnb_charme_fleur_cristal_rose_v1.jpg", "Charme fleur cristal rose My Nice Bracelet");
const charmeOursVerreMagentaImage = productAsset("mnb_charme_ours_verre_magenta_v1.jpg", "Charme ours verre magenta My Nice Bracelet");
const charmeEtoileVerreRoseImage = productAsset("mnb_charme_etoile_verre_rose_v1.jpg", "Charme etoile verre rose My Nice Bracelet");
const charmeLettreUIriseeImage = productAsset("mnb_charme_lettre_u_irisee_v1.jpg", "Charme lettre U irisee My Nice Bracelet");
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


// ─── Lot pierres5 — 44 nouvelles fiches (mai 2026) ─────────────
const pierreCornalineRougeClaireImage = productAsset("mnb_pierre_cornaline_rouge_claire_v1.jpg", "Pierre cornaline rouge claire brillante My Nice Bracelet");
const pierreObsidienneNoireImage = productAsset("mnb_pierre_obsidienne_noire_v1.jpg", "Pierre obsidienne noire brillante My Nice Bracelet");
const pierreCornalineRougeVeineeImage = productAsset("mnb_pierre_cornaline_rouge_veinee_v1.jpg", "Pierre cornaline rouge veinee My Nice Bracelet");
const pierreAmbrePailleteeImage = productAsset("mnb_pierre_ambre_pailletee_v1.jpg", "Pierre ambre pailletee marron My Nice Bracelet");
const pierreCornalineRougeProfondImage = productAsset("mnb_pierre_cornaline_rouge_profond_v1.jpg", "Pierre cornaline rouge profond brillante My Nice Bracelet");
const pierreLapisLazuliMatImage = productAsset("mnb_pierre_lapis_lazuli_mat_v1.jpg", "Pierre lapis lazuli mat bleu marine My Nice Bracelet");
const pierreHowliteBruteImage = productAsset("mnb_pierre_howlite_brute_v1.jpg", "Pierre howlite forme libre blanche My Nice Bracelet");
const pierreBleuRoiFacetteeImage = productAsset("mnb_pierre_bleu_roi_facettee_v1.jpg", "Pierre bleu roi facettee My Nice Bracelet");
const pierreJaspeRougeMatImage = productAsset("mnb_pierre_jaspe_rouge_mat_v1.jpg", "Pierre jaspe rouge mat My Nice Bracelet");
const pierreSerpentineVerteMateImage = productAsset("mnb_pierre_serpentine_verte_mate_v1.jpg", "Pierre serpentine verte mate My Nice Bracelet");
const pierreAmbreOliveImage = productAsset("mnb_pierre_ambre_olive_v1.jpg", "Pierre ambre olive jaune My Nice Bracelet");
const pierreHematiteGriseBrillanteImage = productAsset("mnb_pierre_hematite_grise_brillante_v1.jpg", "Pierre hematite grise brillante My Nice Bracelet");
const pierreSerpentineVerteBrillanteImage = productAsset("mnb_pierre_serpentine_verte_brillante_v1.jpg", "Pierre serpentine verte brillante My Nice Bracelet");
const pierreCornalineOrangeImage = productAsset("mnb_pierre_cornaline_orange_v1.jpg", "Pierre cornaline orange brillante My Nice Bracelet");
const pierreCornalineMarronBruneImage = productAsset("mnb_pierre_cornaline_marron_brune_v1.jpg", "Pierre cornaline marron brune My Nice Bracelet");
const pierreJaspeDalmatienImage = productAsset("mnb_pierre_jaspe_dalmatien_v1.jpg", "Pierre jaspe dalmatien tachete My Nice Bracelet");
const pierreAventurineCaramelImage = productAsset("mnb_pierre_aventurine_caramel_v1.jpg", "Pierre aventurine caramel mate My Nice Bracelet");
const pierreLabradoriteVerteIriseeImage = productAsset("mnb_pierre_labradorite_verte_irisee_v1.jpg", "Pierre labradorite verte irisee My Nice Bracelet");
const pierreCalciteJauneMarbreeImage = productAsset("mnb_pierre_calcite_jaune_marbree_v1.jpg", "Pierre calcite jaune marbree My Nice Bracelet");
const pierreAventurineSanguineImage = productAsset("mnb_pierre_aventurine_sanguine_v1.jpg", "Pierre aventurine sanguine My Nice Bracelet");
const pierreJaspeRougeBrecheImage = productAsset("mnb_pierre_jaspe_rouge_breche_v1.jpg", "Pierre jaspe rouge breche My Nice Bracelet");
const pierreBleuMarineFacetteeImage = productAsset("mnb_pierre_bleu_marine_facettee_v1.jpg", "Pierre bleu marine facettee My Nice Bracelet");
const pierreJadeVertAnisImage = productAsset("mnb_pierre_jade_vert_anis_v1.jpg", "Pierre jade vert anis My Nice Bracelet");
const perleMoutardeBrillanteImage = productAsset("mnb_perle_moutarde_brillante_v1.jpg", "Perle ronde moutarde brillante My Nice Bracelet");
const perleNacreeCuivreImage = productAsset("mnb_perle_nacree_cuivre_v1.jpg", "Perle nacree cuivre My Nice Bracelet");
const perleCylindreVioletImage = productAsset("mnb_perle_cylindre_violet_v1.jpg", "Perle cylindre violet My Nice Bracelet");
const perlePorcelaineMotifCerisierImage = productAsset("mnb_perle_porcelaine_motif_cerisier_v1.jpg", "Perle porcelaine motif cerisier My Nice Bracelet");
const perleCubeHematiteIriseeImage = productAsset("mnb_perle_cube_hematite_irisee_v1.jpg", "Perle cube hematite irisee bleu vert My Nice Bracelet");
const perleOrangeBrillanteImage = productAsset("mnb_perle_orange_brillante_v1.jpg", "Perle ronde orange brillante My Nice Bracelet");
const perleCubeVerreVertBlancImage = productAsset("mnb_perle_cube_verre_vert_blanc_v1.jpg", "Perle cube verre vert blanc raye My Nice Bracelet");
const charmePandaCeramiqueImage = productAsset("mnb_charme_panda_ceramique_v1.jpg", "Charme panda ceramique bleu My Nice Bracelet");
const perleCubeOnyxNoirImage = productAsset("mnb_perle_cube_onyx_noir_v1.jpg", "Perle cube onyx noir My Nice Bracelet");
const perlePorcelaineMotifFloralNoirImage = productAsset("mnb_perle_porcelaine_motif_floral_noir_v1.jpg", "Perle porcelaine blanche motif floral noir My Nice Bracelet");
const perleDonutHematiteNoireImage = productAsset("mnb_perle_donut_hematite_noire_v1.jpg", "Perle donut hematite noire My Nice Bracelet");
const perleCubeVerreBlancVertImage = productAsset("mnb_perle_cube_verre_blanc_vert_v1.jpg", "Perle cube verre blanc et vert My Nice Bracelet");
const perleCabochonGrisImage = productAsset("mnb_perle_cabochon_gris_v1.jpg", "Perle cabochon gris brillante My Nice Bracelet");
const perleMatBleuMarineImage = productAsset("mnb_perle_mat_bleu_marine_v1.jpg", "Perle ronde mat bleu marine My Nice Bracelet");
const perleVerreOrangeTranslucideImage = productAsset("mnb_perle_verre_orange_translucide_v1.jpg", "Perle verre orange translucide My Nice Bracelet");
const perleJaunePumiceImage = productAsset("mnb_perle_jaune_pumice_v1.jpg", "Perle jaune pumice texturee My Nice Bracelet");
const perleVerreVertOliveImage = productAsset("mnb_perle_verre_vert_olive_v1.jpg", "Perle verre vert olive translucide My Nice Bracelet");
const perleCylindreVioletMatImage = productAsset("mnb_perle_cylindre_violet_mat_v1.jpg", "Perle cylindre violet mat My Nice Bracelet");
const charmeDragonCinnabreImage = productAsset("mnb_charme_dragon_cinnabre_v1.jpg", "Charme dragon cinnabre rouge sculpte My Nice Bracelet");
const spacerArgentRosaceImage = productAsset("mnb_spacer_argent_rosace_v1.jpg", "Spacer argent rosace metallique My Nice Bracelet");
const spacerBronzeEtoileImage = productAsset("mnb_spacer_bronze_etoile_v1.jpg", "Spacer bronze etoile metal My Nice Bracelet");
const spacerArgentPoliImage = productAsset("mnb_spacer_argent_poli_v1.jpg", "Spacer argent poli brillant My Nice Bracelet");

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

/** Pricing catalogue uniforme pour TOUTES les perles & pierres :
 *  le prix unitaire décroît avec la taille du lot, MAIS la grille
 *  est la même quel que soit le produit (pas de matière "premium").
 *  Avant : chaque produit avait son propre `unitPrice` qu'on
 *  multipliait par un facteur dégressif → différents prix pour 100
 *  perles selon la nature. Maintenant : tarif unique par tier, plus
 *  simple à comprendre pour le client.
 *
 *   20 pcs : 1.20 €/u → 24 €
 *   50 pcs : 1.00 €/u → 50 €
 *  100 pcs : 0.85 €/u → 85 €
 *  250 pcs : 0.65 €/u → 162,50 €
 *  500 pcs : 0.50 €/u → 250 €
 */
const VRAC_PIECE_PRICING: { pieces: number; unitPrice: number }[] = [
  { pieces: 20, unitPrice: 1.2 },
  { pieces: 50, unitPrice: 1.0 },
  { pieces: 100, unitPrice: 0.85 },
  { pieces: 250, unitPrice: 0.65 },
  { pieces: 500, unitPrice: 0.5 },
];

/** Helper pour générer les variants d'un produit perle/pierre avec
 *  la grille tarifaire unifiée. Ignore tout unit price spécifique au
 *  produit : c'est exactement la même progression pour tous les
 *  SKUs perle/pierre du catalogue. */
const vracPiecePricingVariants = (
  baseId: string,
  stock: number,
  option?: PieceChoiceVariant["option"],
) =>
  pieceChoiceVariants(
    baseId,
    VRAC_PIECE_PRICING.map(({ pieces, unitPrice }) => ({
      pieces,
      price: (unitPrice * pieces).toFixed(2),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeTransparentVertImage,
    images: [perleCubeTransparentVertImage],
    variants: vracPiecePricingVariants(
      "perles-bonbon-paris",
      120,
      {
      name: "Couleur",
      value: "Pastel mix",
    },
    ),
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
    variants: vracPiecePricingVariants(
      "perles-nacrees-atelier",
      100,
      {
      name: "Finition",
      value: "Nacree",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: coeurBlancNacreImage,
    images: [coeurBlancNacreImage],
    variants: vracPiecePricingVariants(
      "perles-quartz-rose-douceur",
      80,
      {
      name: "Pierre",
      value: "Quartz rose",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: fleurBlancIrisImage,
    images: [fleurBlancIrisImage],
    variants: vracPiecePricingVariants(
      "perles-amethyste-violet",
      50,
      {
      name: "Pierre",
      value: "Amethyste",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: angeArgentImage,
    images: [angeArgentImage],
    variants: vracPiecePricingVariants(
      "piece-ange-argent",
      50,
      {
      name: "Finition",
      value: "Argent",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: coeurBlancNacreImage,
    images: [coeurBlancNacreImage],
    variants: vracPiecePricingVariants(
      "piece-coeur-blanc-nacre",
      120,
      {
      name: "Couleur",
      value: "Blanc nacre",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: coeurJauneIrisImage,
    images: [coeurJauneIrisImage],
    variants: vracPiecePricingVariants(
      "piece-coeur-jaune-iris",
      80,
      {
      name: "Couleur",
      value: "Jaune iris",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: etoileBleuTransparentImage,
    images: [etoileBleuTransparentImage],
    variants: vracPiecePricingVariants(
      "piece-etoile-bleu-transparent",
      90,
      {
      name: "Couleur",
      value: "Bleu transparent",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: fleurBlancIrisImage,
    images: [fleurBlancIrisImage],
    variants: vracPiecePricingVariants(
      "piece-fleur-blanc-iris",
      70,
      {
      name: "Couleur",
      value: "Blanc iris",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: lapinTransparentIrisImage,
    images: [lapinTransparentIrisImage],
    variants: vracPiecePricingVariants(
      "piece-lapin-transparent-iris",
      60,
      {
      name: "Couleur",
      value: "Transparent iris",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: oursonVertMentheImage,
    images: [oursonVertMentheImage],
    variants: vracPiecePricingVariants(
      "piece-ourson-vert-menthe",
      70,
      {
      name: "Couleur",
      value: "Vert menthe",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: papillonVertIrisImage,
    images: [papillonVertIrisImage],
    variants: vracPiecePricingVariants(
      "piece-papillon-vert-iris",
      50,
      {
      name: "Couleur",
      value: "Vert iris",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: papillonVertPastelImage,
    images: [papillonVertPastelImage],
    variants: vracPiecePricingVariants(
      "piece-papillon-vert-pastel",
      80,
      {
      name: "Couleur",
      value: "Vert pastel",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeTransparentVertImage,
    images: [perleCubeTransparentVertImage],
    variants: vracPiecePricingVariants(
      "perle-cube-transparent-vert",
      120,
      {
      name: "Couleur",
      value: "Transparent vert",
    },
    ),
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeVertAnisImage,
    images: [perleCubeVertAnisImage],
    variants: vracPiecePricingVariants(
      "perle-cube-vert-anis-facette",
      110,
      {
      name: "Couleur",
      value: "Vert anis",
    },
    ),
  },

  // ─── Lot 1 — Nouvelles perles & pieces (photos brutes) ───────────
  // Sept fiches creees a partir des photos shootees a la main par
  // l'atelier. Chaque produit est vendu en lots de 20 / 50 / 100 /
  // 250 / 500 pieces (preset VRAC_PIECE_TIERS) — pas de vente a la
  // piece sur ces SKUs, c'est de l'approvisionnement vrac. Le palier
  // 100 active la mention "Prix degressif applique" du
  // ProductPurchasePanel (seuil hasVolumeDiscount = 100).

  // ─── Lot 2 — Perles & charmes (photos brutes) ───────────────────
  // Sept SKUs supplementaires shootees a la main, meme template que
  // le Lot 1 : paliers vrac VRAC_PIECE_TIERS [20/50/100/250/500],
  // photos en .jpg recadrees 1400x1400 que Dany swappera plus tard.

  // ─── Lot 3 — Perles, pierres & charme (photos brutes) ──────────────
  // Sept SKUs : 3 perles (cacao, iris violet, porcelaine vert fleur),
  // 3 pierres (hematite, jade olive, jade lavande ovale), 1 charme
  // (etoile violette ceramique). Memes paliers VRAC_PIECE_TIERS.

  // ─── Lot 4 — Perles & pierres (photos brutes) ──────────────────────
  // Sept SKUs : 5 perles (porcelaine bleu damier, bleu ciel petite,
  // blanc craie, peche translucide, marron fonce brillante) +
  // 2 pierres (oeil-de-tigre dore, cornaline rouge). Memes paliers
  // VRAC_PIECE_TIERS.

  // ─── Lot 5 — Perles & charmes (photos brutes) ──────────────────────
  // Sept SKUs : 5 perles (olive bronze, vert menthe mate, porcelaine
  // blanc motif jaune, brique mate, olive marbree) + 2 charmes
  // (sac rouge ceramique, coquillage cauri).

  // ─── Lot 6 — Final batch (48 fiches) ────────────────────────────

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
    price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Top jaune sac cœur" }],
        image: yumeMinidollYellowHeart,
      },
      {
        id: "mock-variant-yume-minidoll-cheerleader",
        title: "Pom-pom girl",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Pom-pom girl" }],
        image: yumeMinidollCheerleader,
      },
      {
        id: "mock-variant-yume-minidoll-overalls",
        title: "Salopette bleue",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Salopette bleue" }],
        image: yumeMinidollOveralls,
      },
      {
        id: "mock-variant-yume-minidoll-pirate",
        title: "Pirate",
        availableForSale: true,
        quantityAvailable: 8,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Tenue", value: "Pirate" }],
        image: yumeMinidollPirate,
      },
      {
        id: "mock-variant-yume-minidoll-chef",
        title: "Chef tablier pomme",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Hello Kitty" }],
        image: yumeRaincoatHelloKitty,
      },
      {
        id: "mock-variant-yume-raincoat-my-melody",
        title: "My Melody",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "My Melody" }],
        image: yumeRaincoatMyMelody,
      },
      {
        id: "mock-variant-yume-raincoat-pompompurin",
        title: "Pompompurin",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Pompompurin" }],
        image: yumeRaincoatPompompurin,
      },
      {
        id: "mock-variant-yume-raincoat-kuromi",
        title: "Kuromi",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Kuromi" }],
        image: yumeRaincoatKuromi,
      },
      {
        id: "mock-variant-yume-raincoat-pochacco",
        title: "Pochacco",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("6.99"),
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
    price: money("6.99"),
    compareAtPrice: null,
    featuredImage: yumeOnepieceCollection,
    images: [yumeOnepieceCollection, yumeOnepieceChopper, yumeOnepieceLuffy, yumeOnepieceZoro],
    variants: [
      {
        id: "mock-variant-yume-onepiece-chopper",
        title: "Chopper",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Chopper" }],
        image: yumeOnepieceChopper,
      },
      {
        id: "mock-variant-yume-onepiece-luffy",
        title: "Monkey D. Luffy",
        availableForSale: true,
        quantityAvailable: 14,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Personnage", value: "Monkey D. Luffy" }],
        image: yumeOnepieceLuffy,
      },
      {
        id: "mock-variant-yume-onepiece-zoro",
        title: "Roronoa Zoro",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("6.99"),
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
    title: "Porte-clé Rainbow Strap",
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
    price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Violet" }],
        image: yumeMolangScooterPurple,
      },
      {
        id: "mock-variant-yume-molang-scooter-blue",
        title: "Bleu",
        availableForSale: true,
        quantityAvailable: 13,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Bleu" }],
        image: yumeMolangScooterBlue,
      },
      {
        id: "mock-variant-yume-molang-scooter-green",
        title: "Vert menthe",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Couleur", value: "Vert menthe" }],
        image: yumeMolangScooterGreen,
      },
      {
        id: "mock-variant-yume-molang-scooter-pink",
        title: "Rose",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("6.99"),
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
    price: money("6.99"),
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
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Glace" }],
        image: yumeMolangSnackIcecream,
      },
      {
        id: "mock-variant-yume-molang-snack-donut",
        title: "Donut",
        availableForSale: true,
        quantityAvailable: 12,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Donut" }],
        image: yumeMolangSnackDonut,
      },
      {
        id: "mock-variant-yume-molang-snack-teacup",
        title: "Tasse à thé",
        availableForSale: true,
        quantityAvailable: 10,
        price: money("6.99"),
        compareAtPrice: null,
        selectedOptions: [{ name: "Gourmandise", value: "Tasse à thé" }],
        image: yumeMolangSnackTeacup,
      },
      {
        id: "mock-variant-yume-molang-snack-cupcake",
        title: "Cupcake",
        availableForSale: true,
        quantityAvailable: 11,
        price: money("6.99"),
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
    variants: vracPiecePricingVariants(
      "pierre-oeil-tigre-caramel",
      400,
      { name: "Pierre", value: "Œil de Tigre Caramel" },
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
    variants: vracPiecePricingVariants(
      "pierre-rose-facettee",
      400,
      { name: "Pierre", value: "Rose Facettée" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLaveNoireImage,
    images: [pierreLaveNoireImage],
    variants: vracPiecePricingVariants(
      "pierre-lave-noire",
      400,
      { name: "Pierre", value: "de Lave Noire" },
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
    variants: vracPiecePricingVariants(
      "pierre-lune-creme",
      400,
      { name: "Pierre", value: "de Lune Crème" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLabradoriteGriseImage,
    images: [pierreLabradoriteGriseImage],
    variants: vracPiecePricingVariants(
      "pierre-labradorite-grise",
      400,
      { name: "Pierre", value: "Labradorite Grise" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeVertMousseImage,
    images: [pierreJaspeVertMousseImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-vert-mousse",
      400,
      { name: "Pierre", value: "Jaspe Vert Mousse" },
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
    variants: vracPiecePricingVariants(
      "pierre-lapis-lazuli",
      400,
      { name: "Pierre", value: "Lapis Lazuli" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreOnyxNoirMatImage,
    images: [pierreOnyxNoirMatImage],
    variants: vracPiecePricingVariants(
      "pierre-onyx-noir-mat",
      400,
      { name: "Pierre", value: "Onyx Noir Mat" },
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
    variants: vracPiecePricingVariants(
      "pierre-unakite-rose-vert",
      400,
      { name: "Pierre", value: "Unakite Rose et Vert" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreHowliteGrisLilasImage,
    images: [pierreHowliteGrisLilasImage],
    variants: vracPiecePricingVariants(
      "pierre-howlite-gris-lilas",
      400,
      { name: "Pierre", value: "Howlite Gris Lilas" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeBriqueImage,
    images: [pierreJaspeRougeBriqueImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-rouge-brique",
      400,
      { name: "Pierre", value: "Jaspe Rouge Brique" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeNoeudRosePastelImage,
    images: [charmeNoeudRosePastelImage],
    variants: vracPiecePricingVariants(
      "charme-noeud-rose-pastel",
      400,
      { name: "Couleur", value: "Rose pastel" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleMagentaEtoilesArgentImage,
    images: [perleMagentaEtoilesArgentImage],
    variants: vracPiecePricingVariants(
      "perle-magenta-etoiles-argent",
      400,
      { name: "Couleur", value: "Magenta étoiles" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleJauneMoucheteeImage,
    images: [perleJauneMoucheteeImage],
    variants: vracPiecePricingVariants(
      "perle-jaune-mouchetee",
      400,
      { name: "Couleur", value: "Jaune mouchetée" },
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
    variants: vracPiecePricingVariants(
      "pierre-oeil-tigre-fonce",
      400,
      { name: "Pierre", value: "Œil de Tigre Foncé" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliPyriteImage,
    images: [pierreLapisLazuliPyriteImage],
    variants: vracPiecePricingVariants(
      "pierre-lapis-lazuli-pyrite",
      400,
      { name: "Pierre", value: "Lapis Lazuli Pyrite" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreGrenatRougeImage,
    images: [pierreGrenatRougeImage],
    variants: vracPiecePricingVariants(
      "pierre-grenat-rouge",
      400,
      { name: "Pierre", value: "Grenat Rouge" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeOursVerreRoseImage,
    images: [charmeOursVerreRoseImage],
    variants: vracPiecePricingVariants(
      "charme-ours-verre-rose",
      400,
      { name: "Couleur", value: "Rose verre" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLabradoriteVerteImage,
    images: [pierreLabradoriteVerteImage],
    variants: vracPiecePricingVariants(
      "pierre-labradorite-verte",
      400,
      { name: "Pierre", value: "Labradorite Verte" },
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
    variants: vracPiecePricingVariants(
      "pierre-jade-noir",
      400,
      { name: "Pierre", value: "Jade Noir" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreAgateCornalineImage,
    images: [pierreAgateCornalineImage],
    variants: vracPiecePricingVariants(
      "pierre-agate-cornaline",
      400,
      { name: "Pierre", value: "Agate Cornaline" },
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
    variants: vracPiecePricingVariants(
      "pierre-quartz-fume",
      400,
      { name: "Pierre", value: "Quartz Fumé" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeOursMagentaImage,
    images: [charmeOursMagentaImage],
    variants: vracPiecePricingVariants(
      "charme-ours-magenta",
      400,
      { name: "Style", value: "Ours magenta" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeCoeurVioletGlitterImage,
    images: [charmeCoeurVioletGlitterImage],
    variants: vracPiecePricingVariants(
      "charme-coeur-violet-glitter",
      400,
      { name: "Style", value: "Cœur violet glitter" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeLettreBFuchsiaImage,
    images: [charmeLettreBFuchsiaImage],
    variants: vracPiecePricingVariants(
      "charme-lettre-b-fuchsia",
      400,
      { name: "Style", value: "Lettre B fuchsia" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeNoeudFuchsiaImage,
    images: [charmeNoeudFuchsiaImage],
    variants: vracPiecePricingVariants(
      "charme-noeud-fuchsia",
      400,
      { name: "Style", value: "Nœud fuchsia" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeCoeurVerreRoseImage,
    images: [charmeCoeurVerreRoseImage],
    variants: vracPiecePricingVariants(
      "charme-coeur-verre-rose",
      400,
      { name: "Style", value: "Cœur verre rose" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeFleurFramboiseImage,
    images: [charmeFleurFramboiseImage],
    variants: vracPiecePricingVariants(
      "charme-fleur-framboise",
      400,
      { name: "Style", value: "Fleur framboise" },
    ),
  },
  {
    id: "mock-product-charme-lettre-z-fuchsia",
    handle: "charme-lettre-z-fuchsia",
    title: "Charme Lettre Z Fuchsia",
    description: "Charme lettre Z en résine fuchsia brillante.",
    descriptionHtml:
      "<p>Charme alphabet en forme de lettre Z (ou W selon orientation), résine fuchsia brillante. Personnalise un bracelet avec une initiale.</p><p>S'accorde avec n'importe quelle base — la lettre devient le point focal.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lettre", "alphabet", "M", "fuchsia", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeLettreZFuchsiaImage,
    images: [charmeLettreZFuchsiaImage],
    variants: vracPiecePricingVariants(
      "charme-lettre-z-fuchsia",
      400,
      { name: "Style", value: "Lettre Z fuchsia" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeFleurCristalRoseImage,
    images: [charmeFleurCristalRoseImage],
    variants: vracPiecePricingVariants(
      "charme-fleur-cristal-rose",
      400,
      { name: "Style", value: "Fleur cristal rose" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeOursVerreMagentaImage,
    images: [charmeOursVerreMagentaImage],
    variants: vracPiecePricingVariants(
      "charme-ours-verre-magenta",
      400,
      { name: "Style", value: "Ours verre magenta" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeEtoileVerreRoseImage,
    images: [charmeEtoileVerreRoseImage],
    variants: vracPiecePricingVariants(
      "charme-etoile-verre-rose",
      400,
      { name: "Style", value: "Étoile verre rose" },
    ),
  },
  {
    id: "mock-product-charme-lettre-u-irisee",
    handle: "charme-lettre-u-irisee",
    title: "Charme Lettre U Irisée",
    description: "Charme lettre U en résine irisée nacrée.",
    descriptionHtml:
      "<p>Charme alphabet en forme de lettre U, résine aux reflets irisés rose et doré qui changent selon la lumière. Effet bijou délicat.</p><p>S'accorde avec les perles nacrées, le doré rosé et le crème.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "lettre", "alphabet", "C", "irise", "nacre", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeLettreUIriseeImage,
    images: [charmeLettreUIriseeImage],
    variants: vracPiecePricingVariants(
      "charme-lettre-u-irisee",
      400,
      { name: "Style", value: "Lettre U irisée" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeTrioSpheresFuchsiaImage,
    images: [charmeTrioSpheresFuchsiaImage],
    variants: vracPiecePricingVariants(
      "charme-trio-spheres-fuchsia",
      400,
      { name: "Style", value: "Trio sphères" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeLapinFuchsiaImage,
    images: [charmeLapinFuchsiaImage],
    variants: vracPiecePricingVariants(
      "charme-lapin-fuchsia",
      400,
      { name: "Style", value: "Lapin fuchsia" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeMauveTranslucideImage,
    images: [perleCubeMauveTranslucideImage],
    variants: vracPiecePricingVariants(
      "perle-cube-mauve-translucide",
      400,
      { name: "Couleur", value: "Mauve translucide" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleRoseFluoMarbreeImage,
    images: [perleRoseFluoMarbreeImage],
    variants: vracPiecePricingVariants(
      "perle-rose-fluo-marbree",
      400,
      { name: "Couleur", value: "Rose fluo marbrée" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleTubeVerreRoseImage,
    images: [perleTubeVerreRoseImage],
    variants: vracPiecePricingVariants(
      "perle-tube-verre-rose",
      400,
      { name: "Couleur", value: "Tube rose" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleRondeMagentaBrillanteImage,
    images: [perleRondeMagentaBrillanteImage],
    variants: vracPiecePricingVariants(
      "perle-ronde-magenta-brillante",
      400,
      { name: "Couleur", value: "Magenta brillant" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCylindreVerreRosePoudreImage,
    images: [perleCylindreVerreRosePoudreImage],
    variants: vracPiecePricingVariants(
      "perle-cylindre-verre-rose-poudre",
      400,
      { name: "Couleur", value: "Cylindre rose poudré" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeRosePoudreImage,
    images: [perleCubeRosePoudreImage],
    variants: vracPiecePricingVariants(
      "perle-cube-rose-poudre",
      400,
      { name: "Couleur", value: "Rose poudré" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleVerreTransparenteRoseImage,
    images: [perleVerreTransparenteRoseImage],
    variants: vracPiecePricingVariants(
      "perle-verre-transparente-rose",
      400,
      { name: "Couleur", value: "Transparent rose" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleOliveMarbreeSaumonImage,
    images: [perleOliveMarbreeSaumonImage],
    variants: vracPiecePricingVariants(
      "perle-olive-marbree-saumon",
      400,
      { name: "Couleur", value: "Saumon marbré" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleRondelleRosePandoraImage,
    images: [perleRondelleRosePandoraImage],
    variants: vracPiecePricingVariants(
      "perle-rondelle-rose-pandora",
      400,
      { name: "Couleur", value: "Rose pandora" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleRondeNoireBrillanteImage,
    images: [perleRondeNoireBrillanteImage],
    variants: vracPiecePricingVariants(
      "perle-ronde-noire-brillante",
      400,
      { name: "Couleur", value: "Noir brillant" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleDonutFuchsiaImage,
    images: [perleDonutFuchsiaImage],
    variants: vracPiecePricingVariants(
      "perle-donut-fuchsia",
      400,
      { name: "Couleur", value: "Fuchsia donut" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCarreRosePastelImage,
    images: [perleCarreRosePastelImage],
    variants: vracPiecePricingVariants(
      "perle-carre-rose-pastel",
      400,
      { name: "Couleur", value: "Rose pastel" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeVerreLavandeImage,
    images: [perleCubeVerreLavandeImage],
    variants: vracPiecePricingVariants(
      "perle-cube-verre-lavande",
      400,
      { name: "Couleur", value: "Lavande transparent" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleVerreTranslucideRoseImage,
    images: [perleVerreTranslucideRoseImage],
    variants: vracPiecePricingVariants(
      "perle-verre-translucide-rose",
      400,
      { name: "Couleur", value: "Rose translucide" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCristalRoseCoeurImage,
    images: [perleCristalRoseCoeurImage],
    variants: vracPiecePricingVariants(
      "perle-cristal-rose-coeur",
      400,
      { name: "Couleur", value: "Cristal rose cœur" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCristalIridescentRoseImage,
    images: [perleCristalIridescentRoseImage],
    variants: vracPiecePricingVariants(
      "perle-cristal-iridescent-rose",
      400,
      { name: "Couleur", value: "Cristal iridescent" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliFacetteImage,
    images: [pierreLapisLazuliFacetteImage],
    variants: vracPiecePricingVariants(
      "pierre-lapis-lazuli-facette",
      400,
      { name: "Pierre", value: "Lapis Lazuli Facetté" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLaveNoireGranuleuseImage,
    images: [pierreLaveNoireGranuleuseImage],
    variants: vracPiecePricingVariants(
      "pierre-lave-noire-granuleuse",
      400,
      { name: "Pierre", value: "Lave Granuleuse" },
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
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeFacetteImage,
    images: [pierreJaspeRougeFacetteImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-rouge-facette",
      400,
      { name: "Pierre", value: "Jaspe Rouge Facetté" },
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
    variants: vracPiecePricingVariants(
      "pierre-jade-vert-profond",
      400,
      { name: "Pierre", value: "Jade Vert Profond" },
    ),
  },
  // ─── Lot pierres5 — 44 nouvelles fiches pierres+perles+charmes ─
  {
    id: "mock-product-pierre-cornaline-rouge-claire",
    handle: "pierre-cornaline-rouge-claire",
    title: "Pierre Cornaline Rouge Claire",
    description: "Pierre cornaline rouge clair brillante, finition vitreuse.",
    descriptionHtml:
      "<p>Perles taillees dans la cornaline, pierre rouge-brique aux reflets chauds et finition tres brillante. Couleur saturee mais douce.</p><p>S'accorde avec le dore, l'ivoire et le marron pour une creation chaleureuse et lumineuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "rouge", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCornalineRougeClaireImage,
    images: [pierreCornalineRougeClaireImage],
    variants: vracPiecePricingVariants(
      "pierre-cornaline-rouge-claire",
      400,
      { name: "Pierre", value: "Cornaline Rouge" },
    ),
  },
  {
    id: "mock-product-pierre-obsidienne-noire",
    handle: "pierre-obsidienne-noire",
    title: "Pierre Obsidienne Noire",
    description: "Pierre obsidienne noire profond, finition vitreuse brillante.",
    descriptionHtml:
      "<p>Perles taillees dans l'obsidienne, verre volcanique noir profond avec une finition vitreuse tres brillante. Densite visuelle forte, eclat presque liquide.</p><p>A associer avec le dore, l'argent et les pierres claires pour un contraste graphique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "obsidienne", "noir", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreObsidienneNoireImage,
    images: [pierreObsidienneNoireImage],
    variants: vracPiecePricingVariants(
      "pierre-obsidienne-noire",
      400,
      { name: "Pierre", value: "Obsidienne Noire" },
    ),
  },
  {
    id: "mock-product-pierre-cornaline-rouge-veinee",
    handle: "pierre-cornaline-rouge-veinee",
    title: "Pierre Cornaline Rouge Veinée",
    description: "Pierre cornaline rouge avec une veine sombre naturelle.",
    descriptionHtml:
      "<p>Perles cornaline rouge dont chaque exemplaire presente sa propre veine sombre — un trait noir-marron naturel qui traverse la pierre. Chaque perle est unique.</p><p>A associer avec le dore, le crème et le marron chocolat pour une creation chaude.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "rouge", "veinee", "unique", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCornalineRougeVeineeImage,
    images: [pierreCornalineRougeVeineeImage],
    variants: vracPiecePricingVariants(
      "pierre-cornaline-rouge-veinee",
      400,
      { name: "Pierre", value: "Cornaline Veinée" },
    ),
  },
  {
    id: "mock-product-pierre-ambre-pailletee",
    handle: "pierre-ambre-pailletee",
    title: "Pierre Ambre Pailletée",
    description: "Pierre ambre marron-rouge pailletée d'or naturel.",
    descriptionHtml:
      "<p>Perles ambre, teinte marron-acajou avec des particules dorees naturelles qui scintillent sous la lumiere. Effet bijou subtil.</p><p>S'associe avec le dore, le caramel et l'ivoire pour une creation precieuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "ambre", "marron", "doree", "pailletee", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreAmbrePailleteeImage,
    images: [pierreAmbrePailleteeImage],
    variants: vracPiecePricingVariants(
      "pierre-ambre-pailletee",
      400,
      { name: "Pierre", value: "Ambre Pailletée" },
    ),
  },
  {
    id: "mock-product-pierre-cornaline-rouge-profond",
    handle: "pierre-cornaline-rouge-profond",
    title: "Pierre Cornaline Rouge Profond",
    description: "Pierre cornaline rouge profond saturé, finition brillante.",
    descriptionHtml:
      "<p>Perles cornaline d'un rouge profond et sature, finition brillante. Plus intense et plus chaude que les versions claires.</p><p>A associer avec le dore, le noir mat ou l'ivoire pour une creation forte et chic.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "rouge", "profond", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCornalineRougeProfondImage,
    images: [pierreCornalineRougeProfondImage],
    variants: vracPiecePricingVariants(
      "pierre-cornaline-rouge-profond",
      400,
      { name: "Pierre", value: "Cornaline Profonde" },
    ),
  },
  {
    id: "mock-product-pierre-lapis-lazuli-mat",
    handle: "pierre-lapis-lazuli-mat",
    title: "Pierre Lapis Lazuli Mat",
    description: "Pierre lapis lazuli bleu marine uni, finition mate.",
    descriptionHtml:
      "<p>Perles lapis lazuli bleu marine uni avec une finition mate volontaire (pas de polish brillant). Effet plus sourd et naturel que les versions cirees.</p><p>S'accorde avec le dore mat, le creme et le rouge brique pour une creation noble.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "lapis-lazuli", "bleu", "marine", "mat", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLapisLazuliMatImage,
    images: [pierreLapisLazuliMatImage],
    variants: vracPiecePricingVariants(
      "pierre-lapis-lazuli-mat",
      400,
      { name: "Pierre", value: "Lapis Mat" },
    ),
  },
  {
    id: "mock-product-pierre-howlite-brute",
    handle: "pierre-howlite-brute",
    title: "Pierre Howlite Brute",
    description: "Pierre howlite forme libre, blanc-creme aux veines naturelles.",
    descriptionHtml:
      "<p>Perles howlite en forme libre — chaque piece est unique, taillee dans la masse mais non spherique. Blanc casse aux veines beige naturelles.</p><p>A associer avec le dore, le turquoise et le naturel pour une creation boheme.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "howlite", "blanche", "creme", "brute", "unique", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreHowliteBruteImage,
    images: [pierreHowliteBruteImage],
    variants: vracPiecePricingVariants(
      "pierre-howlite-brute",
      400,
      { name: "Pierre", value: "Howlite Brute" },
    ),
  },
  {
    id: "mock-product-pierre-bleu-roi-facettee",
    handle: "pierre-bleu-roi-facettee",
    title: "Pierre Bleu Roi Facettée",
    description: "Pierre bleu roi saturé, taille facettée qui capte la lumière.",
    descriptionHtml:
      "<p>Perles taillees dans une pierre bleue saturee (bleu roi vif), avec des facettes prononcees qui accrochent la lumiere. Eclat plus dynamique qu'une polie lisse.</p><p>S'accorde avec le dore, le blanc nacre et le turquoise pour une creation electrique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "bleu", "roi", "facettee", "vive", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreBleuRoiFacetteeImage,
    images: [pierreBleuRoiFacetteeImage],
    variants: vracPiecePricingVariants(
      "pierre-bleu-roi-facettee",
      400,
      { name: "Pierre", value: "Bleu Roi Facettée" },
    ),
  },
  {
    id: "mock-product-pierre-jaspe-rouge-mat",
    handle: "pierre-jaspe-rouge-mat",
    title: "Pierre Jaspe Rouge Mat",
    description: "Pierre jaspe rouge brique, finition mate naturelle.",
    descriptionHtml:
      "<p>Perles jaspe rouge a finition mate, sans polish. Teinte rouge-brique chaude et terreuse.</p><p>A associer avec le dore mat, le caramel et le bois clair pour une creation telluric.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "rouge", "brique", "mat", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeMatImage,
    images: [pierreJaspeRougeMatImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-rouge-mat",
      400,
      { name: "Pierre", value: "Jaspe Rouge Mat" },
    ),
  },
  {
    id: "mock-product-pierre-serpentine-verte-mate",
    handle: "pierre-serpentine-verte-mate",
    title: "Pierre Serpentine Verte Mate",
    description: "Pierre serpentine verte sombre, finition mate granuleuse.",
    descriptionHtml:
      "<p>Perles serpentine, vert sombre marbre de noir et de blanc, finition mate non polie. Aspect minéral, terreux.</p><p>S'accorde avec le dore mat, l'ivoire et le bois pour une creation forestiere.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "serpentine", "vert", "fonce", "mat", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreSerpentineVerteMateImage,
    images: [pierreSerpentineVerteMateImage],
    variants: vracPiecePricingVariants(
      "pierre-serpentine-verte-mate",
      400,
      { name: "Pierre", value: "Serpentine Mate" },
    ),
  },
  {
    id: "mock-product-pierre-ambre-olive",
    handle: "pierre-ambre-olive",
    title: "Pierre Ambre Olive",
    description: "Pierre ambre olive aux nuances jaune-vert naturelles.",
    descriptionHtml:
      "<p>Perles ambre dans une teinte plus rare jaune-olive avec des inclusions noires naturelles. Forme libre legerement irreguliere.</p><p>A associer avec le dore, le vert kaki et le marron pour une creation organique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "ambre", "olive", "jaune", "vert", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreAmbreOliveImage,
    images: [pierreAmbreOliveImage],
    variants: vracPiecePricingVariants(
      "pierre-ambre-olive",
      400,
      { name: "Pierre", value: "Ambre Olive" },
    ),
  },
  {
    id: "mock-product-pierre-hematite-grise-brillante",
    handle: "pierre-hematite-grise-brillante",
    title: "Pierre Hématite Grise Brillante",
    description: "Pierre hématite gris-anthracite à finition brillante métallique.",
    descriptionHtml:
      "<p>Perles hematite gris-anthracite, finition tres brillante presque metallique. Reflets argentes sous certaines lumieres.</p><p>S'associe avec le dore, le rouge profond et le blanc nacre pour une creation graphique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "hematite", "gris", "anthracite", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreHematiteGriseBrillanteImage,
    images: [pierreHematiteGriseBrillanteImage],
    variants: vracPiecePricingVariants(
      "pierre-hematite-grise-brillante",
      400,
      { name: "Pierre", value: "Hématite Brillante" },
    ),
  },
  {
    id: "mock-product-pierre-serpentine-verte-brillante",
    handle: "pierre-serpentine-verte-brillante",
    title: "Pierre Serpentine Verte Brillante",
    description: "Pierre serpentine verte aux reflets dorés, finition polie brillante.",
    descriptionHtml:
      "<p>Perles serpentine vert vif marbre, finition brillante avec des reflets dores naturels (pyrite). Couleur plus riche que la version mate.</p><p>A associer avec le dore, l'ivoire et le noir pour une creation chic et naturelle.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "serpentine", "vert", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreSerpentineVerteBrillanteImage,
    images: [pierreSerpentineVerteBrillanteImage],
    variants: vracPiecePricingVariants(
      "pierre-serpentine-verte-brillante",
      400,
      { name: "Pierre", value: "Serpentine Brillante" },
    ),
  },
  {
    id: "mock-product-pierre-cornaline-orange",
    handle: "pierre-cornaline-orange",
    title: "Pierre Cornaline Orange",
    description: "Pierre cornaline orange chaude, finition brillante vitreuse.",
    descriptionHtml:
      "<p>Perles cornaline dans une teinte orange chaude, plus claire et plus vive que les versions rouge profond. Finition tres brillante.</p><p>S'accorde avec le dore, le caramel et le creme pour une creation solaire.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "orange", "brillante", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCornalineOrangeImage,
    images: [pierreCornalineOrangeImage],
    variants: vracPiecePricingVariants(
      "pierre-cornaline-orange",
      400,
      { name: "Pierre", value: "Cornaline Orange" },
    ),
  },
  {
    id: "mock-product-pierre-cornaline-marron-brune",
    handle: "pierre-cornaline-marron-brune",
    title: "Pierre Cornaline Marron Brune",
    description: "Pierre cornaline marron foncé presque chocolat, finition brillante.",
    descriptionHtml:
      "<p>Perles cornaline dans une teinte marron-brun profond, presque chocolat aux reflets rouges quand la lumiere passe. Plus discrete et plus chic que les versions vives.</p><p>A associer avec le dore, le creme et le caramel pour une creation chaude et raffinee.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "cornaline", "marron", "brun", "fonce", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCornalineMarronBruneImage,
    images: [pierreCornalineMarronBruneImage],
    variants: vracPiecePricingVariants(
      "pierre-cornaline-marron-brune",
      400,
      { name: "Pierre", value: "Cornaline Brune" },
    ),
  },
  {
    id: "mock-product-pierre-jaspe-dalmatien",
    handle: "pierre-jaspe-dalmatien",
    title: "Pierre Jaspe Dalmatien",
    description: "Pierre jaspe dalmatien crème tachetée de noir.",
    descriptionHtml:
      "<p>Perles jaspe dalmatien — pierre creme-beige naturellement tachetee de noir comme la robe d'un chien dalmatien. Chaque perle est unique par son motif.</p><p>S'accorde avec le dore, le noir et le creme pour une creation graphique et fun.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "dalmatien", "creme", "noir", "tachete", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeDalmatienImage,
    images: [pierreJaspeDalmatienImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-dalmatien",
      400,
      { name: "Pierre", value: "Jaspe Dalmatien" },
    ),
  },
  {
    id: "mock-product-pierre-aventurine-caramel",
    handle: "pierre-aventurine-caramel",
    title: "Pierre Aventurine Caramel",
    description: "Pierre aventurine caramel doux, finition mate granuleuse.",
    descriptionHtml:
      "<p>Perles aventurine teintee caramel-beige, finition mate avec de tres legeres particules brillantes naturelles.</p><p>A associer avec le dore, le creme et le rose poudre pour une creation douce.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "aventurine", "caramel", "beige", "mat", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreAventurineCaramelImage,
    images: [pierreAventurineCaramelImage],
    variants: vracPiecePricingVariants(
      "pierre-aventurine-caramel",
      400,
      { name: "Pierre", value: "Aventurine Caramel" },
    ),
  },
  {
    id: "mock-product-pierre-labradorite-verte-irisee",
    handle: "pierre-labradorite-verte-irisee",
    title: "Pierre Labradorite Verte Irisée",
    description: "Pierre labradorite vert mousse aux reflets dorés irisés.",
    descriptionHtml:
      "<p>Perles labradorite teintee vert mousse, avec des reflets jaune-or naturels visibles sous certaines lumieres (effet labradorescence).</p><p>S'accorde avec l'argent, le dore et le noir pour une creation magique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "labradorite", "vert", "mousse", "irisee", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreLabradoriteVerteIriseeImage,
    images: [pierreLabradoriteVerteIriseeImage],
    variants: vracPiecePricingVariants(
      "pierre-labradorite-verte-irisee",
      400,
      { name: "Pierre", value: "Labradorite Irisée" },
    ),
  },
  {
    id: "mock-product-pierre-calcite-jaune-marbree",
    handle: "pierre-calcite-jaune-marbree",
    title: "Pierre Calcite Jaune Marbrée",
    description: "Pierre calcite jaune marbrée de stries naturelles.",
    descriptionHtml:
      "<p>Perles calcite teinte jaune-miel marbre de blanc et de creme. Aspect doux, lumineux, presque translucide par endroits.</p><p>A associer avec le dore, le creme et l'ambre pour une creation chaude et solaire.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "calcite", "jaune", "miel", "marbre", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreCalciteJauneMarbreeImage,
    images: [pierreCalciteJauneMarbreeImage],
    variants: vracPiecePricingVariants(
      "pierre-calcite-jaune-marbree",
      400,
      { name: "Pierre", value: "Calcite Marbrée" },
    ),
  },
  {
    id: "mock-product-pierre-aventurine-sanguine",
    handle: "pierre-aventurine-sanguine",
    title: "Pierre Aventurine Sanguine",
    description: "Pierre aventurine vert-rouge avec inclusions naturelles.",
    descriptionHtml:
      "<p>Perles aventurine sanguine — pierre vert sombre traversee par des veines rouges naturelles. Chaque perle est unique par ses inclusions.</p><p>S'accorde avec le dore et l'ivoire pour une creation mystique et terreuse.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "aventurine", "sanguine", "vert", "rouge", "unique", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreAventurineSanguineImage,
    images: [pierreAventurineSanguineImage],
    variants: vracPiecePricingVariants(
      "pierre-aventurine-sanguine",
      400,
      { name: "Pierre", value: "Aventurine Sanguine" },
    ),
  },
  {
    id: "mock-product-pierre-jaspe-rouge-breche",
    handle: "pierre-jaspe-rouge-breche",
    title: "Pierre Jaspe Rouge Brèche",
    description: "Pierre jaspe rouge brèche fragmentée naturellement.",
    descriptionHtml:
      "<p>Perles jaspe brèche — variete rouge profond avec des fractures naturelles foncees qui creent un motif eclate. Aspect minéral brut.</p><p>A associer avec le dore et le noir pour une creation organique et forte.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jaspe", "rouge", "breche", "fragmente", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJaspeRougeBrecheImage,
    images: [pierreJaspeRougeBrecheImage],
    variants: vracPiecePricingVariants(
      "pierre-jaspe-rouge-breche",
      400,
      { name: "Pierre", value: "Jaspe Brèche" },
    ),
  },
  {
    id: "mock-product-pierre-bleu-marine-facettee",
    handle: "pierre-bleu-marine-facettee",
    title: "Pierre Bleu Marine Facettée",
    description: "Pierre bleu marine profond taille facettée glitter.",
    descriptionHtml:
      "<p>Perles taillees dans une pierre bleu marine profond, finition pailletee et taille facettee qui demultiplie les reflets.</p><p>S'accorde avec l'argent, le dore et le blanc pour une creation soiree.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "bleu", "marine", "facettee", "glitter", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreBleuMarineFacetteeImage,
    images: [pierreBleuMarineFacetteeImage],
    variants: vracPiecePricingVariants(
      "pierre-bleu-marine-facettee",
      400,
      { name: "Pierre", value: "Bleu Marine Facettée" },
    ),
  },
  {
    id: "mock-product-pierre-jade-vert-anis",
    handle: "pierre-jade-vert-anis",
    title: "Pierre Jade Vert Anis",
    description: "Pierre jade vert anis tachetée, finition mate naturelle.",
    descriptionHtml:
      "<p>Perles jade vert anis avec des taches plus claires et plus foncees naturelles. Finition mate et grain visible.</p><p>A associer avec le dore mat et le bois clair pour une creation botanique.</p>",
    productType: "Pierres semi-precieuses",
    category: "pierres",
    tags: ["pierres", "semi-precieuses", "jade", "vert", "anis", "mat", "naturelle", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: pierreJadeVertAnisImage,
    images: [pierreJadeVertAnisImage],
    variants: vracPiecePricingVariants(
      "pierre-jade-vert-anis",
      400,
      { name: "Pierre", value: "Jade Anis" },
    ),
  },
  {
    id: "mock-product-perle-moutarde-brillante",
    handle: "perle-moutarde-brillante",
    title: "Perle Moutarde Brillante",
    description: "Perle ronde moutarde-ocre saturée, finition brillante.",
    descriptionHtml:
      "<p>Perle ronde dans une teinte moutarde-ocre chaude et saturee, finition brillante. Couleur automnale qui rythme bien les rangs sobres.</p><p>S'accorde avec le caramel, le marron et l'ivoire.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "moutarde", "ocre", "brillante", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleMoutardeBrillanteImage,
    images: [perleMoutardeBrillanteImage],
    variants: vracPiecePricingVariants(
      "perle-moutarde-brillante",
      400,
      { name: "Couleur", value: "Moutarde" },
    ),
  },
  {
    id: "mock-product-perle-nacree-cuivre",
    handle: "perle-nacree-cuivre",
    title: "Perle Nacrée Cuivre",
    description: "Perle nacrée aux reflets cuivre orangé.",
    descriptionHtml:
      "<p>Perle ronde nacree dans des reflets cuivre-orange chauds, finition lustree caracteristique des perles de verre nacrees.</p><p>A associer avec le dore, le marron et le creme pour une creation chic.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "nacree", "cuivre", "orange", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleNacreeCuivreImage,
    images: [perleNacreeCuivreImage],
    variants: vracPiecePricingVariants(
      "perle-nacree-cuivre",
      400,
      { name: "Couleur", value: "Cuivre" },
    ),
  },
  {
    id: "mock-product-perle-cylindre-violet",
    handle: "perle-cylindre-violet",
    title: "Perle Cylindre Violet",
    description: "Perle cylindrique violet vif, résine brillante.",
    descriptionHtml:
      "<p>Perle en forme de cylindre courte, resine violet vif. Forme non spherique qui rythme un rang de perles rondes.</p><p>S'accorde avec l'argent, le rose vif et le blanc nacre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cylindre", "violet", "resine", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCylindreVioletImage,
    images: [perleCylindreVioletImage],
    variants: vracPiecePricingVariants(
      "perle-cylindre-violet",
      400,
      { name: "Couleur", value: "Violet" },
    ),
  },
  {
    id: "mock-product-perle-porcelaine-motif-cerisier",
    handle: "perle-porcelaine-motif-cerisier",
    title: "Perle Porcelaine Motif Cerisier",
    description: "Perle porcelaine blanche peinte à la main, motif fleurs de cerisier.",
    descriptionHtml:
      "<p>Perle ronde en porcelaine blanche peinte a la main avec un motif de fleurs de cerisier japonisant (rose, rouge, brun). Chaque piece est legerement differente.</p><p>A associer avec le dore, le rose poudre et le blanc nacre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "blanc", "motif", "cerisier", "peinte-main", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perlePorcelaineMotifCerisierImage,
    images: [perlePorcelaineMotifCerisierImage],
    variants: vracPiecePricingVariants(
      "perle-porcelaine-motif-cerisier",
      400,
      { name: "Motif", value: "Cerisier" },
    ),
  },
  {
    id: "mock-product-perle-cube-hematite-irisee",
    handle: "perle-cube-hematite-irisee",
    title: "Perle Cube Hématite Irisée",
    description: "Perle cube hématite aux reflets irisés bleu-vert métalliques.",
    descriptionHtml:
      "<p>Perle en forme de cube, finition hematite avec des reflets metalliques irises bleu-vert. Petit format graphique.</p><p>S'accorde avec l'argent, le noir et le blanc.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "hematite", "irisee", "metallique", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeHematiteIriseeImage,
    images: [perleCubeHematiteIriseeImage],
    variants: vracPiecePricingVariants(
      "perle-cube-hematite-irisee",
      400,
      { name: "Forme", value: "Cube hématite" },
    ),
  },
  {
    id: "mock-product-perle-orange-brillante",
    handle: "perle-orange-brillante",
    title: "Perle Orange Brillante",
    description: "Perle ronde orange vif saturée, finition brillante.",
    descriptionHtml:
      "<p>Perle ronde orange vif sature, finition brillante en resine. Couleur energique et chaude.</p><p>S'accorde avec le dore, le rouge brique et le creme.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "orange", "vif", "brillante", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleOrangeBrillanteImage,
    images: [perleOrangeBrillanteImage],
    variants: vracPiecePricingVariants(
      "perle-orange-brillante",
      400,
      { name: "Couleur", value: "Orange vif" },
    ),
  },
  {
    id: "mock-product-perle-cube-verre-vert-blanc",
    handle: "perle-cube-verre-vert-blanc",
    title: "Perle Cube Verre Vert Blanc",
    description: "Perle cube en verre vert-jaune avec rayures blanches verticales.",
    descriptionHtml:
      "<p>Perle cube en verre fondu, fond vert-jaune translucide raye de bandes blanches verticales irregulieres. Effet artisanal.</p><p>S'accorde avec le dore, le blanc nacre et le vert mousse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "verre", "vert", "blanc", "raye", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeVerreVertBlancImage,
    images: [perleCubeVerreVertBlancImage],
    variants: vracPiecePricingVariants(
      "perle-cube-verre-vert-blanc",
      400,
      { name: "Forme", value: "Cube vert" },
    ),
  },
  {
    id: "mock-product-charme-panda-ceramique",
    handle: "charme-panda-ceramique",
    title: "Charme Panda Céramique",
    description: "Charme panda en céramique peinte, bleu pastel.",
    descriptionHtml:
      "<p>Charme en forme de tete de panda en ceramique, fond bleu pastel et yeux/oreilles peints en noir. Element ludique pour un bracelet enfant ou kawaii.</p><p>S'accorde avec le blanc, le rose poudre et l'argent.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "panda", "ceramique", "bleu", "kawaii", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmePandaCeramiqueImage,
    images: [charmePandaCeramiqueImage],
    variants: vracPiecePricingVariants(
      "charme-panda-ceramique",
      400,
      { name: "Style", value: "Panda bleu" },
    ),
  },
  {
    id: "mock-product-perle-cube-onyx-noir",
    handle: "perle-cube-onyx-noir",
    title: "Perle Cube Onyx Noir",
    description: "Perle cube en onyx noir profond, finition brillante.",
    descriptionHtml:
      "<p>Perle en forme de cube, taillee dans l'onyx noir profond, finition brillante. Petit format graphique.</p><p>S'accorde avec l'argent, le dore et le blanc nacre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "onyx", "noir", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeOnyxNoirImage,
    images: [perleCubeOnyxNoirImage],
    variants: vracPiecePricingVariants(
      "perle-cube-onyx-noir",
      400,
      { name: "Forme", value: "Cube onyx" },
    ),
  },
  {
    id: "mock-product-perle-porcelaine-motif-floral-noir",
    handle: "perle-porcelaine-motif-floral-noir",
    title: "Perle Porcelaine Motif Floral Noir",
    description: "Perle porcelaine blanche peinte avec un motif floral noir et gris.",
    descriptionHtml:
      "<p>Perle porcelaine blanc casse peinte a la main avec un motif floral en noir et gris (style chinoiserie). Chaque piece presente un motif unique.</p><p>A associer avec le dore, le noir et le blanc nacre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "porcelaine", "blanc", "motif", "noir", "floral", "peinte-main", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perlePorcelaineMotifFloralNoirImage,
    images: [perlePorcelaineMotifFloralNoirImage],
    variants: vracPiecePricingVariants(
      "perle-porcelaine-motif-floral-noir",
      400,
      { name: "Motif", value: "Floral noir" },
    ),
  },
  {
    id: "mock-product-perle-donut-hematite-noire",
    handle: "perle-donut-hematite-noire",
    title: "Perle Donut Hématite Noire",
    description: "Perle donut/spacer hématite noire brillante.",
    descriptionHtml:
      "<p>Perle en forme de donut (large trou central), finition hematite noire metallique brillante. Utilisee comme intercalaire ou comme accent.</p><p>S'accorde avec l'argent et les pierres claires.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "donut", "hematite", "noir", "intercalaire", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleDonutHematiteNoireImage,
    images: [perleDonutHematiteNoireImage],
    variants: vracPiecePricingVariants(
      "perle-donut-hematite-noire",
      400,
      { name: "Forme", value: "Donut hématite" },
    ),
  },
  {
    id: "mock-product-perle-cube-verre-blanc-vert",
    handle: "perle-cube-verre-blanc-vert",
    title: "Perle Cube Verre Blanc Vert",
    description: "Perle cube verre bicolore blanc-vert, finition brillante.",
    descriptionHtml:
      "<p>Perle cube en verre fondu bicolore : blanc casse sur une moitie, vert vif sur l'autre. Effet dip-dye artisanal.</p><p>S'accorde avec le dore, le vert mousse et le blanc nacre.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cube", "verre", "blanc", "vert", "bicolore", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCubeVerreBlancVertImage,
    images: [perleCubeVerreBlancVertImage],
    variants: vracPiecePricingVariants(
      "perle-cube-verre-blanc-vert",
      400,
      { name: "Forme", value: "Cube bicolore" },
    ),
  },
  {
    id: "mock-product-perle-cabochon-gris",
    handle: "perle-cabochon-gris",
    title: "Perle Cabochon Gris",
    description: "Perle cabochon gris lumineux, finition vitreuse.",
    descriptionHtml:
      "<p>Perle en forme de cabochon (legerement applatie), couleur gris-lumineux a finition tres brillante presque vitreuse.</p><p>A associer avec l'argent, le blanc et les pierres bleues.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cabochon", "gris", "brillante", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCabochonGrisImage,
    images: [perleCabochonGrisImage],
    variants: vracPiecePricingVariants(
      "perle-cabochon-gris",
      400,
      { name: "Forme", value: "Cabochon gris" },
    ),
  },
  {
    id: "mock-product-perle-mat-bleu-marine",
    handle: "perle-mat-bleu-marine",
    title: "Perle Mate Bleu Marine",
    description: "Perle ronde bleu marine, finition mate texturée naturelle.",
    descriptionHtml:
      "<p>Perle ronde bleu marine profond avec une finition mate volontairement texturee, sans polish. Aspect doux et organique.</p><p>S'accorde avec le dore, le creme et le rouge brique pour une creation marine.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "bleu", "marine", "mat", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleMatBleuMarineImage,
    images: [perleMatBleuMarineImage],
    variants: vracPiecePricingVariants(
      "perle-mat-bleu-marine",
      400,
      { name: "Couleur", value: "Bleu marine" },
    ),
  },
  {
    id: "mock-product-perle-verre-orange-translucide",
    handle: "perle-verre-orange-translucide",
    title: "Perle Verre Orange Translucide",
    description: "Perle verre orange ambré translucide, finition brillante.",
    descriptionHtml:
      "<p>Perle ronde en verre ambre-orange translucide, finition brillante qui laisse passer la lumiere. Couleur chaude et lumineuse.</p><p>S'accorde avec le dore, le caramel et le creme.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "verre", "orange", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleVerreOrangeTranslucideImage,
    images: [perleVerreOrangeTranslucideImage],
    variants: vracPiecePricingVariants(
      "perle-verre-orange-translucide",
      400,
      { name: "Couleur", value: "Orange translucide" },
    ),
  },
  {
    id: "mock-product-perle-jaune-pumice",
    handle: "perle-jaune-pumice",
    title: "Perle Jaune Pumice",
    description: "Perle jaune éponge texturée, finition mate poreuse.",
    descriptionHtml:
      "<p>Perle ronde jaune saturé avec une surface ponce/eponge tres texturee. Format leger, aspect organique.</p><p>S'accorde avec le caramel, le dore mat et le blanc casse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "jaune", "pumice", "porous", "mat", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleJaunePumiceImage,
    images: [perleJaunePumiceImage],
    variants: vracPiecePricingVariants(
      "perle-jaune-pumice",
      400,
      { name: "Couleur", value: "Jaune pumice" },
    ),
  },
  {
    id: "mock-product-perle-verre-vert-olive",
    handle: "perle-verre-vert-olive",
    title: "Perle Verre Vert Olive",
    description: "Perle verre vert olive translucide, finition brillante.",
    descriptionHtml:
      "<p>Perle ronde en verre vert olive translucide qui laisse passer la lumiere. Couleur naturelle et douce.</p><p>S'accorde avec le dore, le creme et le marron.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "rondes", "verre", "vert", "olive", "translucide", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleVerreVertOliveImage,
    images: [perleVerreVertOliveImage],
    variants: vracPiecePricingVariants(
      "perle-verre-vert-olive",
      400,
      { name: "Couleur", value: "Vert olive" },
    ),
  },
  {
    id: "mock-product-perle-cylindre-violet-mat",
    handle: "perle-cylindre-violet-mat",
    title: "Perle Cylindre Violet Mat",
    description: "Perle cylindrique violet foncé, finition mate.",
    descriptionHtml:
      "<p>Perle cylindre violet sombre, finition mate. Plus discrete que la version brillante.</p><p>A associer avec l'argent et les pierres violettes pour une creation harmonieuse.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "cylindre", "violet", "mat", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: perleCylindreVioletMatImage,
    images: [perleCylindreVioletMatImage],
    variants: vracPiecePricingVariants(
      "perle-cylindre-violet-mat",
      400,
      { name: "Couleur", value: "Violet mat" },
    ),
  },
  {
    id: "mock-product-charme-dragon-cinnabre",
    handle: "charme-dragon-cinnabre",
    title: "Charme Dragon Cinnabre",
    description: "Charme dragon en cinabre rouge sculpté, motif asiatique.",
    descriptionHtml:
      "<p>Charme cylindrique en cinabre rouge profond sculpte avec un motif asiatique en relief (dragon stylise). Element bijou riche et detaille.</p><p>S'accorde avec le dore, le creme et le noir pour une creation orientale chic.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "charme", "dragon", "cinnabre", "rouge", "sculpte", "oriental", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: charmeDragonCinnabreImage,
    images: [charmeDragonCinnabreImage],
    variants: vracPiecePricingVariants(
      "charme-dragon-cinnabre",
      400,
      { name: "Style", value: "Dragon cinnabre" },
    ),
  },
  {
    id: "mock-product-spacer-argent-rosace",
    handle: "spacer-argent-rosace",
    title: "Spacer Argent Rosace",
    description: "Spacer/intercalaire en métal argenté motif rosace.",
    descriptionHtml:
      "<p>Petit intercalaire en metal argente avec un motif de rosace en relief, format plat type donut. Utilisee entre deux perles pour rythmer un rang.</p><p>S'accorde avec toutes les couleurs.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "spacer", "intercalaire", "argent", "metal", "rosace", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: spacerArgentRosaceImage,
    images: [spacerArgentRosaceImage],
    variants: vracPiecePricingVariants(
      "spacer-argent-rosace",
      400,
      { name: "Forme", value: "Spacer rosace" },
    ),
  },
  {
    id: "mock-product-spacer-bronze-etoile",
    handle: "spacer-bronze-etoile",
    title: "Spacer Bronze Étoile",
    description: "Spacer en métal bronze antique avec motif étoile.",
    descriptionHtml:
      "<p>Petit intercalaire en metal bronze antique avec un motif d'etoile en relief, format plat. Effet vintage et chaud.</p><p>S'accorde avec le dore, le marron et l'ivoire.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "spacer", "intercalaire", "bronze", "metal", "etoile", "vintage", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: spacerBronzeEtoileImage,
    images: [spacerBronzeEtoileImage],
    variants: vracPiecePricingVariants(
      "spacer-bronze-etoile",
      400,
      { name: "Forme", value: "Spacer bronze" },
    ),
  },
  {
    id: "mock-product-spacer-argent-poli",
    handle: "spacer-argent-poli",
    title: "Spacer Argent Poli",
    description: "Spacer en métal argent poli, finition brillante lisse.",
    descriptionHtml:
      "<p>Petit intercalaire en metal argent poli brillant, finition lisse. Pour des creations minimalistes et chic.</p><p>Polyvalent, s'accorde avec toutes les pierres.</p>",
    productType: "Perles",
    category: "perles",
    tags: ["perles", "spacer", "intercalaire", "argent", "poli", "brillant", "nouveaute"],
    badges: ["Nouveaute"],
    availableForSale: true,
    totalInventory: 400,
    price: money("1.20"),
    compareAtPrice: null,
    featuredImage: spacerArgentPoliImage,
    images: [spacerArgentPoliImage],
    variants: vracPiecePricingVariants(
      "spacer-argent-poli",
      400,
      { name: "Forme", value: "Spacer argent" },
    ),
  },
];
