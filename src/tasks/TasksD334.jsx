import { useState, useEffect } from "react";

/* Task 37: Tooltip Component */
function Tooltip({ text, children }) {
    const [show, setShow] = useState(false);
    return (
        <span style={{ position: "relative" }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {children}
            {show && (
                <span style={{
                    position: "absolute",
                    bottom: "120%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#333",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap"
                }}>
                    {text}
                </span>
            )}
        </span>
    );
}

/* Task 39: Image Slider / Carousel */
function ImageSlider({ images }) {
    const [index, setIndex] = useState(0);
    return (
        <div>
            <img src={images[index]} alt="slider" style={{ width: "200px", height: "150px", objectFit: "cover" }} />
            <br />
            <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>Prev</button>
            <button onClick={() => setIndex((index + 1) % images.length)}>Next</button>
        </div>
    );
}

function TasksD334() {
    /* Task 31: Search + Filter */
    const products = [
        { name: "Laptop", category: "Electronics" },
        { name: "Shirt", category: "Clothing" },
        { name: "Phone", category: "Electronics" }
    ];
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    /* Task 32: Data Table hide/show columns */
    const columns = ["Name", "Age", "Role"];
    const [visibleCols, setVisibleCols] = useState(columns);

    /* Task 33: Countdown Timer */
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    /* Task 34: Form Reset */
    const [form, setForm] = useState({ name: "", email: "" });

    /* Task 35: Like / Dislike */
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    /* Task 36: Loading Spinner */
    const [loading, setLoading] = useState(false);
    const fakeAPICall = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    /* Task 38: Breadcrumb */
    const [path, setPath] = useState(["Home", "Products", "Electronics"]);

    /* Task 39: Image Slider */
    const images = [
        "https://media.greatbigphotographyworld.com/wp-content/uploads/2024/10/triptych.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF1Gz_Xsh2r_DfO5JaLspe4oKYcEGo-myBg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6Tid_B_LQH_8iZ3LvrAOpp0_xysrS2utlQ&s"
    ];

    /* Task 40: Responsive Navbar toggle */
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
           
            <hr />

            <h4>31. Build a Search + Filter combo app.</h4>
            <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
            <select onChange={e => setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </select>
            <ul>
                {products
                    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
                    .filter(p => !filter || p.category === filter)
                    .map((p, i) => <li key={i}>{p.name} ({p.category})</li>)}
            </ul>
            <hr />

            <h4>32. Create a Data Table with hide/show columns.</h4>
            {columns.map(col => (
                <label key={col} style={{ marginRight: "10px" }}>
                    <input
                        type="checkbox"
                        checked={visibleCols.includes(col)}
                        onChange={e => {
                            if (e.target.checked) setVisibleCols([...visibleCols, col]);
                            else setVisibleCols(visibleCols.filter(c => c !== col));
                        }}
                    /> {col}
                </label>
            ))}
            <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
                <thead>
                    <tr>
                        {visibleCols.includes("Name") && <th>Name</th>}
                        {visibleCols.includes("Age") && <th>Age</th>}
                        {visibleCols.includes("Role") && <th>Role</th>}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {visibleCols.includes("Name") && <td>John</td>}
                        {visibleCols.includes("Age") && <td>28</td>}
                        {visibleCols.includes("Role") && <td>Developer</td>}
                    </tr>
                </tbody>
            </table>
            <hr />

            <h4>33. Build a Countdown Timer for an event.</h4>
            <p>Countdown: {countdown}</p>
            <hr />

            <h4>34. Create a Form Reset & Clear All functionality.</h4>
            <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <button onClick={() => setForm({ name: "", email: "" })}>Reset</button>
            <p>Name: {form.name}, Email: {form.email}</p>
            <hr />

            <h4>35. Build a Like / Dislike component with counters.</h4>
            <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislike ({dislikes})</button>
            <hr />

            <h4>36. Create a Loading Spinner shown during fake API call.</h4>
            <button onClick={fakeAPICall}>Fetch Data</button>
            {loading && <div style={{ marginTop: "10px" }}>Loading...</div>}
            <hr />

            <h4>37. Build a Tooltip component reusable across UI.</h4>
            <Tooltip text="Hello Tooltip!">
                <button>Hover me</button>
            </Tooltip>
            <hr />

            <h4>38. Create a Dynamic Breadcrumb navigation.</h4>
            <p>{path.join(" / ")}</p>
            <hr />

            <h4>39. Build an Image Slider / Carousel.</h4>
            <ImageSlider images={images} />
            <hr />

            <h4>40. Create a Responsive Navbar with toggle menu.</h4>
            <div style={{ border: "1px solid #ccc", padding: "10px" }}>
                <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
                {menuOpen && <div style={{ marginTop: "10px" }}>Link1 | Link2 | Link3</div>}
            </div>
            <hr />

        </div>
    );
}

export default TasksD334;
