// AIASSISTANT.tsx

import GlassCard from "@/components/swasthyashared/cards/GlassCard";

export default function AiAssistant() {
  return (
    <GlassCard
      className="
        relative
        overflow-hidden

        bg-gradient-to-r
        from-red-50
        via-rose-50
        to-orange-50

        dark:from-slate-900
        dark:via-red-950/20
        dark:to-slate-900

        p-8
      "
    >
      <div className="grid items-center gap-8 lg:grid-cols-3">
        
        <img
          src="/assets/swasthya/icons/robot.png"
          alt=""
          className="mx-auto w-[180px]"
        />

        <div className="lg:col-span-2">
          <h2
            className="
              text-4xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            AI Health Assistant
          </h2>

          <p
            className="
              mt-3

              text-slate-600
              dark:text-slate-400
            "
          >
            Lakshan batayein, turant salah paayein.
          </p>

          <div
            className="
              mt-6

              flex
              overflow-hidden

              rounded-2xl

              border
              border-white/40
              dark:border-slate-700/40

              bg-white
              dark:bg-slate-800
            "
          >
            <input
              placeholder="Mujhe bukhar aur sardi ho rahi hai..."
              className="
                h-14
                flex-1

                bg-transparent

                px-5

                text-slate-700
                dark:text-slate-200

                outline-none

                placeholder:text-slate-400
              "
            />

            <button
              className="
                bg-red-600

                px-6

                text-white

                transition-all
                duration-300

                hover:bg-red-700
              "
            >
              Send
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Symptom Check",
              "Medicine Info",
              "Health Tips",
              "Nearby Care",
            ].map((chip) => (
              <button
                key={chip}
                className="
                  rounded-full

                  border
                  border-white/40
                  dark:border-slate-700/40

                  bg-white
                  dark:bg-slate-700

                  px-5
                  py-2

                  text-sm
                  font-medium

                  text-slate-700
                  dark:text-slate-200

                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}