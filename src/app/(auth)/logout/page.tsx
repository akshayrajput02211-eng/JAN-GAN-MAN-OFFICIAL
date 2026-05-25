"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8ff] px-5 dark:bg-[#07111f]">
      <div
        className="
          w-full
          max-w-md
          rounded-[32px]
          border
          border-white/50
          bg-white/70
          p-8
          text-center
          shadow-2xl
          backdrop-blur-xl

          dark:border-slate-700/50
          dark:bg-slate-800/70
        "
      >
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Kya aap logout karna chahte ho?
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Aapka session safely logout ho jayega.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleLogout}
            className="
              flex-1
              rounded-2xl
              bg-red-500
              py-4
              font-bold
              text-white
            "
          >
            Haan
          </button>

          <Link
            href="/"
            className="
              flex-1
              rounded-2xl
              bg-green-600
              py-4
              text-center
              font-bold
              text-white
            "
          >
            Nahi
          </Link>
        </div>
      </div>
    </main>
  );
}