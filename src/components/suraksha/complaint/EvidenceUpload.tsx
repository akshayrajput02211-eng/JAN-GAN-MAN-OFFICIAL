// ========================================
// FILE: src/components/suraksha/complaint/EvidenceUpload.tsx
// ========================================

"use client";

import { UploadCloud } from "lucide-react";

interface Props {
  onUpload: (file: File | null) => void;
}

export default function EvidenceUpload({
  onUpload,
}: Props) {
  return (
    <div
      className="
        rounded-[30px]
        border-2
        border-dashed
        border-indigo-300
        bg-indigo-50/70
        dark:bg-slate-800/60
        p-8
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-indigo-500
          text-white
        "
      >
        <UploadCloud className="h-10 w-10" />
      </div>

      <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white">
        Upload Evidence
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
        Photo / Video / Audio upload karo
      </p>

      <input
        type="file"
        className="mt-6 block w-full text-sm"
        onChange={(e) =>
          onUpload(e.target.files?.[0] || null)
        }
      />
    </div>
  );
}