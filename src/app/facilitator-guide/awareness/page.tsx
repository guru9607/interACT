"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { AwarenessManual } from "@/components/facilitator-guide/manuals/AwarenessManual";

export default function FacilitatorAwarenessPage() {
  return (
    <GuideChrome 
      title="Module Awareness (A) Manual" 
      docCode="DOC-ACT-101" 
      sdgColor="#4C9F38"
    >
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <AwarenessManual />
      </div>
    </GuideChrome>
  );
}
