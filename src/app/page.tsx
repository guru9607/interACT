import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-teal-50 to-cream">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200/50 text-teal-800 text-sm font-medium mb-6 shadow-sm">
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

      {/* What is interACT? - Logo Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Animated glow effect */}
                {/* <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-teal-500/20 to-blue-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div> */}
                {/* <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-xl opacity-40"></div> */}
                <Image
                  src="/logo.png"
                  alt="interACT Logo - Rediscover Your Core Goodness"
                  width={450}
                  height={450}
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">interACT</span>?
              </h2>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
                <strong className="text-text-main">interACT</strong> is a transformative awareness and 
                self-development journey that merges spiritual insight with practical tools for 
                personal growth, tailored especially for <strong className="text-primary">youth, emerging leaders and global citizens</strong>.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Explore Modules
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-teal-50 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge We Face */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Your Path to Inner Strength
              </h2>
              <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                <p>
                  In a fast-paced world, staying connected to your true self is a superpower. 
                  interACT empowers you to pause, reflect, and tap into your inner resources, 
                  helping you navigate life with confidence and clarity.
                </p>
                <p className="text-primary font-semibold">
                  interACT is designed to help you shine from within.
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

      {/* Unlock Your Potential - Benefits */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock Your Potential
            </h2>
            <p className="text-lg text-teal-50 max-w-2xl mx-auto">
              Discover the power of inner stability in a changing world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {/* Benefit 1 */}
             <div className="text-center p-6 rounded-2xl hover:bg-teal-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Inner Clarity</h3>
                <p className="text-teal-50">
                  Gain a clear perspective on your life and goals by quieting the noise around you.
                </p>
             </div>
             {/* Benefit 2 */}
             <div className="text-center p-6 rounded-2xl hover:bg-teal-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Resilience</h3>
                <p className="text-teal-50">
                  Build the emotional strength to navigate challenges with grace and confidence.
                </p>
             </div>
             {/* Benefit 3 */}
             <div className="text-center p-6 rounded-2xl hover:bg-teal-600 transition-colors duration-300">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ethical Leadership</h3>
                <p className="text-teal-50">
                  Lead with integrity and compassion, inspiring others through your example.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Youth Mental Health Crisis - WHO Statistics */}
      {/* <section className="py-20 bg-gradient-to-b from-cream to-white">
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

          //{ Statistics Grid }
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
      </section> */}

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
            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 hover:shadow-xl transition-all hover:bg-white/50">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl mb-6">
                A
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Awareness</h3>
              <p className="text-text-muted mb-6">
                Recognize yourself as a spiritual being—the "Inner Me"—distinct from your physical role.
              </p>
            </div>

            {/* Contemplation */}
            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 hover:shadow-xl transition-all hover:bg-white/50">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold text-xl mb-6">
                C
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Contemplation</h3>
              <p className="text-text-muted mb-6">
                Nurture your innate qualities of peace, love, and truth to build unshakeable self-worth.
              </p>
            </div>

            {/* Transformative Silence */}
            <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 hover:shadow-xl transition-all hover:bg-white/50">
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
      <section className="py-20 bg-gradient-to-b from-white to-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-text-main leading-tight">
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
