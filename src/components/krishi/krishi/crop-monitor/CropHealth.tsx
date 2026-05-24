import HealthBar from "./HealthBar";
import CropPreview from "./CropPreview";

export default function CropHealth() {
  return (
    <section
      className="
      rounded-[40px]
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6 md:p-8
      shadow-[0_20px_80px_rgba(22,163,74,0.10)]
      backdrop-blur-2xl
    "
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2
            className="
            text-2xl md:text-3xl
            font-black
            text-slate-900 dark:text-white
          "
          >
            Crop Health Monitor
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AI se crop analysis
          </p>
        </div>

        <span
          className="
          rounded-full
          bg-green-100 dark:bg-slate-800
          px-4 py-2
          text-sm font-bold
          text-[#065f46] dark:text-green-300
        "
        >
          GOOD
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Health Score
            </p>

            <h3
              className="
              text-5xl font-black
              text-slate-900 dark:text-white
            "
            >
              82
            </h3>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Water Level
            </p>

            <h4 className="font-bold text-[#16a34a]">
              Medium
            </h4>
          </div>
        </div>

        <HealthBar value={82} />
      </div>

      <div className="mt-8">
        <CropPreview />
      </div>
    </section>
  );
}