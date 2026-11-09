import Link from "next/link";
import UnitCard from "@/components/UnitCard";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
  Sparkles,
  Check,
  X,
  Target,
} from "lucide-react";

const modules = [
  {
    title: "Awareness (A): Observing the Inner Self",
    description:
    "Recognize thoughts, emotions, and sensations without judgment or immediate reaction. Builds the foundational space between stimulus and response, enabling intentional choice. (45 min · SDG 3.4)",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation (C): Strengthening the Inner Core",
    description:
    "Discover and experience innate qualities (calmness, kindness, patience). Shifts reliance from volatile external validation to authentic internal stability. (45 min · SDG 16.1)",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence (T): Grounding & Intentional Response",
    description:
    "A structured reflective pause supporting mental and physical grounding. Averts patterned reactions into intentional responses through tree grounding and walking reflection. (60–75 min · SDG 17.17)",
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
    isNot: "Trauma processing or emotional treatment",
  },
  {
    is: "Pause-building & intentional response training",
    isNot: "Religious talk",
  },
];

export default function ModulesPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & SYLLABUS CLASSIFICATION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Tri-color SDG Ribbon */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-4">
            <Globe size={14} className="shrink-0" />
            <span>Open Educational Resource (OER) · UN 2030 Agenda Syllabus</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-5">
            The ACT Curriculum: Cognitive &amp; Contemplative Framework
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mb-8">
            The interACT curriculum provides a non-sectarian, evidence-based pedagogy structured into three progressive core modules—<strong className="font-semibold text-slate-900">Awareness</strong>, <strong className="font-semibold text-slate-900">Contemplation</strong>, and <strong className="font-semibold text-slate-900">Transformative Silence</strong>. Differentiated for two distinct demographic cohorts: Ages 18–22 and Ages 23–35.
          </p>

          {/* Quick Curriculum Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Curriculum Scope:</span>
              <span className="font-semibold text-slate-800">3 Core Modules / 15 Units</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Target Demographics:</span>
              <span className="font-semibold text-slate-800">Group 1 (18–22) &amp; Group 2 (23–35)</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Core SDGs:</span>
              <span className="font-semibold text-slate-800">SDG 3.4 · 16.1 · 17.17</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Pedagogical Mode:</span>
              <span className="font-semibold text-[#0072CE]">Experiential &amp; Non-Sectarian</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE SYLLABUS DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                Pedagogical Progression
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                Standard Modules of Study
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Each unit contains experiential exercises, reflections, and demographic adaptations
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          3. WHAT INTERACT IS / IS NOT (CANONICAL DIRECTIVE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                  Methodological Clarity · Institutional Standard
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                  What interACT Is / What interACT Is Not
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  interACT maintains strict boundaries between experiential contemplative training and therapeutic or preaching modalities.
                </p>
              </div>

                    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
                      <div className="grid grid-cols-1 md:grid-cols-2 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
                        <div className="p-3.5 bg-emerald-50/80 text-emerald-900 border-b md:border-b-0 md:border-r border-slate-200 flex items-center gap-2">
                          <Check size={16} className="text-emerald-700" />
                          <span>interACT IS</span>
                        </div>
                          <div className="p-3.5 bg-rose-50/80 text-rose-900 flex items-center gap-2">
                            <X size={16} className="text-rose-700" />
                            <span>interACT IS NOT</span>
                          </div>
                        </div>

                            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                              {isIsNotList.map((row, idx) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-2">
                                  <div className="p-4 flex items-start gap-2.5 text-slate-700 md:border-r border-slate-100 bg-white">
                                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                                    <span>{row.is}</span>
                                  </div>
                                  <div className="p-4 flex items-start gap-2.5 text-slate-500 bg-slate-50/50">
                                    <span className="text-rose-600 font-bold shrink-0 mt-0.5">✗</span>
                                    <span>{row.isNot}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </section>

                      {/* ─────────────────────────────────────────────────────────────
          4. CANONICAL INNER QUALITIES FRAMEWORK
      ───────────────────────────────────────────────────────────── */}
                      <section className="py-16 bg-white border-b border-slate-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
                            <div>
                              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                                Canonical Standards
                              </span>
                              <h3 className="text-2xl font-serif font-bold text-[#0B2545]">
                                The Inner Qualities Framework
                              </h3>
                            </div>
                            <span className="text-xs text-slate-500">
                              Inherent qualities strengthened through reflection &amp; intentional practice
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {canonicalQualities.map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded p-4 bg-[#F8F9FA] hover:border-[#0072CE] transition-colors"
              >
                <div className="text-xs font-bold font-serif text-[#0B2545] mb-1">
                  {item.quality}
                </div>
                <div className="text-xs text-slate-600">
                  {item.meaning}
                </div>
              </div>
            ))}
            <div className="border border-dashed border-slate-300 rounded p-4 bg-slate-50 flex items-center justify-center text-center">
              <span className="text-xs text-slate-500 italic">
                Ever-present &amp; accessible via inner attention
              </span>
            </div>
          </div>

        </div>
                      </section>

                      {/* ─────────────────────────────────────────────────────────────
          5. TARGET DEMOGRAPHICS & AGE DIFFERENTIATION
      ───────────────────────────────────────────────────────────── */}
                      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                          <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                              Cohort Adaptation
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-[#0B2545]">
                              Age Group Differences — Why They Matter
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                              One modular structure supports both groups, but delivery is tailored so sessions remain engaging, relatable, and grounded in lived reality.
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Group 1 */}
                            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-2xs space-y-4">
                              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <div>
                                  <span className="text-[10px] font-bold text-[#4C9F38] uppercase tracking-wider block">Cohort 01</span>
                                  <h4 className="text-lg font-serif font-bold text-[#0B2545]">Group 1: Ages 18–22</h4>
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">University &amp; Early Career</span>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Still forming identity; highly influenced by peers, comparison, and external validation. Requires shorter attention spans, immediate relatability, and interactive exercises.
                              </p>
                              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                                  <span><strong>Language:</strong> Direct, concrete, and accessible</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                                  <span><strong>Silence Duration:</strong> 2–3 minutes (shorter, guided reflection)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                                  <span><strong>Themes:</strong> Academic stress, social media comparison, future uncertainty</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                                  <span><strong>Mode:</strong> Relatable hooks, pair sharing, active debrief</span>
                                </li>
                              </ul>
                            </div>

                                {/* Group 2 */}
                                <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-2xs space-y-4">
                                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <div>
                                      <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">Cohort 02</span>
                                      <h4 className="text-lg font-serif font-bold text-[#0B2545]">Group 2: Ages 23–35</h4>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Young Professionals &amp; Adults</span>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    Facing real-life pressures (career, relationships, failure, responsibilities). Can sit in silence more comfortably; values subtle introspection over high activity.
                                  </p>
                                  <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE]" />
                                      <span><strong>Language:</strong> Respectful, reflective, grounded (not motivational)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE]" />
                                      <span><strong>Silence Duration:</strong> 4–5 minutes (extended silent immersion)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE]" />
                                      <span><strong>Themes:</strong> Burnout, emotional boundaries, decision-making, 'not enough' gap</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0072CE]" />
                                      <span><strong>Mode:</strong> Internal personal reflection over group discussion</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </section>

                          {/* ─────────────────────────────────────────────────────────────
          6. INSTITUTIONAL INQUIRIES & CAMPUS DEPLOYMENT
      ───────────────────────────────────────────────────────────── */}
                          <section className="py-14 bg-white">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-[#F8F9FA] flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-2 max-w-2xl">
                                  <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                                    <FileText size={16} />
                                    <span>Institutional Implementation &amp; Campus Hosting</span>
                                  </div>
                                  <h3 className="text-xl font-serif font-bold text-[#0B2545]">
                                    Deploy the interACT Framework in Your Institution
                                  </h3>
                                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    Universities, colleges, and secondary institutions can host accredited workshops delivered by qualified faculty and trained coordinators at zero educational licensing cost.
                                  </p>
                                </div>
                                <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                                  <Link
                                    href="/join"
                                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0072CE] text-white text-xs font-semibold rounded hover:bg-[#0058A3] transition-colors shadow-xs"
                                  >
                                    Inquire for Campus Workshop
                                  </Link>
                                  <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded hover:bg-slate-50 transition-colors shadow-xs"
                                  >
                                    UN SDG Evidence Dossier
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </section>

                        </div>
                        );
}
