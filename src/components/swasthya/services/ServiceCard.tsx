import GlassCard from "@/components/swasthyashared/cards/GlassCard";

interface Props {
  title: string;
  subtitle: string;
  icon: string;
}

export default function ServiceCard({
  title,
  subtitle,
  icon,
}: Props) {
  return (
    <GlassCard
      className="
      group p-6 text-center
      cursor-pointer
    "
    >
      <img
        src={icon}
        alt=""
        className="
        mx-auto w-16
        transition-all duration-500
        group-hover:scale-110
      "
      />

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </GlassCard>
  );
}