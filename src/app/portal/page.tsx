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

export default function PortalPage() {
  const auth = useStaffAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/portal/login");
    router.refresh();
  };

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-teal-600" size={40} />
      </div>
    );
  }

  if (!auth.userId) {
    return (
      <div className="auth-page-bg">
        <div className="auth-card-shell max-w-md p-8 sm:p-10 text-center space-y-6">
          <ShieldCheck className="mx-auto text-teal-600" size={40} aria-hidden />
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-text-main tracking-tight">Staff portal</h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Sign in with your facilitator login. New colleagues create an account first — roster emails get facilitator access automatically.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Link
              href="/portal/login"
              className="auth-primary-btn"
            >
              Sign in
              <ArrowRight size={20} aria-hidden />
            </Link>
            <Link
              href="/portal/register"
              className="text-sm text-teal-700 font-medium underline underline-offset-4"
            >
              Create facilitator login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!auth.isStaff) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-lg bg-white rounded-3xl border border-amber-100 p-10 shadow-lg text-center space-y-4">
          <h1 className="text-xl font-semibold text-text-main">Waiting for access</h1>
          <p className="text-text-muted text-sm">
            Signed in as <strong className="text-text-main">{auth.role ?? "participant"}</strong>.
            If you expected facilitator access, sign up with the <strong className="text-text-main">same email</strong> as your facilitator application or your core-team roster entry (including <code className="text-xs bg-gray-100 px-1 rounded">teams.email</code> in the database). Otherwise ask a core-team admin to promote you to{" "}
            <code className="text-xs bg-gray-100 px-1 rounded">facilitator</code> or{" "}
            <code className="text-xs bg-gray-100 px-1 rounded">admin</code>.
          </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-red-600 font-medium hover:underline text-sm"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Event Management",
      description: "Create, edit, and manage upcoming and past interACT events.",
      icon: <LayoutDashboard size={24} />,
      link: "/events-dashboard",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      hoverColor: "hover:border-blue-300 hover:shadow-blue-900/5",
    },
    {
      title: "Facilitator intake",
      description: "Open the public application page for new facilitators.",
      icon: <UserPlus size={24} />,
      link: "/facilitators",
      color: "bg-teal-50 text-teal-600 border-teal-100",
      hoverColor: "hover:border-teal-300 hover:shadow-teal-900/5",
    },
    {
      title: "Certificate Generator",
      description: "Generate participation and appreciation certificates.",
      icon: <Award size={24} />,
      link: "/portal/certificates",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      hoverColor: "hover:border-amber-300 hover:shadow-amber-900/5",
    },
    {
      title: "Facilitator Guide",
      description: "Manuals and the 3-hour combined facilitator script.",
      icon: <FileText size={24} />,
      link: "/facilitator-guide",
      color: "bg-purple-50 text-purple-600 border-purple-100",
      hoverColor: "hover:border-purple-300 hover:shadow-purple-900/5",
    },
    {
      title: "Public Join Page",
      description: "View where participants browse and register for events.",
      icon: <Calendar size={24} />,
      link: "/join",
      color: "bg-orange-50 text-orange-600 border-orange-100",
      hoverColor: "hover:border-orange-300 hover:shadow-orange-900/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 text-teal-600">
              <ShieldCheck size={32} aria-hidden />
              <div>
                <h1 className="text-2xl font-semibold text-text-main leading-none">interACT Hub</h1>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">
                  {auth.isAdmin ? "Core team (admin)" : "Facilitator"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
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
              className={`group cursor-pointer p-8 bg-white rounded-[2.5rem] border ${item.color} shadow-sm transition-all duration-300 ${item.hoverColor} hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${item.color.split(" ")[0]} ${item.color.split(" ")[1]}`}>
                  {item.icon}
                </div>
                <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} aria-hidden />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-2">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-text-muted opacity-50 text-xs">
          © {new Date().getFullYear()} interACT Global Portal. Authorized access only.
        </p>
      </main>
    </div>
  );
}
