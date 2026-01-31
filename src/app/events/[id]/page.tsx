"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle2, Globe, Image as ImageIcon, Send, Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import FeedbackForm from "@/components/FeedbackForm";
import { motion } from "framer-motion";

// Facilitator Type
type Facilitator = {
  name: string;
  role: string;
  bio: string;
  image_url: string;
};

// Event Data Type
type Event = {
  id: number;
  title: string;
  date: string;
  start_time: string;
  end_time: string | null;
  timezone: string;
  location: string;
  country: string;
  region: "Americas" | "Europe" | "Africa" | "Asia" | "Oceania";
  type: "Online" | "In-Person" | "Hybrid";
  status: "upcoming" | "completed";
  image_url: string | null;
  image_urls: string[] | null;
  act_module: "awareness" | "contemplation" | "transformative_silence" | "combined" | null;
  description: string;
  agenda: string[];
  facilitators: Facilitator[];
  capacity: number | null;
  special_note: string | null;
};

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [testimonials, setTestimonials] = useState<Record<string, unknown>[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  
  const eventId = parseInt(params.id as string);

  // Fetch event data from Supabase
  useEffect(() => {
    async function fetchEvent() {
      try {
        // Fetch event details
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

        /* 
        // Fetch facilitators for this event
        const { data: facilitatorLinks, error: linksError } = await supabase
          .from('event_facilitators')
          .select('team_member_id')
          .eq('event_id', eventId);

        if (linksError) throw linksError;

        const facilitatorIds = facilitatorLinks?.map(link => link.team_member_id) || [];

        let facilitators: Facilitator[] = [];
        if (facilitatorIds.length > 0) {
          const { data: facilitatorsData, error: facilitatorsError } = await supabase
            .from('teams')
            .select('name, role, bio, image_url')
            .in('id', facilitatorIds);

          if (facilitatorsError) throw facilitatorsError;
          facilitators = facilitatorsData || [];
        }
        */

        // Initialize facilitators list
        let facilitators: Facilitator[] = [];

        // Fetch conductor details
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

        // Final state update
        setEvent({
          ...eventData,
          facilitators: facilitators
        });

        // Fetch 5-star testimonials for this event
        const { data: feedbackData } = await supabase
          .from('event_feedback')
          .select('*')
          .eq('event_id', eventId)
          .order('submitted_at', { ascending: false });
        
        if (feedbackData) {
          // Filter for 5-star ratings only
          const fiveStarFeedback = feedbackData.filter(feedback => {
            const responses = feedback.responses;
            // Check if any scale question has a rating of 5
            return Object.values(responses).some(val => val === '5');
          });
          setTestimonials(fiveStarFeedback.slice(0, 4)); // Show max 4 testimonials
        }
      } catch (err) {
        const error = err as Error;
        console.error('Error fetching event:', err);
        setError(error?.message || 'Failed to load event');
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  const generateEventCalendarFile = () => {
    if (!event) return;

    // Parse event date and time
    const eventDate = new Date(event.date);
    const [hours, minutes] = event.start_time.split(':').map(Number);
    eventDate.setHours(hours, minutes, 0);

    // Calculate end time (assume 2 hours if not provided)
    const endDate = event.end_time 
      ? (() => {
          const endEventDate = new Date(event.date);
          const [endHours, endMinutes] = event.end_time.split(':').map(Number);
          endEventDate.setHours(endHours, endMinutes, 0);
          return endEventDate;
        })()
      : new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);

    // Format dates for iCal (YYYYMMDDTHHMMSSZ)
    const formatICalDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startTime = formatICalDate(eventDate);
    const endTime = formatICalDate(endDate);

    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//interACT Program//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:interact-event-${event.id}-${Date.now()}@brahmakumaris.org
DTSTAMP:${formatICalDate(new Date())}
DTSTART:${startTime}
DTEND:${endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description || 'Join us for this transformative interACT event'}
LOCATION:${event.location}${event.country ? ', ' + event.country : ''}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    // Create blob and download
    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `interACT-${event.title.replace(/\s+/g, '-')}.ics`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addToGoogleCalendar = () => {
    if (!event) return;

    const eventDate = new Date(event.date);
    const [hours, minutes] = event.start_time.split(':').map(Number);
    eventDate.setHours(hours, minutes, 0);

    const endDate = event.end_time 
      ? (() => {
          const endEventDate = new Date(event.date);
          const [endHours, endMinutes] = event.end_time.split(':').map(Number);
          endEventDate.setHours(endHours, endMinutes, 0);
          return endEventDate;
        })()
      : new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);

    // Format dates for Google Calendar (YYYYMMDDTHHMMSS format)
    const formatGoogleDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    };

    const startTime = formatGoogleDate(eventDate);
    const endTime = formatGoogleDate(endDate);
    const eventLocation = `${event.location}${event.country ? ', ' + event.country : ''}`;
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&location=${encodeURIComponent(eventLocation)}&details=${encodeURIComponent(event.description || 'Join us for this transformative interACT event')}`;
    
    window.open(googleCalendarUrl, '_blank');
    setShowCalendarMenu(false);
  };

  const addToOutlookCalendar = () => {
    if (!event) return;

    const eventDate = new Date(event.date);
    const [hours, minutes] = event.start_time.split(':').map(Number);
    eventDate.setHours(hours, minutes, 0);

    const endDate = event.end_time 
      ? (() => {
          const endEventDate = new Date(event.date);
          const [endHours, endMinutes] = event.end_time.split(':').map(Number);
          endEventDate.setHours(endHours, endMinutes, 0);
          return endEventDate;
        })()
      : new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);

    const formatOutlookDate = (date: Date) => {
      return date.toISOString();
    };

    const startTime = formatOutlookDate(eventDate);
    const endTime = formatOutlookDate(endDate);
    const eventLocation = `${event.location}${event.country ? ', ' + event.country : ''}`;

    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(event.title)}&startdt=${encodeURIComponent(startTime)}&enddt=${encodeURIComponent(endTime)}&location=${encodeURIComponent(eventLocation)}&body=${encodeURIComponent(event.description || 'Join us for this transformative interACT event')}`;
    
    window.open(outlookUrl, '_blank');
    setShowCalendarMenu(false);
  };

  // Helper to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const registrationData = {
      event_id: eventId,
      full_name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || null,
      country: formData.get('country') as string,
    };

    try {
      const { error: supabaseError } = await supabase
        .from('registrations')
        .insert([registrationData]);

      if (supabaseError) throw supabaseError;

      // Trigger registration email
      try {
        const emailRes = await fetch('/api/send-registration-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: registrationData.email,
            name: registrationData.full_name,
            eventTitle: event?.title,
            eventDate: event ? formatDate(event.date) : '',
            eventLocation: event?.location,
            specialNote: event?.special_note, 
          }),
        });
        
        if (!emailRes.ok) {
          const errorData = await emailRes.json();
          console.error('Email API failed:', errorData);
          alert(`Note: Registration successful, but confirmation email failed: ${errorData.details || errorData.error}`);
        }
      } catch (emailErr) {
        console.error('Failed to trigger confirmation email:', emailErr);
      }

      setSubmitted(true);
    } catch (err) {
      const error = err as Error;
      console.error('Error submitting registration:', err);
      setError(error.message || 'Failed to submit registration. Please try again.');
    }
  };

  // Helper to format 24h time to 12h
  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-muted">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-main mb-4">Event Not Found</h1>
          <Link href="/join" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-teal-50 via-cream to-blue-50 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #2A9D8F 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/join" className="inline-flex items-center text-primary hover:text-primary-hover mb-6 font-medium">
                <ArrowLeft size={20} className="mr-2" />
                Back to Events
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === "completed" ? "bg-teal-100 text-teal-700" :
                  event.type === "Online" ? "bg-blue-100 text-blue-700" :
                  event.type === "In-Person" ? "bg-green-100 text-green-700" :
                  "bg-purple-100 text-purple-700"
                }`}>
                  {event.status === "completed" ? "Completed" : event.type}
                </span>
                <span className="text-text-muted flex items-center">
                  <Globe size={16} className="mr-1.5" />
                  {event.region}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-lg text-text-muted mb-6">
                <span className="flex items-center">
                  <Calendar size={20} className="mr-2 text-primary" />
                  {formatDate(event.date)}
                </span>
                <span className="flex items-center">
                  <Clock size={20} className="mr-2 text-primary" />
                  {formatTime(event.start_time)}
                  {event.end_time ? ` - ${formatTime(event.end_time)}` : ''}
                  {` (${event.timezone})`}
                </span>
                <span className="flex items-center">
                  <MapPin size={20} className="mr-2 text-primary" />
                  {event.location}
                  {event.country && `, ${event.country}`}
                </span>
                {event.facilitators && event.facilitators.length > 0 && (
                  <span className="flex items-center">
                    <Users size={20} className="mr-2 text-primary" />
                    Host: {event.facilitators[0].name}
                  </span>
                )}
              </div>

              {/* Quick Action for Feedback */}
              {event.status === "completed" && event.act_module && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setShowFeedbackForm(true)}
                  className="mt-4 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-3 w-fit cursor-pointer"
                >
                  <Send size={20} className="fill-white/20" />
                  <span>Share Your Experience</span>
                </motion.button>
              )}
            </div>

            {/* Event Post-Photo or Placeholder */}
            {event.status === "completed" && (
              <div className="space-y-6">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {event.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full bg-teal-50 flex items-center justify-center text-teal-200">
                      <ImageIcon size={64} />
                    </div>
                  )}
                </div>
                
                {/* Secondary Gallery */}
                {event.image_urls && event.image_urls.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {event.image_urls.slice(1).map((url, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={url} alt={`${event.title} ${i+2}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold text-text-main mb-4">About This Event</h2>
              <p className="text-lg text-text-muted leading-relaxed">{event.description}</p>
            </section>

            {/* Agenda */}
            <section>
              <h2 className="text-3xl font-bold text-text-main mb-6">Event Agenda</h2>
              <div className="space-y-3">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-teal-50/50 rounded-lg border border-teal-100">
                    <div className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-text-main pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section - Only for completed events with 5-star feedback */}
            {event.status === "completed" && testimonials.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-text-main mb-6">Participant Experiences</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => {
                    const responses = (testimonial as Record<string, unknown>).responses as Record<string, string>;
                    
                    // Prioritize Question 1 (Realization) or Question 3/2 (Empowerment)
                    // Never show Question 4 (Suggestions)
                    const mainQuote = responses.q1 || responses.q3 || responses.q2 || "A deeply transformative experience.";
                    
                    return (
                      <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-text-muted italic mb-4 line-clamp-4">&ldquo;{mainQuote}&rdquo;</p>
                        <p className="text-sm font-semibold text-text-main">
                          {(testimonial as Record<string, unknown>).first_name ? `— ${(testimonial as Record<string, unknown>).first_name}` : "— Anonymous Participant"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - Registration or Feedback */}
          <div>
            <div className="bg-white rounded-3xl p-8 sticky top-32 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-text-main mb-4">
                {event.status === "completed" ? "Event Completed" : "Join This Event"}
              </h3>
              <p className="text-text-muted mb-6 text-sm">
                {event.status === "completed" 
                  ? "This event has ended. Explore our upcoming events or share your experience."
                  : "Fill out your details below to register for this transformative experience."
                }
              </p>

              {event.status === "completed" ? (
                <Link href="/join" className="block w-full py-3.5 bg-gray-100 text-text-main text-center font-bold rounded-xl hover:bg-gray-200 transition-all">
                  Browse Upcoming Events
                </Link>
              ) : submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-text-main mb-2">You&rsquo;re Registered!</h4>
                  <p className="text-text-muted text-sm mb-6">Check your email for confirmation and details.</p>
                  
                  <div className="space-y-3">
                    {/* Add to Calendar Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                        className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                      >
                        <Calendar size={18} />
                        <span>Add to Calendar</span>
                        <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${showCalendarMenu ? 'rotate-180' : ''}`} />
                      </button>

                      {showCalendarMenu && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                          <button
                            onClick={() => { addToGoogleCalendar(); setShowCalendarMenu(false); }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10z" fill="#fff" stroke="#E5E7EB" strokeWidth="1"/>
                              <path d="M15.545 8.333H8.455c-.614 0-1.122.508-1.122 1.111v6.112c0 .603.508 1.11 1.122 1.11h7.09c.614 0 1.122-.507 1.122-1.11V9.444c0-.603-.508-1.111-1.122-1.111z" fill="#4285F4"/>
                              <path d="M8.455 10.556h7.09" stroke="#fff" strokeWidth=".667"/>
                              <path d="M10.5 13.278h3" stroke="#fff" strokeWidth=".667" strokeLinecap="round"/>
                            </svg>
                            <span className="font-medium text-gray-700">Google Calendar</span>
                          </button>
                          <button
                            onClick={() => { addToOutlookCalendar(); setShowCalendarMenu(false); }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors border-t border-gray-50"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10z" fill="#fff" stroke="#E5E7EB" strokeWidth="1"/>
                              <path d="M7 8h10v8H7z" fill="#0078D4"/>
                              <path d="M9 10h6M9 12h6M9 14h4" stroke="#fff" strokeWidth=".667" strokeLinecap="round"/>
                            </svg>
                            <span className="font-medium text-gray-700">Outlook Calendar</span>
                          </button>
                          <button
                            onClick={() => { generateEventCalendarFile(); setShowCalendarMenu(false); }}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors border-t border-gray-50"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10z" fill="#fff" stroke="#E5E7EB" strokeWidth="1"/>
                              <path d="M12 8v5M12 13l2-2M12 13l-2-2M9 16h6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium text-gray-700">Download .ics File</span>
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => router.push('/join')}
                      className="w-full text-primary text-sm font-medium hover:underline py-2"
                    >
                      Browse more events
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Phone (Optional)</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">Country</label>
                    <select id="country" name="country" required className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                      <option value="">Select your country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Norway">Norway</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Russia">Russia</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? 'Submitting...' : 'Complete Registration'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form Modal */}
      {showFeedbackForm && event && event.act_module && (
        <FeedbackForm
          eventId={event.id}
          eventTitle={event.title}
          actModule={event.act_module as "awareness" | "contemplation" | "transformative_silence" | "combined"}
          onClose={() => setShowFeedbackForm(false)}
        />
      )}
    </div>
  );
}
