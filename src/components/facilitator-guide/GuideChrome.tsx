"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, BookOpen, ShieldCheck, ChevronRight, LayoutDashboard } from "lucide-react";

export const GuideChrome = ({
  title,
  docCode,
  sdgColor = "#0072CE",
  children,
}: {
  title: string;
  docCode?: string;
  sdgColor?: string;
  children: ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        {/* Top 3px SDG Tri-Color Ribbon */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4C9F38] via-[#00AED9] to-[#19486A]" />

        {/* Institutional Utility Sub-header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link
                href="/portal"
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#0072CE] transition-colors font-medium"
              >
                <LayoutDashboard size={13} />
                <span>Portal</span>
              </Link>
              <ChevronRight size={12} className="text-slate-300" />
              <Link
                href="/facilitator-guide"
                className="text-slate-600 hover:text-[#0072CE] transition-colors font-medium"
              >
                Facilitator Guide
              </Link>
              <ChevronRight size={12} className="text-slate-300" />
              <span className="font-semibold text-[#0B2545] truncate max-w-xs sm:max-w-md">
                {title}
              </span>
            </div>

            {/* Document Classification Badge */}
            <div className="flex items-center gap-2">
              {docCode && (
                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded">
                  {docCode}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                <ShieldCheck size={12} />
                Accredited Field Manual
              </span>
            </div>
          </div>
        </header>

        {/* Main Document Content */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/facilitator-guide"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Return to Facilitator Guide Index
            </Link>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <Link href="/events-dashboard" className="hover:text-[#0072CE] hover:underline">
                Event Management
              </Link>
              <span>·</span>
              <Link href="/portal/certificates" className="hover:text-[#0072CE] hover:underline">
                Certificates
              </Link>
            </div>
          </div>

          {children}
        </main>
      </div>

      {/* Institutional Document Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sdgColor }} />
            <span className="font-medium text-slate-700">interACT Facilitator Operational Manual</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Compliant with UN DGC Web Design &amp; SDG Alignment Guidelines · Non-Commercial Educational Release
          </p>
        </div>
      </footer>
    </div>
  );
};
