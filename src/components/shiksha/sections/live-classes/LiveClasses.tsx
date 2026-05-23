import Container from "@/components/shiksha/layout/container/Container";
import SectionTitle from "@/components/shiksha/shared/section-title/SectionTitle";
import LiveClassCard from "./LiveClassCard";

export default function LiveClasses() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Live Classes"
          subtitle="Interactive premium sessions"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LiveClassCard />
          <LiveClassCard />
          <LiveClassCard />
        </div>
      </Container>
    </section>
  );
}