import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App"; 
import { ThemeProvider } from "./shared/Theme/ui/ThemeProvider";
import { PlayerProvider } from "./shared/Player/ui/PlayerProvider";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <PlayerProvider>
            <App />
            </PlayerProvider>
        </ThemeProvider>
    </React.StrictMode>
);