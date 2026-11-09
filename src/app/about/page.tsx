"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Check,
  X,
  ExternalLink,
  FileText,
  Globe,
  Heart,
  Layers,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & EXECUTIVE SUMMARY
          Authentic UN Position Paper / Policy Dossier Format
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Tri-color SDG Top Ribbon */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-18">
          
          {/* Classification Tag */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-4">
            <Globe size={14} className="shrink-0" />
            <span>UN 2030 Agenda Strategic Impact Dossier · Civil Society Alignment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-6">
            Linking Contemplative Capacities to the Sustainable Development Goals
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-4xl mb-8">
            interACT was established as an open-access civil society initiative to address the global crisis in youth mental health and societal fragmentation. Rather than treating contemplative skills as a private luxury, the curriculum establishes personal awareness as an indispensable empirical precursor to the United Nations 2030 Agenda—specifically <strong className="font-semibold text-slate-900">Good Health &amp; Well-being (SDG 3)</strong>, <strong className="font-semibold text-slate-900">Peace &amp; Strong Institutions (SDG 16)</strong>, and <strong className="font-semibold text-slate-900">Partnerships for the Goals (SDG 17)</strong>.
          </p>

          {/* Quick Institutional Index */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Document Ref:</span>
              <span className="font-mono font-semibold text-slate-800">DOC-IA-03-SDG</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Target Goals:</span>
              <span className="font-semibold text-slate-800">SDG 3 · SDG 16 · SDG 17</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Evidence Standards:</span>
              <span className="font-semibold text-slate-800">WHO 2021 &amp; UNESCO</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">License / Status:</span>
              <span className="font-semibold text-[#0072CE]">Open Educational Resource</span>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. STRATEGIC MAPPING: TARGETING THE GOALS
          Structured SDG Matrix with Official Color Identification
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-[#0072CE] uppercase tracking-wider mb-2">
              Strategic Alignment
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] tracking-tight mb-4">
              Direct Contribution to UN SDG Targets
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The curriculum is engineered so that every contemplative exercise corresponds to a measurable human capacity required to achieve the 2030 targets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* SDG 3 — Green */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="h-1.5 w-full bg-[#4C9F38]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#4C9F38] rounded-md text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    <Heart size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#4C9F38] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Goal 3 · Target 3.4
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Good Health &amp; Well-being
                </h3>

                <p className="text-xs font-serif italic text-emerald-800 bg-emerald-50/60 p-3 rounded border-l-2 border-[#4C9F38] mb-4 leading-relaxed">
                  &ldquo;Awareness of core goodness is a seed that produces a healthy mindset which actively helps to achieve good health and holistic wellbeing.&rdquo;
                </p>

                <div className="space-y-3 text-xs text-slate-600 flex-1">
                  <div>
                    <strong className="text-slate-800 block mb-0.5">UN Target 3.4:</strong>
                    By 2030, reduce by one-third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being.
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-0.5">interACT Mechanism:</strong>
                    Somatic self-regulation, down-regulating sympathetic stress, and identifying non-reactive thought patterns.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500">WHO (2021) Supported</span>
                  <Link href="/modules/awareness" className="font-bold text-[#4C9F38] hover:underline">
                    Module A →
                  </Link>
                </div>
              </div>
            </div>

            {/* SDG 16 — Light Blue */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="h-1.5 w-full bg-[#00AED9]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#00AED9] rounded-md text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#00689D] uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded border border-sky-200">
                    Goal 16 · Target 16.1
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Peace, Justice &amp; Stability
                </h3>

                <p className="text-xs font-serif italic text-sky-900 bg-sky-50/60 p-3 rounded border-l-2 border-[#00AED9] mb-4 leading-relaxed">
                  &ldquo;Contemplation allows the deep experience of innate qualities which changes negative cycles of thought into righteous, compassionate decisions.&rdquo;
                </p>

                <div className="space-y-3 text-xs text-slate-600 flex-1">
                  <div>
                    <strong className="text-slate-800 block mb-0.5">UN Target 16.1:</strong>
                    Significantly reduce all forms of violence and related death rates everywhere. Fostering &ldquo;Peace from Within&rdquo; as the prerequisite for societal peace.
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-0.5">interACT Mechanism:</strong>
                    Cognitive reframing, values-based discernment, and disengaging from aggressive, polarizing social stimuli.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500">UNESCO MGIEP Ref</span>
                  <Link href="/modules/contemplation" className="font-bold text-[#00689D] hover:underline">
                    Module C →
                  </Link>
                </div>
              </div>
            </div>

            {/* SDG 17 — Navy */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
              <div className="h-1.5 w-full bg-[#19486A]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#19486A] rounded-md text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    <Users size={22} />
                  </div>
                  <span className="text-[11px] font-bold text-[#19486A] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded border border-slate-300">
                    Goal 17 · Target 17.17
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0B2545] mb-2">
                  Partnerships for the Goals
                </h3>

                <p className="text-xs font-serif italic text-slate-800 bg-slate-100 p-3 rounded border-l-2 border-[#19486A] mb-4 leading-relaxed">
                  &ldquo;Transformative Silence allows acceptance, appreciation, and attention in listening, which is the key for genuine cross-cultural collaboration.&rdquo;
                </p>

                <div className="space-y-3 text-xs text-slate-600 flex-1">
                  <div>
                    <strong className="text-slate-800 block mb-0.5">UN Target 17.17:</strong>
                    Encourage and promote effective public, public-private, and civil society partnerships, building on the experience of collaborative alliances.
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-0.5">interACT Mechanism:</strong>
                    Receptive stillness, non-violent communication protocols, and multi-stakeholder peer circles.
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-500">UN Policy Brief Ref</span>
                  <Link href="/modules/transformative-silence" className="font-bold text-[#19486A] hover:underline">
                    Module T →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. THE SCIENTIFIC & CLINICAL EVIDENCE
          Documented Research Baseline with Epidemiological Citations
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                Epidemiological Urgency
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] leading-tight">
                Why Human Capacity Building Is Non-Negotiable
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The urgency to achieve the 2030 Agenda is underscored by a profound global crisis in adolescent wellbeing. When youth are overwhelmed by anxiety, the cognitive capacity for long-term sustainable action is paralyzed.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="p-4 bg-white border border-slate-200 rounded flex items-start gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Brain size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">1 in 7 Adolescents Globally (14%)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Experience a diagnosed mental disorder (WHO, 2021). Depression, anxiety, and behavioral disorders are leading causes of illness and disability among young people.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded flex items-start gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">59% Suffer Extreme Eco-Anxiety</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Across 10 nations surveyed by <em>The Lancet Planetary Health</em> (2021), youth reported intense feelings of powerlessness and existential despair regarding climate polycrises.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                    Pedagogical Efficacy
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Empirical Foundations of the ACT Methodology
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  interACT delivers a structured <strong>15-lesson cognitive curriculum (~7 total hours)</strong>. By deploying validated reflection instruments—such as <em>Thought Pattern Trackers</em> and <em>Somatic Presence Protocols</em>—participants acquire measurable self-regulation competencies.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                    <div className="text-3xl font-serif font-bold text-[#4C9F38] mb-1">
                      31%
                    </div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Anxiety Reduction
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                      Validated in meta-analyses of standardized MBSR protocols (Khoury et al., 2015).
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                    <div className="text-3xl font-serif font-bold text-[#00AED9] mb-1">
                      High
                    </div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Emotional Regulation
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                      Systematic review of cognitive &amp; mindfulness training in youth (Dunning et al., 2019).
                    </div>
                  </div>

                </div>

                <div className="bg-blue-50/70 border border-blue-200 rounded p-3.5 text-xs text-slate-700">
                  <strong className="text-[#0B2545] font-semibold block mb-0.5">Non-Clinical &amp; Non-Sectarian Safeguards:</strong>
                  The curriculum does not provide psychotherapy or medical diagnosis. It is an educational life-skills framework focused on innate cognitive capacities and emotional stability.
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3.5 METHODOLOGICAL SCOPE: WHAT INTERACT IS / IS NOT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Methodological Integrity · Official Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
              What interACT Is / What interACT Is Not
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Transparent, non-sectarian educational boundaries governing all interACT youth sessions.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
              <div className="p-3.5 bg-emerald-50/80 text-emerald-900 border-b md:border-b-0 md:border-r border-slate-200 flex items-center gap-2">
                <Check size={16} className="text-emerald-700" />
                <span>interACT IS</span>
              </div>
              <div className="p-3.5 bg-rose-50/80 text-rose-900 flex items-center gap-2">
                <X size={16} className="text-rose-700" />
                <span>interACT IS NOT</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {[
                { is: "Reflective experiential learning", isNot: "Motivational preaching" },
                { is: "Acknowledging the present moment", isNot: "Distraction from life’s goals or plans" },
                { is: "Strengthening your inner core", isNot: "Therapy or counselling" },
                { is: "Developing self-worth, self-confidence, self-esteem, & self-respect", isNot: "Spiritual conversion" },
                { is: "Rejuvenating exercise with moments of guided silence", isNot: "Trauma processing or emotional treatment" },
                { is: "Pause-building & intentional response training", isNot: "Religious talk" },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-4 flex items-start gap-2.5 text-slate-700 md:border-r border-slate-100 bg-white">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{row.is}</span>
                  </div>
                  <div className="p-4 flex items-start gap-2.5 text-slate-500 bg-slate-50/50">
                    <span className="text-rose-600 font-bold shrink-0 mt-0.5">✗</span>
                    <span>{row.isNot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. INSTITUTIONAL CALL TO COOPERATION
          Clean UN Navy Ground without Floating Blurs
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-block px-3 py-1 bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider rounded border border-white/20">
            Open Educational Partnership
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
            Partner with interACT to Foster Resilient Youth Leadership
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            All curriculum syllabi, participant reflection toolkits, and impact evaluation rubrics are accessible for universities, secondary schools, and civil society youth organizations worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/modules"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors shadow-sm"
            >
              Explore the 15 Modules
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link
              href="/join"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold bg-white text-[#0B2545] hover:bg-slate-100 transition-colors shadow-sm"
            >
              Host a Campus Workshop
            </Link>

            <Link
              href="/team"
              className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold bg-transparent text-slate-200 border border-slate-500 hover:bg-white/10 transition-colors"
            >
              Institutional Leadership
            </Link>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          5. SCHOLARLY CITATIONS & DATA SOURCES
          Formal UN Digital Library Reference Format
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6 text-slate-800 font-semibold uppercase tracking-wider text-xs">
            <BookOpen size={16} className="text-[#0072CE]" />
            <span>Formal Scientific &amp; Institutional References</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-[11px] leading-relaxed">
            <div>
              <a
                href="https://sdgs.un.org/goals/goal3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                World Health Organization (2021). Adolescent Mental Health Fact Sheet. Geneva: WHO.
              </a>
              <p className="text-slate-500 pl-4 mt-0.5">Foundational data for UN SDG Target 3.4 mental health promotion.</p>
            </div>

            <div>
              <a
                href="https://mgiep.unesco.org/rethinking-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                UNESCO MGIEP (2020). Rethinking Learning: A Review of Social and Emotional Learning for Education Systems.
              </a>
              <p className="text-slate-500 pl-4 mt-0.5">Evidence mapping for peaceful societies and UN SDG Target 16.1.</p>
            </div>

            <div>
              <a
                href="https://www.unicef.org/media/108161/file/SOWC-2021-Policy-Brief-Child-Adolescent-Mental-Health.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                UNICEF (2021). The State of the World&apos;s Children 2021: On My Mind.
              </a>
              <p className="text-slate-500 pl-4 mt-0.5">Youth mental health investments and civil society partnerships (SDG 17).</p>
            </div>

            <div>
              <a
                href="https://r.jordan.im/download/mindfulness/khoury2015.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                Khoury, B. et al. (2015). Mindfulness-based stress reduction for healthy individuals: A meta-analysis.
              </a>
              <p className="text-slate-500 pl-4 mt-0.5"><em>Journal of Psychosomatic Research</em>, 78(6), 519-528.</p>
            </div>

            <div>
              <a
                href="https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(21)00278-3/fulltext"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                Hickman, C. et al. (2021). Climate anxiety in children and young people.
              </a>
              <p className="text-slate-500 pl-4 mt-0.5"><em>The Lancet Planetary Health</em>, 5(12), e863-e873.</p>
            </div>

            <div>
              <a
                href="https://www.un.org/en/about-us/universal-declaration-of-human-rights"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0072CE] transition-colors inline-flex items-center gap-1 font-medium text-slate-700"
              >
                <ExternalLink size={11} className="shrink-0" />
                United Nations Department of Global Communications (DGC).
              </a>
              <p className="text-slate-500 pl-4 mt-0.5">Guidelines for civil society organizations supporting the 2030 Agenda.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
