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
        grid-cols-2

        gap-4

        sm:flex
        sm:flex-wrap
        sm:gap-5
      "
    >
      {features.map((item) => (
        <div
          key={item}
          className="
            flex
            items-center
            gap-2

            rounded-2xl

            border border-white/50

            bg-white/60

            px-4
            py-3

            backdrop-blur-xl

            shadow-sm

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-white
          "
        >
          <div
            className="
              h-2.5
              w-2.5

              rounded-full

              bg-green-500
              shadow-[0_0_10px_rgba(34,197,94,0.5)]

              shrink-0
            "
          />

          <span
            className="
              text-sm
              font-medium

              text-slate-700
            "
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}