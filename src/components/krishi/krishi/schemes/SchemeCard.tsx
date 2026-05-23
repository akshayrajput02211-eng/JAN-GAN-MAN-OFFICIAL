
interface Props {
  title: string;
  amount: string;
}

export default function SchemeCard({
  title,
  amount,
}: Props) {
  return (
    <div
      className="
      rounded-[30px]
      border border-white/40
      bg-white/70 p-6
      backdrop-blur-2xl
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <div
        className="
        flex h-14 w-14 items-center justify-center
        rounded-2xl bg-green-100
        text-2xl
      "
      >
        🌱
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Eligible Farmers
      </p>

      <h4 className="mt-4 text-2xl font-black text-green-600">
        {amount}
      </h4>

      <button
        className="
        mt-6 rounded-2xl
        bg-green-500 px-5 py-3
        text-sm font-semibold text-white
      "
      >
        Apply Karein
      </button>
    </div>
  );
}