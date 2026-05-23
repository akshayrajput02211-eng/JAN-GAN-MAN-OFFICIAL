"use client";

import Link from "next/link";

interface Props {
  title: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

export default function ServiceMiniCard({
  title,
  icon,
  href,
  color,
}: Props) {
  return (
    <Link href={href}>
      <div
        className="
          group
          relative

          flex
          items-center
          gap-3

          overflow-hidden

          rounded-[20px]

          border
          border-white/20
          dark:border-slate-700/40

          bg-white/70
          dark:bg-slate-800/70

          px-3
          py-3

          backdrop-blur-2xl

          shadow-[0_10px_30px_rgba(0,0,0,0.06)]

          transition-all
          duration-300

          hover:scale-[1.02]
          hover:bg-white
          dark:hover:bg-slate-700/80
        "
      >
        {/* GLOW */}

        <div
          className={`
            absolute
            inset-0

            bg-gradient-to-br ${color}

            opacity-0

            transition-opacity
            duration-300

            group-hover:opacity-10
          `}
        />

        {/* ICON */}

        <div
          className={`
            relative z-10

            flex
            h-11
            w-11

            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-br ${color}

            text-white

            shadow-lg
          `}
        >
          {icon}
        </div>

        {/* TEXT */}

        <div className="relative z-10">
          <h3
            className="
              text-[14px]
              font-bold

              text-[#1d2951]
              dark:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              text-xs
              text-gray-500
              dark:text-slate-400
            "
          >
            Explore service
          </p>
        </div>
      </div>
    </Link>
  );
}