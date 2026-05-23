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
        border border-white/70
        bg-white/70
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,.06)]
      `,
        className
      )}
    >
      {children}
    </div>
  );
}