import React, { useState } from "react";

function Task89() {
    const [color, setColor] = useState("black");

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#f0fff0"
        }}>
            <h4>9. Change text color on button click using state.</h4>
            <p style={{ color }}>This text will change color.</p>
            <button
                onClick={() => setColor(color === "black" ? "red" : "black")}
                style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#710125",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Change Color
            </button>
            <hr />
        </div>
    );
}

export default Task89;
