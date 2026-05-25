"use client";

export default function VoiceWaveform() {
  return (
    <>
      <div className="flex items-end justify-center gap-2 h-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="wave-bar w-3 rounded-full bg-white"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .wave-bar {
          height: 20px;
          animation: wave 1s infinite ease-in-out;
        }

        @keyframes wave {
          0% {
            height: 20px;
            opacity: 0.5;
          }

          50% {
            height: 80px;
            opacity: 1;
          }

          100% {
            height: 20px;
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}