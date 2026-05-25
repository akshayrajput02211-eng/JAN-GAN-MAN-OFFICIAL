// ========================================
// FILE: src/components/dukaan/hero/HeroRight.tsx
// ========================================

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        rounded-[36px]
        border
        border-orange-100
        dark:border-slate-700/50
        bg-white
        dark:bg-slate-800
        p-10
        shadow-[0_20px_60px_rgba(234,88,12,0.10)]
        backdrop-blur-xl
      "
    >
      {/* Heading */}
      <h2
        className="
          text-3xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        Dukaan Dhundo,
        <span className="block text-orange-600 dark:text-orange-400">
          Order Karo
        </span>
      </h2>

      {/* Form */}
      <div className="mt-8 space-y-5">
        <input
          placeholder="Location"
          className="
            h-14
            w-full
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50/60
            dark:bg-slate-900
            px-5
            text-slate-800
            dark:text-slate-200
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-300
            focus:border-orange-400
            focus:ring-4
            focus:ring-orange-100
            dark:focus:ring-orange-950/40
          "
        />

        <select
          className="
            h-14
            w-full
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50/60
            dark:bg-slate-900
            px-5
            text-slate-800
            dark:text-slate-200
            outline-none
            transition-all
            duration-300
            focus:border-orange-400
            focus:ring-4
            focus:ring-orange-100
            dark:focus:ring-orange-950/40
          "
        >
          <option>Kirana</option>
          <option>Dawaai</option>
          <option>Sabzi</option>
          <option>Doodh</option>
        </select>

        {/* PRIMARY CTA */}
        <Link href="/dukaan/nearby">
          <button
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-gradient-to-r
              from-orange-600
              to-orange-700

              px-6

              text-lg
              font-black
              text-white

              shadow-lg
              shadow-orange-300/30

              transition-all
              duration-300

              hover:scale-[1.02]
              hover:shadow-orange-400/40
              active:scale-[0.99]
            "
          >
            <ShoppingBag className="h-5 w-5" />

            Dukaan Dhundo

            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>

        {/* SECONDARY CTA */}
        <Link href="/dukaan/product/1">
          <button
            className="
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-2
              mt-5

              rounded-2xl

              border
              border-orange-200
              dark:border-slate-700

              bg-orange-50
              dark:bg-slate-900

              px-6

              text-base
              font-bold

              text-orange-700
              dark:text-orange-400

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-orange-400
            "
          >
            Popular Product Dekho

            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div
          className="
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50
            dark:bg-slate-900
            p-4
            text-center
          "
        >
          <h4 className="text-lg font-black text-orange-700 dark:text-orange-400">
            5 KM
          </h4>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Range
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50
            dark:bg-slate-900
            p-4
            text-center
          "
        >
          <h4 className="text-lg font-black text-orange-700 dark:text-orange-400">
            COD
          </h4>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Payment
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50
            dark:bg-slate-900
            p-4
            text-center
          "
        >
          <h4 className="text-lg font-black text-orange-700 dark:text-orange-400">
            Fast
          </h4>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Delivery
          </p>
        </div>
      </div>
    </motion.div>
  );
}