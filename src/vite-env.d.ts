/// <reference types="vite/client" />
declare const __APP_VERSION__: string;

type AppUserConfigs = import("@logseq/libs/dist/LSPlugin").AppUserConfigs;
interface Window {
  logseqAppUserConfigs: AppUserConfigs;
  mockSettings: Record<string, unknown>;
}

interface ImportMetaEnv {
  readonly VITE_LOGSEQ_API_SERVER: string;
  readonly VITE_LOGSEQ_API_TOKEN: string;
  readonly VITE_MODE: "development" | "production" | "web" | "plugin";
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
