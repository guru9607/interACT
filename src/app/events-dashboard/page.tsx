"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { countries } from "@/lib/countries";
import { 
  Plus, 
  Trash2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Edit2, 
  LayoutDashboard, 
  Globe, 
  ChevronDown, 
  Award,
  Download,
  Users,
  Edit,
  Loader2,
  History as HistoryIcon,
  Image as ImageIcon,
  ArrowRight,
  MapPin,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FEEDBACK_QUESTIONS, MODULE_LABELS } from "@/lib/constants";

// Use environment variable for the secret, fallback for local dev
const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

export default function EventsDashboard() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const [activeTab, setActiveTab] = useState<"create" | "manage" | "reports">("create");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const [conductors, setConductors] = useState<any[]>([]);
  const [regCounts, setRegCounts] = useState<Record<number, number>>({});
  const [editingEvent, setEditingEvent] = useState<any | null>(null);
  const [facilitatorFilter, setFacilitatorFilter] = useState<string>("");
  const [managementPage, setManagementPage] = useState(0);
  const [hasMoreManagement, setHasMoreManagement] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const MANAGEMENT_LIMIT = 20;

  useEffect(() => {
    const storedSecret = localStorage.getItem("staff_secret_key");
    const validSecret = (secret === DASHBOARD_SECRET) || (storedSecret === DASHBOARD_SECRET);
    
    if (validSecret) {
      setAuthorized(true);
      fetchUpcomingEvents();
      fetchConductors();
    }
  }, [secret]);

  // Handle filter changes
  useEffect(() => {
    if (authorized) {
      fetchUpcomingEvents(false);
    }
  }, [facilitatorFilter]);

  async function fetchConductors() {
    try {
      // Fetch both with separate calls to catch individual errors
      const { data: teamData, error: teamError } = await supabase.from('teams').select('id, name').order('name');
      const { data: facData, error: facError } = await supabase.from('facilitators').select('id, full_name');
      
      if (teamError) console.error("DEBUG: teamError", teamError);
      if (facError) console.error("DEBUG: facError", facError);

      const teamList = teamData?.map((t: any) => ({ id: t.id, name: t.name, type: 'team' })) || [];
      const facList = facData?.map((f: any) => ({ id: f.id, name: f.full_name, type: 'facilitator' })) || [];
      
      console.log(`DEBUG: Found ${teamList.length} Team members and ${facList.length} Facilitators`);

      setConductors([
        ...teamList,
        ...facList
      ]);
    } catch (err) {
      console.error("Error in fetchConductors:", err);
    }
  }

  async function fetchUpcomingEvents(isLoadMore: boolean = false) {
    if (isLoadMore) setLoadingMore(true);
    else setLoading(true);

    const currentPage = isLoadMore ? managementPage + 1 : 0;
    const from = currentPage * MANAGEMENT_LIMIT;
    const to = from + MANAGEMENT_LIMIT - 1;

    let query = supabase
      .from("events")
      .select("*", { count: 'exact' });

    if (facilitatorFilter) {
      query = query.eq('conductor_id', facilitatorFilter);
    }

    const { data, count, error } = await query
      .order("date", { ascending: false })
      .range(from, to);
    
    if (data) {
      if (isLoadMore) {
        setEvents(prev => [...prev, ...data]);
      } else {
        setEvents(data);
      }
      setManagementPage(currentPage);
      setHasMoreManagement(count ? from + data.length < count : false);
      
      // Fetch registration counts for newly loaded events
      const eventIds = data.map(e => e.id);
      if (eventIds.length > 0) {
        const { data: countData, error: countError } = await supabase
          .from('registrations')
          .select('event_id')
          .in('event_id', eventIds);
        
        if (countData) {
          setRegCounts(prev => {
            const next = { ...prev };
            // Clear counts for the current batch to prevent double-counting on refresh
            eventIds.forEach(id => { next[id] = 0; });
            countData.forEach((r: any) => {
              const eid = Number(r.event_id);
              next[eid] = (next[eid] || 0) + 1;
            });
            return next;
          });
        }
      }
    }
    setLoading(false);
    setLoadingMore(false);
  }

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold text-text-main">Access Denied</h1>
          <p className="text-text-muted">
            This is a protected page. Please use the correct link provided to facilitators.
          </p>
          <button 
            onClick={() => window.location.href = '/portal'}
            className="text-primary font-medium hover:underline"
          >
            Go to Staff Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => window.location.href = `/portal?secret=${secret}`}
                  className="flex items-center gap-2 text-teal-600 font-medium hover:bg-gray-50 px-3 py-2 rounded-lg transition-all text-sm"
                >
                  <ArrowRight className="rotate-180" size={16} />
                  Back to Hub
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-text-main">Events Dashboard</h1>
                  <p className="text-sm text-text-muted">Manage upcoming and completed events</p>
                </div>
              </div>

            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => {
                  setEditingEvent(null);
                  setActiveTab("create");
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "create" ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text-main"
                }`}
              >
                <Plus size={16} />
                {editingEvent ? "Editing Event" : "Create Event"}
              </button>
              <button
                onClick={() => {
                  setActiveTab("manage");
                  fetchUpcomingEvents();
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "manage" ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text-main"
                }`}
              >
                <HistoryIcon size={16} />
                Manage Events
              </button>
              <button
                onClick={() => {
                  setActiveTab("reports");
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "reports" ? "bg-white text-primary shadow-sm" : "text-text-muted hover:text-text-main"
                }`}
              >
                <Award size={16} />
                Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {activeTab === "create" ? (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CreateEventForm 
                conductors={conductors} 
                onSuccess={() => {
                  setEditingEvent(null);
                  fetchUpcomingEvents(false); // Refresh list
                  setActiveTab("manage");
                }} 
                initialData={editingEvent}
              />
            </motion.div>
          ) : activeTab === "manage" ? (
            <motion.div
              key="manage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ManageEventsList 
                events={events} 
                loading={loading} 
                conductors={conductors} 
                onRefresh={() => fetchUpcomingEvents(false)} 
                onLoadMore={() => fetchUpcomingEvents(true)}
                hasMore={hasMoreManagement}
                loadingMore={loadingMore}
                facilitatorFilter={facilitatorFilter}
                onFilterChange={setFacilitatorFilter}
                regCounts={regCounts}
                onEdit={(event: any) => {
                  setEditingEvent(event);
                  setActiveTab("create");
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="reports"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ReportsView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function CreateEventForm({ onSuccess, conductors, initialData }: { onSuccess: () => void, conductors: any[], initialData?: any }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    location: initialData?.location || "",
    region: initialData?.region || "Asia",
    type: initialData?.type || "In-Person",
    description: initialData?.description || "",
    agenda: Array.isArray(initialData?.agenda) ? initialData.agenda.join("\n") : (initialData?.agenda || ""),
    country: initialData?.country || "",
    conductor_id: initialData?.conductor_id || "",
    conductor_type: initialData?.conductor_type || "",
    special_note: initialData?.special_note || "",
    sessions: Array.isArray(initialData?.sessions) && initialData.sessions.length > 0 
      ? initialData.sessions 
      : [{ 
          id: crypto.randomUUID(), 
          date: initialData?.date || "", 
          module: initialData?.act_module || "awareness",
          start_time: initialData?.start_time || "10:00",
          end_time: initialData?.end_time || "12:00",
          collect_feedback: true,
          generate_certificate: false 
        }]
  });

  // Reset form when initialData changes (e.g. switching from one edit to another, or clearing edit)
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        location: initialData.location || "",
        region: initialData.region || "Asia",
        type: initialData.type || "In-Person",
        description: initialData.description || "",
        agenda: Array.isArray(initialData.agenda) ? initialData.agenda.join("\n") : (initialData.agenda || ""),
        country: initialData.country || "",
        conductor_id: initialData.conductor_id || "",
        conductor_type: initialData.conductor_type || "",
        special_note: initialData.special_note || "",
        sessions: Array.isArray(initialData.sessions) && initialData.sessions.length > 0 
          ? initialData.sessions 
          : [{ 
              id: crypto.randomUUID(), 
              date: initialData.date || "", 
              module: initialData.act_module || "awareness",
              start_time: initialData.start_time || "10:00",
              end_time: initialData.end_time || "12:00",
              collect_feedback: true,
              generate_certificate: false 
            }]
      });
    } else {
      setFormData({
        title: "",
        location: "",
        region: "Asia",
        type: "In-Person",
        description: "",
        agenda: "",
        country: "",
        conductor_id: "",
        conductor_type: "",
        special_note: "",
        sessions: [{ 
          id: crypto.randomUUID(), 
          date: "", 
          module: "awareness", 
          start_time: "10:00",
          end_time: "12:00",
          collect_feedback: true, 
          generate_certificate: false 
        }]
      });
    }
  }, [initialData]);

  const addSession = () => {
    const lastSession = formData.sessions[formData.sessions.length - 1];
    setFormData({
      ...formData,
      sessions: [
        ...formData.sessions,
        { 
          id: crypto.randomUUID(), 
          date: "", 
          module: "awareness",
          start_time: lastSession?.start_time || "10:00",
          end_time: lastSession?.end_time || "12:00",
          collect_feedback: true,
          generate_certificate: false 
        }
      ]
    });
  };

  const removeSession = (id: string) => {
    if (formData.sessions.length === 1) return;
    setFormData({
      ...formData,
      sessions: formData.sessions.filter((s: any) => s.id !== id)
    });
  };

  const updateSession = (id: string, field: string, value: any) => {
    setFormData({
      ...formData,
      sessions: formData.sessions.map((s: any) => 
        s.id === id ? { ...s, [field]: value } : s
      )
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Standardize agenda (split by lines into array)
    const processedAgenda = formData.agenda
      .split("\n")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "");

    // For backward compatibility, keep the main date and act_module as the first session
    const firstSession = formData.sessions[0];
    
    const payload = {
      ...formData,
      agenda: processedAgenda,
      date: firstSession.date,
      act_module: firstSession.module,
      start_time: firstSession.start_time,
      end_time: firstSession.end_time,
      status: initialData?.status || "upcoming"
    };

    if (initialData?.id) {
      const { error } = await supabase
        .from("events")
        .update(payload)
        .eq("id", initialData.id);

      if (!error) {
        alert("Event updated successfully!");
        onSuccess();
      } else {
        alert("Error updating event: " + error.message);
      }
    } else {
      const { error } = await supabase.from("events").insert([payload]);
      if (!error) {
        alert("Event created successfully!");
        onSuccess();
      } else {
        alert("Error creating event: " + error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-teal-900/5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text-main">{initialData ? "Edit Event" : "Create New Event"}</h2>
        {initialData && (
          <button 
            type="button"
            onClick={onSuccess}
            className="text-sm text-text-muted hover:text-primary font-medium"
          >
            Cancel Edit
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Event Title <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <select
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              >
                <option value="">Select Country</option>
                {countries.map((c: any) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none group-hover:text-primary transition-colors" size={18} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Region <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            >
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="In-Person">In-Person</option>
              <option value="Online">Online</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-main">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="What is this event about?"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-main">Event Agenda (One item per line) <span className="text-red-500">*</span></label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            value={formData.agenda}
            onChange={(e) => setFormData({ ...formData, agenda: e.target.value })}
            placeholder="Introduction&#10;Workshop Session&#10;Meditation&#10;Closing"
          />
        </div>

        {/* Multi-session Manager */}
        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-text-main">Event Sessions</h3>
              <p className="text-xs text-text-muted">Manage days, feedback collection, and certificates</p>
            </div>
            <button 
              type="button" 
              onClick={addSession}
              className="flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-lg text-xs font-bold hover:bg-teal-600 hover:text-white transition-all"
            >
              <Plus size={14} /> Add Session
            </button>
          </div>

          <div className="grid gap-4">
            {formData.sessions.map((session: any, idx: number) => (
              <div key={session.id} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 relative group animate-in fade-in slide-in-from-top-2">
                {formData.sessions.length > 1 && (
                  <button 
                    type="button"
                    onClick={() => removeSession(session.id)}
                    className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
                
                <div className="grid md:grid-cols-4 gap-4 items-end">
                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Day {idx + 1} Date</label>
                    <input
                      required
                      type="date"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary text-sm"
                      value={session.date}
                      onChange={(e) => updateSession(session.id, 'date', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Module</label>
                    <select
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary text-sm"
                      value={session.module}
                      onChange={(e) => updateSession(session.id, 'module', e.target.value)}
                    >
                      <option value="awareness">Awareness</option>
                      <option value="contemplation">Contemplation</option>
                      <option value="transformative_silence">Transformative Silence</option>
                      <option value="combined">Combined</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Start Time</label>
                    <input
                      required
                      type="time"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary text-sm"
                      value={session.start_time || "10:00"}
                      onChange={(e) => updateSession(session.id, 'start_time', e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5 md:col-span-1">
                    <label className="text-[10px] uppercase font-bold text-text-muted tracking-wider">End Time</label>
                    <input
                      required
                      type="time"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-primary text-sm"
                      value={session.end_time || "12:00"}
                      onChange={(e) => updateSession(session.id, 'end_time', e.target.value)}
                    />
                  </div>

                  <div className="flex md:col-span-4 gap-6 h-full items-center pt-2 bg-white/50 p-3 rounded-xl border border-white">
                    <label className="relative inline-flex items-center cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={session.collect_feedback}
                        onChange={(e) => updateSession(session.id, 'collect_feedback', e.target.checked)}
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                      <span className="ml-2 text-xs font-semibold text-text-main">Collect Feedback</span>
                    </label>

                    <label className="relative inline-flex items-center cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={session.generate_certificate}
                        onChange={(e) => updateSession(session.id, 'generate_certificate', e.target.checked)}
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-500"></div>
                      <span className="ml-2 text-xs font-semibold text-text-main">Certificate</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-main">
            Special Instructions / Note for Students
          </label>
          <textarea
            rows={2}
            className="w-full px-4 py-3 bg-teal-50/30 border border-teal-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            value={formData.special_note}
            onChange={(e) => setFormData({ ...formData, special_note: e.target.value })}
            placeholder="e.g. Please bring a water bottle and a notebook."
          />
          <p className="text-[10px] text-text-muted ml-1">
            <strong>Why is this here?</strong> This note will be automatically included in the student's registration confirmation email, saving you from sending manual reminders later.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-main">
            Host / Conductor <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <select
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            value={`${formData.conductor_type}:${formData.conductor_id}`}
            onChange={(e) => {
              const val = e.target.value;
              if (!val) {
                setFormData({ ...formData, conductor_type: "", conductor_id: "" });
                return;
              }
              const [type, id] = val.split(":");
              setFormData({ 
                ...formData, 
                conductor_type: type, 
                conductor_id: id 
              });
            }}
          >
            <option value="">Select a conductor...</option>
            
            <optgroup label="Registered Facilitators">
              {conductors.filter((c: any) => c.type === 'facilitator').length > 0 ? (
                conductors.filter((c: any) => c.type === 'facilitator').map((c: any) => (
                  <option key={`fac-${c.id}`} value={`facilitator:${c.id}`}>
                    {c.name}
                  </option>
                ))
              ) : (
                <option disabled>No facilitators registered yet</option>
              )}
            </optgroup>
 
            <optgroup label="Core Team">
              {conductors.filter((c: any) => c.type === 'team').map((c: any) => (
                <option key={`team-${c.id}`} value={`team:${c.id}`}>
                  {c.name}
                </option>
              ))}
            </optgroup>
          </select>
          <p className="text-[10px] text-text-muted ml-1">This person will be featured on the event page.</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? 'Saving...' : (initialData ? 'Update Event' : 'Create Event')}
        </button>
      </form>
    </div>
  );
}

function ManageEventsList({ 
  events, 
  loading, 
  conductors, 
  onRefresh, 
  onLoadMore,
  hasMore,
  loadingMore,
  facilitatorFilter,
  onFilterChange,
  regCounts, 
  onEdit 
}: { 
  events: any[], 
  loading: boolean, 
  conductors: any[], 
  onRefresh: () => void | Promise<void>, 
  onLoadMore: () => void,
  hasMore: boolean,
  loadingMore: boolean,
  facilitatorFilter: string,
  onFilterChange: (id: string) => void,
  regCounts: any, 
  onEdit: (event: any) => void 
}) {
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<Record<number, File[]>>({});
  const [fetchingRegs, setFetchingRegs] = useState<number | null>(null);
  const [fetchingFeedback, setFetchingFeedback] = useState<number | null>(null);

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const currentTime = now.toTimeString().split(' ')[0];

  const downloadRegistrations = async (eventId: number, eventTitle: string) => {
    setFetchingRegs(eventId);
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('full_name, email, phone, country, created_at')
        .eq('event_id', eventId);

      if (error) throw error;
      if (!data || data.length === 0) {
        alert("No registrations found for this event.");
        return;
      }

      // Generate CSV
      const headers = ["Full Name", "Email", "Phone", "Country", "Registration Date"];
      const csvContent = [
        headers.join(","),
        ...data.map((row: any) => [
          `"${(row.full_name || "").replace(/"/g, '""')}"`,
          `"${(row.email || "").replace(/"/g, '""')}"`,
          `"${(row.phone || "").replace(/"/g, '""')}"`,
          `"${(row.country || "").replace(/"/g, '""')}"`,
          `"${new Date(row.created_at).toLocaleDateString()}"`
        ].join(","))
      ].join("\n");
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `registrations_${eventTitle.replace(/[^a-z0-0]/gi, '_').toLowerCase()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Error exporting registrations: " + err.message);
    } finally {
      setFetchingRegs(null);
    }
  };

  const downloadFeedback = async (event: any) => {
    setFetchingFeedback(event.id);
    try {
      const { data, error } = await supabase
        .from('event_feedback')
        .select('*')
        .eq('event_id', event.id);

      if (error) throw error;
      if (!data || data.length === 0) {
        alert("No feedback received for this event yet.");
        return;
      }

      // Map sessions for easy lookup
      const sessionMap = (event.sessions || []).reduce((acc: any, s: any) => {
        acc[s.id] = s;
        return acc;
      }, {});

      // Helper to get question text
      const getQuestion = (mod: string, qid: string) => {
        const modKey = mod as keyof typeof FEEDBACK_QUESTIONS;
        const modQuestions = FEEDBACK_QUESTIONS[modKey] || FEEDBACK_QUESTIONS.combined;
        return modQuestions.find(q => q.id === qid)?.question || qid;
      };

      // Generate CSV
      const headers = ["First Name", "Last Name", "Email", "Phone", "Module", "Session Date", "Q1", "A1", "Q2", "A2", "Q3", "A3", "Q4", "A4"];
      const csvContent = [
        headers.join(","),
        ...data.map((row: any) => {
          const session = sessionMap[row.session_id] || {};
          const mod = session.module || "unknown";
          const res = row.responses || {};
          
          return [
            `"${(row.first_name || "").replace(/"/g, '""')}"`,
            `"${(row.last_name || "").replace(/"/g, '""')}"`,
            `"${(row.email || "").replace(/"/g, '""')}"`,
            `"${(row.phone || "").replace(/"/g, '""')}"`,
            `"${(MODULE_LABELS[mod as keyof typeof MODULE_LABELS] || mod).replace(/"/g, '""')}"`,
            `"${(session.date || event.date).replace(/"/g, '""')}"`,
            `"${getQuestion(mod, "q1").replace(/"/g, '""')}"`,
            `"${(res.q1 || "").toString().replace(/"/g, '""')}"`,
            `"${getQuestion(mod, "q2").replace(/"/g, '""')}"`,
            `"${(res.q2 || "").toString().replace(/"/g, '""')}"`,
            `"${getQuestion(mod, "q3").replace(/"/g, '""')}"`,
            `"${(res.q3 || "").toString().replace(/"/g, '""')}"`,
            `"${getQuestion(mod, "q4").replace(/"/g, '""')}"`,
            `"${(res.q4 || "").toString().replace(/"/g, '""')}"`
          ].join(",");
        })
      ].join("\n");

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `feedback_${event.title.replace(/[^a-z0-0]/gi, '_').toLowerCase()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err: any) {
      alert("Error exporting feedback: " + err.message);
    } finally {
      setFetchingFeedback(null);
    }
  };

  const handleComplete = async (eventId: number) => {
    const files = selectedFiles[eventId];
    const hasFiles = files && files.length > 0;
    
    if (!hasFiles) {
      const confirmComplete = window.confirm("Mark this event as completed without photos? (You can add them later)");
      if (!confirmComplete) return;
    }
    
    // File size validation (2MB limit per file)
    if (hasFiles) {
      const MAX_SIZE = 2 * 1024 * 1024;
      for (const file of files) {
        if (file.size > MAX_SIZE) {
          return alert(`File "${file.name}" is too large! Please keep each image under 2MB.`);
        }
      }
    }
    
    setUpdatingId(eventId);
    try {
      const imageUrls: string[] = [];

      if (hasFiles) {
        // Upload all images
        for (const file of files) {
          const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from("event-images")
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from("event-images")
            .getPublicUrl(fileName);
          
          imageUrls.push(publicUrl);
        }
      }

      const updateDataObj: any = { status: "completed" };
      if (imageUrls.length > 0) {
        updateDataObj.image_url = imageUrls[0];
        updateDataObj.image_urls = imageUrls;
      }

      // Update Event with the list of URLs (if any)
      const { data: updateData, error: updateError } = await supabase
        .from("events")
        .update(updateDataObj)
        .eq("id", eventId)
        .select();

      if (updateError) throw updateError;
      if (!updateData || updateData.length === 0) {
        throw new Error("Update failed. Check your Supabase RLS policies for the 'events' table.");
      }

      alert(hasFiles ? `Event marked as completed with ${imageUrls.length} photos!` : "Event marked as completed! Users can now share feedback.");
      setSelectedFiles(prev => {
        const next = { ...prev };
        delete next[eventId];
        return next;
      });
      await onRefresh();
    } catch (err: any) {
      console.error("DEBUG: Dashboard Upload/Update failed", err);
      alert("Something went wrong! Error: " + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (eventId: number, title: string) => {
    const confirm1 = window.confirm(`Are you sure you want to DELETE "${title}"? This cannot be undone.`);
    if (!confirm1) return;

    const confirm2 = window.confirm(`LAST WARNING: This will permanently remove all data for "${title}". Are you absolutely sure?`);
    if (!confirm2) return;

    setUpdatingId(eventId);
    try {
      const { error } = await supabase.from("events").delete().eq("id", eventId);
      if (error) throw error;
      alert("Event deleted successfully.");
      await onRefresh();
    } catch (err: any) {
      alert("Error deleting event: " + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-main">Events Management</h2>
          <p className="text-sm text-text-muted">Manage scheduling and complete past events</p>
        </div>
        <div className="w-full md:w-64">
          <select
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer"
            value={facilitatorFilter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="">All Facilitators</option>
            {conductors.map(c => (
              <option key={`${c.type}-${c.id}`} value={c.id}>
                {c.name} ({c.type})
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && events.length === 0 ? (
        <div className="text-center py-20"><Loader2 className="animate-spin mx-auto text-primary" size={32} /></div>
      ) : events.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-gray-200">
          <p className="text-text-muted">No events found{facilitatorFilter ? " for this facilitator" : ""}.</p>
        </div>
      ) : (
        events.map((event: any) => (
          <div key={event.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-text-main">{event.title}</h3>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onEdit(event)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all text-xs font-semibold"
                      title="Edit Event"
                    >
                      <Edit size={14} />
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id, event.title)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all text-xs font-semibold"
                      title="Delete Event"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {(event.status === "completed" || event.date < today || (event.date === today && event.start_time <= currentTime)) ? (
                    <>
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full">ENROLLED/COMPLETED</span>
                      {!event.image_url && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                          <ImageIcon size={10} /> MISSING PHOTOS
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">UPCOMING</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {event.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {event.location}</span>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => downloadRegistrations(event.id, event.title)}
                      disabled={fetchingRegs === event.id}
                      className="flex items-center gap-1.5 text-primary hover:text-primary-hover font-medium transition-all"
                    >
                      {fetchingRegs === event.id ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                      Export {regCounts[event.id] || 0} Participant{regCounts[event.id] === 1 ? "" : "s"}
                    </button>
                    <button 
                      onClick={() => downloadFeedback(event)}
                      disabled={fetchingFeedback === event.id}
                      className="flex items-center gap-1.5 text-teal-600 hover:text-teal-700 font-medium transition-all"
                    >
                      {fetchingFeedback === event.id ? <Loader2 size={14} className="animate-spin" /> : <MessageSquare size={14} />}
                      Export Feedback
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[250px]">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    multiple 
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      setSelectedFiles((prev: any) => ({ ...prev, [event.id]: files }));
                    }}
                    className="hidden"
                    id={`file-${event.id}`}
                  />
                  <label
                    htmlFor={`file-${event.id}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-text-main rounded-xl transition-all cursor-pointer text-sm"
                  >
                    <ImageIcon size={16} />
                    {selectedFiles[event.id]?.length > 0 ? `${selectedFiles[event.id].length} Photos Selected` : "Select Event Photos"}
                  </label>
                </div>
                <button
                  onClick={() => handleComplete(event.id)}
                  disabled={updatingId !== null}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-all disabled:opacity-50 text-sm font-medium"
                >
                  {updatingId === event.id ? <Loader2 className="animate-spin" size={16} /> : (
                    <><Plus size={16} /> Upload Photos</>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {hasMore && (
        <div className="pt-4 text-center">
          <button
            onClick={onLoadMore}
            disabled={loadingMore}
            className="px-8 py-2 bg-white border border-gray-200 text-text-main hover:border-primary hover:text-primary rounded-xl transition-all disabled:opacity-50 text-sm font-semibold flex items-center gap-2 mx-auto"
          >
            {loadingMore ? <Loader2 className="animate-spin" size={16} /> : "Load More Events"}
          </button>
        </div>
      )}
    </div>
  );
}

