"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { ContemplationManual } from "@/components/facilitator-guide/manuals/ContemplationManual";

export default function FacilitatorContemplationPage() {
  return (
    <GuideChrome 
      title="Module Contemplation (C) Manual" 
      docCode="DOC-ACT-102" 
      sdgColor="#00AED9"
    >
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <ContemplationManual />
      </div>
    </GuideChrome>
  );
}
