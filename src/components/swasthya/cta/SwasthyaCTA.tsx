import GlassCard from "@/components/swasthyashared/cards/GlassCard";

export default function SwasthyaCTA() {
  return (
    <GlassCard
      className="
      relative overflow-hidden
      bg-gradient-to-r
      from-green-50 to-emerald-50
      p-8 lg:p-12
    "
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">

        <div>
          <h2
            className="
            text-4xl font-black
            leading-tight
          "
          >
            Aapki sehat,
            hamari zimmedari.
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Swasthya ke saath judi har seva —
            aasan aur bharosemand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
              rounded-2xl bg-green-600
              px-6 py-4 text-white
            "
            >
              Explore Services
            </button>

            <button
              className="
              rounded-2xl border
              border-neutral-200
              bg-white px-6 py-4
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