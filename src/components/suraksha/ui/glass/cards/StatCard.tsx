interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-[28px]

        border border-white/70

        bg-white/70

        p-5

        shadow-sm
        backdrop-blur-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <p
        className="
          text-sm
          text-slate-500

          dark:text-slate-400
        "
      >
        {title}
      </p>

      <h2
        className="
          mt-2

          text-3xl font-black

          text-slate-900

          dark:text-white
        "
      >
        {value}
      </h2>
    </div>
  );
}