"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Heart,
  ShieldCheck,
  Users,
  Compass,
  Calendar,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [showCitations, setShowCitations] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO: INNER RESILIENCE FOR YOUTH
          Clean, Inspiring & Mobile-First
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Tri-color SDG Hairline */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">

          {/* Subheader Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-6 text-xs font-semibold tracking-wider uppercase text-slate-500">
            <div className="flex items-center gap-2 text-[#0072CE]">
              <Globe size={14} className="shrink-0" />
              <span>International Youth Initiative · UN 2030 Agenda</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-emerald-700 font-bold">SDG 3</span>
              <span>·</span>
              <span className="text-sky-700 font-bold">SDG 16</span>
              <span>·</span>
              <span className="text-slate-800 font-bold">SDG 17</span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left 7 Cols: Mission & Value Proposition */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-200 text-[#0058A3] text-xs font-bold uppercase tracking-wider rounded">
                <Sparkles size={13} className="text-[#0072CE]" />
                <span>Empowering Youth (Ages 18–35)</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
                Inner Resilience, Self-Awareness &amp; Peace <br className="hidden sm:inline" />
                <span className="text-[#0072CE]">for the Next Generation</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                interACT is an international civil society initiative supporting the UN 2030 Agenda. We offer free, non-sectarian workshops that help young people discover inner calm, emotional clarity, and purposeful action.
              </p>

              {/* 4 Feature Badges (Compact 2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0" />
                  <span>3 Modular Experiential Tracks</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 size={15} className="text-[#00AED9] shrink-0" />
                  <span>100% Free Open Educational Access</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 size={15} className="text-[#0072CE] shrink-0" />
                  <span>Non-Sectarian &amp; Inclusive</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200">
                  <CheckCircle2 size={15} className="text-[#19486A] shrink-0" />
                  <span>Standardized 45–75m Sessions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded text-white bg-[#0072CE] hover:bg-[#0058A3] transition-colors shadow-sm"
                >
                  Explore Curriculum Modules
                  <ArrowRight className="ml-1.5" size={16} />
                </Link>

                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 text-sm font-semibold rounded text-[#0B2545] bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <Calendar className="mr-1.5" size={16} />
                  Find Upcoming Gatherings
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-[#0072CE] hover:underline transition-colors"
                >
                  UN SDG Alignment →
                </Link>
              </div>

            </div>

            {/* Right 5 Cols: Visual Framework Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Pedagogical Framework
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#0072CE] bg-blue-50 px-2 py-0.5 rounded">
                    UN 2030 AGENDA
                  </span>
                </div>

                <div className="relative bg-slate-50 border border-slate-100 rounded overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="interACT Curriculum Mapping to United Nations SDGs 3, 16, and 17"
                    width={560}
                    height={560}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] sm:text-[11px] pt-1 border-t border-slate-100 font-semibold">
                  <div className="p-1.5 bg-emerald-50 text-emerald-900 rounded border border-emerald-100">
                    SDG 3: Well-being
                  </div>
                  <div className="p-1.5 bg-sky-50 text-sky-900 rounded border border-sky-100">
                    SDG 16: Peace
                  </div>
                  <div className="p-1.5 bg-slate-100 text-[#0B2545] rounded border border-slate-200">
                    SDG 17: Partnership
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. IMPACT METRICS & GLOBAL EVIDENCE
          Clean 2x2 on Mobile, 4-Col on Desktop
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-4 sm:mb-6 flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Why This Initiative Matters · Global Context
            </h2>
            <span className="text-xs text-slate-400">
              Data: WHO · UNESCO · Lancet
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">

            {/* Stat 1 */}
            <div className="p-3.5 sm:p-4 bg-[#F8F9FA] rounded border border-slate-200">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] mb-0.5">
                1 in 7
              </div>
              <div className="text-[11px] font-bold text-[#4C9F38] uppercase tracking-wide mb-1">
                Adolescents Globally
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Experience a mental health condition (WHO). interACT provides preventive self-awareness.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-3.5 sm:p-4 bg-[#F8F9FA] rounded border border-slate-200">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] mb-0.5">
                59%
              </div>
              <div className="text-[11px] font-bold text-[#00AED9] uppercase tracking-wide mb-1">
                Youth Distress
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Feel overwhelmed by current global crises. Inner resilience turns paralysis into positive action.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-3.5 sm:p-4 bg-[#F8F9FA] rounded border border-slate-200">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] mb-0.5">
                31%
              </div>
              <div className="text-[11px] font-bold text-[#00689D] uppercase tracking-wide mb-1">
                Anxiety Reduction
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Demonstrated across meta-analyses of standardized contemplative and mindfulness protocols.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-3.5 sm:p-4 bg-[#F8F9FA] rounded border border-slate-200">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] mb-0.5">
                100%
              </div>
              <div className="text-[11px] font-bold text-[#19486A] uppercase tracking-wide mb-1">
                Open Access
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                All workshop modules, thought trackers, and tools are provided free for youth and community groups.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE THREE PILLARS (THE ACT CURRICULUM)
          Visual Cards with Color Coding & High-Impact Bullets
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-1">
              <Compass size={14} />
              <span>Core Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] tracking-tight mb-2">
              The Three Pillars of interACT
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Three progressive competencies that link personal inner strength directly with the United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* PILLAR 1: Awareness (SDG 3) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#4C9F38]" aria-hidden="true" />

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#4C9F38] uppercase tracking-wider">
                    Pillar I · Awareness
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[#4C9F38] text-[11px] font-bold border border-emerald-200">
                    <Heart size={11} />
                    SDG 3.4
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Awareness (A)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Observing internal thoughts, emotions, and physical stress signals without reactive judgment. Discovering the quiet observer self.
                </p>

                <div className="space-y-1.5 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#4C9F38] shrink-0" />
                    <span>Mindful respiration &amp; bodily grounding</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#4C9F38] shrink-0" />
                    <span>Adapted 5-4-3-2-1 sensory awareness</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#4C9F38] shrink-0" />
                    <span>The Stimulus-to-Response gap</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Session: 45 min</span>
                  <Link
                    href="/modules/awareness"
                    className="font-bold text-[#4C9F38] hover:underline inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 2: Contemplation (SDG 16) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#00AED9]" aria-hidden="true" />

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#00689D] uppercase tracking-wider">
                    Pillar II · Contemplation
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 text-[#00689D] text-[11px] font-bold border border-sky-200">
                    <ShieldCheck size={11} />
                    SDG 16.1
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Contemplation (C)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Strengthening your inner core. Grounding self-worth in enduring innate values—calmness, clarity, and respect—rather than external validation.
                </p>

                <div className="space-y-1.5 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#00AED9] shrink-0" />
                    <span>Four Self-Constructs (Worth, Esteem, Confidence, Respect)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#00AED9] shrink-0" />
                    <span>Direct contemplation of peace &amp; clarity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#00AED9] shrink-0" />
                    <span>Everyday 5-minute anchoring practice</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Session: 45 min</span>
                  <Link
                    href="/modules/contemplation"
                    className="font-bold text-[#00689D] hover:underline inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 3: Transformative Silence (SDG 17) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-xs overflow-hidden flex flex-col hover:border-slate-300 transition-colors">
              <div className="h-1.5 w-full bg-[#19486A]" aria-hidden="true" />

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#19486A] uppercase tracking-wider">
                    Pillar III · Silence
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-[#19486A] text-[11px] font-bold border border-slate-300">
                    <Users size={11} />
                    SDG 17.17
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Transformative Silence (T)
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Experiential stillness that quiets autonomic reactivity. Transitioning from impulsive reaction to intentional, compassionate response.
                </p>

                <div className="space-y-1.5 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#19486A] shrink-0" />
                    <span>Tree Grounding Practice for physical stillness</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#19486A] shrink-0" />
                    <span>Walking Reflection &amp; Perspective exercises</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#19486A] shrink-0" />
                    <span>Canonical Inner Qualities Matrix</span>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Session: 60–75 min</span>
                  <Link
                    href="/modules/transformative-silence"
                    className="font-bold text-[#19486A] hover:underline inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FLEXIBLE DELIVERY FORMATS
          Compact, Action-Oriented Cards
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Workshop Formats
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              Designed for Universities, Schools &amp; Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">

            <div className="p-5 border border-slate-200 rounded-lg bg-[#F8F9FA] space-y-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0058A3] border border-blue-200 inline-block">
                Format 1 · 180 Minutes
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                3-Hour Intensive Workshop
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full sequential ACT arc in one comprehensive session: Awareness (45m) → Contemplation (50m) → Silence (40m) → Integration.
              </p>
              <Link
                href="/join"
                className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Find an Upcoming Session →
              </Link>
            </div>

            <div className="p-5 border border-slate-200 rounded-lg bg-[#F8F9FA] space-y-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#4C9F38] border border-emerald-200 inline-block">
                Format 2 · Modular
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                Standalone Modular Units
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                45-minute modular workshops integrated into campus wellness days, student orientation weeks, or community gatherings.
              </p>
              <Link
                href="/modules"
                className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Browse Curriculum →
              </Link>
            </div>

            <div className="p-5 border border-slate-200 rounded-lg bg-[#F8F9FA] space-y-3">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-[#19486A] border border-indigo-200 inline-block">
                Format 3 · Peer Circles
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                Campus &amp; Youth Circles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular peer reflection circles guided by trained facilitators using open thought trackers and silence reflections.
              </p>
              <Link
                href="/about"
                className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1 pt-1"
              >
                Learn About Methodology →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CALL TO ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
            Civil Society &amp; Youth Empowerment
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white max-w-2xl mx-auto">
            Experience an interACT Workshop in Your Community
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            All curriculum materials and public workshops are offered free of charge under our commitment to the United Nations 2030 Agenda.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded text-xs sm:text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-sm"
            >
              Find an Upcoming Gathering
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Explore Educational Modules
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. RESEARCH & POLICY CITATIONS (COLLAPSIBLE ON MOBILE)
          Progressive Disclosure to eliminate wall of text
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-6 border-t border-slate-200 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            type="button"
            onClick={() => setShowCitations(!showCitations)}
            className="w-full flex items-center justify-between text-left py-2 font-semibold text-slate-700 uppercase tracking-wider text-[11px] hover:text-[#0072CE] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-[#0072CE]" />
              <span>Key Research &amp; Policy Citations (WHO, UNESCO, Lancet)</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform ${showCitations ? "rotate-180" : ""}`}
            />
          </button>

          {showCitations && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 pt-4 border-t border-slate-100 text-[11px] leading-relaxed">
              <div>
                <strong className="text-slate-700">WHO (2021):</strong> Adolescent Mental Health Fact Sheet &amp; Global Guidelines for Non-Communicable Diseases (UN SDG 3.4).
              </div>
              <div>
                <strong className="text-slate-700">UNESCO MGIEP (2020):</strong> Rethinking Learning: A Review of Social and Emotional Learning for Peaceful Societies (UN SDG 16.1).
              </div>
              <div>
                <strong className="text-slate-700">The Lancet Planetary Health (2021):</strong> Climate anxiety in children and young people and their beliefs about government responses.
              </div>
              <div>
                <strong className="text-slate-700">Khoury et al. (2015):</strong> Mindfulness-based stress reduction for healthy individuals: A meta-analysis. <em>Journal of Psychosomatic Research</em>.
              </div>
              <div>
                <strong className="text-slate-700">UN Department of Global Communications:</strong> Guidelines for Civil Society Entities Aligned with the 2030 Agenda for Sustainable Development.
              </div>
              <div>
                <strong className="text-slate-700">UNICEF (2021):</strong> State of the World&apos;s Children: On My Mind — Promoting, protecting and caring for children&apos;s mental health.
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
