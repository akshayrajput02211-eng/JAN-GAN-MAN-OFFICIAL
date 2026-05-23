interface Props {
  title: string;
  icon: React.ReactNode;
}

export default function ActionCard({
  title,
  icon,
}: Props) {
  return (
    <button
      className="
        flex items-center gap-3
        rounded-2xl bg-white/70
        p-4 backdrop-blur-xl
        transition hover:scale-105
      "
    >
      <div>{icon}</div>

      <span className="font-medium">
        {title}
      </span>
    </button>
  );
}