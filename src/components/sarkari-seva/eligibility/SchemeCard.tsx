// ========================================
// FILE: src/components/sarkari-seva/eligibility/SchemeCard.tsx
// ========================================

"use client";

import { ArrowRight, Landmark } from "lucide-react";

export default function SchemeCard({ scheme }: any) {
  return (
    <div className="group rounded-3xl border border-yellow-900/40 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:shadow-yellow-500/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 inline-flex rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-3 text-yellow-300">
            <Landmark size={22} />
          </div>

          <h3 className="text-xl font-bold text-white">
            {scheme.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-yellow-300">
            {scheme.ministry}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {scheme.benefit}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <button className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-5 py-3 text-sm font-black text-black transition hover:scale-[1.03] hover:shadow-lg hover:shadow-yellow-500/30">
          Aavedan Karo
        </button>

        <a
          href={scheme.learnMore}
          className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 transition hover:gap-3"
        >
          Aur Jano
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}