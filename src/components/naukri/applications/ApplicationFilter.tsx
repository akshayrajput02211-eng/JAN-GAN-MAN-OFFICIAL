// ========================================
// FILE: src/components/naukri/applications/ApplicationFilter.tsx
// ========================================

"use client";

import { motion } from "framer-motion";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const tabs = [
  "Sabhi",
  "Pending",
  "Selected",
  "Rejected",
  "Interview",
];

export default function ApplicationFilter({
  active,
  onChange,
}: Props) {
  return (
    <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
      {tabs.map((tab) => {
        const isActive = active === tab;

        return (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#7c3aed] text-white shadow-lg shadow-purple-500/30"
                : "border border-white/50 bg-white/70 text-slate-700 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
            }`}
          >
            {tab}
          </motion.button>
        );
      })}
    </div>
  );
}