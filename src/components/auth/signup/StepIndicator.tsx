"use client";

interface Props {
  step: number;
}

export default function StepIndicator({ step }: Props) {
  const steps = [1, 2, 3];

  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      {steps.map((item) => (
        <div
          key={item}
          className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold transition-all ${
            step >= item
              ? "bg-green-500 text-white border-green-500"
              : "border-slate-300 bg-white text-slate-500"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}