"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { AwarenessManual } from "@/components/facilitator-guide/manuals/AwarenessManual";

export default function FacilitatorAwarenessPage() {
  return (
    <GuideChrome title="Awareness (A)">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-text-main mb-6 sr-only">
          Facilitator manual · Awareness
        </h1>
        <AwarenessManual />
      </div>
    </GuideChrome>
  );
}
