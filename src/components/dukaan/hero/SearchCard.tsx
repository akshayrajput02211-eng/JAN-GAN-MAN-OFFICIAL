"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Search,
  Store,
} from "lucide-react";

export default function SearchCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        w-full
        rounded-[36px]
        border
        border-orange-100
        dark:border-slate-700/50
        bg-white
        dark:bg-slate-800
        p-6
        shadow-[0_20px_60px_rgba(234,88,12,0.10)]
        backdrop-blur-xl
      "
    >
      {/* Header */}
      <div>
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
          Nearby Dukaan
          <span className="block text-orange-600 dark:text-orange-400">
            Search Karo
          </span>
        </h2>

        <p
          className="
            mt-3
            text-base
            leading-relaxed
            text-slate-600
            dark:text-slate-300
          "
        >
          Apne area ki trusted local dukaan ko
          instantly discover karo.
        </p>
      </div>

      {/* Search Inputs */}
      <div className="mt-8 space-y-5">
        {/* Location */}
        <div
          className="
            flex items-center gap-3
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50/70
            dark:bg-slate-900
            px-5
            h-14
          "
        >
          <MapPin
            size={20}
            className="text-orange-600 dark:text-orange-400"
          />

          <input
            type="text"
            placeholder="Enter your location"
            className="
              w-full
              bg-transparent
              text-slate-800
              dark:text-slate-200
              placeholder:text-slate-400
              outline-none
            "
          />
        </div>

        {/* Category */}
        <div
          className="
            flex items-center gap-3
            rounded-2xl
            border
            border-orange-100
            dark:border-slate-700/50
            bg-orange-50/70
            dark:bg-slate-900
            px-5
            h-14
          "
        >
          <Store
            size={20}
            className="text-orange-600 dark:text-orange-400"
          />

          <select
            className="
              w-full
              bg-transparent
              text-slate-800
              dark:text-slate-200
              outline-none
            "
          >
            <option>Kirana Store</option>
            <option>Dawaai Shop</option>
            <option>Sabzi Market</option>
            <option>Dairy Store</option>
            <option>Bakery</option>
          </select>
        </div>

        {/* Button */}
        <button
          className="
            flex h-14 w-full items-center justify-center gap-2
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
            hover:scale-[1.01]
            hover:shadow-orange-400/40
            active:scale-[0.99]
          "
        >
          <Search size={20} />

          Search Dukaan
        </button>
      </div>

      {/* Bottom Stats */}
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
            120+
          </h4>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Shops
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
            15 Min
          </h4>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Delivery
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
      </div>
    </motion.div>
  );
}