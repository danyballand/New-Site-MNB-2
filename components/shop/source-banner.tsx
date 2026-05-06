import type { ShopDataResult } from "@/lib/shopify/types";

/**
 * Data-source indicator — used to be a full-width pill banner inside
 * the page flow ("aperçu boutique : selection demo …"). It was both
 * ugly AND dev-only information that didn't belong in a customer
 * layout. The component now renders nothing in every environment ;
 * call sites kept for compatibility (one in product-detail, one in
 * shop-page-sections) but they no longer paint anything.
 *
 * If a dev-only "live vs. mock" hint is ever needed, expose it via
 * the browser DevTools (e.g. a console.log) rather than the layout.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SourceBanner({ result: _result }: { result: ShopDataResult<unknown> }) {
  return null;
}
