import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/shop/product-detail";
import { getShopProduct, getShopProducts } from "@/lib/shopify/client";

type ProductPageProps = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const result = await getShopProduct(handle);
  const product = result.data;

  if (!product) {
    return {
      title: "Produit introuvable | My Nice Bracelet",
    };
  }

  return {
    title: `${product.title} | My Nice Bracelet`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const result = await getShopProduct(handle);
  const product = result.data;

  if (!product) {
    notFound();
  }

  const relatedResult = await getShopProducts({ type: product.category });
  const relatedProducts = relatedResult.data.filter((item) => item.handle !== product.handle).slice(0, 4);

  return <ProductDetail relatedProducts={relatedProducts} result={result} />;
}
