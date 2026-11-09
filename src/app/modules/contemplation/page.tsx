"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ShieldCheck,
  Target,
  CheckCircle2,
  FileText,
  Compass,
  Users,
  Sparkles,
  Heart,
  Scale,
} from "lucide-react";

const learningOutcomes = [
  "Recognize the presence of innate universal qualities within oneself (calmness, kindness, patience, clarity).",
  "Experience at least one inner quality directly through structured guided contemplation.",
  "Differentiate clearly between self-worth, self-esteem, self-confidence, and self-respect.",
  "Understand the empirical role of inner attention in establishing emotional stability independent of external approval.",
  "Initiate a sustainable daily self-practice (5 minutes) for continuous inner core development.",
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
      "How I feel about myself in different areas of life (studies, work, looks, personality), which can change depending on situations.",
    nature: "Evaluative & Fluctuates",
  },
  {
    term: "Self-confidence",
    color: "#0284C7",
    definition:
      "My belief that “I can handle this” or “I can do this” based on my abilities and past experiences.",
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

const sessionStages = [
  {
    time: "0:00 – 0:05",
    title: "1. Opening & Context Setting (5 min)",
    description:
      "Shift orientation: Most of us seek self-worth externally (validation, marks, relationships). Today we do not change anything outside; we experience what already exists within.",
  },
  {
    time: "0:05 – 0:13",
    title: "2. Concept Introduction (8 min)",
    description:
      "Introduce innate inner qualities (calmness, clarity, kindness, patience). Define the 4 self-constructs. Key principle: When you experience inner qualities, these four strengthen naturally.",
  },
  {
    time: "0:13 – 0:18",
    title: "3. Activity: External vs Internal Awareness (5 min)",
    description:
      "Examine: 'Right now, what affects your mood the most? Is it under your control or external?' Highlight how external reliance creates perpetual emotional instability.",
  },
  {
    time: "0:18 – 0:33",
    title: "4. Core Practice: Contemplation Exercise (15 min)",
    description:
      "Structured 4-step practice: (1) Choose one quality, (2) Hold attention without forced thinking, (3) Deepen in silence, (4) Anchor the felt experience. Silence: 2–3 min (18–22) or 4–5 min (23–35).",
  },
  {
    time: "0:33 – 0:40",
    title: "5. Reflection & Articulation (7 min)",
    description:
      "Debrief: What did you experience? Was it dependent on anything outside? How did it feel compared to your usual state? Facilitate age-appropriate sharing.",
  },
  {
    time: "0:40 – 0:45",
    title: "6. Integration & 5-Minute Daily Micro-Practice (5 min)",
    description:
      "Key summary: 'You don't need to become something new… You need to connect with what is already within you.' Establish the 5-minute daily micro-practice.",
  },
];

export default function ContemplationModule() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL SYLLABUS HEADER (SDG 16 CYAN/BLUE)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="h-1.5 w-full bg-[#00AED9]" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">

          <div className="flex items-center justify-between gap-4 mb-6">
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
                <ShieldCheck size={11} /> UN SDG 16.1
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block">
              Module 02 · What are my innate qualities?
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Contemplation (C): Strengthening Your Inner Core
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              Facilitates participants in developing awareness of innate inner qualities and directly experiencing them through contemplation. Shifts orientation from external sources of validation to internal stability, strengthening foundational aspects of self-worth and peaceful resilience under UN SDG 16.1.
            </p>

            {/* Course Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Session Duration:</span>
                <span className="font-semibold text-slate-800">45 minutes</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Target Demographics:</span>
                <span className="font-semibold text-slate-800">Group A (18–22) &amp; Group B (23–35)</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Pedagogical Mode:</span>
                <span className="font-semibold text-slate-800">Interactive &amp; Experiential</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Daily Integration:</span>
                <span className="font-semibold text-[#00689D]">5-Minute Micro-Practice</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING OUTCOMES & CONCEPTUAL FRAMEWORK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-12 gap-10">

              {/* Left 6 Cols: Learning Outcomes */}
              <div className="md:col-span-6 space-y-4">
                <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                  Learning Outcomes
                </h2>
                <p className="text-xs text-slate-500">
                  Upon completion of this module, participants will be able to:
                </p>

                    <div className="space-y-3 pt-1">
                      {learningOutcomes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                          <CheckCircle2 size={16} className="text-[#00AED9] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
            </div>

                      {/* Right 6 Cols: Core Concept & Principles */}
                      <div className="md:col-span-6 space-y-4">
                        <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                          Conceptual Framework
                        </h2>
                        <p className="text-xs text-slate-500">
                          Core principle: Inherent qualities are independent of external achievement.
                        </p>

                        <div className="bg-[#F8F9FA] border-l-4 border-[#00AED9] border-y border-r border-slate-200 rounded-r p-4 space-y-2">
                          <span className="text-[10px] font-bold text-[#00689D] uppercase tracking-wider block">
                            Core Concept
                          </span>
                            <p className="text-xs text-slate-700 leading-relaxed font-medium">
                              Every individual possesses inherent qualities such as calmness, kindness, patience, and clarity. These qualities are not dependent on external achievements or validation, but can be accessed through focused inner attention and contemplation.
                            </p>
                        </div>

                          <div className="space-y-2 pt-1 text-xs text-slate-600">
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00AED9] mt-1.5 shrink-0" />
                              <span><strong>Innate &amp; Ever-Present:</strong> Inner qualities are intrinsic baseline capacities, not external commodities.</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00AED9] mt-1.5 shrink-0" />
                              <span><strong>Enhances Stability:</strong> Direct experience of inner qualities directly reduces dependence on outside circumstances.</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00AED9] mt-1.5 shrink-0" />
                              <span><strong>Sustained Focus:</strong> Regular contemplation strengthens internal awareness over fleeting social opinions.</span>
                            </div>
                          </div>
                        </div>

                      </div>

                  </div>
                </section>

                {/* ─────────────────────────────────────────────────────────────
          3. DEFINITIONS: THE FOUR SELF-CONSTRUCTS
      ───────────────────────────────────────────────────────────── */}
                <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                      <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
                          Conceptual Taxonomy
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                          The Four Dimensions of the Self
                        </h2>
                          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                            When you experience inner qualities, these four do not need to be built separately—they strengthen naturally.
                          </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                          {
                            definitions.map((item, idx) => (
                              <div
                                key={idx}
                                className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-2 flex flex-col justify-between"
                              >
                                  <div className="space-y-1.5">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-base font-serif font-bold text-[#0B2545]">
                                        {item.term}
                                      </h3>
                                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                        {item.nature}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                      {item.definition}
                                    </p>
                                  </div>
                                </div>
            ))}
                              </div>

        </div>
                    </section>

                    {/* ─────────────────────────────────────────────────────────────
          4. 45-MINUTE STRUCTURED SESSION FLOW
      ───────────────────────────────────────────────────────────── */}
                    <section className="py-12 md:py-16 bg-white border-b border-slate-200">
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-8">
                          <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
                            Workshop Schedule
                          </span>
                          <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                            Session Flow — 45 Minutes
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Standardized pedagogical timeline for interactive delivery
                          </p>
                        </div>

                                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white divide-y divide-slate-100 shadow-xs">
                                  {sessionStages.map((stage, idx) => (
                                    <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-3 sm:gap-6 hover:bg-slate-50/60 transition-colors">
                                      <div className="font-mono text-xs font-bold text-[#0B2545] bg-slate-100 px-2.5 py-1 rounded shrink-0">
                                        {stage.time}
                                      </div>
                                        <div className="space-y-1">
                                          <h3 className="text-sm font-semibold text-slate-900">{stage.title}</h3>
                                          <p className="text-xs text-slate-600 leading-relaxed">{stage.description}</p>
                                        </div>
                                      </div>
            ))}
                                    </div>

          {/* Everyday Micro-Practice Box */ }
                                    < div className = "mt-8 p-5 bg-sky-50/60 border border-sky-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-700" >
            <div>
              <strong className="text-[#00689D] block font-serif text-sm mb-0.5">Everyday Micro-Practice (5 Minutes Daily)</strong>
              <span>Sit in a quiet place, choose one inner quality (calmness, kindness, acceptance, patience), and sustain attention on that felt experience without analysis.</span>
            </div>
            <div className="shrink-0 text-right font-mono text-[11px] text-[#00689D]">
              Continuous Development
            </div>
          </div>

                              </div>
                            </section>

      {/* ─────────────────────────────────────────────────────────────
          5. NEXT SYLLABUS CONTINUATION
      ───────────────────────────────────────────────────────────── */}
                            < section className = "py-12 bg-[#0B2545] text-white" >
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
                                  Curriculum Sequence
                                </span>
                                <h3 className="text-xl font-serif font-bold text-white">
                                  Proceed to Module 03: Transformative Silence (ACT-103)
                                </h3>
                                <p className="text-xs text-slate-300">
                                  Grounding, intentional response, and reflective attention under UN SDG 17.
                                </p>
                              </div>

                              <div className="shrink-0">
                                <Link
                                  href="/modules/transformative-silence"
                                  className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
                                >
                                  Access Module ACT-103
                                  <ArrowRight size={14} className="ml-2" />
                                </Link>
                              </div>
                            </div>
      </section>

                      </div>
                      );
}
