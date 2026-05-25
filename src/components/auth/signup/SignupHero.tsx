"use client";

import { motion } from "framer-motion";

export default function SignupHero() {
  return (
    <section
      className="
        relative
        hidden
        overflow-hidden

        lg:flex
        items-center
        justify-center

        bg-gradient-to-br
        from-green-100
        via-emerald-50
        to-lime-100

        dark:from-slate-900
        dark:via-slate-950
        dark:to-slate-900
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 h-48 w-full bg-green-500/20 blur-3xl" />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Village Scene Box */}
        <div
          className="
            relative

            mb-10

            flex
            h-[420px]
            w-[520px]
            flex-col
            items-center
            justify-center

            overflow-hidden

            rounded-[42px]

            border
            border-white/40

            bg-white/20

            backdrop-blur-xl

            dark:bg-slate-800/30
          "
        >
          {/* Sun */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              top-12

              h-32
              w-32

              rounded-full

              bg-yellow-300

              shadow-[0_0_120px_rgba(255,215,0,0.7)]
            "
          />

      
          

          {/* Text */}
          <div className="relative z-20 mt-56 text-center">
            <h1
              className="
                text-6xl
                font-black
                tracking-tight

                text-green-700

                dark:text-green-400
              "
            >
              JAN GAN MAN
            </h1>

            <p className="mt-4 text-xl text-slate-700 dark:text-slate-300">
              Gaon ka Digital Super App
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}