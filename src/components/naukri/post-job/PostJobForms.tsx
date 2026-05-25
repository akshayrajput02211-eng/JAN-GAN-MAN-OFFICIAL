// ========================================
// FILE: src/components/naukri/post-job/PostJobForms.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import JobPreview from "./JobPreview";
import SuccessScreen from "./SuccessScreen";

import { jobCategories } from "@/data/naukri/job-categories";

const initialState = {
  jobTitle: "",
  category: "",
  state: "",
  district: "",
  pincode: "",
  salary: "",
  salaryType: "month",
  workers: "",
  duration: "",
  contact: "Call",
  description: "",
};

export default function PostJobForm() {
  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState<any>({});

  const [submitted, setSubmitted] = useState(false);

  const jobId = useMemo(() => {
    return `JGM-${Math.floor(Math.random() * 999999)}`;
  }, []);

  const validate = () => {
    const newErrors: any = {};

    if (!form.jobTitle) {
      newErrors.jobTitle = "Job title required";
    }

    if (!form.category) {
      newErrors.category = "Category required";
    }

    if (!form.state) {
      newErrors.state = "State required";
    }

    if (!form.salary) {
      newErrors.salary = "Salary required";
    }

    if (!form.description) {
      newErrors.description = "Description required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setSubmitted(true);
  };

  const inputStyle =
    "w-full rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#7c3aed] dark:border-slate-700 dark:bg-slate-900/70 dark:text-white";

  return (
    <>
      {submitted && <SuccessScreen jobId={jobId} />}

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="
              rounded-[36px]

              border
              border-white/50

              bg-white/70
              dark:bg-slate-800/70

              p-6

              backdrop-blur-xl
            "
          >
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Job Details
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Apni hiring details fill karo aur local workers tak pahucho.
            </p>

            <div className="mt-8 space-y-6">
              {/* ================= JOB TITLE ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Job Title
                </label>

                <input
                  type="text"
                  placeholder="Delivery Boy, Driver..."
                  value={form.jobTitle}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      jobTitle: e.target.value,
                    })
                  }
                  className={`${inputStyle} ${
                    errors.jobTitle
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                />

                {errors.jobTitle && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.jobTitle}
                  </p>
                )}
              </div>

              {/* ================= CATEGORY ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Category
                </label>

                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className={`${inputStyle} ${
                    errors.category
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                >
                  <option value="">
                    Select Category
                  </option>

                  {jobCategories.map((category) => (
                    <option
                      key={category.id}
                      value={category.name}
                    >
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>

                {errors.category && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.category}
                  </p>
                )}
              </div>

              {/* ================= LOCATION ================= */}

              <div>
                <label className="mb-3 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Location
                </label>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      value={form.state}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          state: e.target.value,
                        })
                      }
                      className={`${inputStyle} ${
                        errors.state
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />

                    {errors.state && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <input
                    type="text"
                    placeholder="District"
                    value={form.district}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        district: e.target.value,
                      })
                    }
                    className={inputStyle}
                  />

                  <input
                    type="text"
                    placeholder="Pincode"
                    value={form.pincode}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pincode: e.target.value,
                      })
                    }
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* ================= SALARY ================= */}

              <div>
                <label className="mb-3 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Salary
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="number"
                      placeholder="Salary Amount"
                      value={form.salary}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          salary: e.target.value,
                        })
                      }
                      className={`${inputStyle} ${
                        errors.salary
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />

                    {errors.salary && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.salary}
                      </p>
                    )}
                  </div>

                  <div className="flex overflow-hidden rounded-2xl border border-white/50 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          salaryType: "day",
                        })
                      }
                      className={`flex-1 py-3 text-sm font-bold transition-all duration-300 ${
                        form.salaryType === "day"
                          ? "bg-[#7c3aed] text-white"
                          : "bg-white dark:bg-slate-900 dark:text-white"
                      }`}
                    >
                      ₹ / Day
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          salaryType: "month",
                        })
                      }
                      className={`flex-1 py-3 text-sm font-bold transition-all duration-300 ${
                        form.salaryType === "month"
                          ? "bg-[#7c3aed] text-white"
                          : "bg-white dark:bg-slate-900 dark:text-white"
                      }`}
                    >
                      ₹ / Month
                    </button>
                  </div>
                </div>
              </div>

              {/* ================= WORKERS ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Workers Needed
                </label>

                <input
                  type="number"
                  placeholder="How many workers needed?"
                  value={form.workers}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      workers: e.target.value,
                    })
                  }
                  className={inputStyle}
                />
              </div>

              {/* ================= JOB DURATION ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Job Duration
                </label>

                <select
                  value={form.duration}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      duration: e.target.value,
                    })
                  }
                  className={inputStyle}
                >
                  <option value="">
                    Select Duration
                  </option>

                  <option value="1 Day">
                    1 Day
                  </option>

                  <option value="Weekly">
                    Weekly
                  </option>

                  <option value="Monthly">
                    Monthly
                  </option>

                  <option value="Permanent">
                    Permanent
                  </option>
                </select>
              </div>

              {/* ================= CONTACT ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Contact Preference
                </label>

                <select
                  value={form.contact}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      contact: e.target.value,
                    })
                  }
                  className={inputStyle}
                >
                  <option value="Call">
                    Call
                  </option>

                  <option value="WhatsApp">
                    WhatsApp
                  </option>

                  <option value="Both">
                    Both
                  </option>
                </select>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">
                  Job Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Kaam ke baare me details likhiye..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  className={`${inputStyle} resize-none ${
                    errors.description
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                />

                {errors.description && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* ================= SUBMIT ================= */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={handleSubmit}
                className="
                  w-full

                  rounded-2xl

                  bg-gradient-to-r
                  from-[#16a34a]
                  to-[#22c55e]

                  px-6
                  py-4

                  text-lg
                  font-black
                  text-white

                  shadow-[0_15px_40px_rgba(34,197,94,0.35)]
                "
              >
                Post Karo
              </motion.button>
            </div>
          </motion.div>

          {/* ================= LIVE PREVIEW ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            <JobPreview form={form} />
          </motion.div>
        </div>
      </section>
    </>
  );
}