# Supabase SQL utilities (manual)

These files are **not** applied automatically by the Next.js app. Run them in the **Supabase SQL Editor** when onboarding users or fixing data.

| File | Use |
|------|-----|
| [`promote-user-to-staff.sql`](promote-user-to-staff.sql) | After someone signs up, set `profiles.role` to `facilitator` or `admin`. |
| [`backfill-events-created-by.sql`](backfill-events-created-by.sql) | Optional: attach legacy events to an owner UUID (`created_by`). |
| [`teams-email-and-roster-profile.sql`](teams-email-and-roster-profile.sql) | **Run once if baseline migration is already applied:** adds `teams.email`, replaces `handle_new_user` (facilitator role when email matches `facilitators` or `teams`). Same as migration `20260508120000_...`. |
| [`set-teams-roster-email.sql`](set-teams-roster-email.sql) | Populate **`teams.email`** per core member after the column exists. |

Always confirm email/user id in the Dashboard (**Authentication → Users**) before updating roles.

See also [`../README.md`](../README.md) and [`../migrations/`](../migrations/).
