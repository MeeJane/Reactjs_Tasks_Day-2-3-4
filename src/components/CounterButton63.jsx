import { useContext } from "react";
import { CounterContext63 } from "../context/CounterContext63";

export default function CounterButton63() {
  const { increment63 } = useContext(CounterContext63);

  return (
    <button onClick={increment63} style={{ padding: "10px 20px" }}>
      Increment
    </button>
  );
}
