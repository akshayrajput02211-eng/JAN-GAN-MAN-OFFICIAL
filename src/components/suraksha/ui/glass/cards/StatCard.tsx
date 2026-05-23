interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
      rounded-[28px]
      bg-white/70 p-5
      backdrop-blur-xl
    "
    >
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-black">
        {value}
      </h2>
    </div>
  );
}