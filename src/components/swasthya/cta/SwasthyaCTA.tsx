// SWASTHYACTA.tsx

import GlassCard from "@/components/swasthyashared/cards/GlassCard";

export default function SwasthyaCTA() {
  return (
    <GlassCard
      className="
        relative
        overflow-hidden

        bg-gradient-to-r
        from-red-50
        to-orange-50

        dark:from-slate-900
        dark:to-red-950/20

        p-8
        lg:p-12
      "
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        
        <div>
          <h2
            className="
              text-4xl
              font-black
              leading-tight

              text-slate-900
              dark:text-white
            "
          >
            Aapki sehat,
            hamari zimmedari.
          </h2>

          <p
            className="
              mt-5

              text-lg

              text-slate-600
              dark:text-slate-400
            "
          >
            Swasthya ke saath judi har seva —
            aasan aur bharosemand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
                rounded-2xl

                bg-gradient-to-r
                from-red-600
                to-red-800

                px-6
                py-4

                font-semibold

                text-white
              "
            >
              Explore Services
            </button>

            <button
              className="
                rounded-2xl

                border
                border-white/40
                dark:border-slate-700/40

                bg-white/70
                dark:bg-slate-800/70

                px-6
                py-4

                font-semibold

                text-slate-700
                dark:text-slate-200
              "
            >
              Download App
            </button>
          </div>
        </div>

        <img
          src="/assets/swasthya/hero/family.png"
          alt=""
          className="mx-auto w-full max-w-md"
        />
      </div>
    </GlassCard>
  );
}