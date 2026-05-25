"use client";

import { useMemo, useState } from "react";

import DocSearchBar from "@/components/sarkari-seva/documents/DocSearchBar";
import SchemeDocList from "@/components/sarkari-seva/documents/SchemeDocList";
import DocChecklist from "@/components/sarkari-seva/documents/DocChecklist";

import {
  schemes,
  SchemeDocs,
} from "@/data/sarkari-seva/doc-requirements";

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [selectedScheme, setSelectedScheme] =
    useState<SchemeDocs | null>(schemes[0]);

  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) =>
      scheme.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        dark:bg-[#07111f]
        px-4
        py-8
        md:px-10
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-green-100
              dark:bg-green-500/20
              text-green-700
              dark:text-green-300
              font-medium
            "
          >
            Sarkari Seva
          </span>

          <h1
            className="
              text-4xl
              md:text-6xl
              font-black
              mt-5
              text-slate-900
              dark:text-white
            "
          >
            Document Check
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Har yojana ke liye kaunse documents chahiye —
            sab ek jagah par easily check karo.
          </p>
        </div>

        <DocSearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
            Popular Schemes
          </h3>

          <SchemeDocList
            schemes={filteredSchemes}
            selected={selectedScheme}
            onSelect={setSelectedScheme}
          />
        </div>

        {selectedScheme && (
          <DocChecklist scheme={selectedScheme} />
        )}
      </div>
    </main>
  );
}