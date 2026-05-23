"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import shop1 from "@/assets/dukaan/shop-1.png";

export default function ShopCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-orange-100
        dark:border-slate-700/50
        bg-white
        dark:bg-slate-800
        shadow-[0_12px_40px_rgba(234,88,12,0.08)]
      "
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={shop1}
          alt="shop"
          fill
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              text-xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Sharma Kirana
          </h3>

          <span
            className="
              rounded-full
              border
              border-orange-200
              bg-orange-100
              px-3
              py-1
              text-sm
              font-bold
              text-orange-700
              dark:border-orange-900/40
              dark:bg-orange-950/40
              dark:text-orange-300
            "
          >
            Open
          </span>
        </div>

        {/* Delivery */}
        <p
          className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          20-25 mins delivery
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Min Order
            </p>

            <h4
              className="
                mt-1
                text-2xl
                font-black
                text-orange-700
                dark:text-orange-400
              "
            >
              ₹99
            </h4>
          </div>

          <button
            className="
              h-12
              rounded-full
              bg-gradient-to-r
              from-orange-600
              to-orange-700
              px-6
              font-bold
              text-white
              shadow-lg
              shadow-orange-300/30
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-orange-400/40
              active:scale-[0.98]
            "
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}