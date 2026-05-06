-- Optional: attach legacy events (created_by IS NULL) to one admin/facilitator user.
-- Replace :owner_id. Narrow with WHERE id IN (...) if needed.

-- UPDATE public.events
-- SET created_by = '00000000-0000-0000-0000-000000000000'::uuid
-- WHERE created_by IS NULL;
