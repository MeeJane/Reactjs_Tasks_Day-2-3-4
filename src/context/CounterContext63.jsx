import { createContext, useState } from "react";

export const CounterContext63 = createContext();

export const CounterProvider63 = ({ children }) => {
    const [count63, setCount63] = useState(0);

    const increment63 = () => {
        setCount63((prev) => prev + 1);
    };

    return (
        <CounterContext63.Provider value={{ count63, increment63 }}>
            {children}
        </CounterContext63.Provider>
    );
};
