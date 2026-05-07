"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import type { ShopProduct } from "@/lib/shopify/types";
import { formatMoney } from "@/lib/shopify/utils";
import { useShopCart } from "@/components/shop/shop-provider";

export function ProductPurchasePanel({ product }: { product: ShopProduct }) {
  const { addItem } = useShopCart();
  const firstAvailableVariant = product.variants.find((variant) => variant.availableForSale) ?? product.variants[0];
  const [variantId, setVariantId] = useState(firstAvailableVariant?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === variantId) ?? firstAvailableVariant,
    [firstAvailableVariant, product.variants, variantId],
  );
  const isPieceChoice = product.variants.some((variant) =>
    variant.selectedOptions.some((option) => option.name.toLowerCase().includes("nombre de pieces")),
  );
  // Visual variant picker kicks in as soon as ANY variant carries its
  // own image (e.g. character series like YuMe Hello Kitty). Falls
  // back to the text-button list for piece-choice / generic variants.
  const hasVariantImages = product.variants.some((variant) => variant.image?.url);
  const selectedPieceOption = selectedVariant?.selectedOptions.find((option) =>
    option.name.toLowerCase().includes("nombre de pieces"),
  );
  const selectedPieceCount = selectedPieceOption ? Number.parseInt(selectedPieceOption.value, 10) : null;
  const hasVolumeDiscount = Boolean(selectedPieceCount && selectedPieceCount >= 100);
  const selectedUnitPrice =
    selectedVariant && selectedPieceCount ? Number.parseFloat(selectedVariant.price.amount) / selectedPieceCount : null;
  const selectedUnitPriceLabel =
    selectedUnitPrice && Number.isFinite(selectedUnitPrice)
      ? new Intl.NumberFormat("fr-FR", { style: "currency", currency: selectedVariant?.price.currencyCode ?? "EUR" }).format(
          selectedUnitPrice,
        )
      : null;
  const isAvailable = Boolean(product.availableForSale && selectedVariant?.availableForSale);
  const stockLabel =
    selectedVariant?.quantityAvailable === null || selectedVariant?.quantityAvailable === undefined
      ? isAvailable
        ? "En stock"
        : "Epuisé"
      : selectedVariant.quantityAvailable > 8
        ? "En stock"
        : `${selectedVariant.quantityAvailable} restant${selectedVariant.quantityAvailable > 1 ? "s" : ""}`;

  function addToCart() {
    if (!selectedVariant || !isAvailable) {
      return;
    }

    addItem({
      merchandiseId: selectedVariant.id,
      productHandle: product.handle,
      productTitle: product.title,
      variantTitle: selectedVariant.title,
      // Per-variant image takes precedence over the product-level
      // featured image — when the user picked "Hello Kitty" the cart
      // line should show Hello Kitty, not the collection thumbnail.
      image: selectedVariant.image ?? product.featuredImage,
      price: selectedVariant.price,
      quantity,
    });
  }

  return (
    <div className="mnb-purchase-panel">
      <div className="mnb-price-row">
        <strong>{selectedVariant ? formatMoney(selectedVariant.price) : formatMoney(product.price)}</strong>
        <span className={isAvailable ? "is-available" : "is-sold-out"}>{stockLabel}</span>
      </div>

      {product.variants.length > 1 ? (
        <div className="mnb-variant-group">
          <p>
            {hasVariantImages
              ? `Choisissez votre ${product.variants[0]?.selectedOptions[0]?.name?.toLowerCase() ?? "variante"}`
              : isPieceChoice
                ? "Nombre de pieces"
                : "Variante"}
          </p>
          {hasVariantImages ? (
            // Visual variant picker : grid of thumbnails with the
            // currently-selected one ringed. Used when each variant
            // carries an `image` (e.g. character series).
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-3">
              {product.variants.map((variant) => {
                const selected = variant.id === variantId;
                const optionLabel = variant.selectedOptions[0]?.value ?? variant.title;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setVariantId(variant.id)}
                    disabled={!variant.availableForSale}
                    aria-pressed={selected}
                    className={[
                      "group relative flex flex-col items-center gap-1.5 p-2 rounded-2xl border transition-all",
                      "disabled:opacity-40 disabled:cursor-not-allowed",
                      selected
                        ? "border-[#3D5A73] bg-white shadow-md"
                        : "border-[rgba(45,55,72,0.10)] bg-[#FBF8F2] hover:border-[#A8BED4] hover:bg-white",
                    ].join(" ")}
                  >
                    {/* Square thumbnail with object-contain. Source
                        photos are now uniformly framed (Mini-Doll
                        photos pre-cropped via scripts/normalize_minidoll.py,
                        keychain photos are already consistent because
                        the strap+figurine layout is fixed). object-cover
                        is unnecessary — each photo's subject sits at
                        the same proportion of the frame, so contain
                        keeps the full content visible without size
                        discrepancy across variants. */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                      {variant.image ? (
                        <Image
                          src={variant.image.url}
                          alt={variant.image.altText}
                          fill
                          sizes="(max-width: 640px) 30vw, 120px"
                          className="object-contain p-2"
                          // `unoptimized` bypasse le pipeline de
                          // /_next/image (resize + WebP + cache).
                          // Sur de petites vignettes (~120px) le
                          // bénéfice perf est négligeable, et ça
                          // élimine le risque de cache stale après
                          // un re-traitement des photos sources.
                          unoptimized
                        />
                      ) : null}
                    </div>
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-tight text-[#2D3748] text-center leading-tight">
                      {optionLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div>
              {product.variants.map((variant) => (
                <button
                  className={variant.id === variantId ? "is-selected" : ""}
                  disabled={!variant.availableForSale}
                  key={variant.id}
                  onClick={() => setVariantId(variant.id)}
                  type="button"
                >
                  {variant.title}
                </button>
              ))}
            </div>
          )}
          {isPieceChoice && selectedPieceOption ? (
            <span className="mnb-piece-helper">
              Vous recevrez {selectedPieceOption.value.toLowerCase()} dans cette selection.
              {selectedUnitPriceLabel ? ` Soit ${selectedUnitPriceLabel} / piece.` : ""}
              {hasVolumeDiscount ? " Prix degressif applique." : " Reduction automatique a partir de 100 pieces."}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="mnb-purchase-actions">
        <div className="mnb-purchase-quantity">
          <p>{isPieceChoice ? "Nombre de selections" : "Quantite"}</p>
          <div className="mnb-quantity-stepper">
            <button
              aria-label="Diminuer la quantite"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              type="button"
            >
              <Minus size={15} />
            </button>
            <span>{quantity}</span>
            <button aria-label="Augmenter la quantite" onClick={() => setQuantity(quantity + 1)} type="button">
              <Plus size={15} />
            </button>
          </div>
        </div>
        <button className="mnb-button mnb-button-primary" disabled={!isAvailable} onClick={addToCart} type="button">
          <ShoppingBag size={16} />
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
