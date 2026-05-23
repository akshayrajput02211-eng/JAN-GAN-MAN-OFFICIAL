import GlassCard from "@/components/swasthyashared/cards/GlassCard";

export default function AiAssistant() {
  return (
    <GlassCard
      className="
      relative overflow-hidden
      bg-gradient-to-r
      from-blue-50 via-sky-50 to-indigo-50
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
          <h2 className="text-4xl font-black text-slate-900">
            AI Health Assistant
          </h2>

          <p className="mt-3 text-slate-600">
            Lakshan batayein, turant salah paayein.
          </p>

          <div
            className="
            mt-6 flex overflow-hidden
            rounded-2xl border border-white/40
            bg-white
          "
          >
            <input
              placeholder="Mujhe bukhar aur sardi ho rahi hai..."
              className="
              h-14 flex-1 bg-transparent px-5 outline-none
            "
            />

            <button
              className="
              px-6 text-white
              bg-blue-600
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
                rounded-full border border-white/40
                bg-white px-5 py-2
                text-sm font-medium
                transition-all duration-300
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