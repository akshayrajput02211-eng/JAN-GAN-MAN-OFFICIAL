// ========================================
// FILE: src/components/help/faq/FaqItem.tsx
// ========================================

"use client";

import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

interface Props {
  faq: {
    id: number;
    question: string;
    answer: string;
  };

  open: boolean;

  onToggle: () => void;
}

export default function FaqItem({
  faq,
  open,
  onToggle,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/50
        bg-white/80
        dark:border-slate-700
        dark:bg-slate-900/70
      "
    >
      
      <button
        onClick={onToggle}
        className="
          flex w-full items-center justify-between
          px-6 py-5 text-left
        "
      >
        
        <span className="text-lg font-semibold">
          {faq.question}
        </span>

        <ChevronDown
          className={`
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      <AnimatePresence initial={false}>
        
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
              {faq.answer}
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}