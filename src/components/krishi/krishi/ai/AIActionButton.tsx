
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
}

export default function AIActionButton({
  title,
  icon: Icon,
}: Props) {
  return (
    <button
      className="
      flex items-center gap-2
      rounded-2xl border border-white/40
      bg-white/80 px-4 py-3
      text-sm font-semibold text-slate-700
      backdrop-blur-xl
      transition-all duration-300
      hover:-translate-y-1
      hover:border-green-300
      hover:bg-green-50
      hover:shadow-lg
    "
    >
      <Icon className="h-4 w-4 text-green-600" />
      {title}
    </button>
  );
}