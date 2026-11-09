'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Loader2, KeyRound, Eye, EyeOff, ArrowRight } from 'lucide-react';
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
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-6 max-w-md w-full">
        {/* Institutional Stamp / Logo */}
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
              <KeyRound size={24} className="text-[#0072CE]" aria-hidden />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#0072CE] uppercase tracking-wider block">
              Staff &amp; Facilitator Access
            </span>
            <h1 className="text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
              Update Portal Password
            </h1>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
          Set a secure, new password for your interACT facilitator account. Must be at least 8 characters.
        </p>

        {error && (
          <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded p-3 text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-slate-700 mb-1">
              New Password
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
                placeholder="At least 8 characters"
                className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirm" className="block text-xs font-semibold text-slate-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                id="confirm"
                type={showConfirm ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter password"
                className="w-full px-3 py-2 text-xs text-slate-800 bg-white border border-slate-300 rounded focus:border-[#0072CE] focus:ring-1 focus:ring-[#0072CE] outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#0072CE] text-white text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Updating Password…
              </>
            ) : (
              <>
                Save &amp; Enter Portal
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-center text-xs text-slate-500">
          <Link href="/portal" className="hover:text-[#0072CE] hover:underline">
            Cancel &amp; Return to Portal
          </Link>
        </div>
      </div>
    </AuthBackground>
  );
}
