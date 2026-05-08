import { ShopCollectionPage } from "@/components/shop/shop-page-sections";

// /shop/figurines : page rayon des figurines collection autonomes
// (Mini-Doll Hello Kitty…). Anciennement un redirect vers /shop/porte-cles
// quand "figurines" n'existait plus en tant que catégorie ; maintenant
// que figurines est de retour comme bucket à part entière (cf.
// shopCategories), on sert sa vraie page de collection.
export default function FigurinesPage() {
  return <ShopCollectionPage type="figurines" />;
}
