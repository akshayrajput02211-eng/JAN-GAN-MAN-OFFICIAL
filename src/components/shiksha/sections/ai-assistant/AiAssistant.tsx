import Image from "next/image";

import Container from "@/components/shiksha/layout/container/Container";
import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

export default function AiAssistant() {
  return (
    <section className="py-24">
      <Container>
        <GlowCard>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                AI Powered
              </div>

              <h2 className="text-5xl font-black leading-tight">
                Your AI Study Assistant
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
                Ask doubts, solve questions and learn smarter with AI.
              </p>

              <button className="mt-8 rounded-2xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-700">
                Chat With AI
              </button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-green-300/30 blur-[120px]" />

              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop"
                alt="AI"
                width={400}
                height={400}
                className="relative rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}