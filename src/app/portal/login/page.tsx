'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import AuthBackground from '@/components/AuthBackground';

const PortalLoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const queryError = searchParams.get('error');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: signErr } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signErr) {
      setError(signErr.message);
      return;
    }
    router.push('/portal');
    router.refresh();
  };

  return (
    <AuthBackground>
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-6">
        
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
              <Lock size={24} className="text-[#0072CE]" aria-hidden />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">
              Staff &amp; Facilitator Access
            </span>
            <h1 className="text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
              Portal Authentication
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Authorized facilitators, faculty, and operational personnel sign in to access curriculum handbooks, register cohorts, and issue certificates.
        </p>

        {(queryError === 'auth' || error) && (
          <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded p-3 text-left">
            {error ?? 'Sign-in link expired or invalid. Please try again or reset your password.'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
              Official Email Address
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

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-xs font-semibold text-slate-700">
                Password
              </label>
              <Link href="/portal/forgot-password" className="text-[11px] text-[#0072CE] hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-3 pr-10 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#0072CE] hover:bg-[#0058A3] text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-60 cursor-pointer"
          >
            {loading ? <Loader2 className="animate-spin" size={14} /> : null}
            <span>{loading ? 'Authenticating...' : 'Sign In to Portal'}</span>
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 flex flex-col items-center space-y-2 text-xs">
          <p className="text-slate-500 text-center text-[11px] leading-relaxed">
            Facilitator accounts are provisioned directly by the Secretariat following institutional partner appointment. Public self-registration is closed.
          </p>
          <Link href="/" className="text-[11px] text-slate-400 hover:text-slate-600">
            ← Return to Public Website
          </Link>
        </div>

      </div>
    </AuthBackground>
  );
};

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
          <Loader2 className="animate-spin text-[#0072CE]" size={32} aria-hidden />
        </div>
      }
    >
      <PortalLoginForm />
    </Suspense>
  );
}
