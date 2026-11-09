"use client";

import { useState } from "react";
import Link from "next/link";
import UnitCard from "@/components/UnitCard";
import {
  Globe,
  Check,
  X,
  Compass,
  FileText,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const modules = [
  {
    title: "Awareness (A): Observing the Inner Self",
    description:
      "Notice thoughts, emotions, and stress signals without judgment. Creates the essential gap between stimulus and response. (45 min · SDG 3.4)",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation (C): Strengthening the Inner Core",
    description:
      "Experience innate inner qualities directly (calmness, clarity, kindness). Shifts reliance from external validation to authentic internal stability. (45 min · SDG 16.1)",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence (T): Grounding & Response",
    description:
      "A structured reflective pause supporting mental and physical stillness. Transforms patterned reactions into intentional, constructive responses. (60–75 min · SDG 17.17)",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    href: "/modules/transformative-silence",
    number: 3,
  },
];

const canonicalQualities = [
  { quality: "Awareness", meaning: "Noticing without reacting" },
  { quality: "Calmness", meaning: "Emotional steadiness" },
  { quality: "Clarity", meaning: "Thoughtful understanding" },
  { quality: "Respect", meaning: "Valuing self and others" },
  { quality: "Compassion", meaning: "Empathy and care" },
  { quality: "Courage", meaning: "Constructive response under difficulty" },
  { quality: "Responsibility", meaning: "Intentional action" },
];

const isIsNotList = [
  {
    is: "Reflective experiential learning",
    isNot: "Motivational preaching",
  },
  {
    is: "Acknowledging the present moment",
    isNot: "Distraction from life’s goals or plans",
  },
  {
    is: "Strengthening your inner core",
    isNot: "Therapy or counselling",
  },
  {
    is: "Developing self-worth, self-confidence, self-esteem, & self-respect",
    isNot: "Spiritual conversion",
  },
  {
    is: "Rejuvenating exercise with moments of guided silence",
    isNot: "Trauma processing or clinical treatment",
  },
  {
    is: "Pause-building & intentional response training",
    isNot: "Religious talk",
  },
];

export default function ModulesPage() {
  const [showBoundaries, setShowBoundaries] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-3">
            <Globe size={14} className="shrink-0" />
            <span>Open Educational Resource (OER) · UN 2030 Agenda</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-3">
            The ACT Curriculum Framework
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
            A three-step experiential pedagogy designed to help youth (ages 18–35) develop self-awareness, inner stability, and intentional response.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200 text-xs">
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Core Modules:</span>
              <span className="font-semibold text-slate-800">Awareness · Contemplation · Silence</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Age Cohorts:</span>
              <span className="font-semibold text-slate-800">18–22 &amp; 23–35</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-400 block text-[11px]">SDG Alignment:</span>
              <span className="font-semibold text-slate-800">SDGs 3.4 · 16.1 · 17.17</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-400 block text-[11px]">Format:</span>
              <span className="font-semibold text-[#0072CE]">100% Free &amp; Open Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE SYLLABUS DIRECTORY (3 MODULE CARDS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Curriculum Progression
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
              Three Sequential Stages of Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <UnitCard
                key={module.number}
                title={module.title}
                description={module.description}
                image={module.image}
                href={module.href}
                number={module.number}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WHAT INTERACT IS / IS NOT (COLLAPSIBLE ON MOBILE)
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
                  Methodological Clarity
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B2545]">
                  What interACT Is &amp; What interACT Is Not
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Strict boundaries between contemplative skill-building and therapy or preaching.
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform ${showBoundaries ? "rotate-180" : ""}`}
              />
            </button>

            {showBoundaries && (
              <div className="border-t border-slate-200">
                <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                  <div className="p-3 bg-emerald-50 text-emerald-900 border-r border-slate-200 flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-700" />
                    <span>interACT IS</span>
                  </div>
                  <div className="p-3 bg-rose-50 text-rose-900 flex items-center gap-1.5">
                    <X size={14} className="text-rose-700" />
                    <span>interACT IS NOT</span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  {isIsNotList.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-2">
                      <div className="p-3 flex items-start gap-2 text-slate-700 border-r border-slate-100 bg-white">
                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                        <span>{row.is}</span>
                      </div>
                      <div className="p-3 flex items-start gap-2 text-slate-500 bg-slate-50/50">
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
          4. CANONICAL INNER QUALITIES MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Inner Strengths
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
              The Inner Qualities Framework
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {canonicalQualities.map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded p-3 bg-[#F8F9FA] hover:border-[#0072CE] transition-colors"
              >
                <div className="text-xs font-bold text-[#0B2545] mb-0.5">
                  {item.quality}
                </div>
                <div className="text-[11px] text-slate-500 leading-snug">
                  {item.meaning}
                </div>
              </div>
            ))}
            <div className="border border-dashed border-slate-300 rounded p-3 bg-slate-50 flex items-center justify-center text-center">
              <span className="text-[11px] text-slate-500 italic">
                Ever-present within you
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. AGE DIFFERENTIATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Tailored Delivery
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
              Adapted for Two Life Stages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-white space-y-2">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs text-[#4C9F38]">Group 1: Ages 18–22</span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">University &amp; Early Career</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects to academic stress, peer comparison, and social media habits. Uses direct language, relatable examples, and pair sharing.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-5 bg-white space-y-2">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-bold text-xs text-[#0072CE]">Group 2: Ages 23–35</span>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Young Professionals</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focuses on career burnout, emotional boundaries, and relationships. Prioritizes deeper quiet reflection over group activity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CALLOUT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg p-5 sm:p-6 bg-[#F8F9FA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B2545]">
                Host an interACT Workshop on Campus
              </h3>
              <p className="text-xs text-slate-600">
                Universities and community centers can host free accredited workshops led by certified facilitators.
              </p>
            </div>
            <div className="shrink-0 flex gap-2">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#0072CE] text-white text-xs font-semibold rounded hover:bg-[#0058A3] transition-colors"
              >
                Inquire to Host
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
