import { ProductDetailClient } from "@/components/shop/product-detail-client";
import type { ShopDataResult, ShopProduct } from "@/lib/shopify/types";

export function ProductDetail({
  result,
  relatedProducts,
}: {
  result: ShopDataResult<ShopProduct | null>;
  relatedProducts: ShopProduct[];
}) {
  return <ProductDetailClient result={result} relatedProducts={relatedProducts} />;
}
