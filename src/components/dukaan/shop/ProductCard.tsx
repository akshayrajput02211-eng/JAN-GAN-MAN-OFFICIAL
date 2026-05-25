// ========================================
// FILE: src/components/dukaan/shop/ProductCard.tsx
// ========================================

"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({
  product,
  qty,
  addToCart,
  decreaseQty,
}: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        overflow-hidden rounded-[30px]
        border border-white/50
        bg-white/80 shadow-lg
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-slate-900 dark:text-white">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          {product.quantity}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-lg font-black text-[#ea580c]">
              ₹{product.price}
            </p>

            <p className="text-xs text-slate-400 line-through">
              ₹{product.originalPrice}
            </p>
          </div>

          {qty === 0 ? (
            <button
              onClick={() => addToCart(product.id)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full bg-[#ea580c]
                text-white shadow-lg
              "
            >
              <Plus className="h-5 w-5" />
            </button>
          ) : (
            <div
              className="
                flex items-center gap-3
                rounded-full bg-orange-50
                px-3 py-2
              "
            >
              <button onClick={() => decreaseQty(product.id)}>
                <Minus className="h-4 w-4 text-[#ea580c]" />
              </button>

              <span className="font-bold text-[#ea580c]">
                {qty}
              </span>

              <button onClick={() => addToCart(product.id)}>
                <Plus className="h-4 w-4 text-[#ea580c]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}