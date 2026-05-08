'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShopCart } from '@/components/shop/shop-provider';
import { cn } from '@/lib/utils/cn';

/**
 * Identical to the main mynicebracelet.com / mnb-ecommerce header :
 * the New-Site shop is reached via the main site's menu, so the header
 * has to feel continuous with it. External anchors point back to the
 * main domain. Cart count comes from the local Shop provider.
 *
 * What's deliberately NOT here :
 *   - shop categories (Perles / Figurines / Kits) — those belong to
 *     the /shop page content, not the brand-wide menu. The user
 *     reaches a category by scrolling the shop page, not via a
 *     hidden top-bar entry.
 */
const MAIN_HOST = 'https://mynicebracelet.com';
const LOGO_SRC = `${MAIN_HOST}/logo.jpg`;

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Accueil', href: `${MAIN_HOST}/` },
  { label: 'Ateliers', href: 'https://reservation.garcapps.com/mynicebracelet' },
  { label: 'Événements', href: `${MAIN_HOST}/evenements` },
  { label: 'FAQ', href: `${MAIN_HOST}/faq` },
];

export function Header() {
  const pathname = usePathname();
  const { totalQuantity, setOpen } = useShopCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Header transparent only on the home landing (dark hero). Anything
  // under /shop keeps the header solid cream so menu items stay
  // readable on the catalogue background.
  const isTransparent = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const showSolidBg = !isTransparent || isScrolled;
  const cartLabel = `Panier (${totalQuantity})`;

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-[100] transition-all duration-500',
          showSolidBg
            ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4 md:py-6',
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo — back to the main site root */}
          <a href={`${MAIN_HOST}/`} className="flex items-center gap-3 md:gap-4 group">
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-white">
              <Image
                src={LOGO_SRC}
                alt="My Nice Bracelet"
                fill
                sizes="(max-width: 768px) 40px, 56px"
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-base md:text-xl font-serif font-black tracking-tighter leading-none transition-colors',
                  showSolidBg ? 'text-[#2D3748]' : 'text-white',
                )}
              >
                My Nice Bracelet
              </span>
              <span
                className={cn(
                  'text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] mt-1 opacity-70 transition-colors',
                  showSolidBg ? 'text-[#2D3748]' : 'text-white',
                )}
              >
                Boutique parisienne
              </span>
            </div>
          </a>

          {/* Desktop nav + cart */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[10px] font-black uppercase tracking-widest relative py-2 transition-colors',
                  showSolidBg
                    ? 'text-[#2D3748] hover:text-[#3D5A73]'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {item.label}
              </a>
            ))}

            {/* Cart */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={cartLabel}
              className={cn(
                'relative ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
                showSolidBg
                  ? 'text-[#2D3748] hover:bg-[#EEE9E0]'
                  : 'text-white hover:bg-white/10',
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.8} />
              {totalQuantity > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-[#3D5A73] text-white text-[10px] font-black rounded-full flex items-center justify-center tabular-nums px-1 shadow-md">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

          {/* Mobile : cart + burger */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={cartLabel}
              className={cn(
                'relative inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
                showSolidBg ? 'text-[#2D3748]' : 'text-white',
              )}
            >
              <ShoppingBag size={22} strokeWidth={1.8} />
              {totalQuantity > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-[#3D5A73] text-white text-[10px] font-black rounded-full flex items-center justify-center tabular-nums px-1">
                  {totalQuantity}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'p-2 rounded-xl transition-all',
                showSolidBg ? 'text-[#2D3748]' : 'text-white',
              )}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[150] lg:hidden bg-[#2D3748]">
          <div className="flex flex-col h-full items-center justify-center p-8">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              aria-label="Fermer le menu"
            >
              <X size={40} />
            </button>
            <div className="space-y-10 text-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl font-serif font-black text-white uppercase tracking-widest hover:text-[#A8BED4] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-8 py-4 bg-white text-[#2D3748] rounded-xl font-black uppercase tracking-widest text-[11px] shadow-xl"
              >
                Retour à la boutique
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
