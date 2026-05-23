
import { Plus } from "lucide-react";

export default function AddKhetCard() {
  return (
    <button
      className="
      flex min-h-[360px] flex-col items-center justify-center
      rounded-[30px]
      border border-dashed border-green-300
      bg-white/70
      transition-all duration-300
      hover:bg-green-50
      hover:shadow-xl
    "
    >
      <div
        className="
        flex h-16 w-16 items-center justify-center
        rounded-full bg-green-500 text-white
      "
      >
        <Plus className="h-8 w-8" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        Naya Khet Jodein
      </h3>
    </button>
  );
}