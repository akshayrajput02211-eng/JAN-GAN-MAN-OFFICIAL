// ========================================
// FILE: src/data/dukaan/navItems.ts
// ========================================

import {
  Home,
  Store,
  ShoppingCart,
  CirclePlus,
  MessageCircle,
} from "lucide-react";

export const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },

  {
    icon: Store,
    label: "Nearby",
    href: "/dukaan/nearby",
  },

  // POST SHOP CTA
  {
    icon: CirclePlus,
    label: "Post",
    href: "/dukaan/post-shop",
    cta: true,
  },

  // CART
  {
    icon: ShoppingCart,
    label: "Cart",
    href: "/dukaan/cart",
  },

  {
    icon: MessageCircle,
    label: "Chat",
    href: "/messages",
  },
];