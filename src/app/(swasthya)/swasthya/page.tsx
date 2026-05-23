import Hero from "@/components/swasthya/hero/Hero";
import HealthStats from "@/components/swasthya/stats/HealthStats";
import AiAssistant from "@/components/swasthya/swasthyaai/AiAssistant";
import ServicesGrid from "@/components/swasthya/services/ServicesGrid";
import DoctorSlider from "@/components/swasthya/doctors/DoctorSlider";
import HealthRecords from "@/components/swasthya/records/HealthRecords";
import SwasthyaCTA from "@/components/swasthya/cta/SwasthyaCTA";
import Footer from "@/components/swasthya/footer/Footer";
import Navbar from "@/components/swasthya/navbar/Navbar";

export default function SwasthyaPage() {
  return (
    <main className="relative overflow-hidden px-4 md:px-6 lg:px-10 py-6">
      <div className="   mx-auto
        max-w-7xl
        px-4
        py-6
        md:px-6
        lg:px-8
        space-y-8">
          <Navbar />  
        <Hero />

        <HealthStats />
        

        <AiAssistant />

        <ServicesGrid />

        <DoctorSlider />

        <HealthRecords />

        <SwasthyaCTA />

        <Footer />
      </div>
    </main>
  );
}