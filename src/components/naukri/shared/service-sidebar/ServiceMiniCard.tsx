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

  flex flex-col gap-4

  relative overflow-hidden

  rounded-[26px]

  border border-white/20

  bg-white/70

  p-4

  backdrop-blur-2xl

  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

  transition-all duration-500

  hover:-translate-y-1
  hover:scale-[1.02]
"
      >
        {/* GLOW */}
        <div
          className={`
            absolute inset-0

            bg-gradient-to-br ${color}

            opacity-0

            transition-opacity duration-500

            group-hover:opacity-10
          `}
        />

        <div className="relative z-10 flex items-center gap-6">
          {/* ICON */}
          <div
            className={`
              flex items-center justify-center

              h-12 w-12

              rounded-2xl

              bg-gradient-to-br ${color}

              text-white

              shadow-lg
            `}
          >
            {icon}
          </div>

          {/* TEXT */}
          <div>
            <h3
              className="
                text-[15px]

                font-bold

                text-[#1d2951]
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-3
                gap-2

                text-xs

                text-gray-500
              "
            >
              Explore service
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}