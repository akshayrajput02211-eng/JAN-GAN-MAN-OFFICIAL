"use client";

import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  glow: string;

  setOpen?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function ServiceMiniCard({
  title,
  subtitle,
  icon,
  href,
  color,
  glow,
  setOpen,
}: Props) {
  return (
    <Link
      href={href}
      onClick={() => setOpen?.(false)}
      className="block relative z-50"
    >
      <div
        className={`
          group
          relative

          overflow-hidden

          rounded-[24px]

          border
          border-white/40
          dark:border-slate-700/50

          bg-white/80
          dark:bg-slate-800/80

          p-3.5

          backdrop-blur-2xl

          transition-all
          duration-300

          hover:-translate-y-1
          hover:scale-[1.01]

          shadow-[0_10px_30px_rgba(0,0,0,0.05)]

          ${glow}
          hover:shadow-2xl

          cursor-pointer
        `}
      >
        {/* BACKGROUND GLOW */}

        <div
          className={`
            absolute
            inset-0

            opacity-0

            bg-gradient-to-br
            ${color}

            transition-all
            duration-500

            group-hover:opacity-[0.08]
          `}
        />

        {/* TOP */}

        <div className="relative z-10 flex items-center gap-3">
          {/* ICON */}

          <div
            className={`
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              ${color}

              text-white

              shadow-lg

              transition-all
              duration-300

              group-hover:rotate-3
              group-hover:scale-105
            `}
          >
            {icon}
          </div>

          {/* TEXT */}

          <div className="min-w-0 flex-1">
            <h3
              className="
                truncate

                text-[14px]
                font-extrabold

                tracking-tight

                text-slate-900
                dark:text-white
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-0.5

                truncate

                text-[11px]

                text-slate-500
                dark:text-slate-400
              "
            >
              {subtitle}
            </p>
          </div>

          {/* ARROW */}

          <div
            className="
              flex
              h-8
              w-8

              items-center
              justify-center

              rounded-full

              bg-slate-100
              dark:bg-slate-700

              text-slate-500
              dark:text-slate-300

              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:bg-slate-900
              group-hover:text-white

              dark:group-hover:bg-white
              dark:group-hover:text-slate-900
            "
          >
            →
          </div>
        </div>
      </div>
    </Link>
  );
}