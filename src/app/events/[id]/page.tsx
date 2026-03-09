"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle2, Globe, Image as ImageIcon, Send, Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
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
  region: "Americas" | "Europe" | "Africa" | "Asia" | "Oceania";
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
  const [, setError] = useState<string | null>(null);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [regCountry, setRegCountry] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const eventId = parseInt(params.id as string);

  // Fetch event data from Supabase
  useEffect(() => {
    async function fetchEvent() {
      try {
        const { data: eventData, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('id', eventId)
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
            if (eventData.conductor_type === 'team') {
              const { data: teamConductor } = await supabase
                .from('teams')
                .select('name, role, bio, image_url')
                .eq('id', eventData.conductor_id.toString())
                .single();
              
              if (teamConductor) {
                facilitators = [{
                  name: teamConductor.name,
                  role: teamConductor.role || "Core Team Member",
                  bio: teamConductor.bio || "Dedicated member of the interACT core team.",
                  image_url: teamConductor.image_url || ""
                }];
              }
            } else if (eventData.conductor_type === 'facilitator') {
              const { data: facConductor } = await supabase
                .from('facilitators')
                .select('full_name, profession, country')
                .eq('id', eventData.conductor_id.toString())
                .single();
              
              if (facConductor) {
                facilitators = [{
                  name: facConductor.full_name,
                  role: facConductor.profession || "Certified Facilitator",
                  bio: facConductor.country ? `Certified interACT Facilitator sharing the journey from ${facConductor.country}.` : "Certified interACT Facilitator.",
                  image_url: "" 
                }];
              }
            }
          } catch (fetchErr) {
            console.error("Error fetching conductor details:", fetchErr);
          }
        }

        setEvent({
          ...eventData,
          facilitators: facilitators,
          sessions: Array.isArray(eventData.sessions) ? eventData.sessions : []
        });

        // Testimonials (Global for this event)
        const { data: globalFeedback } = await supabase
          .from('event_feedback')
          .select('responses, full_name, first_name')
          .eq('event_id', eventId);
        
        if (globalFeedback) {
          const feedbackToShow = globalFeedback.filter(feedback => {
            const responses = (feedback.responses as Record<string, unknown>) || {};
            // Robust check for 4 or 5 star ratings (handle both string and number)
            return Object.values(responses).some(val => 
              val == 5 || val == 4 || val === '5' || val === '4'
            );
          });
          setTestimonials(feedbackToShow.slice(0, 4));
        }
        if (eventData.country) {
          setRegCountry(eventData.country);
        }

      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event');
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
    const [startH, startM] = (firstSession.start_time || "10:00").split(':').map(Number);
    eventDate.setHours(startH, startM, 0); 
    const [endH, endM] = (firstSession.end_time || "12:00").split(':').map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    const formatICalDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const sTime = formatICalDate(eventDate);
    const eTime = formatICalDate(endDate);

    const icalContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//interACT Program//EN\nCALSCALE:GREGORIAN\nBEGIN:VEVENT\nUID:interact-event-${event.id}-${Date.now()}@brahmakumaris.org\nDTSTAMP:${formatICalDate(new Date())}\nDTSTART:${sTime}\nDTEND:${eTime}\nSUMMARY:${event.title}\nDESCRIPTION:${event.description || 'Join us for this transformative interACT event'}\nLOCATION:${event.location}${event.country ? ', ' + event.country : ''}\nSTATUS:CONFIRMED\nSEQUENCE:0\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `interACT-${event.title.replace(/\s+/g, '-')}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const addToGoogleCalendar = () => {
    if (!event || !event.sessions || event.sessions.length === 0) return;
    const firstSession = event.sessions[0];
    const eventDate = new Date(firstSession.date);
    const [startH, startM] = (firstSession.start_time || "10:00").split(':').map(Number);
    eventDate.setHours(startH, startM, 0);
    const [endH, endM] = (firstSession.end_time || "12:00").split(':').map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    const formatGoogleDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0];
    const sTime = formatGoogleDate(eventDate);
    const eTime = formatGoogleDate(endDate);
    window.open(`https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${sTime}/${eTime}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description || '')}`, '_blank');
  };

  const addToOutlookCalendar = () => {
    if (!event || !event.sessions || event.sessions.length === 0) return;
    const firstSession = event.sessions[0];
    const eventDate = new Date(firstSession.date);
    const [startH, startM] = (firstSession.start_time || "10:00").split(':').map(Number);
    eventDate.setHours(startH, startM, 0);
    const [endH, endM] = (firstSession.end_time || "12:00").split(':').map(Number);
    const endDate = new Date(firstSession.date);
    endDate.setHours(endH, endM, 0);
    window.open(`https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${eventDate.toISOString()}&enddt=${endDate.toISOString()}&location=${encodeURIComponent(event.location)}&body=${encodeURIComponent(event.description || '')}`, '_blank');
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatTime = (time: string) => {
    if (!time) return "10:00 AM";
    const [hours, minutes] = time.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const countryMatch = countries.find(c => c.name === regCountry);
    const fullPhone = countryMatch ? `${countryMatch.code} ${regPhone}`.trim() : regPhone;

    const registrationData = {
      event_id: eventId,
      full_name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: fullPhone || null,
      country: regCountry,
    };

    try {
      const { error: supabaseError } = await supabase.from('registrations').insert([registrationData]);
      if (supabaseError) throw supabaseError;
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to submit registration.');
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div></div>;
  if (!event) return <div className="min-h-screen flex items-center justify-center text-center"><h1 className="text-2xl font-bold mb-4">Event Not Found</h1><Link href="/join" className="text-primary hover:underline">← Back to Events</Link></div>;

  return (
    <div className="bg-white min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-8 bg-linear-to-br from-teal-50 via-cream to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #2A9D8F 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/join" className="inline-flex items-center text-primary hover:text-primary-hover mb-6 font-medium">
                <ArrowLeft size={20} className="mr-2" /> Back to Events
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  const sessions = event.sessions || [];
                  const sessionDates = sessions.map(s => new Date(s.date).getTime());
                  const lastDate = sessions.length > 0 ? new Date(Math.max(...sessionDates)) : new Date(event.date);
                  const firstDate = sessions.length > 0 ? new Date(Math.min(...sessionDates)) : new Date(event.date);
                  
                  lastDate.setHours(0, 0, 0, 0);
                  firstDate.setHours(0, 0, 0, 0);

                  if (event.status === "completed" || lastDate < now) {
                    return <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-700">Completed</span>;
                  }
                  if (firstDate <= now && lastDate >= now) {
                    return <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">Ongoing</span>;
                  }
                  return <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">{event.type}</span>;
                })()}
                <span className="text-text-muted flex items-center"><Globe size={16} className="mr-1.5" />{event.region}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-4 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 mt-4 mb-6">
                <div className="flex items-center gap-2 text-text-muted bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-teal-100/50 shadow-sm">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-xs font-semibold">
                    {event.sessions && event.sessions.length > 1 
                      ? `${formatDate(event.sessions[0].date)} — ${formatDate(event.sessions[event.sessions.length-1].date)}`
                      : formatDate(event.sessions[0]?.date || event.date)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-text-muted bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-teal-100/50 shadow-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-xs font-semibold">{event.location}, {event.country}</span>
                </div>
              </div>

              {event.facilitators && event.facilitators.length > 0 && (
                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-2xl border border-white/60 w-fit mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-primary overflow-hidden">
                    {event.facilitators[0].image_url ? <img src={event.facilitators[0].image_url} alt="" className="w-full h-full object-cover" /> : <Users size={20} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Conducted by</p>
                    <p className="text-base font-bold text-text-main leading-tight">{event.facilitators[0].name}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white group bg-white flex items-center justify-center">
                {(() => {
                  const images = Array.isArray(event.image_urls) ? event.image_urls : (event.image_url ? [event.image_url] : []);
                  if (images.length === 0) return <div className="text-teal-100"><ImageIcon size={48} /></div>;
                  
                  return (
                   <>
                     <AnimatePresence mode="wait">
                       <motion.img 
                         key={activeImageIndex}
                         src={images[activeImageIndex % images.length]} 
                         alt={event.title} 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         drag={images.length > 1 ? "x" : false}
                         dragConstraints={{ left: 0, right: 0 }}
                         dragElastic={0.3}
                         onDragEnd={(_, info) => {
                           if (info.offset.x < -50) setActiveImageIndex((prev) => (prev + 1) % images.length);
                           else if (info.offset.x > 50) setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
                         }}
                         className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing" 
                       />
                     </AnimatePresence>
                      
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight size={18} />
                          </button>
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                            {images.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setActiveImageIndex(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  i === activeImageIndex ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-xl font-extrabold text-text-main mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                Your Transformative Journey
              </h2>
              <p className="text-base text-text-muted leading-relaxed font-medium">{event.description}</p>
            </section>

            {/* Sessions Roadmap */}
            <section>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-text-main mb-2">Event Roadmap</h2>
                  <p className="text-text-muted font-medium">Follow the journey through each module.</p>
                </div>
                {event.sessions.length > 0 && (
                  <div className="bg-teal-50 text-teal-700 px-4 py-2 rounded-xl text-sm font-bold border border-teal-100">
                    {event.sessions.length} Session{event.sessions.length > 1 ? 's' : ''}
                  </div>
                )}
              </div>

              <div className="relative space-y-4">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-8 bottom-8 w-1 bg-linear-to-b from-teal-200 via-teal-100 to-transparent rounded-full" />
                
                {event.sessions.map((session, idx) => {
                  const sessionDate = new Date(session.date);
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  sessionDate.setHours(0, 0, 0, 0);
                  
                  const isSessionInPastOrToday = sessionDate <= today;
                  const canFeedback = session.collect_feedback && isSessionInPastOrToday;

                  return (
                    <motion.div 
                      key={session.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative pl-16 pr-6 py-5 rounded-2xl border transition-all bg-gray-50/30 border-gray-100 hover:bg-white hover:shadow-md"
                    >
                      {/* Step Circle */}
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10 bg-white text-gray-400`}>
                        <span className="text-[10px] font-bold">{idx + 1}</span>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">{formatDate(session.date)}</p>
                          <p className="text-lg font-black text-text-main leading-tight">
                            {MODULE_LABELS[session.module as keyof typeof MODULE_LABELS] || session.module}
                          </p>
                          <div className="flex flex-wrap gap-4 mt-1">
                            {(session.start_time || session.end_time) && (
                              <p className="text-xs font-bold text-text-muted flex items-center gap-1.5">
                                <Clock size={12} /> {formatTime(session.start_time || "10:00")} — {formatTime(session.end_time || "12:00")}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {canFeedback ? (
                            <button 
                              onClick={() => { setActiveSession(session); setShowFeedbackForm(true); }}
                              className="px-5 py-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-all text-xs font-bold shadow-lg shadow-primary/20 flex items-center gap-2"
                            >
                              <Send size={14} className="fill-white/20" /> Feedback
                            </button>
                          ) : !session.collect_feedback ? (
                            <div className="px-3 py-1.5 bg-white text-gray-400 rounded-lg border border-gray-100 text-[10px] font-medium">
                              No feedback
                            </div>
                          ) : (
                            <div className="px-3 py-1.5 bg-white text-gray-400 rounded-lg border border-gray-100 text-[10px] font-medium">
                              Available soon
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Testimonials Section */}
            {testimonials && testimonials.length > 0 && (
              <section className="bg-linear-to-r from-teal-50 to-blue-50 rounded-[2.5rem] p-8 border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                
                <div className="flex items-center justify-between mb-8 relative">
                  <div>
                    <h2 className="text-xl font-black text-text-main italic mb-1">Impact Echoes</h2>
                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest opacity-60">Real stories from real participants</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-teal-100">
                    <Star className="text-amber-400 fill-amber-400" size={12} />
                    <span className="text-xs font-black text-text-main tracking-tight">Community Love</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 relative">
                  {testimonials.map((t, i) => {
                    const responses = (t.responses as Record<string, string>) || {};
                    const feedbackText = Object.values(responses).find(v => v && v.length > 10 && isNaN(Number(v)));
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm flex flex-col justify-between hover:shadow-xl hover:shadow-teal-900/5 transition-all group"
                      >
                        <div>
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                          <p className="text-base text-text-main italic font-medium leading-relaxed mb-6 group-hover:text-primary transition-colors">
                            &ldquo;{feedbackText || "A deeply moving and transformative session that brought immense peace and clarity to my day."}&rdquo;
                          </p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
                          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-teal-500/20">
                            {(t.full_name as string || t.first_name as string)?.[0]?.toUpperCase() || 'P'}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-black text-text-main tracking-tight">
                              {t.full_name as string || t.first_name as string || 'Anonymous Participant'}
                            </span>
                            <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest opacity-60">Verified Feedback</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          <aside>
            <div className="bg-white rounded-[2.5rem] p-8 sticky top-32 shadow-2xl shadow-teal-900/5 border border-gray-100 relative">
              {/* Decorative background element clipped to panel bounds */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-50" />
              </div>

              <h3 className="text-2xl font-bold text-text-main mb-4 relative">
                {(() => {
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  const sessions = event.sessions || [];
                  const sessionDates = sessions.map(s => new Date(s.date).getTime());
                  const lastDate = sessions.length > 0 ? new Date(Math.max(...sessionDates)) : new Date(event.date);
                  lastDate.setHours(0, 0, 0, 0);

                  if (event.status === "completed" || lastDate < now) return "Event Concluded";
                  const firstDate = sessions.length > 0 ? new Date(Math.min(...sessionDates)) : new Date(event.date);
                  firstDate.setHours(0, 0, 0, 0);
                  if (firstDate <= now) return "Event Ongoing";
                  return "Join the Journey";
                })()}
              </h3>
              
              {(() => {
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                const sessions = event.sessions || [];
                const sessionDates = sessions.map(s => new Date(s.date).getTime());
                const lastDate = sessions.length > 0 ? new Date(Math.max(...sessionDates)) : new Date(event.date);
                lastDate.setHours(0, 0, 0, 0);
                
                const isConcluded = event.status === "completed" || lastDate < now;

                if (isConcluded) {
                  return (
                    <div className="space-y-6 relative">
                      <p className="text-text-muted text-sm italic mb-4">
                        This event has concluded. Thank you to everyone who participated!
                      </p>
                      <Link href="/join" className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-2xl hover:bg-black transition-all shadow-xl shadow-gray-900/20">Explore More Events</Link>
                    </div>
                  );
                }

                if (submitted) {
                  return (
                    <div className="text-center py-8 relative">
                      <div className="w-20 h-20 bg-teal-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-teal-600 shadow-inner">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-2xl font-black text-text-main mb-2 tracking-tight">You&apos;re Registered!</h4>
                      <p className="text-text-muted font-medium mb-8">Ready to start your journey? Check your email for details.</p>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <button onClick={() => setShowCalendarMenu(!showCalendarMenu)} className="w-full px-6 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/30">
                            <Calendar size={20} /> Add to Calendar <ChevronDown size={18} className={`transition-transform ${showCalendarMenu ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {showCalendarMenu && (
                              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2">
                                <button onClick={addToGoogleCalendar} className="w-full px-4 py-3 text-left hover:bg-teal-50 rounded-2xl flex items-center gap-4 transition-all font-bold text-gray-700 text-sm">Google Calendar</button>
                                <button onClick={addToOutlookCalendar} className="w-full px-4 py-3 text-left hover:bg-teal-50 rounded-2xl flex items-center gap-4 transition-all font-bold text-gray-700 text-sm">Outlook Calendar</button>
                                <button onClick={generateEventCalendarFile} className="w-full px-4 py-3 text-left hover:bg-teal-50 rounded-2xl flex items-center gap-4 transition-all font-bold text-gray-700 text-sm text-primary">Download .ics</button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <form onSubmit={handleSubmit} className="space-y-5 relative">
                    <div>
                      <label className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
                      <input type="text" name="name" required className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2 px-1">Email Address</label>
                      <input type="email" name="email" required className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium outline-none" placeholder="hello@example.com" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2 px-1">Country</label>
                      <div className="relative group">
                        <select 
                          name="country" 
                          required 
                          value={regCountry}
                          onChange={(e) => {
                            setRegCountry(e.target.value);
                            setRegPhone(""); // Clear phone when country changes to avoid confusion
                          }}
                          className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium outline-none appearance-none cursor-pointer"
                        >
                          <option value="">Select Country</option>
                          {countries.map(c => (
                            <option key={c.name} value={c.name}>{c.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none group-hover:text-primary transition-colors" size={18} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2 px-1">Phone Number</label>
                      <div className="flex items-stretch overflow-hidden bg-gray-50 border border-transparent rounded-2xl focus-within:bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all">
                        <div className="px-5 py-3.5 bg-gray-100/50 border-r border-gray-200 text-text-muted font-bold text-sm min-w-[70px] flex items-center justify-center">
                          {countries.find(c => c.name === regCountry)?.code || "+"}
                        </div>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          value={regPhone}
                          onChange={(e) => setRegPhone(e.target.value)}
                          className="flex-1 px-5 py-3.5 bg-transparent font-medium outline-none" 
                          placeholder="Phone number" 
                        />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-4.5 bg-primary text-white font-black rounded-2xl hover:bg-primary-hover transition-all shadow-xl shadow-primary/30 transform hover:-translate-y-1 active:translate-y-0">Complete Registration</button>
                  </form>
                );
              })()}
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
