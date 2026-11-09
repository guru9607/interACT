"use client";

import Link from "next/link";
import FacilitatorForm from "@/components/FacilitatorForm";
import { 
  ArrowLeft, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
} from "lucide-react";

export default function FacilitatorsPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col justify-between">
      <div>
        {/* ─────────────────────────────────────────────────────────────
            1. INSTITUTIONAL HEADER & ACCREDITATION DIRECTIVE
        ───────────────────────────────────────────────────────────── */}
        <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
          {/* Tri-color SDG Ribbon */}
          <div className="h-1 w-full flex" aria-hidden="true">
            <span className="flex-1 bg-[#4C9F38]" />
            <span className="flex-1 bg-[#00AED9]" />
            <span className="flex-1 bg-[#19486A]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-14">
            
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Return to Public Portal
              </Link>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                REGISTRY REF: IA-FAC-2026
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE]">
                <Globe size={14} />
                <span>Facilitator Accreditation · UN 2030 Agenda</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
                Facilitator Intake &amp; Accreditation Registry
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
                We invite dedicated educators, mentors, and community coordinators to facilitate the interACT curriculum. Complete the two-step accreditation intake below. Once registered and verified against our institutional coordinator roster, your credentials will be activated in the Facilitator Portal.
              </p>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold rounded">
                  <CheckCircle2 size={13} className="text-[#4C9F38]" />
                  Accreditation Intake Open · Cycle 2026
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-800 border border-sky-200 font-semibold rounded">
                  <ShieldCheck size={13} className="text-[#00AED9]" />
                  Aligned with SDGs 3, 16 &amp; 17
                </span>
                <Link
                  href="/portal/login"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 font-medium rounded transition-colors"
                >
                  Already accredited? Sign in →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            2. FACILITATOR INTAKE FORM
        ───────────────────────────────────────────────────────────── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FacilitatorForm />
          </div>
        </section>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. INSTITUTIONAL FOOTER STAMP
      ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400 bg-[#F8F9FA]">
        <p>
          interACT Global Governance Secretariat · Facilitator Accreditation Registry · Document Ref: IA-FAC-2026
        </p>
        <p className="text-[11px] text-slate-400 mt-1">
          By registering, you apply to facilitate the non-commercial interACT educational curriculum on a civil society basis.
        </p>
      </footer>
    </div>
  );
}
