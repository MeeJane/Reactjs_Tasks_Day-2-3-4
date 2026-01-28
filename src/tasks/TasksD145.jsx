import React, { useState, useRef } from "react";

// Child component for tasks 41–42
function Child({ updateParent }) {
    return (
        <button onClick={() => updateParent("Updated from Child!")}>
            Update Parent State
        </button>
    );
}

// Reusable tab component for task 46
function Tab({ label, activeTab, setActiveTab }) {
    return (
        <button
            onClick={() => setActiveTab(label)}
            style={{
                marginRight: "5px",
                fontWeight: activeTab === label ? "bold" : "normal",
            }}
        >
            {label}
        </button>
    );
}

// Modal component for task 45
function Modal({ visible, close }) {
    if (!visible) return null;
    return (
        <div style={{
            position: "fixed",
            top: "0", left: "0", width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
                <p>This is a modal!</p>
                <button onClick={close}>Close</button>
            </div>
        </div>
    );
}

// Child component for task 50
function SmallComponent({ title }) {
    return <p style={{ border: "1px solid #333", padding: "5px" }}>{title}</p>;
}

function TasksD145() {
    // Task 41–42
    const [parentText, setParentText] = useState("Initial Parent State");

    // Task 43
    const [searchTerm, setSearchTerm] = useState("");
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Task 45
    const [showModal, setShowModal] = useState(false);

    // Task 46
    const [activeTab, setActiveTab] = useState("Tab1");

    // Task 47
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Task 48
    const inputRef = useRef(null);

    // Task 49
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", backgroundColor: "#f0f5ff" }}>

            {/* Task 41 */}
            <h4>41. Pass function from parent to child component.</h4>
            <Child updateParent={setParentText} />
            <p>Parent Text: {parentText}</p>
            <hr />

            {/* Task 42 */}
            <h4>42. Update parent state from child component.</h4>
            <p>See above button which updates parent from child.</p>
            <hr />

            {/* Task 43 */}
            <h4>43. Create a simple search filter for a list.</h4>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ display: "block", marginBottom: "5px" }}
            />
            <ul>
                {filteredItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <hr />

            {/* Task 44 */}
            <h4>44. Use key properly while rendering lists.</h4>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <hr />

            {/* Task 45 */}
            <h4>45. Show or hide modal component.</h4>
            <button onClick={() => setShowModal(true)} style={{ marginBottom: "10px" }}>Open Modal</button>
            <Modal visible={showModal} close={() => setShowModal(false)} />
            <hr />

            {/* Task 46 */}
            <h4>46. Create tabs using React state.</h4>
            <Tab label="Tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab label="Tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tab label="Tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
            <p>Active Tab: {activeTab}</p>
            <hr />

            {/* Task 47 */}
            <h4>47. Implement simple pagination logic.</h4>
            <ul>
                {paginatedItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} style={{ marginLeft: "5px" }}>Next</button>
            <p>Page {currentPage} of {totalPages}</p>
            <hr />

            {/* Task 48 */}
            <h4>48. Use useRef to focus an input field.</h4>
            <input ref={inputRef} type="text" placeholder="Focus me" style={{ marginRight: "5px" }} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
            <hr />

            {/* Task 49 */}
            <h4>49. Prevent unnecessary re-render using proper state updates.</h4>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <hr />

            {/* Task 50 */}
            <h4>50. Split a large component into smaller reusable components.</h4>
            <SmallComponent title="Component 1" />
            <SmallComponent title="Component 2" />
            <SmallComponent title="Component 3" />
            <hr />

        </div>
    );
}

export default TasksD145;
