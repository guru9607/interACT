"use client";

import { motion } from "framer-motion";
import FacilitatorForm from "@/components/FacilitatorForm";
import { Users, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FacilitatorsPage() {
  const router = useRouter();

  const handleBackToPortal = () => {
    router.push("/portal");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cream to-white py-24 md:py-32 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-8 left-8 z-20">
          <button
            type="button"
            onClick={handleBackToPortal}
            className="flex items-center gap-2 text-teal-600 font-medium hover:bg-white/50 px-4 py-2 rounded-xl transition-all"
            aria-label="Back to staff portal"
          >
            <ArrowLeft size={18} aria-hidden />
            Staff portal
          </button>
        </div>
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-cream/50 rounded-full blur-3xl -z-10" />

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-200 text-teal-700 text-sm font-semibold shadow-sm">
              <Users size={14} className="mr-2" aria-hidden />
              Facilitator application
            </div>
            <p className="text-xs text-text-muted max-w-md">
              This form is public. Coordinators sign in at{" "}
              <button
                type="button"
                onClick={handleBackToPortal}
                className="text-teal-700 font-semibold underline"
              >
                /portal
              </button>{" "}
              to manage events.
            </p>
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold text-text-main mb-8 tracking-tighter leading-[1.1]">
            Empower the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Next Generation
            </span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light mb-10">
            We are inviting dedicated instruments to facilitate the interACT journey, guiding
            youth to rediscover their core goodness.
          </p>

          <div className="inline-flex items-center justify-center p-1 bg-teal-50 rounded-2xl border border-teal-100 mb-12">
            <div className="px-4 py-2 bg-white rounded-xl shadow-sm text-sm font-semibold text-teal-800">
              Registration Open
            </div>
            <div className="px-4 py-2 text-sm font-medium text-teal-600/70">
              Cycle 2025-26
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FacilitatorForm />
        </motion.div>

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
