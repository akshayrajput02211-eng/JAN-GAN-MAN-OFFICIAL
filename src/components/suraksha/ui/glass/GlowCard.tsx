import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        `
          relative overflow-hidden

          rounded-[32px]

          border border-white/70

          bg-white/80

          backdrop-blur-2xl

          transition-all duration-500

          hover:-translate-y-1
          hover:shadow-2xl

          dark:border-slate-700/50
          dark:bg-slate-800/70
        `,
        className
      )}
    >
      {/* Glow */}

      <div
        className="
          absolute -right-10 -top-10

          h-40 w-40

          rounded-full

          bg-blue-500/20

          blur-3xl
        "
      />

      {children}
    </div>
  );
}