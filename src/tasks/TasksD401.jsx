import { useState } from "react";

function TasksD401() {
    const [text, setText] = useState("");
    const [showText, setShowText] = useState(true);
    const [number, setNumber] = useState(0);

    const today = new Date().toDateString();

    return (
        <div style={{ padding: "20px" }}>

            {/* Main Title */}
            <h2 style={{ textAlign: "center" }}>Reactjs Tasks Day-4</h2>
            <hr />

            <h4>1. Create a React app and display “Hello React”.</h4>
            <h2>Hello React</h2>
            <hr />

            <h4>2. Create a functional component and show a message.</h4>
            <p>This is a functional component message.</p>
            <hr />

            <h4>3. Display your name inside a component.</h4>
            <p>My Name is John Doe</p>
            <hr />

            <h4>4. Display today’s date using JSX.</h4>
            <p>{today}</p>
            <hr />

            <h4>5. Create a button and show text below it.</h4>
            <button>Click Me</button>
            <p>This text appears below the button.</p>
            <hr />

            <h4>6. Change text on button click.</h4>
            <button onClick={() => setText("Text Changed!")}>
                Change Text
            </button>
            <p>{text}</p>
            <hr />

            <h4>7. Show and hide text using a button.</h4>
            <button onClick={() => setShowText(!showText)}>
                Toggle Text
            </button>
            {showText && <p>This text can be hidden or shown.</p>}
            <hr />

            <h4>8. Display a number using useState.</h4>
            <p>Number: {number}</p>
            <hr />

            <h4>9. Increase a number when button is clicked.</h4>
            <button onClick={() => setNumber(number + 1)}>
                Increase
            </button>
            <p>{number}</p>
            <hr />

            <h4>10. Decrease a number using another button.</h4>
            <button onClick={() => setNumber(number - 1)}>
                Decrease
            </button>
            <p>{number}</p>
            <hr />

        </div>
    );
}

export default TasksD401;
