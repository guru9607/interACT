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
    <div className="min-h-screen bg-teal-50/30 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-teal-900/10 border border-teal-100">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-3xl flex items-center justify-center">
            <KeyRound size={40} aria-hidden />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-text-main">Set new password</h1>
            <p className="text-text-muted text-sm">Complete this after opening the email link.</p>
          </div>

          {error ? (
            <p className="w-full text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>
          ) : null}

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <label className="block text-left text-xs font-semibold text-text-main uppercase tracking-wide">
              New password
              <input
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-3 bg-gray-50 border border-teal-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none"
              />
            </label>
            <label className="block text-left text-xs font-semibold text-text-main uppercase tracking-wide">
              Confirm password
              <input
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-2 w-full px-4 py-3 bg-gray-50 border border-teal-100 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20 disabled:opacity-60"
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
