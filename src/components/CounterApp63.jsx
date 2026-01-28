import CounterDisplay63 from "./CounterDisplay63";
import CounterButton63 from "./CounterButton63";

export default function CounterApp63() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
            }}
        >
            <CounterDisplay63 />
            <CounterButton63 />
        </div>
    );
}
