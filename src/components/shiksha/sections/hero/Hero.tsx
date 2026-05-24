// ================================
// components/home/hero/Hero.tsx
// ================================

import Image from "next/image";

import Container from "@/components/shiksha/layout/container/Container";

import PrimaryButton from "@/components/shiksha/shared/buttons/PrimaryButton";

import FadeUp from "@/components/shiksha/shared/motion/FadeUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16">
      <div className="hero-glow top-[-150px] left-[-100px]" />
      <div className="hero-glow bottom-[-200px] right-[-100px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeUp>
            <div>
              <div
                className="
                  mb-6
                  inline-flex
                  rounded-full
                  border
                  border-blue-200
                  bg-blue-50
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-blue-700

                  dark:border-blue-500/20
                  dark:bg-blue-500/10
                  dark:text-blue-300
                "
              >
                India’s Smart Education Platform
              </div>

              <h1
                className="
                  text-5xl
                  font-black
                  leading-tight
                  text-gray-900

                  dark:text-white

                  lg:text-7xl
                "
              >
                Padhai Ab
                <span className="text-blue-600">
                  {" "}
                  Aasaan{" "}
                </span>
                Hai
              </h1>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-gray-500

                  dark:text-slate-400
                "
              >
                Learn with premium teachers,
                AI doubt solving, smart notes
                and live classes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>
                  Start Learning
                </PrimaryButton>

                <button
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    px-6
                    py-3
                    font-semibold
                    shadow-sm
                    transition
                    hover:scale-105

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-white
                  "
                >
                  Explore Teachers
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  "JEE",
                  "NEET",
                  "CBSE",
                  "Class 10",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="
                      rounded-full
                      bg-white
                      px-5
                      py-2
                      text-sm
                      shadow

                      dark:bg-slate-800
                      dark:text-white
                    "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  bg-gradient-to-br
                  from-blue-200
                  to-transparent
                  opacity-60
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/40
                  bg-white/70
                  p-3
                  shadow-2xl
                  backdrop-blur-xl

                  dark:border-slate-700/40
                  dark:bg-slate-800/70
                "
              >
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="hero"
                  width={1000}
                  height={800}
                  className="
                    h-[600px]
                    w-full
                    rounded-[30px]
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}