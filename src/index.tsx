import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App"; 
import { ThemeProvider } from "./shared/Theme/ui/ThemeProvider";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);