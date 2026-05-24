import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  subtitle,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
        group

        rounded-[30px]

        border border-white/70

        bg-white/70

        p-6

        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <div
        className="
          mb-5

          flex h-14 w-14
          items-center justify-center

          rounded-2xl

          bg-gradient-to-br
          from-blue-100
          to-blue-200

          dark:from-slate-800
          dark:to-slate-700
        "
      >
        <Icon
          className="
            text-blue-800

            dark:text-blue-400
          "
        />
      </div>

      <h3
        className="
          font-bold
          text-slate-900

          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-1

          text-sm
          text-slate-500

          dark:text-slate-400
        "
      >
        {subtitle}
      </p>
    </div>
  );
}