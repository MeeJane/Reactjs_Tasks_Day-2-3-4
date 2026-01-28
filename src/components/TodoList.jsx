import React, { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;

        setTasks([...tasks, task.trim()]);
        setTask("");
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center" }}>Todo List</h2>
            <form onSubmit={handleAddTask} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <input
                    type="text"
                    value={task}
                    placeholder="Enter a task"
                    onChange={(e) => setTask(e.target.value)}
                    style={{ flex: 1, padding: "8px" }}
                />
                <button type="submit" style={{ padding: "8px 12px", background: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}>
                    Add
                </button>
            </form>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                {tasks.map((t, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px", padding: "5px 10px", border: "1px solid #ddd", borderRadius: "5px" }}>
                        <span>{t}</span>
                        <button
                            onClick={() => handleRemoveTask(index)}
                            style={{ background: "#dc3545", color: "#fff", border: "none", padding: "5px 8px", borderRadius: "3px" }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
