"use client";

import { useStaffAuth } from "@/hooks/useStaffAuth";
import Link from "next/link";
import type { ReactNode } from "react";

export const FacilitatorGate = ({ children }: { children: ReactNode }) => {
  const auth = useStaffAuth();

  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-text-muted">
        Loading…
      </div>
    );
  }

  if (!auth.userId || !auth.isStaff) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-xl font-semibold text-text-main">Facilitator access</h1>
          <p className="text-text-muted text-sm">
            Sign in with an account that has been granted facilitator or core-team access.
            New accounts default to participant until an administrator updates your role in
            Supabase.
          </p>
          <Link
            href="/portal/login"
            className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
          >
            Go to staff login
          </Link>
          <p className="text-xs text-text-muted">
            <Link href="/portal/register" className="text-teal-700 font-medium underline">
              First-time account setup
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
