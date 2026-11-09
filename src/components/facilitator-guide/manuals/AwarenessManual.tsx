import Link from "next/link";
import { Info, Clock, CheckCircle2, Users, FileText } from "lucide-react";

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
              SDG Target 3.4 · Non-Communicable Conditions &amp; Mental Health
            </span>
          </div>
          <p className="text-xs text-slate-600">
            For the combined 3-hour journey, use the{" "}
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
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Target: 18–35 Years</span>
        </div>
      </div>

      {/* Module Overview */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          1. Module Overview &amp; Scientific Premise
        </h2>
        <p className="text-slate-600">
          Module ACT-101 introduces the cognitive capacity to recognize one's internal state—thoughts, emotions, and bodily sensations—without immediate judgment, rumination, or reactive behavior. It establishes a baseline of internal observation for subsequent interACT stages. The module does not focus on problem-solving or psychological analysis; the pedagogical emphasis is strictly centered on presence, sensory stillness, and cognitive defusion.
        </p>
      </section>

      {/* Learning Objectives */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          2. Measurable Learning Objectives
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2 pt-1 text-slate-600">
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Notice thoughts, emotions, and somatic sensations as they arise in real time.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Distinguish experiencing an involuntary thought from being defined by it.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Cultivate neurological comfort with brief pauses before initiating behavioral reactions.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
            <span>Identify awareness as the foundational prerequisite for self-determination.</span>
          </li>
        </ul>
      </section>

      {/* Core Concepts */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          3. Core Pedagogical Concepts
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600">
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Observation vs. Evaluation:</strong>
            Cultivating the neutral stance of the witness rather than critical self-judgment.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Transient Nature of State:</strong>
            Internal emotions and thoughts are dynamic phenomena that crest and pass if not reinforced.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">The Stimulus-Response Gap:</strong>
            Franklian psychological space where human choice, dignity, and calm reside.
          </div>
          <div className="border border-slate-200 p-3 rounded bg-white">
            <strong className="text-[#0B2545] block mb-1">Awareness Precedes Choice:</strong>
            One cannot change an autonomic habit loop that one has not consciously registered.
          </div>
        </div>
      </section>

      {/* Session Flow */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          4. Structured Session Flow (45 Minutes)
        </h2>
        <div className="border border-slate-200 rounded divide-y divide-slate-100 overflow-hidden">
          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:00 – 0:05</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Opening &amp; Orientation (5 min)</strong>
              <p className="text-slate-600">
                Introduce awareness experiential premise. Framing: “Notice what is happening within us without needing to change it immediately today—we observe rather than fix.” Establish psychological safety: voluntary participation, no compulsory sharing.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:05 – 0:12</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Guided Somatosensory Awareness (7 min)</strong>
              <p className="text-slate-600">
                Comfortable seated posture. Attention directed to natural respiration (without controlling rhythm); expansion to bodily sensations; observing fleeting thoughts without cognitive engagement.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:12 – 0:22</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Sensory Grounding Protocol (10 min)</strong>
              <p className="text-slate-600">
                Adapted 5-4-3-2-1 empirical grounding: 5 things seen, 4 things felt physically, 3 things heard, 2 internal bodily states noticed. Brief debrief: What was noticed? How did mental chatter shift?
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:22 – 0:34</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Paired Reflection Pods (12 min)</strong>
              <p className="text-slate-600">
                Dyad sharing prompts: What surprises emerged during observation? How often do you pause during academic or workplace stress? Facilitator monitors equal speaking time and prevents intellectual arguing.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:34 – 0:42</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Plenary Synthesis (8 min)</strong>
              <p className="text-slate-600">
                Summarize: awareness is a trainable attentional muscle; noticing is distinct from reacting; micro-pauses alter decision pathways. Inquiry: “What might shift if you paused for 10 seconds before reacting today?”
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-24 shrink-0">0:42 – 0:45</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Closing Commitment (3 min)</strong>
              <p className="text-slate-600">
                Reinforce that awareness precedes reflection (Module C) and silence (Module T). Participants select one routine daily trigger (e.g. unlocking their phone) to serve as an awareness anchor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Adaptations */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          5. Demographic Cohort Adaptations
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[#0B2545]">Cohort Group 1: Ages 18–22</span>
              <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">University / Early Career</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focus on relatability, cognitive overload, academic stress, social media comparison, and career uncertainty. Use concrete, direct vocabulary with higher interactive pacing. Avoid esoteric or clinical terminology.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-[#0B2545]">Cohort Group 2: Ages 23–35</span>
              <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">Young Professionals</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focus on workplace burnout, relational boundary setting, decision-making under executive fatigue, and habituation loops. Facilitator tone should be reflective, collegial, and grounded in applied behavioral science.
            </p>
          </div>
        </div>
      </section>

      {/* Facilitator Protocol & Materials */}
      <div className="grid sm:grid-cols-2 gap-4 pt-2">
        <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
            <Users size={14} className="text-[#0072CE]" />
            Facilitation Standards
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Maintain an emotionally grounded, neutral, and unhurried tone.</li>
            <li>Prioritize direct subjective experience over theoretical lectures.</li>
            <li>Protect silence; do not impulsively fill quiet moments.</li>
            <li>Maintain non-judgmental acceptance of all participant responses.</li>
          </ul>
        </section>

        <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
            <FileText size={14} className="text-[#0072CE]" />
            Room Setup &amp; Materials
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Silent countdown timekeeper / phone in airplane mode.</li>
            <li>Optional slides with minimal text (high contrast, UN palette).</li>
            <li>Acoustically quiet room with chairs arranged in circle or semi-circle.</li>
            <li>Notebooks and pens for written reflection exercises.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
