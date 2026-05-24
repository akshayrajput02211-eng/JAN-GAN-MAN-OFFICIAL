import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

export default function IconButton({
  icon: Icon,
}: Props) {
  return (
    <button
      className="
        rounded-2xl

        border border-white/70

        bg-white

        p-4

        shadow-sm

        transition-all duration-300

        hover:scale-105
        hover:shadow-lg

        dark:border-slate-700/50
        dark:bg-slate-800
        dark:text-white
      "
    >
      <Icon size={20} />
    </button>
  );
}