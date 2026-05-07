'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/cn';

/**
 * Thin client-side wrapper around Google's `<model-viewer>` web
 * component. The library auto-registers the custom element on import,
 * but the import has to happen client-side (it touches `window`),
 * hence `'use client'` + a `useEffect` dynamic import.
 *
 * Two usage modes :
 *   - Single model    : pass `src` (legacy / simple case).
 *   - Multiple models : pass `models={[{ src, label }, …]}` and a small
 *                       pill switcher renders at the bottom.
 *
 * We intentionally don't pass props through TypeScript JSX typing —
 * the custom-element attributes are forwarded as-is via
 * `dangerouslySetInnerHTML` of an inline element. Cleaner than
 * declaring global JSX intrinsic elements just for this one use.
 */
interface ModelEntry {
  src: string;
  label: string;
}

interface HeroModelViewerProps {
  /** Single model URL (kept for back-compat with one-model callsites). */
  src?: string;
  /** Multi-model picker — when 2+ entries are passed, a switcher renders. */
  models?: ModelEntry[];
  alt?: string;
  className?: string;
}

export function HeroModelViewer({ src, models, alt = '', className }: HeroModelViewerProps) {
  // Normalize to a list internally : if a caller passes only `src`
  // we wrap it as a one-entry array. The picker is only shown when
  // `entries.length > 1`.
  const entries: ModelEntry[] = models && models.length > 0 ? models : src ? [{ src, label: '1' }] : [];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Side-effect import : registers <model-viewer> with the custom
    // elements registry the first time the component mounts. Idempotent
    // — the library guards against double-registration.
    import('@google/model-viewer').catch(() => {
      // Swallow load errors so a network blip on a CDN doesn't crash
      // the whole hero. The fallback is "no 3D" which is acceptable.
    });
  }, []);

  if (entries.length === 0) return null;

  const active = entries[Math.min(activeIdx, entries.length - 1)]!;

  // Hand-rolled HTML so we don't have to declare a global JSX
  // intrinsic for `<model-viewer>`. The element is recognised at
  // runtime once the import above runs.
  // The `key`-style swap is achieved by re-rendering the inner HTML
  // when `active.src` changes — model-viewer reloads automatically
  // when its `src` attribute changes.
  const modelViewerMarkup = `
    <model-viewer
      src="${active.src}"
      alt="${alt.replace(/"/g, '&quot;')}"
      camera-controls
      auto-rotate
      auto-rotate-delay="500"
      rotation-per-second="20deg"
      interaction-prompt="none"
      shadow-intensity="0.6"
      shadow-softness="0.9"
      exposure="1.05"
      environment-image="neutral"
      style="width:100%;height:100%;background:transparent;--poster-color:transparent;"
    ></model-viewer>
  `;

  return (
    // Outer div keeps whatever sizing/position the caller asked for
    // (typically `absolute inset-0` to fill a hero column). We do NOT
    // mix `relative` on the same element — Tailwind's `relative` and
    // `absolute` utilities collide (both define `position`) and the
    // wrapper would collapse to zero size, dragging the pill switcher
    // to a random spot on the page.
    <div className={className}>
      {/* Inner positioning context — relative so the absolute children
          (model viewer + switcher) anchor inside this box. */}
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0"
          // The wrapper carries layout sizing ; the inline web
          // component fills it. `dangerouslySetInnerHTML` is safe here
          // because `src`/`alt` are interpolated literals from props,
          // not raw user input.
          dangerouslySetInnerHTML={{ __html: modelViewerMarkup }}
        />

        {entries.length > 1 && (
          // Pill switcher : floats at the bottom of the viewer, sits
          // above the model thanks to z-10 so click events land on the
          // pills, not on the canvas.
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 rounded-full bg-white/85 backdrop-blur-sm px-1.5 py-1 shadow-md ring-1 ring-black/5">
            {entries.map((entry, i) => {
              const selected = i === activeIdx;
              return (
                <button
                  key={entry.src}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  aria-pressed={selected}
                  aria-label={`Afficher modèle ${entry.label}`}
                  className={cn(
                    'min-w-[32px] px-3 h-7 rounded-full text-[11px] font-black uppercase tracking-wider transition-colors',
                    selected
                      ? 'bg-[#3D5A73] text-white shadow-sm'
                      : 'text-[#2D3748] hover:bg-black/5',
                  )}
                >
                  {entry.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
