'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Loader2, KeyRound } from 'lucide-react';

export default function PortalUpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
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
    <div className="auth-page-bg">
      <div className="auth-card-shell p-8 sm:p-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-teal-50/80 text-teal-600 rounded-2xl flex items-center justify-center ring-1 ring-teal-100/80">
            <KeyRound size={32} aria-hidden />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-main tracking-tight">
              Set new password
            </h1>
            <p className="text-text-muted text-sm">Complete this after opening the email link.</p>
          </div>

          {error ? (
            <p className="w-full text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>
          ) : null}

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <label className="field-label-muted">
              New password
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
            <label className="field-label-muted">
              Confirm password
              <input
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-2 w-full px-4 py-3 text-text-main font-normal bg-white border border-teal-100/90 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-shadow"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="auth-primary-btn"
            >
              {loading ? <Loader2 className="animate-spin" size={22} /> : null}
              Save password
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
