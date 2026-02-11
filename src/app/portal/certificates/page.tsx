"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Award, 
  User, 
  Calendar as CalendarIcon, 
  MapPin, 
  ArrowLeft,
  Download,
  Loader2,
  CheckCircle2,
  FileText,
  Search,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { generateCertificate } from "@/lib/certificate";

const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

interface CertificateFormData {
  name: string;
  eventName: string;
  date: string;
  type: 'participation' | 'appreciation';
}

export default function CertificatesPortal() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <CertificatesContent />
    </Suspense>
  );
}

function CertificatesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const secret = searchParams.get("secret");
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [formData, setFormData] = useState<CertificateFormData>({
    name: "",
    eventName: "",
    date: new Date().toISOString().split('T')[0],
    type: 'participation',
  });

  useEffect(() => {
    const storedSecret = localStorage.getItem("staff_secret_key");
    if (secret === DASHBOARD_SECRET || storedSecret === DASHBOARD_SECRET) {
      setAuthorized(true);
      fetchEvents();
    } else {
      router.push("/portal");
    }
  }, [secret]);

  async function fetchEvents() {
    const { data } = await supabase
      .from("events")
      .select("id, title, date")
      .order("date", { ascending: false })
      .limit(20);
    if (data) setEvents(data);
  }

  const handleDownload = async () => {
    if (!formData.name || !formData.eventName) {
      alert("Please fill in both name and event name.");
      return;
    }
    
    setLoading(true);
    try {
      const certId = `INT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
      
      await generateCertificate(
        formData.name,
        formData.eventName,
        formattedDate,
        certId,
        formData.type
      );
    } catch (error) {
      console.error(error);
      alert("Failed to generate certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-teal-50/20 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-teal-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => router.push(`/portal?secret=${secret || localStorage.getItem("staff_secret_key")}`)}
                className="p-2 hover:bg-teal-50 text-teal-600 rounded-xl transition-all"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-text-main flex items-center gap-2">
                  <Award className="text-teal-600" size={24} />
                  Certificate Generator
                </h1>
                <p className="text-xs text-text-muted mt-0.5">Generate and download official interACT certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 border border-teal-100 shadow-xl shadow-teal-900/5 space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main flex items-center gap-2">
                    <User size={16} className="text-teal-600" />
                    Recipient Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter student's full name"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none text-lg font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main flex items-center gap-2">
                    <FileText size={16} className="text-teal-600" />
                    Event / Program Title
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      value={formData.eventName}
                      onChange={(e) => {
                        setFormData({ ...formData, eventName: e.target.value });
                        setSearchTerm(e.target.value);
                      }}
                      placeholder="e.g. Awareness Workshop"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none"
                    />
                    {searchTerm && events.length > 0 && !events.find(e => e.title === formData.eventName) && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-teal-100 shadow-2xl z-20 overflow-hidden max-h-48 overflow-y-auto">
                        {events
                          .filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))
                          .map(event => (
                            <button
                              key={event.id}
                              onClick={() => {
                                setFormData({ ...formData, eventName: event.title, date: event.date });
                                setSearchTerm("");
                              }}
                              className="w-full text-left px-6 py-3 hover:bg-teal-50 transition-colors text-sm border-b border-gray-50 last:border-0"
                            >
                              <div className="font-bold text-text-main">{event.title}</div>
                              <div className="text-[10px] text-text-muted">{event.date}</div>
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-main flex items-center gap-2">
                    <CalendarIcon size={16} className="text-teal-600" />
                    Presentation Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none"
                  />
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={loading || !formData.name || !formData.eventName}
                className={`w-full py-5 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl ${
                  loading 
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                  : "bg-teal-600 text-white hover:bg-teal-700 shadow-teal-600/20 hover:scale-[1.02] active:scale-95"
                }`}
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <Download size={24} />
                )}
                {loading ? "Generating Certificate..." : "Generate & Download"}
              </button>
            </div>

            <div className="p-6 bg-teal-900/5 rounded-3xl border border-teal-900/10">
              <h3 className="font-bold text-teal-800 text-sm mb-2">Pro Tip</h3>
              <p className="text-xs text-teal-700/70 leading-relaxed">
                Start typing the event name to see suggestions from recent events. Selecting a suggested event will automatically fill in the correct title and event date.
              </p>
            </div>
          </div>

          {/* Preview Side */}
          <div className="hidden lg:block space-y-4">
            <h2 className="text-sm font-bold text-text-main uppercase tracking-widest opacity-50 px-2">Live Preview</h2>
            <div className="bg-white rounded-[2rem] border border-teal-100 shadow-2xl overflow-hidden sticky top-32">
              <div className="aspect-[1.414/1] bg-[#fffef9] relative group">
                {/* Visual Placeholder for the SVG Preview */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all bg-[#fffef9]">
                  <div className={`w-full h-full border-4 rounded-lg flex flex-col p-8 transition-colors border-teal-600/20 bg-teal-50/10`}>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-8 rounded animate-pulse bg-gray-200" />
                    </div>
                    <div className="text-[1.5vw] font-serif tracking-[1vw] uppercase mb-2 text-gray-400">Certificate</div>
                    <div className={`text-[0.8vw] font-serif tracking-[0.4vw] mb-8 font-bold text-teal-500`}>
                      OF {formData.type.toUpperCase()}
                    </div>
                    
                    <div className="text-[0.6vw] italic mb-4 text-gray-400">This recognition is proudly presented to</div>
                    <div className="text-[2.5vw] font-serif font-bold mb-1 h-[4vw] text-gray-800">
                      {formData.name || "Recipient Name"}
                    </div>
                    <div className={`w-1/2 h-0.5 mx-auto mb-6 bg-teal-600/30`} />
                    <div className="text-[0.6vw] mb-4 text-gray-400">
                      {formData.type === 'participation' ? "for completion of the program" : "In recognition of outstanding contribution to"}
                    </div>
                    <div className={`text-[1.5vw] font-serif font-bold mb-8 text-teal-700`}>
                      {formData.eventName || "Program Title"}
                    </div>
                    <div className="flex justify-around mt-auto pt-8">
                      <div className="w-24 border-t border-gray-300 pt-2">
                        <div className="h-4 w-12 mx-auto rounded mb-1 bg-gray-100" />
                        <div className="text-[0.4vw] text-gray-300">Co-Founder</div>
                      </div>
                      <div className="w-24 border-t border-gray-300 pt-2">
                        <div className="h-4 w-12 mx-auto rounded mb-1 bg-gray-100" />
                        <div className="text-[0.4vw] text-gray-300">Co-Founder</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay for "Preview Only" */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="px-4 py-2 bg-text-main text-white text-xs font-bold rounded-full">Visual Reference Only</div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-center text-text-muted mt-4">
              * The final high-quality certificate will include official signatures and seals.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
