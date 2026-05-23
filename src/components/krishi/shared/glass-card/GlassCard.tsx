
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
        border border-white/40
        bg-white/70
        p-6
        shadow-[0_10px_40px_rgba(34,197,94,0.08)]
        backdrop-blur-2xl
      `,
        className
      )}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-green-100/10 opacity-60" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}