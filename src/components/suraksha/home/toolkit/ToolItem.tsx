interface Props {
  title: string;
}

export default function ToolItem({
  title,
}: Props) {
  return (
    <div
      className="
        rounded-2xl

        bg-white

        p-5

        transition-all duration-300

        hover:bg-slate-50

        dark:bg-slate-800
        dark:hover:bg-slate-700
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
    </div>
  );
}