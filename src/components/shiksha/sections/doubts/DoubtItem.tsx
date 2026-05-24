// ================================
// components/doubts/DoubtItem.tsx
// ================================

import {
  Brain,
  Clock3,
} from "lucide-react";

interface Props {
  question: string;
}

export default function DoubtItem({
  question,
}: Props) {
  return (
    <div
      className="
        group
        rounded-[28px]
        border
        border-white/40
        bg-white/80
        p-6
        shadow-lg
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]

        dark:border-slate-700/40
        dark:bg-slate-800/80
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-blue-100
            text-blue-700
            transition-all
            duration-500

            group-hover:bg-blue-600
            group-hover:text-white

            dark:bg-blue-500/10
            dark:text-blue-300
          "
        >
          <Brain size={24} />
        </div>

        <div className="flex-1">
          <h3
            className="
              text-lg
              font-semibold
              leading-relaxed
              text-gray-800

              dark:text-white
            "
          >
            {question}
          </h3>

          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              text-sm
              text-gray-500

              dark:text-slate-400
            "
          >
            <Clock3 size={16} />

            <span>2 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}