// ========================================
// FILE: src/components/dukaan/cart/CartItem.tsx
// ========================================

"use client";

import Image from "next/image";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import { motion } from "framer-motion";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}: any) {
  return (
    <motion.div
      layout
      className="
        flex gap-4

        rounded-[32px]
        border border-white/50

        bg-white/80
        p-4

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-28
          w-28
          overflow-hidden

          rounded-[24px]
          shrink-0
        "
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className="
                text-xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              {item.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {item.shop}
            </p>
          </div>

          <button
            onClick={() =>
              removeItem(item.id)
            }
            className="
              rounded-xl
              p-2

              text-slate-400

              transition-all
              duration-300

              hover:bg-red-50
              hover:text-red-500
            "
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between">
          {/* QUANTITY */}

          <div
            className="
              flex items-center gap-4

              rounded-full
              bg-orange-50

              px-4 py-2
            "
          >
            <button
              onClick={() =>
                decreaseQty(item.id)
              }
            >
              <Minus className="h-4 w-4 text-[#ea580c]" />
            </button>

            <motion.span
              key={item.qty}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="
                min-w-[20px]
                text-center
                font-black
                text-[#ea580c]
              "
            >
              {item.qty}
            </motion.span>

            <button
              onClick={() =>
                increaseQty(item.id)
              }
            >
              <Plus className="h-4 w-4 text-[#ea580c]" />
            </button>
          </div>

          {/* PRICE */}

          <h4
            className="
              text-2xl
              font-black
              text-[#16a34a]
            "
          >
            ₹{item.price * item.qty}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}