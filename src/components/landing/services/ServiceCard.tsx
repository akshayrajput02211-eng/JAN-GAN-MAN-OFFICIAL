"use client";

import policeImg from "@/assets/home/police.png";

import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  tone: string;
  href: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  image,
}: Props) {
  return (
    <Link href={href} className="block h-full">
      {/* WRAPPER */}
      <div
        className="
          group
          relative
          h-full
        "
      >
        {/* PREMIUM OUTSIDE GLOW */}
        <div
          className="
            absolute
            inset-[-10px]

            rounded-[34px]

            bg-gradient-to-br
            from-[#9333ea]
            via-[#7c3aed]
            to-[#16a34a]

            opacity-20

            blur-2xl

            transition-all duration-500

            group-hover:opacity-40
            group-hover:scale-[1.02]
          "
        />

        {/* MAIN CARD */}
        <div
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              y: -6,
              duration: 0.35,
              ease: "power3.out",
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              y: 0,
              duration: 0.35,
              ease: "power3.out",
            });
          }}
          className="
            relative z-10

            flex flex-col
            justify-between

            h-full
            min-h-[250px]

            overflow-hidden

            rounded-[30px]

            border border-white/70
            dark:border-slate-700/50

            bg-[#f8fafc]/95
            dark:bg-slate-800/95

            p-5
            sm:p-6

            backdrop-blur-xl

            shadow-[0_12px_40px_rgba(0,0,0,0.06)]

            transition-all duration-500

            group-hover:shadow-[0_20px_60px_rgba(147,51,234,0.18)]
          "
        >
          {/* TOP */}
          <div
            className="
              flex items-start
              justify-between
              gap-4
            "
          >
            {/* LEFT */}
            <div className="flex-1 min-w-0">
              {/* ICON */}
              <div
                className="
                  flex items-center
                  justify-center

                  w-14 h-14
                  sm:w-16 sm:h-16

                  rounded-2xl

                  bg-gradient-to-br
                  from-[#f6b21a]
                  via-[#9333ea]
                  to-[#16a34a]

                  text-white

                  shadow-[0_10px_25px_rgba(147,51,234,0.25)]

                  transition-all duration-300

                  group-hover:rotate-3
                  group-hover:scale-105
                "
              >
                <div className="scale-110">
                  {icon}
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-4

                  text-lg
                  sm:text-[22px]

                  font-black

                  leading-tight

                  tracking-tight

                  text-[#1e1b4b]
                  dark:text-white

                  line-clamp-2
                "
              >
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-2

                  text-sm
                  sm:text-[15px]

                  leading-6

                  text-slate-600
                  dark:text-slate-300

                  line-clamp-3
                "
              >
                {description}
              </p>
            </div>

            {/* MINI IMAGE CARD */}
            <div
              className="
                flex-shrink-0

                rounded-[22px]

                border border-white/80
                dark:border-slate-700/60

                bg-white
                dark:bg-slate-700

                p-2

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                transition-all duration-300

                group-hover:scale-105
              "
            >
              <div
                className="
                  relative

                  h-[70px]
                  w-[70px]

                  sm:h-[82px]
                  sm:w-[82px]
                "
              >
                {image && (
                  <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
              mt-6

              flex items-center
              justify-end
            "
          >
            {/* ARROW */}
            <div
              className="
                flex items-center
                justify-center

                w-10 h-10

                rounded-full

                bg-[#f6b21a]/15
                dark:bg-[#9333ea]/20

                text-[#9333ea]
                dark:text-[#f8fafc]

                shadow-sm

                transition-all duration-300

                group-hover:bg-[#9333ea]
                group-hover:text-white
                group-hover:translate-x-1
              "
            >
              →
            </div>
          </div>

          {/* SHINE EFFECT */}
          <div
            className="
              absolute
              top-0
              left-[-120%]

              h-full
              w-[90px]

              rotate-12

              bg-white/50
              dark:bg-slate-800/50

              blur-2xl

              transition-all duration-1000

              group-hover:left-[130%]
            "
          />
        </div>
      </div>
    </Link>
  );
}