// ========================================
// FILE: src/components/naukri/post-job/JobPreview.tsx
// ========================================

"use client";

interface Props {
  form: any;
}

export default function JobPreview({ form }: Props) {
  return (
    <div className="sticky top-24">
      <div className="rounded-[32px] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 dark:text-white">
            Live Preview
          </h3>

          <span className="rounded-full bg-[#7c3aed]/10 px-3 py-1 text-xs font-bold text-[#7c3aed]">
            Preview
          </span>
        </div>

        <div className="rounded-[28px] border-l-4 border-[#7c3aed] bg-gradient-to-br from-white to-purple-50 p-5 dark:from-slate-900 dark:to-slate-800">
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            {form.jobTitle || "Job Title"}
          </h2>

          <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {form.category || "Select Category"}
            </p>

            <p>
              <span className="font-semibold">Location:</span>{" "}
              {form.state || "State"}, {form.district || "District"}
            </p>

            <p>
              <span className="font-semibold">Salary:</span> ₹
              {form.salary || "0"} / {form.salaryType}
            </p>

            <p>
              <span className="font-semibold">Workers:</span>{" "}
              {form.workers || "0"}
            </p>

            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {form.duration || "Not Selected"}
            </p>

            <p>
              <span className="font-semibold">Contact:</span>{" "}
              {form.contact || "Call"}
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-100 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {form.description ||
              "Job description yahan live preview hoga..."}
          </div>
        </div>
      </div>
    </div>
  );
}