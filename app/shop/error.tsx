"use client";

import { RefreshCcw } from "lucide-react";

export default function ShopError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mnb-shop-main">
      <div className="mnb-empty-state">
        <RefreshCcw size={30} />
        <h1>La boutique a besoin d&apos;un rafraichissement.</h1>
        <p>Le module shop est isole: vous pouvez relancer cette vue sans toucher au configurateur.</p>
        <button className="mnb-button mnb-button-primary" onClick={reset} type="button">
          Reessayer
        </button>
      </div>
    </main>
  );
}
