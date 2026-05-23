interface Props {
  title: string;
  location: string;
  time: string;
}

export default function AlertItem({
  title,
  location,
  time,
}: Props) {
  return (
    <div
      className="
      rounded-2xl border border-slate-100
      bg-white p-5 transition
      hover:border-orange-200
    "
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {location}
          </p>
        </div>

        <span className="text-xs text-slate-400">
          {time}
        </span>
      </div>
    </div>
  );
}