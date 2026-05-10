import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gem, KeyRound, Sparkles, WandSparkles } from "lucide-react";
import { ProductGrid } from "@/components/shop/product-grid";
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
  eyebrow: string;
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
    eyebrow: "Je compose une base",
    href: "/shop/perles",
    type: "perles",
    icon: WandSparkles,
    coverImage: {
      url: "/shop/products/mnb_perle_fleur_rose_iris_v1.jpg",
      alt: "Selection perles My Nice Bracelet",
    },
  },
  {
    title: "Pierres naturelles",
    eyebrow: "Je veux une matiere bijou",
    href: "/shop/pierres-semi-precieuses",
    type: "pierres",
    icon: Gem,
    coverImage: {
      url: "/shop/products/mnb_perle_oeil_de_tigre_dore_v1.jpg",
      alt: "Selection pierres semi-precieuses My Nice Bracelet",
    },
  },
  {
    title: "Porte-cles Sanrio",
    eyebrow: "Je veux un objet fini",
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
    eyebrow: "Je veux une mascotte",
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
  const boutiqueProducts = overviewProducts.filter((product) =>
    ["perles", "pierres", "figurines"].includes(product.category),
  );
  const displayProducts = activeType ? products : boutiqueProducts;
  // (Le hero précédent affichait 4 photos produits dans des bulles ;
  //  remplacé par <HeroModelViewer> avec un GLB 3D de Hello Kitty —
  //  les variables heroProducts / heroPreviewHandles ne sont plus
  //  nécessaires.)
  const atelierSelection = boutiqueProducts
    .filter((product) => product.badges.includes("Selection atelier"))
    .slice(0, 6);
  const title = currentCategory?.label ?? "Perles, figurines & kits";
  const lead =
    currentCategory?.description ??
    // Tightened to a single short sentence — the rayon tiles below
    // already detail each option, no need to describe all three
    // here. Keeps the hero airy.
    "Les pièces et kits de l'atelier, à la pièce ou en lot — expédié de Paris.";
  const categoryCtaLabels: Partial<Record<ShopProductType, string>> = {
    perles: "Voir les perles",
    pierres: "Voir les pierres",
    "porte-cles": "Voir les porte-cles",
    figurines: "Voir les figurines",
  };
  const primaryCtaLabel = activeType ? categoryCtaLabels[activeType] ?? "Voir la collection" : "Voir la selection";
  const secondaryCta = activeType
    ? { href: "/shop", label: "Voir toute la boutique" }
    : { href: "#selection", label: "Voir toutes les pieces" };

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
            <p className="text-base md:text-lg text-[#5A6878] max-w-lg leading-relaxed mb-8">
              {lead}
            </p>
            <div className="flex flex-wrap gap-3">
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
              <Link className="mnb-button" href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
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
        className="container mx-auto px-4 md:px-6 mb-16 md:mb-20"
      >
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
                  <div className="absolute inset-x-0 top-0 h-[60%] flex items-center justify-center pointer-events-none">
                    <div className="relative w-[78%] h-[88%]">
                      <Image
                        src={cover.url}
                        alt=""
                        fill
                        sizes="(max-width: 980px) 35vw, 18vw"
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

                {/* Bottom content : label + count.
                    Le micro-texte italique a été retire (cf. type
                    QuickEntry — plus de field `body`) ; le titre +
                    eyebrow + le compteur portent toute l'info. */}
                <div className="relative z-10 px-4 md:px-5 pb-4 md:pb-5 pt-3 bg-gradient-to-t from-white/95 via-white/70 to-transparent">
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.22em] text-[#3D5A73]/75 mb-1.5">
                    {entry.eyebrow}
                  </p>
                  <h3 className="font-serif text-[16px] md:text-[20px] font-black uppercase leading-[1.05] tracking-tight text-[#2D3748] mb-2.5">
                    {entry.title}
                  </h3>
                  <p className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] text-[#3D5A73]">
                    {entry.external
                      ? "Site principal"
                      : count !== null
                        ? `${count} sélection${count > 1 ? "s" : ""}`
                        : "Découvrir"}
                    <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
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
                en sous-titre en `mnb-section-lead` sous le H2. */}
            <h2>{currentCategory?.label ?? "Sélection de l'atelier"}</h2>
            {(currentCategory?.description ??
              "Perles, pierres et figurines que nous aimons associer en atelier — à la pièce ou en lot.") ? (
              <p className="mnb-section-lead">
                {currentCategory?.description ??
                  "Perles, pierres et figurines que nous aimons associer en atelier — à la pièce ou en lot."}
              </p>
            ) : null}
          </div>
          <span>
            {displayProducts.length} produit{displayProducts.length > 1 ? "s" : ""}
          </span>
        </div>
        <ProductGrid products={displayProducts} />
      </section>

      {atelierSelection.length > 0 && !activeType ? (
        <section className="mnb-shop-section">
          <div className="mnb-section-head">
            <div>
              <p className="mnb-kicker">Vu a l&apos;atelier</p>
              <h2>Les pieces les plus faciles a associer</h2>
            </div>
          </div>
          <ProductGrid products={atelierSelection} />
        </section>
      ) : null}

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
