-- Promote an existing auth user to facilitator or core-team admin.
-- Replace :user_id and choose ONE role line.

-- UPDATE public.profiles
-- SET role = 'facilitator'
-- WHERE id = '00000000-0000-0000-0000-000000000000'::uuid;

-- UPDATE public.profiles
-- SET role = 'admin'
-- WHERE id = '00000000-0000-0000-0000-000000000000'::uuid;

-- Verify:
-- SELECT id, full_name, role FROM public.profiles WHERE id = '...'::uuid;
