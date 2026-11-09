import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, Users, Sparkles, Scale, Clock, AlertTriangle } from "lucide-react";

export function ContemplationManual() {
  return (
    <div className="space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
      {/* Institutional Header Banner */}
      <div className="p-4 bg-slate-50 border-l-4 border-[#00AED9] border-y border-r border-slate-200 rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#00AED9]">
              ACT-102
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AED9]">
              Module 2 — Contemplation (C) · UN SDG Target 16.1
            </span>
          </div>
          <p className="text-xs text-slate-600">
            What are my innate qualities? — Strengthening Your Inner Core. For combined delivery, see the{" "}
            <Link
              href="/facilitator-guide/three-hour-program"
              className="font-semibold text-[#0072CE] underline"
            >
              3-Hour Combined Program Master Script
            </Link>
            . This document provides the <strong>standalone 45-minute modular delivery</strong>.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-slate-500 block">Duration: 45 min</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Group A (18–22) &amp; B (23–35)</span>
        </div>
      </div>

        {/* Purpose of the Module */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
            1. Purpose of the Module
          </h2>
            <p className="text-slate-600 leading-relaxed">
              This module is designed to facilitate participants in developing awareness of their innate inner qualities. It provides an opportunity for participants to experience these qualities directly through contemplation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The module aims to shift participants' orientation from external sources of validation to internal stability and self-awareness, thereby strengthening foundational aspects of the self.
            </p>
        </section>

          {/* Learning Outcomes */}
          <section className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
              2. Learning Outcomes
            </h2>
            <p className="text-xs text-slate-500">Upon completion of this module, participants will be able to:</p>
            <ul className="grid sm:grid-cols-2 gap-2 pt-1 text-slate-600">
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                <span>Recognize the presence of innate qualities within themselves.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                <span>Experience at least one inner quality through guided contemplation.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                <span>Differentiate between self-worth, self-esteem, self-confidence, and self-respect.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                <span>Understand the role of inner attention in building emotional stability.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded sm:col-span-2">
                <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                <span>Initiate a basic self-practice (5 min daily) for continuous inner development.</span>
              </li>
            </ul>
          </section>

          {/* Conceptual Framework & Definitions */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545]">
                3. Conceptual Framework &amp; Definitions
              </h2>
              <span className="text-[11px] text-slate-400 font-mono">Core Taxonomies</span>
            </div>

                  <div className="bg-[#F8F9FA] border-l-4 border-[#00AED9] p-4 rounded-r text-xs text-slate-700 space-y-1">
                    <strong className="text-[#0B2545] block font-serif text-sm">Core Concept</strong>
                    <p className="leading-relaxed">
                      Every individual possesses inherent qualities such as calmness, kindness, patience, and clarity. These qualities are not dependent on any external achievements or validation but can be accessed through focused inner attention and contemplation.
                    </p>
                  </div>

                  {/* 4 Definitions Table */}
                  <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                    <div className="grid grid-cols-12 bg-slate-100 text-[11px] font-bold text-[#0B2545] uppercase tracking-wider p-2.5 border-b border-slate-200">
                      <span className="col-span-4 sm:col-span-3">Term</span>
                      <span className="col-span-8 sm:col-span-9">Definition</span>
                    </div>
                    <div className="divide-y divide-slate-100 text-xs">
                      <div className="grid grid-cols-12 p-3">
                        <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Self-worth</span>
                        <span className="col-span-8 sm:col-span-9 text-slate-600">
                          A deep inner feeling that “I am valuable as I am” — not because of what I achieve or how others treat me.
                        </span>
                      </div>
                      <div className="grid grid-cols-12 p-3 bg-slate-50/50">
                        <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Self-esteem</span>
                        <span className="col-span-8 sm:col-span-9 text-slate-600">
                          How I feel about myself in different areas of life (studies, work, looks, personality), which can change depending on situations.
                        </span>
                      </div>
                      <div className="grid grid-cols-12 p-3">
                        <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Self-confidence</span>
                        <span className="col-span-8 sm:col-span-9 text-slate-600">
                          My belief that “I can handle this” or “I can do this” based on my abilities and past experiences.
                        </span>
                      </div>
                      <div className="grid grid-cols-12 p-3 bg-slate-50/50">
                        <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Self-respect</span>
                        <span className="col-span-8 sm:col-span-9 text-slate-600">
                          How much I honor my own thoughts, feelings, and values, and whether I stand by them in my actions.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                    {/* Sample Session Flow (45 Minutes) */}
                    <section className="space-y-3">
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
                        4. Sample Session Flow (45 Minutes)
                      </h2>
                      <div className="border border-slate-200 rounded divide-y divide-slate-100 overflow-hidden text-xs">
                        <div className="p-3.5 bg-slate-50 flex items-start gap-3">
                          <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:00 – 0:05</span>
                          <div className="space-y-1">
                            <strong className="text-[#0B2545] block">Opening (5 mins)</strong>
                            <p className="text-slate-600">
                              <em>“Most of us try to feel good about ourselves based on what happens outside — marks, validation, appreciation, relationships… But today, we are not going to improve or change anything outside. Instead, we are going to experience something that already exists within us.”</em>
                            </p>
                            <p className="text-slate-500">
                              For 18–22: <em>“Have you ever noticed… that one comment from someone can ruin your whole mood?”</em><br />
                              For 23–35: <em>“Even after achieving things… many people still feel 'not enough'. That gap is what we explore today.”</em>
                            </p>
                          </div>
                        </div>

                            <div className="p-3.5 bg-white flex items-start gap-3">
                              <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:05 – 0:13</span>
                              <div className="space-y-1">
                                <strong className="text-[#0B2545] block">Concept Introduction (8 mins)</strong>
                                <p className="text-slate-600">
                                  <em>“Deep within, each one of us possesses innate qualities — like calmness, kindness, clarity, patience… These are not created by achievements. They are experienced when we turn inward.”</em> Define the 4 self-constructs clearly. Key line (say slowly): <em>“When you experience your inner qualities, these four need not be built separately… they strengthen naturally.”</em>
                                </p>
                              </div>
                            </div>

                                <div className="p-3.5 bg-slate-50 flex items-start gap-3">
                                  <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:13 – 0:18</span>
                                  <div className="space-y-1">
                                    <strong className="text-[#0B2545] block">Activity: External vs Internal (5 mins)</strong>
                                    <p className="text-slate-600">
                                      Ask: “Right now, what affects your mood the most?” (2–3 responses). Then ask: “Is that under your control or the outside?” Close: <em>“So if most of your emotional state depends on outside… you will always feel unstable. Now let's experience something that is not dependent on outside.”</em>
                                    </p>
                                  </div>
                                </div>

                                <div className="p-3.5 bg-white flex items-start gap-3">
                                  <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:18 – 0:33</span>
                                  <div className="space-y-1">
                                    <strong className="text-[#0B2545] block">Core Practice: Contemplation (15 mins)</strong>
                                    <p className="text-slate-600">
                                      Setup (slow your voice): <em>“Sit comfortably… Close your eyes if you're comfortable… We are not imagining anything. We are simply experiencing what is already there.”</em>
                                    </p>
                                    <ul className="list-disc pl-4 space-y-1 text-slate-600 pt-1">
                                      <li><strong>Step 1 — Choose a quality:</strong> “Bring attention to one quality: Calmness… kindness… acceptance… patience…” (18–22: 2–3 options only. 23–35: choose freely).</li>
                                      <li><strong>Step 2 — Hold attention:</strong> “Don't think about it… Just stay with that feeling…” (Pause 30–40 sec).</li>
                                      <li><strong>Step 3 — Deepen:</strong> “If it feels subtle… that's okay… Just stay… without forcing…” (Pause again).</li>
                                      <li><strong>Step 4 — Anchor:</strong> “This is not something you created… This is something you experienced.”</li>
                                      <li><strong>Silence duration:</strong> Ages 18–22 → 2–3 minutes total. Ages 23–35 → 4–5 minutes (longer silence, less interruption).</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="p-3.5 bg-slate-50 flex items-start gap-3">
                                  <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:33 – 0:40</span>
                                  <div className="space-y-1">
                                    <strong className="text-[#0B2545] block">Reflection (7 mins)</strong>
                                    <p className="text-slate-600">
                                      Prompts: What did you experience? Was it dependent on anything outside? How did it feel compared to your usual state? For 18–22: Allow 2–3 participants to share and help them articulate. For 23–35: Less sharing, more internal reflection: <em>“Even if you don't share, just notice it for yourself.”</em>
                                    </p>
                                  </div>
                                </div>

                                <div className="p-3.5 bg-white flex items-start gap-3">
                                  <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:40 – 0:45</span>
                                  <div className="space-y-1">
                                    <strong className="text-[#0B2545] block">Integration &amp; Closing (5 mins)</strong>
                                    <p className="text-slate-600">
                                      <em>“If you spend even 5 minutes daily with this… your relationship with yourself will start changing. Then your self-worth would not depend on who stays or leaves… your self-confidence won't depend only on success… and your self-respect will become clearer. You don't need to become something new… You need to connect with what is already within you.”</em>
                                    </p>
                                    <p className="text-[#0072CE] font-semibold pt-0.5">
                                      Everyday Micro-practice: Just 5 minutes daily — sit, choose one quality, and stay with it.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </section>

                            {/* Age Differences — Why They Matter */}
                            <section className="space-y-3">
                              <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
                                5. Age Group Differences — Why They Matter
                              </h2>
                                <p className="text-xs text-slate-500">
                                  Using the exact same guide without adapting risks the session feeling too basic for ages 23–35 or too abstract for ages 18–22.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 pt-1">
                                  <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
                                      <span className="font-bold text-xs text-[#0B2545] block">Ages 18–22 — What They Need</span>
                                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                                        <li>Still forming identity; highly influenced by peers, comparison, and validation.</li>
                                        <li>Shorter attention span — needs active engagement and relatability.</li>
                                        <li>Simpler language and more guided reflection with clear real-life connection.</li>
                                        <li>Shorter contemplation duration (2–3 minutes).</li>
                                      </ul>
                                  </div>

                                  <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
                                      <span className="font-bold text-xs text-[#0B2545] block">Ages 23–35 — What They Need</span>
                                      <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                                        <li>Facing real-life pressures (career, relationships, failure, responsibilities).</li>
                                        <li>Can sit in silence more comfortably; needs language that feels real, not motivational.</li>
                                        <li>Less activity, more depth and introspective silence (4–5 minutes).</li>
                                        <li>Direct connection to lived struggles.</li>
                                      </ul>
                                  </div>
                                </div>
                            </section>

                            {/* Facilitator Directives */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                              <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                                <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                                  <CheckCircle2 size={14} className="text-[#00AED9]" />
                                  Recommended Practices
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                                  <li>Maintain a calm, steady, and non-directive tone.</li>
                                  <li>Allow adequate silence during contemplation.</li>
                                  <li>Stay aligned with the experiential nature of the module.</li>
                                </ul>
                              </section>

                              <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                                <h3 className="font-bold text-xs uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                                  <AlertTriangle size={14} className="text-rose-700" />
                                  Practices to Avoid &amp; Limitations
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                                  <li>Do not convert the session into a motivational discourse.</li>
                                  <li>Do not over-explain during contemplation.</li>
                                  <li>The module does not produce immediate permanent change; daily practice is required.</li>
                                </ul>
                              </section>
                            </div>
                          </div>
                          );
}
