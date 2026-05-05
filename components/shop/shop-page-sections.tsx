import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gem, Heart, Sparkles, WandSparkles } from "lucide-react";
import { ProductGrid } from "@/components/shop/product-grid";
import { SourceBanner } from "@/components/shop/source-banner";
import { getShopProducts } from "@/lib/shopify/client";
import { formatMoney, getCategoryLabel } from "@/lib/shopify/utils";
import { shopCategories, type ShopDataResult, type ShopProduct, type ShopProductType } from "@/lib/shopify/types";

const quickEntries = [
  {
    title: "Perles",
    eyebrow: "Je veux composer une base",
    body: "Perles pastel, nacrees ou transparentes, vendues au nombre de pieces.",
    href: "/shop/perles",
    type: "perles" satisfies ShopProductType,
    icon: WandSparkles,
  },
  {
    title: "Pierres semi-precieuses",
    eyebrow: "Je veux une matiere plus bijou",
    body: "Quartz, amethyste et pierres naturelles selectionnees par l'atelier.",
    href: "/shop/pierres-semi-precieuses",
    type: "pierres" satisfies ShopProductType,
    icon: Gem,
  },
  {
    title: "Figurines kawaii",
    eyebrow: "Je veux une piece coup de coeur",
    body: "Coeurs, etoiles, fleurs et figurines douces pour personnaliser une creation.",
    href: "/shop/figurines-kawaii",
    type: "figurines" satisfies ShopProductType,
    icon: Sparkles,
  },
];

const moodboards = [
  "Pastel Parisien",
  "Sakura Kawaii",
  "Dore & nacre",
  "Coeurs rouges",
  "Pierres douces",
  "Initiales",
];