function ReportsView() {
  const [exporting, setExporting] = useState<string | null>(null);

  const downloadAllFeedback = async (moduleFilter?: string) => {
    setExporting(moduleFilter || "all");
    try {
      let query = supabase.from('event_feedback').select('*, events(title, sessions)');
      
      const { data, error } = await query;

      if (error) throw error;
      if (!data || data.length === 0) {
        alert("No feedback found in the system.");
        return;
      }

      // Filter by module if requested (nested in sessions which we'd have to find)
      // Actually, feedback has session_id. We map sessions from the event.
      
      const headers = ["Event Title", "First Name", "Last Name", "Email", "Phone", "Module", "Session Date", "Q1", "A1", "Q2", "A2", "Q3", "A3", "Q4", "A4"];
      const csvRows: string[][] = [];

      data.forEach((row: any) => {
        const event = row.events || {};
        const sessions = event.sessions || [];
        const session = sessions.find((s: any) => s.id === row.session_id) || {};
        const mod = session.module || "unknown";
        
        // Apply module filter if present
        if (moduleFilter && mod !== moduleFilter) return;

        const res = row.responses || {};
        const getQuestion = (m: string, qid: string) => {
          const modKey = m as keyof typeof FEEDBACK_QUESTIONS;
          const modQuestions = FEEDBACK_QUESTIONS[modKey] || FEEDBACK_QUESTIONS.combined;
          return modQuestions.find(q => q.id === qid)?.question || qid;
        };

        csvRows.push([
          `"${(event.title || "Unknown").replace(/"/g, '""')}"`,
          `"${(row.first_name || "").replace(/"/g, '""')}"`,
          `"${(row.last_name || "").replace(/"/g, '""')}"`,
          `"${(row.email || "").replace(/"/g, '""')}"`,
          `"${(row.phone || "").replace(/"/g, '""')}"`,
          `"${(MODULE_LABELS[mod as keyof typeof MODULE_LABELS] || mod).replace(/"/g, '""')}"`,
          `"${(session.date || "").replace(/"/g, '""')}"`,
          `"${getQuestion(mod, "q1").replace(/"/g, '""')}"`,
          `"${(res.q1 || "").toString().replace(/"/g, '""')}"`,
          `"${getQuestion(mod, "q2").replace(/"/g, '""')}"`,
          `"${(res.q2 || "").toString().replace(/"/g, '""')}"`,
          `"${getQuestion(mod, "q3").replace(/"/g, '""')}"`,
          `"${(res.q3 || "").toString().replace(/"/g, '""')}"`,
          `"${getQuestion(mod, "q4").replace(/"/g, '""')}"`,
          `"${(res.q4 || "").toString().replace(/"/g, '""')}"`
        ]);
      });

      if (csvRows.length === 0) {
        alert(`No feedback found for module: ${moduleFilter}`);
        return;
      }

      const csvContent = [headers.join(","), ...csvRows.map(r => r.join(","))].join("\n");
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `global_feedback_${moduleFilter || "all"}_${Date.now()}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    } catch (err: any) {
      alert("Error exporting global feedback: " + err.message);
    } finally {
      setExporting(null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-text-main">Global Reports</h2>
        <p className="text-sm text-text-muted">Export analytics and feedback across all events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
            <MessageSquare size={24} />
          </div>
          <div>
            <h3 className="font-bold text-text-main">Feedback Reports</h3>
            <p className="text-sm text-text-muted italic">Download all feedback received across all sessions and countries.</p>
          </div>
          <div className="space-y-2 pt-2">
            <button
              onClick={() => downloadAllFeedback()}
              disabled={exporting !== null}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-hover transition-all disabled:opacity-50 text-sm font-semibold"
            >
              {exporting === "all" ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
              Export All Feedback (CSV)
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => downloadAllFeedback("awareness")}
                disabled={exporting !== null}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-text-main border border-gray-100 rounded-lg hover:bg-gray-100 transition-all text-xs font-medium"
              >
                Awareness Only
              </button>
              <button
                onClick={() => downloadAllFeedback("contemplation")}
                disabled={exporting !== null}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-text-main border border-gray-100 rounded-lg hover:bg-gray-100 transition-all text-xs font-medium"
              >
                Contemplation Only
              </button>
              <button
                onClick={() => downloadAllFeedback("transformative_silence")}
                disabled={exporting !== null}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-text-main border border-gray-100 rounded-lg hover:bg-gray-100 transition-all text-xs font-medium"
              >
                Silence Only
              </button>
              <button
                onClick={() => downloadAllFeedback("combined")}
                disabled={exporting !== null}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-text-main border border-gray-100 rounded-lg hover:bg-gray-100 transition-all text-xs font-medium"
              >
                Combined Only
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 opacity-75">
          <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <h3 className="font-bold text-text-main">Impact Statistics</h3>
            <p className="text-sm text-text-muted">High-level stats for UN reporting (Coming Soon)</p>
          </div>
          <div className="h-[100px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl text-xs text-text-muted">
            Charts & Visual Analytics
          </div>
        </div>
      </div>
    </div>
  );
}
