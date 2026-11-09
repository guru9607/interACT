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
  Award,
  ShieldCheck,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FEEDBACK_QUESTIONS, MODULE_LABELS, type ACTModule } from "@/lib/constants";
import { countries } from "@/lib/countries";

interface FeedbackFormProps {
  eventId: number;
  eventTitle: string;
  eventCountry?: string;
  actModule: ACTModule;
  sessionId?: string;
  shouldGenerateCertificate?: boolean;
  onClose: () => void;
}

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
      alert("Error submitting feedback: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const isStep1Complete = fullName && email && phone && country;
  const isStep2Complete = Object.keys(responses).length === questions.length;

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 font-sans">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 max-w-md w-full text-center shadow-lg relative space-y-6"
        >
          {/* Top SDG Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4C9F38] via-[#00AED9] to-[#19486A]" />

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-700">
            <CheckCircle2 size={32} />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0072CE]">
              DOC-IA-FB-SUBMITTED
            </span>
            <h2 className="text-xl font-serif font-bold text-[#0B2545]">
              Evaluation Successfully Recorded
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Your reflection has been submitted to the interACT impact measurement repository, supporting our programmatic alignment with UN SDG Targets 3.4, 16.1, and 17.17.
            </p>
          </div>
          
          <div className="space-y-3 pt-2">
            {shouldGenerateCertificate && (
              <button
                type="button"
                onClick={() => generateCertificate(
                  fullName.trim(),
                  eventTitle,
                  new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                  `CERT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
                )}
                className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Award size={16} />
                Download Serialized Certificate (PDF)
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded border border-slate-200 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 font-sans">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-lg border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col shadow-xl overflow-hidden relative"
      >
        {/* Top 3px SDG Ribbon */}
        <div className="h-1 w-full bg-gradient-to-r from-[#4C9F38] via-[#00AED9] to-[#19486A]" />

        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0072CE]">
                EVALUATION PROTOCOL · STEP {step} OF 2
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[10px] font-semibold text-slate-600 uppercase">
                {MODULE_LABELS[actModule]}
              </span>
            </div>
            <h2 className="text-lg font-serif font-bold text-[#0B2545]">
              {step === 1 ? "Participant Credential Verification" : "Experiential Reflection Survey"}
            </h2>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                      <span>Full Legal Name <span className="text-red-500">*</span></span>
                      {shouldGenerateCertificate && (
                        <span className="text-[10px] text-slate-400 font-normal">Printed on official certificate</span>
                      )}
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maria Gonzalez"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Official Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@example.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                    />
                  </div>

                  {/* Country & Phone */}
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-1 space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={country.name}
                        onChange={(e) => setCountry(countries.find(c => c.name === e.target.value) || countries[0])}
                        className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                      >
                        {countries.map(c => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <span className="inline-flex items-center px-3 bg-slate-100 border border-slate-300 rounded text-xs font-mono text-slate-600">
                          {country.code}
                        </span>
                        <input
                          required
                          type="tel"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9\s-]/g, ""))}
                          className="flex-1 px-3.5 py-2 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#0072CE] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Confidentiality Notice:</strong> Contact details are utilized solely for attendance validation, certificate verification, and aggregate educational reporting aligned with UN SDG Targets 3.4, 16.1, and 17.17.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {questions.map((q, idx) => (
                  <div key={q.id} className="space-y-2 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="flex gap-2.5 items-start">
                      <span className="shrink-0 w-5 h-5 rounded bg-slate-100 border border-slate-200 text-[#0B2545] flex items-center justify-center text-[10px] font-mono font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <label className="text-xs sm:text-sm font-semibold text-[#0B2545] leading-snug">
                        {q.question} <span className="text-red-500">*</span>
                      </label>
                    </div>

                    {q.type === "textarea" ? (
                      <textarea
                        required
                        rows={3}
                        value={responses[q.id] || ""}
                        onChange={(e) => setResponses({ ...responses, [q.id]: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none leading-relaxed"
                        placeholder="Provide your specific reflection or behavioral takeaway…"
                      />
                    ) : (
                      <div className="pt-1">
                        <div className="flex items-center gap-2 max-w-sm">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setResponses({ ...responses, [q.id]: num.toString() })}
                              className={`flex-1 h-9 rounded border text-xs font-bold font-mono transition-all cursor-pointer ${
                                responses[q.id] === num.toString()
                                  ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400"
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                        <div className="flex justify-between max-w-sm text-[10px] text-slate-400 pt-1 font-mono">
                          <span>1 = Developing</span>
                          <span>5 = Highly Effective</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-2 px-3.5 bg-white text-slate-700 text-xs font-semibold rounded border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft size={14} />
              Previous Step
            </button>
          ) : (
            <span className="text-[11px] text-slate-400 font-mono">Step 1 of 2</span>
          )}
          
          <button
            type="button"
            onClick={step === 1 ? () => setStep(2) : handleSubmit}
            disabled={loading || (step === 1 ? !isStep1Complete : !isStep2Complete)}
            className="py-2 px-4 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-xs ml-auto"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Submitting Evaluation…
              </>
            ) : (
              <>
                {step === 1 ? (
                  <>
                    Proceed to Reflection Survey
                    <ArrowRight size={14} />
                  </>
                ) : (
                  <>
                    Submit Reflection &amp; Complete Session
                    <CheckCircle2 size={14} />
                  </>
                )}
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
