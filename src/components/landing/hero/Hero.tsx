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
    <section className="relative w-full h-screen overflow-hidden">
      <Navbar />

      <Sky />

      <Clouds />

      <Sun />

      <HeroText />

      <Grass />

      <Boy />

      <Girl />

      <SearchBox />

      <div
        className="
          absolute bottom-0
          w-full h-40
          bg-gradient-to-t
          from-green-500
          to-transparent
        "
      />
    </section>
  );
}