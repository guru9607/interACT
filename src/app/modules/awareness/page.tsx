"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";

const learningObjectives = [
  "Notice thoughts, emotions, and bodily sensations without judgment.",
  "Differentiate between external input and your authentic inner state.",
  "Cultivate a deliberate pause between stimulus and response.",
  "Anchor self-awareness as the foundation for intentional everyday action.",
];

const coreConcepts = [
  {
    title: "Observing Inner Goodness",
    text: "Awareness is the conscious act of turning inward to observe thoughts and sensations with neutrality and self-acceptance.",
  },
  {
    title: "Dynamic & Transient Experience",
    text: "Thoughts and emotions naturally arise and pass when we stop compulsively reacting to them.",
  },
  {
    title: "The Stimulus-Response Gap",
    text: "There is always space between what happens and how you respond. Awareness unlocks conscious choice.",
  },
  {
    title: "Thoughts as Seeds for Action",
    text: "By observing thoughts early, you can choose which seeds to nurture into purposeful action.",
  },
];

const workshopJourney = [
  {
    step: "01",
    title: "Inward Observation & Breath Grounding",
    description:
      "Settle into a comfortable posture. Direct gentle attention to natural respiration and observe thoughts as they pass without judgment.",
    tag: "Present-Moment Centering",
  },
  {
    step: "02",
    title: "Sensory Grounding Protocol",
    description:
      "An adapted 5-4-3-2-1 group exercise: connecting sight, sound, physical touch, and internal feelings to anchor firmly in the present.",
    tag: "Adapted 5-4-3-2-1",
  },
  {
    step: "03",
    title: "Small-Group Reflective Pods",
    description:
      "Reflect in pairs on what you noticed about your mind. Discover the difference between your thoughts and the quiet observer noticing them.",
    tag: "The Observer Self",
  },
  {
    step: "04",
    title: "Daily Pause & Micro-Practice",
    description:
      "Leave with one concrete habit: taking one intentional conscious pause during study or work before reacting to daily stress.",
    tag: "Everyday Integration",
  },
];

export default function AwarenessModule() {
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
              <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                ACT-101
              </span>
              <span className="text-[11px] font-bold text-[#4C9F38] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                <Heart size={11} /> SDG 3.4
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block">
              Module 01 · 45 Minutes
            </span>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Awareness (A): Observing the Inner Self
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Build the foundational skill of recognizing your inner world—thoughts, emotions, and bodily sensations—with gentle curiosity instead of immediate reaction.
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
                <span className="font-semibold text-[#4C9F38] text-sm">SDG 3.4 (Well-being)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING OBJECTIVES & CORE CONCEPTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left: Learning Objectives */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block">
                Session Takeaways
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                What You Will Experience
              </h2>
              <div className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-700">
                {learningObjectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-[#F8F9FA] border border-slate-200">
                    <CheckCircle2 size={18} className="text-[#4C9F38] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Core Concepts */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block">
                Core Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                Ideas You Will Explore
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {coreConcepts.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded-lg space-y-1.5">
                    <div className="text-sm font-bold text-[#0B2545]">
                      {item.title}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 4-STAGE PARTICIPANT WORKSHOP JOURNEY
          Visual Cards instead of minute-by-minute timetable
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
              Participant Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              What the 45-Minute Session Is Like
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              A gentle, guided progression from internal observation to practical daily application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {workshopJourney.map((stage) => (
              <div
                key={stage.step}
                className="p-5 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
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
          4. ADAPTATION BY AGE GROUP (18-22 vs 23-35)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
              Age Cohort Adaptation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              Tailored for Different Life Stages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Group 1 */}
            <div className="border border-slate-200 rounded-lg p-5 sm:p-6 bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-bold text-sm text-[#0B2545]">Group 1: Ages 18–22</span>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                  Engaging &amp; Relatable
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connects directly to academic pressure, peer comparison, and career uncertainty. Uses concrete language and active pair sharing.
              </p>
            </div>

            {/* Group 2 */}
            <div className="border border-slate-200 rounded-lg p-5 sm:p-6 bg-[#F8F9FA] space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-bold text-sm text-[#0B2545]">Group 2: Ages 23–35</span>
                <span className="text-xs font-mono bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded">
                  Reflective &amp; Grounded
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focuses on professional burnout, decision-making, and relationship dynamics. Encourages deeper quiet introspection.
              </p>
            </div>
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
              Next Module: Contemplation (ACT-102)
            </h3>
            <p className="text-sm text-slate-300">
              Strengthen the inner core and experience innate qualities under UN SDG 16.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/modules/contemplation"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
            >
              Continue to Module 2
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
