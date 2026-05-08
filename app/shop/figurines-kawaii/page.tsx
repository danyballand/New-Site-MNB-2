import { redirect } from "next/navigation";

// /shop/figurines-kawaii était l'ancienne page "fourre-tout" qui mêlait
// charmes en résine et porte-clés Sanrio. Le bucket est maintenant
// scindé en deux : /shop/charmes (resin charms à intégrer dans un
// bracelet) et /shop/porte-cles (Sanrio licensed keychains autonomes).
// On redirige par défaut vers porte-cles parce que c'était la majorité
// du trafic historique sur cette URL — un client qui suit un ancien
// lien externe (réseau social, mail) tombait probablement sur un
// produit Sanrio.
export default function FigurinesKawaiiPage() {
  redirect("/shop/porte-cles");
}
