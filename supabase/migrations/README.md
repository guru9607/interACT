# Migrations

Add **one new file per change**, using a timestamp prefix so order is unambiguous:

```
YYYYMMDDHHmmss_description.sql
```

Example:

```
20260506120000_add_event_feedback_index.sql
```

**Contents**

- Only the SQL needed for that change (e.g. `ALTER TABLE …`, new `CREATE TABLE`, policy updates if you version them here).
- No full schema dump in a single migration unless you are bootstrapping a brand-new environment.

**After applying** a migration in Supabase, update `../snapshots/schema-reference.sql` and its changelog.
