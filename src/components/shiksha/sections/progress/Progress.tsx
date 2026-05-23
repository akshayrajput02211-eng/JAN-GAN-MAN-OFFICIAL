import Container from "@/components/shiksha/layout/container/Container";
import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";
import ProgressCircle from "./ProgressCircle";

export default function Progress() {
  return (
    <section className="py-24">
      <Container>
        <GlowCard>
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <ProgressCircle />

            <div>
              <h2 className="text-4xl font-black">
                Great Going!
              </h2>

              <p className="mt-4 max-w-lg text-lg text-gray-500">
                Your study progress is improving every day.
              </p>

              <div className="mt-8 flex gap-10">
                <div>
                  <h3 className="text-3xl font-black text-green-600">
                    24h
                  </h3>

                  <p className="text-gray-500">
                    Study Hours
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-green-600">
                    78%
                  </h3>

                  <p className="text-gray-500">
                    Accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}