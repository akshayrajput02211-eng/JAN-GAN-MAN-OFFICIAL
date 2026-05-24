interface Props {
  value: string;
  label: string;
}

export default function MetricCard({
  value,
  label,
}: Props) {
  return (
    <div
      className="
      rounded-[30px]

      border border-white/40 dark:border-slate-700/40

      bg-[#dcfce7]/70 dark:bg-slate-800/70

      p-5 md:p-6

      text-center

      backdrop-blur-2xl

      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <h2
        className="
        text-4xl md:text-5xl
        font-black

        text-[#16a34a]
      "
      >
        {value}
      </h2>

      <p
        className="
        mt-3 text-sm
        text-slate-500 dark:text-slate-400
      "
      >
        {label}
      </p>
    </div>
  );
}