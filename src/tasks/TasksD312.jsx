import { useState, useEffect } from "react";

/* Task 16: Reusable Input Component */
function Input({ label, value, onChange, error }) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <label>{label}</label>
            <input
                value={value}
                onChange={onChange}
                style={{ display: "block", padding: "5px", marginTop: "5px" }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

/* Task 14: Accordion Component */
function Accordion({ title, content, open, toggle }) {
    return (
        <div style={{ border: "1px solid #ccc", marginBottom: "5px" }}>
            <div
                onClick={toggle}
                style={{ padding: "10px", cursor: "pointer", background: "#eee" }}
            >
                {title}
            </div>
            {open && <div style={{ padding: "10px" }}>{content}</div>}
        </div>
    );
}

/* Task 17: Notification Component */
function Notification({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);
    return (
        <div style={{ background: "#4caf50", color: "white", padding: "10px", margin: "5px 0" }}>
            {message}
        </div>
    );
}

function TasksD312() {
    /* Task 11: Shopping Cart */
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState("");

    /* Task 12: Password Strength */
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    /* Task 13: Timer */
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) interval = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(interval);
    }, [running]);

    /* Task 14: Accordion */
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "What is React?", a: "React is a JS library." },
        { q: "What is JSX?", a: "JSX allows HTML in JS." }
    ];

    /* Task 15: Dynamic Dropdown */
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const cities = {
        India: ["Chennai", "Mumbai", "Delhi"],
        USA: ["New York", "Los Angeles"]
    };

    /* Task 16: Controlled Input with validation */
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    /* Task 17: Notifications */
    const [notifications, setNotifications] = useState([]);

    /* Task 18: Controlled Form */
    const [form, setForm] = useState({ email: "", phone: "" });

    /* Task 19: Search Bar */
    const products = ["Laptop", "Mobile", "Tablet", "Watch"];
    const [search, setSearch] = useState("");

    /* Task 20: Sidebar toggle */
    const [sidebarOpen, setSidebarOpen] = useState(true);

    /* Password strength calculation */
    useEffect(() => {
        if (!password) setStrength("");
        else if (password.length < 4) setStrength("Weak");
        else if (password.length < 8) setStrength("Medium");
        else setStrength("Strong");
    }, [password]);

    return (
        <div style={{ padding: "20px" }}>
            
            <hr />

            <h4>11. Build a Shopping Cart mini app with add/remove items.</h4>
            <input value={item} onChange={e => setItem(e.target.value)} />
            <button onClick={() => { setCart([...cart, item]); setItem(""); }}>Add</button>
            <ul>
                {cart.map((i, idx) => (
                    <li key={idx}>
                        {i} <button onClick={() => setCart(cart.filter((_, id) => id !== idx))}>Remove</button>
                    </li>
                ))}
            </ul>
            <hr />

            <h4>12. Create a Password Strength Checker UI.</h4>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <p>Strength: {strength}</p>
            <hr />

            <h4>13. Build a Timer app with start, pause, reset.</h4>
            <p>Time: {time}s</p>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Pause</button>
            <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
            <hr />

            <h4>14. Create an Accordion FAQ component.</h4>
            {faqs.map((f, i) => (
                <Accordion
                    key={i}
                    title={f.q}
                    content={f.a}
                    open={openIndex === i}
                    toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
            <hr />

            <h4>15. Build a Dynamic Dropdown dependent on another dropdown.</h4>
            <select onChange={e => { setCountry(e.target.value); setCity(""); }}>
                <option value="">Select Country</option>
                {Object.keys(cities).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select onChange={e => setCity(e.target.value)} disabled={!country}>
                <option value="">Select City</option>
                {country && cities[country].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <p>Selected: {country} - {city}</p>
            <hr />

            <h4>16. Create a Reusable Input component with label and error handling.</h4>
            <Input
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                error={error && !name ? "Name is required" : ""}
            />
            <button onClick={() => setError(!name)}>Submit</button>
            <hr />

            <h4>17. Build a Notification System with auto-dismiss alerts.</h4>
            <button onClick={() => setNotifications([...notifications, "New Notification!"])}>Add Notification</button>
            {notifications.map((n, i) => (
                <Notification key={i} message={n} onClose={() => setNotifications(notifications.filter((_, idx) => idx !== i))} />
            ))}
            <hr />

            <h4>18. Create a Controlled Form with multiple inputs.</h4>
            <input
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
                placeholder="Phone"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
            />
            <p>Email: {form.email}, Phone: {form.phone}</p>
            <hr />

            <h4>19. Build a Search Bar that highlights matched text.</h4>
            <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
            <ul>
                {products.filter(p => p.toLowerCase().includes(search.toLowerCase())).map((p, i) => (
                    <li key={i}>
                        {p.split(new RegExp(`(${search})`, "gi")).map((part, idx) =>
                            part.toLowerCase() === search.toLowerCase() ? <mark key={idx}>{part}</mark> : part
                        )}
                    </li>
                ))}
            </ul>
            <hr />

            <h4>20. Create a Sidebar toggle layout (collapse / expand).</h4>
            <div style={{ display: "flex" }}>
                {sidebarOpen && <div style={{ width: "150px", background: "#ccc", padding: "10px" }}>Sidebar</div>}
                <div style={{ flex: 1, padding: "10px" }}>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}>Toggle Sidebar</button>
                    <p>Main Content Area</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default TasksD312;
