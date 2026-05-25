"use client";

import { useRef } from "react";

interface Props {
  otp: string[];
  setOtp: (otp: string[]) => void;
}

export default function OtpInput({
  otp,
  setOtp,
}: Props) {
  const inputRefs =
    useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    value: string,
    index: number
  ) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];

    updated[index] = value;

    setOtp(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          value={digit}
          maxLength={1}
          onChange={(e) =>
            handleChange(
              e.target.value,
              index
            )
          }
          className="
            h-14
            w-14

            rounded-2xl

            border
            border-white/50

            bg-white/70

            text-center
            text-xl
            font-bold

            outline-none

            backdrop-blur-xl

            transition-all

            focus:scale-110
            focus:border-green-500

            dark:bg-slate-800/70
            dark:text-white
          "
        />
      ))}
    </div>
  );
}