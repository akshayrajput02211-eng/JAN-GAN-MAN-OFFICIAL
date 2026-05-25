// ========================================
// FILE: src/components/suraksha/emergency/EmergencyNumbers.tsx
// ========================================

"use client";

const numbers = [
  {
    title: "Police",
    number: "100",
    color: "from-indigo-600 to-indigo-500",
    emoji: "🚨",
  },

  {
    title: "Ambulance",
    number: "108",
    color: "from-red-600 to-rose-500",
    emoji: "🚑",
  },

  {
    title: "Women Helpline",
    number: "1091",
    color: "from-pink-600 to-rose-500",
    emoji: "👩",
  },

  {
    title: "Fire",
    number: "101",
    color: "from-orange-500 to-red-500",
    emoji: "🔥",
  },
];

export default function EmergencyNumbers() {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        Quick Numbers
      </h2>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {numbers.map((item) => (
          <a
            key={item.number}
            href={`tel:${item.number}`}
            className={`
              rounded-[34px]

              bg-gradient-to-r ${item.color}

              p-7

              text-white

              shadow-xl

              transition-all
              duration-300

              hover:scale-[1.02]
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold">
                  {item.emoji} {item.title}
                </p>

                <h3 className="mt-3 text-6xl font-black leading-none">
                  {item.number}
                </h3>

                <p className="mt-4 text-sm font-semibold text-white/80">
                  Tap to Call
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}