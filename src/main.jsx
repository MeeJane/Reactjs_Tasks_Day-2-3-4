import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ThemeProvider61 } from "./context/ThemeContext61";
import { AuthProvider62 } from "./context/AuthContext62";
import { CounterProvider63 } from "./context/CounterContext63";
import { LanguageProvider64 } from "./context/LanguageContext64";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Reactjs_Tasks_Day-1/">
      <ThemeProvider61>
        <AuthProvider62>
          <CounterProvider63>
            <LanguageProvider64>
              <App />
            </LanguageProvider64>
          </CounterProvider63>
        </AuthProvider62>
      </ThemeProvider61>
    </BrowserRouter>
  </React.StrictMode>
);
