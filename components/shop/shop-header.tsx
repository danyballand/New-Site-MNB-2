"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useShopCart } from "@/components/shop/shop-provider";

export function ShopHeader() {
  const { totalQuantity, setOpen } = useShopCart();

  return (
    <header className="mnb-shop-header">
      <div className="mnb-shop-header-inner">
        <Link aria-label="My Nice Bracelet Shop" className="mnb-shop-logo" href="/shop">
          <span>
            <Image src="https://mynicebracelet.com/logo.jpg" alt="My Nice Bracelet" width={56} height={56} />
          </span>
          <span>
            My Nice Bracelet
            <small>Boutique de l&apos;atelier</small>
          </span>
        </Link>
        <nav className="mnb-shop-nav" aria-label="Navigation boutique">
          <Link className="is-active" href="/shop">
            Boutique en ligne
          </Link>
        </nav>
        <div className="mnb-shop-header-actions">
          <Link className="mnb-shop-return" href="/">
            Ateliers et configurateur
          </Link>
          <button className="mnb-header-cart" onClick={() => setOpen(true)} type="button">
            <ShoppingBag size={17} />
            <span>{totalQuantity}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
