"use client";

import { useState } from "react";

import {
  Moon,
  Type,
} from "lucide-react";

import SettingsSection from "../shared/SettingsSection";
import SettingsRow from "../shared/SettingsRow";

export default function ThemeSettings() {
  const [dark, setDark] = useState(false);

  const [size, setSize] = useState("Medium");

  return (
    <SettingsSection
      title="Appearance"
      icon={<Moon className="h-5 w-5" />}
    >
      <SettingsRow
        icon={<Moon className="h-5 w-5" />}
        title="Dark Mode"
        subtitle="Night friendly UI"
        rightContent={
          <Toggle
            enabled={dark}
            onClick={() => setDark(!dark)}
          />
        }
      />

      <div
        className="
          rounded-3xl
          border
          border-white/50
          bg-white/70
          p-5
          dark:border-slate-700
          dark:bg-slate-800/70
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-purple-100
              text-purple-600
              dark:bg-purple-500/10
              dark:text-purple-400
            "
          >
            <Type className="h-5 w-5" />
          </div>

          <div>
            <p className="font-semibold dark:text-white">
              Text Size
            </p>

            <p className="text-sm text-slate-500">
              App text size change karo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["Small", "Medium", "Large"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`
                  rounded-2xl
                  px-4
                  py-3
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    size === item
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                  }
                `}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </SettingsSection>
  );
}

function Toggle({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        h-7
        w-14
        rounded-full
        transition-all
        duration-300
        ${
          enabled
            ? "bg-green-600"
            : "bg-slate-300 dark:bg-slate-600"
        }
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-5
          w-5
          rounded-full
          bg-white
          transition-all
          duration-300
          ${
            enabled
              ? "left-8"
              : "left-1"
          }
        `}
      />
    </button>
  );
}