import React from "react";
import { Button } from "primereact/button";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <React.StrictMode>
            <Outlet/>
        </React.StrictMode>
    );
}

export default App;
