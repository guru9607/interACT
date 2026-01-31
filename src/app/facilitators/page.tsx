"use client";

import { motion } from "framer-motion";
import FacilitatorForm from "@/components/FacilitatorForm";
import { Lock, ShieldCheck, ArrowLeft, AlertCircle } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

export default function FacilitatorsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <FacilitatorContent />
    </Suspense>
  );
}

function FacilitatorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const secret = searchParams.get("secret");
  const [authorized, setAuthorized] = useState(true); // TEMPORARY: Allow public access

  useEffect(() => {
    const storedSecret = localStorage.getItem("staff_secret_key");
    // We still check just to allow 'Back to Hub' button to work correctly with secret if present
    // but the page is currently open.
    if (secret === DASHBOARD_SECRET || storedSecret === DASHBOARD_SECRET) {
      setAuthorized(true);
    }
  }, [secret]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold text-text-main">Access Denied</h1>
          <p className="text-text-muted">
            This is a protected page. Please use the correct link provided to facilitators.
          </p>
          <button 
            onClick={() => router.push('/portal')}
            className="text-primary font-medium hover:underline"
          >
            Go to Staff Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cream to-white py-24 md:py-32 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Navigation */}
        <div className="absolute top-8 left-8 z-20">
          <button 
            onClick={() => router.push(`/portal?secret=${secret}`)}
            className="flex items-center gap-2 text-teal-600 font-medium hover:bg-white/50 px-4 py-2 rounded-xl transition-all"
          >
            <ArrowLeft size={18} />
            Back to Hub
          </button>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-cream/50 rounded-full blur-3xl -z-10"></div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-200 text-teal-700 text-sm font-semibold shadow-sm">
              <Lock size={14} className="mr-2" />
              Secure Facilitator Portal
            </div>
            <div className="px-6 py-2 bg-cream/80 backdrop-blur-sm border border-teal-100 rounded-2xl flex items-center gap-2">
              <ShieldCheck size={16} className="text-teal-600" />
              <span className="text-xs text-text-main font-medium">Internal Portal for BK Instruments</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-text-main mb-8 tracking-tighter leading-[1.1]">
            Empower the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Next Generation
            </span>
          </h1>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light mb-10">
            We are inviting dedicated instruments to facilitate the interACT journey, 
            guiding youth to rediscover their core goodness.
          </p>

          <div className="inline-flex items-center justify-center p-1 bg-teal-50 rounded-2xl border border-teal-100 mb-12">
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm text-sm font-bold text-teal-800">
              Registration Open
            </div>
            <div className="px-4 py-2 text-sm font-medium text-teal-600/70">
              Cycle 2025-26
            </div>
          </div>
        </motion.div>


        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FacilitatorForm />
        </motion.div>
        
        {/* Footer info for facilitators */}
        <motion.div 
          className="mt-16 text-center text-text-muted text-sm space-y-2 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>By registering, you agree to join the global interACT facilitator community.</p>
          <p>For any questions, please contact our global coordination team.</p>
        </motion.div>
      </div>
    </div>
  );
}
