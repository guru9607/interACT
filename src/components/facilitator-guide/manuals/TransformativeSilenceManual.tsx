import Link from "next/link";
import { CheckCircle2, ShieldCheck, VolumeX, Sparkles, AlertCircle } from "lucide-react";

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
              SDG Target 17.17 · Sustained Partnerships &amp; Deep Attunement
            </span>
          </div>
          <p className="text-xs text-slate-600">
            For the combined workshop delivery, refer to the{" "}
            <Link
              href="/facilitator-guide/three-hour-program"
              className="font-semibold text-[#0072CE] underline"
            >
              3-Hour Combined Program Master Script
            </Link>
            . Below provides the standalone delivery framework for <strong>~45 minutes</strong>.
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-slate-500 block">Duration: 45 min</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase">Focus: Autonomic Stillness</span>
        </div>
      </div>

      {/* Module Overview */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          1. Module Premise: Beyond Outer Quiet
        </h2>
        <p className="text-slate-600">
          Transformative Silence is not the mere mechanical absence of external acoustic sound. It is a trainable mental state wherein unnecessary cognitive friction and emotional turbulence subside, enabling the nervous system to settle into high clarity and objective discernment. In interACT pedagogy, this module translates the baseline awareness of Module A and the values of Module C into sustained, calm behavioral poise under pressure.
        </p>
      </section>

      {/* Core Aims */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          2. Measurable Participant Learning Aims
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-slate-600">
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
            <span>Experience silence as internal freedom from repetitive or depleting cognitive rumination.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
            <span>Utilize autonomic stillness to evaluate decisions based on proportion and values rather than impulse.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
            <span>Anchor attention so emotional stability does not fluctuate with external noise or conflict.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-3 rounded">
            <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
            <span>Translate brief micro-pauses of silence into tangible, repeatable communication behaviors.</span>
          </li>
        </ul>
      </section>

      {/* Suggested Session Arc */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#0B2545] border-b border-slate-200 pb-1">
          3. Standard 5-Phase Session Arc (45 Minutes)
        </h2>
        <div className="border border-slate-200 rounded divide-y divide-slate-100 overflow-hidden">
          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-28 shrink-0">Phase 1 · 8 min</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Freedom of Thought &amp; Noise Audit</strong>
              <p className="text-slate-600">
                Identify what depletes mental energy (notifications, rumination, gossip) versus what anchors attention. Frame silence as mental hygiene and cognitive sovereignty.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-28 shrink-0">Phase 2 · 8 min</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Inner Discernment Protocol</strong>
              <p className="text-slate-600">
                Demonstrate how stillness creates space to evaluate choices: distinguishing reactive impulse from constructive action aligned with personal core integrity.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-28 shrink-0">Phase 3 · 12 min</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Guided Immersion in Deep Stillness</strong>
              <p className="text-slate-600">
                Lead participants through an unhurried, grounded meditation into deep quiet. Hold 3–5 minutes of unbroken collective silence. Maintain a safe, supportive room atmosphere.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-white flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-28 shrink-0">Phase 4 · 10 min</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Reflective Processing &amp; Insight Synthesis</strong>
              <p className="text-slate-600">
                Brief, grounded plenary reflections. What did participants notice in the absence of stimulation? Emphasize that calm is an inherent reserve rather than an elusive state.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 flex items-start gap-3">
            <span className="font-mono font-bold text-xs text-[#0B2545] w-28 shrink-0">Phase 5 · 7 min</span>
            <div className="text-xs">
              <strong className="text-[#0B2545] block">Action Translation &amp; Field Commitments</strong>
              <p className="text-slate-600">
                Close by anchoring silence to one immediate real-life context: e.g. a difficult upcoming conversation, a study exam block, or a stressful commute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strict Facilitator Guidelines */}
      <section className="bg-slate-50 border border-slate-200 rounded p-4 space-y-2">
        <h3 className="font-bold text-xs uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
          <VolumeX size={15} className="text-[#19486A]" />
          Silence Protection Protocol
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
          <li>
            <strong>Protect the Silence:</strong> Never talk merely to alleviate your own discomfort with quiet. Respect the silence as the active teaching space.
          </li>
          <li>
            <strong>Neutral &amp; Universal Tone:</strong> Keep language strictly practical and non-dogmatic; honor participants of all philosophical or cultural backgrounds.
          </li>
          <li>
            <strong>Actionable Anchoring:</strong> Ensure every insight ties back to an everyday behavioral choice rather than abstract or mystical claims.
          </li>
          <li>
            <strong>Event System Tagging:</strong> In the Event Management dashboard, ensure the event record matches <em>Transformative Silence</em> so cohort feedback surveys match the curriculum delivered.
          </li>
        </ul>
      </section>
    </div>
  );
}
