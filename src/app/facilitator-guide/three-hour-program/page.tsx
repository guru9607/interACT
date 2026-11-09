"use client";

import { GuideChrome } from "@/components/facilitator-guide/GuideChrome";
import { ThreeHourProgramScript } from "@/components/facilitator-guide/manuals/ThreeHourProgramScript";
import { Clock, Info, ShieldCheck } from "lucide-react";

export default function ThreeHourProgramPage() {
  return (
    <GuideChrome 
      title="3-Hour Combined Program Master Script" 
      docCode="DOC-ACT-100" 
      sdgColor="#0072CE"
    >
      <div className="space-y-6">
        {/* Document Header Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0072CE] block">
                Primary Standardized Delivery Script · 180 Minutes Total Arc
              </span>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
                Complete ACT Workshop Delivery Manual
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-mono bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-slate-700">
                <Clock size={12} className="text-[#0072CE]" />
                0:00 – 3:00
              </span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                Standard Full Cohort
              </span>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              This master script contains verbatim spoken directions, silence timers, question sequences, and debriefing guidelines for conducting the complete 3-hour interACT experiential journey. For individual standalone 45-minute modular units, consult the dedicated module manuals.
            </p>
            
            <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 border-l-4 border-[#0072CE] rounded-r text-xs text-slate-700">
              <Info size={15} className="text-[#0072CE] shrink-0 mt-0.5" />
              <p>
                <strong>Operational Requirement:</strong> When registering this session in the Event Management dashboard, ensure the ACT Module is set to <strong className="text-[#0B2545]">Complete ACT</strong> (combined) so that participant feedback surveys capture the entire sequential arc.
              </p>
            </div>
          </div>
        </div>

        {/* Verbatim Script Body */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <ThreeHourProgramScript />
        </div>
      </div>
    </GuideChrome>
  );
}
