"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Heart,
  Target,
  CheckCircle2,
  BookOpen,
  FileText,
  ShieldCheck,
  Compass,
} from "lucide-react";

const whatYouLearn = [
  "Notice thoughts, emotions, and bodily sensations as they emerge—without immediate reactive judgment or rumination.",
  "Differentiate between experiencing an autonomic thought and identifying that thought as your essential identity.",
  "Establish a cognitive pause between stimulus and response, enabling deliberate ethical action rather than emotional reaction.",
  "Ground self-awareness as the empirical baseline for emotional regulation, directly supporting UN SDG Target 3.4.",
];

const coreIdeas = [
  {
    title: "Observation, Not Judgment",
    text: "Awareness is about observing cognitive and somatic phenomena clearly, rather than scoring oneself as flawed or inadequate.",
  },
  {
    title: "Dynamic Cognitive Flow",
    text: "Thoughts, emotions, and physical sensations are fluid physiological states—they are not permanent, immutable facts about character.",
  },
  {
    title: "The Reflective Pause",
    text: "Cultivating the critical temporal space between external stimulus and human choice, unlocking agency in high-stress situations.",
  },
  {
    title: "Discerning Choice",
    text: "When internal states are identified with lucidity, individuals regain the autonomy to select constructive, peaceful responses.",
  },
];

const experienceThemes = [
  {
    title: "Guided Somatic Presence",
    description:
      "A structured contemplation protocol: stabilizing breath, grounding physical awareness, and observing cognitive patterns without pursuing them.",
  },
  {
    title: "Sensory Anchoring Protocol",
    description:
      "An adapted sensory grounding exercise (sensory presence) to re-establish nervous system equilibrium during acute cognitive or academic stress.",
  },
  {
    title: "Dyadic & Small-Group Reflection",
    description:
      "Structured, voluntary debriefing in pairs or small cohorts to normalize psychological observations without pressure to self-disclose.",
  },
  {
    title: "Somatic Thought Tracker Integration",
    description:
      "Instruction on utilizing the daily interACT thought tracker instrument to log emotional triggers and practice mindful pauses between sessions.",
  },
];

export default function AwarenessModule() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL SYLLABUS HEADER (SDG 3 GREEN)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Top SDG 3 Green Banner Line */}
        <div className="h-1.5 w-full bg-[#4C9F38]" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          
          <div className="flex items-center justify-between gap-4 mb-6">
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
                <Heart size={11} /> UN SDG 3.4
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block">
              Module 01 · Foundational Competency
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Awareness (A): Somatic &amp; Cognitive Discernment
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              Build the foundational capacity to observe your internal environment—thoughts, autonomic stress sensations, and emotional surges—with lucidity instead of immediate reactive judgment. Aligned with World Health Organization guidelines for adolescent non-communicable resilience and mental health promotion.
            </p>

            {/* Course Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Session Duration:</span>
                <span className="font-semibold text-slate-800">~45 minutes</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Target Demographics:</span>
                <span className="font-semibold text-slate-800">Ages 15–29</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Delivery Mode:</span>
                <span className="font-semibold text-slate-800">Facilitated Workshop</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Evidence Anchor:</span>
                <span className="font-semibold text-[#4C9F38]">WHO &amp; MBSR Protocols</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING OUTCOMES & STRATEGIC RATIONALE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-10">
            
            {/* Left 7 Cols: Specific Objectives */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                Curriculum Learning Outcomes
              </h2>
              <p className="text-xs text-slate-500">
                Measurable behavioral competencies developed through Module ACT-101:
              </p>

              <div className="space-y-3 pt-2">
                {whatYouLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                    <CheckCircle2 size={16} className="text-[#4C9F38] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Strategic Rationale */}
            <div className="md:col-span-5 bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] font-bold text-[#4C9F38] uppercase tracking-wider block mb-0.5">
                  Pedagogical Rationale
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  Why Somatic Awareness Precedes Action
                </h3>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed space-y-3">
                <p>
                  Youth cannot act with sustained peace or ethical discernment if their autonomic nervous systems are chronically trapped in threat reactivity.
                </p>
                <p>
                  By creating a reliable baseline of inner observation, participants develop the physical and cognitive stamina required for higher-order deliberation in Module C (Contemplation) and Module T (Transformative Silence).
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs">
                <Link
                  href="/modules/contemplation"
                  className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1"
                >
                  <ArrowRight size={13} /> Continue to Module 02: Contemplation →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PSYCHOLOGICAL FOUNDATIONS & PRINCIPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
              Theoretical Foundation
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Core Cognitive Principles
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Scientific and philosophical frameworks operationalized within the lesson
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {coreIdeas.map((idea, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded p-5 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                  <h3 className="text-sm font-semibold text-slate-900">{idea.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
                  {idea.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. EXPERIENTIAL SESSION ARC
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
              Session Architecture
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Standard 45-Minute Lesson Arc
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Experiential sequence utilized by certified facilitators
            </p>
          </div>

          <div className="space-y-3">
            {experienceThemes.map((block, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded p-4 bg-white hover:border-[#4C9F38] transition-colors flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded bg-emerald-50 text-[#4C9F38] border border-emerald-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{block.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. NEXT SYLLABUS CONTINUATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
              Curriculum Sequence
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              Proceed to Module 02: Contemplation (ACT-102)
            </h3>
            <p className="text-xs text-slate-300">
              Deepen self-worth, ethical discernment, and inner resilience under UN SDG 16.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/modules/contemplation"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
            >
              Access Module ACT-102
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
