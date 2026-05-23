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
            bg-red-100
            text-red-500
            transition-all
            duration-500
            group-hover:scale-110
          "
        >
          <FileText size={28} />
        </div>

        <h3 className="text-xl font-bold leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-gray-500">
          Premium downloadable study material.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            12.5K Downloads
          </span>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-green-50
              px-4
              py-2
              font-semibold
              text-green-700
              transition-all
              hover:bg-green-600
              hover:text-white
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