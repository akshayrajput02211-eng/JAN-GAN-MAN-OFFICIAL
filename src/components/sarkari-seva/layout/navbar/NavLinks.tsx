// components/layout/navbar/NavLinks.tsx

"use client";

import Link from "next/link";

const links = [
  "Home",
  "Yojna",
  "Jobs & Exam",
  "Banking",
  "Complaints",
  "Resources",
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <Link
          key={link}
          href="/"
          className="
            text-sm
            font-medium
            text-gray-600
            hover:text-green-600
            transition
          "
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}