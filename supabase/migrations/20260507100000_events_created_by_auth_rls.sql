-- Events ownership, auth helpers, RLS, storage policies, public RPCs.
-- Apply on hosted Supabase: SQL Editor (full script) or supabase db push.

-- ---------------------------------------------------------------------------
-- events.created_by — nullable for legacy rows (admins manage until backfilled)
-- ---------------------------------------------------------------------------
ALTER TABLE public.events
  ADD COLUMN IF NOT EXISTS created_by uuid REFERENCES auth.users(id);

-- Always stamp creator from session on insert (prevents client spoofing)
CREATE OR REPLACE FUNCTION public.events_set_created_by()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' AND auth.uid() IS NOT NULL THEN
    NEW.created_by := auth.uid();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_events_set_created_by ON public.events;
CREATE TRIGGER trg_events_set_created_by
  BEFORE INSERT ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.events_set_created_by();

-- ---------------------------------------------------------------------------
-- Dedupe redundant FK on event_feedback
-- ---------------------------------------------------------------------------
ALTER TABLE public.event_feedback
  DROP CONSTRAINT IF EXISTS fk_event_feedback_event;

-- ---------------------------------------------------------------------------
-- New Supabase Auth user → profiles row (default participant)
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    'participant'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ---------------------------------------------------------------------------
-- Role helpers (SECURITY DEFINER — avoids RLS recursion on profiles)
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = auth.uid()
      AND p.role = 'admin'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_staff()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = auth.uid()
      AND p.role IN ('facilitator', 'admin')
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_staff() TO anon, authenticated;

-- Homepage stats without exposing registration rows to anon SELECT
CREATE OR REPLACE FUNCTION public.get_public_dashboard_stats()
RETURNS TABLE(events_count bigint, participants_count bigint, countries_count bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    (SELECT count(*)::bigint FROM public.events),
    (SELECT count(*)::bigint FROM public.registrations),
    (
      SELECT count(DISTINCT country)::bigint
      FROM public.registrations
      WHERE country IS NOT NULL AND trim(country) <> ''
    );
$$;

GRANT EXECUTE ON FUNCTION public.get_public_dashboard_stats() TO anon, authenticated;

-- Public event testimonials (event page); table stays restricted for staff exports
CREATE OR REPLACE FUNCTION public.get_event_public_testimonials(p_event_id integer)
RETURNS TABLE(id integer, responses jsonb, full_name text)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT ef.id, ef.responses, ef.full_name
  FROM public.event_feedback ef
  WHERE ef.event_id = p_event_id;
$$;

GRANT EXECUTE ON FUNCTION public.get_event_public_testimonials(integer) TO anon, authenticated;

-- ---------------------------------------------------------------------------
-- Storage bucket for event images (public read)
-- ---------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('event-images', 'event-images', true)
ON CONFLICT (id) DO NOTHING;

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS profiles_select_own ON public.profiles;
CREATE POLICY profiles_select_own
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

DROP POLICY IF EXISTS profiles_update_own ON public.profiles;
CREATE POLICY profiles_update_own
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS events_select_public ON public.events;
CREATE POLICY events_select_public
  ON public.events
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS events_insert_staff ON public.events;
CREATE POLICY events_insert_staff
  ON public.events
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_staff());

DROP POLICY IF EXISTS events_update_staff ON public.events;
CREATE POLICY events_update_staff
  ON public.events
  FOR UPDATE
  TO authenticated
  USING (
    public.is_admin()
    OR (
      public.is_staff()
      AND created_by IS NOT DISTINCT FROM auth.uid()
      AND created_by IS NOT NULL
    )
  )
  WITH CHECK (
    public.is_admin()
    OR (
      public.is_staff()
      AND created_by IS NOT DISTINCT FROM auth.uid()
      AND created_by IS NOT NULL
    )
  );

DROP POLICY IF EXISTS events_delete_staff ON public.events;
CREATE POLICY events_delete_staff
  ON public.events
  FOR DELETE
  TO authenticated
  USING (
    public.is_admin()
    OR (
      public.is_staff()
      AND created_by IS NOT DISTINCT FROM auth.uid()
      AND created_by IS NOT NULL
    )
  );

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS registrations_insert_public ON public.registrations;
CREATE POLICY registrations_insert_public
  ON public.registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS registrations_select_staff ON public.registrations;
CREATE POLICY registrations_select_staff
  ON public.registrations
  FOR SELECT
  TO authenticated
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1
      FROM public.events e
      WHERE e.id = registrations.event_id
        AND e.created_by IS NOT DISTINCT FROM auth.uid()
        AND e.created_by IS NOT NULL
    )
  );

DROP POLICY IF EXISTS registrations_delete_staff ON public.registrations;
CREATE POLICY registrations_delete_staff
  ON public.registrations
  FOR DELETE
  TO authenticated
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1
      FROM public.events e
      WHERE e.id = registrations.event_id
        AND e.created_by IS NOT DISTINCT FROM auth.uid()
        AND e.created_by IS NOT NULL
    )
  );

ALTER TABLE public.event_feedback ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS event_feedback_insert_public ON public.event_feedback;
CREATE POLICY event_feedback_insert_public
  ON public.event_feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS event_feedback_select_admin ON public.event_feedback;
CREATE POLICY event_feedback_select_admin
  ON public.event_feedback
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

DROP POLICY IF EXISTS event_feedback_select_event_owner ON public.event_feedback;
CREATE POLICY event_feedback_select_event_owner
  ON public.event_feedback
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.events e
      WHERE e.id = event_feedback.event_id
        AND e.created_by IS NOT DISTINCT FROM auth.uid()
        AND e.created_by IS NOT NULL
    )
  );

DROP POLICY IF EXISTS event_feedback_delete_staff ON public.event_feedback;
CREATE POLICY event_feedback_delete_staff
  ON public.event_feedback
  FOR DELETE
  TO authenticated
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1
      FROM public.events e
      WHERE e.id = event_feedback.event_id
        AND e.created_by IS NOT DISTINCT FROM auth.uid()
        AND e.created_by IS NOT NULL
    )
  );

ALTER TABLE public.facilitators ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS facilitators_select_public ON public.facilitators;
CREATE POLICY facilitators_select_public
  ON public.facilitators
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS facilitators_insert_public ON public.facilitators;
CREATE POLICY facilitators_insert_public
  ON public.facilitators
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS teams_select_public ON public.teams;
CREATE POLICY teams_select_public
  ON public.teams
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- ---------------------------------------------------------------------------
-- Storage: event-images
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS event_images_select_public ON storage.objects;
CREATE POLICY event_images_select_public
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'event-images');

DROP POLICY IF EXISTS event_images_insert_staff ON storage.objects;
CREATE POLICY event_images_insert_staff
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'event-images'
    AND public.is_staff()
  );

DROP POLICY IF EXISTS event_images_update_staff ON storage.objects;
CREATE POLICY event_images_update_staff
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'event-images' AND public.is_staff())
  WITH CHECK (bucket_id = 'event-images' AND public.is_staff());

DROP POLICY IF EXISTS event_images_delete_staff ON storage.objects;
CREATE POLICY event_images_delete_staff
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'event-images' AND public.is_staff());
