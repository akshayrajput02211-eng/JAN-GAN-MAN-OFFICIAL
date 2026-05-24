interface Props {
  name: string;
  number: string;
}

export default function ContactCard({
  name,
  number,
}: Props) {
  return (
    <div
      className="
        flex items-center justify-between

        rounded-2xl

        border border-white/70

        bg-white/70

        p-4

        transition-all duration-300

        hover:bg-slate-50
        hover:shadow-md

        dark:border-slate-700/50
        dark:bg-slate-800/70
        dark:hover:bg-slate-800
      "
    >
      <div>
        <h4
          className="
            font-semibold
            text-slate-900

            dark:text-white
          "
        >
          {name}
        </h4>

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

          text-sm
          font-semibold

          text-blue-800

          transition-all duration-300

          hover:scale-105

          dark:bg-slate-800
          dark:text-blue-400
        "
      >
        Call
      </button>
    </div>
  );
}