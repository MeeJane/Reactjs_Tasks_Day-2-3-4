import { useState, useEffect } from "react";

/* Task 6 & 10 components */
function Modal({ show, onClose, children }) {
    if (!show) return null;
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function StarRating({ maxStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div>
            {[...Array(maxStars)].map((_, i) => {
                const starIndex = i + 1;
                return (
                    <span
                        key={i}
                        style={{
                            fontSize: "24px",
                            cursor: "pointer",
                            color: starIndex <= (hover || rating) ? "gold" : "gray",
                        }}
                        onClick={() => setRating(starIndex)}
                        onMouseEnter={() => setHover(starIndex)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                );
            })}
            <p>Rating: {rating}</p>
        </div>
    );
}

function TasksD301() {
    /* Task 1: Todo App */
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");

    /* Task 2: Login/Logout */
    const [loggedIn, setLoggedIn] = useState(false);

    /* Task 3: Searchable Product List */
    const [search, setSearch] = useState("");
    const products = ["Laptop", "Mobile", "Tablet", "Watch"];

    /* Task 4: Counter with undo/redo */
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    const [future, setFuture] = useState([]);

    /* Task 5: Theme switcher with localStorage */
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    /* Task 6: Modal */
    const [showModal, setShowModal] = useState(false);

    /* Task 7: Pagination */
    const items = [...Array(20)].map((_, i) => `Item ${i + 1}`);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    /* Task 8: Form validation */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    /* Task 9: Tabs */
    const [activeTab, setActiveTab] = useState("Tab1");

    /* Task 5: Update localStorage theme */
    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div style={{ padding: "20px", background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000" }}>
            <h2 style={{ textAlign:"center"}}>Reactjs Tasks Day-3</h2>
            <hr />

            <h4>1. Build a Todo App with add, edit, delete, and complete status.</h4>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button
                onClick={() => {
                    setTodos([...todos, { text: todoText, completed: false }]);
                    setTodoText("");
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                setTodos(
                                    todos.map((t, index) =>
                                        index === i ? { ...t, completed: !t.completed } : t
                                    )
                                )
                            }
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() =>
                                setTodos(todos.filter((_, index) => index !== i))
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>2. Create a Login & Logout flow using conditional rendering.</h4>
            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "Logout" : "Login"}
            </button>
            <p>{loggedIn ? "Welcome, User!" : "Please login."}</p>
            <hr />

            <h4>3. Build a Searchable Product List with real-time filtering.</h4>
            <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            <ul>
                {products
                    .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
                    .map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
            </ul>
            <hr />

            <h4>4. Create a Counter App with undo & redo functionality.</h4>
            <button
                onClick={() => {
                    setHistory([...history, count]);
                    setCount(count - 1);
                    setFuture([]);
                }}
            >
                -
            </button>
            <span style={{ margin: "0 10px" }}>{count}</span>
            <button
                onClick={() => {
                    setHistory([...history, count]);
                    setCount(count + 1);
                    setFuture([]);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    const prev = history.pop();
                    if (prev !== undefined) {
                        setFuture([count, ...future]);
                        setCount(prev);
                        setHistory([...history]);
                    }
                }}
            >
                Undo
            </button>
            <button
                onClick={() => {
                    const next = future.shift();
                    if (next !== undefined) {
                        setHistory([...history, count]);
                        setCount(next);
                        setFuture([...future]);
                    }
                }}
            >
                Redo
            </button>
            <hr />

            <h4>5. Build a Theme Switcher that persists theme using localStorage.</h4>
            <button onClick={() => setDarkMode(!darkMode)}>
                Toggle Theme
            </button>
            <hr />

            <h4>6. Create a Modal component reusable across the app.</h4>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <p>This is a reusable modal!</p>
            </Modal>
            <hr />

            <h4>7. Build a Pagination component for a list of items.</h4>
            <ul>
                {items
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
            </ul>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Prev
            </button>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                Next
            </button>
            <p>
                Page {page} / {totalPages}
            </p>
            <hr />

            <h4>8. Create a Form with validation and error messages.</h4>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button
                onClick={() => {
                    if (!name || !email) setError("All fields are required!");
                    else setError("");
                }}
            >
                Submit
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <hr />

            <h4>9. Build a Tab Navigation system using state.</h4>
            <button onClick={() => setActiveTab("Tab1")}>Tab1</button>
            <button onClick={() => setActiveTab("Tab2")}>Tab2</button>
            <p>{activeTab === "Tab1" ? "Content for Tab1" : "Content for Tab2"}</p>
            <hr />

            <h4>10. Create a Star Rating system with hover and click effects.</h4>
            <StarRating />
            <hr />
        </div>
    );
}

export default TasksD301;
