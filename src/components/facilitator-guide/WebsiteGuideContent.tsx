"use client";

import Link from "next/link";

export const WebsiteGuideContent = () => {
  return (
    <div className="space-y-8 text-text-muted text-sm leading-relaxed">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
        Internal tools · Sign in at the staff portal · Facilitators and core team only
      </p>

      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6">
        <h2 className="text-lg font-semibold text-text-main mb-3">
          3-hour combined facilitator script
        </h2>
        <p className="mb-2">
          The full ACT arc in one workshop (timings and spoken prompts) lives at{" "}
          <Link
            href="/facilitator-guide/three-hour-program"
            className="text-teal-700 font-semibold underline"
          >
            /facilitator-guide/three-hour-program
          </Link>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-teal-100 bg-teal-50/40 p-6">
        <h2 className="text-lg font-semibold text-text-main mb-3">Staff Portal</h2>
        <p>
          Entry point:{" "}
          <Link href="/portal" className="text-teal-700 font-semibold underline">
            /portal
          </Link>
          . Sign in with email and password (core team promotes facilitators in Supabase).
          From here you open Event Management, facilitator intake, certificates, this
          Facilitator Guide, and the public Join page.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">Event Management</h2>
        <p className="mb-2">
          <Link
            href="/events-dashboard"
            className="text-teal-700 font-semibold underline"
          >
            /events-dashboard
          </Link>{" "}
          — Create and edit events; set country (timezone &amp; phone dial codes); add
          sessions; choose{" "}
          <strong className="text-text-main">ACT module</strong> (Awareness, Contemplation,
          or Transformative Silence) so participant feedback forms match what you taught.
          Toggle feedback collection and certificates per session when needed. Facilitators
          manage events they created; core team sees all events.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">Facilitator intake</h2>
        <p>
          <Link href="/facilitators" className="text-teal-700 font-semibold underline">
            /facilitators
          </Link>{" "}
          — Public application form for new facilitators (share the link as needed).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">Public pages (participants)</h2>
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
        <h2 className="text-lg font-semibold text-text-main mb-3">Feedback &amp; data</h2>
        <p>
          After sessions, participants submit module-specific reflections from the event
          flow. Coordinators use dashboard filters and CSV exports for review—ensure the
          module on the event record matches your room delivery.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">This guide</h2>
        <p>
          Use the Facilitator Guide index for{" "}
          <strong className="text-text-main">Awareness</strong>,{" "}
          <strong className="text-text-main">Contemplation</strong>, and{" "}
          <strong className="text-text-main">Transformative Silence</strong> delivery detail;
          use this page for site navigation.
        </p>
      </section>
    </div>
  );
};
