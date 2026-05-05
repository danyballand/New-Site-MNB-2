"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Loader2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useState } from "react";
import { formatMoney } from "@/lib/shopify/utils";
import { useShopCart } from "@/components/shop/shop-provider";

type CheckoutResponse = {
  checkoutUrl?: string;
  error?: string;
};

export function CartDrawer() {
  const { items, isOpen, setOpen, updateQuantity, removeItem, subtotal, totalQuantity, clearCart } = useShopCart();
  const [isCheckingOut, setCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const freeShippingThreshold = 49;
  const subtotalValue = Number(subtotal.amount);
  const shippingProgress = Math.min(100, (subtotalValue / freeShippingThreshold) * 100);
  const remainingForShipping = Math.max(0, freeShippingThreshold - subtotalValue);

  async function checkout() {
    if (items.length === 0) {
      return;
    }

    setCheckingOut(true);
    setCheckoutError(null);

    try {
      const response = await fetch("/api/shopify/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lines: items.map((item) => ({
            merchandiseId: item.merchandiseId,
            quantity: item.quantity,
          })),
        }),
      });
      const payload = (await response.json()) as CheckoutResponse;

      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? "Paiement indisponible pour le moment.");
      }

      clearCart();
      window.location.href = payload.checkoutUrl;
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "Paiement indisponible pour le moment.");
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <>
      <button
        aria-label="Ouvrir le panier"
        className="mnb-cart-fab"
        onClick={() => setOpen(true)}
        type="button"
      >
        <ShoppingBag size={18} />
        <span>{totalQuantity}</span>
      </button>
      <div className={`mnb-cart-overlay ${isOpen ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside aria-hidden={!isOpen} className={`mnb-cart-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="mnb-cart-head">
          <div>
            <p className="mnb-kicker">Panier boutique</p>
            <h2>{totalQuantity} article{totalQuantity > 1 ? "s" : ""}</h2>
          </div>
          <button aria-label="Fermer le panier" className="mnb-icon-button" onClick={() => setOpen(false)} type="button">
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mnb-cart-empty">
            <ShoppingBag size={28} />
            <h3>Le panier attend sa premiere piece.</h3>
            <p>Perles, pierres ou figurines: choisissez vos pieces et leurs quantites.</p>
            <Link className="mnb-button mnb-button-primary" href="/shop" onClick={() => setOpen(false)}>
              Voir la boutique
            </Link>
          </div>
        ) : (
          <>
            <div className="mnb-cart-lines">
              {items.map((item) => (
                <div className="mnb-cart-line" key={item.merchandiseId}>
                  <Image src={item.image.url} alt={item.image.altText} width={82} height={82} />
                  <div>
                    <Link href={`/shop/produit/${item.productHandle}`} onClick={() => setOpen(false)}>
                      {item.productTitle}
                    </Link>
                    <p>{item.variantTitle}</p>
                    <strong>{formatMoney(item.price)}</strong>
                    <div className="mnb-quantity-row">
                      <button
                        aria-label="Diminuer la quantite"
                        onClick={() => updateQuantity(item.merchandiseId, item.quantity - 1)}
                        type="button"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label="Augmenter la quantite"
                        onClick={() => updateQuantity(item.merchandiseId, item.quantity + 1)}
                        type="button"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        aria-label="Retirer du panier"
                        className="mnb-trash-button"
                        onClick={() => removeItem(item.merchandiseId)}
                        type="button"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mnb-cart-footer">
              {checkoutError ? <p className="mnb-form-error">{checkoutError}</p> : null}
              <div className="mnb-shipping-meter">
                <div>
                  <span style={{ width: `${shippingProgress}%` }} />
                </div>
                <p>
                  {remainingForShipping > 0
                    ? `Plus que ${formatMoney({ amount: remainingForShipping.toFixed(2), currencyCode: subtotal.currencyCode })} pour la livraison offerte.`
                    : "Livraison offerte debloquee."}
                </p>
              </div>
              <div className="mnb-cart-total">
                <span>Sous-total</span>
                <strong>{formatMoney(subtotal)}</strong>
              </div>
              <button className="mnb-button mnb-button-primary" disabled={isCheckingOut} onClick={checkout} type="button">
                {isCheckingOut ? <Loader2 className="mnb-spin" size={16} /> : <ArrowRight size={16} />}
                Passer au paiement
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
