// ========================================
// FILE: src/components/suraksha/complaint/ComplaintSuccess.tsx
// ========================================

"use client";

import Link from "next/link";
import { CheckCircle2, Copy } from "lucide-react";

interface Props {
  refNumber: string;
}

export default function ComplaintSuccess({
  refNumber,
}: Props) {
  const copyRef = async () => {
    await navigator.clipboard.writeText(refNumber);
  };

  return (
    <section
      className="
        rounded-[40px]
        bg-gradient-to-br
        from-indigo-600
        to-purple-600
        p-10
        text-white
        shadow-2xl
      "
    >
      <CheckCircle2 className="h-20 w-20" />

      <h2 className="mt-6 text-4xl font-black">
        Complaint Submitted
      </h2>

      <p className="mt-3 text-indigo-100">
        Aapki complaint successfully darj ho gayi hai.
      </p>

      <div className="mt-8 rounded-[28px] bg-white/10 p-6 backdrop-blur-xl">
        <p className="text-sm uppercase tracking-widest text-indigo-200">
          Reference Number
        </p>

        <h3 className="mt-3 text-4xl font-black">
          {refNumber}
        </h3>

        <button
          onClick={copyRef}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-white
            px-5
            py-3
            font-bold
            text-indigo-700
          "
        >
          <Copy className="h-4 w-4" />
          Copy Karo
        </button>
      </div>

      <div className="mt-8">
        <p className="text-indigo-100">
          Estimated Callback Time:
        </p>

        <h4 className="mt-2 text-2xl font-black">
          Within 30 Minutes
        </h4>
      </div>

      <Link
        href="/suraksha/my-complaints"
        className="
          mt-8
          inline-flex
          rounded-2xl
          border
          border-white/30
          px-6
          py-3
          font-bold
        "
      >
        My Complaints
      </Link>
    </section>
  );
}