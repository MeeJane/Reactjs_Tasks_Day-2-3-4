import React, { useState } from "react";

function Task85() {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fffaf0"
        }}>
            <h4>5. Add a button to increment the counter.</h4>
            <p>Counter Value: {counter}</p>
            <button
                onClick={() => setCounter(counter + 1)}
                style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#d72d52",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Increment
            </button>
            <hr />
        </div>
    );
}

export default Task85;
