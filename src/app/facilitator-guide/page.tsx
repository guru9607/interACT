"use client";

import Link from "next/link";
import { 
  Clock, 
  Sparkles, 
  Heart, 
  Moon, 
  Laptop, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Lock,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function FacilitatorGuidePage() {
  const manuals = [
    {
      code: "ACT-100",
      sdgTarget: "SDG 3, 16, 17",
      sdgColor: "#0072CE",
      href: "/facilitator-guide/three-hour-program",
      title: "3-Hour Combined Workshop Master Script",
      subtitle: "Full ACT Arc in One Session",
      duration: "180 Minutes",
      format: "Complete Sequential Delivery",
      description:
        "Full facilitator script spanning Awareness (A) → Contemplation (C) → Transformative Silence (T) with exact spoken lines, silence timers, participant prompts, and integration debriefs.",
      status: "PRIMARY DELIVERY MANUAL",
    },
    {
      code: "ACT-101",
      sdgTarget: "SDG Target 3.4",
      sdgColor: "#4C9F38",
      href: "/facilitator-guide/awareness",
      title: "Module Awareness (A) Manual",
      subtitle: "Internal Observation & Stimulus-Response Baseline",
      duration: "45 Minutes",
      format: "Standalone Module",
      description:
        "Comprehensive 45-minute facilitator manual covering internal state recognition, sensory awareness (adapted 5-4-3-2-1), cognitive defusion, and age adaptations (18–22 & 23–35).",
      status: "CORE SYLLABUS",
    },
    {
      code: "ACT-102",
      sdgTarget: "SDG Target 16.1",
      sdgColor: "#00AED9",
      href: "/facilitator-guide/contemplation",
      title: "Module Contemplation (C) Manual",
      subtitle: "Taxonomy of Self-Worth & Innate Values",
      duration: "45 Minutes",
      format: "Standalone Module",
      description:
        "Rigorous facilitation guide for differentiating Self-Worth, Self-Esteem, Self-Confidence, and Self-Respect, with structured reflection exercises and group interaction tracks.",
      status: "CORE SYLLABUS",
    },
    {
      code: "ACT-103",
      sdgTarget: "SDG Target 17.17",
      sdgColor: "#19486A",
      href: "/facilitator-guide/transformative-silence",
      title: "Module Transformative Silence (T) Manual",
      subtitle: "Autonomic Stillness & Practical Discernment",
      duration: "60–75 Minutes",
      format: "Standalone Module",
      description:
        "Neutral experiential delivery manual focusing on cognitive stillness, the Tree Grounding Practice, Walking Reflection, Perspective Reflection, Scrabble activity, and translating inner clarity into intentional response.",
      status: "CORE SYLLABUS",
    },
    {
      code: "ACT-SYS",
      sdgTarget: "OPERATIONAL",
      sdgColor: "#0B2545",
      href: "/facilitator-guide/website-guide",
      title: "Portal & Operations Guide",
      subtitle: "Secretariat Systems & Event Administration",
      duration: "Reference",
      format: "Systems Architecture",
      description:
        "Operational overview detailing how the Staff Portal, Event Management engine, participant feedback reflections, and certificate generation services interconnect.",
      status: "SYSTEM DIRECTIVE",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        {/* Institutional Utility Header */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Link href="/portal" className="text-[#0072CE] hover:underline font-medium">
                    Portal
                  </Link>
                  <ChevronRight size={12} className="text-slate-300" />
                  <span className="font-semibold text-slate-700">Facilitator Guide</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0072CE] block mb-1">
                  DOC-IA-DIR-01 · OFFICIAL FIELD MANUAL REPOSITORY
                </span>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] tracking-tight">
                  Facilitator Operational Manuals
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Authorized teaching scripts, timekeeping frameworks, and pedagogical guidance for conducting standardized interACT youth empowerment workshops globally.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <Link
                  href="/events-dashboard"
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded border border-slate-200 transition-colors"
                >
                  Events Dashboard
                </Link>
                <Link
                  href="/portal/certificates"
                  className="px-3.5 py-2 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors"
                >
                  Certificates
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
          {/* Institutional Facilitator Accreditation Directive Callout */}
          <div className="bg-white border-l-4 border-[#0B2545] border-y border-r border-slate-200 p-5 rounded-r-lg shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0B2545] shrink-0 mt-0.5">
                <Lock size={16} />
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B2545] uppercase tracking-wider text-[11px]">
                    Restricted Operational Directive · Accredited Facilitators Only
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Verified Cohorts
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  These instructional manuals, classroom timing ledgers, and delivery scripts are strictly reserved for officially accredited facilitators and partner institution coordinators. Prior to scheduling any public or university session, facilitator onboarding must be confirmed through the interACT Operational Secretariat.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Guide Selection Matrix */}
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Authorized Curriculum Manuals ({manuals.length} Documents)
              </h2>
              <span className="text-xs text-slate-400">
                Sorted by delivery priority
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {manuals.map((item, index) => (
                <div
                  key={item.code}
                  className={`bg-white border border-slate-200 hover:border-slate-300 rounded-lg shadow-xs transition-all flex flex-col justify-between overflow-hidden group ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* Top Colored SDG Ribbon Stripe */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: item.sdgColor }}
                  />

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Meta badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white"
                            style={{ backgroundColor: item.sdgColor }}
                          >
                            {item.code}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                            {item.sdgTarget}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          {item.duration} · {item.format}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mb-3">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.status}
                      </span>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0072CE] group-hover:translate-x-0.5 transition-transform"
                      >
                        Open Manual
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Best Practices Notice */}
          <div className="bg-slate-100 border border-slate-200 rounded-lg p-5 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-[#0B2545] uppercase tracking-wider text-[11px] flex items-center gap-2">
              <FileText size={14} className="text-[#0072CE]" />
              Standard Facilitation Protocols
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>
                <strong>Verbatim Precision:</strong> Follow the spoken prompts and silence intervals exactly as written in ACT-100 to maintain cross-center pedagogical consistency.
              </li>
              <li>
                <strong>Module Tagging:</strong> In the Event Management dashboard, ensure the event record matches the specific module taught (Complete ACT, Awareness, Contemplation, or Transformative Silence) so participant evaluation metrics are properly correlated.
              </li>
              <li>
                <strong>Non-Sectarian Presentation:</strong> Maintain an inclusive, universal, and scientifically grounded tone suited for university students and public civic audiences.
              </li>
            </ul>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>interACT Global Educational Initiative · Facilitator Operations Secretariat</p>
          <p className="text-[11px] text-slate-400">
            For operational inquiries or curriculum adaptations:{" "}
            <a href="mailto:curriculum@interact-global.org" className="underline hover:text-[#0072CE]">
              curriculum@interact-global.org
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
