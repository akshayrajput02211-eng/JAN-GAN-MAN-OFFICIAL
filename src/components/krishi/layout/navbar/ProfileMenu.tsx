
"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ProfileMenu() {
  return (
    <button
      className="
      hidden md:flex items-center gap-3
      rounded-2xl border border-white/40
      bg-white/70 px-3 py-2
      backdrop-blur-xl
      transition-all duration-300
      hover:shadow-xl
    "
    >
      <Image
        src="/dummy/farmer.png"
        alt="profile"
        width={42}
        height={42}
        className="rounded-full"
      />

      <div className="text-left">
        <h4 className="text-sm font-semibold text-slate-800">
          Ram Singh
        </h4>

        <p className="text-xs text-green-600">
          Verified Farmer
        </p>
      </div>

      <ChevronDown className="h-4 w-4 text-slate-500" />
    </button>
  );
}