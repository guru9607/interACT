"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, Globe, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Event Data Type
type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  region: "Americas" | "Europe" | "Africa" | "Asia" | "Oceania";
  type: "Online" | "In-Person" | "Hybrid";
};

const regions = ["Americas", "Europe", "Africa", "Asia", "Oceania"] as const;

export default function JoinPage() {
  const [activeRegion, setActiveRegion] = useState<typeof regions[number]>("Asia");
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .gte('date', new Date().toISOString().split('T')[0]) // Filter: Date must be today or future
          .order('date', { ascending: true }); // Order by date (soonest first)
        
        if (error) throw error;
        if (data) setEvents(data as Event[]);
      } catch (err) {
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => event.region === activeRegion);

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
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Movement</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Connect with like-minded youth, discover your inner strength, and make a difference. 
            Click on an event to learn more and register.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-gray-100/50 rounded-xl">
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
          <div className="space-y-4">
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
                          <span className="text-xs text-text-muted flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {event.location}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1.5" />
                            {event.date}
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1.5" />
                            {event.time}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}