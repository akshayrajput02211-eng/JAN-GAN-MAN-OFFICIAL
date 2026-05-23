export default function FilterSidebar() {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-[#ddd6fe]

        bg-[#f5f3ff]
        dark:bg-slate-800

        p-6
        lg:p-8

        shadow-[0_10px_40px_rgba(124,58,237,0.08)]
      "
    >
      {/* TITLE */}

      <h3
        className="
          text-xl
          md:text-2xl
          lg:text-4xl

          font-black

          leading-tight

          text-[#4c1d95]
          dark:text-white
        "
      >
        Filter Opportunities
      </h3>

      {/* FORM */}

      <div
        className="
          mt-6
          lg:mt-8

          space-y-4
          lg:space-y-5
        "
      >
        {/* JOB */}

        <input
          placeholder="Kaun sa kaam?"
          className="
            h-14
            lg:h-16

            w-full

            rounded-2xl

            border
            border-[#d8ccff]

            bg-white
            dark:bg-slate-700/60

            px-5

            text-sm
            lg:text-base

            text-[#1b2452]
            dark:text-white

            placeholder:text-[#8b83b3]
            dark:placeholder:text-slate-300

            outline-none

            transition-all
            duration-300

            focus:border-[#7c3aed]
            focus:bg-white
            dark:focus:bg-slate-600

            focus:ring-4
            focus:ring-[#7c3aed]/20
          "
        />

        {/* LOCATION */}

        <input
          placeholder="Location"
          className="
            h-14
            lg:h-16

            w-full

            rounded-2xl

            border
            border-[#d8ccff]

            bg-white
            dark:bg-slate-700/60

            px-5

            text-sm
            lg:text-base

            text-[#1b2452]
            dark:text-white

            placeholder:text-[#8b83b3]
            dark:placeholder:text-slate-300

            outline-none

            transition-all
            duration-300

            focus:border-[#7c3aed]
            focus:bg-white
            dark:focus:bg-slate-600

            focus:ring-4
            focus:ring-[#7c3aed]/20
          "
        />

        {/* RANGE */}

        <div className="pt-2">
          <div
            className="
              mb-2

              flex
              items-center
              justify-between

              text-sm
              font-semibold

              text-[#6d5ba8]
              dark:text-slate-300
            "
          >
            <span>Nearby Range</span>
            <span>10 KM</span>
          </div>

          <input
            type="range"
            className="
              w-full

              accent-[#7c3aed]
            "
          />
        </div>

        {/* BUTTON */}

        <button
          className="
            h-14
            lg:h-16

            w-full

            rounded-2xl

            bg-gradient-to-r
            from-[#7c3aed]
            to-[#4c1d95]

            text-sm
            lg:text-lg

            font-bold
            text-white

            shadow-[0_10px_30px_rgba(124,58,237,0.35)]

            transition-all
            duration-300

            hover:scale-[1.02]
            hover:shadow-[0_14px_40px_rgba(124,58,237,0.45)]
          "
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}