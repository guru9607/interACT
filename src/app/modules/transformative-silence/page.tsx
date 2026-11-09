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
  TreePine,
  Footprints,
  Eye,
  Grid,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const learningObjectives = [
  "Experience reflective silence as an empirical grounding practice.",
  "Develop greater awareness of internal reaction patterns and how they can be intentionally altered.",
  "Strengthen the neuro-cognitive ability to pause before reacting under interpersonal friction.",
  "Explore innate qualities such as calmness, clarity, patience, compassion, and responsibility.",
  "Reflect on how silence and intentional attention influence daily communication and relationships.",
  "Practice structured reflective activities individually, in dyads, and across collective cohorts.",
];

const coreConcepts = [
  {
    concept: "Transformative Silence",
    definition: "A structured reflective pause that supports grounding and intentional response.",
  },
  {
    concept: "Grounding",
    definition: "Feeling mentally and physically present, anchored, and attentive.",
  },
  {
    concept: "Reflective Attention",
    definition: "Observing thoughts, emotions, and reactions without immediately responding to them.",
  },
  {
    concept: "Intentional Response",
    definition: "Creating space to respond thoughtfully rather than reacting automatically.",
  },
  {
    concept: "Inner Qualities",
    definition: "Personal qualities such as calmness, clarity, compassion, courage, respect, and responsibility strengthened through practice.",
  },
];

