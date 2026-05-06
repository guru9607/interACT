'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowRight, Loader2, UserPlus } from 'lucide-react';

const PortalRegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
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
    const { error: signErr } = await supabase.auth.signUp({
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
    setInfo(
      'Check your email if confirmation is required. If your email matches our facilitator or core-team roster, you will get facilitator access automatically.'
    );
    router.refresh();
  };

  return (
    <div className="auth-page-bg">
      <div className="auth-card-shell p-8 sm:p-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-teal-50/80 text-teal-600 rounded-2xl flex items-center justify-center ring-1 ring-teal-100/80">
            <UserPlus size={32} aria-hidden />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              Create facilitator login
            </h1>
            <p className="text-text-muted text-sm">
              Use the <strong className="text-text-main">same email</strong> as your facilitator application or roster entry.
              Other emails stay as participant until an admin promotes them.
            </p>
          </div>

          {error ? (
            <p className="w-full text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>
          ) : null}
          {info ? (
            <p className="w-full text-sm text-teal-800 bg-teal-50 rounded-xl px-4 py-3">{info}</p>
          ) : null}

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <label className="field-label-muted">
              Full name
              <input
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-2 w-full px-4 py-3 text-text-main font-normal bg-white border border-teal-100/90 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-shadow"
              />
            </label>
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
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 text-text-main font-normal bg-white border border-teal-100/90 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-shadow"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-teal-600 text-white font-semibold rounded-2xl hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin" size={22} /> : null}
              Create login
              {!loading ? <ArrowRight size={20} aria-hidden /> : null}
            </button>
          </form>

          <p className="text-sm text-text-muted">
            Already have access?{' '}
            <Link href="/portal/login" className="text-teal-700 font-medium underline underline-offset-4">
              Sign in
            </Link>
          </p>
          <Link href="/portal" className="text-xs text-text-muted hover:text-teal-700">
            ← Portal home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PortalRegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="auth-page-bg">
          <Loader2 className="animate-spin text-teal-600" size={36} aria-hidden />
        </div>
      }
    >
      <PortalRegisterForm />
    </Suspense>
  );
}
