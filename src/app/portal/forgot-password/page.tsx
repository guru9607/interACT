'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Loader2, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import AuthBackground from '@/components/AuthBackground';

export default function PortalForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const supabase = createClient();
    const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?next=/portal/update-password`,
    });
    setLoading(false);
    if (resetErr) {
      setError(resetErr.message);
      return;
    }
    setInfo('If that email exists in the interACT registry, a secure credential recovery link has been dispatched. Please inspect your inbox.');
  };

  return (
    <AuthBackground>
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-6 max-w-md w-full">
        {/* Institutional Stamp / Logo */}
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
              <Mail size={24} className="text-[#0072CE]" aria-hidden />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">
              Staff &amp; Facilitator Access
            </span>
            <h1 className="text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
              Reset Portal Password
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Accredited facilitators, faculty, and secretariat personnel can request a secure password reset link to restore portal access.
        </p>

        {error && (
          <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded p-3 text-left">
            {error}
          </div>
        )}

        {info && (
          <div className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded p-3 text-left leading-relaxed">
            {info}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
              Registered Email Address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="facilitator@theinteract.org"
              className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Dispatching Reset Link…
              </>
            ) : (
              <>
                Send Password Reset Email
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-center text-xs text-slate-500">
          <Link href="/portal/login" className="hover:text-[#0072CE] hover:underline">
            ← Return to Facilitator Sign In
          </Link>
        </div>
      </div>
    </AuthBackground>
  );
}
