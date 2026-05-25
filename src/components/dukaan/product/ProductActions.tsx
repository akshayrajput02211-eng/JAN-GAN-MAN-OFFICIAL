// ========================================
// FILE: src/components/dukaan/product/ProductActions.tsx
// ========================================

"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProductActions() {
  const [qty, setQty] = useState(1);

  return (
    <>
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
        {/* QUANTITY */}
        <div className="flex items-center justify-between">
          <div>
            <h3
              className="
                text-lg
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Quantity
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Product quantity choose karo
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-4

              rounded-full
              bg-orange-50
              px-4
              py-3
            "
          >
            <button
              onClick={() =>
                setQty((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
            >
              <Minus className="h-5 w-5 text-[#ea580c]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.span
                key={qty}
                initial={{
                  y: 8,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -8,
                  opacity: 0,
                }}
                className="
                  w-6
                  text-center
                  text-lg
                  font-black
                  text-[#ea580c]
                "
              >
                {qty}
              </motion.span>
            </AnimatePresence>

            <button
              onClick={() =>
                setQty((prev) => prev + 1)
              }
            >
              <Plus className="h-5 w-5 text-[#ea580c]" />
            </button>
          </div>
        </div>

        {/* DESKTOP BUTTON */}
        <button
          className="
            mt-6
            hidden
            w-full
            items-center
            justify-center
            gap-2

            rounded-[24px]

            bg-[#ea580c]
            px-6
            py-4

            text-lg
            font-black
            text-white

            shadow-lg

            transition-all
            duration-300

            hover:-translate-y-1

            md:flex
          "
        >
          <ShoppingCart className="h-5 w-5" />

          Cart Mein Daalo
        </button>
      </div>

      {/* MOBILE STICKY */}
      <div
        className="
          fixed bottom-0 left-0 z-50
          w-full border-t border-orange-100
          bg-white/95 p-4 backdrop-blur-xl
          dark:border-slate-700
          dark:bg-slate-900/95

          md:hidden
        "
      >
        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2

            rounded-[22px]

            bg-[#ea580c]
            px-6
            py-4

            text-base
            font-black
            text-white

            shadow-xl
          "
        >
          <ShoppingCart className="h-5 w-5" />

          Cart Mein Daalo
        </button>
      </div>
    </>
  );
}