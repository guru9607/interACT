"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function GuideChrome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const secret = searchParams.get("secret") || "";
  const q = secret ? `?secret=${encodeURIComponent(secret)}` : "";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-3 justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href={`/portal${q}`}
              className="inline-flex items-center text-text-muted hover:text-teal-700 font-medium"
            >
              Portal
            </Link>
            <span className="text-gray-300" aria-hidden>
              /
            </span>
            <Link
              href={`/facilitator-guide${q}`}
              className="inline-flex items-center gap-1 text-teal-700 font-semibold hover:underline"
            >
              <ArrowLeft size={16} aria-hidden />
              Facilitator Guide
            </Link>
            <span className="text-gray-300" aria-hidden>
              /
            </span>
            <span className="font-semibold text-text-main">{title}</span>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">{children}</main>
    </div>
  );
}
