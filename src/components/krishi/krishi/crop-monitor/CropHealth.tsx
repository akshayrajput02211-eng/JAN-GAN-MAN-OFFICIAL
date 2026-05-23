

import HealthBar from "./HealthBar";
import CropPreview from "./CropPreview";

export default function CropHealth() {
  return (
    <section
      className="
      rounded-[40px]
      border border-white/40
      bg-white/70 p-8
      shadow-[0_20px_80px_rgba(34,197,94,0.10)]
      backdrop-blur-2xl
    "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Crop Health Monitor
          </h2>

          <p className="mt-2 text-slate-500">
            AI se crop analysis
          </p>
        </div>

        <span
          className="
          rounded-full bg-green-100
          px-4 py-2 text-sm
          font-bold text-green-700
        "
        >
          GOOD
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Health Score
            </p>

            <h3 className="text-5xl font-black text-slate-900">
              82
            </h3>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-500">
              Water Level
            </p>

            <h4 className="font-bold text-green-600">
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