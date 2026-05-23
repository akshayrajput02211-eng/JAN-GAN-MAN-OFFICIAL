

interface Props {
  value: number;
}

export default function HealthBar({
  value,
}: Props) {
  return (
    <div className="mt-4">
      <div
        className="
        h-4 overflow-hidden rounded-full
        bg-slate-200
      "
      >
        <div
          style={{ width: `${value}%` }}
          className="
          h-full rounded-full
          bg-gradient-to-r
          from-green-400 to-emerald-600
        "
        />
      </div>
    </div>
  );
}