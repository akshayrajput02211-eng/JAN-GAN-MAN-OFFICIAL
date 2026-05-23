const stats = [
  "5000+ Roz ke Live Jobs",
  "2500+ Khush Users",
  "24 Hrs Live Guarantee",
  "Auto Daily Refresh",
];

export default function StatsSection() {
  return (
    <section
      className="
        mt-8
        mb-10

        overflow-hidden

        rounded-[35px]

        border
        border-[#e9ddff]
        dark:border-slate-700/40

        bg-[#f5f3ff]
        dark:bg-slate-800

        shadow-[0_10px_40px_rgba(124,58,237,0.08)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

        lg:grid
        lg:grid-cols-4
      "
    >
      {stats.map((stat, index) => (
        <div
          key={stat}
          className={`
            relative

            px-8
            py-8
            lg:px-10
            lg:py-10

            transition-all
            duration-300

            hover:bg-white/60
            dark:hover:bg-slate-700/40

            ${
              index !== stats.length - 1
                ? "border-b lg:border-b-0 lg:border-r border-[#ddd6fe] dark:border-slate-700/40"
                : ""
            }
          `}
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

              hover:opacity-100
            "
          />

          <div className="relative z-10">
            <h3
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-black

                text-[#7c3aed]
              "
            >
              {stat.split(" ")[0]}
            </h3>

            <p
              className="
                mt-3

                text-base
                sm:text-lg

                font-semibold

                leading-relaxed

                text-[#1b2452]
                dark:text-white
              "
            >
              {stat.replace(stat.split(" ")[0], "")}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}