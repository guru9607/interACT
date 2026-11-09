"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  CheckCircle2,
  TreePine,
  Footprints,
  Eye,
  Grid,
  Compass,
  Sparkles,
} from "lucide-react";

const learningObjectives = [
  "Experience reflective silence as an empirical grounding practice.",
  "Identify automatic reaction patterns and discover how to pause.",
  "Strengthen emotional self-regulation during interpersonal tension.",
  "Explore and activate innate qualities (calmness, clarity, compassion, courage).",
  "Translate inner stillness into intentional, constructive communication.",
];

const experientialActivities = [
  {
    number: "01",
    title: "Tree Grounding Practice",
    icon: TreePine,
    description:
      "A steady standing posture exercise connecting to natural respiration. Visualizing the rooted steadiness of a tree to remain calm during stressful situations.",
    tag: "Physical Grounding",
  },
  {
    number: "02",
    title: "Guided Nature & Stream Reflection",
    icon: Compass,
    description:
      "A gentle contemplative visualization: watching busy thoughts slow down beside a flowing river, reconnecting with innate peace, clarity, and patience.",
    tag: "Mental Calm",
  },
  {
    number: "03",
    title: "Walking Reflection Activity",
    icon: Footprints,
    description:
      "Moving mindfully across three symbolic stations: observing an automatic reaction habit, experiencing conscious silence, and choosing a thoughtful response.",
    tag: "Pattern Interruption",
  },
  {
    number: "04",
    title: "Perspective Reflection Practice",
    icon: Eye,
    description:
      "Examining a situation you repeatedly replay in your mind: shifting from rumination and blame to objective, calm observation.",
    tag: "Cognitive Reframing",
  },
  {
    number: "05",
    title: "Values Scrabble Activity",
    icon: Grid,
    description:
      "An interactive exercise assembling core qualities (calmness, clarity, courage, respect, compassion) from the letters of 'Transformative Silence'.",
    tag: "Group Collaboration",
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
              <span className="text-[11px] font-mono text-[#19486A] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-bold">
                ACT-103
              </span>
              <span className="text-[11px] font-bold text-[#19486A] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded flex items-center gap-1">
                <Users size={11} /> SDG 17.17
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block">
              Module 03 · 60–75 Minutes
            </span>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Transformative Silence (T): Grounding &amp; Intentional Response
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Reflective silence as an experiential grounding practice. Shift attention from automatic, impulsive reactions to calm, intentional responses.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200">
              <div className="bg-white p-2.5 rounded border border-slate-200">
                <span className="text-slate-500 block text-xs">Duration:</span>
                <span className="font-semibold text-slate-800 text-sm">60–75 minutes</span>
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
                <span className="font-semibold text-[#19486A] text-sm">SDG 17.17 (Partnership)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE LEARNING OBJECTIVES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
              Learning Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              What You Will Develop
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {learningObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded bg-[#F8F9FA] border border-slate-200 text-sm sm:text-base text-slate-700"
              >
                <CheckCircle2 size={18} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FIVE EXPERIENTIAL PRACTICES
          Visual Cards with Custom Icons
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-14 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
              Experiential Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              Five Core Practices
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              Practical exercises designed to experience stillness and strengthen intentional response.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {experientialActivities.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.number}
                  className="p-5 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-2 hover:border-slate-300 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[#19486A]">
                        <Icon size={16} />
                      </span>
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        {act.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B2545]">
                      {act.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CANONICAL INNER QUALITIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider block mb-1">
              Inner Capacities
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              Qualities Strengthened in Silence
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {canonicalQualities.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#F8F9FA] rounded-lg border border-slate-200 space-y-1 hover:border-[#19486A] transition-colors"
              >
                <div className="text-sm font-bold text-[#0B2545]">
                  {item.quality}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 leading-snug">
                  {item.meaning}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. COMPLETE CURRICULUM ARC CLOSURE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
              Curriculum Complete
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
              Ready to Join an interACT Gathering?
            </h3>
            <p className="text-sm text-slate-300">
              Free public workshops are organized regularly across colleges and communities worldwide.
            </p>
          </div>

          <div className="shrink-0 flex gap-2">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-xs"
            >
              Find a Workshop
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
