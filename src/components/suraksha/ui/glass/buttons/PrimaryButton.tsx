import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className,
}: Props) {
  return (
    <button
      className={cn(
        `
        rounded-2xl
        bg-gradient-to-r
        from-green-500
        to-emerald-600
        px-6 py-4
        font-semibold text-white
        shadow-lg
        transition-all duration-300
        hover:scale-105
        hover:shadow-green-300/40
      `,
        className
      )}
    >
      {children}
    </button>
  );
}