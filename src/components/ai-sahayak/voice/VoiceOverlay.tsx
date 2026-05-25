"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, Square, Send } from "lucide-react";
import { useEffect, useState } from "react";

import VoiceWaveform from "./VoiceWaveform";

interface Props {
  open: boolean;
  transcript: string;
  isRecording: boolean;
  onStop: () => void;
  onClose: () => void;
  onSend?: () => void;
}

export default function VoiceOverlay({
  open,
  transcript,
  isRecording,
  onStop,
  onClose,
  onSend,
}: Props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any;

    if (open && isRecording) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [open, isRecording]);

  useEffect(() => {
    if (!open) {
      setSeconds(0);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="
            fixed inset-0 z-[999]
            flex flex-col items-center justify-center
            bg-gradient-to-br
            from-purple-700
            via-fuchsia-700
            to-violet-900
            px-6
            text-white
          "
        >
          {/* Mic */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
            className="
              w-40 h-40 rounded-full
              bg-red-500/20
              border-4 border-red-400
              flex items-center justify-center
              shadow-2xl
            "
          >
            <div
              className="
                w-28 h-28 rounded-full
                bg-red-500
                flex items-center justify-center
              "
            >
              <Mic size={50} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-8 text-2xl font-bold"
          >
            Bol rahe ho...
          </motion.p>

          {/* Timer */}
          <p className="mt-3 text-lg text-white/80">
            {seconds} sec
          </p>

          {/* Wave */}
          <div className="mt-10">
            <VoiceWaveform />
          </div>

          {/* Transcript */}
          {transcript && (
            <div
              className="
                mt-10
                max-w-xl
                rounded-3xl
                bg-white/10
                border border-white/20
                backdrop-blur-xl
                p-5
                text-center
              "
            >
              <p className="text-lg leading-relaxed">
                {transcript}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-12 flex gap-4">
            {isRecording ? (
              <button
                onClick={onStop}
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-red-500
                  px-8 py-4
                  text-lg font-semibold
                  shadow-xl
                "
              >
                <Square size={18} />
                Roko
              </button>
            ) : (
              <>
                <button
                  onClick={onSend}
                  className="
                    flex items-center gap-2
                    rounded-full
                    bg-green-500
                    px-8 py-4
                    text-lg font-semibold
                    shadow-xl
                  "
                >
                  <Send size={18} />
                  Bhejo
                </button>

                <button
                  onClick={onClose}
                  className="
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-8 py-4
                    text-lg
                  "
                >
                  Band karo
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}