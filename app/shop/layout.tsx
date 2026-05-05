import type { Metadata } from "next";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { ShopHeader } from "@/components/shop/shop-header";
import { ShopProvider } from "@/components/shop/shop-provider";

export const metadata: Metadata = {
  title: "Boutique en ligne | My Nice Bracelet",
  description:
    "Les pieces de l'atelier My Nice Bracelet: perles, pierres naturelles et figurines kawaii a commander par quantite.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <ShopProvider>
      <div className="mnb-shop">
        <div className="mnb-shop-topbar">
          Pieces de l&apos;atelier · Expedition depuis Paris · Paiement securise
        </div>
        <ShopHeader />
        {children}
        <footer className="mnb-shop-footer">
          <div>
            <strong>My Nice Bracelet</strong>
            <span>Boutique en ligne dediee aux perles, pierres et figurines.</span>
          </div>
          <div>
            <a href="mailto:hello@mynicebracelet.com">hello@mynicebracelet.com</a>
          </div>
        </footer>
        <CartDrawer />
      </div>
    </ShopProvider>
  );
}
