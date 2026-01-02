"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, Clock, Target } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Beyond Quietness: Freedom of Thought",
    duration: "20 min",
    overview: "Define silence as inner freedom. Learn to identify and move beyond negative, waste, and ordinary thoughts to reach a state of pure, presence-filled clarity.",
    objectives: [
      "Identify 'waste thoughts' that drain inner energy",
      "Experience the difference between physical quiet and mental freedom",
      "Practice quietening the ordinary to access the extraordinary"
    ],
    activity: {
      name: "Waste Thought Audit",
      type: "Reflection PDF",
      description: "A tool to track mental chatter and consciously shift toward meaningful silence."
    }
  },
  {
    number: 2,
    title: "The Lab of Inner Discernment",
    duration: "25 min",
    overview: "Use deep experience to discern between Right and Wrong, True and False. Silence becomes the laboratory where clarity reveals the path forward.",
    objectives: [
      "Establish a criteria for inner truth based on original qualities",
      "Observe choices in the light of deep silence",
      "Recognize the 'False' influences that cloud judgment"
    ],
    activity: {
      name: "True vs. False Exploration",
      type: "Socratic Reflection PDF",
      description: "Bring a dilemma into silence and discern the direction that aligns with your innate goodness."
    }
  },
  {
    number: 3,
    title: "Connecting with the Unlimited Source",
    duration: "30 min",
    overview: "Concentrate on the Unlimited Source of all Powers and Support. Define this source of energy as the Universal anchor that empowers your inner being.",
    objectives: [
      "Understand the 'Source' as a constant reservoir of inner energy",
      "Practice focused concentration to connect with this energy",
      "Experience a sense of belonging and support beyond the self"
    ],
    activity: {
      name: "Source Connection Meditation",
      type: "Guided Audio Practice",
      description: "A step-by-step concentration exercise to connect with the source of empowerment."
    }
  },
  {
    number: 4,
    title: "Strengthening Original Qualities",
    duration: "30 min",
    overview: "Use the energy from the Source to strengthen and stabilize your original qualities of peace, love, and truth, making them unshakeable.",
    objectives: [
      "Internalize energy to feed your inner core",
      "Learn to stabilize qualities so they aren't lost in external noise",
      "Experience the sustainable change that comes from inner recharging"
    ],
    activity: {
      name: "Energy Stabilization Practice",
      type: "Visual PDF Guide",
      description: "Techniques to 'lock in' the qualities experienced during deep silence."
    }
  },
  {
    number: 5,
    title: "Withdrawing Strength for Change",
    duration: "Ongoing",
    overview: "Access the power to bring about real life changes. Withdraw strength from your silent connection to make choices that are sustainable and powerful.",
    objectives: [
      "Convert silent experience into active willpower",
      "Implement sustainable changes in behavior and lifestyle",
      "Bring the strength of silence into every real-world interaction"
    ],
    activity: {
      name: "Transformation Blueprint",
      type: "21-Day Implementation Tracker",
      description: "A practical tracker to ensure silent insights lead to tangible life shifts."
    }
  }
];

export default function TransformativeSilenceModule() {


  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/modules" className="inline-flex items-center text-primary hover:text-primary-hover mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Modules
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                Module 3
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
                Transformative Silence: Accessing Inner Wisdom
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Experience inner freedom from negative thoughts and connect with the Source of all powers to bring about sustainable life changes.
              </p>
            </div>
          </div>

          {/* Module Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/60 backdrop-blur-md border border-blue-100/50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-text-muted mb-1">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">Duration</span>
              </div>
              <div className="text-2xl font-bold text-text-main">~2 hours</div>
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
                  <span>Experience silence as freedom from negative, waste, and ordinary thoughts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Discern between Right and Wrong, True and False through deep experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connect with the Unlimited Source to withdraw strength for life changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Stabilize your original qualities through sustainable inner transformation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                Transformative Silence is far more than mere quietness—it is a state of inner freedom from negative, waste, and ordinary thoughts. In this space, you can discern between Truth and Falsehood and concentrate on the Unlimited Source of all Powers and Support. This connection allows you to withdraw the strength needed to bring about sustainable, life-changing transformation.
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
            Embrace the Silence
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Thank you for exploring the interACT journey. Continue practicing and integrating these tools into your daily life.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-cream transition-all shadow-xl"
          >
            Return to Modules Overview
          </Link>
        </div>
      </section>
    </div>
  );
}
