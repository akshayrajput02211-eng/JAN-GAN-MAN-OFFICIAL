"use client";

import Image from "next/image";

import {
  Clock3,
  MapPin,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import PostJobForm from "./PostJobForm";

const features = [
  {
    icon: <Clock3 size={18} />,
    title: "24 Hour Live",
  },

  {
    icon: <RefreshCcw size={18} />,
    title: "Auto Refresh",
  },

  {
    icon: <ShieldCheck size={18} />,
    title: "Verified Workers",
  },

  {
    icon: <MapPin size={18} />,
    title: "Nearby Jobs",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-[#e9ddff]
        dark:border-slate-700/40

        bg-gradient-to-br
        from-[#f5f3ff]
        via-white
        to-[#faf5ff]

        dark:from-[#020617]
        dark:via-[#0f172a]
        dark:to-[#111827]

        transition-all
        duration-500

        shadow-[0_20px_80px_rgba(124,58,237,0.08)]
        dark:shadow-[0_20px_80px_rgba(0,0,0,0.55)]
      "
    >
      {/* ================= LIGHT MODE BG ================= */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(76,29,149,0.08),transparent_35%)]

          dark:hidden
        "
      />

      {/* ================= DARK MODE BG ================= */}

      <div
        className="
          hidden
          dark:block

          absolute
          inset-0
        "
      >
        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.05]

            [background-image:linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)]

            [background-size:60px_60px]
          "
        />

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]
          "
        />

        {/* LEFT GLOW */}

        <div
          className="
            absolute
            left-[-140px]
            top-[-140px]

            h-[340px]
            w-[340px]

            rounded-full

            bg-[#7c3aed]/30

            blur-3xl
          "
        />

        {/* RIGHT GLOW */}

        <div
          className="
            absolute
            bottom-[-140px]
            right-[-140px]

            h-[340px]
            w-[340px]

            rounded-full

            bg-[#4c1d95]/30

            blur-3xl
          "
        />

        {/* PARTICLES */}

        <div
          className="
            absolute
            left-[12%]
            top-[18%]

            h-3
            w-3

            rounded-full

            bg-[#7c3aed]

            animate-pulse
          "
        />

        <div
          className="
            absolute
            right-[15%]
            top-[35%]

            h-2
            w-2

            rounded-full

            bg-white/70
          "
        />

        <div
          className="
            absolute
            bottom-[20%]
            left-[30%]

            h-4
            w-4

            rounded-full

            bg-[#4c1d95]

            animate-bounce
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10

          grid
          gap-12

          px-5
          py-8

          lg:grid-cols-[1.05fr_0.95fr]

          lg:px-10
          lg:py-10
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div
          className="
            flex
            flex-col
            justify-center
          "
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2

              rounded-full

              border
              border-[#d8ccff]
              dark:border-[#7c3aed]/30

              bg-[#ede9fe]
              dark:bg-[#7c3aed]/10

              px-4
              py-2

              text-sm
              font-semibold

              text-[#4c1d95]
              dark:text-[#c4b5fd]

              backdrop-blur-xl
            "
          >
            <div className="h-2 w-2 rounded-full bg-[#7c3aed]" />

            Trusted Daily Jobs Platform
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-6

              max-w-[650px]

              text-4xl
              sm:text-5xl
              lg:text-7xl

              font-black

              leading-[1.05]

              tracking-[-2px]

              text-[#18214d]
              dark:text-white
            "
          >
            Find Daily Jobs

            <span
              className="
                block

                text-[#7c3aed]
                dark:bg-gradient-to-r
                dark:from-[#7c3aed]
                dark:to-[#a78bfa]

                dark:bg-clip-text
                dark:text-transparent
              "
            >
              Near Your Area
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-[560px]

              text-base
              sm:text-lg
              lg:text-xl

              leading-relaxed

              text-[#4b5578]
              dark:text-slate-400
            "
          >
            Nearby workers aur local job providers se
            instantly connect ho jao. Roz naye kaam,
            verified profiles aur direct calling support.
          </p>

          {/* CTA */}

          <div
            className="
              mt-8

              flex
              flex-wrap

              gap-4
            "
          >
            <button
              className="
                rounded-2xl

                bg-gradient-to-r
                from-[#7c3aed]
                to-[#4c1d95]

                px-6
                py-4

                text-sm
                sm:text-base

                font-bold
                text-white

                shadow-[0_10px_30px_rgba(124,58,237,0.35)]

                transition-all
                duration-300

                hover:scale-[1.03]
              "
            >
              Yahan Apne Liye Saare Job Dekhe
            </button>

            <button
              className="
                rounded-2xl

                border
                border-[#dbe4f0]
                dark:border-slate-700/50

                bg-white/70
                dark:bg-slate-800/70

                px-6
                py-4

                text-sm
                sm:text-base

                font-bold

                text-[#18214d]
                dark:text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
                dark:hover:bg-slate-700
              "
            >
              Kaam Post Karein
            </button>
          </div>

          {/* FEATURES */}

          <div
            className="
              mt-10

              grid
              gap-4

              sm:grid-cols-2
            "
          >
            {features.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/60
                  dark:border-slate-700/50

                  bg-white/70
                  dark:bg-slate-800/70

                  px-4
                  py-4

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white
                  dark:hover:bg-slate-700
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-[#ede9fe]
                    dark:bg-[#7c3aed]/15

                    text-[#7c3aed]
                    dark:text-[#a78bfa]
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <h4
                    className="
                      text-sm
                      font-bold

                      text-[#18214d]
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-xs

                      text-[#4b5578]
                      dark:text-slate-400
                    "
                  >
                    Professional support
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            relative

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              absolute
              inset-0

              hidden
              lg:block
            "
          >
            <Image
              src="/images/naukri/housecloud.png"
              alt="background"
              fill
              priority
              className="
                object-contain
                opacity-20
              "
            />
          </div>

          <div
            className="
              relative
              z-10

              w-full
              max-w-[540px]
            "
          >
            <PostJobForm />
          </div>
        </div>
      </div>
    </section>
  );
}