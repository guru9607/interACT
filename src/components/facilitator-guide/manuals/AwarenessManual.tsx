import Link from "next/link";
import { Info, Clock, CheckCircle2, Users, FileText, Sparkles } from "lucide-react";

export function AwarenessManual() {
  return (
    <div className="space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
      {/* Institutional Header Banner */}
      <div className="p-4 bg-slate-50 border-l-4 border-[#4C9F38] border-y border-r border-slate-200 rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#4C9F38]">
              ACT-101
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#4C9F38]">
              Module 1 — Awareness (A) · UN SDG Target 3.4
            </span>
          </div>
          <p className="text-xs text-slate-600">
            For the combined workshop, consult the{" "}
            <Link
              href="/facilitator-guide/three-hour-program"
              className="font-semibold text-[#0072CE] underline"
            >
              3-Hour Combined Workshop Master Script
            </Link>
            . This document provides the <strong>standalone 45-minute modular syllabus</strong>.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-slate-500 block">Duration: 45 min</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Ages 18–22 &amp; 23–35</span>
        </div>
      </div>

      {/* Module Overview */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          1. Module Overview
        </h2>
          <p className="text-slate-600 leading-relaxed">
            The “Awareness” module introduces participants to the skill of recognizing their inner self. This includes just noticing the thoughts &amp; emotions they come across, and the bodily sensations experienced without any judgement or reaction. The purpose is to create self-awareness that will enable a thorough reflection and spontaneous action in later stages of the interACT framework.
          </p>
          <p className="text-slate-600 leading-relaxed">
            This module is not focused on problem-solving. Instead, it emphasizes observation, presence, and reflection of inner me.
          </p>
      </section>

      {/* Learning Objectives */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          2. Learning Objectives
        </h2>
        <p className="text-xs text-slate-500">By the end of the session, participants will:</p>
        <ul className="grid sm:grid-cols-2 gap-2 pt-1 text-slate-600">
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Develop the ability to notice their thoughts, emotions, and sensations.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Differentiate between what is told to them and how they feel about it.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Find it easier to pause and think before acting.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Realize that awareness is a prerequisite for any action.</span>
          </li>
        </ul>
      </section>

      {/* Core Concepts */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          3. Core Concepts
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600">
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Inner Goodness:</strong>
            Awareness is to observe the inner goodness that forms our true nature.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Dynamic &amp; Transient:</strong>
            Internal experience (thoughts, emotions, sensations) is dynamic and transient.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Stimulus &amp; Response Gap:</strong>
            There is space between stimulus and response where choice resides.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Thoughts as Seeds:</strong>
            Awareness enables us to choose our thoughts (the seeds) for our future actions.
          </div>
        </div>
      </section>

      {/* Session Flow — 45 Minutes */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          4. Session Flow — 45 Minutes
        </h2>
        <div className="border border-slate-200 rounded divide-y divide-slate-100 overflow-hidden">
          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:00 – 0:05</span>
              <div className="text-xs space-y-1">
                <strong className="text-[#0B2545] block">Opening (5 minutes)</strong>
                <p className="text-slate-600">
                  Introduce awareness in simple terms. Suggested framing: <em>“Awareness is the conscious act of turning inward to observe our thoughts, emotions, and the inner goodness that forms our true nature.”</em>
                </p>
                <p className="text-slate-500">
                  Establish psychological safety: participation is voluntary; sharing is optional; no correct or incorrect experiences.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-white flex items-start gap-3">
              <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:05 – 0:12</span>
                <div className="text-xs space-y-1">
                  <strong className="text-[#0B2545] block">Guided Awareness Exercise (5–7 minutes)</strong>
                  <p className="text-slate-600">
                    Invite participants to sit comfortably. Pay attention to breathing (without controlling it). Slowly expand awareness to the immediate environment (feeling wind/air, hot or cold). Observe thoughts as they come and go. When carried away, gently bring attention back to observing them. Keep instructions simple and neutral.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 flex items-start gap-3">
                <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:12 – 0:22</span>
                  <div className="text-xs space-y-1">
                    <strong className="text-[#0B2545] block">Experiential Activity: Sensory Awareness (10 minutes)</strong>
                    <p className="text-slate-600">
                      Conduct adapted 5-4-3-2-1 group activity: 5 things seen, 4 things heard (physical sensations), 3 things felt, 2 things smelled, 1 thing noticed internally (thoughts or emotions). Briefly debrief: What did you notice? Was it easy or difficult to stay focused?
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-white flex items-start gap-3">
                  <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:22 – 0:34</span>
                    <div className="text-xs space-y-1">
                      <strong className="text-[#0B2545] block">Paired or Small Group Reflection (10–12 minutes)</strong>
                      <p className="text-slate-600">
                        Prompts: What did you notice about your thoughts during the exercise? Did anything surprise you? How often do you usually pause and notice your inner state? Facilitator role: encourage equal participation, do not interpret or analyze responses, maintain neutral supportive tone.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 flex items-start gap-3">
                      <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:34 – 0:40</span>
                      <div className="text-xs space-y-1">
                        <strong className="text-[#0B2545] block">Whole Group Integration (5–6 minutes)</strong>
                        <p className="text-slate-600">
                          Highlight key takeaways: Awareness is a skill that can be practiced; noticing is different from reacting; even brief pauses change how we respond. Optional prompt: <em>“If you become more aware of your internal state, how would your day be?”</em>
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-white flex items-start gap-3">
                        <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:40 – 0:45</span>
                        <div className="text-xs space-y-1">
                          <strong className="text-[#0B2545] block">Closing &amp; Everyday Practice (2–3 minutes)</strong>
                          <p className="text-slate-600">
                            Reinforce: <em>“Awareness is the starting point. Before we can reflect or take action, we need to be able to notice what is happening within us.”</em> Invite participants to take one pause during the day to notice thoughts and feelings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Adaptation by Age Group */}
                  <section className="space-y-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
                      5. Adaptation by Age Group
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#0B2545]">Group 1: Ages 18–22</span>
                          <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">Tone: Direct, Engaging</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Focus:</strong> Relatability, immediate experience, and simplicity.
                        </p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                          <li>Use more concrete language; keep explanations brief.</li>
                          <li>Emphasize shared experiences (stress, comparison, uncertainty).</li>
                          <li>Allow slightly more time for interactive elements.</li>
                        </ul>
                      </div>

                      <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#0B2545]">Group 2: Ages 23–35</span>
                          <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">Tone: Respectful, Grounded</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          <strong>Focus:</strong> Depth of reflection and application to daily responsibilities.
                        </p>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                          <li>Allow for more subtle reflection.</li>
                          <li>Include prompts related to decision-making, work, and relationships.</li>
                          <li>Encourage linking awareness to patterns of behavior.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Facilitator Guidelines & Materials */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                      <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                        <Users size={14} className="text-[#0072CE]" />
                        Facilitator Guidelines
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                        <li>Maintain a calm, neutral, and non-judgmental tone.</li>
                        <li>Avoid over-explaining concepts; prioritize experience.</li>
                        <li>Do not position yourself as an authority on participants' internal states.</li>
                        <li>Allow silence; do not rush to fill gaps.</li>
                        <li>Ensure psychological safety at all times.</li>
                      </ul>
                    </section>

                    <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                      <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                        <FileText size={14} className="text-[#0072CE]" />
                        Materials Required &amp; Outcomes
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                        <li>Timer or clock.</li>
                        <li>Slides (optional, minimal text).</li>
                        <li>Quiet, distraction-reduced environment.</li>
                        <li>Participants leave with practical understanding, direct experience, and a simple daily tool.</li>
                      </ul>
                    </section>
                  </div>
                </div>
                );
}
