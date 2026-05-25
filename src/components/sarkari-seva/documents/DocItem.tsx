"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface Props {
  checked: boolean;
  onToggle: () => void;
  name: string;
  description: string;
  whereToGet: string;
  status: "ready" | "maybe" | "missing";
}

export default function DocItem({
  checked,
  onToggle,
  name,
  description,
  whereToGet,
  status,
}: Props) {
  const statusStyle =
    status === "ready"
      ? "border-green-500 bg-green-50 dark:bg-green-500/10"
      : status === "maybe"
      ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-500/10"
      : "border-red-500 bg-red-50 dark:bg-red-500/10";

  const statusIcon =
    status === "ready" ? (
      <CheckCircle2 className="text-green-500" size={18} />
    ) : status === "maybe" ? (
      <AlertTriangle className="text-yellow-500" size={18} />
    ) : (
      <XCircle className="text-red-500" size={18} />
    );

  return (
    <motion.div
      layout
      whileTap={{ scale: 0.98 }}
      className={`
        p-4
        rounded-[28px]
        border
        ${statusStyle}
        flex
        gap-4
        items-start
      `}
    >
      <button
        onClick={onToggle}
        className="
          mt-1
          w-6
          h-6
          rounded-full
          border-2
          border-green-600
          flex
          items-center
          justify-center
        "
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-3 h-3 rounded-full bg-green-600"
          />
        )}
      </button>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-slate-800 dark:text-white">
            {name}
          </h4>

          {statusIcon}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
          {description}
        </p>

        <p className="text-sm text-green-700 dark:text-green-400 mt-2">
          Kahan milega: {whereToGet}
        </p>
      </div>
    </motion.div>
  );
}