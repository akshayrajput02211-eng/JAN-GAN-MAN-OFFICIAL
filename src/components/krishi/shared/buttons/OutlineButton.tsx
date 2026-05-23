
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function OutlineButton({
  children,
  className,
}: OutlineButtonProps) {
  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        `
        rounded-2xl
        border border-slate-200
        bg-white/80
        px-6 py-4
        text-sm font-semibold text-slate-700
        backdrop-blur-xl
        transition-all duration-300
        hover:border-green-300
        hover:bg-green-50
        hover:text-green-700
        hover:shadow-xl
      `,
        className
      )}
    >
      {children}
    </motion.button>
  );
}