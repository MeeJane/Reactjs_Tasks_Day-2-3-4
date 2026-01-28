import React, { useState } from "react";

function ShowHideText() {
    const [isVisible, setIsVisible] = useState(true); // boolean variable

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h2>Show/Hide Text</h2>
            <button
                onClick={() => setIsVisible(!isVisible)}
                style={{ padding: "8px 12px", marginBottom: "10px", cursor: "pointer" }}
            >
                Toggle Text
            </button>
            {isVisible && <p>Hello, World!</p>}
        </div>
    );
}

export default ShowHideText;
