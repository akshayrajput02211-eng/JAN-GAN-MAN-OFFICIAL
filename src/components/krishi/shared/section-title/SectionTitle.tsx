
import { cn } from "@/lib/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  action?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  action,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-6 flex items-center justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <button
          className="
          rounded-2xl border border-green-200
          bg-white/80 px-5 py-3
          text-sm font-semibold text-green-700
          transition-all duration-300
          hover:-translate-y-1
          hover:border-green-300
          hover:bg-green-50
          hover:shadow-lg
        "
        >
          {action}
        </button>
      )}
    </div>
  );
}