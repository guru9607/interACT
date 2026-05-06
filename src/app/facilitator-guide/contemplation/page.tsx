"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { ContemplationManual } from "@/components/facilitator-guide/manuals/ContemplationManual";

export default function FacilitatorContemplationPage() {
  return (
    <GuideChrome title="Contemplation">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-text-main mb-6 sr-only">
          Facilitator manual · Contemplation
        </h1>
        <ContemplationManual />
      </div>
    </GuideChrome>
  );
}
