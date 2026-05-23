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
            bg-green-100
            text-green-700
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-green-600
            group-hover:text-white
          "
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-500">
          Smart premium learning experience with
          modern interactive education tools.
        </p>

        <button
          className="
            mt-6
            rounded-xl
            bg-green-50
            px-5
            py-2
            font-semibold
            text-green-700
            transition-all
            duration-300
            hover:bg-green-600
            hover:text-white
          "
        >
          Explore
        </button>
      </div>
    </GlowCard>
  );
}