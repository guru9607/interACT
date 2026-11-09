import { Globe, Shield } from "lucide-react";
import TeamRosterClient from "@/components/TeamRosterClient";
import { getSupabaseAnonRead } from "@/lib/supabase/anon-read";
import { ITeamMember } from "@/types/team";

export const revalidate = 60; // Revalidate every minute

async function getTeamData(): Promise<ITeamMember[]> {
  try {
    const supabase = getSupabaseAnonRead();
    const { data, error } = await supabase
      .from("teams")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

    if (error) {
      console.error("Error fetching teams from Supabase:", error);
      return [];
    }

    if (!data) return [];

    return (data as ITeamMember[]).map((member) => ({
      ...member,
      name: member.name ? member.name.trim() : "",
      role: member.role ? member.role.trim() : "",
      category: member.category ? member.category.trim() : "",
      country: member.country ? member.country.trim() : "",
    }));
  } catch (err) {
    console.error("Failed to load team data:", err);
    return [];
  }
}

export default async function TeamPage() {
  const team = await getTeamData();

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. INSTITUTIONAL HEADER & GOVERNANCE MANDATE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative border-b border-slate-200 bg-[#F8F9FA]">
        {/* Tri-color SDG Ribbon */}
        <div className="h-1 w-full flex" aria-hidden="true">
          <span className="flex-1 bg-[#4C9F38]" />
          <span className="flex-1 bg-[#00AED9]" />
          <span className="flex-1 bg-[#19486A]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-4">
            <Globe size={14} className="shrink-0" />
            <span>Civil Society Governance · Leadership &amp; Regional Secretariat</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-5">
            Leadership, Regional Directors &amp; Global Secretariat
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mb-8">
            The interACT initiative is governed by an international, multi-stakeholder civil society roster comprising founders, continental regional directors, youth ambassadors, and an operational secretariat across five continents—advancing the United Nations 2030 Agenda through validated contemplative pedagogy.
          </p>

          {/* 4-Column Governance Ledger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Governance Body:</span>
              <span className="font-semibold text-slate-800">25 International Officers</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Geographic Reach:</span>
              <span className="font-semibold text-slate-800">10+ Member Nations</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Regional Mandates:</span>
              <span className="font-semibold text-slate-800">5 Continental Divisions</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Operational Status:</span>
              <span className="font-semibold text-[#0072CE]">Pro-Bono Civil Society</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEADERSHIP ROSTER (BY FORMAL TIERS)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <TeamRosterClient team={team} />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. GOVERNANCE & CIVIL SOCIETY CHARTER NOTICE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-[#0072CE] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold text-slate-800">
                Institutional Governance &amp; Pro-Bono Commitment
              </h4>
              <p className="leading-relaxed text-slate-600">
                All officers, directors, mentors, and ambassadors of the interACT initiative serve on a voluntary, non-remunerated civil society basis. interACT is committed to transparent, non-sectarian youth development in alignment with United Nations Sustainable Development Goals 3, 16, and 17.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
