import { redirect } from "next/navigation";

// /shop/charmes était la page de l'ancienne taxonomie où "charmes"
// regroupait les pièces non-rondes en résine (cœurs, étoiles, fleurs,
// animaux). Elles sont maintenant dans /shop/perles parce que ce sont
// fonctionnellement des perles non-rondes (toutes percées pour
// s'enfiler). On garde un redirect pour préserver les anciens liens
// externes (réseaux sociaux, mails) qui pointaient ici.
export default function CharmesPage() {
  redirect("/shop/perles");
}
