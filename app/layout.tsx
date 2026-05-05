import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mynicebracelet.com"),
  title: {
    default: "Boutique My Nice Bracelet | Perles, pierres & figurines",
    template: "%s | My Nice Bracelet",
  },
  description:
    "Boutique de l'atelier My Nice Bracelet: perles, pierres naturelles et figurines kawaii a commander par quantite.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "My Nice Bracelet",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
