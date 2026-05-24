import { Plus } from "lucide-react";

export default function AddKhetCard() {
  return (
    <button
      className="
      flex min-h-[360px]
      w-full
      flex-col items-center justify-center

      rounded-[30px]

      border border-dashed
      border-green-300 dark:border-slate-700/40

      bg-[#dcfce7]/70 dark:bg-slate-800/70

      transition-all duration-300

      hover:bg-green-50
      hover:shadow-xl
    "
    >
      <div
        className="
        flex h-16 w-16 items-center justify-center

        rounded-full

        bg-gradient-to-r
        from-[#16a34a]
        to-[#065f46]

        text-white
      "
      >
        <Plus className="h-8 w-8" />
      </div>

      <h3
        className="
        mt-5 text-center
        text-xl font-bold
        text-slate-900 dark:text-white
      "
      >
        Naya Khet Jodein
      </h3>
    </button>
  );
}