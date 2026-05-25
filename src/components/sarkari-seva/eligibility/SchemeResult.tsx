// ========================================
// FILE: src/components/sarkari-seva/eligibility/SchemeResult.tsx
// ========================================

"use client";

import SchemeCard from "./SchemeCard";

export default function SchemeResult({
  matchedSchemes,
  onRetry,
}: any) {
  if (!matchedSchemes.length) {
    return (
      <div className="rounded-3xl border border-yellow-900/40 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 text-center">
        <h3 className="text-2xl font-bold text-white">
          Koi yojana nahi mili
        </h3>

        <p className="mt-3 text-zinc-400">
          Try karo alag options se.
        </p>

        <button
          onClick={onRetry}
          className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-black text-black transition hover:shadow-lg hover:shadow-yellow-500/30"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">
          Aapke Liye Yojana
        </h2>

        <p className="mt-2 text-zinc-400">
          Yeh schemes aapke profile se match karti hain.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {matchedSchemes.map((scheme: any) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  );
}