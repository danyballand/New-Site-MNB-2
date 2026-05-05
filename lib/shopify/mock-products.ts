import type { ShopProduct } from "@/lib/shopify/types";

const money = (amount: string) => ({ amount, currencyCode: "EUR" });

const productAsset = (file: string, altText: string) => ({
  url: `/shop/products/${file}`,
  altText,
  width: 2048,
  height: 2048,
});

const angeArgentImage = productAsset("mnb_ange_argent_v1_2048.png", "Piece ange argent My Nice Bracelet");
const coeurBlancNacreImage = productAsset(
  "mnb_coeur_blanc_nacre_v1_2048.png",
  "Piece coeur blanc nacre My Nice Bracelet",
);
const coeurJauneIrisImage = productAsset(
  "mnb_coeur_jaune_iris_motif_coeur_v1_2048.png",
  "Piece coeur jaune iris motif coeur My Nice Bracelet",
);
const etoileBleuTransparentImage = productAsset(
  "mnb_etoile_bleu_transparent_v1_2048.png",
  "Piece etoile bleu transparent My Nice Bracelet",
);
const fleurBlancIrisImage = productAsset("mnb_fleur_blanc_iris_v1_2048.png", "Piece fleur blanc iris My Nice Bracelet");
const lapinTransparentIrisImage = productAsset(
  "mnb_lapin_transparent_iris_v1_2048.png",
  "Piece lapin transparent iris My Nice Bracelet",
);
const oursonVertMentheImage = productAsset(
  "mnb_ourson_vert_menthe_transparent_v1_2048.png",
  "Piece ourson vert menthe transparent My Nice Bracelet",
);
const papillonVertIrisImage = productAsset(
  "mnb_papillon_vert_iris_v1_2048.png",
  "Piece papillon vert iris My Nice Bracelet",
);
const papillonVertPastelImage = productAsset(
  "mnb_papillon_vert_pastel_v1_2048.png",
  "Piece papillon vert pastel My Nice Bracelet",
);
const perleCubeTransparentVertImage = productAsset(
  "mnb_perle_cube_transparent_vert_v1_2048.png",
  "Perle cube transparent vert My Nice Bracelet",
);
const perleCubeVertAnisImage = productAsset(
  "mnb_perle_cube_vert_anis_facette_v1_2048.png",
  "Perle cube vert anis facette My Nice Bracelet",
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
];
