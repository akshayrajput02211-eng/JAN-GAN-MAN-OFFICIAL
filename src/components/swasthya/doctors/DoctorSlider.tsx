import DoctorCard from "./DoctorCard";

const doctors = [
  {
    name: "Dr. Neha Sharma",
    role: "General Physician",
    image: "/assets/swasthya/doctors/d1.png",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Pediatrician",
    image: "/assets/swasthya/doctors/d2.png",
  },
  {
    name: "Dr. Priya Singh",
    role: "Gynecologist",
    image: "/assets/swasthya/doctors/d3.png",
  },
];

export default function DoctorSlider() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Trusted Doctors
          </h2>

          <p className="mt-2 text-slate-500">
            Verified medical experts.
          </p>
        </div>

        <button className="text-blue-600 font-semibold">
          View All
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.name}
            {...doctor}
          />
        ))}
      </div>
    </section>
  );
}