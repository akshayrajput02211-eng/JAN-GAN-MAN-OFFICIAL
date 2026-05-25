// ========================================
// FILE: src/components/suraksha/complaint/ComplaintForm.tsx
// ========================================

"use client";

import EvidenceUpload from "./EvidenceUpload";

interface Props {
  data: any;
  setData: any;
  onNext: () => void;
}

export default function ComplaintForm({
  data,
  setData,
  onNext,
}: Props) {
  return (
    <section
      className="
        rounded-[36px]
        border border-white/50
        bg-white/70
        dark:bg-slate-800/70
        p-8
        backdrop-blur-xl
      "
    >
      <div className="grid gap-6">
        <div>
          <label className="mb-3 block text-sm font-bold text-indigo-600">
            Incident Description
          </label>

          <textarea
            rows={5}
            placeholder="Kya hua, batao..."
            value={data.description}
            onChange={(e) =>
              setData({
                ...data,
                description: e.target.value,
              })
            }
            className="
              w-full
              rounded-[24px]
              border
              border-slate-200
              bg-white
              dark:bg-slate-900
              p-5
              outline-none
            "
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-3 block text-sm font-bold text-indigo-600">
              Date
            </label>

            <input
              type="date"
              value={data.date}
              onChange={(e) =>
                setData({
                  ...data,
                  date: e.target.value,
                })
              }
              className="
                w-full
                rounded-[20px]
                border
                border-slate-200
                bg-white
                dark:bg-slate-900
                p-4
              "
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-bold text-indigo-600">
              Time
            </label>

            <input
              type="time"
              value={data.time}
              onChange={(e) =>
                setData({
                  ...data,
                  time: e.target.value,
                })
              }
              className="
                w-full
                rounded-[20px]
                border
                border-slate-200
                bg-white
                dark:bg-slate-900
                p-4
              "
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-indigo-600">
            Location
          </label>

          <input
            type="text"
            placeholder="Location enter karo"
            value={data.location}
            onChange={(e) =>
              setData({
                ...data,
                location: e.target.value,
              })
            }
            className="
              w-full
              rounded-[20px]
              border
              border-slate-200
              bg-white
              dark:bg-slate-900
              p-4
            "
          />
        </div>

        <EvidenceUpload
          onUpload={(file) =>
            setData({
              ...data,
              evidence: file,
            })
          }
        />

        <div>
          <label className="mb-3 block text-sm font-bold text-indigo-600">
            Contact Number
          </label>

          <input
            type="tel"
            value={data.contact}
            onChange={(e) =>
              setData({
                ...data,
                contact: e.target.value,
              })
            }
            className="
              w-full
              rounded-[20px]
              border
              border-slate-200
              bg-white
              dark:bg-slate-900
              p-4
            "
          />
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            rounded-[24px]
            bg-indigo-50
            dark:bg-slate-700
            p-5
          "
        >
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">
              Anonymous
            </h4>

            <p className="text-sm text-slate-500">
              Naam chupaana chahte ho?
            </p>
          </div>

          <button
            onClick={() =>
              setData({
                ...data,
                anonymous: !data.anonymous,
              })
            }
            className={`
              relative
              h-8
              w-16
              rounded-full
              transition

              ${
                data.anonymous
                  ? "bg-indigo-600"
                  : "bg-slate-400"
              }
            `}
          >
            <div
              className={`
                absolute
                top-1
                h-6
                w-6
                rounded-full
                bg-white
                transition-all

                ${
                  data.anonymous
                    ? "left-9"
                    : "left-1"
                }
              `}
            />
          </button>
        </div>

        <button
          onClick={onNext}
          className="
            rounded-[22px]
            bg-indigo-600
            px-6
            py-4
            text-lg
            font-bold
            text-white
            transition
            hover:scale-[1.02]
          "
        >
          Review Complaint
        </button>
      </div>
    </section>
  );
}