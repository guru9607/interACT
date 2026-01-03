"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Brain, Heart, Leaf, Target, BookOpen, ExternalLink, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100/50 backdrop-blur-sm text-teal-800 text-sm font-semibold mb-8 shadow-sm border border-teal-200/50">
            <Globe size={16} className="mr-2" />
            Aligned with the 2030 Agenda
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
            To face a changing world, <br className="hidden md:block" />
            you need an <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">unchanging core.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            interACT bridges the gap between inner resilience and global action. We provide youth with the evidence-based cognitive tools needed to achieve the Sustainable Development Goals.
          </p>
        </div>
      </section>

      {/* Section 1: Strategic Impact (The SDGs) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Strategic Impact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Targeting the Goals</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our curriculum is designed to support three specific Sustainable Development Goals, fostering the human capacity needed for sustainable action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SDG 3 - Green */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100/50 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#4C9F38] rounded-xl shadow-lg mb-6 flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden">
                <Heart className="relative z-10" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Good Health & Well-being</h4>
              <div className="mb-4">
                <p className="text-emerald-700 font-medium text-sm mb-2">"Awareness is the seed of Health and Well-being"</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Target 3.4:</strong> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being.
                </p>
              </div>
              <div className="text-xs text-emerald-800 font-medium bg-emerald-100/50 p-2 rounded-lg">
                Supported by WHO Data (2021)
              </div>
            </div>

            {/* SDG 16 - Light Blue */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100/50 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#00AED9] rounded-xl shadow-lg mb-6 flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden">
                 <ShieldCheck className="relative z-10" />
                 <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Peace, Justice & Strong Institutions</h4>
              <div className="mb-4">
                <p className="text-sky-700 font-medium text-sm mb-2">"Contemplation allows peace from within"</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Target 16.1:</strong> Significantly reduce all forms of violence and related death rates everywhere. We cultivate "Peace from Within" as the foundation for societal peace.
                </p>
              </div>
              <div className="text-xs text-sky-800 font-medium bg-sky-100/50 p-2 rounded-lg">
                Ref: Rethinking Learning for Peace (UNESCO MGIEP, 2020)
              </div>
            </div>

            {/* SDG 17 - Dark Blue */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50 border border-indigo-100/50 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 bg-[#19486A] rounded-xl shadow-lg mb-6 flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden">
                <Users className="relative z-10" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Partnerships for the Goals</h4>
              <div className="mb-4">
                <p className="text-indigo-700 font-medium text-sm mb-2">"Transformative silence is the key for partnerships"</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Target 17.17:</strong> Encourage and promote effective public, public-private and civil society partnerships. We unite across borders to prioritize youth mental health.
                </p>
              </div>
              <div className="text-xs text-indigo-800 font-medium bg-indigo-100/50 p-2 rounded-lg">
                Ref: Global Youth Engagement (UN Policy Brief)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Evidence (Why we need it) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-teal-600 tracking-wider uppercase mb-3">The Global Context</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why These Goals Matter Now</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The urgency to achieve these goals is underscored by the current global crisis in youth well-being.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">1 in 7 Adolescents</h4>
                    <p className="text-slate-600 text-sm">Experience a mental disorder globally (WHO, 2021). Without mental health (SDG 3), sustainable development is impossible.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">59% Eco-Anxiety</h4>
                    <p className="text-slate-600 text-sm">Of youth are "extremely worried" about climate change (Lancet, 2021). This paralysis hinders climate action; inner resilience is the key to unlocking it.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Methodology & Delivery</h3>
               <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                 interACT is delivered through a <strong>15-lesson cognitive curriculum</strong> (~7 hours). Participants utilize practical tools like <em>Thought Pattern Trackers</em> and <em>Somatic Awareness</em> to build self-regulation skills, directly contributing to SDG 3.4.
               </p>
               
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-teal-50 rounded-xl">
                     <div className="text-3xl font-bold text-teal-600 mb-1">31%</div>
                     <div className="text-xs text-teal-800 font-medium uppercase tracking-wide">Anxiety Reduction</div>
                     <div className="text-[10px] text-teal-600/70 mt-1">Based on MBSR Protocols (Khoury et al., 2015)</div>
                   </div>
                   <div className="p-4 bg-blue-50 rounded-xl">
                     <div className="text-3xl font-bold text-blue-600 mb-1">High</div>
                     <div className="text-xs text-blue-800 font-medium uppercase tracking-wide">Emotional Regulation</div>
                     <div className="text-[10px] text-blue-600/70 mt-1">Cognitive Training (Dunning et al., 2019)</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-700 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to lead from the inside out?
          </h2>
          <p className="text-lg text-teal-50 mb-10 max-w-2xl mx-auto">
            Join thousands of youth worldwide in discovering the power of the core goodness. The world is waiting for your authentic contribution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/modules" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-teal-700 font-bold hover:bg-teal-50 transition-all shadow-lg">
                Start the Curriculum
                <ArrowRight size={20} className="ml-2" />
             </Link>
             <Link href="/team" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-teal-200 text-white font-bold hover:bg-teal-600 transition-all">
                Meet the Team
             </Link>
          </div>
        </div>
      </section>

      {/* References Footer */}
      <section className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={16} className="text-teal-500" />
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest">References & Data Sources</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
            <a href="https://sdgs.un.org/goals/goal3" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
              <ExternalLink size={10} /> WHO (2021). Adolescent Mental Health Fact Sheet. (SDG 3)
            </a>
            <a href="https://mgiep.unesco.org/rethinking-learning" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
              <ExternalLink size={10} /> UNESCO MGIEP (2020). Rethinking Learning: SEL for Peace. (SDG 16)
            </a>
            <a href="https://www.unicef.org/media/108161/file/SOWC-2021-Policy-Brief-Child-Adolescent-Mental-Health.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
              <ExternalLink size={10} /> UNICEF (2021). Policy Brief: Child and Adolescent Mental Health. (SDG 17)
            </a>
            <a href="https://r.jordan.im/download/mindfulness/khoury2015.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
              <ExternalLink size={10} /> Khoury et al. (2015). Mindfulness-based stress reduction meta-analysis.
            </a>
            <a href="https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(21)00278-3/fulltext" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2">
              <ExternalLink size={10} /> The Lancet (2021). Climate anxiety in children and young people.
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
