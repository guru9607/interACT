"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Award,
  User,
  Calendar as CalendarIcon,
  ArrowLeft,
  Download,
  Loader2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { generateCertificate } from "@/lib/certificate";
import { useStaffAuth } from "@/hooks/useStaffAuth";
import Link from "next/link";

interface CertificateFormData {
  name: string;
  eventName: string;
  date: string;
  type: "participation" | "appreciation";
}

export default function CertificatesPortal() {
  const auth = useStaffAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState<CertificateFormData>({
    name: "",
    eventName: "",
    date: new Date().toISOString().split("T")[0],
    type: "participation",
  });

  useEffect(() => {
    if (auth.loading) return;
    if (!auth.userId) {
      router.replace("/portal/login");
      return;
    }
    if (!auth.isStaff) return;
    fetchEvents();
  }, [auth.loading, auth.userId, auth.isStaff, router]);

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

  if (auth.loading || !auth.userId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] text-slate-500 font-sans">
        <div className="w-8 h-8 border-2 border-slate-300 border-t-[#0072CE] rounded-full animate-spin mb-3" />
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-400">
          Loading Staff Credentials…
        </span>
      </div>
    );
  }

  if (!auth.isStaff) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6 text-slate-800 font-sans">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-lg p-8 text-center space-y-4 shadow-xs">
          <Award className="mx-auto text-slate-400" size={32} />
          <h1 className="text-lg font-serif font-bold text-[#0B2545]">
            Facilitator Accreditation Required
          </h1>
          <p className="text-slate-600 text-xs leading-relaxed">
            Generating serialized certificates requires verified facilitator or core-team access.
          </p>
          <button
            type="button"
            onClick={() => router.push("/portal")}
            className="px-4 py-2 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors"
          >
            Return to Operational Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        {/* Institutional Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.push("/portal")}
                className="p-1.5 hover:bg-slate-100 text-slate-600 rounded transition-colors"
                aria-label="Back to portal"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Link href="/portal" className="text-[#0072CE] hover:underline font-medium">
                    Portal
                  </Link>
                  <ChevronRight size={12} className="text-slate-300" />
                  <span className="font-semibold text-slate-700">Certificates</span>
                </div>
                <h1 className="text-lg font-serif font-bold text-[#0B2545] flex items-center gap-2">
                  <Award className="text-[#0072CE]" size={18} />
                  Official Certificate Generation Console
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded font-semibold">
                DOC-IA-CERT-SVC
              </span>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                Verified Facilitator
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Form Side (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0072CE] block">
                    Credential Parameters
                  </span>
                  <h2 className="text-base font-serif font-bold text-[#0B2545]">
                    Issue Authenticated Certificate
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Enter the participant or keynote speaker information to generate an official PDF credential.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Recipient Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <User size={14} className="text-[#0072CE]" />
                      {formData.type === 'participation' ? "Recipient Full Name (Student / Participant)" : "Keynote Speaker Full Name"}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={formData.type === 'participation' ? "e.g. Maria Gonzalez" : "e.g. Dr. Ayako Ichimaru"}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                    />
                  </div>

                  {/* Program / Event Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <FileText size={14} className="text-[#0072CE]" />
                      Associated Program / Gathering Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.eventName}
                        onChange={(e) => {
                          setFormData({ ...formData, eventName: e.target.value });
                          setSearchTerm(e.target.value);
                        }}
                        placeholder="e.g. Youth Leadership & Mindfulness Intensive"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                      />
                      {searchTerm && events.length > 0 && !events.find(e => e.title === formData.eventName) && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded border border-slate-200 shadow-md z-20 overflow-hidden max-h-48 overflow-y-auto divide-y divide-slate-100">
                          {events
                            .filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(event => (
                              <button
                                key={event.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, eventName: event.title, date: event.date });
                                  setSearchTerm("");
                                }}
                                className="w-full text-left px-4 py-2.5 hover:bg-slate-50 transition-colors text-xs"
                              >
                                <div className="font-semibold text-[#0B2545]">{event.title}</div>
                                <div className="text-[10px] font-mono text-slate-400">{event.date}</div>
                              </button>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Certificate Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#0072CE]" />
                      Certification Classification
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'participation' })}
                        className={`px-3.5 py-2.5 rounded border text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                          formData.type === 'participation'
                            ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <CheckCircle2 size={14} className={formData.type === 'participation' ? "opacity-100" : "opacity-0"} />
                        Participation
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'appreciation' })}
                        className={`px-3.5 py-2.5 rounded border text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                          formData.type === 'appreciation'
                            ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-white hover:border-slate-300"
                        }`}
                      >
                        <Award size={14} className={formData.type === 'appreciation' ? "opacity-100" : "opacity-0"} />
                        Keynote Appreciation
                      </button>
                    </div>
                  </div>

                  {/* Presentation Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <CalendarIcon size={14} className="text-[#0072CE]" />
                      Official Date of Issuance
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
                    />
                  </div>
                </div>

                {/* Submit / Generate Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={loading || !formData.name || !formData.eventName}
                  className={`w-full py-3 rounded font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors ${
                    loading || !formData.name || !formData.eventName
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                      : "bg-[#0B2545] hover:bg-[#0072CE] text-white shadow-xs"
                  }`}
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Download size={16} />
                  )}
                  {loading ? "Generating Encrypted PDF..." : "Generate & Download Official Certificate"}
                </button>
              </div>

              {/* Informational Guidance Callout */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                <Info size={16} className="text-[#0072CE] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-[#0B2545] block">Facilitator Best Practice</span>
                  <p className="leading-relaxed">
                    Typing an event title reveals recent events created in your dashboard. Selecting a suggested record automatically populates the title and date, ensuring certification records link to event metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Preview Side (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Live Certificate Rendering Preview
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Standard A4 Ratio</span>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden sticky top-20">
                <div className="aspect-[1.414/1] bg-[#FAF8F5] relative p-6 flex flex-col justify-between border-8 border-white">
                  {/* Inner Certificate Framing */}
                  <div className="w-full h-full border border-slate-300 p-5 flex flex-col justify-between text-center relative bg-white">
                    {/* Top Tri-Color Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4C9F38] via-[#00AED9] to-[#19486A]" />

                    {/* Header Seal */}
                    <div className="pt-2">
                      <div className="w-8 h-8 mx-auto rounded border border-slate-200 flex items-center justify-center p-1 bg-slate-50 mb-1">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-slate-400">
                        interACT Educational Initiative
                      </div>
                      <div className="text-xs font-serif font-bold tracking-wider uppercase text-[#0B2545] mt-0.5">
                        Certificate of {formData.type.toUpperCase()}
                      </div>
                    </div>

                    {/* Presentation Body */}
                    <div className="my-auto py-2 space-y-1">
                      <div className="text-[9px] italic text-slate-400">
                        {formData.type === 'participation' 
                          ? "This certificate is formally presented to" 
                          : "This honorary recognition is conferred upon"}
                      </div>
                      <div className="text-sm sm:text-base font-serif font-bold text-[#0B2545] truncate px-2">
                        {formData.name || (formData.type === 'participation' ? "Recipient Full Name" : "Keynote Speaker Name")}
                      </div>
                      <div className="w-24 h-px bg-slate-200 mx-auto my-1" />
                      <div className="text-[9px] text-slate-400">
                        {formData.type === 'participation' ? "for completion of the youth empowerment workshop" : "for distinguished keynote contributions to"}
                      </div>
                      <div className="text-xs font-serif font-semibold text-[#0072CE] truncate px-2">
                        {formData.eventName || "Program / Workshop Title"}
                      </div>
                    </div>

                    {/* Bottom Signature Line */}
                    <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[8px] text-slate-400 px-2">
                      <div>
                        <div className="font-mono text-slate-600 font-semibold">{formData.date}</div>
                        <div>Date of Issuance</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-slate-600 font-semibold">INT-{new Date().getFullYear()}-XXXX</div>
                        <div>Official Credential ID</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[10px] text-slate-400">
                  Preview renders illustrative layout. Downloaded PDF includes official vectorized executive seal.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>interACT Global Educational Initiative · Certification Verification Authority</p>
          <p className="text-[11px] text-slate-400">
            Compliant with UN DGC Web Design &amp; SDG Alignment Guidelines
          </p>
        </div>
      </footer>
    </div>
  );
}
