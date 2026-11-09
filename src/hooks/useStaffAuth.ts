'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

export type AppRole = 'admin' | 'facilitator' | 'participant';

export type StaffAuthReady =
  | {
      loading: true;
      userId: null;
      email: null;
      role: null;
      isStaff: false;
      isAdmin: false;
    }
  | {
      loading: false;
      userId: string | null;
      email: string | null;
      role: AppRole | null;
      isStaff: boolean;
      isAdmin: boolean;
    };

export const useStaffAuth = (): StaffAuthReady => {
  const [state, setState] = useState<StaffAuthReady>({
    loading: true,
    userId: null,
    email: null,
    role: null,
    isStaff: false,
    isAdmin: false,
  });

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    const refresh = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (!cancelled) {
          setState({
            loading: false,
            userId: null,
            email: null,
            role: null,
            isStaff: false,
            isAdmin: false,
          });
        }
        return;
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();

      const role = (profile?.role as AppRole | undefined) ?? 'participant';
      const isAdmin = role === 'admin';
      const isStaff = isAdmin || role === 'facilitator';

      if (!cancelled) {
        setState({
          loading: false,
          userId: user.id,
          email: user.email ?? null,
          role,
          isStaff,
          isAdmin,
        });
      }
    };

    void refresh();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      void refresh();
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  return state;
};
