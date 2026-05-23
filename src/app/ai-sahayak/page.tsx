import "@/styles/ai-sahayak.css";

import Navbar from "@/components/ai-sahayak/shared/Navbar";

import BottomNav from "@/components/ai-sahayak/shared/BottomNav";

import ChatContainer from "@/components/ai-sahayak/layout/ChatContainer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7fb]">
      {/* TOP NAVBAR */}

      <Navbar />

      {/* CHAT AREA */}

      <div
        className="
          mx-auto
          max-w-[1600px]

          pt-28
          pb-40
        "
      >
        <ChatContainer />
      </div>

      {/* BOTTOM NAVBAR */}

      <BottomNav />
    </main>
  );
}