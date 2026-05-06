-- Optional roster email on teams (for matching signup → facilitator role).
ALTER TABLE public.teams
  ADD COLUMN IF NOT EXISTS email text;

COMMENT ON COLUMN public.teams.email IS 'Contact/login email for roster matching; optional. Lowercase comparisons used in handle_new_user.';

-- On signup: facilitator role if email exists in facilitators or teams; link user_id where empty.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_role text := 'participant';
  v_email text := NEW.email;
BEGIN
  IF v_email IS NOT NULL AND length(trim(v_email)) > 0 THEN
    IF EXISTS (
      SELECT 1
      FROM public.facilitators f
      WHERE lower(trim(f.email)) = lower(trim(v_email))
    )
    OR EXISTS (
      SELECT 1
      FROM public.teams t
      WHERE t.email IS NOT NULL
        AND length(trim(t.email)) > 0
        AND lower(trim(t.email)) = lower(trim(v_email))
    ) THEN
      v_role := 'facilitator';
    END IF;
  END IF;

  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    v_role
  )
  ON CONFLICT (id) DO NOTHING;

  IF v_email IS NOT NULL AND length(trim(v_email)) > 0 THEN
    UPDATE public.facilitators f
    SET user_id = NEW.id
    WHERE lower(trim(f.email)) = lower(trim(v_email))
      AND (f.user_id IS NULL OR f.user_id = NEW.id);

    UPDATE public.teams t
    SET user_id = NEW.id
    WHERE t.email IS NOT NULL
      AND length(trim(t.email)) > 0
      AND lower(trim(t.email)) = lower(trim(v_email))
      AND (t.user_id IS NULL OR t.user_id = NEW.id);
  END IF;

  RETURN NEW;
END;
$$;
