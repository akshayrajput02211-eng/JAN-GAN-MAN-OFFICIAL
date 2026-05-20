"use client";

import {
  Bell,
  Briefcase,
  CirclePlus,
  CreditCard,
  Home,
  MessageCircle,
  Search,
} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav
  className="
    fixed
    top-4
    left-1/2
    z-50
    w-[95%]
    max-w-[1400px]
    -translate-x-1/2
    rounded-[30px]
    bg-white/90
    px-6
    py-4
    shadow-sm
    backdrop-blur-xl
  "
>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-[#eef4ff]" />

          <div>
            <h2 className="text-4xl font-black text-[#1b2452]">
              Naukri
            </h2>

            <p className="text-sm text-gray-500">
              Apne liye sahi kaam dhoondo
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-10 lg:flex">
  
  <Link href="/">
    <NavItem icon={<Home />} label="Home" />
  </Link>

  <NavItem icon={<Search />} label="Find Work" />

  <NavItem
    active
    icon={<CirclePlus />}
    label="Post a Job"
  />

  <NavItem
    icon={<Briefcase />}
    label="My Jobs"
  />

  <NavItem
    icon={<MessageCircle />}
    label="Messages"
  />

  <NavItem
    icon={<CreditCard />}
    label="Payments"
  />
</div>

        <div className="flex items-center gap-5">
          <Bell />

          <div className="flex items-center gap-3">
            <Image
              src="/images/naukri/hero-boy.png"
              alt=""
              width={48}
              height={48}
              className="rounded-full bg-[#eef5ff]"
            />

            <span className="font-semibold">AKSHAY</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-2 text-sm font-medium transition-all hover:scale-105 ${
        active
          ? "text-blue-600"
          : "text-gray-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}