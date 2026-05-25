"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import AvatarUpload from "./AvatarUpload";

const genders = ["Male", "Female", "Other"];
const languages = ["Hindi", "English"];

export default function EditProfileForm() {
  const [gender, setGender] = useState("Male");
  const [language, setLanguage] = useState("Hindi");
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <div className="pb-40">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur-xl dark:bg-slate-900/80">
        <div className="flex items-center gap-4 px-5 py-4">
          <Link href="/profile">
            <button className="rounded-full bg-white p-3 shadow-lg dark:bg-slate-800">
              <ArrowLeft size={18} />
            </button>
          </Link>

          <h1 className="text-xl font-bold dark:text-white">
            Profile Edit Karo
          </h1>
        </div>
      </div>

      <div className="px-5 pt-8">
        <AvatarUpload image="/images/profile/user.webp" />

        <div
          className="
            mt-8
            space-y-5
            rounded-[32px]
            border
            border-white/50
            bg-white/70
            p-5
            shadow-xl
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-800/70
          "
        >
          <Input label="Full Name" placeholder="Akshay Kumar" />

          <Input label="DOB" type="date" />

          {/* Gender */}
          <div>
            <label className="mb-3 block text-sm font-semibold dark:text-white">
              Gender
            </label>

            <div className="flex gap-3">
              {genders.map((item) => (
                <button
                  key={item}
                  onClick={() => setGender(item)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    ${
                      gender === item
                        ? "bg-[#3558ff] text-white"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <Input
            label="Phone"
            value="+91 9876543210"
            disabled
          />

          <Input label="Email" placeholder="example@gmail.com" />

          <Input label="Village" placeholder="Village Name" />

          <Input label="District" placeholder="District" />

          <Input label="State" placeholder="State" />

          {/* Language */}
          <div>
            <label className="mb-3 block text-sm font-semibold dark:text-white">
              Language Preference
            </label>

            <div className="flex gap-3">
              {languages.map((item) => (
                <button
                  key={item}
                  onClick={() => setLanguage(item)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    ${
                      language === item
                        ? "bg-green-600 text-white"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/20 bg-white/80 p-4 backdrop-blur-xl dark:bg-slate-900/80">
        <button
          onClick={handleSave}
          className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            py-4
            text-lg
            font-bold
            text-white
            shadow-xl
          "
        >
          Save Karo
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            fixed
            bottom-28
            left-1/2
            z-[100]
            flex
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            bg-green-600
            px-5
            py-3
            text-white
            shadow-2xl
          "
        >
          <CheckCircle2 size={18} />
          Profile save ho gaya
        </motion.div>
      )}
    </div>
  );
}

function Input({
  label,
  ...props
}: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold dark:text-white">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/70
          px-4
          py-4
          outline-none
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
        "
      />
    </div>
  );
}