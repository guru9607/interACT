"use client";

import Link from "next/link";
import { Sparkles, Heart, Moon, Laptop, ArrowRight, Clock } from "lucide-react";

export default function FacilitatorGuidePage() {
  const cards = [
    {
      href: "/facilitator-guide/three-hour-program",
      title: "3-hour combined program",
      description:
        "Full ACT facilitator script: Awareness → Contemplation → Silence → integration (timings, prompts, reminders).",
      icon: Clock,
      accent: "border-amber-200 bg-amber-50/60 hover:border-amber-300",
      iconClass: "text-amber-700",
    },
    {
      href: "/facilitator-guide/awareness",
      title: "Awareness (A)",
      description:
        "Full 45-minute facilitator manual: objectives, session flow, age adaptations, materials.",
      icon: Sparkles,
      accent: "border-teal-200 bg-teal-50/50 hover:border-teal-300",
      iconClass: "text-teal-600",
    },
    {
      href: "/facilitator-guide/contemplation",
      title: "Contemplation",
      description:
        "What are my qualities? Session structure, definitions, contemplation practice, Group A/B notes.",
      icon: Heart,
      accent: "border-rose-200 bg-rose-50/50 hover:border-rose-300",
      iconClass: "text-rose-600",
    },
    {
      href: "/facilitator-guide/transformative-silence",
      title: "Transformative Silence (T)",
      description:
        "Neutral, practical delivery notes aligned with the public module—session arc and facilitation tips.",
      icon: Moon,
      accent: "border-indigo-200 bg-indigo-50/50 hover:border-indigo-300",
      iconClass: "text-indigo-600",
    },
    {
      href: "/facilitator-guide/website-guide",
      title: "Website guide",
      description:
        "Where Portal, events dashboard, facilitator registration, and public pages fit together.",
      icon: Laptop,
      accent: "border-slate-200 bg-slate-50/80 hover:border-slate-300",
      iconClass: "text-slate-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/portal"
              className="text-sm text-teal-700 font-medium hover:underline"
            >
              ← Portal
            </Link>
            <h1 className="mt-2 text-3xl font-semibold text-text-main">Facilitator Guide</h1>
            <p className="mt-1 text-text-muted text-sm max-w-xl">
              Start with the <strong className="text-text-main font-semibold">3-hour combined script</strong>{" "}
              for a full ACT workshop, or open standalone 45-minute module manuals. Website guide explains internal tools.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <ol className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className={`flex h-full flex-col rounded-2xl border-2 p-6 transition-all shadow-sm hover:shadow-md ${card.accent}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Icon className={card.iconClass} size={22} aria-hidden />
                    </span>
                    <span className="text-xs font-semibold text-text-muted tabular-nums">
                      {index + 1}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-text-main mb-2">{card.title}</h2>
                  <p className="text-sm text-text-muted leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700">
                    Open
                    <ArrowRight size={16} className="ml-1" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
