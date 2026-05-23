
interface Props {
  month: string;
  work: string;
}

export default function TimelineStep({
  month,
  work,
}: Props) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="
        flex h-6 w-6 items-center justify-center
        rounded-full bg-green-500
        ring-8 ring-green-100
      "
      />

      <h3 className="mt-4 font-bold text-slate-900">
        {month}
      </h3>

      <p className="mt-1 text-center text-sm text-slate-500">
        {work}
      </p>
    </div>
  );
}