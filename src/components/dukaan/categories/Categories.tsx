import Container from "@/components/dukanshared/container/Container";
import CategoryCard from "./CategoryCard";

const categories = [
  "Kirana",
  "Dawaai",
  "Sabzi",
  "Doodh",
  "Bakery",
  "Beauty",
  "Snacks",
];

export default function Categories() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((item) => (
            <CategoryCard key={item} title={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}