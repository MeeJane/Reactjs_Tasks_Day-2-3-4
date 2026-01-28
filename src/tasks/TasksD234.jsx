import { useEffect, useState, useRef } from "react";

// task-35
import img1 from "../assets/animal1.jpg";
import img2 from "../assets/animal2.jpg";
import img3 from "../assets/animal3.jpg";

/* Task 34: Reusable Card Component */
function Card({ title, content }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
            <h5>{title}</h5>
            <p>{content}</p>
        </div>
    );
}

function TasksD234() {
    /* Task 31: Modal */
    const [showModal, setShowModal] = useState(false);

    /* Task 32: Star rating */
    const [rating, setRating] = useState(0);

    /* Task 33: Reset form */
    const [formValue, setFormValue] = useState("");

    /* Task 35: Image gallery */
    const images = [img1, img2, img3];
    const [imgIndex, setImgIndex] = useState(0);

    /* Task 36: Re-render count */
    const renderCount = useRef(0);
    renderCount.current++;

    /* Task 37: Notification */
    const [showNotification, setShowNotification] = useState(false);

    /* Task 38: Disable submit */
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

    /* Task 39: FAQ accordion */
    const [openFaq, setOpenFaq] = useState(null);

    /* Task 40: Dropdown close */
    const [dropdown, setDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    useEffect(() => {
        if (showNotification) {
            setTimeout(() => setShowNotification(false), 3000);
        }
    }, [showNotification]);

    return (
        <div style={{ padding: "20px" }}>

            <h4>31. Build a modal popup that opens and closes on button click.</h4>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            {showModal && (
                <div style={{ border: "1px solid black", padding: "10px" }}>
                    <p>This is a modal</p>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
            <hr />

            <h4>32. Create a star rating component.</h4>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => setRating(star)}
                    style={{ cursor: "pointer", fontSize: "20px" }}
                >
                    {star <= rating ? "★" : "☆"}
                </span>
            ))}
            <p>Rating: {rating}</p>
            <hr />

            <h4>33. Build a form that resets input values after submission.</h4>
            <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
            />
            <button
                onClick={() => {
                    setFormValue("");
                }}
            >
                Submit
            </button>
            <hr />

            <h4>34. Create a reusable Card component for displaying data.</h4>
            <Card title="Card 1" content="This is card one" />
            <Card title="Card 2" content="This is card two" />
            <hr />

            <h4>35. Build a simple image gallery with next/previous buttons.</h4>
            <img src={images[imgIndex]} alt="gallery" />
            <br />
            <button
                onClick={() =>
                    setImgIndex((imgIndex - 1 + images.length) % images.length)
                }
            >
                Prev
            </button>
            <button
                onClick={() => setImgIndex((imgIndex + 1) % images.length)}
            >
                Next
            </button>
            <hr />

            <h4>36. Create a component that counts how many times it re-renders.</h4>
            <p>Render Count: {renderCount.current}</p>
            <button onClick={() => setRating(rating)}>Re-render</button>
            <hr />

            <h4>37. Build a notification alert that disappears after 3 seconds.</h4>
            <button onClick={() => setShowNotification(true)}>Show Notification</button>
            {showNotification && <p>Notification Alert!</p>}
            <hr />

            <h4>38. Create a form that disables submit button until all fields are filled.</h4>
            <input onChange={(e) => setField1(e.target.value)} placeholder="Field 1" />
            <input onChange={(e) => setField2(e.target.value)} placeholder="Field 2" />
            <button disabled={!field1 || !field2}>Submit</button>
            <hr />

            <h4>39. Build a simple FAQ accordion component.</h4>
            <p onClick={() => setOpenFaq(1)} style={{ cursor: "pointer" }}>
                What is React?
            </p>
            {openFaq === 1 && <p>React is a JavaScript library.</p>}
            <p onClick={() => setOpenFaq(2)} style={{ cursor: "pointer" }}>
                What is JSX?
            </p>
            {openFaq === 2 && <p>JSX allows HTML in JavaScript.</p>}
            <hr />

            <h4>40. Create a dropdown menu that closes when an item is selected.</h4>
            <button onClick={() => setDropdown(!dropdown)}>Open Menu</button>
            {dropdown && (
                <ul>
                    {["Option 1", "Option 2", "Option 3"].map((item, i) => (
                        <li
                            key={i}
                            onClick={() => {
                                setSelectedItem(item);
                                setDropdown(false);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <p>Selected: {selectedItem}</p>
            <hr />

        </div>
    );
}

export default TasksD234;
