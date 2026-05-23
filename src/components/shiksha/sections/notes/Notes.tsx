import Container from "@/components/shiksha/layout/container/Container";
import SectionTitle from "@/components/shiksha/shared/section-title/SectionTitle";
import NotesCard from "./NotesCard";

const notes = [
  "Physics Notes",
  "Math Formula",
  "English Grammar",
  "Chemistry Reactions",
];

export default function Notes() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Notes & Study Material"
          subtitle="Premium downloadable notes"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {notes.map((note) => (
            <NotesCard
              key={note}
              title={note}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}