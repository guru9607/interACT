"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { MapPin } from "lucide-react";
import TeamModal from "@/components/TeamModal";
import Image from "next/image";

// Types
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  image_url: string | null;
  country: string | null;
  category: string;
};

const getInitialsAvatar = (name: string) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2A9D8F&color=fff&size=400`;

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('teams')
          .select('*')
          .order('sort_order', { ascending: true }) // Global sort
          .order('name', { ascending: true }); // Fallback sorting
        
        if (error) throw error;
        if (data) setTeam(data as TeamMember[]);
      } catch (err) {
        console.error('Error fetching team:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300); // Wait for animation
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <TeamModal 
        member={selectedMember} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Team</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            At interACT, our strength lies in our people — a diverse, passionate, and committed family dedicated to youth empowerment and global change.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div 
                key={person.id} 
                onClick={() => openModal(person)}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col items-center text-center px-6 py-10 border border-gray-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-2"
              >
                {/* Subtle top gradient bar for everyone */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-tr from-gray-50 to-white group-hover:from-primary group-hover:to-teal-400 transition-colors duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                     <Image
                      src={person.image_url || getInitialsAvatar(person.name)}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                  {person.name}
                </h3>
                
                <p className="text-primary font-medium text-sm uppercase tracking-wide opacity-80 group-hover:opacity-100 mb-4 h-10 flex items-center justify-center">
                  {person.role}
                </p>

                {person.country && (
                  <div className="inline-flex items-center text-xs text-text-muted bg-gray-50 px-3 py-1.5 rounded-full">
                    <MapPin size={10} className="mr-1.5 text-teal-500" /> {person.country}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
