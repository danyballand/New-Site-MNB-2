"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ShopProduct } from "@/lib/shopify/types";
import { formatMoney, getCategoryLabel } from "@/lib/shopify/utils";
import { useShopCart } from "@/components/shop/shop-provider";

export function ProductCard({ product }: { product: ShopProduct }) {
  const { addItem } = useShopCart();
  const router = useRouter();
  const variant = product.variants.find((item) => item.availableForSale) ?? product.variants[0];
  const isAvailable = Boolean(product.availableForSale && variant?.availableForSale);
  const isProductAsset = product.featuredImage.url.startsWith("/shop/products/");
  const requiresPieceChoice = product.variants.some((item) =>
    item.selectedOptions.some((option) => option.name.toLowerCase().includes("nombre de pieces")),
  );
  // Products that surface a visual variant picker (e.g. character
  // series with per-variant images) must be opened on the detail
  // page so the user actually picks — adding the first variant
  // directly would be hostile UX ("you bought Hello Kitty by accident").
  const hasVisualVariantChoice = product.variants.some((item) => item.image?.url);
  const requiresChoice = requiresPieceChoice || hasVisualVariantChoice;

  function addToCart() {
    if (requiresChoice) {
      router.push(`/shop/produit/${product.handle}`);
      return;
    }

    if (!variant || !isAvailable) {
      return;
    }

    addItem({
      merchandiseId: variant.id,
      productHandle: product.handle,
      productTitle: product.title,
      variantTitle: variant.title,
      image: product.featuredImage,
      price: variant.price,
      quantity: 1,
    });
  }

  return (
    <article className="mnb-product-card">
      <Link className="mnb-product-image-link" href={`/shop/produit/${product.handle}`}>
        <Image
          className={isProductAsset ? "is-product-asset" : undefined}
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
          fill
          sizes="(max-width: 680px) 50vw, (max-width: 980px) 33vw, 25vw"
          unoptimized={product.featuredImage.url.endsWith(".jpeg")}
        />
        <span>{getCategoryLabel(product.category)}</span>
      </Link>
      <div className="mnb-product-card-body">
        <div className="mnb-product-badges">
          {product.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
          {!isAvailable ? <span>Epuisé</span> : null}
        </div>
        <Link href={`/shop/produit/${product.handle}`}>
          <h3>{product.title}</h3>
        </Link>
        <p>{product.description}</p>
        <div className="mnb-product-card-bottom">
          <strong>
            {requiresChoice ? "A partir de " : ""}
            {formatMoney(product.price)}
          </strong>
          <button
            aria-label={
              requiresPieceChoice
                ? `Choisir le nombre de pieces pour ${product.title}`
                : hasVisualVariantChoice
                  ? `Choisir un personnage pour ${product.title}`
                  : `Ajouter ${product.title} au panier`
            }
            className="mnb-icon-button"
            disabled={!isAvailable}
            onClick={addToCart}
            type="button"
          >
            {requiresChoice ? <ArrowRight size={16} /> : <ShoppingBag size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
}
