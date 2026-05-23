import GlassCard from "@/components/swasthyashared/cards/GlassCard";
import FadeUp from "@/components/swasthyashared/animations/FadeUp";
import GradientMesh from "@/components/swasthyashared/backgrounds/GradientMesh";
import SearchInput from "@/components/swasthyashared/inputs/SearchInput";

export default function Hero() {
  return (
    <section className="relative">
      <GradientMesh />

      <div className="grid gap-6 lg:grid-cols-2">

        <FadeUp>
          <GlassCard className="p-8 lg:p-10">
            <span
              className="
              inline-flex rounded-full
              bg-green-100 px-4 py-2
              text-sm font-medium text-green-700
            "
            >
              Sehat Saathi
            </span>

            <h1
              className="
              mt-6 text-4xl font-black
              leading-tight text-slate-900
              md:text-6xl
            "
            >
              Sehat Pe Dhyan,
              <span className="block text-green-600">
                Jeevan Aasan
              </span>
            </h1>

            <p
              className="
              mt-5 max-w-xl
              text-lg leading-8 text-slate-600
            "
            >
              Doctor consult karein, medicines order karein,
              AI health support aur reports save karein —
              sab ek jagah.
            </p>

            <div className="mt-8">
              <SearchInput />
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {[
                "Trusted Doctors",
                "Secure & Private",
                "Quick Support",
                "Rural Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>

        <FadeUp delay={0.2}>
          <GlassCard
            className="
            relative overflow-hidden
            bg-gradient-to-br
            from-red-50 via-orange-50 to-yellow-50
            p-8
          "
          >
            <div
              className="
              absolute right-[-50px] top-[-50px]
              h-[200px] w-[200px]
              rounded-full bg-red-200/30 blur-3xl
            "
            />

            <div className="relative z-10">
              <h2 className="text-4xl font-black text-red-600">
                Emergency Help
              </h2>

              <p className="mt-3 text-slate-600">
                One tap. Instant help.
              </p>

              <button
                className="
                mt-6 rounded-2xl
                bg-red-500 px-6 py-4
                font-semibold text-white
                transition-all duration-300
                hover:scale-105
              "
              >
                Call 108
              </button>
            </div>

            <img
              src="/assets/swasthya/hero/ambulance.png"
              alt=""
              className="
              absolute bottom-0 right-0
              w-[320px]
              object-contain
            "
            />
          </GlassCard>
        </FadeUp>
      </div>
    </section>
  );
}