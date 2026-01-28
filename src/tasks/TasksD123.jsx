import React, { useState } from "react";

// Child component for tasks 23–25
function ChildComponent({ message }) {
    return <p>Child says: {message}</p>;
}

// Reusable component for task 25
function ReusableBox({ text }) {
    return <div style={{ border: "1px solid #333", padding: "5px", margin: "5px 0" }}>{text}</div>;
}

function TasksD123() {
    // Task 21
    const inlineStyle = { color: "blue", fontWeight: "bold", padding: "5px" };

    // Task 23–24
    const parentMessage = "Hello from Parent!";

    // Task 26
    const [inputValue, setInputValue] = useState("");

    // Task 27–29
    const [formData, setFormData] = useState({ username: "", email: "" });
    const [errors, setErrors] = useState({});

    // Task 30
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.username) newErrors.username = "Username required";
        if (!formData.email) newErrors.email = "Email required";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) alert("Form submitted!");
    };

    const handleAddTodo = () => {
        if (todo) {
            setTodos([...todos, todo]);
            setTodo("");
        }
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", background: "#f0f8ff" }}>

            {/* Task 21 */}
            <h4>21. Create a simple component with inline styling.</h4>
            <p style={inlineStyle}>This is inline styled text!</p>
            <hr />

            {/* Task 22 */}
            <h4>22. Apply CSS class to a React component.</h4>
            <p className="task-class" style={{ marginBottom: "5px" }}>This paragraph has a CSS class.</p>
            <hr />

            {/* Task 23 */}
            <h4>23. Pass data from parent to child using props.</h4>
            <ChildComponent message={parentMessage} />
            <hr />

            {/* Task 24 */}
            <h4>24. Display props value inside child component.</h4>
            <ChildComponent message="Props value displayed here!" />
            <hr />

            {/* Task 25 */}
            <h4>25. Create multiple components and reuse them.</h4>
            <ReusableBox text="Box 1" />
            <ReusableBox text="Box 2" />
            <ReusableBox text="Box 3" />
            <hr />

            {/* Task 26 */}
            <h4>26. Handle input change using controlled components.</h4>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ display: "block", marginBottom: "5px" }}
            />
            <p>Input Value: {inputValue}</p>
            <hr />

            {/* Task 27–28 */}
            <h4>27. Create a form with multiple inputs using single state object.</h4>
            <h4>28. Validate form fields before submission.</h4>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleFormChange}
                    style={{ display: "block", marginBottom: "5px" }}
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    style={{ display: "block", marginBottom: "5px" }}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <button type="submit" style={{ marginBottom: "10px" }}>Submit</button>
            </form>
            <hr />

            {/* Task 29 */}
            <h4>29. Display error message conditionally for empty input.</h4>
            {/* Already handled in task 27–28 with errors */}
            <p>See error messages above for empty fields.</p>
            <hr />

            {/* Task 30 */}
            <h4>30. Create a todo list with add functionality.</h4>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a todo"
                style={{ display: "block", marginBottom: "5px" }}
            />
            <button onClick={handleAddTodo} style={{ marginBottom: "10px" }}>Add Todo</button>
            <ul>
                {todos.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <hr />

        </div>
    );
}

export default TasksD123;
