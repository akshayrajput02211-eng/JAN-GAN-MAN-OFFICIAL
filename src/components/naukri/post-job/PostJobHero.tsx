// ========================================
// FILE: src/components/naukri/post-job/PostJobHero.tsx
// ========================================

"use client";

import { motion } from "framer-motion";

import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";

export default function PostJobHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden

            rounded-[40px]

            border
            border-white/50

            bg-gradient-to-br
            from-[#7c3aed]
            via-[#9333ea]
            to-[#4c1d95]

            px-8
            py-14

            text-white

            shadow-[0_25px_80px_rgba(124,58,237,0.35)]
          "
        >
          {/* BACK BUTTON */}

          <button
            onClick={() => router.back()}
            className="
              absolute
              left-6
              top-6
              z-20

              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              border
              border-white/20

              bg-white/10

              backdrop-blur-xl

              transition-all
              duration-300

              hover:scale-105
              hover:bg-white/20
            "
          >
            <ArrowLeft size={20} />
          </button>

          {/* LIGHT GLOW */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%)]" />

          {/* CONTENT */}

          <div className="relative z-10 max-w-2xl pt-8">
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold backdrop-blur-xl">
              JAN GAN MAN • Hire Karo
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Apna Kaam Post Karo
            </h1>

            <p className="mt-4 text-base text-white/85 sm:text-lg">
              Verified workers apne paas se dhundho aur turant hiring shuru karo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}