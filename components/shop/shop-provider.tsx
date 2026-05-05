"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ShopImage, ShopMoney } from "@/lib/shopify/types";

export type ShopCartItem = {
  merchandiseId: string;
  productHandle: string;
  productTitle: string;
  variantTitle: string;
  image: ShopImage;
  price: ShopMoney;
  quantity: number;
};

type AddCartItemInput = Omit<ShopCartItem, "quantity"> & {
  quantity?: number;
};

type ShopCartContextValue = {
  items: ShopCartItem[];
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  addItem: (item: AddCartItemInput) => void;
  updateQuantity: (merchandiseId: string, quantity: number) => void;
  removeItem: (merchandiseId: string) => void;
  clearCart: () => void;
  totalQuantity: number;
  subtotal: ShopMoney;
};

const CART_STORAGE_KEY = "mnb-shop-cart-v1";
const ShopCartContext = createContext<ShopCartContextValue | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ShopCartItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(CART_STORAGE_KEY);
        setItems(stored ? (JSON.parse(stored) as ShopCartItem[]) : []);
      } catch {
        setItems([]);
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      try {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        return;
      }
    }
  }, [isHydrated, items]);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const subtotalAmount = items.reduce((total, item) => total + Number(item.price.amount) * item.quantity, 0);
  const currencyCode = items[0]?.price.currencyCode ?? "EUR";

  const value = useMemo<ShopCartContextValue>(
    () => ({
      items,
      isOpen,
      setOpen,
      addItem: (item) => {
        const quantity = item.quantity ?? 1;
        setItems((current) => {
          const existing = current.find((cartItem) => cartItem.merchandiseId === item.merchandiseId);

          if (existing) {
            return current.map((cartItem) =>
              cartItem.merchandiseId === item.merchandiseId
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem,
            );
          }

          return [...current, { ...item, quantity }];
        });
        setOpen(true);
      },
      updateQuantity: (merchandiseId, quantity) => {
        setItems((current) =>
          current
            .map((item) => (item.merchandiseId === merchandiseId ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0),
        );
      },
      removeItem: (merchandiseId) => {
        setItems((current) => current.filter((item) => item.merchandiseId !== merchandiseId));
      },
      clearCart: () => setItems([]),
      totalQuantity,
      subtotal: {
        amount: subtotalAmount.toFixed(2),
        currencyCode,
      },
    }),
    [currencyCode, isOpen, items, subtotalAmount, totalQuantity],
  );

  return <ShopCartContext.Provider value={value}>{children}</ShopCartContext.Provider>;
}

export function useShopCart() {
  const context = useContext(ShopCartContext);

  if (!context) {
    throw new Error("useShopCart must be used inside ShopProvider");
  }

  return context;
}
