import Link from "next/link";
import { PackageOpen } from "lucide-react";
import type { ShopProduct } from "@/lib/shopify/types";
import { ProductCard } from "@/components/shop/product-card";

export function ProductGrid({ products }: { products: ShopProduct[] }) {
  if (products.length === 0) {
    return (
      <div className="mnb-empty-state">
        <PackageOpen size={30} />
        <h2>Aucune piece dans cette selection.</h2>
        <p>Le back-office Shopify peut etre vide ou le filtre trop precis. La boutique reste prete pour vos prochaines pieces.</p>
        <Link className="mnb-button" href="/shop">
          Revenir a toute la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="mnb-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
