'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Loader2, Mail } from 'lucide-react';

export default function PortalForgotPasswordPage() {
  const [email, setEmail] = useState('');
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
    <div className="auth-page-bg">
      <div className="auth-card-shell p-8 sm:p-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center">
            <Mail size={40} aria-hidden />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-text-main">Reset password</h1>
            <p className="text-text-muted text-sm">
              Existing facilitators without a password yet can use this flow after an admin has
              invited or registered their email.
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
            <button
              type="submit"
              disabled={loading}
              className="auth-primary-btn"
            >
              {loading ? <Loader2 className="animate-spin" size={22} /> : null}
              Send reset link
            </button>
          </form>

          <Link href="/portal/login" className="text-sm text-teal-700 font-medium underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
