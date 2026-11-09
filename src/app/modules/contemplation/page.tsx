"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Scale,
} from "lucide-react";

const learningOutcomes = [
  "Recognize the presence of innate qualities within yourself (calmness, kindness, patience, clarity).",
  "Experience at least one inner quality directly through structured contemplation.",
  "Differentiate clearly between self-worth, self-esteem, self-confidence, and self-respect.",
  "Build internal stability that is independent of external approval or social comparison.",
  "Take home a simple 5-minute daily micro-practice for continuous inner grounding.",
];

const definitions = [
  {
    term: "Self-worth",
    color: "#00AED9",
    definition:
      "A deep inner feeling that “I am valuable as I am” — not because of what I achieve or how others treat me.",
    nature: "Stable & Internal",
  },
  {
    term: "Self-esteem",
    color: "#64748B",
    definition:
      "How I feel about myself in different areas of life (studies, work, looks, personality), which can fluctuate with circumstances.",
    nature: "Evaluative & Fluctuates",
  },
  {
    term: "Self-confidence",
    color: "#0284C7",
    definition:
      "My belief that “I can handle this” based on my skills, practice, and past experiences.",
    nature: "Competence-Based",
  },
  {
    term: "Self-respect",
    color: "#0B2545",
    definition:
      "How much I honor my own thoughts, feelings, and values, and whether I stand by them in my actions.",
    nature: "Integrity-Centered",
  },
];

const workshopJourney = [
  {
    step: "01",
    title: "Orientation: From External to Internal",
    description:
      "Examine how relying on external approval creates mood swings, and redirect attention toward the qualities that already exist within you.",
    tag: "Internal Orientation",
  },
  {
    step: "02",
    title: "The Four Self-Constructs",
    description:
      "Clarify the distinction between Self-Worth, Self-Esteem, Self-Confidence, and Self-Respect, building foundation from within.",
    tag: "Self-Taxonomy",
  },
  {
    step: "03",
    title: "Guided Value Contemplation",
    description:
      "Select one innate quality (such as peace, calm, or kindness), hold focused gentle attention, and deepen the felt experience in silence.",
    tag: "Direct Experience",
  },
  {
    step: "04",
    title: "5-Minute Everyday Anchor",
    description:
      "Anchor the daily micro-practice: returning to an inner quality during busy work or study moments to reset from within.",
    tag: "Everyday Practice",
  },
];

export default function ContemplationModule() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & OVERVIEW
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">

          <div className="flex items-center justify-between gap-4 mb-4">
            <Link
              href="/modules"
              className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors"
            >
              <ArrowLeft size={14} className="mr-1.5" /> Back to Curriculum Directory
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#00689D] bg-sky-50 border border-sky-200 px-2 py-0.5 rounded font-bold">
                ACT-102
              </span>
              <span className="text-[11px] font-bold text-[#00689D] bg-sky-50 border border-sky-200 px-2 py-0.5 rounded flex items-center gap-1">
                <ShieldCheck size={11} /> SDG 16.1
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block">
              Module 02 · 45 Minutes
            </span>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Contemplation (C): Strengthening the Inner Core
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Shift from external validation to authentic internal stability. Directly experience innate qualities—calmness, clarity, and self-worth—through guided contemplation.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200">
              <div className="bg-white p-2.5 rounded border border-slate-200">
                <span className="text-slate-500 block text-xs">Duration:</span>
                <span className="font-semibold text-slate-800 text-sm">45 minutes</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-slate-200">
                <span className="text-slate-500 block text-xs">Target Ages:</span>
                <span className="font-semibold text-slate-800 text-sm">18–22 &amp; 23–35</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-slate-200">
                <span className="text-slate-500 block text-xs">Mode:</span>
                <span className="font-semibold text-slate-800 text-sm">Experiential Workshop</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-slate-200">
                <span className="text-slate-500 block text-xs">UN SDG:</span>
                <span className="font-semibold text-[#00689D] text-sm">SDG 16.1 (Inner Peace)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE FOUR SELF-CONSTRUCTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
              Core Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              The Four Aspects of Self
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              Differentiating self-worth from competence and external performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {definitions.map((item) => (
              <div
                key={item.term}
                className="p-5 bg-[#F8F9FA] rounded-lg border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#0B2545]">
                    {item.term}
                  </h3>
                  <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {item.nature}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 4-STAGE PARTICIPANT WORKSHOP JOURNEY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
              Participant Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              What the 45-Minute Session Is Like
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              Moving from intellectual understanding to direct personal experience of inner qualities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {workshopJourney.map((stage) => (
              <div
                key={stage.step}
                className="p-5 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00689D] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    Step {stage.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stage.tag}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0B2545]">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 5-MINUTE DAILY MICRO-PRACTICE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="p-6 bg-sky-50/60 border border-sky-200 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00689D] uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Daily Takeaway</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0B2545]">
              The 5-Minute Daily Micro-Practice
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
              Participants establish a 5-minute morning or evening routine: pause, choose one quality (peace, calm, or clarity), and sit in quiet attention without checking phones or multitasking.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. NEXT SYLLABUS CONTINUATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
              Curriculum Sequence
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
              Next Module: Transformative Silence (ACT-103)
            </h3>
            <p className="text-sm text-slate-300">
              Shift from reaction to intentional response under UN SDG 17.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/modules/transformative-silence"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
            >
              Continue to Module 3
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
