import type { ShopBadge, ShopProduct } from "@/lib/shopify/types";

/**
 * Filter & sort primitives for the shop grid.
 *
 * Pures fonctions, sans état. Le composant client
 * (`ShopFilterableGrid`) gère l'état avec useState et délègue ici la
 * logique pour pouvoir tester / réutiliser ailleurs si besoin.
 *
 * Approche couleur / forme / matière : on n'a pas de champs dédiés
 * sur `ShopProduct`, donc on déduit depuis `tags`. Chaque groupe
 * (rose, vert, fleur, verre…) liste des `keywords` ; un produit
 * "match" si AU MOINS UN de ses tags contient AU MOINS UN keyword.
 * Cette approche tolère les variations ("rose-pale", "rose-pailletee",
 * "bleu-ciel" → tous comptent comme "rose" / "bleu").
 */

export type SortKey =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "newest";

export const SORT_OPTIONS: Array<{ key: SortKey; label: string }> = [
  { key: "relevance", label: "Pertinence" },
  { key: "price-asc", label: "Prix croissant" },
  { key: "price-desc", label: "Prix décroissant" },
  { key: "name-asc", label: "Nom (A → Z)" },
  { key: "name-desc", label: "Nom (Z → A)" },
  { key: "newest", label: "Nouveautés" },
];

// Groupes couleur — `hex` est un proxy visuel pour la pastille UI,
// pas la couleur exacte du produit. `keywords` lookup sur les tags
// du produit (substring match, case-insensitive).
export const COLOR_GROUPS = [
  { key: "rose", label: "Rose", hex: "#FFB6C1", keywords: ["rose"] },
  { key: "rouge", label: "Rouge", hex: "#E08585", keywords: ["rouge", "framboise"] },
  { key: "orange", label: "Orange", hex: "#F5A878", keywords: ["orange", "peche", "caramel", "terra", "brique"] },
  { key: "jaune", label: "Jaune", hex: "#F5E68C", keywords: ["jaune"] },
  { key: "vert", label: "Vert", hex: "#B4D7B4", keywords: ["vert", "menthe", "anis"] },
  { key: "bleu", label: "Bleu", hex: "#A4C8E1", keywords: ["bleu", "marine", "turquoise", "cyan"] },
  { key: "violet", label: "Violet", hex: "#C5A8D8", keywords: ["violet", "magenta", "lavande"] },
  { key: "marron", label: "Marron", hex: "#A07050", keywords: ["marron", "brun", "bronze", "chocolat"] },
  { key: "noir", label: "Noir", hex: "#3A3A3A", keywords: ["noir"] },
  { key: "blanc", label: "Blanc", hex: "#F5F0E8", keywords: ["blanc", "ivoire"] },
  { key: "gris", label: "Gris", hex: "#B8B8B8", keywords: ["gris", "argent"] },
] as const;

export const SHAPE_OPTIONS = [
  { key: "ronde", label: "Ronde", keywords: ["rondes", "ronde"] },
  { key: "cube", label: "Cube", keywords: ["cube"] },
  { key: "cristal", label: "Cristal", keywords: ["cristal"] },
  { key: "fleur", label: "Fleur", keywords: ["fleur"] },
  { key: "coeur", label: "Cœur", keywords: ["coeur"] },
  { key: "etoile", label: "Étoile", keywords: ["etoile"] },
] as const;

export const MATERIAL_OPTIONS = [
  { key: "verre", label: "Verre", keywords: ["verre"] },
  { key: "nacree", label: "Nacrée", keywords: ["nacree", "nacre"] },
  { key: "porcelaine", label: "Porcelaine", keywords: ["porcelaine"] },
  { key: "ceramique", label: "Céramique", keywords: ["ceramique"] },
  { key: "resine", label: "Résine", keywords: ["resine"] },
  { key: "pierre", label: "Pierre naturelle", keywords: ["naturelle", "pierre"] },
] as const;

function productHasAnyKeyword(product: ShopProduct, keywords: readonly string[]): boolean {
  const lowerTags = product.tags.map((t) => t.toLowerCase());
  return keywords.some((kw) => lowerTags.some((t) => t.includes(kw)));
}

export type ShopFiltersState = {
  priceMax: number;
  badges: ShopBadge[];
  colors: string[];
  shapes: string[];
  materials: string[];
};

export function applyFilters(products: ShopProduct[], filters: ShopFiltersState): ShopProduct[] {
  return products.filter((product) => {
    // Prix (max uniquement — le min est implicite à 0)
    if (Number(product.price.amount) > filters.priceMax) return false;
    // Badges : produit doit avoir AU MOINS UN des badges sélectionnés
    if (filters.badges.length > 0 && !filters.badges.some((b) => product.badges.includes(b))) {
      return false;
    }
    if (filters.colors.length > 0) {
      const kw = filters.colors.flatMap(
        (k) => COLOR_GROUPS.find((c) => c.key === k)?.keywords ?? [],
      );
      if (!productHasAnyKeyword(product, kw)) return false;
    }
    if (filters.shapes.length > 0) {
      const kw = filters.shapes.flatMap(
        (k) => SHAPE_OPTIONS.find((s) => s.key === k)?.keywords ?? [],
      );
      if (!productHasAnyKeyword(product, kw)) return false;
    }
    if (filters.materials.length > 0) {
      const kw = filters.materials.flatMap(
        (k) => MATERIAL_OPTIONS.find((m) => m.key === k)?.keywords ?? [],
      );
      if (!productHasAnyKeyword(product, kw)) return false;
    }
    return true;
  });
}

export function applySort(products: ShopProduct[], sort: SortKey): ShopProduct[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      sorted.sort((a, b) => Number(a.price.amount) - Number(b.price.amount));
      break;
    case "price-desc":
      sorted.sort((a, b) => Number(b.price.amount) - Number(a.price.amount));
      break;
    case "name-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title, "fr"));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title, "fr"));
      break;
    case "newest":
      // Nouveautés en premier, le reste en ordre original
      sorted.sort((a, b) => {
        const aNew = a.badges.includes("Nouveaute") ? 1 : 0;
        const bNew = b.badges.includes("Nouveaute") ? 1 : 0;
        return bNew - aNew;
      });
      break;
    // "relevance" : pas de réordonnancement (ordre du catalogue manuel)
  }
  return sorted;
}

/** Max price across a product list — utile pour bornes du slider. */
export function maxPrice(products: ShopProduct[]): number {
  return products.reduce((acc, p) => Math.max(acc, Number(p.price.amount)), 0);
}
