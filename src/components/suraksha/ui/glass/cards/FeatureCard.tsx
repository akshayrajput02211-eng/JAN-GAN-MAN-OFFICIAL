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
      group rounded-[30px]
      border border-white/70
      bg-white/70 p-6
      transition-all duration-300
      hover:-translate-y-1
    "
    >
      <div
        className="
        mb-5 flex h-14 w-14
        items-center justify-center
        rounded-2xl
        bg-gradient-to-br
        from-green-100 to-blue-100
      "
      >
        <Icon className="text-green-600" />
      </div>

      <h3 className="font-bold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}