export const SHOPIFY_API_VERSION = "2026-04";

export const shopCategories = [
  {
    key: "perles",
    label: "Perles & figurines",
    href: "/shop/perles",
    description: "Perles en mini-lots pour completer une creation My Nice Bracelet sans effet mercerie.",
  },
  {
    key: "pierres",
    label: "Pierres naturelles",
    href: "/shop/pierres-semi-precieuses",
    description: "Pierres naturelles et semi-precieuses selectionnees pour des harmonies douces.",
  },
  {
    key: "figurines",
    label: "Figurines kawaii",
    href: "/shop/figurines-kawaii",
    description: "Figurines kawaii premium pour signer un bijou, une attache ou un porte-cle.",
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
