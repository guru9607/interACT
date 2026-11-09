"use client";

import Link from "next/link";
import { 
  ShieldAlert, 
  Lock, 
  ArrowRight, 
  ArrowLeft, 
  Globe, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Mail
} from "lucide-react";

export default function FacilitatorsPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col justify-between">
      <div>
        {/* ─────────────────────────────────────────────────────────────
            1. INSTITUTIONAL HEADER & ACCREDITATION DIRECTIVE
        ───────────────────────────────────────────────────────────── */}
        <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
          {/* Tri-color SDG Ribbon */}
          <div className="h-1 w-full flex" aria-hidden="true">
            <span className="flex-1 bg-[#4C9F38]" />
            <span className="flex-1 bg-[#00AED9]" />
            <span className="flex-1 bg-[#19486A]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-14 md:pb-14">
            
            <div className="flex items-center justify-between gap-4 mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors"
              >
                <ArrowLeft size={14} className="mr-1.5" /> Return to Public Portal
              </Link>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                POLICY REF: IA-GOV-2026
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE]">
                <Globe size={14} />
                <span>Institutional Governance · UN 2030 Agenda</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight">
                Facilitator Accreditation &amp; Governance
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
                The interACT pedagogical framework is delivered across schools, universities, and community centers worldwide. To preserve instructional integrity, contemplative depth, and participant safety, facilitator accreditation is governed under institutional nomination and partner secretariats.
              </p>
            </div>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            2. RESTRICTED INTAKE DIRECTIVE (NO PUBLIC REGISTRATION)
        ───────────────────────────────────────────────────────────── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Directive Card */}
            <div className="bg-[#F8F9FA] border-l-4 border-[#0B2545] border-y border-r border-slate-200 rounded-r-lg p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-slate-200/60 border border-slate-300 flex items-center justify-center text-[#0B2545] shrink-0 mt-0.5">
                  <Lock size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0072CE] block">
                    Operational Directive · Closed Intake Policy
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545]">
                    Facilitator Onboarding by Institutional Nomination Only
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  interACT does not offer open public self-registration. To protect pedagogical consistency and contemplative depth, facilitator accreditation, training, and cohort deployment are conducted strictly through **institutional nomination** and **direct coordination with regional educational secretariats**.
                </p>

                <p>
                  All accredited facilitators undergo structured orientation in contemplative life skills, non-violent communication, and participatory youth dynamics under our civil society alignment with the United Nations 2030 Agenda.
                </p>
              </div>

              {/* Requirement Checkpoints */}
              <div className="border-t border-slate-200 pt-4 grid sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#4C9F38] shrink-0 mt-0.5" />
                  <span>Institutional Partner Nomination</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#00AED9] shrink-0 mt-0.5" />
                  <span>Completion of Pedagogical Training</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#19486A] shrink-0 mt-0.5" />
                  <span>Pro-Bono Educational Delivery</span>
                </div>
              </div>
            </div>

            {/* Action Pathways */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Box 1: For Accredited Facilitators */}
              <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Authorized Faculty
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#0B2545]">
                    Accredited Facilitator Access
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you are an accredited facilitator with verified institutional credentials, sign in to the operational portal to access workshop curricula and toolkits.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/portal/login"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors w-full justify-center shadow-xs"
                  >
                    Sign In to Facilitator Portal
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Box 2: For Students, Universities & Youth Participants */}
              <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-2xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Civic &amp; Youth Participants
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#0B2545]">
                    Attend an Upcoming Gathering
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Explore published workshops, university intensive sessions, and public gatherings hosted by accredited facilitators across our 5 global UN regional groupings.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/join"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-semibold rounded transition-colors w-full justify-center"
                  >
                    <Calendar size={14} />
                    View Workshop Registry
                  </Link>
                </div>
              </div>
            </div>

            {/* University & Centre Coordination Contact Note */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3 text-xs text-slate-600">
              <Building2 size={16} className="text-[#0072CE] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-[#0B2545] block">Institutional Hosting Inquiries:</strong>
                <p className="leading-relaxed">
                  Universities, colleges, and community organizations wishing to introduce interACT workshops to students or faculty in their region may contact the secretariat at{" "}
                  <a href="mailto:support@theinteract.org" className="text-[#0072CE] underline font-medium">
                    support@theinteract.org
                  </a>.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. INSTITUTIONAL SAFEGUARDS FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#F8F9FA] border-t border-slate-200 py-8 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>interACT Global Educational Initiative · Facilitator Accreditation Secretariat</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#0072CE] hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#0072CE] hover:underline">
              UN SDG Alignment
            </Link>
            <Link href="/modules" className="hover:text-[#0072CE] hover:underline">
              Curriculum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
