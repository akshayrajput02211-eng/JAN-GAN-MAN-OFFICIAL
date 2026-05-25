"use client";

import Image from "next/image";
import { Upload, Camera } from "lucide-react";
import { useState } from "react";

export default function PhotoUpload() {
  const [preview, setPreview] =
    useState<string | null>(null);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <section id="upload">
      <div
        className="
          rounded-[36px]

          border-2
          border-dashed
          border-green-300

          bg-white/70
          dark:bg-slate-800/70

          p-8

          text-center

          backdrop-blur-2xl
        "
      >
        {!preview ? (
          <>
            <div
              className="
                mx-auto

                flex
                h-24
                w-24
                items-center
                justify-center

                rounded-full

                bg-green-100
              "
            >
              <Upload className="h-10 w-10 text-[#16a34a]" />
            </div>

            <h2 className="mt-6 text-3xl font-black dark:text-white">
              Photo Upload Karo
            </h2>

            <p className="mt-3 text-slate-500">
              Camera, Gallery ya drag & drop
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <label
                className="
                  cursor-pointer

                  rounded-2xl

                  bg-[#16a34a]

                  px-6
                  py-4

                  font-bold
                  text-white

                  shadow-xl
                "
              >
                <div className="flex items-center gap-2">
                  <Camera size={18} />
                  Camera
                </div>

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  capture="environment"
                  onChange={handleUpload}
                />
              </label>

              <label
                className="
                  cursor-pointer

                  rounded-2xl

                  border
                  border-green-200

                  bg-white

                  px-6
                  py-4

                  font-bold
                  text-[#16a34a]
                "
              >
                Gallery

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleUpload}
                />
              </label>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              ya yahan drag karo
            </p>
          </>
        ) : (
          <div>
            <div
              className="
                relative
                mx-auto

                h-72
                max-w-xl

                overflow-hidden
                rounded-[30px]
              "
            >
              <Image
                src={preview}
                alt="preview"
                fill
                className="object-cover"
              />
            </div>

            <button
              className="
                mt-6

                rounded-2xl

                bg-gradient-to-r
                from-[#16a34a]
                to-[#22c55e]

                px-8
                py-4

                text-lg
                font-bold
                text-white

                shadow-2xl
              "
            >
              🔍 Scan Karo
            </button>
          </div>
        )}
      </div>
    </section>
  );
}