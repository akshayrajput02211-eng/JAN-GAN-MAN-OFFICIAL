// ========================================
// FILE: src/components/wallet/history/CallHistory.tsx
// ========================================

"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CallItem } from "@/types/wallet";

interface Props {
  calls: CallItem[];
}

export default function CallHistory({
  calls,
}: Props) {
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
      <div className="space-y-4">
        {calls.map((call) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 12 }}
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
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  bg-[#16a34a]/10
                  text-[#16a34a]
                "
              >
                <Phone className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {call.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {call.date} • {call.duration}
                </p>
              </div>
            </div>

            <span
              className="
                rounded-full
                bg-[#16a34a]/10
                px-4 py-2
                text-sm font-semibold
                text-[#16a34a]
              "
            >
              {call.type}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}