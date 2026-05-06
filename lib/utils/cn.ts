/**
 * Minimal class-name joiner. Filters out falsy values so callers can
 * write `cn("base", isActive && "active")` without a ternary.
 *
 * No `tailwind-merge` here — the New-Site shop pages don't have the
 * conflicting-utility problem at scale. If we ever need it, swap this
 * helper for a `tailwind-merge`-backed one and the call sites stay
 * unchanged.
 */
export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}
