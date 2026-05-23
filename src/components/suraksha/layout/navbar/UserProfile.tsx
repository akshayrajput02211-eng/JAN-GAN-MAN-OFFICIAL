"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function UserProfile() {
  return (
    <Link href="/profile">
      <div
        className="
          flex cursor-pointer items-center gap-3
          rounded-2xl border border-white/60
          bg-white/80 px-3 py-2
          backdrop-blur-xl
          shadow-sm
          transition-all duration-300
          hover:scale-[1.02]
          hover:bg-white
        "
      >
        <Image
          src="https://i.pravatar.cc/100"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            Akshay kumar
          </h4>

          <p className="text-xs text-green-600">
            Verified Citizen
          </p>
        </div>

        <ChevronDown
          size={18}
          className="text-slate-500"
        />
      </div>
    </Link>
  );
}