"use client";

import Link from "next/link";

export function WebsiteGuideContent({ secretQuery }: { secretQuery: string }) {
  const q = secretQuery;

  return (
    <div className="space-y-8 text-text-muted text-sm leading-relaxed">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
        Internal tools · Staff secret required · Keep links bookmarked with your session
        secret when testing
      </p>

      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
        <h2 className="text-lg font-bold text-text-main mb-3">
          3-hour combined facilitator script
        </h2>
        <p className="mb-2">
          The full ACT arc in one workshop (timings and spoken prompts) lives at{" "}
          <Link
            href={`/facilitator-guide/three-hour-program${secretQuery}`}
            className="text-teal-700 font-semibold underline"
          >
            /facilitator-guide/three-hour-program
          </Link>
          — sourced from{" "}
          <code className="rounded bg-white/80 px-1 text-xs">
            Facilitator scripts interACT 3hours.docx
          </code>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-teal-100 bg-teal-50/40 p-6">
        <h2 className="text-lg font-bold text-text-main mb-3">Staff Portal</h2>
        <p>
          Entry point after login:{" "}
          <Link href={`/portal${q}`} className="text-teal-700 font-semibold underline">
            /portal
          </Link>
          . Use the shared staff secret key (stored in this browser after first success).
          From here you open Event Management, Facilitator Registration, Certificates,
          this Facilitator Guide, and the public Join page.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-text-main mb-3">Event Management</h2>
        <p className="mb-2">
          <Link
            href={`/events-dashboard${q}`}
            className="text-teal-700 font-semibold underline"
          >
            /events-dashboard
          </Link>{" "}
          — Create and edit events; set country (timezone &amp; phone dial codes);
          add sessions; choose{" "}
          <strong className="text-text-main">ACT module</strong> (Awareness,
          Contemplation, or Transformative Silence) so participant feedback forms match
          what you taught. Toggle feedback collection and certificates per session when
          needed.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-text-main mb-3">Facilitator Registration</h2>
        <p>
          <Link href={`/facilitators${q}`} className="text-teal-700 font-semibold underline">
            /facilitators
          </Link>{" "}
          — Register or update facilitator profiles per your regional process.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-text-main mb-3">Public pages (participants)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/modules" className="text-teal-700 font-semibold underline">
              /modules
            </Link>{" "}
            — Marketing-friendly summaries of what participants learn (not facilitator
            scripts).
          </li>
          <li>
            <Link href="/join" className="text-teal-700 font-semibold underline">
              /join
            </Link>{" "}
            — Where participants browse and register for published events.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-bold text-text-main mb-3">Feedback &amp; data</h2>
        <p>
          After sessions, participants submit module-specific reflections from the event
          flow. Coordinators use dashboard filters and CSV exports (see Event Management
          reporting areas) for review—ensure the module on the event record matches your
          room delivery.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-text-main mb-3">This guide</h2>
        <p>
          Use the Facilitator Guide index for{" "}
          <strong className="text-text-main">Awareness</strong>,{" "}
          <strong className="text-text-main">Contemplation</strong>, and{" "}
          <strong className="text-text-main">Transformative Silence</strong> delivery
          detail; use this page for site navigation. Always enter via Portal so your
          <code className="mx-1 rounded bg-gray-100 px-1 text-xs">secret</code> query
          parameter is attached to internal links when you copy URLs for testing.
        </p>
      </section>
    </div>
  );
}
