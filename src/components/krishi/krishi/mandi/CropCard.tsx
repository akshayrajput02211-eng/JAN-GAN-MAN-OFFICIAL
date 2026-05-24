import Image from "next/image";

export default function CropCard() {
  return (
    <div
      className="
      overflow-hidden
      rounded-[28px]

      border border-white/40 dark:border-slate-700/40

      bg-[#dcfce7]/70 dark:bg-slate-800/70

      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
    "
    >
      <div className="relative h-40">
        <Image
          src="/dummy/wheat.jpg"
          alt="crop"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3
          className="
          font-bold
          text-slate-900 dark:text-white
        "
        >
          Gehu (Wheat)
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span
            className="
            text-2xl font-black
            text-[#16a34a]
          "
          >
            ₹2420
          </span>

          <span
            className="
            text-sm font-semibold
            text-[#16a34a]
          "
          >
            +2.5%
          </span>
        </div>
      </div>
    </div>
  );
}