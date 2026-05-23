import Container from "@/components/dukanshared/container/Container";

export default function QuickOrder() {
  const items = [
    "Milk",
    "Bread",
    "Eggs",
    "Rice",
    "Salt",
  ];

  return (
    <section className="py-10">
      <Container>
        <div className="bg-white rounded-[30px] border border-slate-100 p-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="px-5 py-4 rounded-2xl bg-slate-50 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <button className="h-14 px-8 rounded-2xl bg-green-600 text-white font-black">
            View Cart
          </button>
        </div>
      </Container>
    </section>
  );
}