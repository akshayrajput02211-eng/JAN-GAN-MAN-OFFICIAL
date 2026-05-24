const items = [
  "100% Secure",
  "Verified by Police",
  "24x7 Available",
  "Privacy Protected",
];

export default function TrustBadges() {
  return (
    <section
      className="
        grid gap-5

        rounded-[32px]

        border border-white/70

        bg-white/70

        p-8

        backdrop-blur-xl

        md:grid-cols-2
        xl:grid-cols-4

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      {items.map((item) => (
        <div
          key={item}
          className="
            rounded-2xl

            bg-white

            p-6

            text-center

            shadow-sm

            dark:bg-slate-800
          "
        >
          <h3
            className="
              font-bold
              text-slate-900

              dark:text-white
            "
          >
            {item}
          </h3>
        </div>
      ))}
    </section>
  );
}