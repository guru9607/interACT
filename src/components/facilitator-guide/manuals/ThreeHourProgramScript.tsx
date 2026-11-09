/**
 * interACT 3-Hour Program — Facilitator Delivery Script (Combined Workshop)
 * Compliant with UN DGC Web Design & SDG Alignment Guidelines
 */

import { Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

export function ThreeHourProgramScript() {
  return (
    <div className="space-y-10 text-slate-700 text-sm leading-relaxed font-sans">
      {/* Top Ledger Metadata */}
      <div className="bg-slate-50 border border-slate-200 rounded p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-[#0B2545] uppercase tracking-wider block">
            Delivery Schedule: 180 Minutes (Full Sequential Arc)
          </span>
          <span className="text-slate-500">
            Awareness (45m) → Contemplation (50m) → Transformative Silence (40m) → Integration (20m)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-600 font-semibold">
            Cohort: Inter-generational (18–35)
          </span>
        </div>
      </div>

      {/* Opening Section */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
            SEGMENT 0.0 · 0:00 – 0:10
          </span>
          <h2 className="text-base sm:text-lg font-serif font-bold text-[#0B2545]">
            Orientation &amp; Setting the Collective Field
          </h2>
        </div>

        <ScriptBlock
          time="0:00 – 0:05"
          title="Welcome & Tone Setting"
          lines={[
            "Say:",
            "“Welcome everyone. Today is not about learning something new… it’s about experiencing something that’s already within you.”",
            "Pause (3–5 seconds)",
            "“Before we begin, just notice how you’re arriving right now—your thoughts, your state… no need to change anything.”",
          ]}
        />

        <ScriptBlock
          time="0:05 – 0:10"
          title="Opening Diagnostic Inquiry"
          lines={[
            "Say:",
            "“Quick question—how many of you feel that your mind is constantly busy?”",
            "(Show of hands from participants)",
            "“Today, we’re going to explore something very simple… If my mind is busy… who is the one noticing that?”",
            "Pause",
          ]}
        />
      </section>

      {/* Module 1: Awareness */}
      <section className="space-y-4">
        <div className="border-b-2 border-[#4C9F38] pb-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#4C9F38]">
                ACT-101
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4C9F38]">
                SDG Target 3.4 · Mental Well-Being
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#0B2545] mt-1">
              Part I: Awareness (A) · 0:10 – 1:00 (50 min)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Internal Observation
          </span>
        </div>

        <ScriptBlock
          time="0:10 – 0:20"
          title="Diagnostic Activity: 'Who am I?'"
          lines={[
            "Say:",
            "“Take a moment and write down 5 answers to the question: Who am I?”",
            "(Wait 3–4 minutes for participants to write)",
            "Then say:",
            "“Now look at your answers… Are these who you are… or roles you play?”",
            "Pause",
          ]}
        />

        <ScriptBlock
          time="0:20 – 0:30"
          title="Cognitive Shift: The Observer Self"
          lines={[
            "Say slowly:",
            "“If I say… ‘my thoughts’… Then who is the ‘me’?”",
            "Pause (important)",
            "“If I can observe my thoughts… It means I am not my thoughts.”",
            "Let that sit. Don’t rush.",
          ]}
        />

        <ScriptBlock
          time="0:30 – 0:45"
          title="Guided Experiential Awareness"
          lines={[
            "Say (soft tone):",
            "“Just sit comfortably… Gently close your eyes if you’re comfortable…”",
            "“Notice your thoughts… Not trying to stop them… just observing…”",
            "(Pause 20 sec)",
            "“Now shift your attention… To the one who is observing…”",
            "(Pause)",
            "“There is a quiet presence… behind the thoughts…”",
            "(Pause 30 sec)",
          ]}
        />

        <ScriptBlock
          time="0:45 – 1:00"
          title="Introduction of Innate Qualities"
          lines={[
            "Say:",
            "“Within this awareness… there are natural qualities…”",
            "“Peace… Calm… A sense of being okay…”",
            "(Pause between each)",
            "“Not something you create… Something you reconnect with…”",
          ]}
        />
      </section>

      {/* Module 2: Contemplation */}
      <section className="space-y-4">
        <div className="border-b-2 border-[#00AED9] pb-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#00AED9]">
                ACT-102
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AED9]">
                SDG Target 16.1 · Non-Violence &amp; Self-Worth
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#0B2545] mt-1">
              Part II: Contemplation (C) · 1:00 – 1:50 (50 min)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Innate Values
          </span>
        </div>

        <ScriptBlock
          time="1:00 – 1:10"
          title="Pedagogical Transition"
          lines={[
            "Say:",
            "“Now that we’ve touched this space… The question is—how do we strengthen it?”",
          ]}
        />

        <ScriptBlock
          time="1:10 – 1:30"
          title="Experiential Focus on Peace"
          lines={[
            "Say:",
            "“Let’s take one quality—peace.”",
            "“Think of a moment when you felt peaceful…”",
            "(Pause 20 sec)",
            "“Now instead of thinking about it… Try to feel it again…”",
            "(Pause 1 min)",
            "“Stay with that feeling…”",
          ]}
        />

        <ScriptBlock
          time="1:30 – 1:40"
          title="Deepening Inquiry: Stimulus vs Response"
          lines={[
            "Ask:",
            "“What usually disturbs this peace?”",
            "(Pause, allow responses or silent reflection)",
            "“Is it the situation… Or how I respond to it?”",
          ]}
        />

        <ScriptBlock
          time="1:40 – 1:50"
          title="Silent Contemplation Practice"
          lines={[
            "Say:",
            "“Let’s spend a few moments in silence…”",
            "“Just being with this feeling…”",
            "(3–4 minutes silence — do NOT interrupt)",
            "Then gently:",
            "“Slowly bring your awareness back…”",
          ]}
        />
      </section>

      {/* Structured Intermission */}
      <div className="bg-slate-100 border border-slate-200 rounded p-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-slate-500" />
          <span className="font-semibold text-slate-700">1:50 – 2:00 · Intermission Break (10 Minutes)</span>
        </div>
        <span className="text-slate-500 italic">
          Keep the break concise to preserve room energy and stillness.
        </span>
      </div>

      {/* Module 3: Transformative Silence */}
      <section className="space-y-4">
        <div className="border-b-2 border-[#19486A] pb-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#19486A]">
                ACT-103
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#19486A]">
                SDG Target 17.17 · Deep Attunement &amp; Discernment
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#0B2545] mt-1">
              Part III: Transformative Silence (T) · 2:00 – 2:40 (40 min)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Autonomic Stillness
          </span>
        </div>

        <ScriptBlock
          time="2:00 – 2:10"
          title="Redefining Silence"
          lines={[
            "Say:",
            "“When we say silence… we don’t mean absence of sound…”",
            "“We mean a state where the mind becomes clear… And you feel internally strong.”",
          ]}
        />

        <ScriptBlock
          time="2:10 – 2:30"
          title="Guided Transformative Silence"
          lines={[
            "Say slowly:",
            "“Close your eyes…”",
            "“Notice your thoughts…”",
            "(Pause)",
            "“Now… gently let them settle…”",
            "(Pause)",
            "“Shift your attention inward…”",
            "(Pause)",
            "“There is a deeper source of calm… A space of clarity…”",
            "(Pause longer — 1–2 min total silence)",
            "“Stay there…”",
            "⚠️ Facilitator Protocol: This is the pivotal silence window—do not rush or talk over it.",
          ]}
        />

        <ScriptBlock
          time="2:30 – 2:40"
          title="Structured Reflection Sharing"
          lines={[
            "Ask softly:",
            "“What did you notice?”",
            "Invite 2–3 participants to share without editorializing their experience.",
          ]}
        />
      </section>

      {/* Integration */}
      <section className="space-y-4">
        <div className="border-b-2 border-[#0B2545] pb-2 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded text-white bg-[#0B2545]">
                ACT-INT
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B2545]">
                Sustained Behavioral Impact
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#0B2545] mt-1">
              Part IV: Integration &amp; Daily Commitment · 2:40 – 3:00 (20 min)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Action Translation
          </span>
        </div>

        <ScriptBlock
          time="2:40 – 2:50"
          title="Real-Life Behavioral Simulation"
          lines={[
            "Say:",
            "“Think of a situation where you usually feel stressed…”",
            "(Pause)",
            "“Now imagine responding from this state… What would be different?”",
          ]}
        />

        <ScriptBlock
          time="2:50 – 2:55"
          title="Daily 5-Minute Micro-Practice Protocol"
          lines={[
            "Say:",
            "“You don’t need hours to practice this.”",
            "“Just 5 minutes a day:",
            "• 1 min: pause and observe",
            "• 2 min: reconnect with an innate quality",
            "• 2 min: sit in restorative stillness”",
          ]}
        />

        <ScriptBlock
          time="2:55 – 3:00"
          title="Official Session Closing"
          lines={[
            "Say slowly:",
            "“Everything you experienced today… Was already within you.”",
            "“Our work is simply to return to it.”",
            "Pause.",
            "“Thank you for your presence and contribution.”",
          ]}
        />
      </section>

      {/* Facilitator Protocol Box */}
      <section className="bg-slate-50 border-l-4 border-[#0B2545] border-y border-r border-slate-200 rounded-r p-6 space-y-3">
        <h3 className="font-serif font-bold text-[#0B2545] text-sm uppercase tracking-wider flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#0072CE]" />
          Key Facilitation Principles (Keep in View During Delivery)
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
          <li>
            <strong>Pacing:</strong> Slow down more than you think is necessary. Young adults need cognitive processing space.
          </li>
          <li>
            <strong>Protecting Silence:</strong> Silence is neither awkward nor passive—it is the transformative agent of the workshop.
          </li>
          <li>
            <strong>Refrain from Over-Explaining:</strong> Allow experiential resonance rather than intellectual theorizing.
          </li>
          <li>
            <strong>Embodied State:</strong> The facilitator’s own calm, centred internal state carries greater impact than spoken vocabulary.
          </li>
        </ul>
      </section>
    </div>
  );
}

