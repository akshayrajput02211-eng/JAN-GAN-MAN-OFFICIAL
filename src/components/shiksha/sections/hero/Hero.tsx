// ========================================
// FILE: components/home/hero/Hero.tsx
// ========================================

"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shiksha/layout/container/Container";

import PrimaryButton from "@/components/shiksha/shared/buttons/PrimaryButton";

import FadeUp from "@/components/shiksha/shared/motion/FadeUp";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16">
      <div className="hero-glow top-[-150px] left-[-100px]" />

      <div className="hero-glow bottom-[-200px] right-[-100px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <FadeUp>
            <div>
              <div
                className="
                  mb-6

                  inline-flex
                  items-center
                  gap-2

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
                <BadgeCheck className="h-4 w-4" />

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

              {/* ================= CTA ================= */}

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>
                  Start Learning
                </PrimaryButton>

                {/* CONNECTED CTA */}

                <Link
                  href="/shiksha/explore"
                  className="
                    group

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    border
                    border-gray-200

                    bg-white

                    px-6
                    py-3

                    font-semibold

                    text-slate-900

                    shadow-sm

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:border-blue-200
                    hover:text-blue-600

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-white
                  "
                >
                  Explore Teachers

                  <ArrowRight
                    className="
                      h-5
                      w-5

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* TAGS */}

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

              {/* STATS */}

              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-100
                      text-blue-600
                    "
                  >
                    <Users className="h-6 w-6" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-black
                        text-slate-900

                        dark:text-white
                      "
                    >
                      10k+
                    </h3>

                    <p className="text-sm text-slate-500">
                      Active Students
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-100
                      text-blue-600
                    "
                  >
                    <BookOpen className="h-6 w-6" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-black
                        text-slate-900

                        dark:text-white
                      "
                    >
                      500+
                    </h3>

                    <p className="text-sm text-slate-500">
                      Verified Teachers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ================= RIGHT ================= */}

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
                {/* IMAGE */}

                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="hero"
                  width={1000}
                  height={800}
                  priority
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

                {/* FLOATING CARD */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6

                    rounded-[26px]

                    border border-white/20

                    bg-white/80

                    px-5
                    py-4

                    shadow-xl

                    backdrop-blur-xl

                    dark:bg-slate-900/80
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-600
                        text-white
                      "
                    >
                      <BadgeCheck className="h-6 w-6" />
                    </div>

                    <div>
                      <h3
                        className="
                          text-lg
                          font-black
                          text-slate-900

                          dark:text-white
                        "
                      >
                        Verified Teachers
                      </h3>

                      <p className="text-sm text-slate-500">
                        Learn from trusted experts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}