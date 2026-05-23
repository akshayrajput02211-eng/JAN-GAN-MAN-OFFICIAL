export default function FilterSidebar() {
  return (
    <div
      className="
        rounded-[32px]

        bg-white

        p-6
        lg:p-8

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
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
        "
      >
        Filter Jobs
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
            border-[#e7ebf3]

            bg-[#f8fafc]

            px-5

            text-sm
            lg:text-base

            outline-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:bg-white
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
            border-[#e7ebf3]

            bg-[#f8fafc]

            px-5

            text-sm
            lg:text-base

            outline-none

            transition-all
            duration-300

            focus:border-blue-500
            focus:bg-white
          "
        />

        {/* RANGE */}

        <div className="pt-2">
          <input
            type="range"
            className="
              w-full

              accent-blue-600
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
            from-blue-600
            to-blue-500

            text-sm
            lg:text-lg

            font-bold
            text-white

            shadow-lg

            transition-all
            duration-300

            hover:scale-[1.02]
          "
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}