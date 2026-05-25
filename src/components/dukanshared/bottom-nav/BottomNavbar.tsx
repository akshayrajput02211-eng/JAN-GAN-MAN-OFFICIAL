// ========================================
// FILE: src/components/dukaan/layout/BottomNavbar.tsx
// ========================================

"use client";

import { usePathname } from "next/navigation";

import BottomNavItem from "./BottomNavItem";

import { navItems } from "./nav-items";

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <div
      className="
        fixed
        bottom-4
        left-1/2
        z-50

        w-[95%]
        max-w-md

        -translate-x-1/2

        rounded-[32px]

        border
        border-orange-100
        dark:border-slate-700/50

        bg-white/90
        dark:bg-slate-900/90

        p-3

        shadow-2xl
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <BottomNavItem
            key={item.label}
            item={item}
            pathname={pathname}
          />
        ))}
      </div>
    </div>
  );
}