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
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#fcfbf7] via-[#f7fbf9] to-[#f4faf8] py-16 md:py-24 overflow-hidden relative">
      {/* Decorative Drifting Glow Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-teal-100/30 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#E9C46A]/10 blur-[120px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            type="button"
            onClick={handleBackToPortal}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-700 bg-white/80 border border-teal-100/50 shadow-sm backdrop-blur-md px-4 py-2.5 rounded-2xl transition-all duration-300 hover:bg-white hover:border-teal-200 hover:-translate-y-0.5 hover:shadow active:scale-95 cursor-pointer"
            aria-label="Back to staff portal"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" aria-hidden />
            <span>Staff portal</span>
          </button>
        </motion.div>

        {/* Header Block */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-5 mb-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Users size={12} className="mr-2" aria-hidden />
              Facilitator Intake
            </div>
            
            <p className="text-xs text-text-muted max-w-md bg-teal-50/40 backdrop-blur-sm border border-teal-100/30 px-4 py-1.5 rounded-full">
              This form is public. Coordinators sign in at{" "}
              <button
                type="button"
                onClick={handleBackToPortal}
                className="text-teal-700 font-bold underline hover:text-teal-800 transition-colors"
              >
                /portal
              </button>{" "}
              to manage events.
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6 tracking-tight leading-[1.1] font-sans">
            Empower the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500">
              Next Generation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light mb-8">
            We are inviting dedicated instruments to facilitate the interACT journey, guiding youth to rediscover their core goodness.
          </p>

          <div className="inline-flex items-center justify-center p-1 bg-teal-50/70 border border-teal-100/50 rounded-2xl shadow-sm backdrop-blur-sm">
            <div className="px-4 py-2 bg-white rounded-xl shadow-xs text-xs font-bold uppercase tracking-wider text-teal-800">
              Registration Open
            </div>
            <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-600/70">
              Cycle 2025-26
            </div>
          </div>
        </motion.div>

        {/* Animated Multi-Step Form Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <FacilitatorForm />
        </motion.div>

        {/* Footer/Disclaimer section */}
        <motion.div
          className="mt-16 text-center text-text-muted text-xs space-y-2 opacity-50 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>By registering, you agree to join the global interACT facilitator community.</p>
          <p>For any questions, please contact our global coordination team.</p>
        </motion.div>
      </div>
    </div>
  );
}
