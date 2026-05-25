// ========================================
// FILE: src/components/swasthya/lab/TestCard.tsx
// ========================================

"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { TestItem } from "@/data/swasthya/tests";

interface Props {
  test: TestItem;
  onAdd: () => void;
}

export default function TestCard({ test, onAdd }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="
        min-w-[260px]
        rounded-[32px]
        border border-white/50
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        p-5
        shadow-xl
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-red-500 font-semibold">
            {test.category}
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
            {test.name}
          </h3>

          <p className="mt-4 text-2xl font-black text-red-600">
            ₹{test.price}
          </p>
        </div>

        <button
          onClick={onAdd}
          className="
            flex h-12 w-12 items-center justify-center
            rounded-2xl bg-red-600 text-white
            transition hover:scale-105
          "
        >
          <Plus />
        </button>
      </div>
    </motion.div>
  );
}