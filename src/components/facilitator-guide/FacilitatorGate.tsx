"use client";

import { useStaffAuth } from "@/hooks/useStaffAuth";
import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldAlert, Lock, ArrowRight, BookOpen } from "lucide-react";

export const FacilitatorGate = ({ children }: { children: ReactNode }) => {
  const auth = useStaffAuth();

  if (auth.loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-slate-500 font-sans">
        <div className="w-8 h-8 border-2 border-slate-300 border-t-[#0072CE] rounded-full animate-spin mb-3" />
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">
          Verifying Facilitator Credentials…
        </span>
      </div>
    );
  }

  if (!auth.userId || !auth.isStaff) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between text-slate-800 font-sans">
        {/* SDG Tri-Color Ribbon */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4C9F38] via-[#00AED9] to-[#19486A]" />

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
          <div className="max-w-xl w-full bg-white border border-slate-200 shadow-xs rounded-lg p-6 sm:p-10 space-y-6">
            {/* Header Stamp */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-[#0072CE] shrink-0">
                <ShieldAlert size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0072CE] block">
                  Restricted Operational Directive · UN SDG Curriculum
                </span>
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
                  Facilitator Accreditation Required
                </h1>
              </div>
            </div>

            {/* Explanatory Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                The <strong>interACT Facilitator Guide</strong>, instructional delivery scripts, and classroom timing ledgers are reserved exclusively for accredited facilitators and secretariat coordinators.
              </p>

              {/* Institutional Directive Callout */}
              <div className="bg-slate-50 border-l-4 border-[#0B2545] p-4 text-xs text-slate-700 space-y-1.5">
                <div className="font-semibold text-[#0B2545] flex items-center gap-1.5">
                  <Lock size={13} className="text-[#0072CE]" />
                  Institutional Accreditation Policy
                </div>
                <p className="leading-relaxed">
                  Facilitator accreditation is administered through institutional partner nomination and regional educational secretariats. Open public registration is not available. Verification of institutional credentials is required prior to handbook access.
                </p>
              </div>

              <p className="text-xs text-slate-500">
                If you have already received official accreditation, sign in using your authorized facilitator credentials.
              </p>
            </div>

            {/* Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/portal/login"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors"
              >
                Sign In with Facilitator Account
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/facilitators"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded transition-colors"
              >
                Accreditation Policy Notice
              </Link>
            </div>

            {/* Public Footer link */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <Link href="/" className="hover:text-[#0072CE] hover:underline">
                ← Return to Public Portal
              </Link>
              <Link href="/modules" className="hover:text-[#0072CE] hover:underline flex items-center gap-1">
                <BookOpen size={13} />
                View Public Curriculum Overview
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Footer Stamp */}
        <div className="border-t border-slate-200 py-4 text-center text-[11px] text-slate-400 bg-white">
          interACT Global Governance Secretariat · Document Classification: RESTRICTED-DOC-IA-DIR
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
