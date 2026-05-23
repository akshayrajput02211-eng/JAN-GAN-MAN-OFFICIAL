import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

import { BrandLogo } from "@/components/shared/BrandLogo";

/* BG IMAGE */
import footerBg from "@/assets/footer/footer.png";

export function PremiumFooter() {
  return (
    <footer
      className="
        relative overflow-hidden

        mt-24

        rounded-t-[42px]

        border-t border-white/10

        text-white
      "
    >
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={footerBg}
          alt="Footer Background"
          fill
          priority
          className="
            object-cover
            scale-100
          "
        />
      </div>

      {/* DARK CINEMATIC OVERLAY */}
      <div
        className="
          absolute inset-0

          bg-gradient-to-b
          from-[#04110c]/20
          via-[#081a13]/20
          to-[#10271d]/34
        "
      />

      {/* TOP PREMIUM LINE */}
      <div
        className="
          absolute top-0 left-0

          h-[1px] w-full

          bg-gradient-to-r
          from-transparent
          via-emerald-400/80
          to-transparent
        "
      />

      {/* GLOW LEFT */}
      <div
        className="
          absolute

          -top-40
          -left-24

          w-[520px]
          h-[520px]

          rounded-full

          bg-emerald-500/20

          blur-[140px]
        "
      />

      {/* GLOW RIGHT */}
      <div
        className="
          absolute

          bottom-0
          -right-24

          w-[420px]
          h-[420px]

          rounded-full

          bg-teal-500/20

          blur-[140px]
        "
      />

      {/* EXTRA LIGHT */}
      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]

          pointer-events-none
        "
      />

      {/* NOISE TEXTURE */}
      <div
        className="
          absolute inset-0

          opacity-[0.03]

          mix-blend-soft-light

          bg-[url('/noise.png')]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10

          max-w-[1500px]

          mx-auto

          px-6 py-24

          md:px-10
          lg:px-16
        "
      >
        {/* TOP SECTION */}
        <div
          className="
            flex flex-col

            lg:flex-row

            items-start
            lg:items-center

            justify-between

            gap-16
          "
        >
          {/* LEFT */}
          <div className="max-w-2xl">
            {/* LOGO */}
            <div
              className="
                w-fit

                transition-transform duration-500

                hover:scale-105
              "
            >
              <BrandLogo />
            </div>

            {/* BADGE */}
            <div
              className="
                mt-8

                inline-flex items-center gap-2

                rounded-full

                border border-emerald-400/20

                bg-emerald-400/10

                px-5 py-2

                text-sm

                text-emerald-100

                backdrop-blur-xl
              "
            >
              <Sparkles className="w-4 h-4" />

              India’s Premium Rural Super App
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-7

                text-5xl
                md:text-7xl

                font-black

                leading-[1.02]

                tracking-tight

                bg-gradient-to-b
                from-white
                via-emerald-100
                to-emerald-300

                bg-clip-text
                text-transparent
              "
            >
              Aapka Digital
              <br />
              Gaon Saathi
            </h2>

            {/* TEXT */}
            <p
              className="
                mt-7

                max-w-xl

                text-base
                md:text-lg

                leading-9

                text-emerald-50/75
              "
            >
              Rozgaar, sahayata, yojana,
              AI support aur smart digital
              services — sab kuch ek hi
              premium platform me.
            </p>

            {/* CTA */}
            <button
              className="
                group

                mt-10

                relative overflow-hidden

                rounded-[24px]

                border border-white/10

                bg-white/10

                backdrop-blur-2xl

                px-8 py-4

                font-semibold

                transition-all duration-500

                hover:scale-[1.04]

                hover:bg-emerald-500

                hover:border-emerald-300

                shadow-[0_10px_60px_rgba(16,185,129,0.18)]

                hover:shadow-[0_20px_80px_rgba(16,185,129,0.45)]
              "
            >
              {/* LIGHT */}
              <div
                className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity duration-500

                  bg-gradient-to-r
                  from-white/20
                  via-transparent
                  to-white/10
                "
              />

              <span
                className="
                  relative z-10

                  flex items-center gap-3
                "
              >
                Download App

                <ArrowRight
                  className="
                    w-5 h-5

                    transition-transform duration-500

                    group-hover:translate-x-1
                  "
                />
              </span>
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div
            className="
              grid

              w-full
              mt-20

              gap-6

              lg:max-w-xl
            "
          >
            {/* CARD 1 */}
            <div
              className="
                group

                relative overflow-hidden

                rounded-[34px]

                border border-white/10

                bg-white/[0.06]

                backdrop-blur-2xl

                p-6

                transition-all duration-500

                hover:-translate-y-2

                hover:bg-white/[0.10]

                hover:border-emerald-400/30

                shadow-[0_10px_50px_rgba(0,0,0,0.28)]
              "
            >
              {/* HOVER LIGHT */}
              <div
                className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity duration-500

                  bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%)]
                "
              />

              <div className="relative z-10 flex items-center gap-5">
                <div
                  className="
                    flex items-center justify-center

                    w-16 h-16

                    rounded-3xl

                    border border-emerald-300/20

                    bg-emerald-400/10

                    text-emerald-200

                    shadow-[0_0_40px_rgba(16,185,129,0.25)]
                  "
                >
                  <Sparkles className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Smart AI Sahayak
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-emerald-50/70">
                    Har waqt intelligent
                    digital madad.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                group

                relative overflow-hidden

                rounded-[34px]

                border border-white/10

                bg-white/[0.06]

                backdrop-blur-2xl

                p-6

                transition-all duration-500

                hover:-translate-y-2

                hover:bg-white/[0.10]

                hover:border-green-400/30

                shadow-[0_10px_50px_rgba(0,0,0,0.28)]
              "
            >
              <div
                className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity duration-500

                  bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%)]
                "
              />

              <div className="relative z-10 flex items-center gap-5">
                <div
                  className="
                    flex items-center justify-center

                    w-16 h-16

                    rounded-3xl

                    border border-green-300/20

                    bg-green-400/10

                    text-green-200

                    shadow-[0_0_40px_rgba(34,197,94,0.25)]
                  "
                >
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Trusted Services
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-emerald-50/70">
                    Secure aur verified
                    digital sevaayein.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
                group

                relative overflow-hidden

                rounded-[34px]

                border border-white/10

                bg-white/[0.06]

                backdrop-blur-2xl

                p-6

                transition-all duration-500

                hover:-translate-y-2

                hover:bg-white/[0.10]

                hover:border-teal-400/30

                shadow-[0_10px_50px_rgba(0,0,0,0.28)]
              "
            >
              <div
                className="
                  absolute inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity duration-500

                  bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_40%)]
                "
              />

              <div className="relative z-10 flex items-center gap-5">
                <div
                  className="
                    flex items-center justify-center

                    w-16 h-16

                    rounded-3xl

                    border border-teal-300/20

                    bg-teal-400/10

                    text-teal-200

                    shadow-[0_0_40px_rgba(20,184,166,0.25)]
                  "
                >
                  <Headphones className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Rural Support
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-emerald-50/70">
                    Gaon ke liye dedicated
                    smart support system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-20

            border-t border-white/10

            pt-8
          "
        >
          <div
            className="
              flex flex-col

              md:flex-row

              items-center
              justify-between

              gap-5
            "
          >
            <p
              className="
                text-sm

                text-emerald-50/60
              "
            >
              © 2026 Rural Super App —
              Aapka Digital Saathi
            </p>

            <div
              className="
                flex items-center gap-6

                text-sm

                text-emerald-50/60
              "
            >
              <span className="cursor-pointer hover:text-white transition-colors">
                Privacy
              </span>

              <span className="cursor-pointer hover:text-white transition-colors">
                Terms
              </span>

              <span className="cursor-pointer hover:text-white transition-colors">
                Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}