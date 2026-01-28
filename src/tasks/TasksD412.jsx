import { useState } from "react";

function TasksD412() {
    const [number, setNumber] = useState(0);
    const [inputText, setInputText] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    return (
        <div style={{ padding: "20px" }}>

            <h4>11. Reset the number to zero.</h4>
            <button onClick={() => setNumber(0)}>Reset</button>
            <p>Number: {number}</p>
            <hr />

            <h4>12. Display an input field.</h4>
            <input type="text" />
            <hr />

            <h4>13. Show entered input value on screen.</h4>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <p>{inputText}</p>
            <hr />

            <h4>14. Clear input value using a button.</h4>
            <button onClick={() => setInputText("")}>Clear</button>
            <p>{inputText}</p>
            <hr />

            <h4>15. Convert input text to uppercase.</h4>
            <button onClick={() => setInputText(inputText.toUpperCase())}>
                Uppercase
            </button>
            <p>{inputText}</p>
            <hr />

            <h4>16. Convert input text to lowercase.</h4>
            <button onClick={() => setInputText(inputText.toLowerCase())}>
                Lowercase
            </button>
            <p>{inputText}</p>
            <hr />

            <h4>17. Display a list of fruits using an array.</h4>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
            <hr />

            <h4>18. Display list items using map().</h4>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
            <hr />

            <h4>19. Show index number with list items.</h4>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {index} - {fruit}
                    </li>
                ))}
            </ul>
            <hr />

            <h4>20. Conditionally show a message using state.</h4>
            <button onClick={() => setShowMessage(!showMessage)}>
                Toggle Message
            </button>
            {showMessage && <p>This message is conditionally shown.</p>}
            <hr />

        </div>
    );
}

export default TasksD412;
