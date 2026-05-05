import { AlertCircle, CheckCircle2 } from "lucide-react";
import type { ShopDataResult } from "@/lib/shopify/types";

export function SourceBanner({ result }: { result: ShopDataResult<unknown> }) {
  if (result.source === "shopify" && !result.error) {
    return (
      <div className="mnb-source-banner is-live">
        <CheckCircle2 size={16} />
        Catalogue de l&apos;atelier connecte.
      </div>
    );
  }

  return (
    <div className="mnb-source-banner">
      <AlertCircle size={16} />
      {result.configured && result.error
        ? "La selection live est indisponible pour le moment: apercu boutique affiche."
        : "Apercu boutique: selection demo en attendant le catalogue reel."}
    </div>
  );
}
