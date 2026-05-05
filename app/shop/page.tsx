import { ShopLanding } from "@/components/shop/shop-page-sections";
import { getShopProducts } from "@/lib/shopify/client";
import { shopCategories, type ShopProductType } from "@/lib/shopify/types";

type ShopPageProps = {
  searchParams: Promise<{
    type?: string;
    q?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const activeType = parseProductType(params.type);
  const result = await getShopProducts({ type: activeType, query: params.q });

  return <ShopLanding activeType={activeType} result={result} />;
}

function parseProductType(type?: string): ShopProductType | undefined {
  if (!type) {
    return undefined;
  }

  return shopCategories.some((category) => category.key === type) ? (type as ShopProductType) : undefined;
}
