"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  BookOpen, 
  Calendar, 
  Users, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  Settings,
  Globe,
  Layout,
  MousePointer2,
  CheckCircle2,
  AlertTriangle,
  FileText
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

export default function FacilitatorGuidePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>}>
      <GuideContent />
    </Suspense>
  );
}

function GuideContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret");
  const [authorized, setAuthorized] = useState(false);
  const [activeSection, setActiveSection] = useState("events");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["events", "feedback", "impact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!DASHBOARD_SECRET) {
      console.error("Dashboard secret is not configured!");
      return;
    }
    const storedSecret = localStorage.getItem("staff_secret_key");
    if (secret === DASHBOARD_SECRET || storedSecret === DASHBOARD_SECRET) {
      setAuthorized(true);
    }
  }, [secret]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <LockIcon size={40} />
          </div>
          <h1 className="text-2xl font-bold text-text-main">Access Denied</h1>
          <p className="text-text-muted">
            This guide is for internal use only. Please access it through the Staff Portal.
          </p>
          <button 
            onClick={() => router.push('/portal')}
            className="text-primary font-medium hover:underline"
          >
            Go to Staff Portal
          </button>
        </div>
      </div>
    );
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button 
              onClick={() => router.push(`/portal?secret=${secret}`)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-all text-text-muted hover:text-text-main"
              title="Back to Hub"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2 text-teal-700 font-bold">
              <BookOpen size={20} />
              <span>Facilitator Guide</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <NavButton active={activeSection === "events"} onClick={() => scrollTo("events")}>Events</NavButton>
            <NavButton active={activeSection === "feedback"} onClick={() => scrollTo("feedback")}>Feedback</NavButton>
            <NavButton active={activeSection === "impact"} onClick={() => scrollTo("impact")}>Impact</NavButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start">
          
          {/* Sidebar TOC - Visible on Desktop */}
          <div className="hidden lg:block sticky top-24 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Contents</h3>
              <TocLink active={activeSection === "events"} onClick={() => scrollTo("events")}>Managing Events</TocLink>
              <TocLink active={activeSection === "feedback"} onClick={() => scrollTo("feedback")}>Feedback System</TocLink>
              <TocLink active={activeSection === "impact"} onClick={() => scrollTo("impact")}>Showcasing Impact</TocLink>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-800 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={16} />
                Pro Tip
              </h4>
             <p className="text-xs text-teal-700 leading-relaxed">
               Always mark events as "Completed" immediately after the session to enable feedback collection.
             </p>
            </div>
          </div>

          {/* Main Content */}
          <main className="space-y-16">
            
            {/* Intro Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight">Creating Transformative <br/><span className="text-teal-600">Experiences</span></h1>
              <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                Welcome to the official interACT facilitator documentation. This visual guide ensures consistent, high-quality event management across all regions.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: Managing Events */}
            <section id="events" className="scroll-mt-24 space-y-8">
              <SectionHeader 
                icon={<Calendar className="text-blue-600" size={24} />} 
                title="Event Management" 
                subtitle="The core workflow for creating and tracking your sessions."
              />

              {/* Visual Workflow: Creating Event */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="prose prose-blue text-text-muted">
                    <p>When creating an event, accuracy is key. The details you enter directly populate the public event page and student notification emails.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm space-y-4">
                    <h4 className="font-bold text-text-main flex items-center gap-2">
                      <Layout size={18} className="text-blue-500" />
                      Critical Fields
                    </h4>
                    <ul className="space-y-3">
                      <CheckItem>
                        <strong>Host Selection:</strong> Choose a Facilitator or Core Team member. This person is featured as the "Conductor".
                      </CheckItem>
                      <CheckItem>
                        <strong>Location vs. Country:</strong> 
                        <span className="block text-xs mt-1 text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                           Location: "Vishwa Pariwartan Bhawan"<br/>
                           Country: "India"
                        </span>
                      </CheckItem>
                      <CheckItem>
                        <strong>ACT Module:</strong> Dictates the specific feedback questions (Awareness vs. Contemplation vs. Silence).
                      </CheckItem>
                    </ul>
                  </div>
                </div>

                {/* Mock UI: Event Form */}
                <div className="bg-gray-100 rounded-xl p-4 border border-gray-200 select-none">
                  <div className="bg-white rounded-lg shadow-sm p-4 space-y-4 border border-gray-100">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-xs font-bold text-gray-800">Create New Event</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="space-y-2 opacity-70">
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                      <div className="h-8 w-full bg-gray-50 border border-gray-200 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 opacity-70">
                       <div className="space-y-1">
                          <div className="h-2 w-10 bg-gray-200 rounded"></div>
                          <div className="h-8 w-full bg-gray-50 border border-gray-200 rounded"></div>
                       </div>
                       <div className="space-y-1">
                          <div className="h-2 w-10 bg-gray-200 rounded"></div>
                          <div className="h-8 w-full bg-gray-50 border border-gray-200 rounded"></div>
                       </div>
                    </div>
                    <div className="relative p-2 bg-blue-50 border border-blue-100 rounded border-dashed border-2">
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">IMPORTANT</div>
                      <div className="space-y-1">
                        <div className="h-2 w-20 bg-blue-200 rounded"></div>
                        <div className="h-8 w-full bg-white border border-blue-200 rounded flex items-center px-3 text-xs text-blue-800">
                          Select Host...
                        </div>
                      </div>
                    </div>
                    <div className="h-8 w-full bg-black rounded opacity-20"></div>
                  </div>
                  <p className="text-center text-[10px] text-gray-500 mt-2 font-mono">Figure 1: Event Creation Interface</p>
                </div>
              </div>
            </section>

            {/* Section 2: Feedback System */}
            <section id="feedback" className="scroll-mt-24 space-y-8">
              <SectionHeader 
                icon={<MessageSquare className="text-purple-600" size={24} />} 
                title="The Feedback System" 
                subtitle="Capturing the voice of our participants."
              />

              <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <MessageSquare size={120} />
                </div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6">
                      <h3 className="text-xl font-bold text-purple-900">How Feedback Works</h3>
                      <p className="text-purple-800/80 leading-relaxed">
                        Once you mark an event as <strong>Completed</strong>, a <strong>"Share Your Experience"</strong> button automatically appears on the public event page. 
                        Participants simply visit the event link to start their reflection.
                      </p>
                      
                      <div className="space-y-4 mt-4">
                         <div className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-purple-100 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                            <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-xl text-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">1</div>
                            <div>
                              <h4 className="font-bold text-gray-900">Personal Profile</h4>
                              <p className="text-sm text-gray-500">Contact details for future updates</p>
                            </div>
                         </div>
                         <div className="group flex items-center gap-4 bg-white p-4 rounded-2xl border border-purple-100 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                            <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-xl text-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">2</div>
                            <div>
                              <h4 className="font-bold text-gray-900">Reflection & Impact</h4>
                              <p className="text-sm text-gray-500">Module-specific questions & ratings</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Improved Visual: 2-Card Flow */}
                   <div className="relative h-64 flex items-center justify-center">
                      <div className="absolute inset-x-0 top-1/2 h-1 bg-purple-200 -translate-y-1/2 z-0 hidden sm:block"></div>
                      
                      <div className="grid grid-cols-2 gap-4 w-full max-w-md relative z-10">
                        {/* Card 1 Mock */}
                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-purple-50 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 mb-3 border-b border-gray-50 pb-2">
                             <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                             <span className="text-[10px] font-bold text-purple-400 uppercase">Step 1</span>
                          </div>
                          <div className="space-y-2">
                             <div className="h-6 w-8 h-8 rounded-full bg-gray-100 mx-auto mb-2"></div>
                             <div className="h-2 w-16 bg-gray-100 rounded mx-auto"></div>
                             <div className="h-8 w-full bg-gray-50 border border-gray-100 rounded-lg mt-2"></div>
                             <div className="h-8 w-full bg-gray-50 border border-gray-100 rounded-lg"></div>
                          </div>
                        </div>

                        {/* Card 2 Mock */}
                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-purple-50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                           <div className="flex items-center gap-2 mb-3 border-b border-gray-50 pb-2">
                             <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                             <span className="text-[10px] font-bold text-teal-400 uppercase">Step 2</span>
                          </div>
                          <div className="space-y-2">
                             <div className="h-12 w-full bg-gray-50 border border-gray-100 rounded-lg"></div>
                             <div className="flex gap-1 justify-center mt-2">
                                {[1,2,3,4,5].map(n => <div key={n} className="w-4 h-4 rounded bg-gray-100"></div>)}
                             </div>
                             <div className="h-6 w-20 bg-teal-500 rounded-lg mx-auto mt-2"></div>
                          </div>
                        </div>
                      </div>

                      {/* Connecting Arrow (Badge) */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border border-purple-100 z-20 flex items-center justify-center">
                         <ArrowLeft className="rotate-180 text-purple-400" size={14} />
                      </div>
                   </div>
                </div>
              </div>
            </section>

             {/* Section 3: Impact */}
            <section id="impact" className="scroll-mt-24 space-y-8">
              <SectionHeader 
                icon={<Globe className="text-teal-600" size={24} />} 
                title="Showcasing Global Impact" 
                subtitle="Turning local sessions into a global movement."
              />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {/* Card 1 */}
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                       <CheckCircle2 size={20} />
                    </div>
                    <h4 className="font-bold text-text-main mb-2">Automated Curation</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                       Our system automatically selects the <strong>top 4 most impactful testimonials</strong> for public display, prioritizing themes of "Self-Realization".
                    </p>
                 </div>

                  {/* Card 2 */}
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                       <MousePointer2 size={20} />
                    </div>
                    <h4 className="font-bold text-text-main mb-2">Global Gallery</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                       Completed events appear in the "Past Impacts" gallery. This is why accurate <strong>Country</strong> data is vital for a professional look.
                    </p>
                 </div>

                  {/* Card 3 */}
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                       <AlertTriangle size={20} />
                    </div>
                    <h4 className="font-bold text-text-main mb-2">Privacy First</h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                       Constructive feedback and improvement suggestions are <strong>never shown publicly</strong>. They are stored securely for internal review.
                    </p>
                 </div>
              </div>

               <div className="bg-gray-900 rounded-3xl p-8 text-center text-white space-y-6">
                  <h3 className="text-2xl font-bold">Ready to facilitate?</h3>
                  <p className="text-gray-400 max-w-xl mx-auto">
                    Head over to the Dashboard to create your next event or manage existing ones.
                  </p>
                  <button 
                    onClick={() => router.push(`/events-dashboard?secret=${secret}`)}
                    className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/25"
                  >
                    Go to Events Dashboard
                  </button>
               </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function SectionHeader({ icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
   return (
      <div className="space-y-2">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-white border border-gray-100 rounded-lg shadow-sm">
               {icon}
            </div>
            <h2 className="text-2xl font-bold text-text-main">{title}</h2>
         </div>
         <p className="text-text-muted text-lg pl-[3.25rem]">{subtitle}</p>
      </div>
   );
}

function NavButton({ active, children, onClick }: { active: boolean, children: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        active 
        ? "bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-200" 
        : "text-text-muted hover:bg-gray-50 hover:text-text-main"
      }`}
    >
      {children}
    </button>
  );
}

function TocLink({ active, children, onClick }: { active: boolean, children: React.ReactNode, onClick: () => void }) {
   return (
      <button 
         onClick={onClick}
         className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all border-l-2 ${
            active
            ? "border-teal-500 bg-teal-50 text-teal-800 font-bold"
            : "border-transparent text-text-muted hover:text-text-main hover:bg-gray-50"
         }`}
      >
         {children}
      </button>
   );
}

function CheckItem({ children }: { children: React.ReactNode }) {
   return (
      <li className="flex items-start gap-3 text-sm text-text-muted">
         <div className="mt-1 w-4 h-4 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <CheckCircle2 size={10} />
         </div>
         <span className="flex-1">{children}</span>
      </li>
   );
}

function LockIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
