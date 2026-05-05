import { shopCategories, type ShopMoney, type ShopProduct, type ShopProductType } from "@/lib/shopify/types";

export function formatMoney(money: ShopMoney) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: money.currencyCode,
  }).format(Number(money.amount));
}

export function getCategoryLabel(type: ShopProductType) {
  return shopCategories.find((category) => category.key === type)?.label ?? "Selection";
}

export function filterProducts(
  products: ShopProduct[],
  filters: { type?: ShopProductType; query?: string } = {},
) {
  const q = filters.query?.trim().toLowerCase();

  return products.filter((product) => {
    const matchesType = filters.type ? product.category === filters.type : true;
    const matchesQuery = q
      ? [product.title, product.description, product.productType, product.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(q)
      : true;

    return matchesType && matchesQuery;
  });
}
