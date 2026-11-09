"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { WebsiteGuideContent } from "@/components/facilitator-guide/WebsiteGuideContent";

export default function WebsiteGuidePage() {
  return (
    <GuideChrome 
      title="Portal &amp; Operations Systems Guide" 
      docCode="DOC-ACT-SYS" 
      sdgColor="#0B2545"
    >
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <WebsiteGuideContent />
      </div>
    </GuideChrome>
  );
}
