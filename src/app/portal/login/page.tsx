'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, Lock } from 'lucide-react';

const PortalLoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="auth-page-bg">
      <div className="auth-card-shell p-8 sm:p-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-teal-50/80 text-teal-600 rounded-2xl flex items-center justify-center ring-1 ring-teal-100/80">
            <Lock size={32} aria-hidden />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              Staff login
            </h1>
            <p className="text-text-muted text-sm">
              Facilitators and core team use email and password. First time?{' '}
              <Link href="/portal/register" className="text-teal-700 font-medium underline underline-offset-4">
                Create an account
              </Link>
              , then ask an admin to enable access.
            </p>
          </div>

          {(queryError === 'auth' || error) && (
            <p className="w-full text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
              {error ?? 'Sign-in link expired or invalid. Try again or reset your password.'}
            </p>
          )}

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <label className="field-label-muted">
              Email
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-3 text-text-main font-normal bg-white border border-teal-100/90 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-shadow"
              />
            </label>
            <label className="field-label-muted">
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 text-text-main font-normal bg-white border border-teal-100/90 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-shadow"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="auth-primary-btn"
            >
              {loading ? <Loader2 className="animate-spin" size={22} /> : null}
              Sign in
              {!loading ? <ArrowRight size={20} aria-hidden /> : null}
            </button>
          </form>

          <p className="text-sm text-text-muted">
            <Link href="/portal/forgot-password" className="text-teal-700 font-medium underline">
              Forgot password?
            </Link>
          </p>
          <Link href="/portal" className="text-xs text-text-muted hover:text-teal-700">
            ← Back to portal home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PortalLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="auth-page-bg">
          <Loader2 className="animate-spin text-teal-600" size={36} aria-hidden />
        </div>
      }
    >
      <PortalLoginForm />
    </Suspense>
  );
}
