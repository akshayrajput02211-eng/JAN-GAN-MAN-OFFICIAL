export default function JobStatusCard() {
  return (
    <div
      className="
        rounded-[32px]

        bg-white
        dark:bg-slate-800

        p-6
        lg:p-8

        shadow-[0_10px_40px_rgba(124,58,237,0.08)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* TITLE */}

      <h3
        className="
          text-2xl
          lg:text-4xl

          font-black

          leading-tight

          text-[#1b2452]
          dark:text-white
        "
      >
        Mera Job Status
      </h3>

      {/* CONTENT */}

      <div className="mt-6 lg:mt-8">
        <h4
          className="
            text-xl
            lg:text-3xl

            font-bold

            text-[#1b2452]
            dark:text-white
          "
        >
          Painter Chahiye
        </h4>

        <p
          className="
            mt-3

            text-sm
            lg:text-lg

            font-semibold

            text-[#7c3aed]
          "
        >
          Live for 21h 45m
        </p>

        <button
          className="
            mt-6
            lg:mt-8

            h-14
            lg:h-16

            w-full

            rounded-2xl

            border-2
            border-[#7c3aed]

            bg-[#f5f3ff]

            text-sm
            lg:text-lg

            font-bold

            text-[#7c3aed]

            transition-all
            duration-300

            hover:bg-[#7c3aed]
            hover:text-white
          "
        >
          Go to My Jobs
        </button>
      </div>
    </div>
  );
}