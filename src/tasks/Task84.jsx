import React, { useState } from "react";

function Task84() {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#f0fff0"
        }}>
            <h4>4. Use useState to display a counter value.</h4>
            <p>Counter Value: {counter}</p>
            <hr />
        </div>
    );
}

export default Task84;
