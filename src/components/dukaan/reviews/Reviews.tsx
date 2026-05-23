import Container from "@/components/dukanshared/container/Container";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-6">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Container>
    </section>
  );
}