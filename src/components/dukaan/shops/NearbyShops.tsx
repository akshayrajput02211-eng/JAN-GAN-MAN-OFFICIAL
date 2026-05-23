import Container from "@/components/dukanshared/container/Container";
import ShopCard from "./ShopCard";

const shops = [1, 2, 3, 4];

export default function NearbyShops() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black">
              Aapke Paas Ki Dukaan
            </h2>
            <p className="text-slate-500 mt-2">
              Nearby verified shops
            </p>
          </div>

          <button className="px-6 h-12 rounded-full bg-green-600 text-white font-semibold">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {shops.map((item) => (
            <ShopCard key={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}