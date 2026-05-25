"use client";

interface Props {
  title: string;
  status: string;
}

export default function PostCard({
  title,
  status,
}: Props) {
  return (
    <div
      className="
        rounded-[30px]
        border
        border-white/50
        bg-white/70
        p-5
        shadow-lg
        backdrop-blur-xl
        dark:bg-slate-800/70
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold dark:text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Posted 2 days ago
          </p>
        </div>

        <span
          className={`
            rounded-full
            px-4
            py-1
            text-xs
            font-semibold
            ${
              status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {status}
        </span>
      </div>
    </div>
  );
}