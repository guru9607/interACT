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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0072CE] mb-3">
            <Globe size={14} className="shrink-0" />
            <span>Civil Society Governance · Leadership &amp; Regional Secretariat</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B2545] tracking-tight leading-tight mb-3">
            Leadership, Regional Directors &amp; Global Secretariat
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-6">
            The interACT initiative is guided by an international civil society team comprising founders, regional directors, youth advisors, and operational coordinators across five continents.
          </p>

          {/* 4-Column Governance Ledger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-slate-200">
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Leadership:</span>
              <span className="font-semibold text-slate-800 text-sm">25 Officers</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Geographic Reach:</span>
              <span className="font-semibold text-slate-800 text-sm">10+ Nations</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Divisions:</span>
              <span className="font-semibold text-slate-800 text-sm">5 Continents</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-xs">Status:</span>
              <span className="font-semibold text-[#0072CE] text-sm">Civil Society Initiative</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEADERSHIP ROSTER (BY FORMAL TIERS)
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <TeamRosterClient team={team} />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. GOVERNANCE & CIVIL SOCIETY CHARTER NOTICE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-10 text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Shield size={20} className="text-[#0072CE] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                Institutional Governance &amp; Pro-Bono Commitment
              </h4>
              <p className="leading-relaxed text-sm text-slate-600">
                All officers, directors, mentors, and ambassadors of the interACT initiative serve on a voluntary, non-remunerated civil society basis. interACT is committed to transparent, non-sectarian youth development in alignment with United Nations Sustainable Development Goals 3, 16, and 17.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
