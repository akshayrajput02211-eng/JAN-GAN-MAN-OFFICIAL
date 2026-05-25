// ========================================
// FILE: src/components/wallet/actions/WithdrawSheet.tsx
// ========================================

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Banknote, X } from "lucide-react";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WithdrawSheet({
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
            <div className="mx-auto max-w-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-black">
                  Withdraw Money
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

              <div
                className="
                  mb-6
                  flex h-20 w-20 items-center justify-center
                  rounded-[28px]
                  bg-[#16a34a]/10
                  text-[#16a34a]
                "
              >
                <Banknote className="h-10 w-10" />
              </div>

              <input
                type="number"
                placeholder="₹ Enter withdraw amount"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                className="
                  h-14 w-full rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  px-5
                  text-lg
                  outline-none
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              />

              <button
                className="
                  mt-6 h-14 w-full
                  rounded-2xl
                  bg-[#16a34a]
                  text-lg font-bold text-white
                "
              >
                Withdraw Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}