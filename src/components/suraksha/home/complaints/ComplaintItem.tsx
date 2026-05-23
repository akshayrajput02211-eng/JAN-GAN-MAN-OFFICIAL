interface Props {
  title: string;
}

export default function ComplaintItem({
  title,
}: Props) {
  return (
    <div
      className="
      rounded-2xl border border-slate-100
      bg-white p-5
    "
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Under Investigation
      </p>
    </div>
  );
}