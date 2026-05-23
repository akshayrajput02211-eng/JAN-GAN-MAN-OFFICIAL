import Container from "@/components/dukanshared/container/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative py-8 lg:py-12 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-[#eef9ec] to-white rounded-[40px] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white">
          <HeroLeft />
          <HeroRight />
        </div>
      </Container>
    </section>
  );
}