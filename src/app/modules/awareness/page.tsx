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
  Users,
  Sparkles,
} from "lucide-react";

const learningObjectives = [
  "Develop the ability to notice thoughts, emotions, and bodily sensations without judgment.",
  "Differentiate between what is told to you externally and how you actually feel internally.",
  "Find it easier to cultivate a deliberate pause and think before initiating action.",
  "Realize that self-awareness is the essential prerequisite for all intentional action.",
];

const coreConcepts = [
  {
    title: "Observing Inner Goodness",
    text: "Awareness is the conscious act of turning inward to observe thoughts, emotions, and the inner goodness that forms your true nature.",
  },
  {
    title: "Dynamic & Transient Experience",
    text: "Internal experiences (thoughts, feelings, somatic sensations) are dynamic and fluid—they pass naturally if not compulsively reinforced.",
  },
  {
    title: "The Stimulus-Response Gap",
    text: "There is always space between external stimulus and your response. Awareness unlocks that space, granting conscious agency.",
  },
  {
    title: "Thoughts as Seeds for Action",
    text: "Awareness empowers you to choose your thoughts as intentional seeds, determining the quality and direction of future actions.",
  },
];

const sessionStages = [
  {
    time: "0:00 – 0:05",
    title: "1. Opening & Framing (5 min)",
    description:
    "Introduce awareness in simple terms: conscious turning inward to observe thoughts and inner goodness. Establish psychological safety: voluntary participation, optional sharing, and no correct or incorrect experiences.",
  },
  {
    time: "0:05 – 0:12",
    title: "2. Guided Awareness Exercise (5–7 min)",
    description:
    "Comfortable seated posture. Attention directed to natural respiration without controlling rhythm. Expand awareness to the environment and observe thoughts as they come and go without getting carried away.",
  },
  {
    time: "0:12 – 0:22",
    title: "3. Experiential Activity: Sensory Awareness (10 min)",
    description:
    "Adapted 5-4-3-2-1 protocol for groups: 5 things seen, 4 things heard, 3 things felt, 2 things smelled, and 1 thing noticed internally (thoughts or emotions). Brief debrief on focus and ease.",
  },
  {
    time: "0:22 – 0:34",
    title: "4. Paired or Small Group Reflection (10–12 min)",
    description:
    "Participants reflect in dyads or pods: What did you notice about your thoughts? Did anything surprise you? How often do you pause to notice your inner state? Facilitator maintains equal sharing and a neutral tone.",
  },
  {
    time: "0:34 – 0:40",
    title: "5. Whole Group Integration (5–6 min)",
    description:
      "Group synthesis: Awareness is a trainable skill; noticing is distinct from reacting; brief pauses change response pathways. Optional inquiry: 'If you become more aware of your internal state, how would your day be?'",
  },
  {
    time: "0:40 – 0:45",
    title: "6. Closing & Daily Micro-Practice (2–3 min)",
    description:
      "Awareness is the starting point. Before we reflect or act, we notice. Participants commit to one simple practice: taking one conscious pause during the day to observe thoughts and feelings.",
  },
];

