"use client";

import {
  Clock3,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

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

        grid
        gap-4

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="
            group

            relative
            overflow-hidden

            rounded-[28px]

            border
            border-white/60

            bg-white/70

            p-5
            lg:p-6

            backdrop-blur-2xl

            shadow-[0_10px_40px_rgba(0,0,0,0.05)]

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-blue-100/0
              to-blue-100/40

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

              bg-blue-100

              text-blue-600
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
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2

                text-sm
                leading-relaxed

                text-gray-500
              "
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}