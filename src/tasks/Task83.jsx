import React from "react";

function Task83() {
    const name = "Mydheen Jasmine";
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fff0f5"
        }}>
            <h4>3. Display your name using JSX.</h4>
            <p>My name is <strong>{name}</strong>.</p>
            <hr />
        </div>
    );
}

export default Task83;