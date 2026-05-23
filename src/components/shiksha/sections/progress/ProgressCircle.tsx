interface Props {
  progress?: number;
}

export default function ProgressCircle({
  progress = 75,
}: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="
          absolute
          h-44
          w-44
          rounded-full
          bg-green-300/20
          blur-3xl
        "
      />

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
          border-green-500
          bg-white
          shadow-2xl
        "
      >
        <div className="text-center">
          <h2 className="text-4xl font-black text-green-700">
            {progress}%
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}