export default function AwarenessModule() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">

      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL SYLLABUS HEADER (SDG 3 GREEN)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
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
              Awareness (A): Observing the Inner Self
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
              The Awareness module introduces participants to the skill of recognizing their inner self. This includes noticing thoughts and emotions, and bodily sensations without judgment or reaction. The purpose is to create self-awareness that enables thorough reflection and spontaneous action in later stages of the interACT framework. Emphasizes observation, presence, and reflection rather than problem-solving.
            </p>

            {/* Course Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Session Duration:</span>
                <span className="font-semibold text-slate-800">45 minutes</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Target Demographics:</span>
                <span className="font-semibold text-slate-800">Group 1 (18–22) &amp; Group 2 (23–35)</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">Pedagogical Mode:</span>
                <span className="font-semibold text-slate-800">Experiential Workshop</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block font-medium">UN 2030 Alignment:</span>
                <span className="font-semibold text-[#4C9F38]">SDG Target 3.4 (Mental Well-being)</span>
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

              {/* Left 6 Cols: Specific Objectives */}
              <div className="md:col-span-6 space-y-4">
                <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                  Learning Objectives
                </h2>
                <p className="text-xs text-slate-500">
                  By the end of the 45-minute session, participants will:
                </p>

                    <div className="space-y-3 pt-1">
                      {learningObjectives.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded">
                          <CheckCircle2 size={16} className="text-[#4C9F38] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
            </div>

                  {/* Right 6 Cols: Core Concepts */}
                  <div className="md:col-span-6 space-y-4">
                    <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                      Core Concepts
                    </h2>
                    <p className="text-xs text-slate-500">
                      Foundational cognitive principles introduced during the workshop:
                    </p>

                      <div className="space-y-3 pt-1">
                        {coreConcepts.map((item, idx) => (
                          <div key={idx} className="p-3.5 bg-white border border-slate-200 rounded shadow-2xs space-y-1">
                            <div className="text-xs font-bold text-[#0B2545] flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]" />
                              <span>{item.title}</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pl-3">
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
          3. 45-MINUTE STRUCTURED SESSION FLOW
      ───────────────────────────────────────────────────────────── */}
              <section className="py-12 md:py-16 bg-[#F8F9FA] border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="mb-8">
                    <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
                      Workshop Schedule
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                      Session Flow — 45 Minutes
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Standardized experiential timetable deployed by certified facilitators
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

                        </div>
                      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ADAPTATION BY AGE GROUP (18-22 vs 23-35)
      ───────────────────────────────────────────────────────────── */}
                      < section className = "py-12 md:py-16 bg-white border-b border-slate-200" >
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="mb-8">
                          <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider block mb-1">
                            Pedagogical Differentiation
                          </span>
                          <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                            Adaptation by Age Group
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Tailoring communication, tone, and reflection depth to demographic realities
                          </p>
                        </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                {/* Group 1 */}
                                <div className="border border-slate-200 rounded p-6 bg-[#F8F9FA] space-y-3">
                                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                    <span className="font-bold text-xs text-[#0B2545]">Group 1: Ages 18–22</span>
                                    <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                                      Tone: Direct, Engaging
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Focus:</strong> Relatability, immediate experiential verification, and simplicity.
                                  </p>
                                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                                    <li>Use concrete everyday language; keep explanations brief.</li>
                                    <li>Emphasize shared experiences: academic stress, peer comparison, career uncertainty.</li>
                                    <li>Allow slightly more time for interactive exercises and pair sharing.</li>
                                  </ul>
                                </div>

                                {/* Group 2 */}
                                <div className="border border-slate-200 rounded p-6 bg-[#F8F9FA] space-y-3">
                                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                    <span className="font-bold text-xs text-[#0B2545]">Group 2: Ages 23–35</span>
                                    <span className="text-[10px] font-mono bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded">
                                      Tone: Respectful, Grounded
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong>Focus:</strong> Depth of reflection and application to daily responsibilities.
                                  </p>
                                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                                    <li>Allow for more subtle, introspective reflection rather than high activity.</li>
                                    <li>Include prompts related to decision-making, workplace stress, and relationships.</li>
                                    <li>Encourage participants to link awareness to underlying behavioral patterns.</li>
                                  </ul>
                                </div>
                              </div>

                              {/* Key Outcomes Box */}
                              <div className="mt-8 p-5 bg-emerald-50/60 border border-emerald-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-700">
                                <div>
                                  <strong className="text-emerald-900 block font-serif text-sm mb-0.5">Key Participant Outcomes</strong>
                                  <span>Participants leave with a practical understanding of awareness, direct experience observing internal states, and a repeatable daily micro-pause tool.</span>
                                </div>
                                <div className="shrink-0 text-right font-mono text-[11px] text-emerald-800">
                                  Module A Foundation
                                </div>
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
                                Strengthen the inner core and experience innate qualities under UN SDG 16.
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
