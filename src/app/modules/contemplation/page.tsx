"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, Target } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "The Power of Focused Reflection",
    duration: "20 min",
    overview: "Move from casual thinking to deep, intentional reflection. Learn how to direct your mind toward qualities like peace and love to begin strengthening your inner foundation.",
    objectives: [
      "Understand the difference between ordinary thinking and focused contemplation",
      "Learn to create a mental space for inner reflection",
      "Begin directing thoughts toward innate goodness"
    ],
    activity: {
      name: "The Contemplation Anchor",
      type: "PDF Guide",
      description: "Learn to stabilize your mind by focusing on a single core quality of your choice."
    }
  },
  {
    number: 2,
    title: "Nurturing Innate Self-Worth",
    duration: "25 min",
    overview: "Directly experience your innate qualities. Learn the distinction between stable internal self-worth and fluid external self-esteem, building a foundation that doesn't depend on praise or achievements.",
    objectives: [
      "Understand Self-Worth: A deep, stable sense of self-value based on internal security and character",
      "Understand Self-Esteem & Self-Confidence: Fluid feelings based on capabilities and external success",
      "Build Self-Respect: Learning to honor your own ideas, beliefs, decisions, and values",
      "Experience direct connection with the real self through sustained inner attention"
    ],
    activity: {
      name: "Innate Value Journal",
      type: "PDF Worksheet",
      description: "A reflection exercise to help you disconnect your self-worth from external outcomes."
    }
  },
  {
    number: 3,
    title: "Building Inner Strength & Resilience",
    duration: "30 min",
    overview: "Use contemplation to build a 'shock-absorber' within. By focusing on your internal stability, you become less affected by external chaos and setbacks.",
    objectives: [
      "Develop the capacity to remain stable during external changes",
      "Contemplate the quality of inner strength and inner power",
      "Learn to use your 'inner core' as a refuge during pressure"
    ],
    activity: {
      name: "Resilience Contemplation Guide",
      type: "Audio + PDF",
      description: "A guided contemplation focused on tapping into your stable inner core."
    }
  },
  {
    number: 4,
    title: "Shifting from External to Internal",
    duration: "35 min",
    overview: "Explore how seeking appreciation from others creates emotional dependency. Learn to validate yourself through connection with your core qualities.",
    objectives: [
      "Recognize patterns of seeking external approval",
      "Contemplate self-sufficiency and emotional independence",
      "Experience the freedom of internal validation"
    ],
    activity: {
      name: "The Validation Shift",
      type: "Self-Reflection PDF",
      description: "A checklist and reflection guide to help you move from 'needing' to 'sharing' your qualities."
    }
  },
  {
    number: 5,
    title: "Living with Unshakeable Resilience",
    duration: "Ongoing",
    overview: "Integrate contemplation into daily interactions. Learn to keep your 'inner core' strong while navigating the pressures and interactions of the world.",
    objectives: [
      "Practice staying centered during daily pressure",
      "Embody innate qualities in social interactions",
      "Maintain resilience as a consistent state of being"
    ],
    activity: {
      name: "7-Day Resilience Challenge",
      type: "PDF Journal + Tracker",
      description: "A week-long practice to apply contemplation insights in real-world situations."
    }
  }
];

export default function ContemplationModule() {


  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/modules" className="inline-flex items-center text-primary hover:text-primary-hover mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Modules
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                Module 2
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
                Contemplation: Strengthening Your Inner Core
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Nurture your core goodness through focused reflection to build unshakeable self-worth and internal resilience.
              </p>
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Duration</span>
              </div>
              <div className="text-2xl font-bold text-text-main">~2.5 hours</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Steps</span>
              </div>
              <div className="text-2xl font-bold text-text-main">5 Lessons</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-teal-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Format</span>
              </div>
              <div className="text-2xl font-bold text-text-main">Self-Paced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Module Overview */}
      <section className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-4">Module Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-text-main mb-3">What You'll Learn</h3>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Shift from external validation to deep, internal resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Directly experience innate qualities through sustained inner attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Understand the difference between fluid self-esteem and stable self-worth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Build self-respect by honoring your inner beliefs, values, and decisions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                Once we're aware of our core goodness, we can nurture it. This step involves focused reflection to build self-worth and inner strength. By contemplating these positive qualities within ourselves, we shift our focus from external validation to internal resilience, making us naturally less susceptible to the pressures of the outside world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-main mb-8">Module Steps</h2>
          
          <div className="space-y-6">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="bg-white border-2 rounded-2xl overflow-hidden border-gray-100 hover:border-teal-200 transition-all shadow-sm hover:shadow-md"
              >
                {/* Step Header */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text-main">{step.title}</h3>
                          <div className="flex items-center text-sm text-text-muted mt-1">
                            <Clock size={14} className="mr-1" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-6">
                  <p className="text-text-muted mb-6 leading-relaxed">{step.overview}</p>

                  {/* Learning Objectives */}
                  <div className="mb-6">
                    <h4 className="font-bold text-text-main mb-3">Learning Objectives</h4>
                    <ul className="space-y-2">
                      {step.objectives.map((obj, idx) => (
                        <li key={idx} className="flex items-start text-text-muted">
                          <Target size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activity */}
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-text-main mb-2">Activity: {step.activity.name}</h4>
                        <p className="text-sm text-text-muted mb-3">{step.activity.description}</p>
                        <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-primary">
                          {step.activity.type}
                        </span>
                      </div>
                      {/* <button className="ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2 whitespace-nowrap">
                        <Download size={16} />
                        Download
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-gradient-to-r from-primary to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for the Next Module?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Continue your journey with Transformative Silence: Connecting with the Source
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
