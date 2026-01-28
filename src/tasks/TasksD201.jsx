import { useState } from "react";

function TasksD201() {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("");
    const [color, setColor] = useState("black");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    const today = new Date().toDateString();

    return (
        <div style={{ padding: "20px" }}>

            {/* Main Title */}
            <h2 style={{ textAlign:"center"}}>Reactjs Tasks Day-2</h2>
            <hr />

            <h4>1. Create a React app that displays a welcome message using a component.</h4>
            <h2>Welcome to React App</h2>
            <hr />

            <h4>2. Build a profile card component with name, role, and profile picture.</h4>
            <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995e13_66236537d4f46682e079b6ce_Casual%2520Portrait.webp" alt="profile"
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }} />
            <p>Name: John Doe</p>
            <p>Role: Frontend Developer</p>
            <hr />

            <h4>3. Create a counter app with Increment and Decrement buttons.</h4>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span style={{ margin: "0 10px" }}>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
            <hr />

            <h4>4. Show today’s date dynamically inside a component.</h4>
            <p>{today}</p>
            <hr />

            <h4>5. Build a button that toggles text between “ON” and “OFF”.</h4>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? "ON" : "OFF"}
            </button>
            <hr />

            <h4>6. Create a simple input field and display the typed text below it.</h4>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
            <hr />

            <h4>7. Build a color switcher with 3 buttons (Red, Green, Blue).</h4>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <p style={{ color }}>Color Switch Text</p>
            <hr />

            <h4>8. Display a list of fruits using an array and map().</h4>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <hr />

            <h4>9. Create a component that shows different text based on a boolean state.</h4>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Toggle
            </button>
            <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>
            <hr />

            <h4>10. Build a simple click counter that shows total clicks.</h4>
            <button onClick={() => setClicks(clicks + 1)}>Click</button>
            <p>Total Clicks: {clicks}</p>
            <hr />

        </div>
    );
}

export default TasksD201;