export function ShopFilterBar({ activeType }: { activeType?: ShopProductType }) {
  return (
    <div className="mnb-filter-bar" aria-label="Collections">
      <Link className={!activeType ? "is-active" : ""} href="/shop">
        Tout
      </Link>
      {shopCategories.map((category) => (
        <Link className={activeType === category.key ? "is-active" : ""} href={category.href} key={category.key}>
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
  const heroPreviewHandles = [
    "piece-etoile-bleu-transparent",
    "piece-ange-argent",
    "piece-ourson-vert-menthe",
    "piece-papillon-vert-pastel",
  ];
  const heroPreviewProducts = heroPreviewHandles
    .map((handle) => boutiqueProducts.find((product) => product.handle === handle))
    .filter((product): product is ShopProduct => Boolean(product));
  const heroProducts = heroPreviewProducts.length > 0 ? heroPreviewProducts : boutiqueProducts.slice(0, 4);
  const heroLeadProduct = heroProducts[0];
  const atelierSelection = boutiqueProducts
    .filter((product) => product.badges.includes("Selection atelier"))
    .slice(0, 6);
  const title = currentCategory?.label ?? "Perles, pierres & figurines de l'atelier";
  const lead =
    currentCategory?.description ??
    "Achetez uniquement les pieces de l'atelier: perles, pierres semi-precieuses et figurines kawaii, avec prix degressifs selon le nombre de pieces.";
  const categoryCtaLabels: Partial<Record<ShopProductType, string>> = {
    perles: "Voir les perles",
    pierres: "Voir les pierres",
    figurines: "Voir les figurines",
  };
  const primaryCtaLabel = activeType ? categoryCtaLabels[activeType] ?? "Voir la collection" : "Voir la selection";
  const secondaryCta = activeType
    ? { href: "/shop", label: "Voir toute la boutique" }
    : { href: "#selection", label: "Voir toutes les pieces" };

  return (
    <main className="mnb-shop-main">
      <section className="mnb-shop-gateway">
        <div className="mnb-shop-gateway-copy">
          <p className="mnb-kicker">Boutique de l&apos;atelier</p>
          <h1>{title}</h1>
          <p>{lead}</p>
          <div className="mnb-shop-proof-row" aria-label="Reassurance boutique">
            <span>Selection atelier</span>
            <span>Expedition depuis Paris</span>
            <span>Pieces seules</span>
            <span>Prix degressifs</span>
          </div>
          <div className="mnb-hero-actions">
            <Link className="mnb-button mnb-button-primary" href="#selection">
              {primaryCtaLabel}
              <ArrowRight size={16} />
            </Link>
            <Link className="mnb-button" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        {heroProducts.length > 0 ? (
          <div className="mnb-shop-gateway-media mnb-shop-piece-preview" aria-label="Selection de pieces de l'atelier">
            <div className="mnb-piece-preview-grid">
              {heroProducts.map((product, index) => (
                <Link
                  className="mnb-piece-preview-item"
                  href={`/shop/produit/${product.handle}`}
                  key={product.id}
                  style={{ position: "relative" }}
                >
                  <Image
                    className={product.featuredImage.url.startsWith("/shop/products/") ? "is-product-asset" : undefined}
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 980px) 42vw, 18vw"
                  />
                </Link>
              ))}
            </div>
            {heroLeadProduct ? (
              <Link className="mnb-piece-preview-caption" href={`/shop/produit/${heroLeadProduct.handle}`}>
                <strong>Selection coups de coeur</strong>
                <span>A partir de {formatMoney(heroLeadProduct.price)}</span>
              </Link>
            ) : null}
          </div>
        ) : null}
      </section>

      <section className="mnb-shop-clarifier" aria-label="Separation des experiences">
        <strong>Ici, vous achetez des pieces seules.</strong>
        <span>
          Cette boutique est dediee aux perles, pierres semi-precieuses et figurines, vendues par paliers de quantite.
        </span>
      </section>

      <section className="mnb-shop-entry-grid" aria-label="Choisir son point de depart">
        {quickEntries.map((entry) => {
          const Icon = entry.icon;
          const count = overviewProducts.filter((product) => product.category === entry.type).length;

          return (
            <Link className="mnb-shop-entry-card" href={entry.href} key={entry.title}>
              <span>
                <Icon size={18} />
              </span>
              <small>{entry.eyebrow}</small>
              <strong>{entry.title}</strong>
              <p>{entry.body}</p>
              <em>{count} selection{count > 1 ? "s" : ""}</em>
            </Link>
          );
        })}
      </section>

      <ShopFilterBar activeType={activeType} />
      <SourceBanner result={result} />

      <section className="mnb-shop-section" id="selection">
        <div className="mnb-section-head">
          <div>
            <p className="mnb-kicker">{activeType ? "Collection" : "Selection de l'atelier"}</p>
            <h2>
              {currentCategory?.description ??
                "Perles, pierres et figurines que nous aimons associer en atelier"}
            </h2>
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

      <EditorialSections products={overviewProducts} />
      <InspirationSections />
    </main>
  );
}

export async function ShopCollectionPage({ type }: { type: ShopProductType }) {
  const [result, allResult] = await Promise.all([getShopProducts({ type }), getShopProducts()]);

  return <ShopLanding activeType={type} allProducts={allResult.data} result={result} />;
}

export function EditorialSections({ products }: { products: ShopProduct[] }) {
  const blocks = [
    {
      title: "Le bar a perles",
      body: "Perles transparentes, nacrees ou colorees, a choisir par nombre de pieces.",
      icon: WandSparkles,
      products: products.filter((product) => product.category === "perles").slice(0, 2),
      href: "/shop/perles",
    },
    {
      title: "Le coin kawaii",
      body: "Figurines et petites pieces coup de coeur, photographiees comme des bijoux plutot que des jouets.",
      icon: Sparkles,
      products: products.filter((product) => product.category === "figurines").slice(0, 2),
      href: "/shop/figurines-kawaii",
    },
    {
      title: "L'ecrin des pierres",
      body: "Des nuances naturelles a associer avec du nacre, du dore ou des perles pastel.",
      icon: Gem,
      products: products.filter((product) => product.category === "pierres").slice(0, 2),
      href: "/shop/pierres-semi-precieuses",
    },
  ];

  return (
    <section className="mnb-editorial-grid">
      {blocks.map((block) => {
        const Icon = block.icon;
        const preview = block.products[0];

        return (
          <Link className="mnb-editorial-card" href={block.href} key={block.title}>
            {preview ? (
              <div className="mnb-editorial-image">
                <Image
                  src={preview.featuredImage.url}
                  alt={preview.featuredImage.altText}
                  fill
                  sizes="(max-width: 980px) 35vw, 18vw"
                />
              </div>
            ) : null}
            <div>
              <Icon size={18} />
              <h3>{block.title}</h3>
              <p>{block.body}</p>
              {preview ? <span>A partir de {formatMoney(preview.price)}</span> : <span>Bientot</span>}
            </div>
          </Link>
        );
      })}
    </section>
  );
}

function InspirationSections() {
  return (
    <>
      <section className="mnb-shop-steps" aria-label="Composer chez soi">
        <div>
          <p className="mnb-kicker">Comment ca marche</p>
          <h2>Composer chez soi en 3 etapes</h2>
        </div>
        <ol>
          <li>
            <span>1</span>
            <strong>Choisissez vos pieces</strong>
            <p>Perles, pierres ou figurines: partez d&apos;une couleur, d&apos;une matiere ou d&apos;une piece coup de coeur.</p>
          </li>
          <li>
            <span>2</span>
            <strong>Selectionnez la quantite</strong>
            <p>Choisissez 1, 5, 10, 50 pieces ou un palier pro avec prix degressif a partir de 100 pieces.</p>
          </li>
          <li>
            <span>3</span>
            <strong>Composez a votre rythme</strong>
            <p>Vous recevez les pieces seules, preparees separement du configurateur et des ateliers.</p>
          </li>
        </ol>
      </section>

      <section className="mnb-shop-moodboards" aria-label="Inspirations a composer">
        <div className="mnb-section-head">
          <div>
            <p className="mnb-kicker">Inspirations</p>
            <h2>Creer par ambiance</h2>
          </div>
        </div>
        <div>
          {moodboards.map((moodboard) => (
            <Link href={`/shop?mood=${encodeURIComponent(moodboard.toLowerCase())}`} key={moodboard}>
              <Heart size={14} />
              {moodboard}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
