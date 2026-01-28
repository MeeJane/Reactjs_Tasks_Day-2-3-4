import React, { useState, useEffect } from "react";

function Task88() {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            background: "#fff0f5"
        }}>
            <h4>8. Display current date and time in a component.</h4>
            <p>Current Date & Time: {dateTime}</p>
            <hr />
        </div>
    );
}

export default Task88;
