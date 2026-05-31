'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Loader2, KeyRound, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import AuthBackground from '@/components/AuthBackground';

export default function PortalUpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    const supabase = createClient();
    const { error: updErr } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (updErr) {
      setError(updErr.message);
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
                <KeyRound size={32} className="text-teal-600" aria-hidden />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight font-sans">
              Set new password
            </h1>
            <p className="text-text-muted text-sm leading-relaxed">
              Complete this after opening the email reset link.
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

          <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                New password
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

            <div>
              <label htmlFor="confirm" className="block text-xs font-semibold text-text-muted uppercase tracking-wider pl-1">
                Confirm password
              </label>
              <div className="relative mt-2">
                <input
                  id="confirm"
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-4 pr-11 py-3.5 text-text-main bg-white border border-teal-100/90 rounded-2xl shadow-sm focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none transition-all duration-200 placeholder:text-text-muted/40"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted/60 hover:text-teal-600 transition-colors p-1"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-4 mt-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-600/15 hover:shadow-xl hover:shadow-teal-600/20 active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : null}
              <span>Save password</span>
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
