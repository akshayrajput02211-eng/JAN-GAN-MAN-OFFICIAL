"use client";

import { useState } from "react";

import { Languages } from "lucide-react";

import SettingsSection from "../shared/SettingsSection";

export default function LanguageSettings() {
  const [language, setLanguage] = useState(
    "Hindi"
  );

  return (
    <SettingsSection
      title="Language"
      icon={<Languages className="h-5 w-5" />}
    >
      <div className="flex gap-4">
        {["Hindi", "English"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`
              flex-1
              rounded-2xl
              px-5
              py-4
              font-bold
              transition-all
              duration-300
              ${
                language === lang
                  ? "bg-green-600 text-white"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
              }
            `}
          >
            {lang}
          </button>
        ))}
      </div>
    </SettingsSection>
  );
}