"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  X,
  ExternalLink,
  Globe,
  Heart,
  ShieldCheck,
  Users,
  ChevronDown,
} from "lucide-react";

export default function AboutPage() {
  const [showBoundaries, setShowBoundaries] = useState(false);
  const [showCitations, setShowCitations] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & MISSION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-3">
            <Globe size={14} className="shrink-0" />
            <span>UN 2030 Agenda Strategic Alignment</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-3">
            Connecting Contemplative Skills to the Global Goals
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
            interACT is an open-access youth initiative dedicated to addressing the global youth mental health crisis. We link inner contemplation directly to the UN Sustainable Development Goals—specifically Good Health (SDG 3), Peace (SDG 16), and Global Partnerships (SDG 17).
          </p>

          {/* Quick Index */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200">
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Core Alignment:</span>
              <span className="font-semibold text-slate-800 text-sm">SDG 3 · 16 · 17</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Target Ages:</span>
              <span className="font-semibold text-slate-800 text-sm">Youth (18–35)</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Evidence Base:</span>
              <span className="font-semibold text-slate-800 text-sm">WHO &amp; UNESCO</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Access Mode:</span>
              <span className="font-semibold text-[#0072CE] text-sm">100% Free &amp; Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STRATEGIC MAPPING: THREE UN GOALS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              SDG Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              How interACT Advances UN 2030 Targets
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* SDG 3 — Green */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#4C9F38]" aria-hidden="true" />
              
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded bg-emerald-50 text-[#4C9F38] flex items-center justify-center font-bold border border-emerald-100">
                    <Heart size={18} />
                  </span>
                  <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Target 3.4
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  SDG 3: Good Health &amp; Well-being
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  By developing self-awareness and somatic grounding, youth build resilience against anxiety, burnout, and emotional fatigue.
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Mental Well-being</span>
                  <Link href="/modules/awareness" className="font-bold text-[#4C9F38] hover:underline">
                    Module A →
                  </Link>
                </div>
              </div>
            </div>

            {/* SDG 16 — Light Blue */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#00AED9]" aria-hidden="true" />
              
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded bg-sky-50 text-[#00689D] flex items-center justify-center font-bold border border-sky-100">
                    <ShieldCheck size={18} />
                  </span>
                  <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    Target 16.1
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  SDG 16: Peace from Within
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Contemplation grounds self-worth in enduring innate qualities, replacing hostility and reactivity with compassion and respect.
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Conflict Reduction</span>
                  <Link href="/modules/contemplation" className="font-bold text-[#00689D] hover:underline">
                    Module C →
                  </Link>
                </div>
              </div>
            </div>

            {/* SDG 17 — Navy */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#19486A]" aria-hidden="true" />
              
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded bg-slate-100 text-[#19486A] flex items-center justify-center font-bold border border-slate-200">
                    <Users size={18} />
                  </span>
                  <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                    Target 17.17
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  SDG 17: Global Partnerships
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Shared silence and deep listening quiet polarization, enabling authentic collaboration and empathy across diverse youth communities.
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500">Civil Society Action</span>
                  <Link href="/modules/transformative-silence" className="font-bold text-[#19486A] hover:underline">
                    Module T →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WHAT INTERACT IS / IS NOT (COLLAPSIBLE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              onClick={() => setShowBoundaries(!showBoundaries)}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div>
                <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-0.5">
                  Methodology &amp; Boundaries
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B2545]">
                  What interACT Is &amp; What interACT Is Not
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Clear, non-sectarian educational boundaries governing all youth workshops.
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform ${showBoundaries ? "rotate-180" : ""}`}
              />
            </button>

            {showBoundaries && (
              <div className="border-t border-slate-200">
                <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold uppercase tracking-wider border-b border-slate-200">
                  <div className="p-3.5 bg-emerald-50 text-emerald-900 border-r border-slate-200 flex items-center gap-1.5">
                    <Check size={16} className="text-emerald-700" />
                    <span>interACT IS</span>
                  </div>
                  <div className="p-3.5 bg-rose-50 text-rose-900 flex items-center gap-1.5">
                    <X size={16} className="text-rose-700" />
                    <span>interACT IS NOT</span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 text-sm">
                  {[
                    { is: "Reflective experiential learning", isNot: "Motivational preaching" },
                    { is: "Acknowledging the present moment", isNot: "Distraction from life’s goals" },
                    { is: "Strengthening your inner core", isNot: "Clinical therapy or counselling" },
                    { is: "Developing self-worth & self-respect", isNot: "Spiritual conversion" },
                    { is: "Rejuvenating exercise with guided silence", isNot: "Trauma processing" },
                    { is: "Pause-building & intentional response", isNot: "Religious talk" },
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-2">
                      <div className="p-3.5 flex items-start gap-2.5 text-slate-700 border-r border-slate-100 bg-white">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{row.is}</span>
                      </div>
                      <div className="p-3.5 flex items-start gap-2.5 text-slate-500 bg-slate-50/50">
                        <span className="text-rose-600 font-bold shrink-0">✗</span>
                        <span>{row.isNot}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#0B2545] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Bring interACT to Your Campus or Community
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            All curriculum syllabi, participant reflection toolkits, and workshop formats are offered free of charge.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors"
            >
              Explore Modules
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold bg-white text-[#0B2545] hover:bg-slate-100 transition-colors"
            >
              Find an Upcoming Event
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SCHOLARLY CITATIONS (COLLAPSIBLE)
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-6 text-slate-600 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            type="button"
            onClick={() => setShowCitations(!showCitations)}
            className="w-full flex items-center justify-between text-left py-2 font-semibold text-slate-700 uppercase tracking-wider text-xs hover:text-[#0072CE] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[#0072CE]" />
              <span>Scientific &amp; Institutional Citations (WHO, UNESCO, UNICEF, Lancet)</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform ${showCitations ? "rotate-180" : ""}`}
            />
          </button>

          {showCitations && (
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">World Health Organization (2021):</span> Adolescent Mental Health Fact Sheet. Geneva: WHO (SDG 3.4).
              </div>
              <div>
                <span className="font-semibold text-slate-800">UNESCO MGIEP (2020):</span> Rethinking Learning: A Review of Social and Emotional Learning for Peaceful Societies (SDG 16.1).
              </div>
              <div>
                <span className="font-semibold text-slate-800">UNICEF (2021):</span> State of the World&apos;s Children: On My Mind (SDG 17).
              </div>
              <div>
                <span className="font-semibold text-slate-800">The Lancet Planetary Health (2021):</span> Climate anxiety in children and young people.
              </div>
              <div>
                <span className="font-semibold text-slate-800">Khoury et al. (2015):</span> Mindfulness-based stress reduction for healthy individuals: A meta-analysis.
              </div>
              <div>
                <span className="font-semibold text-slate-800">UN DGC (2020):</span> Guidelines for Civil Society Entities Aligned with the 2030 Agenda.
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
