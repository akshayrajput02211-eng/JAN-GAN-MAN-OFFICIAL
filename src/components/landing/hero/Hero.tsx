"use client";

import Sky from "./Sky";
import Clouds from "./Clouds";
import Sun from "./Sun";
import Grass from "./Grass";
import HeroText from "./HeroText";
import Boy from "./Boy";
import Girl from "./Girl";
import SearchBox from "./SearchBox";

import Navbar from "@/components/layout/Navbar";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        h-[85svh]
        md:h-screen
        overflow-hidden
        bg-[#f8fafc]
      "
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Sky */}
      <Sky />

      {/* Floating Clouds */}
      <Clouds />

      {/* Sun */}
      <Sun />

      {/* Main Hero Text */}
      <HeroText />

      {/* Bottom Grass */}
      <Grass />

      {/* Characters */}
      <Boy />

      <Girl />

      {/* Search */}
      <SearchBox />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          md:h-40
          bg-gradient-to-t
          from-[#16a34a]/80
          via-[#16a34a]/20
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}