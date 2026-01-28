import React, { useState } from "react";

function Task87() {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#f0f8ff"
        }}>
            <h4>7. Reset the counter value using a button.</h4>
            <p>Counter Value: {counter}</p>
            <button
                onClick={() => setCounter(0)}
                style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#d72d52",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Reset
            </button>
            <hr />
        </div>
    );
}

export default Task87;
