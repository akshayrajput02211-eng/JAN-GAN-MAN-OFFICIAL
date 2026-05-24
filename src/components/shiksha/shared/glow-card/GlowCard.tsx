// ================================
// components/shared/glow-card/GlowCard.tsx
// ================================

import { ReactNode } from "react";

export default function GlowCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[30px]

        border
        border-white/50

        bg-white/80

        p-6

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]

        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_20px_80px_rgba(37,99,235,0.18)]

        dark:border-slate-700/50
        dark:bg-slate-800/80
      "
    >
      {/* ================= GLOW ================= */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-blue-100/0
          via-blue-100/0
          to-blue-100/40

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100

          dark:from-blue-500/0
          dark:via-blue-500/0
          dark:to-blue-500/10
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}