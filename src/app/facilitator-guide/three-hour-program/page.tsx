"use client";

import { FacilitatorGate } from "@/components/facilitator-guide/FacilitatorGate";
import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { ThreeHourProgramScript } from "@/components/facilitator-guide/manuals/ThreeHourProgramScript";

export default function ThreeHourProgramPage() {
  return (
    <FacilitatorGate>
      <GuideChrome title="3-hour combined program">
        <div className="rounded-2xl border border-amber-100 bg-white p-6 sm:p-8 shadow-sm">
          <p className="text-xs text-text-muted mb-4">
            Full facilitator script from{" "}
            <code className="rounded bg-gray-100 px-1">
              content/Facilitator scripts interACT 3hours.docx
            </code>
            . For standalone 45-minute modules, use the Awareness, Contemplation, or
            Transformative Silence pages instead.
          </p>
          <p className="text-xs text-teal-900 rounded-lg border border-teal-100 bg-teal-50/60 p-3 mb-6">
            When you schedule this as one event in Event Management, set the ACT module
            to <strong>Complete ACT</strong> (combined) so participant feedback questions
            match the full journey.
          </p>
          <ThreeHourProgramScript />
        </div>
      </GuideChrome>
    </FacilitatorGate>
  );
}
