

import {
  Mic,
  ScanText,
  MessageSquare,
} from "lucide-react";

import AIActionButton from "./AIActionButton";
import AIChatInput from "./AIChatInput";
import RobotIllustration from "./RobotIllustration";

export default function AISection() {
  return (
    <section
      className="
      relative overflow-hidden
      rounded-[40px]
      border border-white/40
      bg-white/70 p-8
      shadow-[0_20px_80px_rgba(34,197,94,0.12)]
      backdrop-blur-2xl
    "
    >
      {/* Glow */}
      <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[220px_1fr]">
        <RobotIllustration />

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-black text-slate-900">
              AI Krishi Sahayak
            </h2>

            <span
              className="
              rounded-full bg-green-100
              px-3 py-1 text-xs
              font-bold text-green-700
            "
            >
              BETA
            </span>
          </div>

          <p className="mt-3 text-slate-600">
            Apne khet aur fasal se related sawaal
            poochhein aur instant salah paayein.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <AIActionButton
              title="Text"
              icon={MessageSquare}
            />

            <AIActionButton
              title="Voice"
              icon={Mic}
            />

            <AIActionButton
              title="Photo Upload"
              icon={ScanText}
            />
          </div>

          <AIChatInput />

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Meri fasal pe peele daag hain",
              "Kaunsi khaad daalein?",
              "Pani kab dena chahiye?",
            ].map((item, i) => (
              <button
                key={i}
                className="
                rounded-full bg-white/80
                px-4 py-3 text-sm text-slate-600
                shadow-sm transition-all duration-300
                hover:bg-green-50
                hover:text-green-700
              "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}