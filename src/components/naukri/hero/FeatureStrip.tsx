// ========================================
// FILE: src/components/naukri/post-job/FeatureStrip.tsx
// ========================================

"use client";

import Link from "next/link";

import {
  ArrowRight,
  Clock3,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const items = [
  {
    icon: <Clock3 size={20} />,
    title: "24 Hour Live",
    desc: "Job pura din visible rahega",
  },

  {
    icon: <RefreshCcw size={20} />,
    title: "Auto Refresh",
    desc: "Automatic next refresh system",
  },

  {
    icon: <ShieldCheck size={20} />,
    title: "Verified Profiles",
    desc: "Trusted local workers only",
  },

  {
    icon: <MessageCircle size={20} />,
    title: "Call & Message",
    desc: "Direct connect instantly",
  },
];

export default function FeatureStrip() {
  return (
    <section
      className="
        mt-8
        lg:mt-10

        space-y-6
      "
    >
      {/* ================= CTA ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          overflow-hidden

          rounded-[34px]

          border
          border-white/60
          dark:border-slate-700/50

          bg-gradient-to-br
          from-[#7c3aed]
          via-[#8b5cf6]
          to-[#4c1d95]

          p-6
          lg:p-8

          text-white

          shadow-[0_20px_60px_rgba(124,58,237,0.25)]
        "
      >
        {/* GLOW */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_35%)]
          "
        />

        <div
          className="
            relative
            z-10

            flex
            flex-col
            gap-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <span
              className="
                inline-flex

                rounded-full

                bg-white/15

                px-4
                py-1.5

                text-xs
                font-bold

                backdrop-blur-xl
              "
            >
              JAN GAN MAN • Employer Panel
            </span>

            <h2
              className="
                mt-4

                text-3xl
                font-black

                leading-tight
              "
            >
              Apne Posted Jobs Dekho
            </h2>

            <p
              className="
                mt-3

                max-w-2xl

                text-sm
                leading-relaxed

                text-white/85
              "
            >
              Aapke saare posted jobs, applicants aur hiring updates
              ek hi jagah par manage karo.
            </p>
          </div>

          {/* BUTTON */}

          <Link
            href="/naukri/my-applications"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-white

              px-6
              py-4

              text-sm
              font-black

              text-[#7c3aed]

              shadow-xl

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
            Apna Posted Job Dekhe
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>

      {/* ================= FEATURES ================= */}

      <div
        className="
          grid
          gap-4

          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              y: -5,
            }}
            className="
              group

              relative
              overflow-hidden

              rounded-[28px]

              border
              border-white/60
              dark:border-slate-700/50

              bg-white/70
              dark:bg-slate-800/70

              p-5
              lg:p-6

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(124,58,237,0.08)]
              dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

              transition-all
              duration-300

              hover:bg-white
              dark:hover:bg-slate-700
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-[#7c3aed]/0
                to-[#7c3aed]/10

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />

            {/* ICON */}

            <div
              className="
                relative
                z-10

                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-[#ede9fe]

                text-[#7c3aed]
              "
            >
              {item.icon}
            </div>

            {/* TEXT */}

            <div className="relative z-10 mt-5">
              <h3
                className="
                  text-lg
                  font-black

                  text-[#18214d]
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2

                  text-sm
                  leading-relaxed

                  text-[#4b5578]
                  dark:text-slate-400
                "
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}