const experientialActivities = [
  {
    number: "01",
    title: "Tree Grounding Practice",
    icon: TreePine,
    description:
      "Participants stand with feet shoulder-width apart, relaxing shoulders and bringing attention to breathing. Visualizing the steady, balanced posture of a tree through changing weather, participants silently reflect: 'What helps me remain steady during difficulty? How do I usually react under stress? What helps me pause before responding?'",
  },
  {
    number: "02",
    title: "Guided Nature & Stream Reflection",
    icon: Compass,
    description:
      "A structured contemplative commentary guiding attention inward: watching thoughts slow down by a fresh-flowing river surrounded by lush trees and vibrant nature. Participants anchor attention into innate qualities—peace, love, happiness, bliss, patience, and acceptance—rejuvenating the inner self to align thoughts, words, and actions.",
  },
  {
    number: "03",
    title: "Walking Reflection Activity (3 Sheets)",
    icon: Footprints,
    description:
      "Participants receive three symbolic sheets: Sheet 1 (A challenge, reaction pattern, or habit), Sheet 2 (The words 'Transformative Silence'), and Sheet 3 (A quality or response they wish to strengthen). Moving silently through each station, participants reflect on how automatic patterns affect relationships and what changes when a conscious pause is taken.",
  },
  {
    number: "04",
    title: "Perspective Reflection Practice",
    icon: Eye,
    description:
      "Participants examine a situation they continue mentally replaying: 'What thoughts keep repeating? How does repeatedly revisiting this affect my peace of mind? What changes when I observe it calmly rather than reactively?' Shifting from rumination to constructive intentional response.",
  },
  {
    number: "05",
    title: "Transformative Silence Scrabble Activity",
    icon: Grid,
    description:
      "Using the literal letters from the phrase 'Transformative Silence', participants assemble meaningful words representing reflective attention and core values: Calmness, Clarity, Patience, Focus, Courage, Respect, Grounding, Awareness, Responsibility, and Compassion.",
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
              Module 03 · Aligned with the interACT Standards Framework
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Transformative Silence (T): Grounding &amp; Intentional Response
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              Introduces reflective silence as a structured experiential practice that supports grounding the self to one's original state, and averting attention from patterned reaction to intentional response. Not presented as a spiritual or therapeutic process, but as a reflective attention practice that helps participants choose constructive behavioral responses.
            </p>

            {/* Course Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Session Duration:</span>
                <span className="font-semibold text-slate-800">60–75 minutes</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Target Demographics:</span>
                <span className="font-semibold text-slate-800">Group A (18–22) &amp; Group B (23–35)</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Core Activities:</span>
                <span className="font-semibold text-slate-800">Tree Grounding &amp; Walking Reflection</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">UN 2030 Alignment:</span>
                <span className="font-semibold text-[#19486A]">SDG Target 17.17 (Civil Attunement)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING OBJECTIVES & CORE CONCEPTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-12 gap-10">

              {/* Left 6 Cols: Objectives */}
              <div className="md:col-span-6 space-y-4">
                <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                  Learning Objectives
                </h2>
                <p className="text-xs text-slate-500">
                  Measurable behavioral competencies developed in Module ACT-103:
                </p>

                    <div className="space-y-3 pt-1">
                      {learningObjectives.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                          <CheckCircle2 size={16} className="text-[#19486A] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
            </div>

                  {/* Right 6 Cols: Core Concepts Table */}
                  <div className="md:col-span-6 space-y-4">
                    <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                      Core Concepts
                    </h2>
                    <p className="text-xs text-slate-500">
                      Foundational definitions of the reflective silence framework:
                    </p>

                      <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs divide-y divide-slate-100">
                        {coreConcepts.map((item, idx) => (
                          <div key={idx} className="p-3 text-xs space-y-0.5">
                            <span className="font-bold text-[#0B2545] block font-serif">
                              {item.concept}
                            </span>
                            <span className="text-slate-600 leading-relaxed block">
                              {item.definition}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </section>

              {/* ─────────────────────────────────────────────────────────────
          3. EXPERIENTIAL ACTIVITIES (SESSION FLOW: 60-75 MIN)
      ───────────────────────────────────────────────────────────── */}
              <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="mb-8">
                    <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
                      Methodological Repertory
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                      Session Flow &amp; Structured Activities (60–75 Minutes)
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Five sequenced experiential practices facilitating deep grounding and intentional pause
                    </p>
                  </div>

                          <div className="space-y-4">
                            {experientialActivities.map((act) => {
                              const Icon = act.icon;
                              return (
                <div
                  key={act.number}
                  className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-2xs hover:border-[#19486A] transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-white bg-[#19486A] px-2 py-0.5 rounded">
                        {act.number}
                      </span>
                      <h3 className="text-base font-serif font-bold text-[#0B2545]">
                        {act.title}
                      </h3>
                    </div>
                    <Icon size={18} className="text-[#19486A]" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {act.description}
                  </p>
                </div>
                          );
            })}
                        </div>

                      </div>
      </section>

                  {/* ─────────────────────────────────────────────────────────────
          4. CANONICAL INNER QUALITIES FRAMEWORK
      ───────────────────────────────────────────────────────────── */}
                  <section className="py-12 md:py-16 bg-white border-b border-slate-200">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3 mb-8">
                            <div>
                              <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
                                Value Taxonomy
                              </span>
                              <h3 className="text-2xl font-serif font-bold text-[#0B2545]">
                                Canonical Inner Qualities Framework
                              </h3>
                            </div>
                            <span className="text-xs text-slate-500">
                              Cultivated and integrated through Transformative Silence
                            </span>
                          </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {canonicalQualities.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="border border-slate-200 rounded p-4 bg-[#F8F9FA] hover:border-[#19486A] transition-colors space-y-1"
                                  >
                                      <div className="text-xs font-bold font-serif text-[#0B2545]">
                                        {item.quality}
                                      </div>
                                        <div className="text-xs text-slate-600">
                                          {item.meaning}
                                        </div>
                                      </div>
            ))}
                                    </div>

                                    {/* Closing Reflection Directive */}
                                    <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-2">
                                      <span className="text-[10px] font-bold text-[#19486A] uppercase tracking-wider block">
                                        Closing Integration Directive
                                      </span>
                                      <p className="leading-relaxed italic">
                                        “Moments of pause and reflective attention can help us respond with greater calmness, clarity, and intentionality. Even brief moments of silence can create space between reaction and response. Carry one moment of conscious pause with you today.”
                                      </p>
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
                                    Complete Curriculum
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
