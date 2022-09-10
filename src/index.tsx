import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freeviews from "./Pages/FreeViews/Freeviews";
import Authviews from "./Pages/AuthViews/Authviews";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Freeviews />} />
        <Route path="auth/*" element={<Authviews />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
