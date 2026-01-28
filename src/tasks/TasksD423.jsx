import { useState } from "react";

/* Child Component for Tasks 29 & 30 */
function ChildComponent(props) {
    return (
        <div>
            <p>Received Prop: {props.message}</p>
        </div>
    );
}

/* Second Component for Task 28 */
function SecondComponent() {
    return <p>This is the second component.</p>;
}

function TasksD423() {
    const [bgColor, setBgColor] = useState("white");
    const [isDisabled, setIsDisabled] = useState(false);
    const [showImage, setShowImage] = useState(true);
    const [username, setUsername] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    return (
        <div style={{ padding: "20px", backgroundColor: bgColor }}>

            <h4>21. Change background color on button click.</h4>
            <button onClick={() => setBgColor("lightblue")}>
                Change Background
            </button>
            <hr />

            <h4>22. Disable a button using state.</h4>
            <button disabled={isDisabled}>Disabled Button</button>
            <hr />

            <h4>23. Enable button again using another button.</h4>
            <button onClick={() => setIsDisabled(true)}>Disable</button>
            <button onClick={() => setIsDisabled(false)}>Enable</button>
            <hr />

            <h4>24. Display an image in React.</h4>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74228imUI08NOnNv2BJfsiBEShzrVnTZw3A&s"
                alt="Sample"
            />
            <hr />

            <h4>25. Show or hide image using button.</h4>
            <button onClick={() => setShowImage(!showImage)}>
                Toggle Image
            </button>
            <br />
            {showImage && (
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PJsw1NIiHXIzn6c5Sh0nhcqss7qVhwbvFQ&s"
                    alt="Toggle"
                />
            )}
            <hr />

            <h4>26. Create a simple login form (no validation).</h4>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => setSubmittedName(username)}>
                Login
            </button>
            <hr />

            <h4>27. Display username after submit.</h4>
            <p>Username: {submittedName}</p>
            <hr />

            <h4>28. Create two components and render both.</h4>
            <SecondComponent />
            <hr />

            <h4>29. Pass a simple prop to a component.</h4>
            <ChildComponent message="Hello from Parent Component" />
            <hr />

            <h4>30. Display props value inside child component.</h4>
            <ChildComponent message="Props are working!" />
            <hr />

        </div>
    );
}

export default TasksD423;
