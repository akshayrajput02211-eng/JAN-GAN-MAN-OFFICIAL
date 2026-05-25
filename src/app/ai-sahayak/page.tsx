import "@/styles/ai-sahayak.css";

import Navbar from "@/components/ai-sahayak/shared/Navbar";



import AIChatPage from "@/components/ai-sahayak/chat/AIChatPage";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f6fb] dark:bg-[#07111f] transition-colors duration-300">

      <Navbar />

      <AIChatPage />

    </main>
  );
}