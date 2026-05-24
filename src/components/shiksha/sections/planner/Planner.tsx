// ================================
// components/home/planner/Planner.tsx
// ================================

import Container from "@/components/shiksha/layout/container/Container";

import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

const plans = [
  "Math Practice",
  "Physics Revision",
  "English Grammar",
  "Mock Test",
];

export default function Planner() {
  return (
    <section className="py-24">
      <Container>
        <GlowCard>
          <h2
            className="
              text-4xl
              font-black

              dark:text-white
            "
          >
            Study Planner
          </h2>

          <div className="mt-10 space-y-4">
            {plans.map((plan) => (
              <div
                key={plan}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5

                  dark:border-slate-700
                  dark:bg-slate-800
                "
              >
                <span
                  className="
                    font-medium

                    dark:text-white
                  "
                >
                  {plan}
                </span>

                <button
                  className="
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-2
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Start
                </button>
              </div>
            ))}
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}