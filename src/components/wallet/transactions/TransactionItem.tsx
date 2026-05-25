// ========================================
// FILE: src/components/wallet/transactions/TransactionItem.tsx
// ========================================

"use client";

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Transaction } from "@/types/wallet";

interface Props {
  item: Transaction;
}

export default function TransactionItem({ item }: Props) {
  const isCredit = item.type === "credit";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        flex items-center justify-between
        rounded-[24px]
        border border-white/50
        bg-white/70
        p-4
        dark:bg-slate-900/40
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex h-14 w-14 items-center justify-center rounded-2xl
            ${
              isCredit
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }
          `}
        >
          {isCredit ? (
            <ArrowDownLeft className="h-6 w-6" />
          ) : (
            <ArrowUpRight className="h-6 w-6" />
          )}
        </div>

        <div>
          <h3 className="font-semibold">{item.title}</h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {item.date}
          </p>
        </div>
      </div>

      <p
        className={`
          text-lg font-black
          ${isCredit ? "text-green-600" : "text-red-500"}
        `}
      >
        {isCredit ? "+" : "-"}₹{item.amount}
      </p>
    </motion.div>
  );
}