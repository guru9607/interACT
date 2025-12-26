"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar, MapPin, Clock, Users, ArrowLeft, CheckCircle2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

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
  time: string;
  location: string;
  region: "Americas" | "Europe" | "Africa" | "Asia" | "Oceania";
  type: "Online" | "In-Person" | "Hybrid";
  description: string;
  agenda: string[];
  facilitators: Facilitator[];
  capacity: number | null;
};

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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

        // Combine event data with facilitators
        setEvent({
          ...eventData,
          facilitators: [] // facilitators
        });
      } catch (err: any) {
        console.error('Error fetching event:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
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
      const { data, error: supabaseError } = await supabase
        .from('registrations')
        .insert([registrationData]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting registration:', err);
      setError(err.message || 'Failed to submit registration. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cream to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/join" className="inline-flex items-center text-primary hover:text-primary-hover mb-6 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              event.type === "Online" ? "bg-blue-100 text-blue-700" :
              event.type === "In-Person" ? "bg-green-100 text-green-700" :
              "bg-purple-100 text-purple-700"
            }`}>
              {event.type}
            </span>
            <span className="text-text-muted flex items-center">
              <Globe size={16} className="mr-1.5" />
              {event.region}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6 leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-lg text-text-muted mb-6">
            <span className="flex items-center">
              <Calendar size={20} className="mr-2 text-primary" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center">
              <Clock size={20} className="mr-2 text-primary" />
              {event.time}
            </span>
            <span className="flex items-center">
              <MapPin size={20} className="mr-2 text-primary" />
              {event.location}
            </span>
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
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-text-main pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilitators */}
            {/* <section>
              <h2 className="text-3xl font-bold text-text-main mb-6">Meet Your Facilitators</h2>
              <div className="space-y-6">
                {event.facilitators.map((facilitator, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <Image
                        src={facilitator.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(facilitator.name)}&background=2A9D8F&color=fff&size=200`}
                        alt={facilitator.name}
                        width={120}
                        height={120}
                        className="rounded-xl object-cover w-32 h-32"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-main mb-1">{facilitator.name}</h3>
                      <p className="text-primary font-medium mb-3">{facilitator.role}</p>
                      <p className="text-text-muted leading-relaxed">{facilitator.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
          </div>

          {/* Sidebar - Registration */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-100 p-8">
              <h3 className="text-2xl font-bold text-text-main mb-2">Register Now</h3>
              <p className="text-text-muted mb-6 text-sm">Secure your spot for this transformative event.</p>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-text-main mb-2">You're Registered!</h4>
                  <p className="text-text-muted text-sm mb-4">Check your email for confirmation and details.</p>
                  <button 
                    onClick={() => router.push('/join')}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Browse more events
                  </button>
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
    </div>
  );
}
