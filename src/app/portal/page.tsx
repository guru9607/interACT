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
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthBackground from "@/components/AuthBackground";

// A robust helper to load the brand logo with a vector fallback
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

  // Loading Screen redesign
  if (auth.loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#fcfbf7] relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2d9a90_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="relative flex flex-col items-center space-y-4">
          <Loader2 className="animate-spin text-teal-600" size={40} />
          <p className="text-xs text-text-muted font-semibold tracking-wider uppercase opacity-60">Loading interACT Hub...</p>
        </div>
      </div>
    );
  }

  // Not Logged In Required Gating
  if (!auth.userId) {
    return (
      <AuthBackground>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_32px_64px_-16px_rgba(27,67,61,0.08)] rounded-[2.5rem] p-8 sm:p-10 text-center space-y-6"
        >
          {/* Decorative Logo / Icon Container */}
          <div className="relative group mx-auto w-20">
            <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative w-20 h-20 bg-white/95 rounded-[1.6rem] border border-teal-100/60 shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:scale-[1.03]">
              <LogoFallbackIcon defaultIcon={<ShieldCheck size={32} className="text-teal-600" />} />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight font-sans">
              Staff portal
            </h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Sign in with your facilitator login. New colleagues create an account first — roster emails get facilitator access automatically.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full pt-2">
            <Link
              href="/portal/login"
              className="group w-full py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99]"
            >
              <span>Sign in</span>
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </Link>
            <Link
              href="/portal/register"
              className="text-sm text-teal-700 font-semibold hover:text-teal-800 underline underline-offset-4 transition-colors"
            >
              Create facilitator login
            </Link>
          </div>
        </motion.div>
      </AuthBackground>
    );
  }

  // Waiting for Core Team Access
  if (!auth.isStaff) {
    return (
      <AuthBackground>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-lg bg-white/75 backdrop-blur-xl border border-amber-100/60 shadow-[0_32px_64px_-16px_rgba(245,158,11,0.06)] rounded-[2.5rem] p-8 sm:p-10 text-center space-y-6"
        >
          <div className="relative group mx-auto w-20">
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative w-20 h-20 bg-white/95 rounded-[1.6rem] border border-amber-100/60 shadow-sm flex items-center justify-center p-4 transition-all duration-300">
              <LogoFallbackIcon defaultIcon={<ShieldCheck size={32} className="text-amber-500" />} />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-text-main font-sans">Access Pending Activation</h1>
            <p className="text-text-muted text-sm leading-relaxed">
              You are signed in as a <strong className="text-text-main font-semibold">{auth.role ?? "participant"}</strong>.
            </p>
            <div className="text-text-muted text-sm leading-relaxed space-y-3 max-w-md mx-auto pt-2 text-left bg-amber-50/45 border border-amber-100/40 p-5 rounded-2xl">
              <p className="font-semibold text-teal-800 text-xs uppercase tracking-wider">How to enable access:</p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-text-muted">
                <li>Make sure you registered using the <strong className="text-text-main font-semibold">same email address</strong> submitted in your facilitator application.</li>
                <li>Our global coordination team reviews accounts periodically to ensure security and activate access.</li>
              </ul>
              <p className="text-[11px] pt-1">
                If you are a new facilitator or need immediate activation, please contact your local interACT coordinator or drop an email to <a href="mailto:global@interact.org" className="text-teal-700 font-bold hover:underline">global@interact.org</a>.
              </p>
            </div>
          </div>
          
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSignOut}
              className="px-6 py-2.5 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50/80 rounded-xl transition-all border border-transparent hover:border-red-100 active:scale-[0.98]"
            >
              Sign out
            </button>
          </div>
        </motion.div>
      </AuthBackground>
    );
  }

  // Dashboard Hub Menu Items Design
  const menuItems = [
    {
      title: "Event Management",
      description: "Create, edit, and manage upcoming and past interACT events.",
      icon: <LayoutDashboard size={24} />,
      link: "/events-dashboard",
      colorClass: "bg-blue-50/70 text-blue-600 border-blue-100/60",
      hoverClass: "hover:border-blue-300 hover:shadow-blue-900/5 group-hover:bg-blue-100/60",
      glowColor: "group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
    },
    {
      title: "Facilitator Intake",
      description: "Open the public application page for new facilitators.",
      icon: <UserPlus size={24} />,
      link: "/facilitators",
      colorClass: "bg-teal-50/70 text-teal-600 border-teal-100/60",
      hoverClass: "hover:border-teal-300 hover:shadow-teal-900/5 group-hover:bg-teal-100/60",
      glowColor: "group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.08)]",
    },
    {
      title: "Certificate Generator",
      description: "Generate participation and appreciation certificates.",
      icon: <Award size={24} />,
      link: "/portal/certificates",
      colorClass: "bg-amber-50/70 text-amber-600 border-amber-100/60",
      hoverClass: "hover:border-amber-300 hover:shadow-amber-900/5 group-hover:bg-amber-100/60",
      glowColor: "group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)]",
    },
    {
      title: "Facilitator Guide",
      description: "Manuals and the 3-hour combined facilitator script.",
      icon: <FileText size={24} />,
      link: "/facilitator-guide",
      colorClass: "bg-purple-50/70 text-purple-600 border-purple-100/60",
      hoverClass: "hover:border-purple-300 hover:shadow-purple-900/5 group-hover:bg-purple-100/60",
      glowColor: "group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.08)]",
    },
    {
      title: "Public Join Page",
      description: "View where participants browse and register for events.",
      icon: <Calendar size={24} />,
      link: "/join",
      colorClass: "bg-orange-50/70 text-orange-600 border-orange-100/60",
      hoverClass: "hover:border-orange-300 hover:shadow-orange-900/5 group-hover:bg-orange-100/60",
      glowColor: "group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#fcfbf7] via-[#f7fbf9] to-[#f5faf8] flex flex-col">
      {/* Sticky Header with Glassmorphism */}
      <div className="bg-white/80 backdrop-blur-md border-b border-teal-50 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 text-teal-600">
              <div className="relative w-11 h-11 bg-white/95 rounded-[0.8rem] border border-teal-100/50 shadow-sm flex items-center justify-center p-2">
                <LogoFallbackIcon defaultIcon={<ShieldCheck size={20} className="text-teal-600" />} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-main leading-none font-sans">interACT Hub</h1>
                <p className="text-[10px] text-text-muted mt-1 uppercase tracking-wider font-bold">
                  {auth.isAdmin ? "Core team (admin)" : "Facilitator"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-4 py-2 text-xs font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98]"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main Hub Dashboard */}
      <main className="max-w-5xl w-full mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.5, ease: "easeOut" }}
              onClick={() => router.push(item.link)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(item.link);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={item.title}
              className={`group cursor-pointer p-8 bg-white/80 border border-teal-100/20 shadow-[0_8px_30px_rgb(0,0,0,0.015)] backdrop-blur-sm rounded-[2rem] transition-all duration-300 ${item.hoverClass} ${item.glowColor} hover:-translate-y-1 hover:bg-white`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${item.colorClass} border transition-colors duration-300`}>
                  {item.icon}
                </div>
                <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:text-text-main translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={20} aria-hidden />
                </div>
              </div>
              <h3 className="text-lg font-bold text-text-main mb-2 font-sans">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <footer className="mt-16 text-center text-text-muted opacity-40 text-xs">
          © {new Date().getFullYear()} interACT Global Portal. Authorized access only.
        </footer>
      </main>
    </div>
  );
}
