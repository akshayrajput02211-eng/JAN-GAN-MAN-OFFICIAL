// ========================================
// FILE: src/components/swasthya/lab/LabCard.tsx
// ========================================

"use client";

import { Clock3, MapPin, ShieldCheck } from "lucide-react";

interface Props {
  name: string;
  distance: string;
  timing: string;
  total: number;
  onSelect: () => void;
}

export default function LabCard({
  name,
  distance,
  timing,
  total,
  onSelect,
}: Props) {
  return (
    <div
      className="
        rounded-[32px]
        border border-white/50
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        p-6
        shadow-xl
      "
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            {name}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4 text-red-500" />
              {distance}
            </div>

            <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              NABL Accredited
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Clock3 className="h-4 w-4 text-red-500" />
            {timing}
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">
            Selected Tests
          </p>

          <p className="mt-2 text-3xl font-black text-red-600">
            ₹{total}
          </p>

          <button
            onClick={onSelect}
            className="
              mt-4 rounded-2xl bg-red-600
              px-5 py-3 text-sm font-bold text-white
              transition hover:scale-105
            "
          >
            Yahan Book Karo
          </button>
        </div>
      </div>
    </div>
  );
}