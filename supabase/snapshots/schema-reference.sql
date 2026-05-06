-- =============================================================================
-- SNAPSHOT: public schema (interACT) — documentation & review
-- =============================================================================
-- Maintained manually or regenerated from Supabase (see supabase/README.md).
-- This is NOT a single migration: do not run blindly on a fresh DB (sequences,
-- duplicate FKs, auth schema, RLS, etc. may be missing or differ).
-- =============================================================================
--
-- CHANGELOG (append when you update this file):
--   2026-05-07 — events.created_by (FK auth.users); duplicate event_feedback FK removed in DB.
--   2026-05-06 — Initial snapshot: event_facilitators, event_feedback, events,
--                facilitators, profiles, registrations, teams.
--
-- =============================================================================

CREATE TABLE public.event_facilitators (
  event_id integer NOT NULL,
  team_member_id integer NOT NULL,
  CONSTRAINT event_facilitators_pkey PRIMARY KEY (event_id, team_member_id),
  CONSTRAINT event_facilitators_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id),
  CONSTRAINT event_facilitators_team_member_id_fkey FOREIGN KEY (team_member_id) REFERENCES public.teams(id)
);

CREATE TABLE public.event_feedback (
  id integer NOT NULL DEFAULT nextval('event_feedback_id_seq'::regclass),
  event_id integer,
  responses jsonb NOT NULL,
  submitted_at timestamp without time zone DEFAULT now(),
  email text,
  phone text,
  session_id uuid,
  full_name text,
  country text,
  CONSTRAINT event_feedback_pkey PRIMARY KEY (id),
  CONSTRAINT event_feedback_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id)
);

CREATE TABLE public.events (
  id integer NOT NULL DEFAULT nextval('events_id_seq'::regclass),
  title text NOT NULL,
  date date NOT NULL,
  location text NOT NULL,
  region text NOT NULL CHECK (region = ANY (ARRAY['Americas'::text, 'Europe'::text, 'Africa'::text, 'Asia'::text, 'Oceania'::text])),
  type text NOT NULL CHECK (type = ANY (ARRAY['Online'::text, 'In-Person'::text, 'Hybrid'::text])),
  description text,
  agenda jsonb DEFAULT '[]'::jsonb,
  capacity integer,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  start_time time without time zone NOT NULL,
  end_time time without time zone,
  timezone text DEFAULT 'UTC'::text,
  status text DEFAULT 'upcoming'::text,
  image_url text,
  image_urls ARRAY,
  act_module text CHECK (act_module = ANY (ARRAY['awareness'::text, 'contemplation'::text, 'transformative_silence'::text, 'combined'::text])),
  country text,
  conductor_id text,
  conductor_type text CHECK (conductor_type = ANY (ARRAY['team'::text, 'facilitator'::text])),
  special_note text,
  sessions jsonb DEFAULT '[]'::jsonb,
  created_by uuid REFERENCES auth.users(id),
  CONSTRAINT events_pkey PRIMARY KEY (id)
);

CREATE TABLE public.facilitators (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL CHECK (email ~* '^.+@.+\..+$'::text),
  phone_no text,
  gyan_age text,
  profession text,
  country text,
  centre_incharge_name text,
  centre_email text,
  created_at timestamp with time zone DEFAULT now(),
  user_id uuid,
  CONSTRAINT facilitators_pkey PRIMARY KEY (id),
  CONSTRAINT facilitators_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

CREATE TABLE public.profiles (
  id uuid NOT NULL,
  full_name text,
  role text NOT NULL DEFAULT 'participant'::text CHECK (role = ANY (ARRAY['admin'::text, 'facilitator'::text, 'participant'::text])),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);

CREATE TABLE public.registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  event_id integer NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  registered_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT registrations_pkey PRIMARY KEY (id),
  CONSTRAINT registrations_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id)
);

CREATE TABLE public.teams (
  id integer NOT NULL DEFAULT nextval('teams_id_seq'::regclass),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  country text,
  category text,
  sort_order integer DEFAULT 99,
  user_id uuid,
  CONSTRAINT teams_pkey PRIMARY KEY (id),
  CONSTRAINT teams_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
