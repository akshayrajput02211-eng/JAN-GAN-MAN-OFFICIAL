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

          rounded-2xl

          border border-white/60

          bg-white/80

          px-3 py-2

          shadow-sm
          backdrop-blur-xl

          transition-all duration-300

          hover:scale-[1.02]
          hover:bg-white

          dark:border-slate-700/50
          dark:bg-slate-800/80
          dark:hover:bg-slate-700
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
          <h4
            className="
              text-sm font-semibold
              text-slate-800

              dark:text-white
            "
          >
            Akshay kumar
          </h4>

          <p
            className="
              text-xs
              text-blue-700

              dark:text-blue-400
            "
          >
            Verified Citizen
          </p>
        </div>

        <ChevronDown
          size={18}
          className="
            text-slate-500

            dark:text-slate-400
          "
        />
      </div>
    </Link>
  );
}