"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { ArrowDownUp, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ProductGrid } from "@/components/shop/product-grid";
import type { ShopBadge, ShopProduct } from "@/lib/shopify/types";
import {
  COLOR_GROUPS,
  MATERIAL_OPTIONS,
  SHAPE_OPTIONS,
  SORT_OPTIONS,
  type SortKey,
  applyFilters,
  applySort,
  maxPrice,
} from "@/lib/shop/filters";

/**
 * Interactive shop grid : filter sidebar (desktop) / drawer (mobile),
 * sort dropdown, active filter pills with X-to-remove, "tout effacer"
 * reset, and a live result count.
 *
 * Tout est state local (useState) — pas d'URL params pour rester
 * simple. Si on veut un jour des URLs partageables (?color=rose&
 * sort=price-asc), il suffira de remplacer chaque useState par
 * useSearchParams + router.replace, sans changer le contrat de la UI.
 *
 * Approche couleur / forme / matière : voir `lib/shop/filters.ts`
 * — match par keyword sur `product.tags`.
 */

const BADGE_OPTIONS: ShopBadge[] = [
  "Nouveaute",
  "Best-seller",
  "Selection atelier",
  "Edition limitee",
  "Petit stock",
];

export function ShopFilterableGrid({ products }: { products: ShopProduct[] }) {
  // Borne max du slider = prix max du catalogue (arrondi sup).
  // useMemo pour ne pas recalculer à chaque render — `products` est
  // stable côté serveur (passé en prop).
  const overallMax = useMemo(() => Math.ceil(maxPrice(products)), [products]);

  const [sort, setSort] = useState<SortKey>("relevance");
  const [priceMax, setPriceMax] = useState<number>(overallMax);
  const [selectedBadges, setSelectedBadges] = useState<ShopBadge[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Si la liste de produits change (navigation entre catégories),
  // re-borner le slider sur le nouveau max.
  useEffect(() => {
    setPriceMax(overallMax);
  }, [overallMax]);

  // Close sort menu on outside click
  useEffect(() => {
    if (!sortOpen) return;
    function onClick(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [sortOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

  // useDeferredValue : le slider de prix se déplace en continu pendant
  // le drag. Sans defer, chaque tick → setState → re-filter sur 100
  // produits → re-render 100 cards. React détecte que c'est trop
  // lourd pour 60 FPS et lag. Avec useDeferredValue, l'input reste
  // hyper-réactif (la pastille suit le curseur) et le filtrage se
  // fait quand le CPU est libre — généralement à la fin du drag.
  const deferredPriceMax = useDeferredValue(priceMax);

  const filtered = useMemo(
    () =>
      applyFilters(products, {
        priceMax: deferredPriceMax,
        badges: selectedBadges,
        colors: selectedColors,
        shapes: selectedShapes,
        materials: selectedMaterials,
      }),
    [products, deferredPriceMax, selectedBadges, selectedColors, selectedShapes, selectedMaterials],
  );
  const sorted = useMemo(() => applySort(filtered, sort), [filtered, sort]);

  const activeFilterCount =
    selectedBadges.length +
    selectedColors.length +
    selectedShapes.length +
    selectedMaterials.length +
    (priceMax < overallMax ? 1 : 0);

  function toggle<T>(list: T[], v: T, setter: (l: T[]) => void) {
    if (list.includes(v)) setter(list.filter((x) => x !== v));
    else setter([...list, v]);
  }

  function clearAll() {
    setPriceMax(overallMax);
    setSelectedBadges([]);
    setSelectedColors([]);
    setSelectedShapes([]);
    setSelectedMaterials([]);
  }

  // Le contenu des filtres est rendu DEUX FOIS : une fois dans la
  // sidebar desktop, une fois dans le drawer mobile. Extrait en
  // fragment pour éviter la duplication. Comme c'est rendu deux fois
  // dans la même page, les inputs doivent avoir des ids/keys
  // disjoints — d'où le `idScope` prop (les checkboxes ont chacune
  // leur scope id pour éviter conflits d'accessibility).
  const renderFilters = (idScope: "desktop" | "drawer") => (
    <>
      <div className="mnb-filter-section">
        <h3>Prix</h3>
        <div className="mnb-filter-price">
          <input
            type="range"
            min="0"
            max={overallMax}
            step="0.5"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            aria-label="Prix maximum"
          />
          <div className="mnb-filter-price-values">
            <span>0 €</span>
            <span>
              {priceMax.toFixed(2).replace(".", ",")} € max
            </span>
          </div>
        </div>
      </div>

      <div className="mnb-filter-section">
        <h3>Badges</h3>
        <div className="mnb-filter-chips">
          {BADGE_OPTIONS.map((b) => (
            <button
              key={b}
              type="button"
              className={selectedBadges.includes(b) ? "is-active" : ""}
              onClick={() => toggle(selectedBadges, b, setSelectedBadges)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="mnb-filter-section">
        <h3>Couleur</h3>
        <div className="mnb-filter-swatches">
          {COLOR_GROUPS.map((c) => (
            <button
              key={c.key}
              type="button"
              aria-label={c.label}
              aria-pressed={selectedColors.includes(c.key)}
              title={c.label}
              className={selectedColors.includes(c.key) ? "is-active" : ""}
              style={{ background: c.hex }}
              onClick={() => toggle(selectedColors, c.key, setSelectedColors)}
            />
          ))}
        </div>
      </div>

      <div className="mnb-filter-section">
        <h3>Forme</h3>
        <div className="mnb-filter-checks">
          {SHAPE_OPTIONS.map((s) => (
            <label key={s.key} htmlFor={`${idScope}-shape-${s.key}`}>
              <input
                id={`${idScope}-shape-${s.key}`}
                type="checkbox"
                checked={selectedShapes.includes(s.key)}
                onChange={() => toggle(selectedShapes, s.key, setSelectedShapes)}
              />
              <span>{s.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mnb-filter-section">
        <h3>Matière</h3>
        <div className="mnb-filter-checks">
          {MATERIAL_OPTIONS.map((m) => (
            <label key={m.key} htmlFor={`${idScope}-mat-${m.key}`}>
              <input
                id={`${idScope}-mat-${m.key}`}
                type="checkbox"
                checked={selectedMaterials.includes(m.key)}
                onChange={() => toggle(selectedMaterials, m.key, setSelectedMaterials)}
              />
              <span>{m.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="mnb-shop-controls">
      {/* ─── Toolbar : filter btn (mobile) + count + sort ─── */}
      <div className="mnb-shop-toolbar">
        <button
          type="button"
          className="mnb-toolbar-filter-btn"
          onClick={() => setDrawerOpen(true)}
        >
          <SlidersHorizontal size={16} />
          <span>Filtres</span>
          {activeFilterCount > 0 && <span className="mnb-toolbar-badge">{activeFilterCount}</span>}
        </button>

        <span className="mnb-toolbar-count">
          {sorted.length} produit{sorted.length > 1 ? "s" : ""}
        </span>

        <div className="mnb-sort-dropdown" ref={sortRef}>
          <button
            type="button"
            className="mnb-sort-btn"
            onClick={() => setSortOpen((v) => !v)}
            aria-expanded={sortOpen}
            aria-haspopup="menu"
          >
            <ArrowDownUp size={14} />
            <span>Tri : {SORT_OPTIONS.find((o) => o.key === sort)?.label}</span>
            <ChevronDown size={14} className={sortOpen ? "is-open" : ""} />
          </button>
          {sortOpen && (
            <div className="mnb-sort-menu" role="menu">
              {SORT_OPTIONS.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  role="menuitemradio"
                  aria-checked={sort === o.key}
                  className={sort === o.key ? "is-active" : ""}
                  onClick={() => {
                    setSort(o.key);
                    setSortOpen(false);
                  }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ─── Active filter pills ─── */}
      {activeFilterCount > 0 && (
        <div className="mnb-active-filters">
          {selectedBadges.map((b) => (
            <button
              key={`badge-${b}`}
              type="button"
              onClick={() => toggle(selectedBadges, b, setSelectedBadges)}
            >
              {b} <X size={11} />
            </button>
          ))}
          {selectedColors.map((c) => {
            const color = COLOR_GROUPS.find((cc) => cc.key === c);
            return (
              <button
                key={`color-${c}`}
                type="button"
                onClick={() => toggle(selectedColors, c, setSelectedColors)}
              >
                <span className="mnb-active-swatch" style={{ background: color?.hex }} />
                {color?.label} <X size={11} />
              </button>
            );
          })}
          {selectedShapes.map((s) => {
            const sh = SHAPE_OPTIONS.find((ss) => ss.key === s);
            return (
              <button
                key={`shape-${s}`}
                type="button"
                onClick={() => toggle(selectedShapes, s, setSelectedShapes)}
              >
                {sh?.label} <X size={11} />
              </button>
            );
          })}
          {selectedMaterials.map((m) => {
            const mat = MATERIAL_OPTIONS.find((mm) => mm.key === m);
            return (
              <button
                key={`mat-${m}`}
                type="button"
                onClick={() => toggle(selectedMaterials, m, setSelectedMaterials)}
              >
                {mat?.label} <X size={11} />
              </button>
            );
          })}
          {priceMax < overallMax && (
            <button type="button" onClick={() => setPriceMax(overallMax)}>
              Max {priceMax.toFixed(2).replace(".", ",")} € <X size={11} />
            </button>
          )}
          <button type="button" className="mnb-clear-all" onClick={clearAll}>
            Tout effacer
          </button>
        </div>
      )}

      <div className="mnb-shop-layout">
        {/* ─── Desktop sidebar ─── */}
        <aside className="mnb-shop-sidebar" aria-label="Filtres produits">
          {renderFilters("desktop")}
        </aside>

        {/* ─── Grid ─── */}
        <div className="mnb-shop-grid-wrap">
          <ProductGrid products={sorted} />
        </div>
      </div>

      {/* ─── Mobile drawer ─── */}
      {drawerOpen && (
        <div
          className="mnb-shop-drawer-backdrop"
          onClick={() => setDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Filtres"
        >
          <div className="mnb-shop-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mnb-shop-drawer-head">
              <h2>Filtres</h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Fermer les filtres"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mnb-shop-drawer-body">{renderFilters("drawer")}</div>
            <div className="mnb-shop-drawer-foot">
              <button type="button" onClick={clearAll}>
                Tout effacer
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => setDrawerOpen(false)}
              >
                Voir {sorted.length} résultat{sorted.length > 1 ? "s" : ""}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
