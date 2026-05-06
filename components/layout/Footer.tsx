import Image from 'next/image';
import Link from 'next/link';
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Same layout as the Classique mnb-ecommerce footer — dark slate
 * background, brand block + nav + contact in three columns, legal
 * links along the bottom. FR-only copy (no i18n layer in New-Site).
 *
 * External anchors point back to the main mynicebracelet.com domain
 * so the footer stays continuous with the rest of the brand presence.
 */
const MAIN_HOST = 'https://mynicebracelet.com';
const LOGO_SRC = `${MAIN_HOST}/logo.jpg`;

const NAV_LINKS: { href: string; label: string }[] = [
  { href: `${MAIN_HOST}/`, label: 'Accueil' },
  { href: '/shop', label: 'Boutique' },
  { href: `${MAIN_HOST}/kits`, label: 'Kits prêts à monter' },
  { href: `${MAIN_HOST}/creer`, label: 'Configurateur' },
];

export function Footer() {
  return (
    <footer className="bg-[#2D3748] text-[#F5F0E8] pt-16 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative w-16 h-16 rounded-[1.2rem] overflow-hidden shadow-2xl bg-white">
              <Image
                src={LOGO_SRC}
                alt="My Nice Bracelet"
                fill
                sizes="64px"
                className="object-cover"
                unoptimized
              />
            </div>
            <h2 className="text-2xl font-serif font-black tracking-tighter uppercase leading-none text-white">
              my nice bracelet
            </h2>
            <p className="text-[#D6E0EC] text-sm italic leading-relaxed font-medium text-center md:text-left">
              Bracelets parisiens cousus main, pierres semi-précieuses et figurines kawaii.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B0C2D3] mb-2">
              Navigation
            </h3>
            {NAV_LINKS.map((link) =>
              link.href.startsWith('http') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#D6E0EC] hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#D6E0EC] hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B0C2D3] mb-2">
              Contact
            </h3>
            <div className="flex items-center gap-3 text-[#D6E0EC] text-sm">
              <MapPin size={16} /> 3 Rue du Général Lanrezac, 75017 Paris
            </div>
            <div className="flex items-center gap-3 text-[#D6E0EC] text-sm">
              <Clock size={16} /> Ouvert toute la semaine
            </div>
            <a
              href="tel:+33170233108"
              className="flex items-center gap-3 text-[#D6E0EC] hover:text-white text-sm transition-colors"
            >
              <Phone size={16} /> 01.70.23.31.08
            </a>
            <a
              href="tel:+33768247400"
              className="flex items-center gap-3 text-[#D6E0EC] hover:text-white text-sm transition-colors"
            >
              <Phone size={16} /> 07.68.24.74.00
            </a>
            <a
              href="mailto:contact@mynicebracelet.com"
              className="flex items-center gap-3 text-[#D6E0EC] hover:text-white text-sm transition-colors"
            >
              <Mail size={16} /> contact@mynicebracelet.com
            </a>
            <a
              href="https://instagram.com/mynicebracelet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#D6E0EC] hover:text-white text-sm transition-colors mt-2"
            >
              <Instagram size={16} /> @mynicebracelet
            </a>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col items-center gap-3 md:flex-row md:justify-between text-[#C6D5E4] text-[7px] sm:text-[8px] md:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em]">
          <span className="text-center">
            &copy; {new Date().getFullYear()} My Nice Bracelet. Tous droits réservés.
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6">
            <a
              href={`${MAIN_HOST}/mentions-legales`}
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </a>
            <a
              href={`${MAIN_HOST}/politique-confidentialite`}
              className="hover:text-white transition-colors"
            >
              Confidentialité
            </a>
            <a href={`${MAIN_HOST}/cgv`} className="hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
