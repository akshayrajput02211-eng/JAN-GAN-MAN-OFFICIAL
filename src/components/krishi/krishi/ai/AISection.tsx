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
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6 md:p-8
      shadow-[0_20px_80px_rgba(22,163,74,0.12)]
      backdrop-blur-2xl
    "
    >
      {/* Glow */}
      <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[#16a34a]/20 blur-3xl" />

      <div
        className="
        relative z-10
        grid gap-8
        lg:grid-cols-[220px_1fr]
      "
      >
        <RobotIllustration />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2
              className="
              text-2xl md:text-3xl
              font-black
              text-slate-900 dark:text-white
            "
            >
              AI Krishi Sahayak
            </h2>

            <span
              className="
              rounded-full
              bg-green-100 dark:bg-slate-800
              px-3 py-1
              text-xs font-bold
              text-[#065f46] dark:text-green-300
            "
            >
              BETA
            </span>
          </div>

          <p
            className="
            mt-3
            text-slate-600 dark:text-slate-300
          "
          >
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
                rounded-full
                border border-white/40 dark:border-slate-700/40
                bg-white/80 dark:bg-slate-800/80
                px-4 py-3
                text-sm
                text-slate-600 dark:text-slate-300
                shadow-sm
                transition-all duration-300
                hover:bg-green-50
                hover:text-[#16a34a]
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