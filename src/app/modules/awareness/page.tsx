"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, Clock, Target } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Understanding the Observer",
    duration: "15 min",
    overview: "Discover the concept of self-awareness and the 'observer mind' - the part of you that can watch your thoughts without being controlled by them.",
    objectives: [
      "Define self-awareness and its importance",
      "Understand the observer perspective",
      "Recognize the difference between reacting and responding"
    ],
    activity: {
      name: "Self-Reflection Journal",
      type: "PDF Worksheet",
      description: "A guided journaling exercise to help you begin observing your thoughts and emotions."
    }
  },
  {
    number: 2,
    title: "Recognizing Patterns",
    duration: "20 min",
    overview: "Learn to identify automatic thoughts, emotional triggers, and habitual reactions that shape your daily experience.",
    objectives: [
      "Identify common thought patterns",
      "Recognize emotional triggers",
      "Understand the thought-emotion-behavior cycle"
    ],
    activity: {
      name: "Thought Pattern Tracker",
      type: "PDF Worksheet",
      description: "Track your thoughts and emotions over 3 days to discover recurring patterns."
    }
  },
  {
    number: 3,
    title: "Body-Mind Connection",
    duration: "25 min",
    overview: "Explore how physical sensations relate to emotions and thoughts, developing somatic awareness.",
    objectives: [
      "Understand the mind-body connection",
      "Practice body scan meditation",
      "Recognize physical signs of stress and calm"
    ],
    activity: {
      name: "Body Scan Practice Guide",
      type: "PDF + Audio",
      description: "A guided body scan meditation with accompanying practice guide."
    }
  },
  {
    number: 4,
    title: "Values Clarification",
    duration: "30 min",
    overview: "Discover your core values and learn how living in alignment with them creates authenticity and purpose.",
    objectives: [
      "Identify your top 5 core values",
      "Understand the role of values in decision-making",
      "Assess current alignment with values"
    ],
    activity: {
      name: "Personal Values Card Sort",
      type: "Interactive PDF",
      description: "Sort through 50+ values to discover what truly matters to you."
    }
  },
  {
    number: 5,
    title: "Daily Awareness Practice",
    duration: "Ongoing",
    overview: "Integrate awareness practices into your daily routine with practical techniques and a 7-day challenge.",
    objectives: [
      "Establish a daily awareness practice",
      "Use mindful moments throughout the day",
      "Track progress and insights"
    ],
    activity: {
      name: "7-Day Awareness Challenge",
      type: "PDF Tracker",
      description: "A week-long challenge with daily prompts and reflection questions."
    }
  }
];

export default function AwarenessModule() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

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
                Awareness: Connecting with Your Authentic Self
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
                <CheckCircle size={16} className="mr-2" />
                <span className="text-sm">Progress</span>
              </div>
              <div className="text-2xl font-bold text-text-main">{completedSteps.length}/5</div>
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
                  <span>Connect with your body's wisdom through somatic awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Clarify your core values and live more authentically</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                Self-awareness is the foundation of personal growth and emotional intelligence. 
                Research shows that individuals with higher self-awareness experience less stress, 
                make better decisions, and have more fulfilling relationships. This module provides 
                practical tools to develop this essential skill.
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
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
                  completedSteps.includes(step.number) 
                    ? 'border-green-400' 
                    : 'border-gray-200 hover:border-primary'
                }`}
              >
                {/* Step Header */}
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
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
                    <button
                      onClick={() => toggleStep(step.number)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        completedSteps.includes(step.number)
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {completedSteps.includes(step.number) ? '✓ Completed' : 'Mark Complete'}
                    </button>
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
