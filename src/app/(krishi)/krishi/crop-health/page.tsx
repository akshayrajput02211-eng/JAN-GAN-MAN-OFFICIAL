"use client";

import CropHealthHero from "@/components/krishi/crop-health/CropHealthHero";
import PhotoUpload from "@/components/krishi/crop-health/PhotoUpload";
import AnalysisLoader from "@/components/krishi/crop-health/AnalysisLoader";
import DiseaseResult from "@/components/krishi/crop-health/DiseaseResult";
import TreatmentSteps from "@/components/krishi/crop-health/TreatmentSteps";

export default function CropHealthPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#f4f8ff]
        dark:bg-[#07111f]

        px-4
        py-6
        pb-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <CropHealthHero />

        <div className="mt-8">
          <PhotoUpload />
        </div>

        <div className="mt-8">
          <AnalysisLoader />
        </div>

        <div className="mt-8">
          <DiseaseResult />
        </div>

        <div className="mt-8">
          <TreatmentSteps />
        </div>
      </div>
    </main>
  );
}