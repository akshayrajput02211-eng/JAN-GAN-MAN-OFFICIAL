import AboutHero from "@/components/about/hero/AboutHero";
import MissionSection from "@/components/about/mission/MissionSection";
import StorySection from "@/components/about/story/StorySection";
import TeamSection from "@/components/about/team/TeamSection";
import AboutCTA from "@/components/about/cta/AboutCTA";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f4f8ff] text-slate-900 dark:bg-[#07111f] dark:text-white">
      <AboutHero />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}