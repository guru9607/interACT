"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  ShieldCheck,
  Users,
  Compass,
  Calendar,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL CLASSIFICATION & LEAD DISPATCH (HERO)
          Authentic UN / International Agency Editorial Split Layout
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Subtle Top Tri-color SDG Hairline */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
          
          {/* Metadata / Classification Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-8 text-xs font-semibold tracking-wider uppercase text-slate-500">
            <div className="flex items-center gap-2 text-[#0072CE]">
              <Globe size={14} className="shrink-0" />
              <span>International Civil Society Initiative · UN 2030 Agenda</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <span>Framework: SDGs 3 · 16 · 17</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="hidden sm:inline">Open Educational Resource (OER)</span>
            </div>
          </div>

          {/* Lead Editorial Split */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left 7 Cols: Policy Mandate & Core Action */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block px-2.5 py-1 bg-blue-50 border border-blue-200 text-[#0058A3] text-[11px] font-bold uppercase tracking-wider rounded">
                Official Curriculum Framework
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[2.85rem] font-serif font-bold text-[#0B2545] tracking-tight leading-[1.18]">
                Equipping Youth with Cognitive Resilience, Inner Peace &amp; Global Solidarity
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                interACT is an international civil society education initiative designed to address the escalating adolescent mental health crisis. By linking contemplative skill-building directly with the <strong className="font-semibold text-slate-900">United Nations Sustainable Development Goals</strong>, the curriculum establishes self-awareness and internal stability as the empirical foundation for peaceful action.
              </p>

              {/* Verified Institutional Attributes */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#4C9F38] shrink-0" />
                  <span>15-Lesson Sequenced Cognitive Curriculum (~7 hrs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#00AED9] shrink-0" />
                  <span>Non-Sectarian, Validated Somatic Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#19486A] shrink-0" />
                  <span>Cites WHO 2021 &amp; UNESCO MGIEP Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0072CE] shrink-0" />
                  <span>Free &amp; Open Educational Resources for Youth</span>
                </div>
              </div>

              {/* Institutional Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#0058A3] text-sm font-semibold rounded text-white bg-[#0072CE] hover:bg-[#0058A3] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0072CE] focus-visible:ring-offset-2"
                >
                  Access Curriculum Modules
                  <ArrowRight className="ml-2" size={16} />
                </Link>

                <Link
                  href="/join"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-sm font-semibold rounded text-[#0B2545] bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-sm"
                >
                  <Calendar className="mr-2" size={16} />
                  Find Upcoming Gatherings
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#0072CE] hover:text-[#0058A3] hover:underline transition-colors"
                >
                  UN SDG Evidence Brief →
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Institutional Dossier & SDG Alignment Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Institutional Mapping Matrix
                  </span>
                  <span className="text-[11px] font-mono text-[#0072CE] bg-blue-50 px-2 py-0.5 rounded">
                    IA-2030-SDG
                  </span>
                </div>

                {/* SDG Graphic Tile */}
                <div className="relative bg-slate-50 border border-slate-200 rounded overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="interACT Curriculum Mapping to United Nations SDGs 3, 16, and 17"
                    width={560}
                    height={560}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>

                {/* Figure Caption & Specifications */}
                <div className="space-y-3 pt-1 text-xs">
                  <p className="text-slate-600 italic leading-snug">
                    <strong className="text-slate-800 not-italic font-semibold">Figure 1.0:</strong> Official mapping of the interACT tripartite pedagogical framework against the United Nations 2030 Agenda for Sustainable Development.
                  </p>

                  <div className="border-t border-slate-100 pt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                    <div>
                      <span className="font-semibold text-slate-700 block">Target Audience:</span>
                      Youth &amp; Young Leaders (15–29)
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 block">Pedagogy:</span>
                      Cognitive &amp; Contemplative
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. EMPIRICAL BASELINE & GLOBAL REALITY
          UN-style Data Ledger citing WHO, UNESCO, and Lancet Data
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Global Evidence Baseline · Why This Initiative Exists
            </h2>
            <span className="text-xs text-slate-400">
              Sources: WHO (2021) · UNESCO MGIEP · The Lancet Planetary Health
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Stat 1 */}
            <div className="pt-4 md:pt-0 md:pr-6">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#0B2545] mb-1">
                1 in 7
              </div>
              <div className="text-xs font-bold text-[#4C9F38] uppercase tracking-wide mb-1">
                Adolescent Mental Health
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adolescents globally experience a diagnosed mental health disorder. UN SDG 3.4 mandates urgent preventive interventions.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#0B2545] mb-1">
                59%
              </div>
              <div className="text-xs font-bold text-[#00AED9] uppercase tracking-wide mb-1">
                Severe Eco-Anxiety
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Of youth feel extremely distressed regarding global polycrises. Without internal resilience, paralysis replaces civic action.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#0B2545] mb-1">
                31%
              </div>
              <div className="text-xs font-bold text-[#00689D] uppercase tracking-wide mb-1">
                Anxiety Reduction
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Average reduction in youth anxiety indicators demonstrated across meta-analyses of standardized mindfulness and contemplative protocols.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl lg:text-4xl font-serif font-bold text-[#0B2545] mb-1">
                100%
              </div>
              <div className="text-xs font-bold text-[#19486A] uppercase tracking-wide mb-1">
                Open Educational Access
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero paywalls or proprietary licensing. All 15 curriculum modules, participant thought trackers, and pedagogical frameworks are globally accessible.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. THE THREE PROGRAMME PILLARS (THE ACT CURRICULUM)
          Modeled directly on UN Programmes of Work & SDG Alignment
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-2">
              <Compass size={14} />
              <span>Pedagogical Architecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B2545] tracking-tight mb-4">
              The Three Pillars of the ACT Framework
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              interACT structures personal development into three progressive competencies. Each pillar directly corresponds to a United Nations Sustainable Development Goal target, establishing clear indicators for individual wellbeing and collective peace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* PILLAR 1: Awareness (SDG 3) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
              {/* SDG 3 Top Color Stripe */}
              <div className="h-1.5 w-full bg-[#4C9F38]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#4C9F38] uppercase tracking-wider">
                    Pillar I · Awareness
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[#4C9F38] text-[11px] font-bold border border-emerald-200">
                    <Heart size={12} />
                    UN SDG 3.4
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0B2545] mb-3">
                  Awareness
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Cultivating present-moment discernment. Participants learn to observe cognitive patterns and physical stress signals without reactive judgment, reconnecting with intrinsic core values.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded p-3 mb-6 text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-slate-800">Target SDG: Goal 3 (Good Health)</div>
                  <div>• Target 3.4: Promotion of mental health and prevention of chronic psychological distress.</div>
                  <div>• Method: Somatic tracking &amp; cognitive reframing.</div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Unit 1–5 · ~45 mins</span>
                  <Link
                    href="/modules/awareness"
                    className="text-xs font-bold text-[#4C9F38] hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 2: Contemplation (SDG 16) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
              {/* SDG 16 Top Color Stripe */}
              <div className="h-1.5 w-full bg-[#00AED9]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#00689D] uppercase tracking-wider">
                    Pillar II · Contemplation
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 text-[#00689D] text-[11px] font-bold border border-sky-200">
                    <ShieldCheck size={12} />
                    UN SDG 16.1
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0B2545] mb-3">
                  Contemplation
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Ethical self-inquiry and inner stability. Grounding self-worth in enduring character rather than external validation, breaking cycles of hostility and reactionary thought patterns.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded p-3 mb-6 text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-slate-800">Target SDG: Goal 16 (Peace &amp; Justice)</div>
                  <div>• Target 16.1: Reducing interpersonal violence through &ldquo;Peace from Within&rdquo;.</div>
                  <div>• Ref: UNESCO MGIEP Socio-Emotional Learning.</div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Unit 6–10 · ~45 mins</span>
                  <Link
                    href="/modules/contemplation"
                    className="text-xs font-bold text-[#00689D] hover:text-sky-900 inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 3: Transformative Silence (SDG 17) */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
              {/* SDG 17 Top Color Stripe */}
              <div className="h-1.5 w-full bg-[#19486A]" aria-hidden="true" />
              
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#19486A] uppercase tracking-wider">
                    Pillar III · Silence
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-[#19486A] text-[11px] font-bold border border-slate-300">
                    <Users size={12} />
                    UN SDG 17.17
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0B2545] mb-3">
                  Transformative Silence
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Shared stillness and receptive listening. De-escalating autonomic stress responses, fostering deep cross-cultural empathy, and unlocking cooperation across fragmented communities.
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded p-3 mb-6 text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-slate-800">Target SDG: Goal 17 (Partnerships)</div>
                  <div>• Target 17.17: Civil society partnerships built on empathetic listening.</div>
                  <div>• Ref: UN Policy Brief on Youth Civic Engagement.</div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Unit 11–15 · ~45 mins</span>
                  <Link
                    href="/modules/transformative-silence"
                    className="text-xs font-bold text-[#19486A] hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. INSTITUTIONAL IMPLEMENTATION FORMATS
          Structured Educational Delivery in Schools & Civil Society
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                Deployment Model
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#0B2545] tracking-tight">
                Standardized Delivery for Institutions &amp; Communities
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The interACT curriculum is engineered for modular implementation across diverse institutional environments without requiring clinical psychological infrastructure.
              </p>
              <div className="pt-2">
                <Link
                  href="/modules"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0072CE] hover:text-[#0058A3] hover:underline"
                >
                  Explore Curriculum Framework →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200 bg-white shadow-sm">
                
                {/* Format 1 */}
                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0058A3] border border-blue-200">
                        Format A
                      </span>
                      <h4 className="text-base font-semibold text-slate-900">
                        3-Hour Intensive Workshop
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Condensed experiential arc for youth conferences, summits, and orientation days.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-500 block">Duration: 180 mins</span>
                    <Link
                      href="/modules/transformative-silence"
                      className="text-xs font-semibold text-[#0072CE] hover:underline"
                    >
                      Format Overview →
                    </Link>
                  </div>
                </div>

                {/* Format 2 */}
                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#4C9F38] border border-emerald-200">
                        Format B
                      </span>
                      <h4 className="text-base font-semibold text-slate-900">
                        15-Week Academic Course
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      In-depth semester program for secondary schools, colleges, and university student unions.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-500 block">Duration: 15 × 45m</span>
                    <Link
                      href="/modules"
                      className="text-xs font-semibold text-[#0072CE] hover:underline"
                    >
                      Curriculum Specs →
                    </Link>
                  </div>
                </div>

                {/* Format 3 */}
                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-[#19486A] border border-indigo-200">
                        Format C
                      </span>
                      <h4 className="text-base font-semibold text-slate-900">
                        Peer Contemplation Circles
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600">
                      Autonomous community and grassroots circles facilitated by certified youth peer leaders.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-slate-500 block">Flexible Schedule</span>
                    <Link
                      href="/modules"
                      className="text-xs font-semibold text-[#0072CE] hover:underline"
                    >
                      Module Details →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          5. DOCUMENTATION REPOSITORY & WORKING PAPERS
          Official UN-Style Publications Desk
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-bold text-[#0072CE] uppercase tracking-wider mb-1">
                Official Working Papers &amp; Toolkits
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0B2545]">
                Curriculum Documentation Library
              </h3>
            </div>
            <Link
              href="/modules"
              className="text-xs font-semibold text-[#0072CE] hover:text-[#0058A3] flex items-center gap-1 uppercase tracking-wider"
            >
              Browse 15 Modules <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Document 1 */}
            <div className="bg-white border border-slate-200 rounded p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">DOC-IA-01</span>
                  <span>Open Access</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Curriculum Framework &amp; Syllabus
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Standardized guidance for youth educators: pedagogical principles, modular session arcs, learning outcomes, and youth psychological safety safeguards.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Edition 2026</span>
                <Link
                  href="/modules"
                  className="font-semibold text-[#0072CE] hover:underline flex items-center gap-1"
                >
                  <BookOpen size={14} /> Explore Curriculum
                </Link>
              </div>
            </div>

            {/* Document 2 */}
            <div className="bg-white border border-slate-200 rounded p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">DOC-IA-02</span>
                  <span>OER Toolkit</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Participant Thought Tracker
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Standardized cognitive reflection worksheets enabling participants to log thought triggers, somatic stress sensations, and value reframing.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Core Exercise</span>
                <Link
                  href="/modules/awareness"
                  className="font-semibold text-[#0072CE] hover:underline flex items-center gap-1"
                >
                  <FileText size={14} /> View Protocol
                </Link>
              </div>
            </div>

            {/* Document 3 */}
            <div className="bg-white border border-slate-200 rounded p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">DOC-IA-03</span>
                  <span>Policy Dossier</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  UN SDG Evidence &amp; Policy Brief
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Complete scientific dossier documenting how contemplative practice advances Targets 3.4, 16.1, and 17.17 with international citations.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">UN 2030 Alignment</span>
                <Link
                  href="/about"
                  className="font-semibold text-[#0072CE] hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={14} /> Full Evidence
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          6. INSTITUTIONAL CALL TO PARTICIPATION
          Dignified, Non-SaaS Pathways for Civil Society
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0B2545] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                Civic Engagement &amp; Partnership
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Deploy the interACT Framework in Your School, Organization, or Community
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                As a non-commercial civil society initiative, interACT provides open curricula, session scripts, and facilitator support without cost to verified educational, non-profit, and civic organizations worldwide.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold bg-[#0072CE] hover:bg-[#0058A3] text-white transition-colors text-center shadow-sm"
              >
                Find an Upcoming Workshop
              </Link>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center px-6 py-3 rounded text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors text-center"
              >
                Explore Educational Modules
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          7. OFFICIAL CITATION & REFERENCE ARCHIVE
          Scholarly Transparency & Legal Clarity
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 border-t border-slate-200 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-4 font-semibold text-slate-700 uppercase tracking-wider text-[11px]">
            <BookOpen size={14} className="text-[#0072CE]" />
            <span>Key Research &amp; Policy Citations</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 text-[11px] leading-relaxed">
            <div>
              <strong className="text-slate-700">WHO (2021):</strong> Adolescent Mental Health Fact Sheet &amp; Global Guidelines for Non-Communicable Diseases (UN SDG 3.4).
            </div>
            <div>
              <strong className="text-slate-700">UNESCO MGIEP (2020):</strong> Rethinking Learning: A Review of Social and Emotional Learning for Peaceful Societies (UN SDG 16.1).
            </div>
            <div>
              <strong className="text-slate-700">The Lancet Planetary Health (2021):</strong> Climate anxiety in children and young people and their beliefs about government responses.
            </div>
            <div>
              <strong className="text-slate-700">Khoury et al. (2015):</strong> Mindfulness-based stress reduction for healthy individuals: A meta-analysis. <em>Journal of Psychosomatic Research</em>.
            </div>
            <div>
              <strong className="text-slate-700">UN Department of Global Communications:</strong> Guidelines for Civil Society Entities Aligned with the 2030 Agenda for Sustainable Development.
            </div>
            <div>
              <strong className="text-slate-700">UNICEF (2021):</strong> State of the World&apos;s Children: On My Mind — Promoting, protecting and caring for children&apos;s mental health.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
