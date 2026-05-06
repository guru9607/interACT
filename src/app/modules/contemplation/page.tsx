"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Heart, Sparkles, Target } from "lucide-react";

const whatYouLearn = [
  "Recognize that qualities like calmness, kindness, patience, and clarity are already part of you—not rewards you have to earn.",
  "Experience at least one inner quality directly through guided contemplation (felt experience, not just thinking about it).",
  "Understand how self-worth, self-esteem, self-confidence, and self-respect differ, and why that matters for emotional steadiness.",
  "See how sustained inner attention supports stability when life outside you keeps changing.",
  "Begin a simple personal practice you can repeat after the workshop to keep strengthening what you touched in the session.",
];

const keyPrinciples = [
  "Inner qualities are already there; contemplation helps you turn toward them.",
  "Direct experience of a quality tends to steady you more than advice or motivation alone.",
  "Returning again and again builds a stronger sense of self from the inside.",
  "Noticing inwardly can gradually loosen the grip of moods driven only by outer circumstances.",
];

const clarityCards = [
  {
    term: "Self-worth",
    text: "A deep sense that you matter as you are—not only because of achievements or how others treat you.",
  },
  {
    term: "Self-esteem",
    text: "How you feel about yourself in different areas (study, work, appearance, personality)—often shifting with situations.",
  },
  {
    term: "Self-confidence",
    text: "Trust that you can meet a challenge, usually built from skills and past experience.",
  },
  {
    term: "Self-respect",
    text: "How fully you honor your thoughts, feelings, and values—and live aligned with them.",
  },
];

const sessionShapes = [
  {
    title: "Orientation",
    text: "We connect why outer praise, marks, or validation alone often leave people feeling unstable—and why turning inward matters for this module.",
  },
  {
    title: "Inner qualities & language",
    text: "We introduce innate qualities in plain language and gently clarify self-worth, self-esteem, self-confidence, and self-respect so reflection later makes sense.",
  },
  {
    title: "Inside vs outside influences",
    text: "A short exercise to notice what affects your mood and whether those influences are mainly internal or external—without judging yourself.",
  },
  {
    title: "Guided contemplation",
    text: "You choose one quality (for example calmness, kindness, or patience), settle, and stay with the experience of it—more feeling than analyzing.",
  },
  {
    title: "Reflection",
    text: "Time to sense what shifted for you. Sharing is optional; some people integrate quietly—and that is welcome.",
  },
  {
    title: "Closing & take-home",
    text: "We consolidate insights and invite a light daily practice (around five minutes) to anchor what you experienced.",
  },
];

export default function ContemplationModule() {
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
                Module 2
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-2">
                Contemplation
              </h1>
              <p className="text-lg font-medium text-primary mb-3">
                What are my qualities? · Strengthening your inner core
              </p>
              <p className="text-xl text-text-muted max-w-3xl">
                Deepen contact with your innate qualities through contemplation, and
                shift emphasis from chasing validation outside toward stability and
                clarity inside—so how you feel about yourself is less at the mercy
                of constant outer noise.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Typical session</span>
              </div>
              <div className="text-2xl font-bold text-text-main">~45 minutes</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Who it&apos;s for</span>
              </div>
              <div className="text-lg font-bold text-text-main leading-snug">
                Ages 18–22 &amp; 23–35
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Heart size={16} className="mr-2" />
                <span className="text-sm">Format</span>
              </div>
              <div className="text-lg font-bold text-text-main leading-snug">
                Interactive workshop
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">What you&apos;ll learn</h2>
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
                Many people look for proof of value in scores, likes, or other
                people&apos;s moods. This module offers another angle: spending time
                with qualities that are already within you, so steadiness does not
                depend entirely on what happens outside.
              </p>
              <p className="text-text-muted leading-relaxed text-sm">
                Lasting change usually grows through small, repeated practice—not a
                single dramatic moment. The workshop opens the door; what you do
                afterward deepens it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-b bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-2">Core idea</h2>
          <p className="text-text-muted mb-8 max-w-3xl leading-relaxed">
            Everyone has inherent qualities such as calmness, kindness, patience, and
            clarity. They are not purchased with achievements; they become easier to
            feel when you turn attention inward and stay with direct experience.
          </p>
          <h3 className="font-semibold text-text-main mb-4">Principles we lean on</h3>
          <ul className="space-y-2 text-text-muted max-w-3xl">
            {keyPrinciples.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-2">
            Words we bring into focus
          </h2>
          <p className="text-text-muted mb-6 max-w-3xl">
            These distinctions help you notice what you are actually building inside
            versus what is mostly reacting to circumstances.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {clarityCards.map((card) => (
              <div
                key={card.term}
                className="rounded-xl border border-teal-100 bg-teal-50/40 p-5"
              >
                <h3 className="font-semibold text-text-main mb-2">{card.term}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{card.text}</p>
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
            Flow and pacing depend on your facilitator and group, but most workshops
            move through these kinds of movements:
          </p>
          <div className="space-y-4">
            {sessionShapes.map((block) => (
              <div
                key={block.title}
                className="flex gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-text-main mb-1">{block.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{block.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/80 p-6">
            <h3 className="font-semibold text-text-main mb-2">After the workshop</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              You may be encouraged to try about{" "}
              <span className="font-medium text-text-main">five minutes a day</span> in
              a quiet space: choose one inner quality and stay with the feeling of it,
              without picking it apart in your head. Small repetition supports what you
              touched in the room.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for the next module?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Continue with Transformative Silence: Accessing Inner Wisdom
          </p>
          <Link
            href="/modules/transformative-silence"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-all shadow-xl"
          >
            Continue to Module 3
          </Link>
        </div>
      </section>
    </div>
  );
}
