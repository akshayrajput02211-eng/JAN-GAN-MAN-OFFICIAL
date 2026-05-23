"use client";

import { useRouter } from "next/navigation";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PageNavigator() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => router.back()}
        className="
          flex
          h-11
          w-11

          items-center
          justify-center

          rounded-2xl

          bg-white/70
          dark:bg-slate-800/80

          text-slate-700
          dark:text-slate-200

          shadow-md

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-105
        "
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => router.forward()}
        className="
          flex
          h-11
          w-11

          items-center
          justify-center

          rounded-2xl

          bg-white/70
          dark:bg-slate-800/80

          text-slate-700
          dark:text-slate-200

          shadow-md

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-105
        "
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}