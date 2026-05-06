"use client";

import { useSearchParams } from "next/navigation";
import { FacilitatorGate } from "@/components/facilitator-guide/FacilitatorGate";
import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { WebsiteGuideContent } from "@/components/facilitator-guide/WebsiteGuideContent";

export default function WebsiteGuidePage() {
  return (
    <FacilitatorGate>
      <WebsiteGuideInner />
    </FacilitatorGate>
  );
}

function WebsiteGuideInner() {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret") || "";
  const q = secret ? `?secret=${encodeURIComponent(secret)}` : "";

  return (
    <GuideChrome title="Website guide">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-text-main mb-6 sr-only">
          How to use this website
        </h1>
        <WebsiteGuideContent secretQuery={q} />
      </div>
    </GuideChrome>
  );
}
