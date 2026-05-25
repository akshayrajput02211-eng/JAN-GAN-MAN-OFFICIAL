// ========================================
// FILE: src/components/sarkari-seva/eligibility/EligibilityHero.tsx
// ========================================

export default function EligibilityHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-yellow-900/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-yellow-950/40 p-8 md:p-12">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur">
          Sarkari Seva
        </div>

        <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
          Kaun Si Yojana Milegi?
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-zinc-300">
          Bas kuch sawaalon ke jawab dijiye aur hum aapke liye
          sahi sarkari yojana suggest karenge.
        </p>
      </div>
    </section>
  );
}