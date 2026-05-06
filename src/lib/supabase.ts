export { createClient } from '@/lib/supabase/client';
import { createClient } from '@/lib/supabase/client';

/** Shared browser client for `"use client"` modules (cookie-aware via middleware). */
export const supabase = createClient();
