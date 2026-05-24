interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function ActionCard({
  title,
  icon,
}: Props) {
  return (
    <button
      className="
        flex items-center gap-3

        rounded-2xl

        border border-white/70

        bg-white/70

        p-4

        backdrop-blur-xl

        transition-all duration-300

        hover:scale-105
        hover:shadow-lg

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <div
        className="
          text-blue-800

          dark:text-blue-400
        "
      >
        {icon}
      </div>

      <span
        className="
          font-medium
          text-slate-900

          dark:text-white
        "
      >
        {title}
      </span>
    </button>
  );
}