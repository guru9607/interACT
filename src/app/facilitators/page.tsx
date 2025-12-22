"use client";

import { motion } from "framer-motion";
import FacilitatorForm from "@/components/FacilitatorForm";
import { Sparkles } from "lucide-react";

export default function FacilitatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-cream to-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-20 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-cream/50 rounded-full blur-3xl -z-10"></div>

        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-100 text-teal-800 text-sm font-medium mb-6 shadow-sm">
            <Sparkles size={14} className="mr-2 text-teal-600" />
            Facilitator Program
          </div>
          
          <div className="mb-8 p-3 bg-teal-50/50 border border-teal-100/50 rounded-2xl max-w-md mx-auto">
            <p className="text-xs text-teal-800/70 font-medium">
              Note: This is a private registration portal for BK members only. 
              This page is not linked on the public website.
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-text-main mb-6 tracking-tight leading-tight">
            Join Us in This <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Transformative Journey
            </span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            We are looking for dedicated souls to help facilitate our interACT workshops. 
            If you are passionate about youth empowerment and spiritual growth, 
            we invite you to register below.
          </p>
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
