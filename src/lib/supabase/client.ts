import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseBrowserEnv } from "@/lib/supabase/env";

let browserClient: SupabaseClient | null = null;

export function getSupabaseBrowserClient() {
  if (browserClient) {
    return browserClient;
  }

  const { url, anonKey } = getSupabaseBrowserEnv();
  browserClient = createClient(url, anonKey);
  return browserClient;
}
