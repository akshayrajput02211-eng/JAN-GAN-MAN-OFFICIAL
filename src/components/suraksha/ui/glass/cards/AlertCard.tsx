interface Props {
  title: string;
  location: string;
  time: string;
}

export default function AlertCard({
  title,
  location,
  time,
}: Props) {
  return (
    <div
      className="
        rounded-2xl

        border border-white/70

        bg-white/70

        p-5

        transition-all duration-300

        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-lg

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <div className="flex justify-between gap-4">
        <div>
          <h4
            className="
              font-semibold
              text-slate-900

              dark:text-white
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-1

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