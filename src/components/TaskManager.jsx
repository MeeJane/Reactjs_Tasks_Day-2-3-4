import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Complete Assignment", completed: false },
    { id: 2, name: "Read React Basics", completed: false },
    { id: 3, name: "Practice Coding", completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                marginLeft: "8px",
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black"
              }}
            >
              {task.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
