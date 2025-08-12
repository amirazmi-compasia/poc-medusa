function getEnvVar(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const MEDUSA_BACKEND_URL = getEnvVar("VITE_MEDUSA_BACKEND_URL");
export const MEDUSA_PUBLISHABLE_KEY = getEnvVar("VITE_MEDUSA_PUBLISHABLE_KEY");
