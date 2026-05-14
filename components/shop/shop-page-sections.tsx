import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gem, KeyRound, Sparkles, WandSparkles } from "lucide-react";
import { ShopFilterableGrid } from "@/components/shop/shop-filterable-grid";
import { SourceBanner } from "@/components/shop/source-banner";
import { HeroModelViewer } from "@/components/shop/HeroModelViewer";
import { getShopProducts } from "@/lib/shopify/client";
import { shopCategories, type ShopDataResult, type ShopProduct, type ShopProductType } from "@/lib/shopify/types";
import { cn } from "@/lib/utils/cn";

/**
 * Quick-entry cards on the shop landing : the visitor reads these
 * once and immediately knows the four ways to buy here.
 *
 *   - Perles + Pierres : "compose your own" — buy materials in
 *     quantity (1, 5, 10, 50… pieces) at degressive prices
 *   - Figurines        : kawaii / enamel decorative pieces
 *   - Kits             : pre-composed ready-made bracelets, no
 *                        assembly — the "I don't want to compose"
 *                        path. Linked to the main-site kits page
 *                        until the shop's own /shop/kits goes live.
 */
const MAIN_HOST = "https://mynicebracelet.com";

type QuickEntry = {
  title: string;
  href: string;
  type?: ShopProductType;
  icon: typeof WandSparkles;
  /** Optional explicit cover image URL. When set, overrides the
   *  default behavior (which picks the first product of the category).
   *  Use this when the auto-pick lands on a non-representative photo
   *  (e.g. quartz-rose pierres tile that ended up showing a yellow
   *  heart bead because the legacy mock pointed there). */
  coverImage?: { url: string; alt: string };
  external?: boolean;
};

// Quatre tuiles "rayon" alignées sur les 4 buckets de
// `shopCategories` (lib/shopify/types.ts). Plus de `body` (les sous-
// textes en italique étaient des micro-paragraphes redondants — le
// titre + l'eyebrow + le compteur de produits suffisent à indiquer
// la promesse de chaque rayon). Chaque tuile force son `coverImage`
// pour ne pas dépendre du tirage aléatoire de la première fiche du
// catalogue (qui pouvait afficher une mauvaise photo, ex. cœur jaune
// pour les pierres).
const quickEntries: QuickEntry[] = [
  {
    title: "Perles",
    href: "/shop/perles",
    type: "perles",
    icon: WandSparkles,
    coverImage: {
      // Cover du rayon Perles : la photo du produit "Perles Nacrees
      // Atelier" (cube vert anis facetté), plus représentative
      // visuellement que l'ancienne fleur rose iris seule sur fond
      // blanc. Le fichier est en .webp (résolution 1400px), géré
      // nativement par next/image.
      url: "/shop/products/mnb_perle_cube_vert_anis_facette_v1_1400.webp",
      alt: "Selection perles My Nice Bracelet",
    },
  },
  {
    title: "Pierres naturelles",
    href: "/shop/pierres-semi-precieuses",
    type: "pierres",
    icon: Gem,
    coverImage: {
      // Cover du rayon Pierres : photo du produit "Pierre Jaspe Vert
      // Mousse" — pierre verte tachée naturelle, visuellement plus
      // représentative du rayon que l'ancienne "perle oeil de tigre
      // doree" (qui était une perle, pas une pierre naturelle).
      url: "/shop/products/mnb_pierre_jaspe_vert_mousse_v1.jpg",
      alt: "Selection pierres naturelles My Nice Bracelet",
    },
  },
  {
    title: "Porte-cles Sanrio",
    href: "/shop/porte-cles",
    type: "porte-cles",
    icon: KeyRound,
    coverImage: {
      url: "/shop/products/mnb_yume_camping_collection_v1.jpeg",
      alt: "Selection porte-cles Sanrio My Nice Bracelet",
    },
  },
  {
    title: "Figurines",
    href: "/shop/figurines",
    type: "figurines",
    icon: Sparkles,
    coverImage: {
      url: "/shop/products/mnb_yume_minidoll_collection_v1.jpeg",
      alt: "Selection figurines Mini-Doll My Nice Bracelet",
    },
  },
];

