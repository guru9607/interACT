-- Same as migrations/20260508130000_events_select_scope_staff.sql
-- Run in SQL Editor after baseline migrations if you did not apply that file.

DROP POLICY IF EXISTS events_select_public ON public.events;
DROP POLICY IF EXISTS events_select_anon ON public.events;
DROP POLICY IF EXISTS events_select_authenticated ON public.events;

CREATE POLICY events_select_anon
  ON public.events
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY events_select_authenticated
  ON public.events
  FOR SELECT
  TO authenticated
  USING (
    public.is_admin()
    OR NOT public.is_staff()
    OR (
      public.is_staff()
      AND NOT public.is_admin()
      AND created_by IS NOT DISTINCT FROM auth.uid()
      AND created_by IS NOT NULL
    )
  );
