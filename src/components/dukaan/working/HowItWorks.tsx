import Container from "@/components/dukanshared/container/Container";
import StepCard from "./StepCard";

const steps = [
  "Dukaan Dhundo",
  "Order Karo",
  "Ghar Tak Delivery",
  "Samaan Pao",
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-5xl font-black mb-14">
          Dukaan Kaise Kaam Karta Hai?
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <StepCard
              key={item}
              title={item}
              number={index + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}