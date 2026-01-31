"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  ShieldCheck, 
  Calendar, 
  UserPlus, 
  FileText, 
  Settings, 
  ArrowRight,
  Lock,
  LayoutDashboard
} from "lucide-react";
import { motion } from "framer-motion";

const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

export default function PortalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <PortalContent />
    </Suspense>
  );
}

function PortalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [secret, setSecret] = useState(searchParams.get("secret") || "");
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const storedSecret = localStorage.getItem("staff_secret_key");
    if (storedSecret === DASHBOARD_SECRET) {
      setSecret(storedSecret);
      setAuthorized(true);
    } else if (secret === DASHBOARD_SECRET) {
      setAuthorized(true);
      localStorage.setItem("staff_secret_key", secret);
    }
  }, [secret]);

  const handlePortalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret === DASHBOARD_SECRET) {
      setAuthorized(true);
      localStorage.setItem("staff_secret_key", secret);
      router.push(`/portal?secret=${secret}`);
    } else {
      alert("Invalid Secret Key");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen bg-teal-50/30 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-teal-900/10 border border-teal-100"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center">
              <Lock size={40} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-text-main">Staff Portal</h1>
              <p className="text-text-muted">Enter the secret key to access internal tools.</p>
            </div>
            
            <form onSubmit={handlePortalLogin} className="w-full space-y-4">
              <input
                type="password"
                placeholder="Enter Secret Key"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border border-teal-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none text-center text-lg tracking-widest font-bold"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20"
              >
                Access Portal
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Event Management",
      description: "Create, edit, and manage upcoming and past interACT events.",
      icon: <LayoutDashboard size={24} />,
      link: `/events-dashboard?secret=${secret}`,
      color: "bg-blue-50 text-blue-600 border-blue-100",
      hoverColor: "hover:border-blue-300 hover:shadow-blue-900/5"
    },
    {
      title: "Facilitator Registration",
      description: "Register new instruments and facilitators to the global community.",
      icon: <UserPlus size={24} />,
      link: `/facilitators?secret=${secret}`,
      color: "bg-teal-50 text-teal-600 border-teal-100",
      hoverColor: "hover:border-teal-300 hover:shadow-teal-900/5"
    },
    {
      title: "Facilitator Guide",
      description: "Read the guidelines and best practices for conducting interACT sessions.",
      icon: <FileText size={24} />,
      link: `/facilitator-guide?secret=${secret}`,
      color: "bg-purple-50 text-purple-600 border-purple-100",
      hoverColor: "hover:border-purple-300 hover:shadow-purple-900/5"
    },
    {
      title: "Public Join Page",
      description: "View the page where students see and register for upcoming events.",
      icon: <Calendar size={24} />,
      link: "/join",
      color: "bg-orange-50 text-orange-600 border-orange-100",
      hoverColor: "hover:border-orange-300 hover:shadow-orange-900/5"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-teal-600">
              <ShieldCheck size={32} />
              <div>
                <h1 className="text-2xl font-bold text-text-main leading-none">interACT Hub</h1>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider font-semibold">Protected Internal Menu</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setAuthorized(false);
                setSecret("");
                localStorage.removeItem("staff_secret_key");
                router.push("/portal");
              }}
              className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
            >
              Sign Out
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
              transition={{ delay: idx * 0.1 }}
              onClick={() => router.push(item.link)}
              className={`group cursor-pointer p-8 bg-white rounded-[2.5rem] border ${item.color} shadow-sm transition-all duration-300 ${item.hoverColor} hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${item.color.split(' ')[0]} ${item.color.split(' ')[1]}`}>
                  {item.icon}
                </div>
                <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-text-muted opacity-50 text-xs">
          © {new Date().getFullYear()} interACT Global Portal. Authorized Access Only.
        </div>
      </main>
    </div>
  );
}
