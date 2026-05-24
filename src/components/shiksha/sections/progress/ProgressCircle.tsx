// ================================
// components/shared/progress/ProgressCircle.tsx
// ================================

interface Props {
  progress?: number;
}

export default function ProgressCircle({
  progress = 75,
}: Props) {
  return (
    <div className="relative flex items-center justify-center">
      {/* ================= GLOW ================= */}

      <div
        className="
          absolute
          h-44
          w-44
          rounded-full
          bg-blue-300/20
          blur-3xl
        "
      />

      {/* ================= CIRCLE ================= */}

      <div
        className="
          relative

          flex
          h-40
          w-40
          items-center
          justify-center

          rounded-full

          border-[12px]
          border-blue-500

          bg-white

          shadow-2xl

          dark:bg-slate-800
        "
      >
        <div className="text-center">
          <h2
            className="
              text-4xl
              font-black
              text-blue-700

              dark:text-blue-400
            "
          >
            {progress}%
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500

              dark:text-slate-400
            "
          >
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}