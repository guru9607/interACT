"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, Clock, Target } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Arriving in the Present Moment",
    duration: "15 min",
    overview: "This session gently guides participants to bring their attention into the present moment, away from past memories and future concerns. By settling awareness in the “now,” participants naturally experience stillness and the first glimpse of inner peace.",
    objectives: [
      "Experience the present moment as a state of inner awareness",
      "Recognize how attention often drifts into past and future",
      "Sense calm and stability that arise from being fully present"
    ],
    activity: {
      name: "Present-Moment Grounding Practice (5-4-3-2-1)",
      type: "Guided Practice + PDF Worksheet",
      description: "A simple grounding exercise that gently brings awareness into the present moment by engaging the senses, helping participants experience calm, stability, and inner presence."
    }

  },
  {
    number: 2,
    title: "Observing with Awareness",
    duration: "20 min",
    overview: "After arriving in the present moment, participants are guided to observe their thoughts and emotions as they arise—without trying to change, judge, or suppress them. This gentle observation allows clarity to emerge naturally and helps participants experience the difference between awareness and identification.",
    objectives: [
      "Observe thoughts and emotions without getting carried away by them",
      "Recognize the space between awareness and reaction",
      "Experience clarity as a natural outcome of observation"
    ],
    activity: {
      name: "Thought & Emotion Observation",
      type: "Guided Practice + Reflection PDF",
      description: "A guided awareness exercise to help participants observe thoughts and emotions without judgment, allowing clarity and inner stability to emerge naturally."
    }
  },
  {
    number: 3,
    title: "Clarity Through Recognizing Patterns",
    duration: "20 min",
    overview: "With clarity established through observation, participants are guided to notice recurring mental, emotional, and behavioral patterns. Instead of analyzing or labeling themselves, they learn to recognize these patterns as conditioned responses—seen clearly through awareness.",
    objectives: [
      "Identify recurring thought and emotional patterns",
      "Recognize personal triggers without self-judgment",
      "Understand how awareness reveals patterns naturally"
    ],
    activity: {
      name: "Pattern Awareness Tracker",
      type: "PDF Worksheet",
      description: "A simple tracking exercise to help participants recognize recurring thought and emotional patterns through clarity and observation, without judgment."
    }
  },
  {
    number: 4,
    title: "Redirecting Awareness to Innate Goodness",
    duration: "25 min",
    overview: "Once patterns are clearly recognized, participants are gently guided to shift their attention toward their innate qualities of peace, love, and truth. Instead of fixing or resisting patterns, awareness is redirected to inner goodness—allowing natural balance and emotional stability to emerge.",
    objectives: [
      "Understand redirection as a shift of awareness, not effort",
      "Experience inner peace beyond mental patterns",
      "Reconnect with innate qualities of love and truth"
    ],
    activity: {
      name: "Inner Quality Awareness Practice",
      type: "Guided Practice + Reflection PDF",
      description: "A guided awareness exercise that helps participants redirect attention from habitual patterns to their innate qualities of peace, love, and truth."
    }
  },
  {
    number: 5,
    title: "Bringing Awareness into Daily Life",
    duration: "Ongoing",
    overview: "This step helps participants gently carry the awareness they’ve experienced into everyday moments. Rather than practicing something new, they learn to pause, notice, and return to inner peace and clarity during regular activities like work, conversations, and decisions.",
    objectives: [
      "Apply awareness during normal daily situations",
      "Pause before reacting and respond with clarity",
      "Stay connected to inner peace amidst activity"
    ],
    activity: {
      name: "Everyday Awareness Practice",
      type: "7-Day Guided Practice + Reflection PDF",
      description: "A simple daily practice that helps participants pause during routine moments and reconnect with awareness and inner calm."
    }
  }
];

export default function AwarenessModule() {


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
                Module 1
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
                Awareness: Connecting with Innate Goodness
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Develop self-awareness to recognize your thoughts, emotions, and patterns without judgment.
              </p>
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Duration</span>
              </div>
              <div className="text-2xl font-bold text-text-main">~2 hours</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Target size={16} className="mr-2" />
                <span className="text-sm">Steps</span>
              </div>
              <div className="text-2xl font-bold text-text-main">5 Lessons</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
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
                  <span>Develop the ability to observe your thoughts and emotions without being controlled by them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Recognize automatic patterns and triggers that influence your behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>How to pause inner storm and respond with clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Align everyday actions with inner values rather than external pressure</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                When we reconnect with our innate goodness, life begins to flow from clarity rather than conflict. Awareness of inner peace, love, and truth creates emotional balance, strengthens decision-making, and allows relationships to grow from authenticity instead of reaction.
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
                      <button className="ml-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2 whitespace-nowrap">
                        <Download size={16} />
                        Download
                      </button>
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
            Continue your journey with Contemplation: Strengthening Your Inner Core
          </p>
          <Link
            href="/modules/contemplation"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-all shadow-xl"
          >
            Continue to Module 2
          </Link>
        </div>
      </section>
    </div>
  );
}
