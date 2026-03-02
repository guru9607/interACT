import { createClient } from '@supabase/supabase-js';

// In browser: proxy through our server to bypass regional DNS blocks on supabase.co
// On server: connect directly to Supabase
const supabaseUrl = typeof window !== 'undefined'
  ? `${window.location.origin}/supabase-proxy`
  : process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function proxyImageUrl(url: string): string {
  const realUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (typeof window !== 'undefined' && realUrl && url.startsWith(realUrl)) {
    return url.replace(realUrl, `${window.location.origin}/supabase-proxy`);
  }
  return url;
}
