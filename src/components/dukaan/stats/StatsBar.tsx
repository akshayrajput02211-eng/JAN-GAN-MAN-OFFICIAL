import Container from "@/components/dukanshared/container/Container";

export default function StatsBar() {
  const stats = [
    "5000+ Dukaan",
    "2500+ Users",
    "24 Hrs Support",
    "5 KM Delivery",
  ];

  return (
    <section className="pb-20">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item}
              className="bg-white rounded-[26px] p-6 text-center shadow-sm border border-slate-100"
            >
              <h3 className="text-3xl font-black text-green-700">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}