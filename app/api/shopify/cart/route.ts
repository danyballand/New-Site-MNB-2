import { NextResponse } from "next/server";
import { createShopifyCheckout } from "@/lib/shopify/client";
import type { ShopifyCartLineInput } from "@/lib/shopify/types";

type CartRequestBody = {
  lines?: ShopifyCartLineInput[];
};

export async function POST(request: Request) {
  let body: CartRequestBody;

  try {
    body = (await request.json()) as CartRequestBody;
  } catch {
    return NextResponse.json({ error: "Panier invalide." }, { status: 400 });
  }

  const lines = body.lines?.filter((line) => line.merchandiseId && line.quantity > 0) ?? [];

  if (lines.length === 0) {
    return NextResponse.json({ error: "Panier vide." }, { status: 400 });
  }

  if (lines.some((line) => line.merchandiseId.startsWith("mock-"))) {
    return NextResponse.json(
      {
        error:
          "Ces produits sont des exemples. La commande pourra etre finalisee des que le catalogue reel sera connecte.",
      },
      { status: 409 },
    );
  }

  try {
    const cart = await createShopifyCheckout(lines);

    return NextResponse.json({
      checkoutUrl: cart.checkoutUrl,
      cartId: cart.id,
      totalQuantity: cart.totalQuantity,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Paiement indisponible pour le moment.",
      },
      { status: 502 },
    );
  }
}
