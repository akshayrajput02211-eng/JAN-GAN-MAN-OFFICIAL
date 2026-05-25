"use client";

import { motion } from "framer-motion";

interface Props {
  balance: number;
  onAddMoney: () => void;
  onWithdraw: () => void;
}

export default function WalletBalance({
  balance,
  onAddMoney,
  onWithdraw,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        relative overflow-hidden
        rounded-[36px]
        border border-white/50
        bg-white/70
        p-8
        shadow-2xl
        backdrop-blur-xl
        dark:bg-slate-800/70
      "
    >
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0 opacity-30
          bg-[linear-gradient(120deg,#16a34a,#f6b21a,#9333ea,#16a34a)]
          bg-[length:300%_300%]
        "
      />

      <div className="relative z-10">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Mera Wallet
        </p>

        <h1
          className="
            mt-3
            text-5xl
            font-black
            tracking-tight
            text-[#16a34a]
          "
        >
          ₹{balance.toLocaleString()}
        </h1>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={onAddMoney}
            className="
              rounded-2xl
              bg-[#16a34a]
              px-6 py-3
              font-semibold
              text-white
              transition-all
              hover:scale-[1.03]
            "
          >
            Add Money
          </button>

          <button
            onClick={onWithdraw}
            className="
              rounded-2xl
              border border-slate-300
              bg-white/70
              px-6 py-3
              font-semibold
              transition-all
              hover:scale-[1.03]
              dark:border-slate-700
              dark:bg-slate-900/40
            "
          >
            Withdraw
          </button>
        </div>
      </div>
    </motion.section>
  );
}