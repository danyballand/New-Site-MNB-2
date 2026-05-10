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

const pieceChoiceVariantsFromUnitPrice = (
  baseId: string,
  unitPrice: number,
  stock: number,
  option?: PieceChoiceVariant["option"],
) =>
  pieceChoiceVariants(
    baseId,
    [
      { pieces: 1, multiplier: 1 },
      { pieces: 5, multiplier: 1 },
      { pieces: 10, multiplier: 1 },
      { pieces: 50, multiplier: 1 },
      { pieces: 100, multiplier: 0.9 },
      { pieces: 250, multiplier: 0.82 },
      { pieces: 500, multiplier: 0.75 },
    ].map(({ pieces, multiplier }) => ({
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
    productType: "Figurines",
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
    category: "figurines",
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
];
