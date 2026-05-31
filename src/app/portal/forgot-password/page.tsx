'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Loader2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
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
    setInfo('If that email exists in our system, we sent a reset link. Check your inbox.');
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
                <Mail size={32} className="text-teal-600" aria-hidden />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight font-sans">
              Reset password
            </h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Existing facilitators without a password yet can use this flow after an admin has invited or registered their email.
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

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-4 mt-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : null}
              <span>Send reset link</span>
            </button>
          </form>

          <div className="w-full pt-2 flex flex-col items-center space-y-3 border-t border-teal-50/60 text-sm">
            <Link href="/portal/login" className="text-teal-700 font-semibold hover:text-teal-800 underline underline-offset-4 transition-colors">
              Back to login
            </Link>
          </div>
        </div>
      </motion.div>
    </AuthBackground>
  );
}
