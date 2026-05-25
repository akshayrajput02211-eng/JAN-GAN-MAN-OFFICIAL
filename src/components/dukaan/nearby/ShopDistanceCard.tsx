// ========================================
// FILE: src/components/dukaan/nearby/ShopDistanceCard.tsx
// ========================================

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

type ShopProps = {
  shop: {
    id: number;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    distance: string;
    open: boolean;
    image: string;
  };
};

export default function ShopDistanceCard({ shop }: ShopProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.25 }}
      className="
        overflow-hidden rounded-[32px]
        border border-white/50
        bg-white/70 shadow-lg
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={shop.image}
          alt={shop.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute left-3 top-3">
          <span
            className="
              rounded-full bg-white/90
              px-3 py-1 text-xs font-bold
              text-[#ea580c] backdrop-blur-md
            "
          >
            {shop.category}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-base font-extrabold text-slate-900 dark:text-white">
            {shop.name}
          </h3>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
              {shop.rating}
            </span>
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            ({shop.reviews} reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="
                rounded-full bg-orange-100
                px-3 py-1 text-xs font-bold
                text-[#ea580c]
              "
            >
              {shop.distance}
            </span>

            <span
              className={`
                rounded-full px-3 py-1 text-xs font-bold
                ${
                  shop.open
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {shop.open ? "Open" : "Closed"}
            </span>
          </div>
        </div>

        <button
          className="
            mt-5 w-full rounded-2xl
            bg-[#ea580c] px-4 py-3
            text-sm font-bold text-white
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          Order Karo
        </button>
      </div>
    </motion.div>
  );
}