import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/shop/product-grid";
import { ProductPurchasePanel } from "@/components/shop/product-purchase-panel";
import { SourceBanner } from "@/components/shop/source-banner";
import type { ShopDataResult, ShopProduct } from "@/lib/shopify/types";
import { getCategoryLabel } from "@/lib/shopify/utils";

export function ProductDetail({
  result,
  relatedProducts,
}: {
  result: ShopDataResult<ShopProduct | null>;
  relatedProducts: ShopProduct[];
}) {
  const product = result.data;

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
        <div className="mnb-product-gallery">
          {product.images.map((image, index) => (
            <Image
              className={[
                index === 0 ? "is-featured" : "",
                image.url.startsWith("/shop/products/") ? "is-product-asset" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              src={image.url}
              alt={image.altText}
              width={image.width ?? 1200}
              height={image.height ?? 1500}
              priority={index === 0}
              sizes={index === 0 ? "(max-width: 980px) 100vw, 58vw" : "(max-width: 980px) 50vw, 28vw"}
              key={`${image.url}-${index}`}
            />
          ))}
        </div>
        <div className="mnb-product-info">
          <div className="mnb-product-eyebrow">
            <span>{getCategoryLabel(product.category)}</span>
            {product.badges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <h1>{product.title}</h1>
          <p className="mnb-product-lead">{product.description}</p>
          <ProductPurchasePanel product={product} />
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
