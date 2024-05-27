import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { existsSync } from "fs";

import packageJSON from "./package.json";

const getMockSettings = (isWeb = false) => {
  const localSettingsPath = resolve(__dirname, "mocks/settings.local.json");
  if (isWeb && existsSync(localSettingsPath)) {
    return require(localSettingsPath);
  }
  return {};
};

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [react()],
    base: "./",
    build: {
      target: "esnext",
    },
    define: {
      mockSettings: getMockSettings(mode === "web"),
      __APP_VERSION__: JSON.stringify(packageJSON.version),
    },
  };
});
