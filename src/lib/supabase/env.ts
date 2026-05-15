const requiredKeys = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"] as const;

type RequiredKey = (typeof requiredKeys)[number];

function readEnv(key: RequiredKey) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required Supabase environment variable: ${key}`);
  }

  return value;
}

export function getSupabaseBrowserEnv() {
  return {
    url: readEnv("NEXT_PUBLIC_SUPABASE_URL"),
    anonKey: readEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  };
}
