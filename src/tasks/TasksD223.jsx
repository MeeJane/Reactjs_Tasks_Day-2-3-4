import { useState } from "react";

function TasksD223() {
    /* Task 21: Todo list */
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    /* Task 22: Form */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    /* Task 23: Password toggle */
    const [showPassword, setShowPassword] = useState(false);

    /* Task 24: Search filter */
    const [search, setSearch] = useState("");
    const products = ["Laptop", "Mobile", "Tablet", "Watch"];

    /* Task 25: Character counter */
    const [message, setMessage] = useState("");

    /* Task 26: Login form */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /* Task 27: Theme toggle */
    const [darkMode, setDarkMode] = useState(false);

    /* Task 28: Dropdown */
    const [city, setCity] = useState("");

    /* Task 29: Mark completed */
    const [tasks, setTasks] = useState([
        { text: "Task One", completed: false },
        { text: "Task Two", completed: false },
    ]);

    /* Task 30: Tabs */
    const [activeTab, setActiveTab] = useState("Tab1");

    return (
        <div style={{ padding: "20px" }}>

            <h4>21. Build a todo list app with add and delete functionality.</h4>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button
                onClick={() => {
                    setTodos([...todos, todoText]);
                    setTodoText("");
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>22. Create a form with name and email and display submitted values.</h4>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => setSubmitted(true)}>Submit</button>
            {submitted && (
                <p>
                    Name: {name}, Email: {email}
                </p>
            )}
            <hr />

            <h4>23. Build a password show/hide toggle input.</h4>
            <input type={showPassword ? "text" : "password"} />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
            </button>
            <hr />

            <h4>24. Create a search filter for a list of products.</h4>
            <input
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {products
                    .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
                    .map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
            </ul>
            <hr />

            <h4>25. Build a character counter for a textarea.</h4>
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <p>Characters: {message.length}</p>
            <hr />

            <h4>26. Create a simple login form with basic validation.</h4>
            <input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>
                {username && password ? "Login Success" : "Enter Details"}
            </button>
            <hr />

            <h4>27. Build a theme toggle app.</h4>
            <div
                style={{
                    background: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                    padding: "10px",
                }}
            >
                <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
                <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
            </div>
            <hr />

            <h4>28. Create a dynamic dropdown and display selected value.</h4>
            <select onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
            </select>
            <p>Selected: {city}</p>
            <hr />

            <h4>29. Build a list where items can be marked as completed.</h4>
            <ul>
                {tasks.map((t, i) => (
                    <li
                        key={i}
                        onClick={() =>
                            setTasks(
                                tasks.map((task, index) =>
                                    index === i
                                        ? { ...task, completed: !task.completed }
                                        : task
                                )
                            )
                        }
                        style={{
                            textDecoration: t.completed ? "line-through" : "none",
                            cursor: "pointer",
                        }}
                    >
                        {t.text}
                    </li>
                ))}
            </ul>
            <hr />

            <h4>30. Create a simple tab switching interface.</h4>
            <button onClick={() => setActiveTab("Tab1")}>Tab 1</button>
            <button onClick={() => setActiveTab("Tab2")}>Tab 2</button>
            <p>{activeTab === "Tab1" ? "Tab One Content" : "Tab Two Content"}</p>
            <hr />

        </div>
    );
}

export default TasksD223;
