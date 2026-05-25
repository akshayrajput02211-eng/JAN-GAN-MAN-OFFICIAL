"use client";

import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

export default function AuthLayout({
  left,
  right,
}: Props) {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        <section className="hidden lg:block">
          {left}
        </section>

        <section className="flex items-center justify-center px-5 py-10">
          {right}
        </section>
      </div>
    </main>
  );
}