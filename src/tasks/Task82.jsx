import React from "react";

function Greeting() {
    return <p>Hello from a functional component!</p>;
}

function Task82() {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#f0f8ff"
        }}>
            <h4>2. Create a functional component and render it inside App.</h4>
            <Greeting />
            <hr />
        </div>
    );
}

export default Task82;
