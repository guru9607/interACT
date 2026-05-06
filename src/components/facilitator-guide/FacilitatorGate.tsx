"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const DASHBOARD_SECRET = process.env.NEXT_PUBLIC_DASHBOARD_SECRET;

export function FacilitatorGate({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const fromUrl = searchParams.get("secret");
    const stored = localStorage.getItem("staff_secret_key");
    const valid =
      !!DASHBOARD_SECRET &&
      (fromUrl === DASHBOARD_SECRET || stored === DASHBOARD_SECRET);
    setOk(valid);
    setReady(true);
  }, [searchParams]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-text-muted">
        Loading…
      </div>
    );
  }

  if (!ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-xl font-bold text-text-main">Access denied</h1>
          <p className="text-text-muted text-sm">
            Open the Facilitator Guide from the Staff Portal after signing in with your
            staff secret key.
          </p>
          <button
            type="button"
            onClick={() => router.push("/portal")}
            className="text-teal-700 font-medium underline"
          >
            Go to Portal
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
