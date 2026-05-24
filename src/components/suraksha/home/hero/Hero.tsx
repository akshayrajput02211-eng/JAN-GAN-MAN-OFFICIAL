"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden

        rounded-[40px]

        border border-white/60

        bg-white/70

        p-6 lg:p-10

        shadow-xl
        backdrop-blur-2xl

        dark:border-slate-700/40
        dark:bg-slate-900/80
      "
    >
      {/* Background Gradient */}

      <div
        className="
          absolute inset-0

          bg-gradient-to-br
          from-blue-100/40
          via-transparent
          to-blue-200/30

          dark:from-blue-900/20
          dark:to-slate-900/20
        "
      />

      <div className="relative grid gap-10 lg:grid-cols-2">
        {/* Left Content */}

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p
              className="
                text-sm
                text-slate-500

                dark:text-slate-400
              "
            >
              Namaste, Akshay kumar
            </p>

            <h1
              className="
                mt-3

                text-4xl font-black

                leading-tight tracking-tight

                text-slate-900

                md:text-6xl

                dark:text-white
              "
            >
              Surakshit Gaon,

              <span
                className="
                  block
                  text-blue-800

                  dark:text-blue-400
                "
              >
                Surakshit Parivaar
              </span>
            </h1>

            <p
              className="
                mt-4

                max-w-xl

                text-slate-600

                dark:text-slate-300
              "
            >
              Police aapke saath hai,
              har kadam suraksha ke liye.
            </p>
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">
            <button
              className="
                flex items-center gap-3

                rounded-2xl

                bg-red-600

                px-6 py-4

                font-semibold
                text-white

                transition-all duration-300

                hover:scale-105
                hover:bg-red-700
              "
            >
              <ShieldAlert size={20} />

              SOS Emergency
            </button>

            <button
              className="
                flex items-center gap-3

                rounded-2xl

                bg-white

                px-6 py-4

                font-semibold
                text-slate-800

                shadow-sm

                transition-all duration-300

                hover:scale-105

                dark:bg-slate-700
                dark:text-white
                dark:hover:bg-slate-600
              "
            >
              <Phone size={20} />

              Get Police Help
            </button>
          </div>
        </div>

        {/* Right Image */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="relative"
        >
          {/* Glow */}

          <div
            className="
              absolute -right-10 -top-10

              h-40 w-40

              rounded-full

              bg-blue-500/20

              blur-3xl
            "
          />

          {/* Image */}

          <div
            className="
              relative overflow-hidden

              rounded-[32px]

              shadow-2xl
            "
          >
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Police patrol car on duty"
              width={1200}
              height={800}
              priority
              className="
                h-full min-h-[350px]

                w-full

                object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}