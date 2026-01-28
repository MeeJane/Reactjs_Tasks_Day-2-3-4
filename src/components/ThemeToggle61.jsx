import { useContext } from "react";
import { ThemeContext61 } from "../context/ThemeContext61";

export default function ThemeToggle61() {
    const { theme61, toggleTheme61 } = useContext(ThemeContext61);

    return (
        <div
            style={{
                height: "100vh",
                background: theme61 === "light" ? "#ffffff" : "#121212",
                color: theme61 === "light" ? "#000000" : "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "0.3s",
            }}
        >
            <h1>Theme Switcher</h1>
            <p>Current Theme: {theme61}</p>

            <button
                onClick={toggleTheme61}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Toggle Theme
            </button>
        </div>
    );
}
