import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

rootElement.className =
  "w-[1126px] max-w-full mx-auto text-center border-x border-border min-h-svh flex flex-col box-border";

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
