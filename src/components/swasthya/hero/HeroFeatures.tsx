export default function HeroFeatures() {
  const features = [
    "Trusted Doctors",
    "Secure & Private",
    "Quick Support",
    "Rural Focused",
  ];

  return (
    <div
      className="
        mt-8

        grid
        grid-cols-1
        sm:grid-cols-2

        gap-4
      "
    >
      {features.map((item) => (
        <div
          key={item}
          className="
            group

            flex
            items-center
            gap-3

            rounded-2xl

            border
            border-white/50
            dark:border-slate-700/50

            bg-white/60
            dark:bg-slate-800/60

            px-5
            py-4

            backdrop-blur-xl

            shadow-sm
            shadow-red-100/40
            dark:shadow-black/20

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white
            dark:hover:bg-slate-700
          "
        >
          <div
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-red-600

              shadow-[0_0_12px_rgba(220,38,38,0.7)]

              shrink-0
            "
          />

          <span
            className="
              text-sm
              font-semibold

              text-slate-700
              dark:text-slate-200

              tracking-wide
            "
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}