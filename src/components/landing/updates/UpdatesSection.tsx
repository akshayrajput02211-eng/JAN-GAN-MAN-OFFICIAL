import type { UpdateItem } from "@/types/home";

type UpdatesSectionProps = {
  updates: UpdateItem[];
};

export function UpdatesSection({
  updates,
}: UpdatesSectionProps) {
  return (
    <section
      className="
        relative overflow-hidden

        max-w-7xl
        mx-auto

        px-6 py-20
        md:px-10

        rounded-[40px]
        mt-14

        bg-gradient-to-br
        from-emerald-50
        via-white
        to-green-50

        border border-emerald-100

        shadow-[0_20px_80px_rgba(16,185,129,0.08)]
      "
      aria-labelledby="updates-title"
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_28%)]

          pointer-events-none
        "
      />

      {/* GRID PATTERN */}
      <div
        className="
          absolute inset-0

          opacity-[0.03]

          bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)]

          bg-[size:38px_38px]
        "
      />

      {/* HEADER */}
      <div
        className="
          relative z-10

          flex items-center
          justify-between

          gap-4

          mb-12
        "
      >
        <div>
          <p
            className="
              text-sm
              font-semibold

              tracking-[0.25em]
              uppercase

              text-emerald-600
            "
          >
            Daily Updates
          </p>

          <h2
            id="updates-title"
            className="
              mt-3

              text-3xl
              md:text-5xl

              font-black

              tracking-tight

              text-slate-900
            "
          >
            Aaj ke Zaroori Updates
          </h2>
        </div>

        {/* DESKTOP BUTTON */}
        <a
          href="#"
          className="
            hidden sm:flex

            items-center gap-2

            rounded-2xl

            bg-gradient-to-r
            from-emerald-500
            via-green-500
            to-teal-500

            px-5 py-3

            text-sm
            font-semibold

            text-white

            shadow-[0_10px_30px_rgba(16,185,129,0.25)]

            transition-all duration-300

            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(16,185,129,0.35)]
          "
        >
          Sab dekhein →
        </a>
      </div>

      {/* UPDATES GRID */}
      <div
        className="
          relative z-10

          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-6
        "
      >
        {updates.map((item) => (
          <article
            className="
              group

              relative overflow-hidden

              rounded-[30px]

              border border-emerald-100

              bg-white/80

              p-6

              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(16,185,129,0.08)]

              transition-all duration-500

              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]
              hover:border-emerald-300
            "
            key={item.title}
          >
            {/* CARD GLOW */}
            <div
              className="
                absolute inset-0

                opacity-0
                group-hover:opacity-100

                transition-opacity duration-500

                bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_35%)]
              "
            />

            {/* ICON */}
            <div
              className="
                relative z-10

                flex items-center
                justify-center

                w-16 h-16

                rounded-2xl

                bg-gradient-to-br
                from-emerald-400
                via-green-500
                to-teal-500

                shadow-[0_10px_30px_rgba(16,185,129,0.30)]

                mb-5
              "
            >
              <span
                className={`
                  ${item.icon}

                  text-white
                  text-2xl
                `}
                aria-hidden="true"
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
              <h3
                className="
                  text-xl
                  font-bold

                  tracking-tight

                  text-slate-900
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3

                  text-sm
                  leading-7

                  text-slate-600
                "
              >
                {item.description}
              </p>

              {/* FOOTER */}
              <div
                className="
                  mt-6

                  flex items-center
                  justify-between
                "
              >
                <time
                  className="
                    text-xs
                    font-semibold

                    tracking-wide

                    text-emerald-700
                  "
                >
                  {item.time}
                </time>

                <button
                  className="
                    rounded-xl

                    bg-emerald-50

                    px-4 py-2

                    text-xs
                    font-semibold

                    text-emerald-700

                    border border-emerald-100

                    transition-all duration-300

                    hover:bg-emerald-500
                    hover:text-white
                    hover:border-emerald-500
                  "
                >
                  View
                </button>
              </div>
            </div>

            {/* PREMIUM BORDER */}
            <div
              className="
                absolute inset-0

                rounded-[30px]

                ring-1 ring-inset
                ring-white/50

                pointer-events-none
              "
            />
          </article>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <div className="mt-8 flex sm:hidden">
        <a
          href="#"
          className="
            w-full

            flex items-center
            justify-center
            gap-2

            rounded-2xl

            bg-gradient-to-r
            from-emerald-500
            via-green-500
            to-teal-500

            px-5 py-4

            text-sm
            font-semibold

            text-white

            shadow-[0_10px_30px_rgba(16,185,129,0.25)]

            transition-all duration-300

            hover:scale-[1.02]
          "
        >
          Sab dekhein →
        </a>
      </div>
    </section>
  );
}