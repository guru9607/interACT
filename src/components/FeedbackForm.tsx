"use client";

import { useState } from "react";
import { generateCertificate } from "@/lib/certificate";
import { supabase } from "@/lib/supabase";
import { 
  X, 
  Loader2, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  Heart,
  Sparkles,
  MessageSquare,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { FEEDBACK_QUESTIONS, MODULE_LABELS, type ACTModule } from "@/lib/constants";

interface FeedbackFormProps {
  eventId: number;
  eventTitle: string;
  eventCountry?: string;
  actModule: ACTModule;
  sessionId?: string;
  shouldGenerateCertificate?: boolean;
  onClose: () => void;
}

import { countries } from "@/lib/countries";

export default function FeedbackForm({ 
  eventId, 
  eventTitle, 
  eventCountry,
  actModule, 
  sessionId, 
  shouldGenerateCertificate, 
  onClose 
}: FeedbackFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(
    countries.find(c => c.name === eventCountry) || countries[0]
  );
  const [phone, setPhone] = useState("");

  const questions = FEEDBACK_QUESTIONS[actModule] || FEEDBACK_QUESTIONS.combined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sanitize phone: ensure single space between code and number
      const fullPhoneNumber = `${country.code} ${phone.trim()}`.replace(/\s+/g, ' ');
      
      const { error } = await supabase.from("event_feedback").insert([
        {
          event_id: eventId,
          session_id: sessionId,
          full_name: fullName,
          email: email,
          country: country.name,
          phone: fullPhoneNumber,
          responses: responses,
        },
      ]);

      if (error) throw error;
      
      setSubmitted(true);
    } catch (err) {
      const error = err as Error;
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const isStep1Complete = fullName && email && phone && country;
  const isStep2Complete = Object.keys(responses).length === questions.length;

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[2.5rem] p-12 max-w-md w-full text-center shadow-2xl relative"
        >
          {/* Close Icon for Success Screen */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 text-text-muted rounded-full transition-all group hover:rotate-90 cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-teal-500" />
          </div>
          <h2 className="text-3xl font-bold text-text-main mb-4 italic">Thank You!</h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">
            Your heart-felt feedback has been received. It helps us grow together.
          </p>
          
          <div className="space-y-4">
            {shouldGenerateCertificate && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => generateCertificate(
                  fullName.trim(),
                  eventTitle,
                  new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                  `CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
                )}
                className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all cursor-pointer"
              >
                <Award size={24} />
                Download Certificate
              </motion.button>
            )}

            <button
              onClick={onClose}
              className="w-full py-4 bg-gray-50 text-text-muted font-bold rounded-2xl hover:bg-gray-100 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 overflow-hidden">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 flex">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: step === 1 ? "50%" : "100%" }}
            className="h-full bg-linear-to-r from-primary to-teal-400"
          />
        </div>

        {/* Header */}
        <div className="p-8 pt-10 flex items-start justify-between border-b border-gray-50 bg-linear-to-b from-teal-50/20 to-transparent">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold rounded-full">
                Step {step} of 2
              </span>
              <span className="text-text-muted text-[10px] uppercase tracking-widest font-medium">
                • {MODULE_LABELS[actModule]}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-text-main tracking-tight italic">
              {step === 1 ? "Start your journey" : "Share your experience"}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-gray-50 hover:bg-gray-100 text-text-muted rounded-full transition-all group hover:rotate-90 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-text-main font-semibold">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                      <User size={18} />
                    </div>
                    <h3>Personal Details</h3>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                      Full Name <span className="text-red-500">*</span>
                      {shouldGenerateCertificate && (
                        <span className="ml-2 lowercase font-normal opacity-60">(as you want it on your certificate)</span>
                      )}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Elizabeth Johnson"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        required
                        type="email"
                        placeholder="sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1 space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={country.name}
                        onChange={(e) => setCountry(countries.find(c => c.name === e.target.value) || countries[0])}
                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium appearance-none"
                      >
                        {countries.map(c => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-primary font-bold text-sm pointer-events-none">
                          {country.code}
                        </div>
                        <input
                          required
                          type="tel"
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9\s-]/g, ""))}
                          className="w-full pl-16 pr-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-teal-50/30 rounded-4xl border border-teal-50">
                  <p className="text-xs text-teal-700 leading-relaxed font-medium">
                    ✨ Your details are safe with us. We use this information only to keep you updated about future workshops and your participation history.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-10"
              >
                {questions.map((q, idx) => (
                  <div key={q.id} className="space-y-5">
                    <div className="flex gap-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center text-xs font-bold border border-primary/10">
                        {idx + 1}
                      </span>
                      <label className="text-base font-bold text-text-main leading-snug pt-1">
                        {q.question} <span className="text-red-500">*</span>
                      </label>
                    </div>

                    {q.type === "textarea" ? (
                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-5 text-gray-300" size={20} />
                        <textarea
                          required
                          rows={4}
                          value={responses[q.id] || ""}
                          onChange={(e) => setResponses({ ...responses, [q.id]: e.target.value })}
                          className="w-full pl-14 pr-5 py-5 bg-gray-50/50 border border-gray-100 rounded-4xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm leading-relaxed"
                          placeholder="Type your reflection here..."
                        />
                      </div>
                    ) : (
                      <div className="flex gap-3 justify-between max-w-sm mx-auto sm:mx-0">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setResponses({ ...responses, [q.id]: num.toString() })}
                            className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all group border-2 cursor-pointer ${
                              responses[q.id] === num.toString()
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                                : "bg-white text-text-muted border-gray-100 hover:border-primary/50 hover:bg-teal-50/30"
                            }`}
                          >
                            <span className="text-lg font-bold">{num}</span>
                            {num === 5 && <Sparkles size={10} className={responses[q.id] === '5' ? "text-white" : "text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"} />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-50 flex gap-4 bg-gray-50/30">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 bg-white text-text-main font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          )}
          
          <button
            onClick={step === 1 ? () => setStep(2) : handleSubmit}
            disabled={loading || (step === 1 ? !isStep1Complete : !isStep2Complete)}
            className="flex-2 py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale cursor-pointer"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                {step === 1 ? (
                  <>Continue <ArrowRight size={18} /></>
                ) : (
                  <>Submit My Journey <Heart size={18} className="fill-white" /></>
                )}
              </>
            )}
          </button>
        </div>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
