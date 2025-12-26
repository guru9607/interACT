"use client";

import Link from "next/link";
import { ArrowLeft, Download, CheckCircle, Clock, Target } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Understanding Transformative Silence",
    duration: "15 min",
    overview: "Discover what makes silence 'transformative' versus just quiet, and learn the science behind stillness.",
    objectives: [
      "Distinguish between silence and stillness",
      "Understand the neuroscience of silence",
      "Identify barriers to experiencing deep silence"
    ],
    activity: {
      name: "Silence Exploration Journal",
      type: "PDF Workbook",
      description: "Guided prompts to explore your relationship with silence and noise."
    }
  },
  {
    number: 2,
    title: "Calming the Mental Chatter",
    duration: "25 min",
    overview: "Learn techniques to quiet the constant stream of thoughts and access deeper layers of consciousness.",
    objectives: [
      "Practice thought observation without engagement",
      "Use breath techniques to calm the mind",
      "Develop a 'mental pause' skill"
    ],
    activity: {
      name: "Mind-Quieting Toolkit",
      type: "Audio + PDF",
      description: "5 different techniques for calming mental chatter with guided audio practices."
    }
  },
  {
    number: 3,
    title: "Connecting with Inner Wisdom",
    duration: "30 min",
    overview: "Access your innate wisdom and intuition through deep silence and learn to trust your inner guidance.",
    objectives: [
      "Distinguish between mental chatter and inner wisdom",
      "Practice 'listening within' meditation",
      "Develop trust in intuitive insights"
    ],
    activity: {
      name: "Inner Wisdom Practice Series",
      type: "PDF + Audio",
      description: "Progressive meditations to deepen your connection with inner guidance."
    }
  },
  {
    number: 4,
    title: "Silence in Nature and Sacred Spaces",
    duration: "30 min",
    overview: "Explore how natural and sacred environments amplify the power of transformative silence.",
    objectives: [
      "Experience silence in nature mindfully",
      "Create or find your sacred silence space",
      "Understand the role of environment in deep practice"
    ],
    activity: {
      name: "Nature Silence Quest",
      type: "PDF Guide",
      description: "A structured outdoor silence practice with reflection prompts and guidelines."
    }
  },
  {
    number: 5,
    title: "Living from the Silence",
    duration: "Ongoing",
    overview: "Integrate moments of transformative silence into daily life and learn to act from a place of inner stillness.",
    objectives: [
      "Establish daily silence rituals",
      "Practice 'acting from stillness' in daily situations",
      "Maintain silence as an anchor throughout the day"
    ],
    activity: {
      name: "21-Day Silence Integration Challenge",
      type: "PDF Tracker",
      description: "Three weeks of progressive practices to make silence your foundation."
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
                Transformative Silence: Connecting with the Source
              </h1>
              <p className="text-xl text-text-muted max-w-3xl">
                Connect with your inner wisdom to access clarity and discern right from wrong.
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
                  <span>Experience deep transformative silence that goes beyond mere quietness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quiet mental chatter and access deeper layers of consciousness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connect with your inner wisdom and develop intuitive discernment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Integrate silence as a foundation for clarity in daily life</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-text-main mb-3">Why It Matters</h3>
              <p className="text-text-muted leading-relaxed">
                In our hyper-connected world, silence is revolutionary. Neuroscience shows that periods 
                of deep silence promote neurogenesis, reduce stress hormones, and enhance creativity. 
                More importantly, silence creates space for your authentic self to emerge and your inner 
                wisdom to speak. This module teaches you to access this power.
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
