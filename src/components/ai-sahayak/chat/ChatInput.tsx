"use client";

import {
  Mic,
  Paperclip,
  SendHorizontal,
  Sparkles,
} from "lucide-react";

interface Props {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({
  input,
  setInput,
  sendMessage,
}: Props) {
  return (
    <div
      className="
        fixed
        bottom-20
        left-0
        right-0
        z-50

        px-3
        md:px-6
      "
    >
      <div
        className="
          mx-auto
          max-w-4xl

          rounded-2xl
          md:rounded-[32px]

          border
          border-white/30

          bg-[#f3e8ff]/90

          p-2.5
          md:p-3

          shadow-[0_20px_60px_rgba(147,51,234,0.18)]

          backdrop-blur-2xl
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            md:gap-3
          "
        >
          {/* MAGIC ICON */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-[#9333ea]
              to-[#6b21a8]

              shadow-[0_8px_24px_rgba(147,51,234,0.35)]

              md:h-11
              md:w-11
            "
          >
            <Sparkles
              className="text-white"
              size={16}
            />
          </div>

          {/* INPUT */}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Kuch bhi poochiye..."
            className="
              flex-1

              bg-transparent

              text-sm
              text-[#3b0764]
              placeholder:text-[#9333ea]/60

              outline-none

              md:text-base
            "
          />

          {/* ATTACH */}

          <button
            className="
              hidden
              sm:flex

              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-xl

              border
              border-[#e9d5ff]

              bg-white/70

              text-[#6b21a8]

              transition-all
              duration-200

              hover:scale-105
              hover:bg-white
            "
          >
            <Paperclip size={16} />
          </button>

          {/* MIC */}

          <button
            className="
              flex

              h-10
              w-10
              shrink-0

              items-center
              justify-center

              rounded-xl

              border
              border-[#e9d5ff]

              bg-white/70

              text-[#6b21a8]

              transition-all
              duration-200

              hover:scale-105
              hover:bg-white
            "
          >
            <Mic size={16} />
          </button>

          {/* SEND BUTTON */}

          <button
            onClick={sendMessage}
            className="
              flex
              shrink-0

              h-10

              items-center
              gap-2

              rounded-xl
              md:rounded-2xl

              bg-gradient-to-r
              from-[#9333ea]
              to-[#6b21a8]

              px-3
              md:px-5

              text-sm
              font-semibold
              text-white

              shadow-[0_10px_30px_rgba(147,51,234,0.35)]

              transition-all
              duration-200

              hover:scale-[1.03]
            "
          >
            <span className="hidden sm:block">
              Send
            </span>

            <SendHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}