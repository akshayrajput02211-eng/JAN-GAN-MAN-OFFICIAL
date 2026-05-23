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

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              to-transparent
            "
          />

          <div className="absolute bottom-5 left-5 text-white">
            <div className="flex items-center gap-2 text-sm">
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
            <p className="font-semibold">
              Amit Sir
            </p>

            <p className="text-sm text-gray-500">
              Physics Expert
            </p>
          </div>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-green-600
              px-5
              py-3
              font-semibold
              text-white
              transition-all
              hover:scale-105
              hover:bg-green-700
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