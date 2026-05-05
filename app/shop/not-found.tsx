import Link from "next/link";

export default function ShopNotFound() {
  return (
    <main className="mnb-shop-main">
      <div className="mnb-empty-state">
        <h1>Produit introuvable.</h1>
        <p>Cette piece n&apos;est pas dans la boutique ou n&apos;est pas encore publiee cote Shopify.</p>
        <Link className="mnb-button mnb-button-primary" href="/shop">
          Retour boutique
        </Link>
      </div>
    </main>
  );
}
