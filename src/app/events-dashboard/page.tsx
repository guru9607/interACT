"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { 
  Plus, 
  History, 
  CheckCircle2, 
  Image as ImageIcon, 
  Loader2, 
  AlertCircle,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Download,
  Users,
  Edit,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);
  const [conductors, setConductors] = useState<any[]>([]);
  const [regCounts, setRegCounts] = useState<Record<number, number>>({});
  const [editingEvent, setEditingEvent] = useState<any | null>(null);

  useEffect(() => {
    const storedSecret = localStorage.getItem("staff_secret_key");
    const validSecret = (secret === DASHBOARD_SECRET) || (storedSecret === DASHBOARD_SECRET);
    
    if (validSecret) {
      setAuthorized(true);
      fetchUpcomingEvents();
      fetchConductors();
    }
  }, [secret]);

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

  async function fetchUpcomingEvents() {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .or("status.eq.upcoming,status.is.null,and(status.eq.completed,image_url.is.null)")
      .order("date", { ascending: true });
    
    if (data) {
      setEvents(data);
      
      // Fetch registration counts for ALL events to ensure we have data
      const { data: countData, error: countError } = await supabase
        .from('registrations')
        .select('event_id');
      
      if (countError) {
        console.error("DEBUG: Error fetching registration counts:", countError);
      }

      if (countData) {
        console.log(`DEBUG: Found ${countData.length} total registrations across all events`);
        const counts: Record<number, number> = {};
        countData.forEach((r: any) => {
          const eid = Number(r.event_id);
          counts[eid] = (counts[eid] || 0) + 1;
        });
        console.log("DEBUG: Final registration counts object:", counts);
        setRegCounts(counts);
      } else {
        console.log("DEBUG: No registration data returned from Supabase");
      }
    }
    setLoading(false);
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
                <History size={16} />
                Complete Events
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
                  setActiveTab("manage");
                }} 
                initialData={editingEvent}
              />
            </motion.div>
          ) : (
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
                onRefresh={fetchUpcomingEvents} 
                regCounts={regCounts}
                onEdit={(event: any) => {
                  setEditingEvent(event);
                  setActiveTab("create");
                }}
              />
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
    date: initialData?.date || "",
    start_time: initialData?.start_time || "",
    location: initialData?.location || "",
    region: initialData?.region || "Asia",
    type: initialData?.type || "In-Person",
    description: initialData?.description || "",
    agenda: Array.isArray(initialData?.agenda) ? initialData.agenda.join("\n") : (initialData?.agenda || ""),
    act_module: initialData?.act_module || "combined", 
    country: initialData?.country || "",
    conductor_id: initialData?.conductor_id || "",
    conductor_type: initialData?.conductor_type || "",
    special_note: initialData?.special_note || "",
  });

  // Reset form when initialData changes (e.g. switching from one edit to another, or clearing edit)
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        date: initialData.date || "",
        start_time: initialData.start_time || "",
        location: initialData.location || "",
        region: initialData.region || "Asia",
        type: initialData.type || "In-Person",
        description: initialData.description || "",
        agenda: Array.isArray(initialData.agenda) ? initialData.agenda.join("\n") : (initialData.agenda || ""),
        act_module: initialData.act_module || "combined", 
        country: initialData.country || "",
        conductor_id: initialData.conductor_id || "",
        conductor_type: initialData.conductor_type || "",
        special_note: initialData.special_note || "",
      });
    } else {
      setFormData({
        title: "",
        date: "",
        start_time: "",
        location: "",
        region: "Asia",
        type: "In-Person",
        description: "",
        agenda: "",
        act_module: "combined", 
        country: "",
        conductor_id: "",
        conductor_type: "",
        special_note: "",
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Standardize agenda (split by lines into array)
    const processedAgenda = formData.agenda
      .split("\n")
      .map((item: string) => item.trim())
      .filter((item: string) => item !== "");

    if (initialData?.id) {
      // UPDATE
      const { error } = await supabase
        .from("events")
        .update({ 
          ...formData, 
          agenda: processedAgenda 
        })
        .eq("id", initialData.id);

      if (!error) {
        alert("Event updated successfully!");
        onSuccess();
      } else {
        alert("Error updating event: " + error.message);
      }
    } else {
      // INSERT
      const { error } = await supabase.from("events").insert([{ 
        ...formData, 
        agenda: processedAgenda, // Store as array
        status: "upcoming" 
      }]);
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
              Date <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="date"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="e.g. India"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-main">
              Start Time (24h format) <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="time"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              value={formData.start_time}
              onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
            />
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
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-main">
            ACT Module <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            value={formData.act_module}
            onChange={(e) => setFormData({ ...formData, act_module: e.target.value })}
          >
            <option value="awareness">Awareness (A) - Who am I?</option>
            <option value="contemplation">Contemplation (C) - What are my qualities?</option>
            <option value="transformative_silence">Transformative Silence (T) - How am I empowering myself?</option>
            <option value="combined">Combined (Full ACT Workshop)</option>
          </select>
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
  regCounts,
  onEdit 
}: { 
  events: any[], 
  loading: boolean, 
  conductors: any[], 
  onRefresh: () => Promise<void>, 
  regCounts: Record<number, number>,
  onEdit: (event: any) => void
}) {
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<Record<number, File[]>>({});
  const [fetchingRegs, setFetchingRegs] = useState<number | null>(null);

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
        .select(); // Critical: Select ensures we see if the update actually happened

      if (updateError) throw updateError;
      if (!updateData || updateData.length === 0) {
        throw new Error("Update failed. Check your Supabase RLS policies for the 'events' table.");
      }

      alert(hasFiles ? `Event marked as completed with ${imageUrls.length} photos!` : "Event marked as completed! Users can now share feedback.");
      // Clear files for this event
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

  if (loading) return <div className="text-center py-20"><Loader2 className="animate-spin mx-auto text-primary" size={32} /></div>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-text-main">Events Management</h2>
      <p className="text-sm text-text-muted -mt-4">Upcoming events or completed events missing photos</p>
      {events.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl text-center border border-dashed border-gray-200">
          <p className="text-text-muted">No upcoming events found.</p>
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
                {event.status === "completed" && (
                  <span className="px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] font-bold rounded-full">ENROLLED/COMPLETED</span>
                )}
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
                    <>{event.status === "completed" ? <><Plus size={16} /> Add Photos</> : <><CheckCircle2 size={16} /> Mark Completed</>}</>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
