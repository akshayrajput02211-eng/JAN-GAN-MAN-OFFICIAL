import Image from "next/image";
import Container from "@/components/shiksha/layout/container/Container";
import PrimaryButton from "@/components/shiksha/shared/buttons/PrimaryButton";
import FadeUp from "@/components/shiksha/shared/motion/FadeUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      <div className="hero-glow top-[-150px] left-[-100px]" />
      <div className="hero-glow bottom-[-200px] right-[-100px]" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div>
              <div className="mb-6 inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-medium text-green-700">
                India’s Smart Education Platform
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                Padhai Ab
                <span className="text-green-600"> Aasaan </span>
                Hai
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-500 leading-relaxed">
                Learn with premium teachers, AI doubt solving, smart notes and live classes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>Start Learning</PrimaryButton>

                <button className="rounded-2xl border border-gray-200 bg-white px-6 py-3 font-semibold shadow-sm transition hover:scale-105">
                  Explore Teachers
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                {["JEE", "NEET", "CBSE", "Class 10"].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full bg-white px-5 py-2 text-sm shadow"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-green-200 to-transparent blur-3xl opacity-60" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 p-3 shadow-2xl backdrop-blur-xl">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="hero"
                  width={1000}
                  height={800}
                  className="h-[600px] w-full rounded-[30px] object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}