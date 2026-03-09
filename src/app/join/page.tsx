"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Globe, ChevronRight, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";

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

const regions = ["Americas", "Europe", "Africa", "Asia", "Oceania"] as const;

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
      try {
        setLoading(true);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        const today = now.toISOString().split('T')[0];

        // Fetch all active events (Upcoming or Ongoing)
        const { data: allActive, error: activeError } = await supabase
          .from('events')
          .select('*')
          .in('status', ['upcoming', 'ongoing'])
          .order('date', { ascending: true });
        
        if (activeError) throw activeError;

        const upcoming: Event[] = [];
        const pastFromActive: Event[] = [];

        (allActive || []).forEach(event => {
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
        const { data: completedData, error: completedError } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'completed')
          .order('date', { ascending: false })
          .range(0, pastBatchSize - 1);
        
        if (completedError) throw completedError;

        // Combine auto-completed active events with explicitly completed events
        const combinedPast = [...pastFromActive, ...(completedData || [])];
        setPastEvents(combinedPast.slice(0, pastBatchSize));
        setHasMorePast(combinedPast.length >= pastBatchSize);

      } catch (err) {
        console.error('Error fetching events:', err);
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
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'completed')
        .order('date', { ascending: false })
        .range(pastEvents.length, pastEvents.length + pastBatchSize - 1);

      if (error) throw error;
      if (data) setPastEvents(prev => [...prev, ...data]);
    } catch (err) {
      console.error('Error loading more past events:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  const filteredEvents = events.filter((event) => event.region === activeRegion);

  // Helper to format 24h time to 12h
  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(':');
    const h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${minutes} ${ampm}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-teal-100 text-primary text-sm font-medium mb-6 shadow-sm">
            <Globe size={16} className="mr-2" />
            Global Events
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6 tracking-tight">
            Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Change</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Connect with like-minded youth, discover your inner strength, and make a difference. 
            Click on an event to learn more and register.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-8">
          
          {/* Region Tabs */}
          <div className="max-w-5xl mx-auto flex flex-wrap gap-2 p-1 bg-gray-100/50 rounded-xl">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeRegion === region
                    ? "bg-white text-primary shadow-sm"
                    : "text-text-muted hover:text-text-main hover:bg-gray-200/50"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Event Cards */}
          <div className="max-w-5xl mx-auto space-y-4">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-text-muted">Loading events...</p>
              </div>
            ) : filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                            event.type === "Online" ? "bg-blue-50 text-blue-600" :
                            event.type === "In-Person" ? "bg-green-50 text-green-600" :
                            "bg-purple-50 text-purple-600"
                          }`}>
                            {event.type}
                          </span>
                          {(() => {
                            const now = new Date();
                            now.setHours(0, 0, 0, 0);
                            const sessions = (event as any).sessions || [];
                            const sessionDates = sessions.map((s: any) => new Date(s.date).getTime());
                            if (sessionDates.length > 0) {
                              const firstDate = new Date(Math.min(...sessionDates));
                              const lastDate = new Date(Math.max(...sessionDates));
                              firstDate.setHours(0, 0, 0, 0);
                              lastDate.setHours(0, 0, 0, 0);
                              
                              if (firstDate <= now && lastDate >= now) {
                                return <span className="px-2 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-700 animate-pulse">ONGOING</span>;
                              }
                              if (firstDate > now) {
                                return <span className="px-2 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-600">UPCOMING</span>;
                              }
                            }
                            return null;
                          })()}
                          <span className="text-xs text-text-muted flex items-center ml-auto sm:ml-0">
                            <MapPin size={12} className="mr-1" />
                            {event.location}, {event.country}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1.5" />
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1.5" />
                            {formatTime(event.start_time)} ({event.timezone})
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-text-muted">No upcoming events scheduled for this region yet.</p>
              </div>
            ) }
          </div>

          {/* Past Events Gallery */}
          {!loading && pastEvents.length > 0 && (
            <div className="pt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-main mb-4">Glimpse of Events</h2>
                <p className="text-text-muted">Glimpses into our previous gatherings and milestones</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Link key={event.id} href={`/events/${event.id}`}>
                    <div className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-teal-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                        {event.image_url ? (
                          <img 
                            src={event.image_url} 
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300">
                            <ImageIcon size={48} />
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                           <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-600 shadow-sm">
                             IMPACT
                           </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-text-main line-clamp-1 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-text-muted">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} /> {event.country || "India"}</span>
                          <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 font-bold ml-auto">IMPACT</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {hasMorePast && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={loadMorePast}
                    disabled={loadingMore}
                    className="px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all disabled:opacity-50 flex items-center gap-2 mx-auto"
                  >
                    {loadingMore ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div> : "View More Impacts"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}