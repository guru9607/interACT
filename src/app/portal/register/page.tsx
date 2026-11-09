'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2, Lock, ShieldCheck } from 'lucide-react';
import AuthBackground from '@/components/AuthBackground';

const ClosedRegistrationNotice = () => {
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <AuthBackground>
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-6 max-w-md mx-auto">
        
        {/* Institutional Stamp */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded p-2 flex items-center justify-center">
            {logoLoaded ? (
              <img
                src="/logo.png"
                alt="interACT Logo"
                className="w-full h-full object-contain"
                onError={() => setLogoLoaded(false)}
              />
            ) : (
              <ShieldCheck size={24} className="text-[#0072CE]" aria-hidden />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">
              Institutional Governance · Closed Intake
            </span>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
              Facilitator Provisioning Policy
            </h1>
          </div>
        </div>

        {/* Notice Card */}
        <div className="bg-[#F8F9FA] border-l-4 border-[#0B2545] border-y border-r border-slate-200 rounded-r p-4 text-left space-y-2 text-xs text-slate-700 leading-relaxed">
          <div className="font-semibold text-[#0B2545] flex items-center gap-1.5">
            <Lock size={13} className="text-[#0072CE]" />
            Administrative Invitation Only
          </div>
          <p>
            Facilitator and coordinator credentials for the interACT Operational Portal are issued directly by the Secretariat following formal institutional partner appointment.
          </p>
          <p className="text-slate-600">
            Open public self-registration is strictly disabled to preserve instructional integrity, contemplative standards, and educational safety protocols.
          </p>
        </div>

        {/* Action Pathways */}
        <div className="space-y-3 pt-2">
          <Link
            href="/portal/login"
            className="w-full py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Sign In to Portal</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/"
            className="block text-xs text-slate-500 hover:text-slate-700 font-medium"
          >
            ← Return to Public Website
          </Link>
        </div>

        <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
          Authorized personnel requiring access assistance should contact their regional secretariat coordinator.
        </div>

      </div>
    </AuthBackground>
  );
};

export default function PortalRegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
          <Loader2 className="animate-spin text-[#0072CE]" size={32} aria-hidden />
        </div>
      }
    >
      <ClosedRegistrationNotice />
    </Suspense>
  );
}