export function ShopFilterBar({ activeType }: { activeType?: ShopProductType }) {
  // `scroll={false}` keeps the user's vertical position when switching
  // categories. Each filter is technically a full route navigation
  // (/shop ↔ /shop/perles ↔ /shop/pierres-semi-precieuses ↔
  // /shop/figurines-kawaii), and Next.js's default behaviour is to
  // reset scroll to 0 on push. Since every one of those routes
  // renders the same hero + rayon tiles + filter bar at the same Y,
  // freezing scroll makes the click feel like an in-page filter
  // change instead of a "jump back to top".
  return (
    <div className="mnb-filter-bar" aria-label="Collections">
      <Link className={!activeType ? "is-active" : ""} href="/shop" scroll={false}>
        Tout
      </Link>
      {shopCategories.map((category) => (
        <Link
          className={activeType === category.key ? "is-active" : ""}
          href={category.href}
          key={category.key}
          scroll={false}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
}

export function ShopLanding({
  result,
  activeType,
  allProducts,
}: {
  result: ShopDataResult<ShopProduct[]>;
  activeType?: ShopProductType;
  allProducts?: ShopProduct[];
}) {
  const products = result.data;
  const overviewProducts = allProducts ?? products;
  const currentCategory = activeType ? shopCategories.find((category) => category.key === activeType) : undefined;
  // Sur la home /shop : on affiche TOUTES les 4 catégories actives
  // (perles, pierres, figurines, porte-cles). Avant on excluait
  // porte-cles pour pousser vers la tuile rayon dédiée, mais ça
  // créait l'impression de produits "disparus" pour l'utilisateur
  // qui comparait avec le total Shopify. Tout afficher est plus
  // transparent et la tuile rayon reste accessible.
  const boutiqueProducts = overviewProducts.filter((product) =>
    ["perles", "pierres", "figurines", "porte-cles"].includes(product.category),
  );
  const displayProducts = activeType ? products : boutiqueProducts;
  // (Le hero précédent affichait 4 photos produits dans des bulles ;
  //  remplacé par <HeroModelViewer> avec un GLB 3D de Hello Kitty —
  //  les variables heroProducts / heroPreviewHandles ne sont plus
  //  nécessaires.)
  // atelierSelection (filtre "Selection atelier") supprimé : la
  // section "Les pieces les plus faciles a associer" qui l'utilisait
  // a été retirée comme doublon de la grille principale.
  const title = currentCategory?.label ?? "Perles, figurines & kits";
  // Lead retiré : sur la home /shop, le titre + les tuiles rayon
  // détaillent déjà l'offre — un sous-titre supplémentaire faisait
  // doublon. Sur les pages catégorie, la phrase descriptive est
  // affichée plus bas en .mnb-section-lead sous le H2 du rayon.
  const categoryCtaLabels: Partial<Record<ShopProductType, string>> = {
    perles: "Voir les perles",
    pierres: "Voir les pierres",
    "porte-cles": "Voir les porte-cles",
    figurines: "Voir les figurines",
  };
  const primaryCtaLabel = activeType ? categoryCtaLabels[activeType] ?? "Voir la collection" : "Voir la selection";
  // secondaryCta : seulement sur les pages catégorie (lien retour
  // vers /shop). Sur la home, le 2e bouton "Voir toutes les pieces"
  // pointait vers #selection — même cible que le primary "Voir la
  // sélection" → doublon inutile, retiré.
  const secondaryCta = activeType
    ? { href: "/shop", label: "Voir toute la boutique" }
    : null;

  return (
    <main className="mnb-shop-main">
      {/* ─── HERO ─────────────────────────────────────────────────
        Flowing layout that breathes on the cream background — no
        nested white cards, no pill-shaped clarifier. The product
        photos float as a free-form mosaic on the right ; the copy
        sits on the left with generous whitespace and a single
        primary CTA. */}
      <section className="relative pt-12 md:pt-16 pb-12 md:pb-20">
        {/* Soft pastel blob behind the visual side — gives the hero
            depth without adding a card. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#E8DBF0]/55 via-[#F8E0E8]/45 to-transparent blur-3xl -z-10"
        />
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column — kept tight on purpose. The eyebrow + h1
              + one short lead sentence + CTA pair carry the whole
              hero ; the rayon tiles below do the detailing.
              col-span-6 (au lieu de 7) pour laisser place à la
              colonne modèles 3D côté droit (col-span-6 aussi → 12/12). */}
          <div className="lg:col-span-6">
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.32em] text-[#3D5A73] mb-5">
              Boutique de l&apos;atelier
            </p>
            <h1 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[4rem] xl:text-[4.4rem] font-black leading-[0.96] tracking-tight text-[#2D3748] uppercase mb-5">
              {title}
            </h1>
            <div className="flex flex-wrap gap-3 mt-2">
              {/* Reuse the existing .mnb-button / .mnb-button-primary
                  classes from globals.css. Tag-level rule
                  `a { color: inherit }` (line 27 of globals) was
                  silently overriding `text-white` on the inline-flex
                  Link, collapsing the label into the dark slate
                  background. The .mnb-button-primary class sets
                  `color: var(--mnb-soft)` explicitly so the label
                  always reads on top of the dark background. */}
              <Link className="mnb-button mnb-button-primary" href="#selection">
                {primaryCtaLabel}
                <ArrowRight size={16} />
              </Link>
              {secondaryCta ? (
                <Link className="mnb-button" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          {/* Visual column : trois mascottes 3D en composition triangle.
              Hello Kitty au premier plan (centre-bas), Penguin à
              gauche derrière, Kuromi à droite derrière. L'ordre des
              entrées correspond aux slots du layout :
                index 0 = front center-bottom
                index 1 = back-left
                index 2 = back-right
              Chacune suit le curseur du regard depuis sa propre
              position (cf. HeroModelViewer mouse tracking). */}
          <div className="lg:col-span-6 relative aspect-[6/5] max-w-[640px] mx-auto w-full">
            <HeroModelViewer
              layout="triangle"
              models={[
                { src: '/shop/models/hello_kitty_cheerleader.glb', label: 'Hello Kitty' },
                { src: '/shop/models/winking_penguin.glb', label: 'Penguin' },
                { src: '/shop/models/kuromi_maid.glb', label: 'Kuromi' },
              ]}
              alt="Mascottes 3D Hello Kitty, Penguin et Kuromi — boutique My Nice Bracelet"
              className="absolute inset-0"
            />
          </div>
        </div>
      </section>

      {/* ─── RAYON CARDS ──────────────────────────────────────────
        Image-driven category tiles that replace the boxy "icon +
        eyebrow + body + footer" white cards. Each rayon shows a
        big product photo as backdrop with a colored gradient
        overlay (subtle pastel tint per category), a strong
        serif label, and a hover scale effect. */}
      <section
        aria-label="Choisir son rayon"
        className="max-w-[1080px] mx-auto px-4 md:px-6 mb-16 md:mb-20"
      >
        {/* max-w-[1080px] (au lieu du `container` Tailwind ~1280px sur xl)
            → cards plus étroits sur grand écran (de ~308px à ~258px wide).
            Combiné à la réduction du padding interne (`px-5 md:px-7` plus
            bas), ça donne des tuiles plus compactes avec moins de marge
            cream visible autour de la photo. */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {quickEntries.map((entry, index) => {
            const count = entry.type
              ? overviewProducts.filter((p) => p.category === entry.type).length
              : null;
            // Cover image priority : `coverImage` explicite > première
            // fiche du catalogue > rien (icône glyph en fallback).
            const cover = entry.coverImage
              ? { url: entry.coverImage.url, altText: entry.coverImage.alt }
              : entry.type
                ? overviewProducts.find((p) => p.category === entry.type)?.featuredImage
                : undefined;
            // Per-category soft tint so the 4 tiles read as a set
            // but each has its own personality.
            const tints = [
              "from-[#EBF1FB]/90 to-[#FFFFFF]/30", // perles — pale blue
              "from-[#F2EBF8]/90 to-[#FFFFFF]/30", // pierres — lavender
              "from-[#FBE9EE]/90 to-[#FFFFFF]/30", // figurines — pink
              "from-[#F4ECDB]/90 to-[#FFFFFF]/30", // kits — warm beige
            ] as const;
            const tint = tints[index] ?? tints[0];
            const cardClasses = cn(
              // aspect [4/5] : card plus tall que large. Avec width
              // figée (max-w-[1080px] / 4 ≈ 258px) et padding photo
              // figé (`px-7` = 28px chaque côté), augmenter la
              // hauteur du card augmente la hauteur du wrapper photo
              // (`h-[60%]`) — la width du wrapper reste constante →
              // le wrapper se rapproche du carré (~258-56 = 202 wide,
              // 322×0.6 = 193 tall → aspect 1.05 ≈ carré). Effet de
              // bord positif : le padding latéral (en absolu inchangé)
              // pèse moins en proportion du wrapper, donc la marge
              // gauche/droite cream paraît visuellement plus discrète.
              "group relative flex flex-col justify-end aspect-[4/5] rounded-[28px] overflow-hidden",
              "bg-gradient-to-br shadow-[0_14px_36px_-12px_rgba(45,55,72,0.2)]",
              "transition-all duration-300 hover:-translate-y-1",
              "hover:shadow-[0_22px_50px_-12px_rgba(45,55,72,0.28)]",
              tint,
            );
            const inner = (
              <>
                {/* Cover image (uses the first product photo of the
                    category as a stand-in product visual) */}
                {cover ? (
                  <div className="absolute inset-x-0 top-0 h-[60%] pointer-events-none px-5 md:px-7 pt-3">
                    {/* Padding `px-8 md:px-10 pt-4` (32→40px latéral,
                        16px en haut) sur le wrapper externe → fond du
                        tile bien visible sur les côtés, photo "posée"
                        au centre. Padding latéral encore renforcé
                        (utilisateur veut + sur les côtés) → rapproche
                        le wrapper interne d'un ratio carré → photo
                        carrée 1400×1400 préservée par object-cover
                        avec très peu de crop top/bottom. Responsive
                        (md:px-10) pour éviter d'étouffer la photo
                        sur mobile où les cards sont déjà étroites. */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                      {/* object-contain (au lieu de object-cover) : les
                          photos source sont toutes 1:1 (1080 ou 1400 px²)
                          mais le wrapper varie légèrement entre 1.05 et
                          1.20 d'aspect selon le viewport (mobile 2 cols
                          vs desktop 4 cols). object-cover rognait alors
                          5-15% en haut/bas, ce qui était invisible sur
                          les photos à sujet centré (bead unique sur
                          fond blanc) mais COUPAIT le contenu utile sur
                          les collection shots (porte-clés en haut +
                          figurines en bas). object-contain garantit
                          que l'intégralité de la photo est visible ;
                          le léger espace transparent qui apparaît sur
                          les côtés se fond avec le gradient pastel du
                          tile. */}
                      <Image
                        src={cover.url}
                        alt=""
                        fill
                        sizes="(max-width: 980px) 45vw, 22vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.05]"
                        unoptimized={cover.url.endsWith(".jpeg") || cover.url.endsWith(".jpg")}
                      />
                    </div>
                  </div>
                ) : (
                  // Kits has no local catalogue yet — show the icon
                  // bigger as a glyph so the tile doesn't look empty.
                  <div className="absolute inset-x-0 top-0 h-[60%] flex items-center justify-center text-[#3D5A73]/70 pointer-events-none">
                    <entry.icon size={64} strokeWidth={1.4} />
                  </div>
                )}

                {/* Bottom content : titre + count.
                    Eyebrow "Je veux un objet fini" / "Je compose une
                    base" etc. retiré — le titre court + le compteur
                    suffisent, la phrase d'intention au-dessus du
                    titre faisait trop "interview emoji" pour une
                    tuile catégorie. */}
                <div className="relative z-10 px-4 md:px-5 pb-4 md:pb-5 pt-3 bg-gradient-to-t from-white/95 via-white/70 to-transparent">
                  <h3 className="font-serif text-[16px] md:text-[20px] font-black uppercase leading-[1.05] tracking-tight text-[#2D3748] mb-2.5">
                    {entry.title}
                  </h3>
                  {/* Label "X sélections" : bumpé de 9-10px à 12-14px
                      (font-black déjà max → on joue sur la taille pour
                      la lisibilité). Tracking légèrement réduit (0.18em
                      → 0.14em) pour que le label respire sans s'éclater
                      à la nouvelle taille. */}
                  <p className="inline-flex items-center gap-1.5 text-[12px] md:text-[14px] font-black uppercase tracking-[0.14em] text-[#3D5A73]">
                    {entry.external
                      ? "Site principal"
                      : count !== null
                        ? `${count} sélection${count > 1 ? "s" : ""}`
                        : "Découvrir"}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </>
            );
            return entry.external ? (
              <a
                key={entry.title}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {inner}
              </a>
            ) : (
              <Link key={entry.title} href={entry.href} className={cardClasses}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <ShopFilterBar activeType={activeType} />
      <SourceBanner result={result} />

      <section className="mnb-shop-section" id="selection">
        <div className="mnb-section-head">
          <div>
            <p className="mnb-kicker">{activeType ? "Collection" : "Selection de l'atelier"}</p>
            {/* H2 = label court (ex. "Porte-cles Sanrio"). La phrase
                descriptive (anciennement le H2 lui-même, beaucoup
                trop long et resserré dans clamp(2-3.2rem)) bascule
                en sous-titre en `mnb-section-lead` sous le H2. Le
                compteur "X produits" a été déplacé dans la toolbar
                de `<ShopFilterableGrid>` pour refléter le compte
                FILTRÉ en temps réel (le compteur dans le header
                affichait toujours le total non filtré). */}
            <h2>{currentCategory?.label ?? "Sélection de l'atelier"}</h2>
            {/* Lead descriptif : affiché uniquement quand on est dans
                une catégorie (description fournie par shopCategories
                dans lib/shopify/types.ts). Sur la home /shop sans
                catégorie active, on ne rend rien — le fallback
                générique "Perles, pierres et figurines…" était bruit
                visuel qui faisait doublon avec les rayon tiles
                au-dessus. */}
            {currentCategory?.description ? (
              <p className="mnb-section-lead">{currentCategory.description}</p>
            ) : null}
          </div>
        </div>
        <ShopFilterableGrid products={displayProducts} />
      </section>

      {/* Section "Vu a l'atelier — Les pieces les plus faciles a
          associer" retirée : faisait doublon avec la grille
          principale ci-dessus (mêmes produits filtrés sur le badge
          "Selection atelier"). La grille principale suffit. */}

    </main>
  );
}

export async function ShopCollectionPage({ type }: { type: ShopProductType }) {
  const [result, allResult] = await Promise.all([getShopProducts({ type }), getShopProducts()]);

  return <ShopLanding activeType={type} allProducts={allResult.data} result={result} />;
}

// EditorialSections + InspirationSections ont été retirés :
//   - Editorial cards : doublon visuel des tuiles "rayon" du haut de
//     la page — on n'a pas besoin de présenter Perles / Figurines /
//     Pierres deux fois.
//   - Moodboards "Créer par ambiance" : décoration sans valeur
//     d'achat directe ; la version compacte de "Comment ça marche"
//     suffit largement en bas de page (cf. HowItWorksStrip).
