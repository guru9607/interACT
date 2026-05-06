# Database & Supabase (interACT website)

This folder is how we **version and document** Postgres/Supabase changes in a professional, reviewable way.

## What lives where

| Path | Purpose |
|------|---------|
| `migrations/` | **Authoritative forward changes.** Each file is one logical change, applied in order on hosted Supabase (or local). |
| `snapshots/schema-reference.sql` | **Human-readable full picture** of `public` tables for developers, code review, and AI context. Updated when the live schema changes. |
| `scripts/` | **Optional manual SQL** (role promotion, backfills). Not applied automatically — run in Dashboard SQL editor when needed. |

## Staff authentication (Next.js app)

1. Apply migrations **in order** on your Supabase project (SQL Editor): **`migrations/20260507100000_events_created_by_auth_rls.sql`**, then **`migrations/20260508120000_teams_email_and_profile_role_from_roster.sql`** — **or**, if the first file is already applied and you prefer not to rely on the migration filename, paste **`scripts/teams-email-and-roster-profile.sql`** once (same SQL). The latter adds optional **`teams.email`** and updates **`handle_new_user`** (signup → **`facilitator`** when email matches **`facilitators`** or **`teams`**).
2. In **Authentication → URL configuration**, add redirect URLs:
   - Site URL (production): `https://your-domain.com`
   - Redirect allow list: `https://your-domain.com/auth/callback` and local dev `http://localhost:3000/auth/callback` (adjust port).
3. **`handle_new_user`** creates **`profiles`**. Role defaults to **`participant`** unless the signup email matches **`facilitators.email`** or **`teams.email`** → **`facilitator`** (and links **`user_id`** on those rows when still empty). Core team should set **`teams.email`** per row (see **`scripts/set-teams-roster-email.sql`**). Promote **`admin`** manually via **`scripts/promote-user-to-staff.sql`**.

Legacy **`NEXT_PUBLIC_DASHBOARD_SECRET`** is no longer used by the app once this migration is live — rely on Supabase Auth + `profiles.role`.

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
