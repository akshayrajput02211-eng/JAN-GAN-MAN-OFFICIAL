// ========================================
// FILE: src/components/dukaan/shop/ShopInfo.tsx
// ========================================

"use client";

import {
  Clock3,
  Star,
  Truck,
  ShieldCheck,
  Wallet,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ShopInfo() {
  return (
    <section className="mx-auto -mt-10 max-w-7xl px-4 md:px-6 relative z-20">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          overflow-hidden
          rounded-[36px]

          border
          border-white/50

          bg-white/80
          dark:bg-slate-800/80

          shadow-[0_20px_60px_rgba(15,23,42,0.12)]
          backdrop-blur-2xl
        "
      >
        {/* TOP INFO */}
        <div
          className="
            grid
            grid-cols-2
            gap-4

            border-b
            border-orange-100
            p-5

            md:grid-cols-4
            dark:border-slate-700
          "
        >
          {/* Rating */}
          <div
            className="
              rounded-[24px]
              bg-orange-50
              p-4
              dark:bg-slate-700/60
            "
          >
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

              <span
                className="
                  text-lg
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                4.8
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
              2.1k Reviews
            </p>
          </div>

          {/* Timing */}
          <div
            className="
              rounded-[24px]
              bg-orange-50
              p-4
              dark:bg-slate-700/60
            "
          >
            <div className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-[#ea580c]" />

              <span
                className="
                  text-sm
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Open Now
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
              9:00 AM - 9:00 PM
            </p>
          </div>

          {/* Delivery */}
          <div
            className="
              rounded-[24px]
              bg-orange-50
              p-4
              dark:bg-slate-700/60
            "
          >
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-[#ea580c]" />

              <span
                className="
                  text-sm
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Delivery
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
              20-25 mins
            </p>
          </div>

          {/* Trusted */}
          <div
            className="
              rounded-[24px]
              bg-orange-50
              p-4
              dark:bg-slate-700/60
            "
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#ea580c]" />

              <span
                className="
                  text-sm
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                Trusted
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
              Verified Store
            </p>
          </div>
        </div>

        {/* EXTRA INFO */}
        <div
          className="
            grid
            gap-4
            p-5

            md:grid-cols-2
          "
        >
          {/* Payment */}
          <div
            className="
              rounded-[28px]
              border
              border-orange-100

              bg-gradient-to-br
              from-orange-50
              to-white

              p-5

              dark:border-slate-700
              dark:from-slate-800
              dark:to-slate-900
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
                <Wallet className="h-5 w-5" />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  Payment Options
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-300">
                  UPI, Cash, Wallet & Cards
                </p>
              </div>
            </div>
          </div>

          {/* Quality */}
          <div
            className="
              rounded-[28px]
              border
              border-orange-100

              bg-gradient-to-br
              from-orange-50
              to-white

              p-5

              dark:border-slate-700
              dark:from-slate-800
              dark:to-slate-900
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
                <BadgeCheck className="h-5 w-5" />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  Fresh Quality
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Daily fresh products available
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}