import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <div className="theme-toggle mt-4">
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
};

export default ThemeToggle;
