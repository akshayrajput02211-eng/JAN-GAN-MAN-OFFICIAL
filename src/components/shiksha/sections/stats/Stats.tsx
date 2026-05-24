// ================================
// components/home/stats/Stats.tsx
// ================================

import Container from "@/components/shiksha/layout/container/Container";

const stats = [
  {
    number: "10K+",
    label: "Students",
  },
  {
    number: "2K+",
    label: "Teachers",
  },
  {
    number: "50K+",
    label: "Notes",
  },
  {
    number: "24/7",
    label: "AI Support",
  },
];

export default function Stats() {
  return (
    <section className="pb-24">
      <Container>
        <div
          className="
            grid
            gap-6
            rounded-[40px]
            border
            border-white/40
            bg-white/70
            p-10
            shadow-xl
            backdrop-blur-xl

            dark:border-slate-700/40
            dark:bg-slate-800/70

            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <h3 className="text-5xl font-black text-blue-600">
                {item.number}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-500

                  dark:text-slate-400
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}