// ========================================
// FILE: src/components/dukaan/track/DeliveryCard.tsx
// ========================================

"use client";

import Image from "next/image";

import {
  Phone,
  ShoppingBag,
} from "lucide-react";

export default function DeliveryCard() {
  return (
    <div className="space-y-6">
      {/* DELIVERY PARTNER */}

      <div
        className="
          rounded-[36px]
          border border-white/50

          bg-white/80
          p-6

          shadow-lg
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-slate-800/70
        "
      >
        <h2
          className="
            text-2xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Delivery Partner
        </h2>

        <div className="mt-6 flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="
                relative
                h-16
                w-16
                overflow-hidden

                rounded-full
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                alt="delivery"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3
                className="
                  text-xl
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Rahul Kumar
              </h3>

              <p className="mt-1 text-slate-500 dark:text-slate-400">
                +91 98765 43210
              </p>
            </div>
          </div>

          <button
            className="
              flex items-center gap-2

              rounded-2xl

              bg-[#16a34a]
              px-5 py-3

              font-bold
              text-white

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            <Phone className="h-5 w-5" />

            Call Karo
          </button>
        </div>
      </div>

      {/* ORDER DETAILS */}

      <div
        className="
          rounded-[36px]
          border border-white/50

          bg-white/80
          p-6

          shadow-lg
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-slate-800/70
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-12 w-12 items-center justify-center

              rounded-2xl

              bg-orange-100
              text-orange-600
            "
          >
            <ShoppingBag className="h-5 w-5" />
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Order Details
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              3 Items Ordered
            </p>
          </div>
        </div>

        {/* ITEMS */}

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-300">
              Tomato × 2
            </span>

            <span className="font-bold text-slate-900 dark:text-white">
              ₹80
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-300">
              Potato × 1
            </span>

            <span className="font-bold text-slate-900 dark:text-white">
              ₹40
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-300">
              Milk × 1
            </span>

            <span className="font-bold text-slate-900 dark:text-white">
              ₹35
            </span>
          </div>
        </div>

        {/* TOTAL */}

        <div className="mt-6 border-t border-dashed border-slate-200 pt-5 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span
              className="
                text-xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Total Amount
            </span>

            <span
              className="
                text-3xl
                font-black
                text-[#16a34a]
              "
            >
              ₹155
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}