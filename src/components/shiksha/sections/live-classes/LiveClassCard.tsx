import Image from "next/image";

import GlowCard from "@/components/shiksha/shared/glow-card/GlowCard";

import LiveBadge from "@/components/shiksha/shared/badge/LiveBadge";

import {
  Eye,
  PlayCircle,
} from "lucide-react";

export default function LiveClassCard() {
  return (
    <GlowCard>
      <div className="group">
        <div className="relative overflow-hidden rounded-[28px]">
          <LiveBadge />

          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="Live Class"
            width={500}
            height={300}
            className="
              h-64
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-[#0f172a]/80
              via-[#0f172a]/20
              to-transparent
            "
          />

          {/* Glow Effect */}
          <div
            className="
              absolute
              inset-0

              bg-blue-500/10
              opacity-0

              transition-all
              duration-500

              group-hover:opacity-100
            "
          />

          <div className="absolute bottom-5 left-5 text-white">
            <div
              className="
                flex
                items-center
                gap-2

                text-sm

                text-blue-100
              "
            >
              <Eye size={16} />
              <span>42 Watching</span>
            </div>

            <h3 className="mt-2 text-2xl font-bold">
              Physics Motion Class
            </h3>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p
              className="
                font-semibold

                text-slate-900
                dark:text-white
              "
            >
              Amit Sir
            </p>

            <p
              className="
                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              Physics Expert
            </p>
          </div>

          <button
            className="
              flex
              items-center
              gap-2

              rounded-2xl

              bg-[#2563eb]
              hover:bg-[#1d4ed8]

              px-5
              py-3

              font-semibold
              text-white

              shadow-lg
              shadow-blue-500/30

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-blue-500/40

              active:scale-95
            "
          >
            <PlayCircle size={18} />
            Join
          </button>
        </div>
      </div>
    </GlowCard>
  );
}