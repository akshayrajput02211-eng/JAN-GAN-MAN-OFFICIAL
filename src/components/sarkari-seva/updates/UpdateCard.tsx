

interface Props {
  title: string;
  amount?: string;
  date: string;
  updates?: any[];
}

export default function UpdateCard({
  title,
  amount,
  date,
}: Props) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-white
      dark:bg-slate-800
      border
      border-orange-100
      dark:border-slate-700
      rounded-3xl
      p-5
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      duration-300
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        -top-12
        -right-12
        w-32
        h-32
        rounded-full
        bg-orange-300/20
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        "
      />

      <div className="relative z-10">

        <h3
          className="
          font-bold
          text-lg
          text-slate-800
          dark:text-white
          leading-snug
          "
        >
          {title}
        </h3>

        {amount && (
          <p
            className="
            text-3xl
            font-black
            text-[#d97706]
            dark:text-orange-300
            mt-4
            "
          >
            {amount}
          </p>
        )}

        <p
          className="
          text-sm
          text-slate-500
          dark:text-slate-400
          mt-5
          "
        >
          Last Date:
        </p>

        <p
          className="
          font-semibold
          mt-1
          text-slate-800
          dark:text-white
          "
        >
          {date}
        </p>

        <button
          className="
          mt-6
          h-11
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-[#d97706]
          to-[#f97316]
          hover:scale-[1.02]
          transition-all
          duration-300
          text-white
          font-semibold
          shadow-lg
          shadow-orange-500/20
          "
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}