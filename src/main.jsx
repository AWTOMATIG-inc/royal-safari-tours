import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { TourContextProvider } from "./context/TourContextProvider.jsx";
import "./fonts.css";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <TourContextProvider>
        <App />
      </TourContextProvider>
    </BrowserRouter>
  </StrictMode>
);
