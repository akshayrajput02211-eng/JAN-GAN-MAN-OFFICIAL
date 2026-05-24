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
        rounded-2xl

        border border-white/70

        bg-white

        p-5

        transition-all duration-300

        hover:border-blue-200
        hover:shadow-md

        dark:border-slate-700/50
        dark:bg-slate-800
      "
    >
      <div className="flex justify-between gap-4">
        <div>
          <h3
            className="
              font-semibold
              text-slate-900

              dark:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            {location}
          </p>
        </div>

        <span
          className="
            text-xs
            text-slate-400

            dark:text-slate-500
          "
        >
          {time}
        </span>
      </div>
    </div>
  );
}