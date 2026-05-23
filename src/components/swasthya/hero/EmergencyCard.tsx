import GlassCard from "@/components/swasthyashared/cards/GlassCard";

export default function EmergencyCard() {
  return (
    <GlassCard
      className="
        relative

        overflow-hidden

        border-red-100

        bg-gradient-to-br
        from-red-50
        via-orange-50
        to-yellow-50

        p-6

        sm:p-8
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          right-[-50px]
          top-[-50px]

          h-[220px]
          w-[220px]

          rounded-full

          bg-red-200/30

          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-40px]
          left-[-40px]

          h-[160px]
          w-[160px]

          rounded-full

          bg-orange-200/20

          blur-3xl
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">
        <span
          className="
            inline-flex

            rounded-full

            bg-red-100

            px-4
            py-2

            text-sm
            font-semibold

            text-red-600
          "
        >
          Emergency Support
        </span>

        <h2
          className="
            mt-5

            text-3xl
            font-black

            leading-tight

            text-red-600

            sm:text-4xl
          "
        >
          Emergency Help
        </h2>

        <p
          className="
            mt-3

            max-w-sm

            text-base
            leading-7

            text-slate-600
          "
        >
          One tap instant emergency response with
          ambulance and quick health support.
        </p>

        {/* BUTTONS */}

        <div
          className="
            mt-7

            flex
            flex-wrap

            gap-4
          "
        >
          <button
            className="
              rounded-2xl

              bg-red-500

              px-6
              py-4

              text-sm
              font-semibold

              text-white

              shadow-[0_10px_30px_rgba(239,68,68,0.3)]

              transition-all
              duration-300

              hover:scale-105
              hover:bg-red-600
            "
          >
            Call 108
          </button>

          <button
            className="
              rounded-2xl

              border border-red-200

              bg-white/70

              px-6
              py-4

              text-sm
              font-semibold

              text-red-600

              backdrop-blur-xl

              transition-all
              duration-300

              hover:bg-white
            "
          >
            Nearby Hospitals
          </button>
        </div>
      </div>

      {/* IMAGE */}

      <img
        src="/assets/swasthya/hero/ambulance.png"
        alt="ambulance"

        className="
          pointer-events-none

          absolute

          bottom-0
          right-0

          w-[220px]

          object-contain

          sm:w-[280px]
          lg:w-[320px]
        "
      />
    </GlassCard>
  );
}