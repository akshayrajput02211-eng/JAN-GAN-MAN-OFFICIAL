// components/layout/navbar/MobileMenu.tsx

"use client";

import Link from "next/link";

export default function MobileMenu() {
  return (
    <div
      className="
      md:hidden
      fixed bottom-0 left-0 right-0
      bg-white/80
      backdrop-blur-xl
      border-t
      z-50
    "
    >
      <div className="grid grid-cols-4 py-3 text-center text-sm">
        <Link href="/">Home</Link>
        <Link href="/">Yojna</Link>
        <Link href="/">Jobs</Link>
        <Link href="/">More</Link>
      </div>
    </div>
  );
}