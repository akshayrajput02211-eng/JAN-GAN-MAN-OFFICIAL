// src/components/swasthya/hero/Hero.tsx

"use client";

import Image from "next/image";

import GlassCard from "@/components/swasthyashared/cards/GlassCard";
import FadeUp from "@/components/swasthyashared/animations/FadeUp";
import GradientMesh from "@/components/swasthyashared/backgrounds/GradientMesh";
import SearchInput from "@/components/swasthyashared/inputs/SearchInput";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientMesh />

      <div className="grid gap-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <FadeUp>
          <GlassCard
            className="
              p-4
              md:p-8
              lg:p-10
            "
          >
            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-red-200/60
                dark:border-red-900/40

                bg-red-100/80
                dark:bg-red-950/40

                px-4
                py-2

                text-sm
                font-semibold

                text-red-700
                dark:text-red-300

                backdrop-blur-xl
              "
            >
              🩺 Sehat Saathi
            </span>

            <h1
              className="
                mt-6

                text-4xl
                font-black
                leading-tight

                text-slate-900
                dark:text-white

                md:text-6xl
              "
            >
              Sehat Pe Dhyan,
              <span
                className="
                  block

                  bg-gradient-to-r
                  from-red-600
                  to-red-800

                  bg-clip-text
                  text-transparent
                "
              >
                Jeevan Aasan
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-xl

                text-base
                leading-8

                text-slate-600
                dark:text-slate-300

                md:text-lg
              "
            >
              Doctor consult karein, medicines order karein,
              AI health support aur reports save karein —
              sab ek jagah.
            </p>

            <div className="mt-8">
              <SearchInput />
            </div>

            <div
              className="
                mt-8

                grid
                grid-cols-1
                sm:grid-cols-2

                gap-4
              "
            >
              {[
                "Trusted Doctors",
                "Secure & Private",
                "Quick Support",
                "Rural Focused",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-white/50
                    dark:border-slate-700/50

                    bg-white/60
                    dark:bg-slate-800/60

                    px-4
                    py-3

                    backdrop-blur-xl

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white
                    dark:hover:bg-slate-700
                  "
                >
                  <div
                    className="
                      h-2.5
                      w-2.5

                      rounded-full

                      bg-red-600

                      shadow-[0_0_12px_rgba(220,38,38,0.7)]

                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-medium

                      text-slate-700
                      dark:text-slate-200
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>

        {/* RIGHT SIDE */}
        <FadeUp delay={0.2}>
          <GlassCard
            className="
              relative
              overflow-hidden

              bg-gradient-to-br
              from-red-50
              via-rose-50
              to-orange-50

              dark:from-slate-900
              dark:via-red-950/20
              dark:to-slate-900

              p-4
              md:p-8
              lg:p-10

              min-h-[500px]
            "
          >
            {/* Blur Effects */}
            <div
              className="
                absolute
                right-[-50px]
                top-[-50px]

                h-[220px]
                w-[220px]

                rounded-full

                bg-red-300/30

                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-[-60px]
                left-[-60px]

                h-[200px]
                w-[200px]

                rounded-full

                bg-orange-200/20

                blur-3xl
              "
            />

            <div className="relative z-10">
              <div
                className="
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-red-200/60
                  dark:border-red-900/40

                  bg-white/70
                  dark:bg-slate-800/70

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-red-700
                  dark:text-red-300

                  backdrop-blur-xl
                "
              >
                Emergency Response
              </div>

              <h2
                className="
                  mt-6

                  text-4xl
                  font-black

                  text-red-600
                  dark:text-red-400

                  md:text-5xl
                "
              >
                Emergency Help
              </h2>

              <p
                className="
                  mt-4

                  max-w-md

                  text-lg
                  leading-8

                  text-slate-600
                  dark:text-slate-300
                "
              >
                One tap. Instant medical help for you and
                your family anytime, anywhere.
              </p>

              <button
                className="
                  mt-8

                  rounded-2xl

                  bg-gradient-to-r
                  from-red-600
                  to-red-800

                  px-7
                  py-4

                  text-lg
                  font-bold

                  text-white

                  shadow-lg
                  shadow-red-500/30

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-red-500/50
                "
              >
                Call 108
              </button>
            </div>

            <div
              className="
                absolute
                bottom-0
                right-0

                w-[240px]
                sm:w-[300px]
                lg:w-[340px]

                h-[240px]
                sm:h-[300px]
                lg:h-[340px]
              "
            >
              <Image
                src="/assets/swasthya/hero/ambulance.png"
                alt="Emergency Ambulance"
                fill
                className="object-contain pointer-events-none"
                priority
              />
            </div>
          </GlassCard>
        </FadeUp>

      </div>
    </section>
  );
}