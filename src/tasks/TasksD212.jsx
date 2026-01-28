import { useEffect, useState } from "react";

/* Task 11: Reusable Button Component */
function CustomButton({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

/* Task 15: Header & Footer Components */
function Header() {
    return <h3>Header Component</h3>;
}

function Footer() {
    return <h3>Footer Component</h3>;
}

function TasksD212() {
    const [showWarning, setShowWarning] = useState(false);
    const [age, setAge] = useState(20);
    const [likes, setLikes] = useState(0);
    const [showImage, setShowImage] = useState(false);
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(true);

    const students = ["Aarav", "Diya", "Karthik", "Meera"];

    /* Task 17: Greeting based on time */
    useEffect(() => {
        const hour = new Date().getHours();
        setGreeting(hour < 12 ? "Good Morning" : "Good Evening");
    }, []);

    /* Task 19: Loading text */
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h4>11. Create a reusable Button component and use it in 3 places.</h4>
            <CustomButton label="Button 1" onClick={() => alert("Button 1")} />
            <CustomButton label="Button 2" onClick={() => alert("Button 2")} />
            <CustomButton label="Button 3" onClick={() => alert("Button 3")} />
            <hr />

            <h4>12. Show a warning message only when a checkbox is checked.</h4>
            <input
                type="checkbox"
                onChange={(e) => setShowWarning(e.target.checked)}
            />
            {showWarning && <p style={{ color: "red" }}>Warning Message!</p>}
            <hr />

            <h4>13. Create a component that displays user age and updates it on button click.</h4>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <hr />

            <h4>14. Build a basic like button that increases count when clicked.</h4>
            <button onClick={() => setLikes(likes + 1)}>Like</button>
            <p>Likes: {likes}</p>
            <hr />

            <h4>15. Create a header and footer component and reuse them in App.js.</h4>
            <Header />
            <p>Main Content Area</p>
            <Footer />
            <hr />

            <h4>16. Display an image conditionally using a button.</h4>
            <button onClick={() => setShowImage(!showImage)}>
                Toggle Image
            </button>
            {showImage && (
                <img
                    src="https://via.placeholder.com/150"
                    alt="sample"
                />
            )}
            <hr />

            <h4>17. Build a simple greeting app that changes based on time.</h4>
            <p>{greeting}</p>
            <hr />

            <h4>18. Create a list of students and display their names in an unordered list.</h4>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
            <hr />

            <h4>19. Build a component that shows “Loading…” initially and text after 2 seconds.</h4>
            <p>{loading ? "Loading..." : "Content Loaded"}</p>
            <hr />

            <h4>20. Create a simple calculator UI with buttons.</h4>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <br />
                <button>+</button>
                <button>-</button>
                <button>=</button>
            </div>
            <hr />

        </div>
    );
}

export default TasksD212;
