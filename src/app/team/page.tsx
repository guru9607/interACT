"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { MapPin } from "lucide-react";
import TeamModal from "@/components/TeamModal";
import Image from "next/image";

import { ITeamMember } from "@/types/team";

const getInitialsAvatar = (name: string) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2A9D8F&color=fff&size=400`;

export default function TeamPage() {
  const [team, setTeam] = useState<ITeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('teams')
          .select('*')
          .order('sort_order', { ascending: true }) 
          .order('name', { ascending: true }); 
        
        if (error) throw error;
        if (data) setTeam(data as ITeamMember[]);
      } catch (err) {
        console.error('Error fetching team:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  const openModal = (member: ITeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300); 
  };

  // TIER 1: Visionaries
  const visionaries = team.filter(m => m.category?.trim().toLowerCase() === 'visionaries');

  // TIER 2: Advisors
  const advisors = team.filter(m => m.category?.toLowerCase() === 'advisors');

  // TIER 3: Directors (Board / Regional Leads)
  const directors = team.filter(m => m.category?.toLowerCase() === 'directors');

  // TIER 4: Global Ambassadors
  const ambassadors = team.filter(m => m.category?.toLowerCase() === 'global ambassadors');

  // TIER 5: Global Operational Team
  const operationalTeam = team.filter(m => m.category?.toLowerCase() === 'global operational team');

  // Any other members not categorized
  const otherTeam = team.filter(m => 
    ![
      'visionaries', 
      'advisors', 
      'directors', 
      'global ambassadors', 
      'global operational team'
    ].includes(m.category?.trim().toLowerCase() || '')
  );

  return (
    <div className="bg-white min-h-screen py-12">
      <TeamModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-text-main mb-4 tracking-tight">
            Our Global <span className="text-teal-600">Family</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            A diverse ecosystem of visionaries, mentors, and creators united by a common purpose.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-20">
            
            {/* TIER 1: Visionaries */}
            {visionaries.length > 0 && (
              <section className="relative">
                 <div className="flex flex-col items-center mb-10">
                   <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide mb-3 shadow-sm">
                      THE ROOTS
                   </div>
                   <h2 className="text-3xl md:text-4xl font-extrabold text-text-main text-center">Visionaries</h2>
                 </div>
                 
                 <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                   {visionaries.map((person) => (
                     <div 
                       key={person.id} 
                       onClick={() => openModal(person)}
                       className="group relative cursor-pointer"
                     >
                       <div className="w-48 h-48 md:w-64 md:h-64 mb-6 relative">
                         <div className="absolute inset-0 bg-teal-100/50 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                         <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-2 border-white group-hover:-translate-y-2 transition-transform duration-300">
                           <Image
                             src={person.image_url || getInitialsAvatar(person.name)}
                             alt={person.name}
                             fill
                             className="object-cover object-[center_20%]"
                             priority
                           />
                         </div>
                       </div>
                       <div className="text-center relative z-10">
                         <h3 className="text-xl md:text-2xl font-bold text-text-main mb-1 group-hover:text-primary transition-colors">{person.name}</h3>
                         <p className="text-primary font-bold uppercase tracking-wider text-xs">{person.role}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </section>
            )}

            {/* TIER 2: Advisors */}
            {advisors.length > 0 && (
              <section className="bg-cream/30 py-8 rounded-[2.5rem] px-6">
                 <div className="flex flex-col items-center mb-8">
                   <h2 className="text-2xl font-bold text-text-main">Strategic Advisors</h2>
                   <div className="h-1 w-10 bg-teal-200 mt-2 rounded-full"></div>
                 </div>

                 <div className="flex flex-wrap justify-center gap-5">
                  {advisors.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="group flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-teal-50 hover:border-teal-100 hover:shadow-xl transition-all cursor-pointer w-52"
                    >
                      <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden bg-teal-50 aspect-square group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={person.image_url || getInitialsAvatar(person.name)}
                          alt={person.name}
                          fill
                          className="object-cover object-[center_20%]"
                        />
                      </div>
                      <h4 className="text-base font-bold text-text-main mb-0.5 leading-tight">{person.name}</h4>
                      <p className="text-[10px] text-teal-600 font-medium">{person.role}</p>
                    </div>
                  ))}
                 </div>
              </section>
            )}

            {/* TIER 3: Directors */}
            {directors.length > 0 && (
              <section>
                 <div className="flex items-center gap-6 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main whitespace-nowrap">Directors</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-teal-100 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {directors.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center"
                    >
                      <div className="w-32 h-32 mb-4 rounded-full p-1 bg-teal-50 group-hover:bg-teal-400 transition-colors">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-white aspect-square shadow-inner">
                          <Image
                            src={person.image_url || getInitialsAvatar(person.name)}
                            alt={person.name}
                            fill
                            className="object-cover object-[center_20%]"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-1 truncate w-full group-hover:text-primary transition-colors">{person.name}</h3>
                      <p className="text-teal-600 font-semibold text-[11px] uppercase tracking-widest mb-3 h-8 flex items-center justify-center line-clamp-2 px-2">{person.role}</p>
                      {person.country && (
                        <div className="inline-flex items-center text-[10px] uppercase tracking-widest text-text-muted bg-gray-50 px-2.5 py-0.5 rounded-full font-bold">
                          <MapPin size={9} className="mr-1" /> {person.country}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TIER 4: Global Ambassadors */}
            {ambassadors.length > 0 && (
              <section className="relative py-8">
                 <div className="flex items-center gap-6 mb-10 justify-end">
                    <div className="h-px flex-1 bg-gradient-to-l from-teal-100 to-transparent"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main whitespace-nowrap">Global Ambassadors</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {ambassadors.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="group flex flex-col items-center text-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="relative w-20 h-20 mb-3 rounded-xl overflow-hidden bg-teal-50 aspect-square ring-2 ring-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={person.image_url || getInitialsAvatar(person.name)}
                          alt={person.name}
                          fill
                          className="object-cover object-[center_20%]"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-text-main mb-0.5 group-hover:text-primary transition-colors">{person.name}</h4>
                      <div className="flex items-center text-[10px] text-text-muted font-bold">
                         <MapPin size={8} className="mr-1" /> {person.country}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TIER 5: Global Operational Team */}
            {operationalTeam.length > 0 && (
              <section className="bg-teal-900 py-16 rounded-[3rem] px-6 sm:px-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl -z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">Global Operational Team</h2>
                    <p className="text-teal-200 text-center max-w-2xl font-light text-sm">The creative hands and hearts behind the interACT movement.</p>
                </div>
                
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {operationalTeam.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="group flex flex-col items-center text-center p-5 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden bg-teal-800/50 aspect-square ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300">
                        <Image
                          src={person.image_url || getInitialsAvatar(person.name)}
                          alt={person.name}
                          fill
                          className="object-cover object-[center_20%]"
                        />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1 group-hover:text-teal-300 transition-colors uppercase tracking-wider">{person.name}</h4>
                      <p className="text-[10px] text-teal-200/70 font-medium line-clamp-1">{person.role}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Fallback for others (if any) */}
            {otherTeam.length > 0 && (
               <section>
                 <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-2xl font-bold text-text-main whitespace-nowrap">Core Team</h2>
                    <div className="h-px flex-1 bg-teal-100"></div>
                </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {otherTeam.map((person) => (
                    <div key={person.id} onClick={() => openModal(person)} className="group flex flex-col items-center p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer">
                       <h3 className="font-bold text-sm">{person.name}</h3>
                       <p className="text-xs text-text-muted">{person.role}</p>
                    </div>
                  ))}
                 </div>
               </section>
            )}

            {team.length === 0 && !loading && (
              <div className="text-center py-20 text-text-muted">
                <p>No team members found in the records.</p>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
