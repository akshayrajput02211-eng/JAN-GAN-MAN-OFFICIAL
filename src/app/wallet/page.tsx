// ========================================
// FILE: src/app/wallet/page.tsx
// ========================================

"use client";

import { useState } from "react";
import {
  Gift,
  History,
  Plus,
  Send,
  Wallet,
} from "lucide-react";

import WalletBalance from "@/components/wallet/hero/WalletBalance";
import TransactionList from "@/components/wallet/transactions/TransactionList";
import AddMoneySheet from "@/components/wallet/actions/AddMoneySheet";
import WithdrawSheet from "@/components/wallet/actions/WithdrawSheet";
import CallHistory from "@/components/wallet/history/CallHistory";

import {
  callHistory,
  transactions,
  walletBalance,
} from "@/data/wallet/transactions";

const quickActions = [
  {
    title: "Add Money",
    icon: Plus,
  },
  {
    title: "Send",
    icon: Send,
  },
  {
    title: "History",
    icon: History,
  },
  {
    title: "Offers",
    icon: Gift,
  },
];

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<
    "transactions" | "calls"
  >("transactions");

  const [openAddSheet, setOpenAddSheet] =
    useState(false);

  const [openWithdrawSheet, setOpenWithdrawSheet] =
    useState(false);

  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        px-4 py-8
        text-slate-900
        dark:bg-[#07111f]
        dark:text-white
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {/* HEADER */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl
              bg-[#16a34a]/10
              text-[#16a34a]
            "
          >
            <Wallet className="h-6 w-6" />
          </div>

          <div>
            <h1 className="text-3xl font-black">
              Wallet
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Jan Gan Man Digital Wallet
            </p>
          </div>
        </div>

        {/* BALANCE */}

        <WalletBalance
          balance={walletBalance}
          onAddMoney={() => setOpenAddSheet(true)}
          onWithdraw={() =>
            setOpenWithdrawSheet(true)
          }
        />

        {/* QUICK ACTIONS */}

        <section>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.title}
                  className="
                    rounded-[28px]
                    border border-white/50
                    bg-white/70
                    p-5
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    hover:-translate-y-1
                    dark:bg-slate-800/70
                  "
                >
                  <div
                    className="
                      mx-auto mb-4
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      bg-[#16a34a]/10
                      text-[#16a34a]
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="font-semibold">
                    {action.title}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* TABS */}

        <div className="flex gap-3">
          <button
            onClick={() =>
              setActiveTab("transactions")
            }
            className={`
              rounded-2xl px-5 py-3 text-sm font-semibold transition-all
              ${
                activeTab === "transactions"
                  ? "bg-[#16a34a] text-white"
                  : "bg-white/70 dark:bg-slate-800/70"
              }
            `}
          >
            Transactions
          </button>

          <button
            onClick={() => setActiveTab("calls")}
            className={`
              rounded-2xl px-5 py-3 text-sm font-semibold transition-all
              ${
                activeTab === "calls"
                  ? "bg-[#16a34a] text-white"
                  : "bg-white/70 dark:bg-slate-800/70"
              }
            `}
          >
            Call History
          </button>
        </div>

        {/* CONTENT */}

        {activeTab === "transactions" ? (
          <TransactionList transactions={transactions} />
        ) : (
          <CallHistory calls={callHistory} />
        )}
      </div>

      {/* SHEETS */}

      <AddMoneySheet
        open={openAddSheet}
        onClose={() => setOpenAddSheet(false)}
      />

      <WithdrawSheet
        open={openWithdrawSheet}
        onClose={() =>
          setOpenWithdrawSheet(false)
        }
      />
    </main>
  );
}