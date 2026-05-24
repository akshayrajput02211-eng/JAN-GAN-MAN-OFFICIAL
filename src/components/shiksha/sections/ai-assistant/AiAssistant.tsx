import Image from "next/image";

import Container from "@/components/shiksha/layout/container/Container";
import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

export default function AiAssistant() {
  return (
    <section className="py-24">
      <Container>
        <GlowCard>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <div
                className="
                  mb-5
                  inline-flex

                  rounded-full

                  border
                  border-blue-200
                  dark:border-blue-500/20

                  bg-blue-100/80
                  dark:bg-blue-500/10

                  px-4
                  py-2

                  text-sm
                  font-semibold

                  text-[#2563eb]
                  dark:text-blue-400

                  backdrop-blur-xl
                "
              >
                AI Powered
              </div>

              <h2
                className="
                  text-5xl
                  font-black
                  leading-tight

                  text-slate-900
                  dark:text-white
                "
              >
                Your AI Study Assistant
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-relaxed

                  text-slate-500
                  dark:text-slate-400
                "
              >
                Ask doubts, solve questions and learn smarter with AI.
              </p>

              <button
                className="
                  mt-8

                  rounded-2xl

                  bg-[#2563eb]
                  hover:bg-[#1d4ed8]

                  px-7
                  py-4

                  font-semibold
                  text-white

                  shadow-xl
                  shadow-blue-500/30

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-blue-500/40

                  active:scale-95
                "
              >
                Chat With AI
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              {/* Premium Glow */}
              <div
                className="
                  absolute

                  h-72
                  w-72

                  rounded-full

                  bg-blue-400/20
                  dark:bg-blue-600/20

                  blur-[120px]
                "
              />

              {/* Decorative Ring */}
              <div
                className="
                  absolute

                  h-[340px]
                  w-[340px]

                  rounded-full

                  border
                  border-blue-200/50
                  dark:border-blue-500/20
                "
              />

              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop"
                alt="AI"
                width={400}
                height={400}
                className="
                  relative

                  rounded-[40px]

                  border
                  border-white/50
                  dark:border-slate-700/50

                  shadow-2xl
                  shadow-blue-200/40
                  dark:shadow-black/40

                  transition-all
                  duration-500

                  hover:scale-[1.02]
                "
              />
            </div>
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}