import { useEffect, useState } from "react";

/* Task 50: Reusable Layout Component */
function Layout({ sidebar, children }) {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "200px", borderRight: "1px solid gray" }}>
                {sidebar}
            </div>
            <div style={{ padding: "10px" }}>{children}</div>
        </div>
    );
}

function TasksD245() {
    /* Task 41: Notes app */
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState("");

    /* Task 42: Shopping cart */
    const [cartCount, setCartCount] = useState(0);

    /* Task 43: BMI calculator */
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const bmi =
        height && weight ? (weight / ((height / 100) ** 2)).toFixed(2) : "";

    /* Task 45: Timer */
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTime((t) => t + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [running]);

    /* Task 46: Form wizard */
    const [step, setStep] = useState(1);

    /* Task 47: Feedback */
    const [feedback, setFeedback] = useState("");

    /* Task 49: Quiz */
    const [answer, setAnswer] = useState("");

    return (
        <div style={{ padding: "20px" }}>

            <h4>41. Build a simple notes app (add & delete notes).</h4>
            <input
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <button
                onClick={() => {
                    setNotes([...notes, noteText]);
                    setNoteText("");
                }}
            >
                Add
            </button>
            <ul>
                {notes.map((n, i) => (
                    <li key={i}>
                        {n}
                        <button onClick={() => setNotes(notes.filter((_, x) => x !== i))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>42. Create a shopping cart UI with item count update.</h4>
            <button onClick={() => setCartCount(cartCount + 1)}>Add Item</button>
            <button onClick={() => setCartCount(cartCount - 1)}>Remove Item</button>
            <p>Cart Items: {cartCount}</p>
            <hr />

            <h4>43. Build a BMI calculator UI using form inputs.</h4>
            <input
                placeholder="Height (cm)"
                onChange={(e) => setHeight(e.target.value)}
            />
            <input
                placeholder="Weight (kg)"
                onChange={(e) => setWeight(e.target.value)}
            />
            <p>BMI: {bmi}</p>
            <hr />

            <h4>44. Create a weather UI layout.</h4>
            <div style={{ border: "1px solid gray", padding: "10px" }}>
                <h5>City: Chennai</h5>
                <p>Temperature: 32°C</p>
                <p>Condition: Sunny</p>
            </div>
            <hr />

            <h4>45. Build a timer app with Start and Stop buttons.</h4>
            <p>Time: {time}s</p>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <hr />

            <h4>46. Create a form wizard with 2 steps (Next / Back).</h4>
            {step === 1 && <p>Step 1: Personal Details</p>}
            {step === 2 && <p>Step 2: Address Details</p>}
            <button disabled={step === 1} onClick={() => setStep(step - 1)}>
                Back
            </button>
            <button disabled={step === 2} onClick={() => setStep(step + 1)}>
                Next
            </button>
            <hr />

            <h4>47. Build a feedback form with emoji selection.</h4>
            {["😊", "😐", "😞"].map((emoji) => (
                <span
                    key={emoji}
                    style={{ fontSize: "24px", cursor: "pointer", margin: "5px" }}
                    onClick={() => setFeedback(emoji)}
                >
                    {emoji}
                </span>
            ))}
            <p>Feedback: {feedback}</p>
            <hr />

            <h4>48. Create a simple dashboard with cards showing numbers.</h4>
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ border: "1px solid gray", padding: "10px" }}>Users: 120</div>
                <div style={{ border: "1px solid gray", padding: "10px" }}>Orders: 45</div>
                <div style={{ border: "1px solid gray", padding: "10px" }}>Sales: 78</div>
            </div>
            <hr />

            <h4>49. Build a quiz app with one question and options.</h4>
            <p>What is React?</p>
            {["Library", "Framework", "Language"].map((opt) => (
                <div key={opt}>
                    <input
                        type="radio"
                        name="quiz"
                        onChange={() => setAnswer(opt)}
                    />{" "}
                    {opt}
                </div>
            ))}
            <p>Your Answer: {answer}</p>
            <hr />

            <h4>50. Create a reusable layout component with sidebar and main content.</h4>
            <Layout sidebar={<p>Sidebar Menu</p>}>
                <p>Main Content Area</p>
            </Layout>
            <hr />

        </div>
    );
}

export default TasksD245;
