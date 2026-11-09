import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, Users, Sparkles } from "lucide-react";

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
              SDG Target 16.1 · Reduction of Violence &amp; Self-Worth Foundation
            </span>
          </div>
          <p className="text-xs text-slate-600">
            For the combined workshop, consult the{" "}
            <Link
              href="/facilitator-guide/three-hour-program"
              className="font-semibold text-[#0072CE] underline"
            >
              3-Hour Combined Program Master Script
            </Link>
            . This syllabus governs the <strong>standalone 45-minute modular delivery</strong>.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-slate-500 block">Duration: 45 min</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Topic: Innate Qualities</span>
        </div>
      </div>

      {/* Purpose & Core Concept */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          1. Module Purpose &amp; Psychological Premise
        </h2>
        <p className="text-slate-600">
          Module ACT-102 guides participants in shifting from external contingency-based validation (grades, social media approval, peer status) toward an internal locus of stability grounded in innate universal values. Through structured contemplation, participants directly experience that qualities such as peace, kindness, patience, and courage are inherent baseline capacities accessible via focused inner attention rather than external trophies.
        </p>
      </section>

      {/* Taxonomy of Self-Constructs */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545]">
            2. The Four Self-Constructs (Teach with Exact Precision)
          </h2>
          <span className="text-[11px] text-slate-400 font-mono">Taxonomy Framework</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 pt-1">
          <div className="border border-slate-200 bg-white p-3.5 rounded shadow-2xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AED9]" />
              <strong className="text-xs text-[#0B2545] uppercase tracking-wider">Self-Worth (Inherent)</strong>
            </div>
            <p className="text-xs text-slate-600">
              The unconditional recognition that I have innate value as a living human being, regardless of performance, job status, physical attributes, or how others treat me.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-3.5 rounded shadow-2xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <strong className="text-xs text-[#0B2545] uppercase tracking-wider">Self-Esteem (Evaluative)</strong>
            </div>
            <p className="text-xs text-slate-600">
              How I evaluate and feel about myself across domains; naturally fluctuates with external success, social comparison, and environmental feedback.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-3.5 rounded shadow-2xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <strong className="text-xs text-[#0B2545] uppercase tracking-wider">Self-Confidence (Competency)</strong>
            </div>
            <p className="text-xs text-slate-600">
              Trust in my specific capacity to perform a task or navigate a challenge, derived from acquired skills, past repetition, and behavioral experience.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-3.5 rounded shadow-2xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0B2545]" />
              <strong className="text-xs text-[#0B2545] uppercase tracking-wider">Self-Respect (Integrity)</strong>
            </div>
            <p className="text-xs text-slate-600">
              Honoring my inner values, thoughts, and boundaries; taking actions that strictly align with my moral conscience rather than external peer pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Session Structure Table */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          3. Session Time Allocation Ledger (45 Minutes)
        </h2>
        <div className="border border-slate-200 rounded overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-mono text-[10px]">
              <tr>
                <th className="p-3 w-28">Timing</th>
                <th className="p-3 w-40">Segment</th>
                <th className="p-3">Pedagogical Objective &amp; Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:00 – 0:05</td>
                <td className="p-3 font-medium text-slate-800">Opening Framing</td>
                <td className="p-3">Context setting: external validation culture vs. intentional inner exploration.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:05 – 0:13</td>
                <td className="p-3 font-medium text-slate-800">Concept Exposition</td>
                <td className="p-3">Delineate the four self-constructs; introduce innate qualities as permanent reserves.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:13 – 0:18</td>
                <td className="p-3 font-medium text-slate-800">Diagnostic Exercise</td>
                <td className="p-3">Mapping external vs. internal triggers on personal emotional stability.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:18 – 0:33</td>
                <td className="p-3 font-medium text-slate-800">Core Contemplation</td>
                <td className="p-3">Guided experiential meditation focused on feeling one specific innate quality (peace or clarity).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:33 – 0:40</td>
                <td className="p-3 font-medium text-slate-800">Reflective Sharing</td>
                <td className="p-3">Voluntary dyad or plenary debrief on shifts in cognitive pressure and bodily tension.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-[#0B2545]">0:40 – 0:45</td>
                <td className="p-3 font-medium text-slate-800">Integration &amp; Closing</td>
                <td className="p-3">Establishing a daily 5-minute contemplation habit before high-stress engagements.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cohort Adaptations */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          4. Cohort Facilitation Nuances
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
            <span className="font-bold text-xs text-[#0B2545] block">Cohort A: Ages 18–22</span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
              <li>Provide concrete everyday examples (exams, social rejection, FOMO).</li>
              <li>Offer 2–3 specific qualities (peace, calm, focus) rather than open-ended abstract choices.</li>
              <li>Keep silence intervals concise (2–3 minutes) to prevent restlessness.</li>
            </ul>
          </div>

          <div className="border border-slate-200 bg-white p-4 rounded space-y-2">
            <span className="font-bold text-xs text-[#0B2545] block">Cohort B: Ages 23–35</span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
              <li>Ground examples in corporate demands, relationship disputes, and parenting pressures.</li>
              <li>Allow free selection of qualities (resilience, patience, discernment).</li>
              <li>Extend silence duration to 4–5 minutes; do not force vocal sharing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Protocol Directives */}
      <section className="border border-slate-200 bg-slate-50 p-4 rounded space-y-2">
        <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545]">
          Facilitator Operational Directives
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-600">
          <div>
            <strong className="text-emerald-700 block mb-1">Recommended Practices (DO):</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li>Use a grounded, steady, unhurried voice.</li>
              <li>Keep instructions direct and experiential.</li>
              <li>Anchor reflection in tangible behavioral choices.</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700 block mb-1">Disallowed Practices (AVOID):</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li>Talking over the contemplation silence.</li>
              <li>Converting the session into motivational rhetoric.</li>
              <li>Interpreting or psychologizing a participant’s sharing.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
