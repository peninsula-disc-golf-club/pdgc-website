import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const { VITE_ANALYTICS_ENDPOINT, VITE_ANALYTICS_WEBSITE_ID } = import.meta.env;

if (VITE_ANALYTICS_ENDPOINT && VITE_ANALYTICS_WEBSITE_ID) {
  const analytics = document.createElement("script");
  analytics.src = `${VITE_ANALYTICS_ENDPOINT}/umami`;
  analytics.dataset.websiteId = VITE_ANALYTICS_WEBSITE_ID;
  document.head.append(analytics);
}

createRoot(document.getElementById("root")!).render(<App />);
