import Container from "@/components/shiksha/layout/container/Container";
import SectionTitle from "@/components/shiksha/shared/section-title/SectionTitle";
import TeacherCard from "./TeacherCard";

const teachers = [
  {
    name: "Rohit Sharma",
    subject: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Neha Ma'am",
    subject: "Science",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amit Sir",
    subject: "Physics",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Teachers() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Find Premium Teachers"
          subtitle="Learn from India’s top verified teachers"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
   