function ScriptBlock({
  time,
  title,
  lines,
}: {
  time: string;
  title: string;
  lines: string[];
}) {
  return (
    <div className="border border-slate-200 bg-white rounded p-4 sm:p-5 shadow-2xs">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3 border-b border-slate-100 pb-2">
        <span className="font-semibold text-xs sm:text-sm text-[#0B2545]">{title}</span>
        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">
          {time}
        </span>
      </div>
      <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed font-sans">
        {lines.map((line, idx) => {
          const isSay = line.startsWith("Say") || line.startsWith("Ask");
          const isWarning = line.startsWith("⚠️");
          const isParenthetical = line.startsWith("(") && line.endsWith(")");

          if (isSay) {
            return (
              <p key={idx} className="font-semibold text-[#0072CE] mt-2 text-[11px] uppercase tracking-wider">
                {line}
              </p>
            );
          }
          if (isWarning) {
            return (
              <div key={idx} className="bg-amber-50 border border-amber-200 text-amber-900 rounded p-2.5 text-xs font-medium my-2">
                {line}
              </div>
            );
          }
          if (isParenthetical) {
            return (
              <p key={idx} className="text-slate-400 italic text-[11px] pl-2 border-l border-slate-200">
                {line}
              </p>
            );
          }
          return <p key={idx} className="pl-2">{line}</p>;
        })}
      </div>
    </div>
  );
}
