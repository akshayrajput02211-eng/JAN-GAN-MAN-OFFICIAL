interface Props {
  name: string;
  number: string;
}

export default function ContactItem({
  name,
  number,
}: Props) {
  return (
    <div
      className="
      flex items-center justify-between
      rounded-2xl bg-white p-4
    "
    >
      <div>
        <h3 className="font-semibold">
          {name}
        </h3>

        <p className="text-sm text-slate-500">
          {number}
        </p>
      </div>

      <button
        className="
        rounded-xl bg-green-100
        px-4 py-2 text-green-700
      "
      >
        Call
      </button>
    </div>
  );
}