"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Image as ImageIcon,
  Send,
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  FileText,
  Info,
  Video,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { getSupabaseAnonRead } from "@/lib/supabase/anon-read";
import FeedbackForm from "@/components/FeedbackForm";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "@/lib/countries";
import { MODULE_LABELS, type ACTModule } from "@/lib/constants";

// Facilitator Type
type Facilitator = {
  name: string;
  role: string;
  bio: string;
  image_url: string;
};

type Session = {
  id: string;
  date: string;
  module: ACTModule;
  start_time?: string;
  end_time?: string;
  collect_feedback: boolean;
  generate_certificate: boolean;
};

// Event Data Type
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  country: string;
  region: "Global" | "Americas" | "Europe" | "Africa" | "Asia" | "Oceania";
  type: "Online" | "In-Person" | "Hybrid";
  status: "upcoming" | "completed";
  image_url: string | null;
  image_urls: string[] | null;
  act_module: string | null;
  description: string;
  agenda: string[];
  facilitators: Facilitator[];
  sessions: Session[];
  special_note: string | null;
};

export default function EventDetailPage() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [testimonials, setTestimonials] = useState<Record<string, unknown>[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [regCountry, setRegCountry] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const eventId = parseInt(params.id as string, 10);

  // Fetch event data from Supabase
  useEffect(() => {
    async function fetchEvent() {
      try {
        const ro = getSupabaseAnonRead();
        const { data: eventData, error: eventError } = await ro
          .from("events")
          .select("*")
          .eq("id", eventId)
          .single();

        if (eventError) throw eventError;
        if (!eventData) {
          setEvent(null);
          setLoading(false);
          return;
        }

        let facilitators: Facilitator[] = [];
        if (eventData.conductor_id && eventData.conductor_type) {
          try {
            if (eventData.conductor_type === "team") {
              const { data: teamConductor } = await ro
                .from("teams")
                .select("name, role, bio, image_url")
                .eq("id", eventData.conductor_id.toString())
                .single();

              if (teamConductor) {
                facilitators = [
                  {
                    name: teamConductor.name,
                    role: teamConductor.role || "Core Team Member",
                    bio: teamConductor.bio || "Dedicated member of the interACT core team.",
                    image_url: teamConductor.image_url || "",
                  },
                ];
              }
            } else if (eventData.conductor_type === "facilitator") {
              const { data: facConductor } = await ro
                .from("facilitators")
                .select("full_name, profession, country")
                .eq("id", eventData.conductor_id.toString())
                .single();

              if (facConductor) {
                facilitators = [
                  {
                    name: facConductor.full_name,
                    role: facConductor.profession || "Certified Facilitator",
                    bio: facConductor.country
                      ? `Certified interACT Facilitator sharing the journey from ${facConductor.country}.`
                      : "Certified interACT Facilitator.",
                    image_url: "",
                  },
                ];
              }
            }
          } catch (fetchErr) {
            console.error("Error fetching conductor details:", fetchErr);
          }
        }

        setEvent({
          ...eventData,
          facilitators: facilitators,
          sessions: Array.isArray(eventData.sessions) ? eventData.sessions : [],
        });

        // Testimonials
        const { data: globalFeedback, error: testimonialError } = await ro.rpc(
          "get_event_public_testimonials",
          { p_event_id: eventId }
        );

        if (testimonialError) {
          console.error("Error fetching testimonials:", testimonialError);
        }

        if (globalFeedback && Array.isArray(globalFeedback)) {
          const feedbackToShow = globalFeedback.filter((feedback) => {
            const responses = (feedback.responses as Record<string, unknown>) || {};
            return Object.values(responses).some(
              (val) => val == 5 || val == 4 || val === "5" || val === "4"
            );
          });
          setTestimonials(feedbackToShow.slice(0, 4));
        }
        if (eventData.country) {
          setRegCountry(eventData.country);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        setError("Failed to load event");
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  const generateEventCalendarFile = () => {
    if (!event || !event.sessions || event.sessions.length === 0) return;
    const firstSession = event.sessions[0];
    const eventDate = new Date(firstSession.date);
    const [startH, startM] = (firstSession.start_time || "10:00").split(":").map(Number);
    eventDate.setHours(startH, startM, 0);
    const [endH, endM] = (firstSession.end_time || "12:00").split(":").map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    const formatICalDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const sTime = formatICalDate(eventDate);
    const eTime = formatICalDate(endDate);

    const icalContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//interACT Program//EN\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nUID:interact-event-${event.id}-${Date.now()}@theinteract.org\nDTSTAMP:${formatICalDate(new Date())}\nDTSTART:${sTime}\nDTEND:${eTime}\nSUMMARY:${event.title}\nDESCRIPTION:${event.description || "Join us for this transformative interACT event"}\nLOCATION:${event.location}${event.country ? ", " + event.country : ""}\nSTATUS:CONFIRMED\nSEQUENCE:0\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([icalContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `interACT-${event.title.replace(/\s+/g, "-")}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const addToGoogleCalendar = () => {
    if (!event || !event.sessions || event.sessions.length === 0) return;
    const firstSession = event.sessions[0];
    const eventDate = new Date(firstSession.date);
    const [startH, startM] = (firstSession.start_time || "10:00").split(":").map(Number);
    eventDate.setHours(startH, startM, 0);
    const [endH, endM] = (firstSession.end_time || "12:00").split(":").map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    const formatGoogleDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").split(".")[0];
    const sTime = formatGoogleDate(eventDate);
    const eTime = formatGoogleDate(endDate);
    window.open(
      `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${sTime}/${eTime}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description || "")}`,
      "_blank"
    );
  };

  const addToOutlookCalendar = () => {
    if (!event || !event.sessions || event.sessions.length === 0) return;
    const firstSession = event.sessions[0];
    const eventDate = new Date(firstSession.date);
    const [startH, startM] = (firstSession.start_time || "10:00").split(":").map(Number);
    eventDate.setHours(startH, startM, 0);
    const [endH, endM] = (firstSession.end_time || "12:00").split(":").map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    window.open(
      `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${eventDate.toISOString()}&enddt=${endDate.toISOString()}&location=${encodeURIComponent(event.location)}&body=${encodeURIComponent(event.description || "")}`,
      "_blank"
    );
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (time: string) => {
    if (!time) return "10:00 AM";
    const [hours, minutes] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const countryMatch = countries.find((c) => c.name === regCountry);
    const fullPhone = countryMatch ? `${countryMatch.code} ${regPhone}`.trim() : regPhone;

    const registrationData = {
      event_id: eventId,
      full_name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: fullPhone || null,
      country: regCountry,
    };

    try {
      const { error: supabaseError } = await supabase.from("registrations").insert([registrationData]);
      if (supabaseError) throw supabaseError;
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit registration.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0072CE] border-t-transparent mx-auto" />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Loading Event Dossier...
          </p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-center px-4">
        <div className="max-w-md space-y-4">
          <Info size={32} className="text-slate-400 mx-auto" />
          <h1 className="text-2xl font-serif font-bold text-[#0B2545]">Event Record Not Found</h1>
          <p className="text-sm text-slate-600">The requested event dossier could not be located in the registry.</p>
          <Link
            href="/join"
            className="inline-flex items-center text-xs font-semibold text-[#0072CE] hover:underline"
          >
            ← Return to Event Registry
          </Link>
        </div>
      </div>
    );
  }

  // Calculate status
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const sessions = event.sessions || [];
  const sessionDates = sessions.map((s) => new Date(s.date).getTime());
  const lastDate = sessions.length > 0 ? new Date(Math.max(...sessionDates)) : new Date(event.date);
  const firstDate = sessions.length > 0 ? new Date(Math.min(...sessionDates)) : new Date(event.date);
  lastDate.setHours(0, 0, 0, 0);
  firstDate.setHours(0, 0, 0, 0);

  const isCompleted = event.status === "completed" || lastDate < now;
  const isOngoing = !isCompleted && firstDate <= now && lastDate >= now;

  const images = Array.isArray(event.image_urls)
    ? event.image_urls
    : event.image_url
    ? [event.image_url]
    : [];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & EVENT CLASSIFICATION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
          
          <div className="flex items-center justify-between gap-4 mb-4">
            <Link
              href="/join"
              className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-[#0072CE] transition-colors"
            >
              <ArrowLeft size={14} className="mr-1.5" /> Back to Workshops
            </Link>
            <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
              DOSSIER: IA-EV-{event.id}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                {isCompleted ? (
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                    Past Workshop
                  </span>
                ) : isOngoing ? (
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    Ongoing Session
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#0058A3] border border-blue-200">
                    Upcoming Workshop
                  </span>
                )}

                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  {event.type}
                </span>

                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Globe size={13} className="text-slate-400" />
                  {event.region} Region
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-snug">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#0072CE]" />
                  <span className="font-semibold text-slate-800">
                    {event.sessions && event.sessions.length > 1
                      ? `${formatDate(event.sessions[0].date)} — ${formatDate(event.sessions[event.sessions.length - 1].date)}`
                      : formatDate(event.sessions[0]?.date || event.date)}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {event.type === "Online" || event.region === "Global" ? (
                    <>
                      <Video size={14} className="text-sky-600 shrink-0" />
                      <span className="font-semibold text-slate-800">Online · Live on Zoom</span>
                    </>
                  ) : (
                    <>
                      <MapPin size={14} className="text-[#0072CE] shrink-0" />
                      <span>{event.location}, {event.country}</span>
                    </>
                  )}
                </div>
              </div>

              {event.facilitators && event.facilitators.length > 0 && (
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-slate-300 bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center">
                    {event.facilitators[0].image_url ? (
                      <img
                        src={event.facilitators[0].image_url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users size={18} className="text-slate-500" />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      {event.type === "Online" || event.region === "Global" ? "Featured Speaker / Host" : "Facilitator / Lead"}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 leading-tight block">
                      {event.facilitators[0].name}
                    </span>
                    <span className="text-xs text-slate-500 block">
                      {event.facilitators[0].role}
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Right: Photographic Document Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-16/10 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                {images.length > 0 ? (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        src={images[activeImageIndex % images.length]}
                        alt={event.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>

                    {images.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImageIndex(
                              (prev) => (prev - 1 + images.length) % images.length
                            )
                          }
                          className="w-7 h-7 rounded bg-black/60 text-white flex items-center justify-center pointer-events-auto hover:bg-black/80 transition-colors"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImageIndex((prev) => (prev + 1) % images.length)
                          }
                          className="w-7 h-7 rounded bg-black/60 text-white flex items-center justify-center pointer-events-auto hover:bg-black/80 transition-colors"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <ImageIcon size={40} />
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. WORKSHOP CURRICULUM & REGISTRATION ASIDE
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Column (8 cols): Description & Session Arc */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Description */}
            <section className="space-y-3">
              <div className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                Workshop Overview
              </div>
              <h2 className="text-xl font-serif font-bold text-[#0B2545]">
                Curriculum Scope &amp; Pedagogical Intent
              </h2>
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                {event.description}
              </div>
            </section>

            {/* Sessions Roadmap */}
            <section className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#0B2545]">
                    Scheduled Session Arc
                  </h3>
                  <p className="text-xs text-slate-500">
                    Progressive modules deployed across this workshop
                  </p>
                </div>
                {event.sessions.length > 0 && (
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                    {event.sessions.length} Session{event.sessions.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {event.sessions.map((session, idx) => {
                  const sessionDate = new Date(session.date);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  sessionDate.setHours(0, 0, 0, 0);

                  const isSessionInPastOrToday = sessionDate <= today;
                  const canFeedback = session.collect_feedback && isSessionInPastOrToday;

                  // Determine SDG cue for the module
                  const modKey = (session.module || "").toLowerCase();
                  const isModA = modKey.includes("awareness");
                  const isModC = modKey.includes("contemplation");
                  const isModT = modKey.includes("silence");

                  return (
                    <div
                      key={session.id}
                      className="border border-slate-200 rounded-lg p-4 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded text-white font-bold text-xs flex items-center justify-center shrink-0 ${
                            isModA
                              ? "bg-[#4C9F38]"
                              : isModC
                              ? "bg-[#00AED9]"
                              : isModT
                              ? "bg-[#19486A]"
                              : "bg-[#0072CE]"
                          }`}
                        >
                          {idx + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                              {formatDate(session.date)}
                            </span>
                            {isModA && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-[#4C9F38] border border-emerald-200">
                                SDG 3.4
                              </span>
                            )}
                            {isModC && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-sky-50 text-[#00689D] border border-sky-200">
                                SDG 16.1
                              </span>
                            )}
                            {isModT && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-[#19486A] border border-slate-300">
                                SDG 17.17
                              </span>
                            )}
                          </div>

                          <h4 className="text-base font-semibold text-slate-900 leading-snug">
                            {MODULE_LABELS[session.module as keyof typeof MODULE_LABELS] || session.module}
                          </h4>

                          {(session.start_time || session.end_time) && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                              <Clock size={12} className="text-slate-400" />
                              <span>
                                {formatTime(session.start_time || "10:00")} — {formatTime(session.end_time || "12:00")}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex items-center justify-end">
                        {canFeedback ? (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveSession(session);
                              setShowFeedbackForm(true);
                            }}
                            className="px-3.5 py-1.5 bg-[#0072CE] hover:bg-[#0058A3] text-white rounded text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                          >
                            <Send size={12} /> Submit Feedback
                          </button>
                        ) : !session.collect_feedback ? (
                          <span className="text-[11px] text-slate-400 font-medium">
                            No feedback required
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-medium">
                            Feedback opens after session
                          </span>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            </section>

            {/* Testimonials */}
            {testimonials && testimonials.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#0B2545]">
                    Participant Evidence &amp; Reflections
                  </h3>
                  <span className="text-xs text-slate-500">Verified participant submissions</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {testimonials.map((t, i) => {
                    const responses = (t.responses as Record<string, string>) || {};
                    const feedbackText = Object.values(responses).find(
                      (v) => v && v.length > 10 && isNaN(Number(v))
                    );
                    return (
                      <div
                        key={i}
                        className="bg-[#F8F9FA] border border-slate-200 rounded p-4 flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center gap-1 text-amber-500 mb-2">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="text-xs text-slate-700 italic leading-relaxed">
                            &ldquo;{feedbackText || "A deeply grounding cognitive session providing clear tools for personal resilience and peace."}&rdquo;
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500">
                          <strong className="text-slate-800 font-semibold block">
                            {t.full_name as string || t.first_name as string || "Anonymous Participant"}
                          </strong>
                          <span>Verified Cohort Participant</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

          </div>

          {/* Right Column (5 cols): Official Registration Box */}
          <aside className="lg:col-span-5">
            <div className="border border-slate-200 rounded-lg p-6 bg-[#F8F9FA] shadow-xs space-y-5 sticky top-24">
              
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block mb-0.5">
                  Institutional Participation
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0B2545]">
                  {isCompleted
                    ? "Workshop Concluded"
                    : isOngoing
                    ? "Workshop in Progress"
                    : "Register for Workshop"}
                </h3>
              </div>

              {isCompleted ? (
                <div className="space-y-4 text-xs text-slate-600">
                  <p className="leading-relaxed">
                    This workshop has completed its scheduled curriculum delivery. Materials and certificates have been issued to verified attendees.
                  </p>
                  <Link
                    href="/join"
                    className="block w-full text-center py-2.5 bg-[#0B2545] hover:bg-slate-800 text-white font-semibold rounded text-xs transition-colors"
                  >
                    Explore Other Upcoming Workshops
                  </Link>
                </div>
              ) : submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-[#4C9F38] border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-900">
                      Registration Confirmed
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Your participation is logged. Program instructions will be delivered to your email.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                      className="w-full py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white text-xs font-semibold rounded flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <Calendar size={14} /> Add to Calendar <ChevronDown size={14} />
                    </button>

                    {showCalendarMenu && (
                      <div className="bg-white border border-slate-200 rounded p-1.5 shadow-sm space-y-1 text-left text-xs">
                        <button
                          type="button"
                          onClick={addToGoogleCalendar}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 rounded text-slate-700"
                        >
                          Google Calendar
                        </button>
                        <button
                          type="button"
                          onClick={addToOutlookCalendar}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 rounded text-slate-700"
                        >
                          Outlook Calendar
                        </button>
                        <button
                          type="button"
                          onClick={generateEventCalendarFile}
                          className="w-full text-left px-3 py-1.5 hover:bg-slate-50 rounded text-[#0072CE] font-semibold"
                        >
                          Download .ics File
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 rounded text-xs">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. name@university.edu"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Country of Residence *
                    </label>
                    <select
                      name="country"
                      required
                      value={regCountry}
                      onChange={(e) => {
                        setRegCountry(e.target.value);
                        setRegPhone("");
                      }}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE]"
                    >
                      <option value="">Select Country</option>
                      {countries.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="flex border border-slate-300 rounded bg-white overflow-hidden focus-within:border-[#0072CE] focus-within:ring-1 focus-within:ring-[#0072CE]">
                      <span className="px-2.5 py-2 bg-slate-100 text-slate-600 text-xs font-mono border-r border-slate-300 flex items-center">
                        {countries.find((c) => c.name === regCountry)?.code || "+"}
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="Mobile number"
                        className="flex-1 px-3 py-2 text-xs bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-normal pt-1">
                    Free participation. By registering, you agree to receive session reminders and contemplation materials under our non-profit civil society charter.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white text-xs font-semibold rounded transition-colors shadow-xs"
                  >
                    Submit Participation Registration
                  </button>
                </form>
              )}

            </div>
          </aside>

        </div>
      </div>

      {showFeedbackForm && activeSession && (
        <FeedbackForm
          eventId={event.id}
          eventTitle={event.title}
          eventCountry={event.country}
          actModule={activeSession.module}
          sessionId={activeSession.id}
          shouldGenerateCertificate={activeSession.generate_certificate}
          onClose={() => setShowFeedbackForm(false)}
        />
      )}

    </div>
  );
}
