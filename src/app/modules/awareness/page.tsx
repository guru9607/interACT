"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles, Target } from "lucide-react";

const whatYouLearn = [
  "Notice thoughts, emotions, and bodily sensations as they show up—without having to fix everything at once.",
  "Tell the difference between having a thought and letting that thought define who you are.",
  "Get more comfortable pausing before you react, so your response can be chosen—not automatic.",
  "See awareness as the first step toward acting with more intention in everyday life.",
];

const coreIdeas = [
  {
    title: "Observation, not judgment",
    text: "Awareness is about noticing what is happening inside you, not scoring yourself as good or bad.",
  },
  {
    title: "Experience keeps moving",
    text: "Thoughts, emotions, and sensations shift—they are not fixed facts about you.",
  },
  {
    title: "Space before you respond",
    text: "There can be a gap between what happens and what you do next. Awareness helps you find that space.",
  },
  {
    title: "Notice, then choose",
    text: "When you can see your inner state clearly, you have more freedom to choose your next step.",
  },
];

const experienceThemes = [
  {
    title: "Guided awareness",
    description:
      "A short, gentle practice: settle in, notice breath and body, and let thoughts come and go without chasing them.",
  },
  {
    title: "Sensory grounding",
    description:
      "A structured way to come back to the present—using what you see, feel, hear, and what you notice inwardly (similar to a 5-4-3-2-1 style exercise, adapted for the group).",
  },
  {
    title: "Reflection with others",
    description:
      "Time to share what you noticed—in pairs or small groups if you are comfortable. Sharing is always optional.",
  },
  {
    title: "A simple takeaway",
    description:
      "One practical idea to try after the session: take a brief pause during the day to notice thoughts and feelings.",
  },
];

export default function AwarenessModule() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-12">
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
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                Module 1 · Awareness (A)
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-text-main mb-4">
                Awareness
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Build the foundational skill of recognizing your inner
                world—thoughts, emotions, and sensations—with curiosity instead of
                immediate judgment. This session is experiential: we focus on
                observing and being present, not on fixing or analyzing problems.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Typical session</span>
              </div>
              <div className="text-2xl font-semibold text-text-main">~45 minutes</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Who it&apos;s for</span>
              </div>
              <div className="text-lg font-semibold text-text-main leading-snug">
                Ages 18–22 &amp; 23–35
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100/50">
              <div className="flex items-center text-text-muted mb-1">
                <Sparkles size={16} className="mr-2" />
                <span className="text-sm">Format</span>
              </div>
              <div className="text-lg font-semibold text-text-main leading-snug">
                Live, guided workshop
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-text-main mb-4">What you&apos;ll learn</h2>
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
              <h3 className="font-semibold text-text-main mb-3">Why it matters</h3>
              <p className="text-text-muted leading-relaxed mb-4">
                This module helps you create a baseline of self-awareness so later
                stages of interACT—reflection and action—can build on something
                real you have already felt, not just ideas you have read about.
              </p>
              <p className="text-text-muted leading-relaxed">
                You leave with a clearer sense of what awareness feels like in your
                own body and mind, and a simple way to practice noticing during a
                normal day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-text-main mb-2">Ideas you&apos;ll explore</h2>
          <p className="text-text-muted mb-8 max-w-3xl">
            These themes sit underneath the exercises—they are what the session is
            trying to make real for you, not abstract theory.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {coreIdeas.map((idea) => (
              <div
                key={idea.title}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm"
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
          <h2 className="text-2xl font-semibold text-text-main mb-2">
            What the session is like
          </h2>
          <p className="text-text-muted mb-8 max-w-3xl">
            Every event is hosted live; exactly how it feels depends on your group and
            facilitator. In general, you can expect:
          </p>
          <div className="space-y-4">
            {experienceThemes.map((block) => (
              <div
                key={block.title}
                className="flex gap-4 rounded-2xl border border-teal-100 bg-teal-50/30 p-6"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main mb-1">{block.title}</h3>
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
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready for the next module?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Continue with Contemplation: Strengthening Your Inner Core
          </p>
          <Link
            href="/modules/contemplation"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-cream transition-all shadow-xl"
          >
            Continue to Module 2
          </Link>
        </div>
      </section>
    </div>
  );
}
