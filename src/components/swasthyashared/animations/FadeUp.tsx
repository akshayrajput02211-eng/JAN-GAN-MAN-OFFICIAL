import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
        rounded-[32px]
        border border-white/40
        bg-white/70
        backdrop-blur-xl
        shadow-[0_10px_60px_rgba(0,0,0,0.06)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
      `,
        className
      )}
    >
      {children}
    </div>
  );
}