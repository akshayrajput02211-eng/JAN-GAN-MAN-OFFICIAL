// ========================================
// FILE: src/components/suraksha/emergency/SafetyTips.tsx
// ========================================

"use client";

export default function SafetyTips() {
  const tips = [
    "Safe jagah par jaane ki koshish karo",
    "Phone ki battery aur internet on rakho",
    "Emergency contact ko immediately inform karo",
    "Public area mein help maango",
  ];

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        Safety Tips
      </h2>

      <div className="mt-7 grid gap-4">
        {tips.map((tip) => (
          <div
            key={tip}
            className="
              rounded-[24px]

              border border-white/50

              bg-white/70
              dark:bg-slate-800/70

              p-5

              text-lg
              font-semibold

              text-slate-700
              dark:text-slate-200

              backdrop-blur-xl
            "
          >
            • {tip}
          </div>
        ))}
      </div>
    </section>
  );
}