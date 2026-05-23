import Container from "@/components/shiksha/layout/container/Container";
import SectionTitle from "@/components/shiksha/shared/section-title/SectionTitle";
import DoubtItem from "./DoubtItem";

const doubts = [
  "Explain quadratic equations.",
  "Difference between AC and DC?",
  "How photosynthesis works?",
];

export default function Doubts() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Ask AI Doubts"
          subtitle="Get instant smart AI answers"
        />

        <div className="grid gap-4">
          {doubts.map((item) => (
            <DoubtItem
              key={item}
              question={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}