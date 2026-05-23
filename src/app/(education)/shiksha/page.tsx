import Navbar from "@/components/shiksha/layout/navbar/Navbar";

import Hero from "@/components/shiksha/sections/hero/Hero";

import Services from "@/components/shiksha/sections/services/Services";

import Teachers from "@/components/shiksha/sections/teachers/Teachers";

import Notes from "@/components/shiksha/sections/notes/Notes";

import Doubts from "@/components/shiksha/sections/doubts/Doubts";

import LiveClasses from "@/components/shiksha/sections/live-classes/LiveClasses";

import Progress from "@/components/shiksha/sections/progress/Progress";

import Planner from "@/components/shiksha/sections/planner/Planner";

import AiAssistant from "@/components/shiksha/sections/ai-assistant/AiAssistant";

import Stats from "@/components/shiksha/sections/stats/Stats";

import Footer from "@/components/shiksha/layout/footer/Footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f8faf8]">
      <Navbar />

      <Hero />

      <Services />

      <Teachers />

      <Notes />

      <Doubts />

      <LiveClasses />

      <Progress />

      <Planner />

      <AiAssistant />

      <Stats />

      <Footer />
    </main>
  );
}