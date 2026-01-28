import { useState } from "react";
import "./TasksD434.css"; // for Task 32

function TasksD434() {
    const [textColor, setTextColor] = useState("black");
    const [count, setCount] = useState(0);
    const [toggleText, setToggleText] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
    const [heading, setHeading] = useState("Original Heading");
    const [status, setStatus] = useState(false);

    return (
        <div style={{ padding: "20px" }}>

            <h4>31. Change text color using inline style.</h4>
            <p style={{ color: textColor }}>This text changes color</p>
            <button onClick={() => setTextColor("red")}>Red</button>
            <button onClick={() => setTextColor("green")}>Green</button>
            <hr />

            <h4>32. Apply a CSS class to a component.</h4>
            <p className="highlight-text">This text uses a CSS class</p>
            <hr />

            <h4>33. Create a counter using a single button.</h4>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <hr />

            <h4>34. Display “Even” or “Odd” based on number.</h4>
            <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
            <hr />

            <h4>35. Toggle between two texts.</h4>
            <button onClick={() => setToggleText(!toggleText)}>
                Toggle Text
            </button>
            <p>{toggleText ? "Hello" : "Goodbye"}</p>
            <hr />

            <h4>36. Create a checkbox and display checked status.</h4>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <p>Checked: {isChecked.toString()}</p>
            <hr />

            <h4>37. Show message when checkbox is checked.</h4>
            {isChecked && <p>Checkbox is checked!</p>}
            <hr />

            <h4>38. Create a dropdown and display selected value.</h4>
            <select
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
            >
                <option value="">Select</option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
            </select>
            <p>Selected: {dropdownValue}</p>
            <hr />

            <h4>39. Change heading text using button.</h4>
            <h2>{heading}</h2>
            <button onClick={() => setHeading("Heading Changed!")}>
                Change Heading
            </button>
            <hr />

            <h4>40. Show different messages using ternary operator.</h4>
            <button onClick={() => setStatus(!status)}>
                Toggle Status
            </button>
            <p>{status ? "Status is ON" : "Status is OFF"}</p>
            <hr />

        </div>
    );
}

export default TasksD434;
