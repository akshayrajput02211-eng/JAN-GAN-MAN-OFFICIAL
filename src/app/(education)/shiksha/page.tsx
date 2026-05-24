"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/shiksha/layout/navbar/Navbar";

import Hero from "@/components/shiksha/sections/hero/Hero";

import Services from "@/components/shiksha/sections/services/Services";

import Teachers from "@/components/shiksha/sections/teachers/Teachers";

import Notes from "@/components/shiksha/sections/notes/Notes";

import Doubts from "@/components/shiksha/sections/doubts/Doubts";

import LiveClasses from "@/components/shiksha/sections/live-classes/LiveClasses";

import Progress from "@/components/shiksha/sections/progress/Progress";

import Planner from "@/components/shiksha/sections/planner/Planner";

import AiAssistant from "@/components/shiksha/sections/ai-assistant/AiAssistant";

import Stats from "@/components/shiksha/sections/stats/Stats";

import Footer from "@/components/shiksha/layout/footer/Footer";

import { Moon, Sun } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("shiksha-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("shiksha-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("shiksha-theme", "light");
    }
  };

  return (
    <main
      className="
        relative
        overflow-hidden
        min-h-screen

        bg-[#eff6ff]
        dark:bg-[#020617]

        text-slate-800
        dark:text-white

        transition-colors
        duration-500
      "
    >
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Gradient */}
        <div
          className="
            absolute
            top-[-200px]
            left-[-100px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-blue-400/20
            blur-3xl

            dark:bg-blue-700/20
          "
        />

        {/* Right Gradient */}
        <div
          className="
            absolute
            right-[-120px]
            top-[20%]

            h-[350px]
            w-[350px]

            rounded-full

            bg-indigo-400/20
            blur-3xl

            dark:bg-indigo-700/20
          "
        />

        {/* Bottom Gradient */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-[20%]

            h-[400px]
            w-[400px]

            rounded-full

            bg-sky-300/20
            blur-3xl

            dark:bg-sky-800/20
          "
        />

        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.04]
            dark:opacity-[0.06]

            [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]

            [background-size:60px_60px]
          "
        />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="
          fixed
          right-5
          top-5
          z-[999]

          flex
          items-center
          justify-center

          h-12
          w-12

          rounded-2xl

          border
          border-white/50
          dark:border-slate-700/60

          bg-white/80
          dark:bg-slate-900/80

          backdrop-blur-xl

          shadow-xl
          shadow-blue-100/50
          dark:shadow-black/30

          transition-all
          duration-300

          hover:scale-105
        "
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-[#2563eb]" />
        )}
      </button>

      {/* Content */}
      <Navbar />

      <Hero />

      <Services />

      <Teachers />

      <Notes />

      <Doubts />

      <LiveClasses />

      <Progress />

      <Planner />

      <AiAssistant />

      <Stats />

      <Footer />
    </main>
  );
}