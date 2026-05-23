interface Props {
  title: string;
}

export default function ToolItem({
  title,
}: Props) {
  return (
    <div
      className="
      rounded-2xl bg-white p-5
      transition hover:bg-slate-50
    "
    >
      <h3 className="font-semibold">
        {title}
      </h3>
    </div>
  );
}