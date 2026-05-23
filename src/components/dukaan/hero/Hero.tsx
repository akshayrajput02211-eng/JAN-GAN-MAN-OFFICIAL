import Container from "@/components/dukanshared/container/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-8
        lg:py-12

        bg-white
        dark:bg-[#020617]
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          inset-0

          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-[-120px]
            left-[-80px]

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#7c3aed]/20

            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-80px]

            h-[320px]
            w-[320px]

            rounded-full

            bg-[#4c1d95]/20

            blur-3xl
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            z-10

            grid
            items-center
            gap-10

            rounded-[40px]

            border
            border-[#e9ddff]
            dark:border-white/10

            bg-gradient-to-br
            from-[#f5f3ff]
            via-white
            to-[#ede9fe]

            dark:from-slate-900
            dark:via-slate-950
            dark:to-slate-900

            p-6
            md:p-10

            shadow-[0_20px_60px_rgba(124,58,237,0.12)]
            dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]

            lg:grid-cols-2
          "
        >
          <HeroLeft />

          <HeroRight />
        </div>
      </Container>
    </section>
  );
}