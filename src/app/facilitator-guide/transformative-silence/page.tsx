"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { TransformativeSilenceManual } from "@/components/facilitator-guide/manuals/TransformativeSilenceManual";

export default function FacilitatorSilencePage() {
  return (
    <GuideChrome title="Transformative Silence (T)">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-text-main mb-6 sr-only">
          Facilitator manual · Transformative Silence
        </h1>
        <TransformativeSilenceManual />
      </div>
    </GuideChrome>
  );
}
