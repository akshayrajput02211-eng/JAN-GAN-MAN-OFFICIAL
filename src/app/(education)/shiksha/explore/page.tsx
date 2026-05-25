// ========================================
// FILE: src/app/(education)/shiksha/explore/page.tsx
// ========================================

"use client";

import { useState } from "react";

import ExploreHero from "@/components/shiksha/explore/ExploreHero";

import SubjectFilter from "@/components/shiksha/explore/SubjectFilter";

import TeacherGrid from "@/components/shiksha/explore/TeacherGrid";

import TeacherSearch from "@/components/shiksha/explore/TeacherSearch";

export default function ExplorePage() {
  const [search, setSearch] =
    useState("");

  const [subject, setSubject] =
    useState("Math");

  const [grade, setGrade] =
    useState("6-8");

  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}

        <ExploreHero
          search={search}
          setSearch={setSearch}
        />

        {/* SUBJECT FILTER */}

        <SubjectFilter
          active={subject}
          setActive={setSubject}
        />

        {/* GRADE FILTER */}

        <TeacherSearch
          active={grade}
          setActive={setGrade}
        />

        {/* TEACHERS GRID */}

        <TeacherGrid
          search={search}
          subject={subject}
          grade={grade}
        />
      </div>
    </main>
  );
}