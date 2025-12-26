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

  const leadershipTeam = team.filter(m => m.category?.toLowerCase() === 'leadership');
  const ambassadorTeam = team.filter(m => m.category?.toLowerCase() === 'global ambassadors');
  const otherTeam = team.filter(m => !['leadership', 'global ambassadors'].includes(m.category?.toLowerCase() || ''));

  return (
    <div className="bg-white min-h-screen py-24">
      <TeamModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 underline-offset-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Our Global <span className="text-teal-600">Team</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Diverse family of visionaries dedicated to youth empowerment.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-24">
            
            {/* Leadership Section - Large Cards */}
            {leadershipTeam.length > 0 && (
              <section>
                 <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl font-bold text-text-main">Leadership</h2>
                    <div className="h-px flex-1 bg-teal-100"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {leadershipTeam.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="group bg-white rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col items-center text-center px-6 py-10 border border-gray-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-2"
                    >
                      <div className="w-32 h-32 mb-6 rounded-full p-1 bg-teal-50 group-hover:bg-teal-400 transition-colors">
                        <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                          <Image
                            src={person.image_url || getInitialsAvatar(person.name)}
                            alt={person.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-text-main mb-2 truncate w-full group-hover:text-primary transition-colors">{person.name}</h3>
                      <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-4 h-10 flex items-center">{person.role}</p>
                      {person.country && (
                        <div className="inline-flex items-center text-xs text-text-muted bg-gray-50 px-3 py-1 rounded-full">
                          <MapPin size={10} className="mr-1.5" /> {person.country}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Ambassadors Section - Compact List */}
            {ambassadorTeam.length > 0 && (
              <section>
                 <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl font-bold text-text-main">Global Ambassadors</h2>
                    <div className="h-px flex-1 bg-teal-100"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {ambassadorTeam.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-teal-50">
                        <Image
                          src={person.image_url || getInitialsAvatar(person.name)}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="text-sm font-bold text-text-main truncate group-hover:text-primary">{person.name}</h4>
                        <p className="text-xs text-text-muted truncate">{person.role || person.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Other Team Members Section (if any uncategorized) */}
            {otherTeam.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl font-bold text-text-main">Team Members</h2>
                    <div className="h-px flex-1 bg-teal-100"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {otherTeam.map((person) => (
                    <div 
                      key={person.id} 
                      onClick={() => openModal(person)}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-teal-50">
                        <Image
                          src={person.image_url || getInitialsAvatar(person.name)}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="text-sm font-bold text-text-main truncate group-hover:text-primary">{person.name}</h4>
                        <p className="text-xs text-text-muted truncate">{person.role || person.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Combined Section Fallback: If filtering returns nothing but team has data, show everyone as cards */}
            {team.length > 0 && leadershipTeam.length === 0 && ambassadorTeam.length === 0 && otherTeam.length === 0 && (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((person) => (
                    <div key={person.id} onClick={() => openModal(person)} className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-teal-100 text-center">
                       <h3 className="font-bold">{person.name}</h3>
                       <p>{person.role}</p>
                    </div>
                  ))}
               </div>
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
