"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Moon, Sparkles, Target } from "lucide-react";

const whatYouLearn = [
  "Experience silence as inner freedom—not only outer quiet, but space from draining or repetitive thoughts.",
  "Use stillness as a place to sense what feels proportionate and workable for you, and what does not, with more clarity.",
  "Practice settling attention so calm and clear-mindedness are less dependent on people, noise, or outcomes around you.",
  "Strengthen the habits you began in Awareness and Contemplation so calm, kindness, and honesty hold more easily under pressure.",
  "Bring what you notice in silence into everyday choices—small, repeatable steps rather than one-off intensity.",
];

const coreIdeas = [
  {
    title: "More than quiet",
    text: "Transformative silence is not only lowering the volume outside. It is a quality of mind where clutter can settle so something clearer can appear.",
  },
  {
    title: "Discernment grows in depth",
    text: "When mental chatter eases, it becomes easier to weigh options fairly—to separate impulse, habit, and what actually fits your values.",
  },
  {
    title: "Renewal and regulation",
    text: "Structured pauses help reset attention and reduce reactivity. That steadier baseline carries into conversations, study, and work.",
  },
  {
    title: "From insight to action",
    text: "Insights in silence gain power when you gently carry them into how you speak, choose, and respond after the session.",
  },
];

const experienceThemes = [
  {
    title: "Freedom of thought",
    description:
      "Gentle work with mental habits—recognizing what drains you versus what leaves you steady—and moving toward a clearer, more present inner atmosphere.",
  },
  {
    title: "Inner discernment",
    description:
      "Using silence as a space to reflect on choices or dilemmas: what feels true, proportionate, and kind—not only what is loud or urgent.",
  },
  {
    title: "Grounded attention",
    description:
      "Guided exercises to steady breath and attention, widen perspective, and reduce the pull of rumination—skills you can reuse outside the room.",
  },
  {
    title: "Deepening calm and clarity",
    description:
      "Making qualities you already practice—such as patience, honesty, or steadiness—easier to access when stress rises or feedback is harsh.",
  },
  {
    title: "Strength for real life",
    description:
      "Closing with how to translate stillness into sustainable shifts in behavior, relationships, and daily rhythm—one step at a time.",
  },
];

export default function TransformativeSilenceModule() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/modules"
            className="inline-flex items-center text-primary hover:text-primary-hover mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Modules
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm font-medium mb-4">
                Module 3 · Transformative Silence (T)
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
                Transformative Silence
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Move beyond surface quiet into a silence that frees attention from
                draining thoughts, sharpens judgment under pressure, and turns brief
                stillness into practical habits—so changes in how you respond can last.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/70 backdrop-blur-md border border-blue-100/60 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Typical session</span>
              </div>
              <div className="text-2xl font-bold text-text-main">~45 minutes</div>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-blue-100/60 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Who it&apos;s for</span>
              </div>
              <div className="text-lg font-bold text-text-main leading-snug">
                Ages 18–22 &amp; 23–35
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-md border border-blue-100/60 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Moon size={16} className="mr-2" />
                <span className="text-sm">Format</span>
              </div>
              <div className="text-lg font-bold text-text-main leading-snug">
                Live, guided workshop
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-muted max-w-2xl">
            Best experienced after Awareness and Contemplation—they prepare attention
            and inner contact so silence can go deeper.
          </p>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">
            What you&apos;ll learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-text-muted">
                {whatYouLearn.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-primary mr-2 mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why it matters</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                Awareness builds noticing; Contemplation builds contact with stable
                inner strengths. Transformative Silence adds longer pockets of stillness
                so discernment and regulation strengthen—change that shows up in how you
                speak, study, work, and relate day to day.
              </p>
              <p className="text-text-muted leading-relaxed text-sm">
                Lasting transformation usually blends insight with gentle repetition.
                This module points toward both.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-2">
            Ideas you&apos;ll explore
          </h2>
          <p className="text-text-muted mb-8 max-w-3xl">
            These threads match the third stage of the ACT journey: practical skill
            built through silence—not empty quiet.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {coreIdeas.map((idea) => (
              <div
                key={idea.title}
                className="bg-white rounded-xl border border-indigo-100/80 p-5 shadow-sm"
              >
                <h3 className="font-semibold text-text-main mb-2">{idea.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{idea.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-2">
            What the session is like
          </h2>
          <p className="text-text-muted mb-8 max-w-3xl">
            Facilitators adapt pacing and language to the group. In most workshops you
            will move through movements like these—aligned with the interACT blueprint
            for Module 3:
          </p>
          <div className="space-y-4">
            {experienceThemes.map((block) => (
              <div
                key={block.title}
                className="flex gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/25 p-6"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-text-main mb-1">{block.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continue your journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore events and resources on the site, and keep integrating what you
            have practiced across all three modules.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-all shadow-xl"
          >
            Return to modules overview
          </Link>
        </div>
      </section>
    </div>
  );
}
