import React, { useState } from "react";

function TasksD1() {
    // States
    const [inputText, setInputText] = useState(""); // Task 11 & 12
    const [upperText, setUpperText] = useState(""); // Task 12
    const [username, setUsername] = useState(""); // Task 13 & 14
    const [password, setPassword] = useState(""); // Task 13 & 14
    const [formValues, setFormValues] = useState({}); // Task 14
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Task 15 & 18
    const [listItems] = useState(["Apple", "Banana", "Cherry"]); // Task 16 & 17
    const [buttonDisabled, setButtonDisabled] = useState(true); // Task 19

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", background: "#f9f9f9" }}>

            {/* Task 11 */}
            <h4>11. Create an input field and display entered text below.</h4>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{ display: "block", marginBottom: "10px" }}
            />
            <p>Entered Text: {inputText}</p>
            <hr />

            {/* Task 12 */}
            <h4>12. Convert input text to uppercase on button click.</h4>
            <p>Uppercase Text: {upperText}</p>
            <button onClick={() => setUpperText(inputText.toUpperCase())} style={{ marginBottom: "10px" }}>
                Convert to Uppercase
            </button>
            <hr />

            {/* Task 13 */}
            <h4>13. Create a simple login form (username & password).</h4>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: "block", marginBottom: "5px" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: "block", marginBottom: "10px" }}
            />
            <hr />

            {/* Task 14 */}
            <h4>14. Display form values on submit.</h4>
            <button onClick={() => setFormValues({ username, password })} style={{ marginBottom: "10px" }}>
                Submit
            </button>
            <p>Form Values: {JSON.stringify(formValues)}</p>
            <hr />

            {/* Task 15 */}
            <h4>15. Show a message conditionally based on login status.</h4>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ marginBottom: "10px" }}>
                Toggle Login Status
            </button>
            <p>{isLoggedIn ? "You are logged in!" : "You are logged out!"}</p>
            <hr />

            {/* Task 16 */}
            <h4>16. Create a list using an array and display it using map().</h4>
            {listItems.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
            <hr />

            {/* Task 17 */}
            <h4>17. Display index value along with list items.</h4>
            {listItems.map((item, idx) => (
                <p key={idx}>{idx + 1}. {item}</p>
            ))}
            <hr />

            {/* Task 18 */}
            <h4>18. Render a component conditionally using if or ternary.</h4>
            {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>}
            <hr />

            {/* Task 19 */}
            <h4>19. Create a button and disable it based on state.</h4>
            <button
                disabled={buttonDisabled}
                onClick={() => alert("Button clicked!")}
                style={{ marginBottom: "10px" }}
            >
                Click Me
            </button>
            <button onClick={() => setButtonDisabled(!buttonDisabled)} style={{ marginLeft: "10px" }}>
                Toggle Button Disabled
            </button>
            <hr />

            {/* Task 20 */}
            <h4>20. Display an image using React.</h4>
            <img
                src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=1024x1024&w=is&k=20&c=7tIplxfEDBzXiWRahv9ZI0AXK8GF1Pkrbs_KjPLjK8A="
                alt="Placeholder"
                style={{ display: "block", marginTop: "10px" }}
            />
            <hr />

        </div>
    );
}

export default TasksD1;
