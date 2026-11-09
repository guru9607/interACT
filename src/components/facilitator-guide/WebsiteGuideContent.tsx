"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  Calendar, 
  Award, 
  UserCheck, 
  BookOpen, 
  BarChart3, 
  ArrowRight,
  ShieldAlert,
  Server
} from "lucide-react";

export const WebsiteGuideContent = () => {
  const systems = [
    {
      title: "1. 3-Hour Combined Facilitator Master Script",
      route: "/facilitator-guide/three-hour-program",
      icon: BookOpen,
      color: "#0072CE",
      description:
        "The complete verbatim delivery script spanning the full ACT arc (Awareness → Contemplation → Silence → Integration) with precise minute-by-minute timekeeping ledgers and spoken directives.",
    },
    {
      title: "2. Facilitator Operations Portal",
      route: "/portal",
      icon: LayoutDashboard,
      color: "#0B2545",
      description:
        "Central operations console for accredited staff and facilitators. Authenticate to access event creation, attendance registries, certification tools, and internal field documentation.",
    },
    {
      title: "3. Event Management Dashboard",
      route: "/events-dashboard",
      icon: Calendar,
      color: "#4C9F38",
      description:
        "Field coordinator engine: publish regional workshops, select UN regional groupings (Asia-Pacific, Americas, Europe, Africa, Oceania), configure timezones and dial codes, and tag ACT modules so participant feedback surveys align with classroom delivery.",
    },
    {
      title: "4. Facilitator Accreditation Governance",
      route: "/facilitators",
      icon: UserCheck,
      color: "#00AED9",
      description:
        "Institutional governance directives governing closed intake. Facilitator onboarding is conducted by institutional partner nomination and regional educational secretariats.",
    },
    {
      title: "5. Official Certificate Generator",
      route: "/portal/certificates",
      icon: Award,
      color: "#19486A",
      description:
        "Automated certification utility issuing standardized interACT Certificates of Participation and Keynote Appreciation bearing unique serial credentials (e.g. INT-2026-XXXX) and institutional executive seals.",
    },
    {
      title: "6. Public Curriculum & Gathering Registries",
      route: "/modules",
      icon: BarChart3,
      color: "#0072CE",
      description:
        "Public-facing directories designed for university students and civic participants: Course Syllabi (/modules), Global Gathering Registry (/join), and Institutional Governance (/team).",
    },
  ];

  return (
    <div className="space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
      {/* Header Overview */}
      <div className="border-b border-slate-200 pb-4">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0072CE] block">
          PORTAL-OPS · SYSTEMS ARCHITECTURE &amp; OPERATIONAL TOPOLOGY
        </span>
        <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0B2545] mt-1">
          interACT Operational Systems Reference
        </h2>
        <p className="mt-1 text-slate-600">
          Comprehensive manual explaining how the staff portal, event management engine, facilitator accreditation workflow, and public participant registries interconnect.
        </p>
      </div>

      {/* Institutional Directive Callout */}
      <div className="bg-slate-50 border-l-4 border-[#0B2545] p-4 text-xs text-slate-700 space-y-1.5 rounded-r border-y border-r border-slate-200">
        <div className="font-bold text-[#0B2545] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
          <ShieldAlert size={14} className="text-[#0072CE]" />
          Governance Directive: Institutional Accreditation Policy
        </div>
        <p className="leading-relaxed">
          Facilitator accounts and event publishing rights are restricted to verified institutional faculty and regional coordinators. All accounts are created and authenticated through administrative invitation and institutional endorsement.
        </p>
      </div>

      {/* Systems Directory Grid */}
      <div className="grid gap-4">
        {systems.map((sys) => {
          const Icon = sys.icon;
          return (
            <div
              key={sys.route}
              className="border border-slate-200 bg-white rounded-lg p-5 shadow-2xs hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div
                  className="w-10 h-10 rounded border border-slate-200 flex items-center justify-center shrink-0 text-white shadow-2xs"
                  style={{ backgroundColor: sys.color }}
                >
                  <Icon size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-sm text-[#0B2545]">
                    {sys.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[#0072CE] block">
                    {sys.route}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {sys.description}
                  </p>
                </div>
              </div>

              <Link
                href={sys.route}
                className="self-start sm:self-center shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
              >
                Open Interface
                <ArrowRight size={13} />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Data Flow & Participant Feedback Architecture */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
        <h3 className="font-serif font-bold text-sm text-[#0B2545] flex items-center gap-2">
          <Server size={16} className="text-[#0072CE]" />
          Data Feedback &amp; SDG Impact Verification Lifecycle
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          The interACT platform operates an empirical feedback loop to verify educational outcomes aligned with UN SDG Targets 3.4, 16.1, and 17.17:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-600">
          <li>
            <strong>Event Scheduling:</strong> Facilitators publish workshops via <code>/events-dashboard</code>, assigning the session to its precise ACT module (Awareness, Contemplation, Transformative Silence, or Complete ACT).
          </li>
          <li>
            <strong>Public Registration:</strong> Participants RSVP through <code>/join</code> or direct <code>/events/[id]</code> links, receiving instant calendar (.ics, Google, Outlook) invites.
          </li>
          <li>
            <strong>Experiential Delivery:</strong> Facilitators deliver the standardized curriculum using the scripted timings from <code>/facilitator-guide</code>.
          </li>
          <li>
            <strong>Survey Reflection Capture:</strong> Upon session conclusion, participants submit standardized qualitative reflections measuring shifts in self-worth, emotional poise, and mental clarity.
          </li>
          <li>
            <strong>Certification:</strong> Facilitators issue serialized, tamper-verifiable certificates to qualifying attendees through <code>/portal/certificates</code>.
          </li>
        </ol>
      </section>
    </div>
  );
};
