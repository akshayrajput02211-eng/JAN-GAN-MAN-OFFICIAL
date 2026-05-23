

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
      border border-white/40
      bg-white/70 p-6
      backdrop-blur-2xl
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
        <Icon className="h-7 w-7 text-green-600" />
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-900">
        {value}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {sub}
      </p>
    </div>
  );
}