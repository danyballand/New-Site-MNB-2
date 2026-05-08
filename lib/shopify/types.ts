export const SHOPIFY_API_VERSION = "2026-04";

/**
 * Catégories surfacées dans la navigation `/shop`. Quatre buckets
 * volontairement disjoints :
 *
 *   - perles                       → tout ce qui s'enfile dans un
 *     bracelet (rondes, cubes, fleurs, étoiles, cœurs, animaux
 *     résine — toutes percées pour passer au fil)
 *   - pierres semi-précieuses      → pierres naturelles
 *   - porte-cles                   → produits finis avec sangle +
 *     mousqueton (Sanrio licensed)
 *   - figurines                    → figurines collection autonomes
 *     (Mini-Doll Hello Kitty…) — 3D, ni bracelet ni keychain
 *
 * Note historique : ce qui était listé en "charmes" dans une version
 * précédente (cœurs, étoiles, fleurs, animaux résine) a été basculé
 * en "perles" — ces pièces sont fonctionnellement des perles non
 * rondes, percées pour s'enfiler. Le mot "charme" était un faux ami.
 */
export const shopCategories = [
  {
    key: "perles",
    label: "Perles",
    href: "/shop/perles",
    description: "Perles à enfiler — rondes, cubes, fleurs, étoiles, cœurs, animaux. Vendues en lots dégressifs.",
  },
  {
    key: "pierres",
    label: "Pierres naturelles",
    href: "/shop/pierres-semi-precieuses",
    description: "Pierres naturelles et semi-precieuses selectionnees pour des harmonies douces.",
  },
  {
    key: "porte-cles",
    label: "Porte-cles Sanrio",
    href: "/shop/porte-cles",
    description: "Porte-cles licensed Sanrio (Hello Kitty, Kuromi…) avec sangle + anneau.",
  },
  {
    key: "figurines",
    label: "Figurines",
    href: "/shop/figurines",
    description: "Figurines collection autonomes — Mini-Doll Hello Kitty, mascottes décoratives.",
  },
] as const;

export type ShopProductType = (typeof shopCategories)[number]["key"] | "packs" | "recharges" | "drops";

export type ShopBadge =
  | "Nouveaute"
  | "Edition limitee"
  | "Best-seller"
  | "Selection atelier"
  | "Facile a composer"
  | "Petit stock";

export type ShopMoney = {
  amount: string;
  currencyCode: string;
};

export type ShopImage = {
  url: string;
  altText: string;
  width?: number;
  height?: number;
  label?: "Produit" | "Detail" | "Echelle" | "Collection" | "Packshot" | string;
};

export type ShopProductModel = {
  src: string;
  label: string;
  alt?: string;
};

export type ShopSelectedOption = {
  name: string;
  value: string;
};

export type ShopProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: ShopMoney;
  compareAtPrice?: ShopMoney | null;
  selectedOptions: ShopSelectedOption[];
  /** Optional per-variant image — used when the product surfaces a
   *  visual variant picker (e.g. choose your character from a series).
   *  When undefined, the product's `featuredImage` is used everywhere. */
  image?: ShopImage;
  images?: ShopImage[];
  models?: ShopProductModel[];
};

export type ShopProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  category: ShopProductType;
  tags: string[];
  badges: ShopBadge[];
  availableForSale: boolean;
  totalInventory: number | null;
  price: ShopMoney;
  compareAtPrice?: ShopMoney | null;
  featuredImage: ShopImage;
  images: ShopImage[];
  models?: ShopProductModel[];
  variants: ShopProductVariant[];
};

export type ShopDataSource = "shopify" | "mock";

export type ShopDataResult<T> = {
  data: T;
  source: ShopDataSource;
  configured: boolean;
  error?: string;
};

export type ShopifyCartLineInput = {
  merchandiseId: string;
  quantity: number;
};
