"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function TrackStatus() {
  const [id, setId] = useState("");
  const [show, setShow] =
    useState(false);

  return (
    <section className="mt-14">
      <div
        className="
          rounded-[40px]
          bg-gradient-to-br
          from-[#f6b21a]
          to-[#ffcc63]
          p-8
          shadow-2xl
        "
      >
        <h2 className="text-3xl font-black text-slate-900">
          Status Checker
        </h2>

        <p className="mt-3 text-slate-800">
          Aadhaar Enrollment ID daal kar
          application status check karo.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={id}
            onChange={(e) =>
              setId(e.target.value)
            }
            placeholder="Enter Enrollment ID"
            className="
              flex-1
              rounded-2xl
              bg-white
              px-5
              py-4
              outline-none
              text-slate-900
            "
          />

          <button
            onClick={() => setShow(true)}
            className="
              rounded-2xl
              bg-slate-900
              hover:bg-black
              px-6
              py-4
              text-white
              font-bold
              transition-all
            "
          >
            Check Status
          </button>
        </div>

        {show && (
          <div
            className="
              mt-7
              rounded-[28px]
              bg-white/80
              p-5
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-600" />

              <h3 className="text-xl font-bold text-slate-900">
                Application Approved
              </h3>
            </div>

            <p className="mt-3 text-slate-700">
              Your Aadhaar card application
              has been successfully verified.
            </p>

            <div className="mt-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Status: Processing Complete
            </div>
          </div>
        )}
      </div>
    </section>
  );
}