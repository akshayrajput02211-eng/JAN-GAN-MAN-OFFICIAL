"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Store,
} from "lucide-react";

export default function SellerCTA() {
  return (
    <section className="px-4 py-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-[1400px]
          overflow-hidden

          rounded-[42px]

          bg-gradient-to-r
          from-orange-700
          via-orange-600
          to-orange-500

          p-10 md:p-16

          shadow-[0_20px_60px_rgba(234,88,12,0.25)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_40%)]
          "
        />

        {/* Floating Circle */}

        <div
          className="
            absolute
            -right-20
            -top-20

            h-72
            w-72

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        {/* Content */}

        <div className="relative z-10 max-w-2xl text-white">
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/20

              bg-white/10

              px-5
              py-2

              backdrop-blur-md
            "
          >
            <Store size={18} />

            <span className="font-semibold">
              Local Commerce Platform
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6

              text-4xl
              font-black
              leading-tight

              md:text-6xl
            "
          >
            Dukaan Walo Ke Liye
            <span className="block">
              Free Listing!
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5

              max-w-xl

              text-lg
              leading-relaxed

              text-orange-50
            "
          >
            Apni dukaan online laaye,
            naye customers tak pohonche
            aur apne local business ko
            digital banaaye.
          </p>

          {/* Button */}

          <button
            className="
              mt-8

              flex
              h-14
              items-center
              gap-3

              rounded-full

              bg-white
              dark:bg-slate-800

              px-8

              text-lg
              font-black

              text-orange-700
              dark:text-orange-400

              shadow-xl

              transition-all
              duration-300

              hover:scale-105
              active:scale-[0.98]
            "
          >
            Apni Dukaan Jodein

            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}