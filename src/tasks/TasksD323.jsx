import { useState } from "react";

/* Task 25: Stepper Component */
function Stepper({ steps }) {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <div>
            <p>Step {currentStep + 1}: {steps[currentStep]}</p>
            <button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
            <button disabled={currentStep === steps.length - 1} onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        </div>
    );
}

/* Task 30: Reusable Button */
function CustomButton({ children, variant = "primary", onClick }) {
    const style = {
        padding: "5px 10px",
        margin: "5px",
        background: variant === "primary" ? "#2979FF" : variant === "secondary" ? "#eee" : "#f44336",
        color: variant === "primary" ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };
    return <button style={style} onClick={onClick}>{children}</button>;
}

function TasksD323() {
    /* Task 21: Dashboard stats */
    const stats = [
        { name: "Users", value: 120 },
        { name: "Orders", value: 45 },
        { name: "Revenue", value: "$1500" }
    ];

    /* Task 22: Character counter */
    const [text, setText] = useState("");
    const maxChars = 20;

    /* Task 23: File Upload */
    const [filePreview, setFilePreview] = useState(null);

    /* Task 24: Checkbox list */
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const [checkedItems, setCheckedItems] = useState([]);

    /* Task 26: Currency Converter */
    const [amount, setAmount] = useState("");
    const [converted, setConverted] = useState("");

    /* Task 27: Toggle Switch */
    const [toggle, setToggle] = useState(false);

    /* Task 28: List Sorting */
    const [list, setList] = useState(["Banana", "Apple", "Orange"]);

    /* Task 29: Simple Quiz */
    const questions = [
        { q: "2 + 2 = ?", options: [3, 4, 5], ans: 4 }
    ];
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    return (
        <div style={{ padding: "20px" }}>
            
            <hr />

            <h4>21. Build a Simple Dashboard with cards and stats.</h4>
            <div style={{ display: "flex", gap: "10px" }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h5>{s.name}</h5>
                        <p>{s.value}</p>
                    </div>
                ))}
            </div>
            <hr />

            <h4>22. Create a Character Counter with max-limit warning.</h4>
            <input value={text} onChange={e => setText(e.target.value)} />
            <p>{text.length} / {maxChars} {text.length > maxChars && <span style={{ color: "red" }}>Max limit exceeded!</span>}</p>
            <hr />

            <h4>23. Build a File Upload UI with preview.</h4>
            <input type="file" onChange={e => setFilePreview(URL.createObjectURL(e.target.files[0]))} />
            {filePreview && <img src={filePreview} alt="preview" style={{ width: "150px", marginTop: "10px" }} />}
            <hr />

            <h4>24. Create a Checkbox list with “Select All” feature.</h4>
            <input type="checkbox" checked={checkedItems.length === items.length} onChange={e => setCheckedItems(e.target.checked ? [...items] : [])} /> Select All
            <ul>
                {items.map((i, idx) => (
                    <li key={idx}>
                        <input
                            type="checkbox"
                            checked={checkedItems.includes(i)}
                            onChange={e => {
                                if (e.target.checked) setCheckedItems([...checkedItems, i]);
                                else setCheckedItems(checkedItems.filter(ci => ci !== i));
                            }}
                        /> {i}
                    </li>
                ))}
            </ul>
            <hr />

            <h4>25. Build a Stepper Component (multi-step form UI).</h4>
            <Stepper steps={["Step One", "Step Two", "Step Three"]} />
            <hr />

            <h4>26. Create a Currency Converter UI (static conversion rates).</h4>
            <input placeholder="USD" value={amount} onChange={e => setAmount(e.target.value)} />
            <button onClick={() => setConverted(amount ? (amount * 82).toFixed(2) + " INR" : "")}>Convert</button>
            <p>Converted: {converted}</p>
            <hr />

            <h4>27. Build a Toggle Switch component (custom UI).</h4>
            <div
                onClick={() => setToggle(!toggle)}
                style={{
                    width: "50px",
                    height: "25px",
                    background: toggle ? "#2979FF" : "#ccc",
                    borderRadius: "25px",
                    position: "relative",
                    cursor: "pointer"
                }}
            >
                <div style={{
                    width: "23px",
                    height: "23px",
                    background: "white",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "1px",
                    left: toggle ? "26px" : "1px",
                    transition: "0.3s"
                }}></div>
            </div>
            <hr />

            <h4>28. Create a List Sorting App (A–Z / Z–A).</h4>
            <button onClick={() => setList([...list].sort())}>A-Z</button>
            <button onClick={() => setList([...list].sort().reverse())}>Z-A</button>
            <ul>
                {list.map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
            <hr />

            <h4>29. Build a Simple Quiz App with score tracking.</h4>
            <p>{questions[0].q}</p>
            {questions[0].options.map((o, i) => (
                <div key={i}>
                    <input
                        type="radio"
                        name="quiz"
                        onChange={() => setSelectedAnswer(o)}
                    /> {o}
                </div>
            ))}
            <button onClick={() => setScore(selectedAnswer === questions[0].ans ? 1 : 0)}>Submit</button>
            <p>Score: {score}</p>
            <hr />

            <h4>30. Create a Reusable Button component with variants.</h4>
            <CustomButton variant="primary" onClick={() => alert("Primary clicked")}>Primary</CustomButton>
            <CustomButton variant="secondary" onClick={() => alert("Secondary clicked")}>Secondary</CustomButton>
            <CustomButton variant="danger" onClick={() => alert("Danger clicked")}>Danger</CustomButton>
            <hr />

        </div>
    );
}

export default TasksD323;
