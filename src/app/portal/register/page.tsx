'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, UserPlus, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
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
      // Verification is disabled: user is logged in instantly
      router.push('/portal');
      router.refresh();
    } else {
      setInfo(
        'Check your email if confirmation is required. If your email matches our facilitator or core-team roster, you will get facilitator access automatically.'
      );
      router.refresh();
    }
  };

  return (
    <AuthBackground>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_32px_64px_-16px_rgba(27,67,61,0.08)] rounded-[2.5rem] p-8 sm:p-10 text-center"
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Decorative Logo / Icon Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-xl group-hover:scale-110 transition-transform duration-500" />
            <div className="relative w-20 h-20 bg-white/95 rounded-[1.6rem] border border-teal-100/60 shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:scale-[1.03]">
              {logoLoaded ? (
                <img
                  src="/logo.png"
                  alt="interACT Logo"
                  className="w-full h-full object-contain"
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                <UserPlus size={32} className="text-teal-600" aria-hidden />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight font-sans">
              Create facilitator login
            </h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Use the <strong className="text-text-main font-semibold">same email</strong> as your facilitator application or roster entry. Other emails stay as participant until promoted.
            </p>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-sm text-red-700 bg-red-50/80 border border-red-100 rounded-2xl px-4 py-3 text-left"
            >
              {error}
            </motion.p>
          )}

          {info && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-sm text-teal-800 bg-teal-50/85 border border-teal-100 rounded-2xl px-4 py-3 text-left leading-relaxed"
            >
              {info}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-2 w-full px-4 py-3.5 text-text-main bg-white border border-teal-100/90 rounded-2xl shadow-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all duration-200 placeholder:text-text-muted/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3.5 text-text-main bg-white border border-teal-100/90 rounded-2xl shadow-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all duration-200 placeholder:text-text-muted/40"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="•••••••• (min 8 chars)"
                  className="w-full pl-4 pr-11 py-3.5 text-text-main bg-white border border-teal-100/90 rounded-2xl shadow-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all duration-200 placeholder:text-text-muted/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/60 hover:text-teal-600 transition-colors p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-4 mt-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : null}
              <span>Create login</span>
              {!loading ? <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden /> : null}
            </button>
          </form>

          <div className="w-full pt-2 flex flex-col items-center space-y-3 border-t border-teal-50/60 text-sm">
            <p className="text-text-muted">
              Already have access?{' '}
              <Link href="/portal/login" className="text-teal-700 font-semibold hover:text-teal-800 underline underline-offset-4 transition-colors">
                Sign in
              </Link>
            </p>
            <Link href="/portal" className="text-xs text-text-muted hover:text-teal-700 flex items-center gap-1 font-medium transition-colors">
              ← Portal home
            </Link>
          </div>
        </div>
      </motion.div>
    </AuthBackground>
  );
};

export default function PortalRegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcfbf7] flex items-center justify-center">
          <Loader2 className="animate-spin text-teal-600" size={36} aria-hidden />
        </div>
      }
    >
      <PortalRegisterForm />
    </Suspense>
  );
}
