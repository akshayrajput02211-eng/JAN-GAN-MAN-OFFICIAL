// ========================================
// FILE: src/components/wallet/transactions/TransactionList.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";
import TransactionItem from "./TransactionItem";
import { Transaction } from "@/types/wallet";

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: Props) {
  const [filter, setFilter] = useState<
    "all" | "credit" | "debit"
  >("all");

  const filteredTransactions = useMemo(() => {
    if (filter === "all") return transactions;

    return transactions.filter(
      (item) => item.type === filter
    );
  }, [filter, transactions]);

  return (
    <section
      className="
        rounded-[36px]
        border border-white/50
        bg-white/70
        p-6
        shadow-xl
        backdrop-blur-xl
        dark:bg-slate-800/70
      "
    >
      <div className="mb-6 flex flex-wrap gap-3">
        {["all", "credit", "debit"].map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item as "all" | "credit" | "debit")
            }
            className={`
              rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all
              ${
                filter === item
                  ? "bg-[#16a34a] text-white"
                  : "bg-slate-100 dark:bg-slate-700"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="max-h-[500px] space-y-4 overflow-y-auto pr-1">
        {filteredTransactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}