// ========================================
// FILE: src/components/suraksha/home/ComplaintItem.tsx
// ========================================

"use client";

import Link from "next/link";
import {
  ChevronRight,
  Clock3,
  ShieldAlert,
} from "lucide-react";

interface Props {
  title: string;
  status: string;
  refId: string;
  date: string;
}

export default function ComplaintItem({
  title,
  status,
  refId,
  date,
}: Props) {
  return (
    <Link
      href="/suraksha/complaint"
      className="block"
    >
      <div
        className="
          group

          rounded-[26px]

          border border-white/70

          bg-white/80
          dark:bg-slate-800/80

          p-5

          backdrop-blur-xl

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-indigo-400
          hover:shadow-[0_12px_35px_rgba(99,102,241,0.18)]

          dark:border-slate-700/50
        "
      >
        <div className="flex items-start justify-between gap-4">
          {/* LEFT */}

          <div className="flex gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-indigo-500
                to-purple-500

                text-white
                shadow-lg
              "
            >
              <ShieldAlert className="h-7 w-7" />
            </div>

            <div>
              <h3
                className="
                  font-black
                  text-slate-900
                  dark:text-white
                "
              >
                {title}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span
                  className="
                    rounded-full
                    bg-amber-100
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-amber-700
                  "
                >
                  {status}
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  {refId}
                </span>
              </div>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2

                  text-sm
                  text-slate-500
                "
              >
                <Clock3 className="h-4 w-4 text-indigo-500" />

                <span>{date}</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-indigo-50

              text-indigo-600

              transition-all
              duration-300

              group-hover:translate-x-1
            "
          >
            <ChevronRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}