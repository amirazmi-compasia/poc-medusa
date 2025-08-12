/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MEDUSA_BACKEND_URL: string;
  readonly VITE_MEDUSA_PUBLISHABLE_KEY: string;
  // add more env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
