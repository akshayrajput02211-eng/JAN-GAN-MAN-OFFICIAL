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

        rounded-2xl

        border border-white/70

        bg-white

        p-4

        dark:border-slate-700/50
        dark:bg-slate-800
      "
    >
      <div>
        <h3
          className="
            font-semibold
            text-slate-900

            dark:text-white
          "
        >
          {name}
        </h3>

        <p
          className="
            text-sm
            text-slate-500

            dark:text-slate-400
          "
        >
          {number}
        </p>
      </div>

      <button
        className="
          rounded-xl

          bg-blue-100

          px-4 py-2

          font-semibold
          text-blue-800

          dark:bg-slate-700
          dark:text-blue-400
        "
      >
        Call
      </button>
    </div>
  );
}