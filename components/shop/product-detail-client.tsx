"use client";

import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/shop/product-grid";
import { ProductPurchasePanel } from "@/components/shop/product-purchase-panel";
import { ProductGalleryLightbox } from "@/components/shop/ProductGalleryLightbox";
import { SourceBanner } from "@/components/shop/source-banner";
import type { ShopDataResult, ShopImage, ShopProduct, ShopProductVariant } from "@/lib/shopify/types";
import { getCategoryLabel } from "@/lib/shopify/utils";

export function ProductDetailClient({
  result,
  relatedProducts,
}: {
  result: ShopDataResult<ShopProduct | null>;
  relatedProducts: ShopProduct[];
}) {
  const product = result.data;
  const initialVariantId = product
    ? (product.variants.find((variant) => variant.availableForSale) ?? product.variants[0])?.id ?? ""
    : "";
  const [selectedVariantId, setSelectedVariantId] = useState(initialVariantId);

  const selectedVariant = useMemo(() => {
    if (!product) return null;
    return product.variants.find((variant) => variant.id === selectedVariantId) ?? product.variants[0] ?? null;
  }, [product, selectedVariantId]);

  const media = useMemo(() => {
    if (!product) {
      return { images: [], models: [] };
    }

    return getProductMediaForVariant(product, selectedVariant);
  }, [product, selectedVariant]);

  if (!product) {
    return null;
  }

  return (
    <main className="mnb-shop-main">
      <SourceBanner result={result} />
      <Link className="mnb-back-link" href="/shop">
        <ArrowLeft size={15} />
        Boutique
      </Link>

      <section className="mnb-product-detail">
        <ProductGalleryLightbox
          key={`${selectedVariant?.id ?? product.id}-${media.images.map((image) => image.url).join("|")}`}
          images={media.images}
          models={media.models}
        />
        <div className="mnb-product-info">
          <div className="mnb-product-eyebrow">
            <span>{getCategoryLabel(product.category)}</span>
            {product.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <h1>{product.title}</h1>
          <p className="mnb-product-lead">{product.description}</p>
          <ProductPurchasePanel
            product={product}
            selectedVariantId={selectedVariantId}
            onSelectedVariantChange={setSelectedVariantId}
          />
          <div className="mnb-product-story">
            <p className="mnb-kicker">Details atelier</p>
            <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            <ul>
              <li>
                <Check size={15} />
                Piece seule preparee dans l&apos;esprit de l&apos;atelier My Nice Bracelet.
              </li>
              <li>
                <Sparkles size={15} />
                Produit vendu en piece seule, avec choix du nombre de pieces.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mnb-shop-section">
        <div className="mnb-section-head">
          <div>
            <p className="mnb-kicker">A associer</p>
            <h2>Autres pieces de la meme famille</h2>
          </div>
        </div>
        <ProductGrid products={relatedProducts} />
      </section>
    </main>
  );
}

function getProductMediaForVariant(product: ShopProduct, selectedVariant: ShopProductVariant | null) {
  const hasVisualVariants = product.variants.some((variant) => variant.image?.url || variant.images?.length);

  if (hasVisualVariants && selectedVariant) {
    const images = getVariantImages(product, selectedVariant);
    return {
      images,
      models: selectedVariant.models ?? [],
    };
  }

  return {
    images: product.images.length > 0 ? product.images : [product.featuredImage],
    models: product.models ?? [],
  };
}

function getVariantImages(product: ShopProduct, selectedVariant: ShopProductVariant) {
  if (selectedVariant.images?.length) {
    return selectedVariant.images;
  }

  const images: ShopImage[] = [];

  if (selectedVariant.image) {
    images.push(withImageLabel(selectedVariant.image, "Produit"));
  }

  const collectionImage = product.featuredImage;
  if (collectionImage && collectionImage.url !== selectedVariant.image?.url) {
    images.push(withImageLabel(collectionImage, "Collection"));
  }

  return images.length > 0 ? images : product.images;
}

function withImageLabel(image: ShopImage, label: ShopImage["label"]) {
  return {
    ...image,
    label: image.label ?? label,
  };
}
