import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import "@/styles/services.css";
import "@/styles/footer.css";
import "@/styles/animations.css";

import Providers from "./providers";

import FloatingThemeButton from "@/components/shared/FloatingThemeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAN GAN MAN",
  description: "Rural India Super App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}

        h-full
        antialiased
      `}
    >
      <body
        className="
          min-h-full

          flex
          flex-col

          bg-[#f4f8ff]

          text-slate-900

          transition-colors
          duration-300

          dark:bg-[#07111f]
          dark:text-white
        "
      >
        <Providers>
          {children}

          <FloatingThemeButton />
        </Providers>
      </body>
    </html>
  );
}