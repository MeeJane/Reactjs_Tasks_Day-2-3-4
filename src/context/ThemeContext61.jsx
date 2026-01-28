import { createContext, useState } from "react";

export const ThemeContext61 = createContext();

export const ThemeProvider61 = ({ children }) => {
  const [theme61, setTheme61] = useState("light");

  const toggleTheme61 = () => {
    setTheme61((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext61.Provider value={{ theme61, toggleTheme61 }}>
      {children}
    </ThemeContext61.Provider>
  );
};
