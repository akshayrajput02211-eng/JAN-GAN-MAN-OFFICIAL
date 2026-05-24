"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.01,
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className={cn(
        `
        relative overflow-hidden

        rounded-[32px]

        border border-white/40 dark:border-slate-700/40

        bg-[#dcfce7]/70 dark:bg-slate-800/70

        p-5 md:p-6

        shadow-[0_10px_40px_rgba(22,163,74,0.08)]

        backdrop-blur-2xl

        transition-all duration-300
      `,
        className
      )}
    >
      {/* Glow */}
      <div
        className="
        absolute inset-0

        bg-gradient-to-br

        from-white/10 dark:from-slate-700/10
        via-transparent
        to-green-100/10

        opacity-60
      "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}