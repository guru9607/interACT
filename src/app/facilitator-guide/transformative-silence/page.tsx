"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { TransformativeSilenceManual } from "@/components/facilitator-guide/manuals/TransformativeSilenceManual";

export default function FacilitatorSilencePage() {
  return (
    <GuideChrome 
      title="Module Transformative Silence (T) Manual" 
      docCode="DOC-ACT-103" 
      sdgColor="#19486A"
    >
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <TransformativeSilenceManual />
      </div>
    </GuideChrome>
  );
}
