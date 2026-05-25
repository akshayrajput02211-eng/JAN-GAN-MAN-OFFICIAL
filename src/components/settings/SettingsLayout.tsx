"use client";

import { useState } from "react";

import {
  User,
  Bell,
  Languages,
  Moon,
  Shield,
  Trash2,
} from "lucide-react";

import AccountSettings from "./sections/AccountSettings";
import NotificationSettings from "./sections/NotificationSettings";
import LanguageSettings from "./sections/LanguageSettings";
import ThemeSettings from "./sections/ThemeSettings";
import PrivacySettings from "./sections/PrivacySettings";
import DangerZone from "./sections/DangerZone";

export default function SettingsLayout() {
  const [active, setActive] = useState("account");

  const menuItems = [
    {
      id: "account",
      label: "Account",
      icon: User,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "language",
      label: "Language",
      icon: Languages,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: Moon,
    },
    {
      id: "privacy",
      label: "Privacy",
      icon: Shield,
    },
    {
      id: "danger",
      label: "Danger Zone",
      icon: Trash2,
    },
  ];

  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        px-4
        py-8
        dark:bg-[#07111f]
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8">
          <h1
            className="
              text-3xl
              font-black
              text-slate-900
              dark:text-white
              sm:text-4xl
            "
          >
            Settings
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-slate-600
              dark:text-slate-400
            "
          >
            JAN GAN MAN preferences aur account
            settings manage karo.
          </p>
        </div>

        {/* MOBILE MENU */}
        <div
          className="
            mb-6
            flex
            gap-3
            overflow-x-auto
            lg:hidden
          "
        >
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    active === item.id
                      ? "bg-green-600 text-white"
                      : "bg-white/70 text-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside
            className="
              hidden
              h-fit
              rounded-[32px]
              border
              border-white/50
              bg-white/70
              p-5
              shadow-xl
              backdrop-blur-xl
              dark:border-slate-700
              dark:bg-slate-800/70
              lg:block
            "
          >
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-2xl
                      px-4
                      py-4
                      text-left
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        active === item.id
                          ? "bg-green-600 text-white shadow-lg"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* CONTENT */}
          <section className="space-y-6">
            {(active === "account" ||
              active === "notifications") && (
              <div className="grid gap-6 xl:grid-cols-2">
                {active === "account" && (
                  <AccountSettings />
                )}

                {active === "notifications" && (
                  <NotificationSettings />
                )}
              </div>
            )}

            {active === "language" && (
              <LanguageSettings />
            )}

            {active === "appearance" && (
              <ThemeSettings />
            )}

            {active === "privacy" && (
              <PrivacySettings />
            )}

            {active === "danger" && <DangerZone />}
          </section>
        </div>
      </div>
    </main>
  );
}