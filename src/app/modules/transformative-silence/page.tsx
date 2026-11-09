"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Target,
  CheckCircle2,
  FileText,
  Compass,
} from "lucide-react";

const whatYouLearn = [
  "Experience stillness as active cognitive freedom—not merely outer sensory quiet, but liberation from compulsive or depleting ruminative loops.",
  "Utilize silence as a structured reflective space to discern proportionate, ethical, and collaborative solutions during complex dilemmas.",
  "Stabilize sustained attention so emotional composure is resilient against high-pressure environments, external friction, or negative feedback.",
  "Integrate habits cultivated in Modules ACT-101 and ACT-102 so calmness, honesty, and empathy hold steadfast in demanding academic and civic settings.",
  "Translate internal tranquility into empathetic active listening, directly advancing cross-cultural cooperation and UN SDG Target 17.17.",
];

const coreIdeas = [
  {
    title: "Stillness Beyond Absence of Sound",
    text: "Transformative silence is not empty quiet. It is a focused mental state where cognitive clutter settles so that moral discernment can operate with clarity.",
  },
  {
    title: "Depth of Ethical Discernment",
    text: "When internal noise subsides, an individual can weigh competing options fairly—separating reactive impulse from authentic long-term values.",
  },
  {
    title: "Autonomic Nervous Reset",
    text: "Structured stillness down-regulates sympathetic over-activation, providing a renewed physiological baseline that carries into speech and leadership.",
  },
  {
    title: "Empathetic Active Listening",
    text: "Authentic dialogue requires internal stillness. Listening without formulating immediate defensive replies is the bedrock of multi-stakeholder civil cooperation.",
  },
];

const experienceThemes = [
  {
    title: "1. Cognitive Decluttering Protocol",
    text: "Disciplined observation of habitual thought loops, learning to disengage attention from draining narratives and returning to neutral awareness.",
  },
  {
    title: "2. Silent Value-Anchored Reflection",
    text: "Using five to ten minutes of collective stillness to weigh a real-world dilemma: asking what is proportionate, compassionate, and true.",
  },
  {
    title: "3. Empathetic Listening Dyads",
    text: "Practicing receptive silence while a peer shares perspective—cultivating attentiveness without interrupting, correcting, or offering advice.",
  },
  {
    title: "4. Nervous System Stabilization",
    text: "Guided relaxation protocols to lower heart rate variability stress indicators and establish lasting physiological self-regulation.",
  },
  {
    title: "5. Civic Integration & Daily Practice",
    text: "Guidance on embedding 5-minute silence pauses into everyday academic, professional, and civic schedules to maintain long-term stability.",
  },
];

export default function TransformativeSilenceModule() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL SYLLABUS HEADER (SDG 17 NAVY)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="h-1.5 w-full bg-[#19486A]" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link
              href="/modules"
              className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors"
            >
              <ArrowLeft size={14} className="mr-1.5" /> Back to Curriculum Directory
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#19486A] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-bold">
                ACT-103
              </span>
              <span className="text-[11px] font-bold text-[#19486A] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded flex items-center gap-1">
                <Users size={11} /> UN SDG 17.17
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block">
              Module 03 · Integration &amp; Receptive Presence
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Transformative Silence (T): Empathetic Presence &amp; Dialogue
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              Move beyond outer quiet into an internal stillness that frees attention from reactive mental habits, restores nervous system equilibrium, and grounds empathetic listening. Cultivates the psychological foundations for cross-cultural collaboration under UN SDG Target 17.17.
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
                <span className="font-semibold text-slate-800">Experiential Circle</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Evidence Anchor:</span>
                <span className="font-semibold text-[#19486A]">UN Policy Brief on Dialogue</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING OUTCOMES & STRATEGIC PURPOSE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-10">
            
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                Curriculum Learning Outcomes
              </h2>
              <p className="text-xs text-slate-500">
                Measurable competencies developed through Module ACT-103:
              </p>

              <div className="space-y-3 pt-2">
                {whatYouLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                    <CheckCircle2 size={16} className="text-[#19486A] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] font-bold text-[#19486A] uppercase tracking-wider block mb-0.5">
                  Strategic Rationale
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  Stillness as the Foundation for Partnership
                </h3>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed space-y-3">
                <p>
                  United Nations Sustainable Development Goal 17 calls for durable partnerships across sectors and cultures. Yet partnerships routinely disintegrate due to defensive listening, egoic friction, and reactive polarization.
                </p>
                <p>
                  Transformative silence equips young leaders with the capacity to pause, down-regulate autonomic defensiveness, and listen with profound presence—creating authentic trust where collective action can flourish.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs">
                <Link
                  href="/modules"
                  className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1"
                >
                  <ArrowRight size={13} /> Return to Full Curriculum Overview →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THEORETICAL PRINCIPLES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
              Theoretical Foundation
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Core Principles of Transformative Stillness
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Scientific and communicative mechanisms operationalized in the module
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {coreIdeas.map((idea, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded p-5 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19486A]" />
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
          4. EXPERIENTIAL SESSION ARCHITECTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
              Session Sequence
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Standard 45-Minute Lesson Flow
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Five sequenced pedagogical movements for facilitator delivery
            </p>
          </div>

          <div className="space-y-3">
            {experienceThemes.map((block, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded p-4 bg-white hover:border-[#19486A] transition-colors flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded bg-slate-100 text-[#19486A] border border-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{block.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. COMPLETE CURRICULUM INTEGRATION & NEXT STEPS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
              Curriculum Complete
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              Ready to Experience or Host interACT?
            </h3>
            <p className="text-xs text-slate-300">
              Bring certified experiential workshops to your university, school, or community initiative.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
            >
              Host a Workshop
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Explore All 15 Modules
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
