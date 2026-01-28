

import React, { useState } from "react";

function Task810() {
    const [counter, setCounter] = useState(10);

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#f9f9f9"
        }}>
            <h4>10. Add a button to decrement the counter.</h4>
            <p>Counter Value: {counter}</p>
            <button
                onClick={() => setCounter(counter - 1)}
                style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    background: "#710125",
                    color: "white",
                    cursor: "pointer",
                    marginRight: "10px"
                }}
            >
                Decrement
            </button>
            <hr />
        </div>
    );
}

export default Task810;

