"use client";

import { useStaffAuth } from "@/hooks/useStaffAuth";
import { createClient } from "@/lib/supabase/client";
import {
  ShieldCheck,
  Calendar,
  UserPlus,
  FileText,
  ArrowRight,
  LayoutDashboard,
  Award,
  Loader2,
  Lock,
  LogOut,
  Globe,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthBackground from "@/components/AuthBackground";

function LogoFallbackIcon({ defaultIcon }: { defaultIcon: React.ReactNode }) {
  const [logoLoaded, setLogoLoaded] = useState(true);
  return logoLoaded ? (
    <img
      src="/logo.png"
      alt="interACT Logo"
      className="w-full h-full object-contain"
      onError={() => setLogoLoaded(false)}
    />
  ) : (
    defaultIcon
  );
}

export default function PortalPage() {
  const auth = useStaffAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/portal/login");
    router.refresh();
  };

  // Loading Screen
  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center space-y-3">
          <Loader2 className="animate-spin text-[#0072CE] mx-auto" size={32} />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Loading Staff &amp; Facilitator Portal...
          </p>
        </div>
      </div>
    );
  }

  // Not Logged In
  if (!auth.userId) {
    return (
      <AuthBackground>
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded p-2 flex items-center justify-center">
              <LogoFallbackIcon defaultIcon={<ShieldCheck size={24} className="text-[#0072CE]" />} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">
                Restricted Access
              </span>
              <h1 className="text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
                Staff &amp; Facilitator Portal
              </h1>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
            Authorized facilitators, faculty, and operational personnel sign in to access curriculum handbooks, register cohorts, and issue certificates.
          </p>

          <div className="space-y-3 pt-2">
            <Link
              href="/portal/login"
              className="w-full py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Sign In to Portal</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
            Facilitator access is restricted to verified institutional faculty and coordinators. Accounts are provisioned directly by the Secretariat.
          </div>
        </div>
      </AuthBackground>
    );
  }

  // Waiting for Staff Verification
  if (!auth.isStaff) {
    return (
      <AuthBackground>
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-5">
          <div className="w-12 h-12 bg-amber-50 text-amber-700 border border-amber-200 rounded-full flex items-center justify-center mx-auto">
            <Lock size={22} />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
              Verification in Progress
            </span>
            <h2 className="text-xl font-serif font-bold text-[#0B2545]">
              Account Pending Facilitator Verification
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              You are signed in as <strong className="text-slate-800">{auth.email}</strong>. Facilitator permissions are granted once your institutional credentials are verified against our authorized roster.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="mailto:support@theinteract.org?subject=Facilitator%20Verification%20Followup"
              className="py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white text-xs font-semibold rounded transition-colors shadow-xs"
            >
              Contact Secretariat to Confirm Status
            </a>
            <button
              type="button"
              onClick={handleSignOut}
              className="py-2 text-xs font-semibold text-slate-600 hover:text-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </AuthBackground>
    );
  }

  // Dashboard Hub Menu Items
  const menuItems = [
    {
      title: "Event Registry & Management",
      description: "Schedule, coordinate, and review active and completed interACT gatherings.",
      icon: <LayoutDashboard size={20} className="text-[#0072CE]" />,
      link: "/events-dashboard",
      code: "ACT-EV-MGR",
    },
    {
      title: "Facilitator Accreditation Policy",
      description: "Review institutional closed intake and Centre In-Charge nomination directives.",
      icon: <UserPlus size={20} className="text-[#4C9F38]" />,
      link: "/facilitators",
      code: "ACT-FAC-POL",
    },
    {
      title: "Certificate Issuance Engine",
      description: "Generate and deliver verified digital certificates of completion for attendees.",
      icon: <Award size={20} className="text-[#19486A]" />,
      link: "/portal/certificates",
      code: "ACT-CERT-GEN",
    },
    {
      title: "Master Facilitator Handbook",
      description: "Access official scripts, timing considerations, and youth safety protocols.",
      icon: <FileText size={20} className="text-[#00689D]" />,
      link: "/facilitator-guide",
      code: "DOC-IA-01",
    },
    {
      title: "Public Workshop Directory",
      description: "View the external event calendar where participants browse upcoming cohorts.",
      icon: <Calendar size={20} className="text-slate-700" />,
      link: "/join",
      code: "REG-PUB-JOIN",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans text-slate-800">
      
      {/* Universal 3-Color Ribbon */}
      <div className="h-1 w-full flex" aria-hidden="true">
        <span className="flex-1 bg-[#4C9F38]" />
        <span className="flex-1 bg-[#00AED9]" />
        <span className="flex-1 bg-[#19486A]" />
      </div>

      {/* Institutional Top App Bar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded p-1 flex items-center justify-center shrink-0">
              <LogoFallbackIcon defaultIcon={<ShieldCheck size={18} className="text-[#0072CE]" />} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-[#0B2545] leading-none">
                  interACT Portal
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 bg-blue-50 text-[#0058A3] border border-blue-200 rounded">
                  {auth.isAdmin ? "ADMIN" : "FACILITATOR"}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Authenticated as <strong className="text-slate-700">{auth.email}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors hidden sm:inline"
            >
              Public Site
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-3 py-1.5 border border-slate-300 hover:border-red-300 hover:bg-red-50 text-slate-700 hover:text-red-700 rounded text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <LogOut size={13} />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Hub Dashboard */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        
        <div className="mb-8">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
            Operational Dashboard
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
            Curriculum Delivery &amp; Event Administration
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Select an administrative service below to manage sessions, materials, and certificates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <Link key={item.title} href={item.link} className="block group">
              <div className="border border-slate-200 rounded-lg p-5 bg-white hover:border-[#0072CE] hover:shadow-xs transition-all flex flex-col justify-between h-full space-y-4">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded border border-slate-200 bg-slate-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0072CE] font-semibold">
                  <span>Access Module</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
        interACT Global Operations &amp; Secretariat Portal · Authorized Personnel Only
      </footer>

    </div>
  );
}
