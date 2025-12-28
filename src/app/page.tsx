"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-teal-50 via-cream to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-100 text-teal-800 text-sm font-medium mb-8 shadow-sm hover:border-teal-200 transition-colors cursor-default"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="mr-2 text-teal-600" />
              A Global Youth Initiative
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-text-main mb-8 tracking-tight leading-[1.1]">
              Rediscover your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                Core Goodness
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              In a world of noise, find your inner clarity. <span className="font-medium text-teal-700">interACT</span> helps you reconnect with your <span className="text-teal-700 font-semibold">innate goodness</span> through awareness and transformative silence.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/modules"
                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-600/20 hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-teal-200 text-lg font-medium rounded-full text-teal-700 bg-white hover:bg-teal-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                What is interACT?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge We Face */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
                Your Path to Inner Strength
              </h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>
                  In a fast-paced world, staying connected to your true self is a superpower. 
                  interACT empowers you to pause, reflect, and tap into your inner resources, 
                  helping you navigate life with confidence and clarity.
                </p>
                <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100">
                  <p className="text-teal-800 font-medium italic">
                    "interACT is designed to help you shine from within."
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative overflow-visible"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-teal-600/5 rounded-[2rem] transform rotate-2 scale-105"></div>
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                alt="Diverse group of young people connecting"
                width={600}
                height={600}
                className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unlock Your Potential - Benefits */}
      <section className="py-24 bg-teal-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock Your Potential
            </h2>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto opacity-90">
              Discover the power of inner stability in a changing world.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
             {/* Benefit 1 */}
             <motion.div 
               variants={fadeInUp}
               className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
             >
                <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innate Awareness</h3>
                <p className="text-teal-50 font-light leading-relaxed">
                  Rediscover your "Inner Me"—independent of roles and labels—and observe life with clarity.
                </p>
             </motion.div>
 
             {/* Benefit 2 */}
             <motion.div 
               variants={fadeInUp}
               className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
             >
                <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Internal Resilience</h3>
                <p className="text-teal-50 font-light leading-relaxed">
                  Build a strong inner core that remains stable regardless of external pressures or praise.
                </p>
             </motion.div>
 
             {/* Benefit 3 */}
             <motion.div 
               variants={fadeInUp}
               className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300"
             >
                <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Inner Wisdom</h3>
                <p className="text-teal-50 font-light leading-relaxed">
                  Access deep discernment through silence, connecting with the source of all powers.
                </p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ACT Framework Intro */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              The interACT Framework
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A practical pathway to inner resilience and ethical leadership.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Awareness */}
            <motion.div 
              variants={fadeInUp}
              className="group p-8 rounded-3xl bg-white border border-teal-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                A
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Awareness</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Rediscover your innate goodness by observing your thoughts and emotions without judgment.
              </p>
            </motion.div>

            {/* Contemplation */}
            <motion.div 
              variants={fadeInUp}
              className="group p-8 rounded-3xl bg-white border border-teal-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                C
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Contemplation</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Strengthen your inner core and build internal resilience to shift focus from external validation.
              </p>
            </motion.div>

            {/* Transformative Silence */}
            <motion.div 
              variants={fadeInUp}
              className="group p-8 rounded-3xl bg-white border border-teal-100 hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                T
              </div>
              <h3 className="text-2xl font-bold text-text-main mb-4">Transformative Silence</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Access inner wisdom and clarity by connecting with the source of all powers in deep stillness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SDG Section - Two Column Layout */}
      <section className="py-24 bg-white border-t border-teal-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8"
              {...fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-text-main leading-tight">
                interACT and the <br/>
                <span className="text-teal-600">UN Sustainable Development Goals</span>
              </h2>
              
              <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                <p>
                  <strong className="text-text-main">interACT aligns with the United Nations Sustainable Development Goals</strong>, 
                  focusing on inner and outer transformation. By promoting mental well-being, nurturing peace through 
                  self-awareness, and fostering global partnerships.
                </p>
                <div className="flex gap-3 pt-2">
                   {/* SDG Color Dots */}
                   <div className="w-3 h-3 rounded-full bg-[#4C9F38]"></div> {/* SDG 3: Good Health */}
                   <div className="w-3 h-3 rounded-full bg-[#00689D]"></div> {/* SDG 16: Peace */}
                   <div className="w-3 h-3 rounded-full bg-[#19486A]"></div> {/* SDG 17: Partnerships */}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-teal-50 text-teal-700 font-semibold rounded-full hover:bg-teal-100 transition-all border border-teal-200"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Right Column - SDG Image */}
            <motion.div 
              className="relative p-8 bg-teal-50 rounded-[3rem]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full">
                <Image
                  src="/image.png"
                  alt="interACT's alignment with UN SDGs"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
