// ========================================
// FILE: src/components/dukaan/cart/DeliveryAddress.tsx
// ========================================

"use client";

import {
  Clock3,
  MapPin,
} from "lucide-react";

export default function DeliveryAddress() {
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
      <div className="flex items-start justify-between gap-5">
        <div className="flex gap-4">
          <div
            className="
              flex h-14 w-14 items-center justify-center

              rounded-2xl

              bg-[#16a34a]
              text-white
            "
          >
            <MapPin className="h-6 w-6" />
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
              Delivery Address
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Shivaji Nagar, Delhi,
              India - 110001
            </p>

            <div className="mt-4 flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#16a34a]" />

              <span className="text-sm font-semibold text-[#16a34a]">
                Estimated Delivery:
                20-25 min
              </span>
            </div>
          </div>
        </div>

        <button
          className="
            rounded-2xl

            border border-[#16a34a]

            px-5 py-3

            text-sm
            font-bold

            text-[#16a34a]

            transition-all
            duration-300

            hover:bg-[#16a34a]
            hover:text-white
          "
        >
          Change
        </button>
      </div>
    </div>
  );
}