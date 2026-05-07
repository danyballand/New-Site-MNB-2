'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ShopImage } from '@/lib/shopify/types';
import { cn } from '@/lib/utils/cn';

interface ProductGalleryLightboxProps {
  images: ShopImage[];
}

/**
 * Product gallery + lightbox. Renders the existing static thumbnail
 * stack (same `.mnb-product-gallery` layout) but each thumbnail is
 * now a button that opens a fullscreen modal with :
 *   - Prev / Next navigation (arrow buttons + keyboard ←/→)
 *   - Click to toggle zoom 1× ↔ 2× (centered on the cursor)
 *   - Wheel to zoom 1× → 4× continuously
 *   - Drag to pan when zoomed
 *   - Thumbnail strip at the bottom for direct jump
 *   - ESC / backdrop click / X button to close
 */
export function ProductGalleryLightbox({ images }: ProductGalleryLightboxProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="mnb-product-gallery">
        {images.map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            type="button"
            onClick={() => setOpenIdx(index)}
            aria-label={`Agrandir ${image.altText || `image ${index + 1}`}`}
            // No background / border : keep the visual identical to
            // the previous bare-<Image> layout. The button is just
            // the click target.
            className="block w-full cursor-zoom-in border-0 bg-transparent p-0 m-0 [&>img]:transition-transform [&:hover>img]:scale-[1.01]"
          >
            <Image
              className={[
                index === 0 ? 'is-featured' : '',
                image.url.startsWith('/shop/products/') ? 'is-product-asset' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              src={image.url}
              alt={image.altText}
              width={image.width ?? 1200}
              height={image.height ?? 1500}
              priority={index === 0}
              sizes={index === 0 ? '(max-width: 980px) 100vw, 58vw' : '(max-width: 980px) 50vw, 28vw'}
              // Bypass /_next/image — les photos produit JPEG (~25 KB
              // chacune après normalize_minidoll) sont déjà tight, et
              // l'absence de cache de transformation évite les images
              // périmées après un re-traitement disque.
              unoptimized
            />
          </button>
        ))}
      </div>

      {openIdx !== null && (
        <Lightbox
          images={images}
          startIdx={openIdx}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Lightbox modal
─────────────────────────────────────────────────────────────────── */

function Lightbox({
  images,
  startIdx,
  onClose,
}: {
  images: ShopImage[];
  startIdx: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIdx);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; offsetX: number; offsetY: number } | null>(null);

  const current = images[idx];

  const goPrev = useCallback(() => {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

  // Reset zoom + pan whenever the active image changes : a fresh
  // image always opens at fit-to-screen, no carry-over from the
  // previous slide.
  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [idx]);

  // Body scroll lock so the page underneath doesn't move when the
  // user wheels/zooms inside the modal.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Keyboard navigation : ESC closes, ←/→ navigate. No focus trap
  // for now — the modal grabs the visible focus and the body is
  // scroll-locked, which is enough for a non-form interaction.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'ArrowRight') {
        goNext();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext, onClose]);

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    // Don't preventDefault here — would require a non-passive
    // listener. Instead React's passive wheel still updates state,
    // and the page can't scroll because body overflow is locked.
    const delta = -e.deltaY * 0.0025;
    setScale((s) => {
      const next = Math.max(1, Math.min(4, s + delta));
      // Snap back to centered when fully zoomed out.
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  }

  function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {
    e.stopPropagation();
    if (scale > 1) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
      return;
    }
    // Zoom to 2× centered on the cursor : translate so the cursor
    // point ends up at the same screen position after the scale.
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    setScale(2);
    // The translate compensates for the scale to keep the cursor
    // pointing at the same content pixel.
    setOffset({ x: -cx, y: -cy });
  }

  // Drag-to-pan when zoomed in. We use pointer events for one code
  // path that handles mouse + touch.
  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (scale <= 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
    };
  }
  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    setOffset({
      x: drag.offsetX + (e.clientX - drag.startX),
      y: drag.offsetY + (e.clientY - drag.startY),
    });
  }
  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    dragRef.current = null;
  }

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galerie produit — image ${idx + 1} sur ${images.length}`}
      className="fixed inset-0 z-[200] flex flex-col bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Header : counter + close */}
      <div
        className="flex items-center justify-between px-4 py-3 text-white/90"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[12px] font-black uppercase tracking-widest tabular-nums">
          {idx + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la galerie"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <X size={22} strokeWidth={1.8} />
        </button>
      </div>

      {/* Main image area */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        {/* Prev */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Image précédente"
            className="absolute left-3 md:left-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={28} strokeWidth={1.8} />
          </button>
        )}

        {/* Image + zoom/pan area. The wrapping div catches the pan
            pointer events ; the <img> handles click-to-zoom. */}
        <div
          className="flex h-full w-full items-center justify-center px-12 md:px-20 py-6"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: scale > 1 ? 'none' : 'auto' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.url}
            alt={current.altText}
            draggable={false}
            onClick={handleImageClick}
            className={cn(
              'max-h-full max-w-full select-none transition-transform duration-150 ease-out',
              scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in',
            )}
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </div>

        {/* Next */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Image suivante"
            className="absolute right-3 md:right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={28} strokeWidth={1.8} />
          </button>
        )}
      </div>

      {/* Thumbnail strip : direct jump to any image. Hidden when
          the product only has a single image (no need for a nav
          bar with one thumbnail). */}
      {images.length > 1 && (
        <div
          className="flex gap-2 overflow-x-auto px-4 py-3 justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={`${img.url}-${i}`}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Aller à l'image ${i + 1}`}
              aria-current={i === idx}
              className={cn(
                'relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all',
                i === idx
                  ? 'border-white opacity-100 scale-100'
                  : 'border-transparent opacity-50 hover:opacity-100',
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt=""
                className="h-full w-full object-contain"
                draggable={false}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
