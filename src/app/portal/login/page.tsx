'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, Lock, Eye, EyeOff } from 'lucide-react';
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
                <Lock size={32} className="text-teal-600" aria-hidden />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight font-sans">
              Staff login
            </h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Facilitators and core team use email and password. First time?{' '}
              <Link href="/portal/register" className="text-teal-700 font-semibold underline underline-offset-4 hover:text-teal-800 transition-colors">
                Create an account
              </Link>
              , then ask an admin to enable access.
            </p>
          </div>

          {(queryError === 'auth' || error) && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-sm text-red-700 bg-red-50/80 border border-red-100 rounded-2xl px-4 py-3 text-left"
            >
              {error ?? 'Sign-in link expired or invalid. Try again or reset your password.'}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
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
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="block text-xs font-semibold text-text-muted uppercase tracking-wider">
                  Password
                </label>
              </div>
              <div className="relative mt-2">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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
              <span>Sign in</span>
              {!loading ? <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden /> : null}
            </button>
          </form>

          <div className="w-full pt-2 flex flex-col items-center space-y-3 border-t border-teal-50/60 text-sm">
            <Link href="/portal/forgot-password" className="text-teal-700 font-semibold hover:text-teal-800 underline underline-offset-4 transition-colors">
              Forgot password?
            </Link>
            <Link href="/portal" className="text-xs text-text-muted hover:text-teal-700 flex items-center gap-1 font-medium transition-colors">
              ← Back to portal home
            </Link>
          </div>
        </div>
      </motion.div>
    </AuthBackground>
  );
};

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fcfbf7] flex items-center justify-center">
          <Loader2 className="animate-spin text-teal-600" size={36} aria-hidden />
        </div>
      }
    >
      <PortalLoginForm />
    </Suspense>
  );
}
