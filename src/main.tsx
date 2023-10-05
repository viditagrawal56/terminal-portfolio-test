import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ReactGA from "react-ga4";

ReactGA.initialize("G-5YKNMDXWZY");

ReactGA.send({ hitType: "pageview", page: "/" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
serviceWorkerRegistration.register();
