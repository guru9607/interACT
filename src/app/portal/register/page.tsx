'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, UserPlus, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import AuthBackground from '@/components/AuthBackground';

const PortalRegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const qEmail = searchParams.get('email');
    const qName = searchParams.get('full_name');
    if (qEmail) setEmail(qEmail);
    if (qName) setFullName(qName);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const supabase = createClient();
      const { data, error: signErr } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${origin}/auth/callback?next=/portal`,
          data: { full_name: fullName.trim() },
        },
      });

      setLoading(false);
      if (signErr) {
        setError(signErr.message);
        return;
      }
      
      if (data?.session) {
        router.push('/portal');
        router.refresh();
      } else {
        setInfo(
          'Registration submitted. Please check your email for confirmation. Once verified against our authorized facilitator roster, your portal access will activate automatically.'
        );
        router.refresh();
      }
    } catch (err) {
      setLoading(false);
      const e = err as Error;
      setError(e.message || 'An unexpected error occurred during account creation.');
    }
  };

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
              Staff &amp; Facilitator Access
            </span>
            <h1 className="text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
              Create Portal Account
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Please register using the <strong className="text-slate-800">same email address</strong> submitted in your facilitator application or core roster.
        </p>

        {error && (
          <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded p-3 text-left">
            {error}
          </div>
        )}

        {info && (
          <div className="text-xs text-[#0058A3] bg-blue-50 border border-blue-200 rounded p-3 text-left leading-relaxed">
            {info}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
            />
          </div>

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
            <label htmlFor="password" className="block text-xs font-semibold text-slate-700 mb-1">
              Create Password (min. 8 characters)
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-3 pr-10 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
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
            <span>{loading ? 'Creating Credentials...' : 'Register Facilitator Credentials'}</span>
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 flex flex-col items-center space-y-2 text-xs">
          <p className="text-slate-500">
            Already verified?{' '}
            <Link href="/portal/login" className="text-[#0072CE] font-semibold hover:underline">
              Sign in to Portal
            </Link>
          </p>
          <p className="text-[11px] text-slate-400">
            Not yet registered as a facilitator?{' '}
            <Link href="/facilitators" className="text-[#0072CE] hover:underline">
              Submit Facilitator Application
            </Link>
          </p>
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
      <PortalRegisterForm />
    </Suspense>
  );
}
