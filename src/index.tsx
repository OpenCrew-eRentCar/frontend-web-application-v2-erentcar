import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistics from "./Pages/AuthViews/Statistics/Statistics";
import Plans from './Pages/AuthViews/Plans/Plans';



const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="statistics" element={<Statistics />} />
                <Route path="plans" element={<Plans />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);