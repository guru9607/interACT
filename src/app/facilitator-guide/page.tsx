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
  const [activeSection, setActiveSection] = useState("hub");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hub", "events", "feedback", "reporting"];
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
            <NavButton active={activeSection === "hub"} onClick={() => scrollTo("hub")}>Hub</NavButton>
            <NavButton active={activeSection === "events"} onClick={() => scrollTo("events")}>Events</NavButton>
            <NavButton active={activeSection === "feedback"} onClick={() => scrollTo("feedback")}>Feedback</NavButton>
            <NavButton active={activeSection === "reporting"} onClick={() => scrollTo("reporting")}>Reporting</NavButton>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12 items-start">
          
          {/* Sidebar TOC - Visible on Desktop */}
          <div className="hidden lg:block sticky top-24 space-y-8">
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Contents</h3>
              <TocLink active={activeSection === "hub"} onClick={() => scrollTo("hub")}>The interACT Hub</TocLink>
              <TocLink active={activeSection === "events"} onClick={() => scrollTo("events")}>Event Scheduling</TocLink>
              <TocLink active={activeSection === "feedback"} onClick={() => scrollTo("feedback")}>Feedback Flow</TocLink>
              <TocLink active={activeSection === "reporting"} onClick={() => scrollTo("reporting")}>Reports & Exports</TocLink>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-800 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={16} />
                Portal Access
              </h4>
             <p className="text-xs text-teal-700 leading-relaxed">
               Access all facilitator tools through the interACT Hub at <code className="bg-teal-100/50 px-1 rounded">/portal</code>.
             </p>
            </div>
          </div>

          {/* Main Content */}
          <main className="space-y-16">
            
            {/* Intro Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold border border-teal-100">
                <ShieldCheck size={14} />
                OFFICIAL INSTITUTIONAL HANDBOOK
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-text-main tracking-tight leading-[1.1]">The Facilitator's <br/><span className="text-teal-600 underline decoration-teal-100 underline-offset-8">Operating Manual</span></h1>
              <p className="text-xl text-text-muted max-w-3xl leading-relaxed">
                This comprehensive guide provides the framework for professional event execution within the interACT ecosystem. Follow these standards to ensure data integrity and a premium participant experience.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 0: The interACT Hub */}
            <section id="hub" className="scroll-mt-24 space-y-10">
              <SectionHeader 
                icon={<ShieldCheck className="text-teal-600" size={24} />} 
                title="The interACT Hub" 
                subtitle="Your secure central workstation for mission management."
              />

              <div className="bg-white rounded-[2rem] border border-gray-200 p-8 shadow-sm space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                   <div className="space-y-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">1</div>
                      <h4 className="font-bold text-text-main">Encrypted Access</h4>
                      <p className="text-sm text-text-muted">Access is restricted via a <code>Staff Secret Key</code>. This key is persistent in your browser, so you only enter it once per device.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">2</div>
                      <h4 className="font-bold text-text-main">One-Tap Navigation</h4>
                      <p className="text-sm text-text-muted">The Hub links to Event Management, the Facilitator Registry, this Official Guide, and the Public Join pages.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold">3</div>
                      <h4 className="font-bold text-text-main">Unified Dashboard</h4>
                      <p className="text-sm text-text-muted">All regional data syncs in real-time, providing a global view of the interACT movement's impact.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Section 1: Event Scheduling */}
            <section id="events" className="scroll-mt-24 space-y-10">
              <SectionHeader 
                icon={<Calendar className="text-blue-600" size={24} />} 
                title="Protocol for Event Scheduling" 
                subtitle="Creating structured journeys with precision and professional clarity."
              />

              <div className="space-y-8">
                <div className="prose prose-blue text-text-muted max-w-none">
                  <p>When creating an event, you are building the digital storefront for participants. Every field selection impacts the automated journey—from the email they receive to the certificate they earn.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-blue-500">
                      <h4 className="font-bold text-text-main mb-3 flex items-center gap-2">
                        <FileText size={18} className="text-blue-500" />
                        Professional Descriptions
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        The <strong>Event Description</strong> should be welcoming yet professional. Focus on the transformation. 
                        <span className="block mt-2 bg-blue-50 p-2 rounded text-blue-800 italic">"Join us for a contemplative journey into inner strength, exploring the Awareness module through seated reflection and dialogue."</span>
                      </p>
                   </div>

                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-teal-500">
                      <h4 className="font-bold text-text-main mb-3 flex items-center gap-2">
                        <Globe size={18} className="text-teal-500" />
                        Location vs. Country
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        <strong>Location:</strong> The physical venue (e.g., "Main Hall, BK Centre").<br/>
                        <strong>Country:</strong> Selecting this is CRITICAL. It sets the timezone and pre-fills the participant's international dial code.
                      </p>
                   </div>

                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-purple-500">
                      <h4 className="font-bold text-text-main mb-3 flex items-center gap-2">
                        <Settings size={18} className="text-purple-500" />
                        Session Roadmaps
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        For multi-day events, add sessions individually. You can toggle <strong>Collect Feedback</strong> and <strong>Issue Certificate</strong> for each session. Usually, certificates are issued on the final day.
                      </p>
                   </div>

                   <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-orange-500">
                      <h4 className="font-bold text-text-main mb-3 flex items-center gap-2">
                        <Layout size={18} className="text-orange-500" />
                        ACT Module Selection
                      </h4>
                      <p className="text-sm text-text-muted leading-relaxed">
                        Choose between <strong>Awareness</strong>, <strong>Contemplation</strong>, or <strong>Silence</strong>. This selection automatically changes the questions in the feedback form.
                      </p>
                   </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                   <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-4">
                        <h4 className="font-bold text-slate-800">The Participant View</h4>
                        <p className="text-sm text-slate-600">Once scheduled, sessions appear in a "Roadmap" layout. Participants can see past sessions as 'Finished' and future ones as 'Coming Up'.</p>
                        <div className="flex gap-3">
                           <div className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-[10px] font-bold">AUTO-UPDATING</div>
                           <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">REAL-TIME SYNC</div>
                        </div>
                      </div>
                      <div className="w-full max-w-sm bg-white rounded-xl shadow-xl p-4 border border-slate-100">
                         <div className="space-y-3">
                            <div className="flex gap-4 items-start border-l-2 border-teal-100 pl-4 relative">
                              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-teal-500"></div>
                              <div className="flex-1">
                                <div className="h-1.5 w-12 bg-gray-100 rounded mb-1"></div>
                                <div className="h-2 w-24 bg-gray-200 rounded"></div>
                              </div>
                            </div>
                            <div className="flex gap-4 items-start border-l-2 border-gray-100 pl-4 relative opacity-50">
                              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-200"></div>
                              <div className="flex-1">
                                <div className="h-1.5 w-12 bg-gray-50 rounded mb-1"></div>
                                <div className="h-2 w-24 bg-gray-50 rounded"></div>
                              </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </section>


            {/* Section 3: Feedback & Certification Cycle */}
            <section id="feedback" className="scroll-mt-24 space-y-10">
              <SectionHeader 
                icon={<Award className="text-purple-600" size={24} />} 
                title="Feedback & Certification Cycle" 
                subtitle="Closing the loop with reflective data and digital credentials."
              />

              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                
                <div className="relative z-10 grid lg:grid-cols-[1fr_350px] gap-12 items-center">
                   <div className="space-y-8">
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold">The Golden Rule: Full Name Verification</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                            Participants must enter their <strong>Full Name exactly as they want it printed</strong>. Our system uses a high-res (2x Retina) PNG engine to generate certificates instantly upon submission.
                         </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-purple-400"><Globe size={16} /></div>
                            <h4 className="font-bold text-sm">Smart Auto-Prefix</h4>
                            <p className="text-xs text-gray-500">Phone codes are pre-filled based on the event's country selection.</p>
                         </div>
                         <div className="space-y-2">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-amber-400"><Award size={16} /></div>
                            <h4 className="font-bold text-sm">Manual Download</h4>
                            <p className="text-xs text-gray-500">Participants must tap 'Download Certificate' to trigger the PNG storage flow.</p>
                         </div>
                      </div>
                   </div>

                   <div className="relative">
                      {/* Certificate Visual */}
                      <div className="aspect-[1.4/1] bg-white rounded-xl border-[6px] border-slate-700 p-6 shadow-2xl scale-110">
                         <div className="absolute inset-0 border border-slate-100 m-1"></div>
                         <div className="text-center space-y-3 opacity-20">
                            <div className="h-1 w-20 bg-slate-400 mx-auto rounded"></div>
                            <div className="h-3 w-32 bg-slate-500 mx-auto rounded"></div>
                            <div className="h-1 w-24 bg-slate-400 mx-auto rounded pt-4"></div>
                         </div>
                         <div className="flex justify-around absolute bottom-6 inset-x-0 opacity-10">
                            {[1,2,3].map(i => <div key={i} className="h-0.5 w-8 bg-slate-500 rounded"></div>)}
                         </div>
                      </div>
                      <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-black shadow-xl animate-pulse">2X QUALITY</div>
                   </div>
                </div>
              </div>
            </section>

            {/* Section 4: Reporting & Impact */}
            <section id="reporting" className="scroll-mt-24 space-y-10">
              <SectionHeader 
                icon={<Globe className="text-teal-600" size={24} />} 
                title="Reporting & Impact" 
                subtitle="Leveraging data to communicate the movement's success."
              />
              
              <div className="space-y-8">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                       <h4 className="font-bold text-text-main flex items-center gap-2">
                          <Settings size={18} className="text-teal-500" />
                          Dashboard Filtering
                       </h4>
                       <p className="text-sm text-text-muted leading-relaxed">
                          The Master Dashboard allows you to <strong>Filter by Facilitator</strong>. This is essential for regional coordinators to track individual conductor performance and session volume.
                       </p>
                       <ul className="space-y-2">
                          <CheckItem>Quick-filter by Host or Conductor Name.</CheckItem>
                          <CheckItem>View exclusive metrics for specific regional modules.</CheckItem>
                       </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                       <h4 className="font-bold text-text-main flex items-center gap-2">
                          <FileText size={18} className="text-blue-500" />
                          CSV Export Protocol
                       </h4>
                       <p className="text-sm text-text-muted leading-relaxed">
                          Exports are standardized for global reporting. The generated CSV files contain the following verified data points:
                       </p>
                       <div className="flex flex-wrap gap-2">
                          {["Full Name", "Email", "Phone (+Code)", "Country", "ACT Module", "Session Date", "Q1-Q4 Responses"].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-500 rounded text-[10px] font-bold border border-gray-100">{tag}</span>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Impact Logic */}
                 <div className="bg-teal-50 rounded-[2rem] p-8 border border-teal-100 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                       <h3 className="text-xl font-bold text-teal-900">Data Transparency & Testimonials</h3>
                       <p className="text-teal-800/70 text-sm leading-relaxed">
                          Our "Auto-Showcase" logic automatically features 5-star feedback on public event pages. This builds immediate trust with new participants. Constructive feedback is flagged for internal review in the "Reports" tab.
                       </p>
                    </div>
                    <div className="flex gap-2">
                       {[1,2,3,4,5].map(i => <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, delay: i * 0.2 }} key={i} className="text-teal-500">★</motion.div>)}
                    </div>
                 </div>
              </div>

               <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                  <div className="max-w-2xl mx-auto space-y-4 relative z-10">
                    <h3 className="text-3xl font-bold">Ready to Conduct?</h3>
                    <p className="text-gray-400">
                      You now have the full operational framework to conduct an interACT session. Access the Hub to begin scheduling your next transformative journey.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <button 
                      onClick={() => router.push(`/portal?secret=${secret || ""}`)}
                      className="px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-teal-500/20"
                    >
                      Open interACT Hub
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/10"
                    >
                      Print Handbook
                    </button>
                  </div>
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
