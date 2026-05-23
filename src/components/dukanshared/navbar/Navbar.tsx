"use client";

import Image from "next/image";
import Container from "../container/Container";
import { Bell, MapPin, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
      <Container>
        <div className="h-20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shadow-md">
              🏪
            </div>

            <div>
              <h2 className="font-black text-2xl text-green-700">
                Dukaan
              </h2>
              <p className="text-sm text-slate-500">
                Apne gaon ki apni dukaan
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 bg-white rounded-full px-5 py-3 border shadow-sm w-[500px]">
            <Search className="w-5 h-5 text-slate-400" />

            <input
              placeholder="Search for milk, bread, kirana..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-green-600" />
              Delhi
            </div>

            <button className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-700" />
          </div>
        </div>
      </Container>
    </header>
  );
}