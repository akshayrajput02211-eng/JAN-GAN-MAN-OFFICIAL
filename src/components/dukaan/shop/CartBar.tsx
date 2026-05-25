// ========================================
// FILE: src/components/dukaan/shop/CartBar.tsx
// ========================================

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function CartBar({
  items,
  total,
}: {
  items: number;
  total: number;
}) {
  return (
    <AnimatePresence>
      {items > 0 && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="
            fixed bottom-5 left-1/2 z-50
            w-[calc(100%-24px)] max-w-xl
            -translate-x-1/2
          "
        >
          <div
            className="
              flex items-center justify-between
              rounded-[30px]
              bg-[#ea580c]
              px-5 py-4
              text-white shadow-2xl
            "
          >
            <div>
              <p className="text-sm font-medium">
                {items} items
              </p>

              <h3 className="text-xl font-black">
                ₹{total}
              </h3>
            </div>

            <button
              className="
                flex items-center gap-2
                rounded-2xl bg-white/20
                px-5 py-3 font-bold
                backdrop-blur-xl
              "
            >
              <ShoppingBag className="h-5 w-5" />
              Cart Dekho
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}