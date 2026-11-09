import Link from "next/link";
import UnitCard from "@/components/UnitCard";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    title: "Awareness (A): Somatic & Cognitive Discernment",
    description:
      "Notice thoughts, emotions, and bodily sensations without immediate reactive judgment—building presence and a cognitive pause before habitual reaction. Cites WHO 2021 adolescent mental health protocols.",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    href: "/modules/awareness",
    number: 1,
  },
  {
    title: "Contemplation (C): Values-Based Self-Inquiry",
    description:
      "Experience innate human values through guided contemplation. Clarifies self-worth versus external validation, and cultivates emotional steadiness under social pressure aligned with UNESCO SEL frameworks.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop",
    href: "/modules/contemplation",
    number: 2,
  },
  {
    title: "Transformative Silence (T): Receptive Dialogue & Peace",
    description:
      "Move beyond outer quiet into internal cognitive stillness. Down-regulates autonomic stress, sharpens moral discernment, and enables empathetic listening for cross-cultural partnership under SDG 17.",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop",
    href: "/modules/transformative-silence",
    number: 3,
  },
];

export default function ModulesPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & SYLLABUS CLASSIFICATION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Tri-color SDG Ribbon */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-4">
            <Globe size={14} className="shrink-0" />
            <span>Open Educational Resource (OER) · UN 2030 Agenda Syllabus</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-5">
            The ACT Curriculum: Cognitive &amp; Contemplative Framework
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mb-8">
            The interACT curriculum provides a non-sectarian, evidence-based pedagogy structured into three progressive core modules—<strong className="font-semibold text-slate-900">Awareness</strong>, <strong className="font-semibold text-slate-900">Contemplation</strong>, and <strong className="font-semibold text-slate-900">Transformative Silence</strong>. Designed for secondary schools, universities, and youth civil society organizations.
          </p>

          {/* Quick Curriculum Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Curriculum Scope:</span>
              <span className="font-semibold text-slate-800">15 Units / ~7 Hours</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Target Demographics:</span>
              <span className="font-semibold text-slate-800">Youth (15–29) &amp; Educators</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Core SDGs:</span>
              <span className="font-semibold text-slate-800">SDG 3.4 · 16.1 · 17.17</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Licensing / Access:</span>
              <span className="font-semibold text-[#0072CE]">Public Domain OER</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORE SYLLABUS DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-10">
            <div>
              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                Pedagogical Progression
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                Standard Modules of Study
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Each unit contains experiential exercises, reflections &amp; facilitator notes
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <UnitCard
                key={module.number}
                title={module.title}
                description={module.description}
                image={module.image}
                href={module.href}
                number={module.number}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PEDAGOGICAL DELIVERY FORMATS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
              Implementation Models
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#0B2545]">
              Flexible Deployment for Educational Institutions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              The curriculum is engineered so institutions can deliver it as an intensive immersion, a multi-week academic seminar, or recurring peer circles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold text-[#0058A3] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase tracking-wider">
                  Format 01
                </span>
                <h4 className="text-base font-semibold text-slate-900 mt-2 mb-1">
                  3-Hour Youth Intensive
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-paced experiential immersion covering all three modules in a single session. Recommended for conferences, orientation weeks, and youth assemblies.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">180 Mins</span>
                <Link
                  href="/modules/transformative-silence"
                  className="font-semibold text-[#0072CE] hover:underline"
                >
                  Overview & Structure →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold text-[#4C9F38] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">
                  Format 02
                </span>
                <h4 className="text-base font-semibold text-slate-900 mt-2 mb-1">
                  15-Week Academic Semester
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full 15-lesson academic deployment (~45 mins weekly). Allows continuous somatic tracking, personal journaling, and longitudinal impact evaluation.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">15 × 45 Mins</span>
                <Link
                  href="/modules/awareness"
                  className="font-semibold text-[#0072CE] hover:underline"
                >
                  Syllabus Progression →
                </Link>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold text-[#19486A] bg-slate-100 px-2 py-0.5 rounded border border-slate-300 uppercase tracking-wider">
                  Format 03
                </span>
                <h4 className="text-base font-semibold text-slate-900 mt-2 mb-1">
                  Autonomous Contemplation Circles
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Grassroots peer circles convened by certified youth leaders in community hubs, clubs, and student organizations with standardized reflection scripts.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Modular</span>
                <Link
                  href="/modules/transformative-silence"
                  className="font-semibold text-[#0072CE] hover:underline"
                >
                  Module Details →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INSTITUTIONAL INQUIRIES & CAMPUS DEPLOYMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-[#F8F9FA] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                <FileText size={16} />
                <span>Institutional Implementation &amp; Campus Hosting</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0B2545]">
                Deploy the interACT Framework in Your Institution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Universities, colleges, and secondary institutions can host accredited workshops delivered by qualified faculty and trained coordinators at zero educational licensing cost.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0072CE] text-white text-xs font-semibold rounded hover:bg-[#0058A3] transition-colors shadow-xs"
              >
                Inquire for Campus Workshop
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded hover:bg-slate-50 transition-colors shadow-xs"
              >
                UN SDG Evidence Dossier
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
