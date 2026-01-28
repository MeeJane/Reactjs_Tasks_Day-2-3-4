import { useContext } from "react";
import { CounterContext63 } from "../context/CounterContext63";

export default function CounterDisplay63() {
    const { count63 } = useContext(CounterContext63);

    return (
        <h2>Counter Value: {count63}</h2>
    );
}
