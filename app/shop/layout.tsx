import type { Metadata } from "next";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { ShopProvider } from "@/components/shop/shop-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Boutique en ligne | My Nice Bracelet",
  description:
    "Les pieces de l'atelier My Nice Bracelet: perles, pierres naturelles et figurines kawaii a commander par quantite.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <ShopProvider>
      <div className="mnb-shop">
        {/* Brand-wide header (same look as the main mnb-ecommerce site)
            replaces the previous ShopHeader. The shop topbar above is
            kept as a thin announcement strip ; the new Header renders
            fixed on top of it, so we leave the topbar visible only
            above the fold of the shop pages. */}
        <Header />
        <div className="mnb-shop-topbar">
          Pieces de l&apos;atelier · Expedition depuis Paris · Paiement securise
        </div>
        {children}
        <Footer />
        <CartDrawer />
      </div>
    </ShopProvider>
  );
}
