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
} from "lucide-react";

const whatYouLearn = [
  "Recognize that innate qualities like serenity, kindness, patience, and integrity are intrinsic human capacities—not transactional rewards earned through external achievement.",
  "Directly experience at least one core value through systematic contemplation, shifting from intellectual conceptualization into felt cognitive realization.",
  "Clarify the vital distinctions between self-worth, self-esteem, self-confidence, and self-respect to foster emotional equilibrium under peer and social pressures.",
  "Cultivate internal psychological stability as the empirical prerequisite for conflict de-escalation, advancing UN SDG Target 16.1.",
  "Establish a sustainable personal contemplation routine (~5 minutes daily) to reinforce ethical resilience in routine academic and civic life.",
];

const keyPrinciples = [
  "Inherent human virtues already exist within the individual; contemplation simply reorients attention toward them.",
  "Direct cognitive immersion in a virtue steadies emotional equilibrium far more reliably than superficial motivational rhetoric.",
  "Regular contemplative practice establishes self-worth rooted in enduring character rather than volatile social approval.",
  "Disciplined inward attention loosens the compulsive grip of moods and reactionary impulses dictated by adverse external circumstances.",
];

const clarityCards = [
  {
    term: "Self-Worth",
    text: "The inviolable realization that one possesses inherent dignity as a human being—independent of external marks, accolades, or societal validation.",
  },
  {
    term: "Self-Esteem",
    text: "How an individual evaluates competence across distinct domains (academic performance, athletic ability, appearance)—inherently fluid and subject to comparison.",
  },
  {
    term: "Self-Confidence",
    text: "Trust in one's capacity to navigate specific obstacles, systematically constructed through progressive technical mastery and experiential learning.",
  },
  {
    term: "Self-Respect",
    text: "The rigorous alignment of daily conduct with one's moral conscience and core values—refusing to compromise integrity for transient social acceptance.",
  },
];

const sessionShapes = [
  {
    title: "1. Orientation & Diagnostic Framing",
    text: "We examine why external metrics (grades, digital validation, social status) create fragile self-concepts, establishing the necessity for internal anchors.",
  },
  {
    title: "2. Conceptual Taxonomy of Virtue",
    text: "We introduce core human qualities in accessible language, clarifying the critical distinctions between self-worth, self-esteem, and self-respect.",
  },
  {
    title: "3. Internal vs. External Locus Analysis",
    text: "A non-judgmental reflective exercise mapping what influences daily moods and identifying reactionary reliance on external stimuli.",
  },
  {
    title: "4. Guided Contemplative Immersion",
    text: "Participants select a foundational quality (calmness, compassionate patience, or integrity) and sustain focused cognitive attention on its felt reality.",
  },
  {
    title: "5. Peer Dialogue & Consolidation",
    text: "Voluntary integration sharing where participants articulate cognitive shifts, followed by instruction on a 5-minute daily maintenance practice.",
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
              Module 02 · Values-Based Discernment
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
              Contemplation (C): Strengthening the Inner Core
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              Deepen cognitive contact with innate human virtues through guided reflection. Shift the locus of security from external validation to authentic internal stability—cultivating the emotional fortitude required for non-violence and peaceful decision-making under UN SDG 16.1.
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
                <span className="font-semibold text-slate-800">Interactive Seminar</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Evidence Anchor:</span>
                <span className="font-semibold text-[#00689D]">UNESCO MGIEP SEL</span>
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
                Measurable competencies developed through Module ACT-102:
              </p>

              <div className="space-y-3 pt-2">
                {whatYouLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                    <CheckCircle2 size={16} className="text-[#00AED9] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] font-bold text-[#00689D] uppercase tracking-wider block mb-0.5">
                  Strategic Rationale
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  Peace from Within as Civic Infrastructure
                </h3>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed space-y-3">
                <p>
                  UNESCO&apos;s constitution famously declares that &ldquo;since wars begin in the minds of men, it is in the minds of men that the defences of peace must be constructed.&rdquo;
                </p>
                <p>
                  Module ACT-102 operationalizes this principle by teaching youth to anchor their dignity in moral values rather than insecure rivalry, directly curbing the psychological roots of interpersonal and community hostility.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs">
                <Link
                  href="/modules/transformative-silence"
                  className="text-xs font-semibold text-[#0072CE] hover:underline inline-flex items-center gap-1"
                >
                  <ArrowRight size={13} /> Continue to Module 03: Transformative Silence →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. TAXONOMY: DEFINING INNER WORTH VS EXTERNAL ESTEEM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
              Conceptual Taxonomy
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Disentangling Self-Worth from Performance
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Critical analytical distinctions taught during the workshop to defuse adolescent anxiety
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {clarityCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded p-5 shadow-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00AED9]" />
                  <h3 className="text-sm font-semibold text-slate-900">{card.term}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
                  {card.text}
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
            <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider block mb-1">
              Session Arc
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
              Standard 45-Minute Lesson Structure
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Five sequenced pedagogical movements for facilitator delivery
            </p>
          </div>

          <div className="space-y-3">
            {sessionShapes.map((block, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded p-4 bg-white hover:border-[#00AED9] transition-colors flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded bg-sky-50 text-[#00689D] border border-sky-200 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
          5. NEXT SYLLABUS CONTINUATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider block">
              Curriculum Sequence
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              Proceed to Module 03: Transformative Silence (ACT-103)
            </h3>
            <p className="text-xs text-slate-300">
              Cultivate empathetic presence, autonomic renewal, and collaborative dialogue under UN SDG 17.
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
