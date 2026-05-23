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
      rounded-2xl bg-white p-4
      shadow-sm transition-all
      hover:scale-105 hover:shadow-lg
    "
    >
      <Icon size={20} />
    </button>
  );
}