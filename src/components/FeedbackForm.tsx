"use client";

import { useState } from "react";
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
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ACTModule = "awareness" | "contemplation" | "transformative_silence" | "combined";

interface FeedbackFormProps {
  eventId: number;
  eventTitle: string;
  actModule: ACTModule;
  onClose: () => void;
}

const FEEDBACK_QUESTIONS = {
  awareness: [
    { id: "q1", type: "textarea", question: "What did you personally feel or realize about yourself during today's session?" },
    { id: "q2", type: "textarea", question: "Did any part of today's experience help you sense your inner peace, love, or goodness? If yes, what helped most?" },
    { id: "q3", type: "scale", question: "On a scale of 1–5, how connected did you feel with your true self today?" },
    { id: "q4", type: "textarea", question: "What could we do differently next time to help participants experience awareness more deeply?" },
  ],
  contemplation: [
    { id: "q1", type: "textarea", question: "Which inner quality (like peace, love, willpower, etc.) did you feel most connected to today?" },
    { id: "q2", type: "textarea", question: "Did the activities or reflections help you value yourself more deeply? How so?" },
    { id: "q3", type: "scale", question: "On a scale of 1–5, how much clarity did you gain about your own strengths or values?" },
    { id: "q4", type: "textarea", question: "What part of today's session felt most meaningful or could be improved for deeper self-reflection?" },
  ],
  transformative_silence: [
    { id: "q1", type: "textarea", question: "During the silence or reflection period, what did you notice within yourself?" },
    { id: "q2", type: "textarea", question: "Did you feel any sense of inner strength, clarity, or connection to something higher? Please describe briefly." },
    { id: "q3", type: "scale", question: "On a scale of 1–5, how empowering or transformative did today's experience feel for you personally?" },
    { id: "q4", type: "textarea", question: "How could we make the silence or reflection experience even deeper or more comfortable next time?" },
  ],
  combined: [
    { id: "q1", type: "textarea", question: "What did you feel or realize about yourself through today's experience?" },
    { id: "q2", type: "scale", question: "To what extent did you feel connected to your true self — beyond your roles or responsibilities?" },
    { id: "q3", type: "textarea", question: "Did any part of the workshop help you feel more stable, confident, or empowered from within? If yes, what helped the most?" },
    { id: "q4", type: "textarea", question: "How could we make this experience more meaningful or comfortable for participants next time?" },
  ],
};

const MODULE_LABELS = {
  awareness: "Awareness (Who am I?)",
  contemplation: "Contemplation (What are my qualities?)",
  transformative_silence: "Transformative Silence",
  combined: "Full interACT Workshop",
};

export default function FeedbackForm({ eventId, eventTitle, actModule, onClose }: FeedbackFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const questions = FEEDBACK_QUESTIONS[actModule] || FEEDBACK_QUESTIONS.combined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("event_feedback").insert([
        {
          event_id: eventId,
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          responses: responses,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
      setTimeout(onClose, 2500);
    } catch (err) {
      const error = err as Error;
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const isStep1Complete = firstName && lastName && email && phone;
  const isStep2Complete = Object.keys(responses).length === questions.length;

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[2.5rem] p-12 max-w-md w-full text-center shadow-2xl"
        >
          <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-teal-500" />
          </div>
          <h2 className="text-3xl font-bold text-text-main mb-4 italic">Thank You!</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Your heart-felt feedback has been received. It helps us grow together.
          </p>
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
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Sarah"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Smith"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                      />
                    </div>
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

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-text-muted ml-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-12 pr-5 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all text-sm font-medium"
                      />
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
