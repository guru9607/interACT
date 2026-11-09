import Link from "next/link";
import { CheckCircle2, ShieldCheck, TreePine, Footprints, Eye, Grid, AlertCircle, Compass, Users } from "lucide-react";

export function TransformativeSilenceManual() {
  return (
    <div className="space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
      {/* Institutional Header Banner */}
      <div className="p-4 bg-slate-50 border-l-4 border-[#19486A] border-y border-r border-slate-200 rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#19486A]">
              ACT-103
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#19486A]">
              Module 3 — Transformative Silence · UN SDG Target 17.17
            </span>
          </div>
          <p className="text-xs text-slate-600">
            Aligned with the interACT Standards Framework. For combined delivery, see the{" "}
            <Link
              href="/facilitator-guide/three-hour-program"
              className="font-semibold text-[#0072CE] underline"
            >
              3-Hour Combined Program Master Script
            </Link>
            . Below provides the standalone delivery framework for <strong>60–75 minutes</strong>.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-slate-500 block">Duration: 60–75 min</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Focus: Grounding &amp; Response</span>
        </div>
      </div>

      {/* Module Overview */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          1. Module Overview
        </h2>
          <p className="text-slate-600 leading-relaxed">
            The Transformative Silence module introduces participants to reflective silence as a structured experiential practice that supports grounding the self to one's original state, and averting attention from patterned reaction to intentional response. The module provides opportunities for participants to slow down, observe internal experiences, and develop greater clarity in how they choose to react to situations, thoughts, and emotions.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Transformative Silence is not presented as a spiritual or therapeutic process. Rather, it is a reflective attention practice that helps participants to choose and change the reaction patterns already developed to various situations through guided silence, grounding exercises, and experiential activities.
          </p>
      </section>

        {/* Learning Objectives */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
            2. Learning Objectives
          </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-slate-600 pt-1">
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Experience reflective silence as a grounding practice.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Develop greater awareness of internal reaction patterns and how these can be altered.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Strengthen the ability to pause before reacting.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Explore innate qualities such as calmness, clarity, patience, compassion, and responsibility.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Reflect on how silence and attention influence daily responses and relationships.</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
                <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                <span>Practice structured reflective activities individually and in groups.</span>
              </li>
            </ul>
        </section>

        {/* Core Concepts Table */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
            3. Core Concepts
          </h2>
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                  <div className="grid grid-cols-12 bg-slate-100 text-[11px] font-bold text-[#0B2545] uppercase tracking-wider p-2.5 border-b border-slate-200">
                    <span className="col-span-4 sm:col-span-3">Concept</span>
                    <span className="col-span-8 sm:col-span-9">Definition</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="grid grid-cols-12 p-3">
                      <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Transformative Silence</span>
                      <span className="col-span-8 sm:col-span-9 text-slate-600">
                        A structured reflective pause that supports grounding, and intentional response.
                      </span>
                    </div>
                    <div className="grid grid-cols-12 p-3 bg-slate-50/50">
                      <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Grounding</span>
                      <span className="col-span-8 sm:col-span-9 text-slate-600">
                        Feeling mentally and physically present, and attentive.
                      </span>
                    </div>
                    <div className="grid grid-cols-12 p-3">
                      <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Reflective Attention</span>
                      <span className="col-span-8 sm:col-span-9 text-slate-600">
                        Observing thoughts, emotions, and reactions without immediately responding to them.
                      </span>
                    </div>
                    <div className="grid grid-cols-12 p-3 bg-slate-50/50">
                      <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Intentional Response</span>
                      <span className="col-span-8 sm:col-span-9 text-slate-600">
                        Creating space to respond thoughtfully rather than reacting automatically.
                      </span>
                    </div>
                    <div className="grid grid-cols-12 p-3">
                      <span className="col-span-4 sm:col-span-3 font-semibold text-[#0B2545]">Inner Qualities</span>
                      <span className="col-span-8 sm:col-span-9 text-slate-600">
                        Personal qualities such as calmness, clarity, compassion, courage, respect, and responsibility that can be strengthened through reflection and practice.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

                  {/* Session Flow & Structured Activities (60-75 Min) */}
                  <section className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
                      4. Structured Session Flow (60–75 Minutes)
                    </h2>
                    <div className="space-y-4">

                      {/* Practice 1 */}
                      <div className="border border-slate-200 bg-white p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                          <TreePine size={16} className="text-[#19486A]" />
                          <strong className="text-xs uppercase tracking-wider text-[#0B2545]">Activity 1: Tree Grounding Practice</strong>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Stand comfortably with feet shoulder-width apart. Relax shoulders. Bring attention to breathing without trying to control it.
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Now imagine yourself standing like a tree — steady, balanced, and grounded. Notice contact between feet and floor. Imagine the stability of a tree during changing weather conditions. Reflect silently:
                        </p>
                        <ul className="text-xs text-slate-600 list-disc pl-5 space-y-0.5">
                          <li>What helps me remain steady during difficulty?</li>
                          <li>How do I usually react under stress?</li>
                          <li>What helps me pause before responding?</li>
                        </ul>
                      </div>

                            {/* Practice 2 */}
                            <div className="border border-slate-200 bg-white p-4 rounded-lg space-y-2">
                              <div className="flex items-center gap-2">
                                <Compass size={16} className="text-[#19486A]" />
                                <strong className="text-xs uppercase tracking-wider text-[#0B2545]">Activity 2: Guided Silence Reflection Commentary</strong>
                              </div>
                              <div className="p-3 bg-slate-50 border-l-2 border-[#19486A] text-xs text-slate-700 italic space-y-2">
                                <p>
                                  “Sit back comfortably with your back straight and eyes closed… Pause for a while… &amp; watch your thoughts as they come and go… Watch them as they slow down… slowly shift your attention to a fresh-flowing river surrounded by lush green trees and bushes… with fragrant, colourful flowers… now see yourself enjoying the beautiful nature… over there you notice vibrant butterflies too… fluttering by joyfully… the river water flowing so gently… the cold breeze carries along a sense of peace and pleasure… the birds chirping a song of happiness… the trees standing tall and strong remind me of the power and strength within me…”
                                </p>
                                <p>
                                  “Take your attention inwards, and have a look at your innate qualities… that belong to You… YOUR INNER SELF… peace, love, happiness, bliss, patience, acceptance… see yourself as a peaceful, loving being… experience these qualities… that empower you… rejuvenate the INNER ME… and bring a beautiful transformation… to make You, your best version… aligning your thoughts, words and actions… and bringing them into reality…”
                                </p>
                              </div>
                            </div>

                                {/* Practice 3 */}
                                <div className="border border-slate-200 bg-white p-4 rounded-lg space-y-2">
                                  <div className="flex items-center gap-2">
                                    <Footprints size={16} className="text-[#19486A]" />
                                    <strong className="text-xs uppercase tracking-wider text-[#0B2545]">Activity 3: Walking Reflection Activity</strong>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    Participants receive three sheets of paper:
                                  </p>
                                  <div className="grid sm:grid-cols-3 gap-2 text-xs">
                                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                                      <strong>Sheet 1:</strong> A challenge, reaction pattern, or habit.
                                    </div>
                                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                                      <strong>Sheet 2:</strong> The words 'Transformative Silence'.
                                    </div>
                                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                                      <strong>Sheet 3:</strong> A quality or response they wish to strengthen.
                                    </div>
                                  </div>
                                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                                    Participants slowly walk through each stage while reflecting silently: How does this pattern affect decisions? What changes when I pause? What quality would help me respond differently?
                                  </p>
                                </div>

                                    {/* Practice 4 */}
                                    <div className="border border-slate-200 bg-white p-4 rounded-lg space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Eye size={16} className="text-[#19486A]" />
                                        <strong className="text-xs uppercase tracking-wider text-[#0B2545]">Activity 4: Perspective Reflection Practice</strong>
                                      </div>
                                      <p className="text-xs text-slate-600 leading-relaxed">
                                        Invite participants to think about a situation they continue replaying mentally: What thoughts keep repeating? How does repeatedly revisiting affect attention? What changes when observed calmly rather than reactively?
                                      </p>
                                      <p className="text-xs text-slate-500 italic">
                                        Facilitator Closing: “Reflection does not erase experiences. It helps us become more intentional in how we respond moving forward.”
                                      </p>
                                    </div>

                                    {/* Practice 5 */}
                                    <div className="border border-slate-200 bg-white p-4 rounded-lg space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Grid size={16} className="text-[#19486A]" />
                                        <strong className="text-xs uppercase tracking-wider text-[#0B2545]">Activity 5: Transformative Silence Scrabble Activity</strong>
                                      </div>
                                      <p className="text-xs text-slate-600 leading-relaxed">
                                        Participants use the letters from the phrase <strong>'Transformative Silence'</strong> to create meaningful words connected to reflective attention and intentional response: <em>Calmness, Clarity, Patience, Focus, Courage, Respect, Grounding, Awareness, Responsibility, Compassion</em>.
                                      </p>
                                    </div>

                                  </div>
                                </section>

                                  {/* Canonical Inner Qualities Framework */}
                                  <section className="space-y-3">
                                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
                                      5. Canonical Inner Qualities Framework
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Awareness</strong>
                                        <span className="text-slate-600">Noticing without reacting</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Calmness</strong>
                                        <span className="text-slate-600">Emotional steadiness</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Clarity</strong>
                                        <span className="text-slate-600">Thoughtful understanding</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Respect</strong>
                                        <span className="text-slate-600">Valuing self and others</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Compassion</strong>
                                        <span className="text-slate-600">Empathy and care</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                                        <strong className="text-[#0B2545] block">Courage</strong>
                                        <span className="text-slate-600">Constructive response under difficulty</span>
                                      </div>
                                      <div className="p-3 bg-slate-50 border border-slate-200 rounded sm:col-span-2">
                                        <strong className="text-[#0B2545] block">Responsibility</strong>
                                        <span className="text-slate-600">Intentional action</span>
                                      </div>
                                    </div>
                                  </section>

                                  {/* Age Differentiation & Facilitator Guidelines */}
                                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                    <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                                      <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                                        <Users size={14} className="text-[#19486A]" />
                                        Age Differentiation
                                      </h3>
                                      <ul className="text-xs text-slate-600 space-y-1">
                                        <li><strong>Group A (18–22):</strong> Shorter silence periods, more guided prompts, more activity-based engagement, concrete real-life examples.</li>
                                        <li><strong>Group B (23–35):</strong> Longer reflective pauses, less facilitator interruption, more nuanced discussion prompts, application to work, relationships, and stress.</li>
                                      </ul>
                                    </section>

                                    <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
                                      <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                                        <AlertCircle size={14} className="text-[#19486A]" />
                                        Facilitator Standards
                                      </h3>
                                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                                        <li>Maintain calm, non-judgmental tone; allow silence without rushing.</li>
                                        <li>Avoid interpreting participant experiences; do not position as a healer.</li>
                                        <li>Facilitate reflection rather than emotional processing.</li>
                                      </ul>
                                    </section>
                                  </div>

                                  {/* Closing Reflection */}
                                  <div className="p-4 bg-slate-100/70 border border-slate-300 rounded text-xs text-slate-700 italic">
                                    “Moments of pause and reflective attention can help us respond with greater calmness, clarity, and intentionality. Even brief moments of silence can create space between reaction and response. Carry one moment of conscious pause with you today.”
                                  </div>
                              </div>
                              );
}
