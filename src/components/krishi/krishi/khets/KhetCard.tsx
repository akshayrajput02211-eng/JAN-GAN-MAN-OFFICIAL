

import Image from "next/image";

export default function KhetCard() {
  return (
    <div
      className="
      overflow-hidden rounded-[30px]
      border border-white/40
      bg-white/70
      backdrop-blur-2xl
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src="/dummy/field.jpg"
          alt="field"
          fill
          className="
          object-cover transition-transform duration-500
          hover:scale-110
        "
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            Khet - 1
          </h3>

          <span className="text-green-600 font-bold">
            3.20 Bigha
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Gehu • Tubewell • Delhi
        </p>

        <button
          className="
          mt-5 w-full rounded-2xl
          bg-green-500 py-3
          text-sm font-semibold text-white
        "
        >
          Details
        </button>
      </div>
    </div>
  );
}