"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Award,
  Compass,
  Users,
  Layers,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import TeamModal from "@/components/TeamModal";
import { ITeamMember } from "@/types/team";

const getInitialsAvatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0B2545&color=fff&size=400`;

interface TeamRosterClientProps {
  team: ITeamMember[];
}

export default function TeamRosterClient({ team }: TeamRosterClientProps) {
  const [selectedMember, setSelectedMember] = useState<ITeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member: ITeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 250);
  };

  // Tier groupings
  const visionaries = team.filter(
    (m) => (m.category || "").toLowerCase() === "visionaries"
  );
  const directors = team.filter(
    (m) => (m.category || "").toLowerCase() === "directors"
  );
  const ambassadors = team.filter(
    (m) => (m.category || "").toLowerCase() === "global ambassadors"
  );
  const operationalTeam = team.filter(
    (m) => (m.category || "").toLowerCase() === "global operational team"
  );
  const otherTeam = team.filter(
    (m) =>
      ![
        "visionaries",
        "directors",
        "global ambassadors",
        "global operational team",
      ].includes((m.category || "").toLowerCase())
  );

  return (
    <>
      <TeamModal member={selectedMember} isOpen={isModalOpen} onClose={closeModal} />

      <div className="space-y-20">
        {/* TIER 1: Founding Leadership & Visionaries */}
        {visionaries.length > 0 && (
          <section className="space-y-8">
            <div className="border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider mb-1">
                <Award size={14} />
                <span>Tier 01 · Founding Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                Visionaries &amp; Co-Founders
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Stewards of the interACT conceptual framework and institutional pedagogy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {visionaries.map((person) => (
                <div
                  key={person.id}
                  onClick={() => openModal(person)}
                  className="group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-[#0072CE] transition-all cursor-pointer flex flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-2/5 aspect-4/5 sm:aspect-auto relative bg-slate-100 shrink-0 border-b sm:border-b-0 sm:border-r border-slate-200 min-h-[220px]">
                    <Image
                      src={person.image_url || getInitialsAvatar(person.name)}
                      alt={person.name}
                      fill
                      className="object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-102"
                      priority
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block mb-1">
                        Co-Founder
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors leading-snug">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700">
                        {person.role}
                      </p>
                      {person.country && (
                        <div className="flex items-center text-sm text-slate-500 pt-1">
                          <MapPin size={13} className="mr-1 text-slate-400" />
                          <span>{person.country}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm text-[#0072CE] font-semibold">
                      <span>View Institutional Dossier</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TIER 2: Executive Board & Continental Regional Directors */}
        {directors.length > 0 && (
          <section className="space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider mb-1">
                <Compass size={14} />
                <span>Tier 02 · Continental Governance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                Executive Board &amp; Regional Directors
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Leading continental operations, curriculum compliance, and institutional relationships
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((person) => (
                <div
                  key={person.id}
                  onClick={() => openModal(person)}
                  className="group bg-white border border-slate-200 rounded-lg p-5 hover:border-[#0072CE] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded border border-slate-200 overflow-hidden relative bg-slate-100 shrink-0">
                      <Image
                        src={person.image_url || getInitialsAvatar(person.name)}
                        alt={person.name}
                        fill
                        className="object-cover object-[center_20%]"
                      />
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="text-lg font-serif font-bold text-[#0B2545] group-hover:text-[#0072CE] transition-colors leading-snug">
                        {person.name}
                      </h3>
                      <p className="text-sm text-[#0072CE] font-semibold leading-tight line-clamp-2">
                        {person.role}
                      </p>
                      {person.country && (
                        <div className="flex items-center text-xs text-slate-500 pt-0.5">
                          <MapPin size={12} className="mr-1 text-slate-400 shrink-0" />
                          <span>{person.country}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Regional Mandate</span>
                    <span className="text-[#0072CE] font-semibold flex items-center gap-1">
                      Profile <ChevronRight size={13} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TIER 3: Global Youth Ambassadors */}
        {ambassadors.length > 0 && (
          <section className="space-y-6 bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 sm:p-8">
            <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0072CE] uppercase tracking-wider mb-1">
                  <Users size={14} />
                  <span>Tier 03 · International Outreach</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B2545]">
                  Global Youth Ambassadors
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Active youth advocates representing interACT across national chapters and universities
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded">
                {ambassadors.length} Ambassadors Worldwide
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {ambassadors.map((person) => (
                <div
                  key={person.id}
                  onClick={() => openModal(person)}
                  className="group bg-white border border-slate-200 rounded p-4 hover:border-[#0072CE] transition-all cursor-pointer flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-100 border border-slate-200 shrink-0">
                      <Image
                        src={person.image_url || getInitialsAvatar(person.name)}
                        alt={person.name}
                        fill
                        className="object-cover object-[center_20%]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#0072CE] transition-colors">
                        {person.name}
                      </h4>
                      {person.country && (
                        <div className="flex items-center text-xs text-slate-500 mt-0.5">
                          <MapPin size={11} className="mr-1 text-slate-400 shrink-0" />
                          <span className="truncate">{person.country}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between font-mono">
                    <span>Chapter Envoy</span>
                    <span className="text-[#0072CE] font-bold">→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TIER 4: Global Operational Secretariat */}
        {operationalTeam.length > 0 && (
          <section className="bg-[#0B2545] text-white rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#14335A] pb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider mb-1">
                  <Layers size={14} />
                  <span>Tier 04 · Operations &amp; Administration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Global Operational Secretariat
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Coordination working group managing curriculum development, media, and digital platforms
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-300 bg-white/10 border border-white/20 px-3 py-1 rounded">
                Central Working Group
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {operationalTeam.map((person) => (
                <div
                  key={person.id}
                  onClick={() => openModal(person)}
                  className="group bg-white/5 border border-white/10 rounded p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer flex flex-col items-center justify-between space-y-3"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden relative bg-white/10 shrink-0 border border-white/20">
                    <Image
                      src={person.image_url || getInitialsAvatar(person.name)}
                      alt={person.name}
                      fill
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-sky-200 transition-colors line-clamp-1 leading-snug">
                      {person.name}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-0.5 leading-tight">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fallback for unclassified team members */}
        {otherTeam.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-serif font-bold text-[#0B2545]">Core Coordination</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {otherTeam.map((person) => (
                <div
                  key={person.id}
                  onClick={() => openModal(person)}
                  className="border border-slate-200 rounded p-3 bg-white hover:border-[#0072CE] transition-colors cursor-pointer"
                >
                  <h4 className="text-xs font-semibold text-slate-900">{person.name}</h4>
                  <p className="text-[10px] text-slate-500">{person.role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {team.length === 0 && (
          <div className="text-center py-20 text-slate-400 text-xs">
            No active governance records found in the directory.
          </div>
        )}
      </div>
    </>
  );
}

