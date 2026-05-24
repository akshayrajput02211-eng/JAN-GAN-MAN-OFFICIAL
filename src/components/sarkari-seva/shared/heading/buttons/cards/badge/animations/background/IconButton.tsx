// components/shared/buttons/IconButton.tsx

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
}

export default function IconButton({
  icon,
}: Props) {
  return (
    <button
      className="
      group
      relative
      h-10
      w-10
      rounded-xl
      bg-white
      dark:bg-slate-800
      border
      border-orange-100
      dark:border-slate-700
      flex
      items-center
      justify-center
      text-slate-700
      dark:text-slate-200
      hover:text-[#d97706]
      dark:hover:text-orange-300
      hover:shadow-lg
      hover:-translate-y-0.5
      transition-all
      duration-300
      overflow-hidden
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#d97706]/10
        to-[#f97316]/10
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        "
      />

      <div className="relative z-10">
        {icon}
      </div>

    </button>
  );
}