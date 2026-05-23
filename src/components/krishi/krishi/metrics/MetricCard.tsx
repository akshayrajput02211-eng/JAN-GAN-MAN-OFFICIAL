

interface Props {
  value: string;
  label: string;
}

export default function MetricCard({
  value,
  label,
}: Props) {
  return (
    <div
      className="
      rounded-[30px]
      border border-white/40
      bg-white/70 p-6
      text-center
      backdrop-blur-2xl
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <h2 className="text-4xl font-black text-green-600">
        {value}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}