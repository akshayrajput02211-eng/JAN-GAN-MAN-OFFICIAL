// ========================================
// FILE: src/components/dukaan/cart/CartHeader.tsx
// ========================================

"use client";

import { ShoppingBag } from "lucide-react";

export default function CartHeader() {
  return (
    <div
      className="
        flex items-center justify-between

        rounded-[34px]
        border border-white/50

        bg-white/80
        px-6 py-5

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      <div>
        <h1
          className="
            text-4xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Mera Cart
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Aapke selected products
        </p>
      </div>

      <div
        className="
          flex items-center gap-2

          rounded-full

          bg-[#16a34a]
          px-5 py-3

          text-white
        "
      >
        <ShoppingBag className="h-5 w-5" />

        <span className="font-bold">
          3 Items
        </span>
      </div>
    </div>
  );
}