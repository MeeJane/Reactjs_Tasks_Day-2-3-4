import React, { useState, useEffect } from "react";

// Reusable card component for task 40
function Card({ title, description }) {
    return (
        <div style={{
            border: "1px solid #333",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#f8f8f8"
        }}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

function TasksD134() {
    // Tasks 31–33: Todo list states
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all"); // all, completed, pending

    // Tasks 34–35: useEffect examples
    useEffect(() => {
        console.log("Component mounted (TasksD134)");
    }, []);

    useEffect(() => {
        document.title = `Todos: ${todos.length}`;
    }, [todos]);

    // Tasks 36–39: API fetch
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const fetchUsers = async () => {
        setLoading(true);
        setApiError("");
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setApiError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Todo handlers
    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setTodos([...todos, { text: todo, completed: false }]);
            setTodo("");
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

    const toggleComplete = (index) => {
        setTodos(todos.map((item, idx) => idx === index ? { ...item, completed: !item.completed } : item));
    };

    const filteredTodos = todos.filter((t) => {
        if (filter === "completed") return t.completed;
        if (filter === "pending") return !t.completed;
        return true;
    });

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor: "#f0fff0" }}>

            {/* Task 31 */}
            <h4>31. Delete an item from todo list.</h4>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add todo"
                style={{ display: "block", marginBottom: "5px" }}
            />
            <button onClick={handleAddTodo} style={{ marginBottom: "10px" }}>Add Todo</button>
            <ul>
                {filteredTodos.map((t, idx) => (
                    <li key={idx}>
                        {t.text}
                        <button onClick={() => handleDelete(idx)} style={{ marginLeft: "10px" }}>Delete</button>
                    </li>
                ))}
            </ul>
            <hr />

            {/* Task 32 */}
            <h4>32. Mark todo item as completed.</h4>
            <ul>
                {filteredTodos.map((t, idx) => (
                    <li key={idx} style={{ textDecoration: t.completed ? "line-through" : "none" }}>
                        {t.text}
                        <button onClick={() => toggleComplete(idx)} style={{ marginLeft: "10px" }}>
                            {t.completed ? "Undo" : "Complete"}
                        </button>
                    </li>
                ))}
            </ul>
            <hr />

            {/* Task 33 */}
            <h4>33. Filter completed and pending todos.</h4>
            <button onClick={() => setFilter("all")} style={{ marginRight: "5px" }}>All</button>
            <button onClick={() => setFilter("completed")} style={{ marginRight: "5px" }}>Completed</button>
            <button onClick={() => setFilter("pending")}>Pending</button>
            <ul>
                {filteredTodos.map((t, idx) => (
                    <li key={idx} style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</li>
                ))}
            </ul>
            <hr />

            {/* Task 34 */}
            <h4>34. Use useEffect to log message on component mount.</h4>
            <p>Check console for mount message.</p>
            <hr />

            {/* Task 35 */}
            <h4>35. Use useEffect to update document title dynamically.</h4>
            <p>Document title changes according to number of todos.</p>
            <hr />

            {/* Task 36 */}
            <h4>36. Fetch data from a public API and display it.</h4>
            <button onClick={fetchUsers} style={{ marginBottom: "10px" }}>Fetch Users</button>
            <hr />

            {/* Task 37 */}
            <h4>37. Display loading message while fetching data.</h4>
            {loading && <p>Loading users...</p>}
            <hr />

            {/* Task 38 */}
            <h4>38. Handle API error and display error message.</h4>
            {apiError && <p style={{ color: "red" }}>Error: {apiError}</p>}
            <hr />

            {/* Task 39 */}
            <h4>39. Render list of users from API response.</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
            <hr />

            {/* Task 40 */}
            <h4>40. Create a reusable card component.</h4>
            <Card title="Card 1" description="This is the first card" />
            <Card title="Card 2" description="This is the second card" />
            <Card title="Card 3" description="This is the third card" />
            <hr />

        </div>
    );
}

export default TasksD134;
