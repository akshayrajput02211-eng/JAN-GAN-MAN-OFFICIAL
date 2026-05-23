import { ReactNode } from "react";

export default function GlowCard({ children }: { children: ReactNode }) {
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
        hover:shadow-[0_20px_80px_rgba(34,197,94,0.18)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 via-green-100/0 to-green-100/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}