// ========================================
// FILE: src/components/dukaan/post-shop/PostShopHeader.tsx
// ========================================

"use client";

import { Store } from "lucide-react";

export default function PostShopHeader() {
  return (
    <div
      className="
        rounded-[36px]
        border border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-800

        p-6

        shadow-lg
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex h-16 w-16 items-center justify-center

            rounded-3xl

            bg-orange-100
            dark:bg-orange-950/40
          "
        >
          <Store className="h-8 w-8 text-orange-600" />
        </div>

        <div>
          <h1
            className="
              text-4xl
              font-black
              text-orange-500
              dark:text-white
            "
          >
            Jan Gan Man 
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Rular super App for India
          </p>
        </div>
      </div>
    </div>
  );
}