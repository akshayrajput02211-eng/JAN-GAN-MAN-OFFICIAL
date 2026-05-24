import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  sub: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  sub,
  icon: Icon,
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
        mb-5

        flex h-14 w-14
        items-center justify-center

        rounded-2xl

        bg-white dark:bg-slate-800

        shadow-sm
      "
      >
        <Icon className="h-7 w-7 text-[#16a34a]" />
      </div>

      {/* Title */}
      <p
        className="
        text-sm
        text-slate-500 dark:text-slate-400
      "
      >
        {title}
      </p>

      {/* Value */}
      <h2
        className="
        mt-2

        text-3xl md:text-4xl
        font-black

        text-slate-900 dark:text-white
      "
      >
        {value}
      </h2>

      {/* Sub */}
      <p
        className="
        mt-1 text-sm
        text-slate-500 dark:text-slate-400
      "
      >
        {sub}
      </p>
    </div>
  );
}