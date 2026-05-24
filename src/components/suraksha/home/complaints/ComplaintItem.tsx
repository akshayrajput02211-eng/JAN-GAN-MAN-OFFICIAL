interface Props {
  title: string;
}

export default function ComplaintItem({
  title,
}: Props) {
  return (
    <div
      className="
        rounded-2xl

        border border-white/70

        bg-white

        p-5

        dark:border-slate-700/50
        dark:bg-slate-800
      "
    >
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
          mt-1

          text-sm
          text-slate-500

          dark:text-slate-400
        "
      >
        Under Investigation
      </p>
    </div>
  );
}