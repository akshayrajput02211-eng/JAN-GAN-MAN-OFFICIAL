// ========================================
// FILE: src/components/help/faq/FaqCategory.tsx
// ========================================

"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}

export default function FaqCategory({
  label,
  icon: Icon,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        px-6
        py-4
        transition-all
        duration-300
        ${
          active
            ? `
              border-[#16a34a]
              bg-[#16a34a]
              text-white
              shadow-[0_20px_60px_rgba(22,163,74,0.25)]
            `
            : `
              border-white/50
              bg-white/70
              text-slate-700
              hover:-translate-y-1
              hover:border-[#16a34a]/30
              hover:bg-white
              dark:border-slate-700/50
              dark:bg-slate-800/70
              dark:text-slate-200
            `
        }
      `}
    >
      
      <div className="flex items-center gap-3">
        
        <div
          className={`
            flex
            size-11
            items-center
            justify-center
            rounded-2xl
            transition-all
            ${
              active
                ? "bg-white/20"
                : `
                  bg-[#16a34a]/10
                  text-[#16a34a]
                  group-hover:bg-[#16a34a]
                  group-hover:text-white
                `
            }
          `}
        >
          <Icon className="size-5" />
        </div>

        <span className="text-sm font-semibold md:text-base">
          {label}
        </span>

      </div>

      {!active && (
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_top,rgba(22,163,74,0.08),transparent_60%)]
          "
        />
      )}

    </button>
  );
}