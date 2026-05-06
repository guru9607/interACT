"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { WebsiteGuideContent } from "@/components/facilitator-guide/WebsiteGuideContent";

export default function WebsiteGuidePage() {
  return (
    <GuideChrome title="Website guide">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-text-main mb-6 sr-only">
          How to use this website
        </h1>
        <WebsiteGuideContent />
      </div>
    </GuideChrome>
  );
}
