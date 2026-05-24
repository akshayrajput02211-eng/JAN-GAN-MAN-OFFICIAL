import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

import {
  Download,
  FileText,
} from "lucide-react";

interface Props {
  title: string;
}

export default function NotesCard({
  title,
}: Props) {
  return (
    <GlowCard>
      <div className="group">
        <div
          className="
            mb-5

            flex
            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            bg-blue-100
            dark:bg-blue-500/10

            text-[#2563eb]
            dark:text-blue-400

            shadow-lg
            shadow-blue-100/60

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:bg-[#2563eb]
            group-hover:text-white
          "
        >
          <FileText size={28} />
        </div>

        <h3
          className="
            text-xl
            font-bold
            leading-snug

            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3

            text-slate-500
            dark:text-slate-400
          "
        >
          Premium downloadable study material.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className="
              text-sm

              text-slate-400
              dark:text-slate-500
            "
          >
            12.5K Downloads
          </span>

          <button
            className="
              flex
              items-center
              gap-2

              rounded-xl

              bg-blue-50
              dark:bg-slate-800

              px-4
              py-2

              font-semibold

              text-[#2563eb]
              dark:text-blue-400

              border
              border-blue-100
              dark:border-slate-700

              transition-all
              duration-300

              hover:bg-[#2563eb]
              hover:text-white

              hover:shadow-lg
              hover:shadow-blue-200/50

              dark:hover:bg-[#1d4ed8]
            "
          >
            <Download size={16} />
            Download
          </button>
        </div>
      </div>
    </GlowCard>
  );
}