# Database & Supabase (interACT website)

This folder is how we **version and document** Postgres/Supabase changes in a professional, reviewable way.

## What lives where

| Path | Purpose |
|------|---------|
| `migrations/` | **Authoritative forward changes.** Each file is one logical change, applied in order on hosted Supabase (or local). |
| `snapshots/schema-reference.sql` | **Human-readable full picture** of `public` tables for developers, code review, and AI context. Updated when the live schema changes. |

## Workflow (recommended)

### 1. Changing the database

1. **Draft SQL** in Supabase Dashboard (SQL editor) or locally.
2. **Copy the final DDL** into a **new** migration file:
   - Name: `supabase/migrations/YYYYMMDDHHmmss_short_description.sql`
   - Example: `20260506120000_add_events_featured_flag.sql`
3. **Apply** the migration on the target project (Dashboard → SQL, or Supabase CLI `db push` / linked project pipeline).
4. **Refresh the snapshot** (step 2 below) so `schema-reference.sql` stays honest.

**Rules**

- Do **not** rewrite old migration files after they have been applied anywhere.
- Prefer `IF NOT EXISTS` / safe patterns when adding columns or tables so re-runs are less fragile in non-prod.

### 2. Updating `snapshots/schema-reference.sql`

Whenever the **live** `public` schema changes (or after merging a migration):

1. In Supabase: **Database → Schema visualizer** or run a schema-only export.
2. Replace the body of `snapshots/schema-reference.sql` with the updated `CREATE TABLE` / key constraints for `public` (and update the changelog block at the bottom of that file).

Alternatively, with [Supabase CLI](https://supabase.com/docs/guides/cli) linked to the project:

```bash
supabase db dump --schema public -f supabase/snapshots/schema-reference.sql
```

Then re-apply the **reference header** and **changelog** comments at the top/bottom of that file (the raw dump is verbose; trimming to the tables this app uses is fine).

### 3. Optional: local Supabase

If you run `supabase init` and `supabase start` for local dev, keep `config.toml` in sync with your team. The committed `config.toml` here is a minimal baseline; adjust `project_id` and settings to match your org.

## Relationship to the app

- Next.js code (e.g. event dashboard, feedback) should match types and columns documented here and in migrations.
- `act_module` on `events` must stay aligned with `src/lib/constants.ts` (`awareness`, `contemplation`, `transformative_silence`, `combined`).
