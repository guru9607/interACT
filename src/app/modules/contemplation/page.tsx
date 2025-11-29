"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, Clock, Target } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Building Your Inner Foundation",
    duration: "20 min",
    overview: "Discover the power of intentional contemplation and how regular reflection strengthens your sense of self.",
    objectives: [
      "Understand the difference between thinking and contemplation",
      "Learn the benefits of daily reflection practice",
      "Create a personal contemplation space"
    ],
    activity: {
      name: "Sacred Space Setup Guide",
      type: "PDF Guide",
      description: "Design a physical and mental space dedicated to your contemplation practice."
    }
  },
  {
    number: 2,
    title: "Cultivating Inner Peace",
    duration: "25 min",
    overview: "Explore techniques to access and maintain inner peace, even amid external chaos.",
    objectives: [
      "Practice peace contemplation meditation",
      "Identify peace disruptors in daily life",
      "Develop peace anchor phrases"
    ],
    activity: {
      name: "Peace Meditation Series",
      type: "Audio + PDF",
      description: "Guided meditations on peace with accompanying reflection prompts."
    }
  },
  {
    number: 3,
    title: "Strengthening Core Virtues",
    duration: "30 min",
    overview: "Learn to contemplate and embody virtues like love, compassion, courage, and truth.",
    objectives: [
      "Identify your natural virtues and areas for growth",
      "Practice virtue contemplation",
      "Create personal affirmations"
    ],
    activity: {
      name: "Virtue Contemplation Workbook",
      type: "Interactive PDF",
      description: "Deep-dive exercises for 8 core virtues with daily contemplation practices."
    }
  },
  {
    number: 4,
    title: "Connecting with Purpose",
    duration: "35 min",
    overview: "Use contemplative practices to discover and clarify your life's purpose and meaning.",
    objectives: [
      "Explore 'big picture' questions through contemplation",
      "Define your personal mission statement",
      "Align daily actions with purpose"
    ],
    activity: {
      name: "Purpose Discovery Journey",
      type: "PDF Workbook",
      description: "A structured process to uncover and articulate your unique life purpose."
    }
  },
  {
    number: 5,
    title: "Daily Contemplation Rituals",
    duration: "Ongoing",
    overview: "Integrate contemplation into your daily routine with morning and evening rituals.",
    objectives: [
      "Establish morning and evening contemplation rituals",
      "Use contemplative prompts throughout the day",
      "Track insights and growth"
    ],
    activity: {
      name: "30-Day Contemplation Challenge",
      type: "PDF Journal",
      description: "A month-long guided challenge with daily themes and reflection questions."
    }
  }
];

export default function ContemplationModule() {
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
                Module 2
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
                Contemplation: Strengthening Your Inner Core
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Nurture your innate qualities of peace, love, and truth to build unshakeable self-worth.
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
                  <span>Develop a consistent contemplation practice to strengthen inner qualities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cultivate peace, love, compassion, and other core virtues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Discover and articulate your unique life purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Create daily rituals that reinforce your authentic self</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                Contemplation goes beyond awareness—it actively nurtures the qualities you want to embody. 
                Research in positive psychology shows that regular contemplation of virtues and values leads 
                to greater life satisfaction, resilience, and meaning. This module will help you internalize your best self.
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
