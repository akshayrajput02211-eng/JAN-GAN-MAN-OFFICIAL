// ========================================
// FILE: src/components/dukaan/nearby/CategoryFilter.tsx
// ========================================

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Sabhi",
  "Kirana",
  "Sabzi",
  "Dairy",
  "Medicine",
  "Bakery",
  "Beauty",
];

export default function CategoryFilter() {
  const [active, setActive] = useState("Sabhi");

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            key={category}
            onClick={() => setActive(category)}
            className={`
              whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold
              transition-all duration-300
              ${
                isActive
                  ? "bg-[#ea580c] text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-[#ea580c] hover:text-[#ea580c] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              }
            `}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}