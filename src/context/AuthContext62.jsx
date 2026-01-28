import { createContext, useState } from "react";

export const AuthContext62 = createContext();

export const AuthProvider62 = ({ children }) => {
    const [isLoggedIn62, setIsLoggedIn62] = useState(false);

    const login62 = () => {
        setIsLoggedIn62(true);
    };

    const logout62 = () => {
        setIsLoggedIn62(false);
    };

    return (
        <AuthContext62.Provider value={{ isLoggedIn62, login62, logout62 }}>
            {children}
        </AuthContext62.Provider>
    );
};
