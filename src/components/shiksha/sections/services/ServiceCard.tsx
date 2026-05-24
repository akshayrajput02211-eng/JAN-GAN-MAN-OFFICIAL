import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  icon,
}: Props) {
  return (
    <GlowCard>
      <div className="group">
        <div
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl

            bg-blue-100
            text-[#2563eb]

            shadow-lg
            shadow-blue-100/60

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:bg-[#2563eb]
            group-hover:text-white
          "
        >
          {icon}
        </div>

        <h3
          className="
            text-xl
            font-bold

            text-slate-900
            dark:text-white

            transition-colors
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            leading-relaxed

            text-slate-600
            dark:text-slate-400
          "
        >
          Smart premium learning experience with
          modern interactive education tools.
        </p>

        <button
          className="
            mt-6

            rounded-xl

            bg-blue-50
            dark:bg-slate-800

            px-5
            py-2

            font-semibold

            text-[#2563eb]
            dark:text-blue-400

            border
            border-blue-100
            dark:border-slate-700

            transition-all
            duration-300

            hover:bg-[#2563eb]
            hover:text-white

            hover:shadow-lg
            hover:shadow-blue-200/50

            dark:hover:bg-[#1d4ed8]
          "
        >
          Explore
        </button>
      </div>
    </GlowCard>
  );
}