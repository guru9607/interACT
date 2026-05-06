import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Read-only client without persisted auth — uses the anon key only.
 * Use for public listings (e.g. /join, event detail) so logged-in facilitators
 * still see all published events while dashboard RLS restricts staff rows.
 */
let anonReadClient: SupabaseClient | undefined;

export const getSupabaseAnonRead = (): SupabaseClient => {
  if (!anonReadClient) {
    anonReadClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      }
    );
  }
  return anonReadClient;
};
