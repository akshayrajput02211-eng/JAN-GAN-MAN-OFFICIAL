// ========================================
// FILE: src/components/wallet/actions/AddMoneySheet.tsx
// ========================================

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CreditCard,
  Landmark,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddMoneySheet({
  open,
  onClose,
}: Props) {
  const [amount, setAmount] = useState("");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
              bg-black/40 backdrop-blur-sm
            "
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 24,
              stiffness: 220,
            }}
            className="
              fixed bottom-0 left-0 right-0 z-50
              rounded-t-[42px]
              bg-white
              p-6
              shadow-2xl
              dark:bg-[#07111f]
            "
          >
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-black">
                  Add Money
                </h2>

                <button
                  onClick={onClose}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-slate-100
                    dark:bg-slate-800
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    title: "UPI",
                    icon: Wallet,
                  },
                  {
                    title: "Card",
                    icon: CreditCard,
                  },
                  {
                    title: "Net Banking",
                    icon: Landmark,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      className="
                        rounded-[24px]
                        border border-slate-200
                        p-5
                        transition-all
                        hover:-translate-y-1
                        dark:border-slate-700
                      "
                    >
                      <div
                        className="
                          mx-auto mb-3
                          flex h-12 w-12 items-center justify-center
                          rounded-2xl
                          bg-[#16a34a]/10
                          text-[#16a34a]
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <label className="mb-2 block text-sm font-semibold">
                  Enter Amount
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  placeholder="₹ Enter amount"
                  className="
                    h-14 w-full rounded-2xl
                    border border-slate-200
                    bg-slate-50
                    px-5
                    text-lg
                    outline-none
                    focus:border-[#16a34a]
                    dark:border-slate-700
                    dark:bg-slate-900
                  "
                />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {[100, 200, 500].map((preset) => (
                  <button
                    key={preset}
                    onClick={() =>
                      setAmount(String(preset))
                    }
                    className="
                      rounded-full
                      bg-[#16a34a]/10
                      px-5 py-3
                      font-semibold
                      text-[#16a34a]
                    "
                  >
                    ₹{preset}
                  </button>
                ))}
              </div>

              <button
                className="
                  mt-8 h-14 w-full
                  rounded-2xl
                  bg-[#16a34a]
                  text-lg font-bold text-white
                "
              >
                Continue Payment
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}