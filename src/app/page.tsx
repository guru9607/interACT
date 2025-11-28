import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-teal-50 to-cream">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
              <Sparkles size={16} className="mr-2" />
              A Global Youth Initiative
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-6 tracking-tight leading-tight">
              Rediscover your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">
                Core Goodness
              </span>
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed">
              In a world of noise, find your inner clarity. interACT is a global platform 
              helping youth reconnect with their authentic selves through Awareness, 
              Contemplation, and Transformative Silence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/modules"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-teal-200 text-lg font-medium rounded-full text-primary bg-white hover:bg-teal-50 transition-all shadow-sm hover:shadow-md"
              >
                What is interACT?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* The Challenge We Face */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                The Challenge We Face
              </h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  In a world filled with constant distractions and external pressures, it's easy for 
                  young people to lose touch with their inner selves. This can lead to a sense of 
                  disconnect and self-doubt.
                </p>
                <p className="text-primary font-semibold">
                  interACT is designed to help you cut through the noise.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                alt="Diverse group of young people connecting"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Mental Health Crisis - WHO Statistics */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              The Global Youth Mental Health Crisis
            </h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
              Young people worldwide are facing unprecedented mental health challenges. 
              Evidence-based interventions like those in the ACT framework show measurable impact.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-400">
              <div className="text-5xl font-bold text-red-500 mb-3">1 in 7</div>
              <h3 className="text-lg font-bold text-text-main mb-2">Adolescents Affected</h3>
              <p className="text-text-muted text-sm mb-3">
                Globally, 1 in 7 adolescents (10-19 years) experience mental health conditions.
              </p>
              <p className="text-xs text-text-muted italic">Source: WHO, 2021</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-400">
              <div className="text-5xl font-bold text-orange-500 mb-3">50%</div>
              <h3 className="text-lg font-bold text-text-main mb-2">Early Onset</h3>
              <p className="text-text-muted text-sm mb-3">
                Half of all mental health conditions start by age 14, but most cases go undetected.
              </p>
              <p className="text-xs text-text-muted italic">Source: WHO, 2021</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400">
              <div className="text-5xl font-bold text-yellow-600 mb-3">45,000</div>
              <h3 className="text-lg font-bold text-text-main mb-2">Youth Suicides Annually</h3>
              <p className="text-text-muted text-sm mb-3">
                Suicide is the 4th leading cause of death among 15-29 year-olds globally.
              </p>
              <p className="text-xs text-text-muted italic">Source: WHO, 2021</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT Framework Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              The ACT Framework
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A practical pathway to inner resilience and ethical leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Awareness */}
            <div className="p-8 rounded-2xl bg-teal-50 border border-teal-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl mb-6">
                A
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Awareness</h3>
              <p className="text-text-muted mb-6">
                Recognize yourself as a spiritual being—the "Inner Me"—distinct from your physical role.
              </p>
            </div>

            {/* Contemplation */}
            <div className="p-8 rounded-2xl bg-cream border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold text-xl mb-6">
                C
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Contemplation</h3>
              <p className="text-text-muted mb-6">
                Nurture your innate qualities of peace, love, and truth to build unshakeable self-worth.
              </p>
            </div>

            {/* Transformative Silence */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6">
                T
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Transformative Silence</h3>
              <p className="text-text-muted mb-6">
                Connect with the Source to access inner wisdom and discern right from wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section - Two Column Layout */}
      <section className="py-24 bg-gradient-to-b from-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-tight">
                interACT and the UN Sustainable Development Goals
              </h2>
              
              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                  <strong className="text-text-main">interACT aligns with the United Nations Sustainable Development Goals</strong>, 
                  focusing on inner and outer transformation. By promoting mental well-being, nurturing peace through 
                  self-awareness, and fostering global partnerships, interACT empowers youth to turn reflection into 
                  meaningful action.
                </p>
                <p>
                  Together, we build a world where personal growth and sustainable change go hand in hand.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Right Column - SDG Image */}
            <div className="relative">
              <div className="relative w-full">
                <Image
                  src="/image.png"
                  alt="interACT's alignment with UN SDGs: Health & Well-being, Peace, and Partnerships"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
