"use client";

import BackgroundScene from "./BackgroundScene";
import FloatingElements from "./FloatingElements";
import BottomInput from "./BottomInput";

import ScrollParallax from "../chat/ScrollParallax";
import RobotAssistant from "../robot/RobotAssistant";

export default function ChatContainer() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#eef7ff]">
      <BackgroundScene />

      <FloatingElements />

      <div className="relative z-20 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-4 px-5 py-5">
          <div className="h-12 w-12 rounded-full bg-white shadow-lg" />

          <div>
            <h1 className="text-2xl font-bold text-[#1d2951]">
              AI Sahayak
            </h1>

            <p className="text-sm text-gray-500">
              Aapka AI dost
            </p>
          </div>
        </div>

        {/* Chat */}
        <div className="relative flex-1 overflow-hidden">
          <ScrollParallax />
        </div>

        {/* Input */}
        <BottomInput />
      </div>

      {/* Robot */}
      <RobotAssistant />
    </div>
  );
}