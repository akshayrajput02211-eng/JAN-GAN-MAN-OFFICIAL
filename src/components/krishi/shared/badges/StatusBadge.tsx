
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

interface StatusBadgeProps {
  label: string;
  variant?: "success" | "warning" | "danger";
  className?: string;
}

export default function StatusBadge({
  label,
  variant = "success",
  className,
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        `
        inline-flex items-center gap-2
        rounded-full px-4 py-2
        text-xs font-semibold
      `,
        variant === "success" &&
          "bg-green-100 text-green-700",

        variant === "warning" &&
          "bg-yellow-100 text-yellow-700",

        variant === "danger" &&
          "bg-red-100 text-red-700",

        className
      )}
    >
      <CheckCircle2 className="h-4 w-4" />
      {label}
    </div>
  );
}