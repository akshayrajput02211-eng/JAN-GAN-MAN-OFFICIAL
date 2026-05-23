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
        p-6 lg:p-10
        bg-white/70
        backdrop-blur-2xl
        shadow-xl
      "
    >
      {/* Background Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-green-100/40
          via-transparent
          to-blue-100/40
        "
      />

      <div className="relative grid gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-sm text-slate-500">
              Namaste, Ram Singh
            </p>

            <h1
              className="
                mt-3 text-4xl font-black
                leading-tight tracking-tight
                text-slate-900
                md:text-6xl
              "
            >
              Surakshit Gaon,
              <span className="block text-green-600">
                Surakshit Parivaar
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              Police aapke saath hai, har kadam
              suraksha ke liye.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="
                flex items-center gap-3
                rounded-2xl
                bg-red-500 px-6 py-4
                font-semibold text-white
                transition-all duration-300
                hover:scale-105 hover:bg-red-600
              "
            >
              <ShieldAlert size={20} />
              SOS Emergency
            </button>

            <button
              className="
                flex items-center gap-3
                rounded-2xl
                bg-white px-6 py-4
                font-semibold text-slate-800
                shadow-sm
                transition-all duration-300
                hover:scale-105
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
          {/* Glow Effect */}
          <div
            className="
              absolute -right-10 -top-10
              h-40 w-40 rounded-full
              bg-green-400/20 blur-3xl
            "
          />

          {/* Image Wrapper */}
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
                w-full object-cover
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}