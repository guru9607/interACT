"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Globe,
  MapPin,
  ArrowRight,
  Image as ImageIcon,
  CheckCircle2,
  Filter,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";
import { getSupabaseAnonRead } from "@/lib/supabase/anon-read";

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
  status?: "upcoming" | "completed";
  image_url?: string;
};

const regions = ["Asia", "Americas", "Europe", "Africa", "Oceania"] as const;

export default function JoinPage() {
  const [activeRegion, setActiveRegion] = useState<typeof regions[number]>("Asia");
  const [events, setEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMorePast, setHasMorePast] = useState(false);
  const pastBatchSize = 9;

  useEffect(() => {
    async function fetchEvents() {
      const ro = getSupabaseAnonRead();
      try {
        setLoading(true);
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        // Fetch all active events (Upcoming or Ongoing)
        const { data: allActive, error: activeError } = await ro
          .from("events")
          .select("*")
          .in("status", ["upcoming", "ongoing"])
          .order("date", { ascending: true });

        if (activeError) throw activeError;

        const upcoming: Event[] = [];
        const pastFromActive: Event[] = [];

        (allActive || []).forEach((event) => {
          const sessions = (event as any).sessions || [];
          const sessionDates = sessions.map((s: any) => new Date(s.date).getTime());
          const lastDate = sessions.length > 0 ? new Date(Math.max(...sessionDates)) : new Date(event.date);
          lastDate.setHours(0, 0, 0, 0);

          if (lastDate >= now) {
            upcoming.push(event as Event);
          } else {
            pastFromActive.push(event as Event);
          }
        });

        setEvents(upcoming);

        // Fetch manual past/completed events
        const { data: completedData, error: completedError } = await ro
          .from("events")
          .select("*")
          .eq("status", "completed")
          .order("date", { ascending: false })
          .range(0, pastBatchSize - 1);

        if (completedError) throw completedError;

        // Combine auto-completed active events with explicitly completed events
        const combinedPast = [...pastFromActive, ...(completedData || [])];
        setPastEvents(combinedPast.slice(0, pastBatchSize));
        setHasMorePast(combinedPast.length >= pastBatchSize);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const loadMorePast = async () => {
    if (loadingMore) return;
    try {
      setLoadingMore(true);
      const ro = getSupabaseAnonRead();
      const { data, error } = await ro
        .from("events")
        .select("*")
        .eq("status", "completed")
        .order("date", { ascending: false })
        .range(pastEvents.length, pastEvents.length + pastBatchSize - 1);

      if (error) throw error;
      if (data) setPastEvents((prev) => [...prev, ...data]);
    } catch (err) {
      console.error("Error loading more past events:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  const filteredEvents = events.filter((event) => event.region === activeRegion);

  // Helper to format 24h time to 12h
  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  // Helper to format event date
  const formatEventDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return {
      month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      day: d.getDate(),
      year: d.getFullYear(),
      full: d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & REGISTRY CLASSIFICATION
          UN DGC Standard Event Registry Banner
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
          
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-3">
            <Globe size={14} className="shrink-0" />
            <span>Global Youth Registry · Workshops &amp; Gatherings</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-3">
            Global Workshops &amp; Community Gatherings
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
            Join structured reflection circles and youth workshops worldwide. 100% free, non-sectarian, and aligned with the United Nations 2030 Agenda for mental well-being (SDG 3), inner peace (SDG 16), and partnership (SDG 17).
          </p>

          {/* Quick Registration Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 p-2.5 bg-white rounded border border-slate-200">
              <CheckCircle2 size={16} className="text-[#4C9F38] shrink-0" />
              <span>100% Free for All Youth</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-white rounded border border-slate-200">
              <CheckCircle2 size={16} className="text-[#00AED9] shrink-0" />
              <span>Standardized 3-Hour &amp; Modular Tracks</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-white rounded border border-slate-200">
              <CheckCircle2 size={16} className="text-[#19486A] shrink-0" />
              <span>Verifiable Completion Certificate</span>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. REGIONAL SELECTION & ACTIVE WORKSHOPS
          Clean Institutional Tab Bar & Structured Event Cards
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                Regional Navigation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                Upcoming Scheduled Gatherings
              </h2>
            </div>
            
            <div className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded">
              <Filter size={14} className="text-slate-400" />
              <span>Showing: <strong className="text-slate-800">{activeRegion}</strong> Region</span>
            </div>
          </div>

          {/* Regional Grouping Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded border border-slate-200 mb-8 max-w-2xl">
            {regions.map((region) => {
              const count = events.filter((e) => e.region === region).length;
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded text-sm font-semibold tracking-wide transition-colors flex items-center gap-2 ${
                    isActive
                      ? "bg-white text-[#0B2545] shadow-xs border border-slate-200 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <span>{region === "Asia" ? "Asia-Pacific" : region}</span>
                  {count > 0 && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-blue-50 text-[#0072CE] font-bold"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Event Registry Rows */}
          <div className="space-y-4">
            {loading ? (
              <div className="text-center py-16 border border-dashed border-slate-200 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#0072CE] border-t-transparent mx-auto mb-3" />
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  Loading Event Registry...
                </p>
              </div>
            ) : filteredEvents.length > 0 ? (
              filteredEvents.map((event) => {
                const dateObj = formatEventDate(event.date);
                
                // Determine ongoing vs upcoming status
                const now = new Date();
                now.setHours(0, 0, 0, 0);
                const sessions = (event as any).sessions || [];
                const sessionDates = sessions.map((s: any) => new Date(s.date).getTime());
                let isOngoing = false;
                if (sessionDates.length > 0) {
                  const firstDate = new Date(Math.min(...sessionDates));
                  const lastDate = new Date(Math.max(...sessionDates));
                  firstDate.setHours(0, 0, 0, 0);
                  lastDate.setHours(0, 0, 0, 0);
                  if (firstDate <= now && lastDate >= now) {
                    isOngoing = true;
                  }
                }

                return (
                  <Link key={event.id} href={`/events/${event.id}`} className="block group">
                    <div className="border border-slate-200 rounded-lg p-5 sm:p-6 bg-white hover:border-[#0072CE] hover:shadow-xs transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
                      
                      {/* Left: Tabular Date Badge + Core Information */}
                      <div className="flex items-start gap-4 sm:gap-5">
                        
                        {/* Tabular Calendar Block */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded border border-slate-200 bg-slate-50 flex flex-col items-center justify-center shrink-0 text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0072CE]">
                            {dateObj.month}
                          </span>
                          <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545] leading-none my-0.5">
                            {dateObj.day}
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {dateObj.year}
                          </span>
                        </div>

                        {/* Event Details */}
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            {isOngoing ? (
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                                Ongoing Session
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-[#0058A3] border border-blue-200">
                                Upcoming Workshop
                              </span>
                            )}

                            <span
                              className={`px-2 py-0.5 rounded text-xs font-semibold border ${
                                event.type === "Online"
                                  ? "bg-sky-50 text-sky-800 border-sky-200"
                                  : event.type === "In-Person"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                  : "bg-purple-50 text-purple-800 border-purple-200"
                              }`}
                            >
                              {event.type}
                            </span>

                            <span className="text-xs sm:text-sm text-slate-600 flex items-center gap-1">
                              <MapPin size={13} className="text-slate-400" />
                              {event.location}, {event.country}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors leading-snug">
                            {event.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 pt-0.5">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-slate-400" />
                              {dateObj.full}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} className="text-slate-400" />
                              {formatTime(event.start_time)} ({event.timezone})
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Right: Institutional Action Button */}
                      <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 flex items-center justify-between md:justify-end gap-3">
                        <span className="text-sm font-semibold text-[#0072CE] group-hover:text-[#0058A3] flex items-center gap-1">
                          View Program &amp; Register <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>

                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="text-center py-16 bg-[#F8F9FA] rounded-lg border border-slate-200 p-8 space-y-3">
                <Info size={24} className="text-slate-400 mx-auto" />
                <h4 className="text-sm font-semibold text-slate-800">
                  No Public Gatherings Scheduled in {activeRegion === "Asia" ? "Asia-Pacific" : activeRegion}
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Upcoming workshop dates for this regional grouping are currently being finalized with institutional facilitators. You may also propose a session in your community.
                </p>
                <div className="pt-2">
                  <Link
                    href="/modules"
                    className="inline-flex items-center px-4 py-2 rounded text-xs font-semibold bg-[#0072CE] text-white hover:bg-[#0058A3] transition-colors"
                  >
                    Explore Self-Paced Modules
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. FIELD ARCHIVE & HISTORICAL MILESTONES
          Visual Documentation of Completed Gatherings
      ───────────────────────────────────────────────────────────── */}
      {!loading && pastEvents.length > 0 && (
        <section className="py-14 md:py-20 bg-[#F8F9FA] border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-10">
              <div>
                <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider block mb-1">
                  Historical Records
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#0B2545]">
                  Completed Field Deployments &amp; Assemblies
                </h2>
              </div>
              <span className="text-xs text-slate-500">
                Official records of community and school cohorts
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Link key={event.id} href={`/events/${event.id}`} className="group block">
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-[#0072CE] transition-all flex flex-col h-full">
                    
                    {/* Documentary Photo Container */}
                    <div className="aspect-16/10 relative overflow-hidden bg-slate-100 border-b border-slate-200">
                      {event.image_url ? (
                        <img
                          src={event.image_url}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <ImageIcon size={40} />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-[10px] font-bold text-slate-700 uppercase tracking-wider border border-slate-200 shadow-xs">
                          Completed Field Session
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-1.5">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-slate-400" />
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-slate-400" />
                            {event.location}, {event.country}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0072CE] transition-colors line-clamp-2 leading-snug">
                          {event.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0072CE] font-semibold">
                        <span>View Documentation &amp; Artifacts</span>
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

            {hasMorePast && (
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={loadMorePast}
                  disabled={loadingMore}
                  className="px-6 py-2.5 bg-white border border-slate-300 text-sm font-semibold text-[#0B2545] rounded hover:bg-slate-50 transition-colors disabled:opacity-50 inline-flex items-center gap-2 shadow-xs"
                >
                  {loadingMore ? (
                    <>
                      <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-slate-600 border-t-transparent" />
                      Loading Archives...
                    </>
                  ) : (
                    "Load Historical Archives"
                  )}
                </button>
              </div>
            )}

          </div>
        </section>
      )}


      {/* ─────────────────────────────────────────────────────────────
          4. INSTITUTIONAL ACCREDITATION & FACILITATOR CALLOUT
          Civic Partnership & Hosting Information
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-[#F8F9FA] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider">
                <ShieldCheck size={16} />
                <span>Hosting Institutional Gatherings</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0B2545]">
                Bring an interACT Gathering to Your University or Community
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Certified facilitators can host official workshops with full access to accredited curriculum slide decks, thought trackers, and automatic participant certification under our UN 2030 Agenda alignment.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:support@theinteract.org?subject=Inquiry:%20Host%20an%20interACT%20Gathering"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0072CE] text-white text-xs font-semibold rounded hover:bg-[#0058A3] transition-colors shadow-xs"
              >
                Inquire to Host a Gathering
              </a>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded hover:bg-slate-50 transition-colors shadow-xs"
              >
                View Educational Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
