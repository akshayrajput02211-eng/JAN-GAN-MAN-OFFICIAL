// components/layout/navbar/MobileMenu.tsx

"use client";

import Link from "next/link";
import {
  Home,
  Briefcase,
  FileText,
  Menu,
} from "lucide-react";

export default function MobileMenu() {
  return (
    <div
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      border-orange-200/50
      dark:border-slate-700/50
      bg-white/80
      dark:bg-slate-800/80
      backdrop-blur-2xl
      shadow-[0_-10px_30px_rgba(0,0,0,0.06)]
      transition-colors
      duration-300
      "
    >

      <div
        className="
        grid
        grid-cols-4
        items-center
        px-2
        py-3
        "
      >

        {/* HOME */}
        <Link
          href="/"
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-[#d97706]
          dark:text-orange-300
          font-semibold
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-orange-100
            dark:bg-orange-500/20
            flex
            items-center
            justify-center
            "
          >
            <Home size={20} />
          </div>

          <span className="text-xs">
            Home
          </span>

        </Link>

        {/* YOJNA */}
        <Link
          href="/"
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-slate-600
          dark:text-slate-300
          hover:text-[#f97316]
          transition-colors
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-orange-50
            dark:bg-slate-700
            flex
            items-center
            justify-center
            "
          >
            <FileText size={20} />
          </div>

          <span className="text-xs font-medium">
            Yojna
          </span>

        </Link>

        {/* JOBS */}
        <Link
          href="/"
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-slate-600
          dark:text-slate-300
          hover:text-[#f97316]
          transition-colors
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-orange-50
            dark:bg-slate-700
            flex
            items-center
            justify-center
            "
          >
            <Briefcase size={20} />
          </div>

          <span className="text-xs font-medium">
            Jobs
          </span>

        </Link>

        {/* MORE */}
        <Link
          href="/"
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-slate-600
          dark:text-slate-300
          hover:text-[#f97316]
          transition-colors
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-orange-50
            dark:bg-slate-700
            flex
            items-center
            justify-center
            "
          >
            <Menu size={20} />
          </div>

          <span className="text-xs font-medium">
            More
          </span>

        </Link>

      </div>

    </div>
  );
}