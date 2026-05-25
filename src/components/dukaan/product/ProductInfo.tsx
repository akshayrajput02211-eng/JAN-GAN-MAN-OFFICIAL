// ========================================
// FILE: src/components/dukaan/product/ProductInfo.tsx
// ========================================

"use client";

import {
  BadgePercent,
  Star,
  Store,
} from "lucide-react";

export default function ProductInfo() {
  return (
    <div
      className="
        rounded-[34px]
        border border-white/50
        bg-white/80
        p-6
        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      {/* CATEGORY */}
      <div
        className="
          inline-flex
          items-center
          rounded-full
          bg-orange-50
          px-4
          py-2
          text-sm
          font-semibold
          text-[#ea580c]
        "
      >
        Grocery
      </div>

      {/* TITLE */}
      <h1
        className="
          mt-5
          text-4xl
          font-black
          leading-tight
          text-slate-900
          dark:text-white
        "
      >
        Fresh Organic Potato
      </h1>

      {/* PRICE */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <h2
          className="
            text-4xl
            font-black
            text-[#ea580c]
          "
        >
          ₹40
        </h2>

        <span
          className="
            text-xl
            text-slate-400
            line-through
          "
        >
          ₹60
        </span>

        <div
          className="
            flex
            items-center
            gap-1

            rounded-full
            bg-green-100
            px-3
            py-1

            text-sm
            font-bold
            text-green-700
          "
        >
          <BadgePercent className="h-4 w-4" />

          33% OFF
        </div>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          leading-relaxed
          text-slate-600
          dark:text-slate-300
        "
      >
        Fresh farm organic potatoes with
        natural quality and healthy nutrients.
        Perfect for daily cooking and grocery
        essentials.
      </p>

      {/* SHOP INFO */}
      <div
        className="
          mt-7

          flex
          items-center
          justify-between

          rounded-[28px]
          border
          border-orange-100

          bg-orange-50/70
          p-4

          dark:border-slate-700
          dark:bg-slate-900/40
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              rounded-2xl
              bg-[#ea580c]
              text-white
            "
          >
            <Store className="h-5 w-5" />
          </div>

          <div>
            <h3
              className="
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Sharma Kirana Store
            </h3>

            <div className="mt-1 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm text-slate-500">
                4.8 Rating
              </span>
            </div>
          </div>
        </div>

        <button
          className="
            rounded-2xl
            bg-[#ea580c]
            px-5
            py-3

            text-sm
            font-bold
            text-white

            transition-all
            duration-300

            hover:-translate-y-1
          "
        >
          Dukaan Dekho
        </button>
      </div>
    </div>
  );
}