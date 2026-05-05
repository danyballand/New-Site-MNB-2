"use client";

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
      image: product.featuredImage,
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
          <p>{isPieceChoice ? "Nombre de pieces" : "Variante"}</p>
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
