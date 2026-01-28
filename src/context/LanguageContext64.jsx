import { createContext, useState } from "react";

export const LanguageContext64 = createContext();

export const LanguageProvider64 = ({ children }) => {
  const [language64, setLanguage64] = useState("en");

  const toggleLanguage64 = () => {
    setLanguage64((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext64.Provider value={{ language64, toggleLanguage64 }}>
      {children}
    </LanguageContext64.Provider>
  );
};
