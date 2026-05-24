interface Props {
  title: string;
  amount: string;
}

export default function SchemeCard({
  title,
  amount,
}: Props) {
  return (
    <div
      className="
      rounded-[30px]

      border border-white/40 dark:border-slate-700/40

      bg-[#dcfce7]/70 dark:bg-slate-800/70

      p-5 md:p-6

      backdrop-blur-2xl

      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      {/* Icon */}
      <div
        className="
        flex h-14 w-14
        items-center justify-center

        rounded-2xl

        bg-white/90 dark:bg-slate-800/90

        text-2xl

        shadow-sm
      "
      >
        🌱
      </div>

      {/* Title */}
      <h3
        className="
        mt-5

        text-lg md:text-xl
        font-bold

        text-slate-900 dark:text-white
      "
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="
        mt-2 text-sm
        text-slate-500 dark:text-slate-400
      "
      >
        Eligible Farmers
      </p>

      {/* Amount */}
      <h4
        className="
        mt-4

        text-2xl md:text-3xl
        font-black

        text-[#16a34a]
      "
      >
        {amount}
      </h4>

      {/* Button */}
      <button
        className="
        mt-6

        w-full sm:w-auto

        rounded-2xl

        bg-gradient-to-r
        from-[#16a34a]
        to-[#065f46]

        px-5 py-3

        text-sm font-semibold
        text-white

        shadow-lg shadow-green-500/20

        transition-all duration-300
        hover:-translate-y-1
        hover:scale-[1.02]
      "
      >
        Apply Karein
      </button>
    </div>
  );
}