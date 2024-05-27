import "@logseq/libs";
import React from "react";
import proxyLogseq from "logseq-proxy";
import { type Root, createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (import.meta.env.VITE_MODE === "web") {
  // run in browser
  console.log(
    "[faiz:] === meta.env.VITE_LOGSEQ_API_SERVER",
    import.meta.env.VITE_LOGSEQ_API_SERVER
  );
  console.log(
    `%c[version]: v${__APP_VERSION__}`,
    "background-color: #60A5FA; color: white; padding: 4px;"
  );
  proxyLogseq({
    config: {
      apiServer: import.meta.env.VITE_LOGSEQ_API_SERVER,
      apiToken: import.meta.env.VITE_LOGSEQ_API_TOKEN,
    },
    settings: window.mockSettings,
  });
  renderApp();
} else {
  console.log("=== logseq-plugin-react-boilerplate loaded ===");
  logseq.ready(() => {
    logseq.provideModel({
      show() {
        renderApp();
        logseq.showMainUI();
      },
    });

    logseq.App.registerUIItem("toolbar", {
      key: "logseq-plugin-react-boilerplate",
      template:
        '<a data-on-click="show" class="button"><i class="ti ti-window"></i></a>',
    });
  });
}

function renderApp() {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
