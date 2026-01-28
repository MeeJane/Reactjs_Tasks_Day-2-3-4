import { useState } from "react";

/* Task 41, 42: Greeting Component */
function Greeting({ show }) {
  if (!show) return null;
  return <h3>Hello, Welcome to React!</h3>;
}

/* Task 46: Footer Component */
function Footer() {
  return <p style={{ marginTop: "20px" }}>© 2026 My React App</p>;
}

/* Task 47: Header Component */
function Header() {
  return <h2>React Task Header</h2>;
}

/* Task 49: Card Component */
function Card({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

function TasksD445() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [totalClicks, setTotalClicks] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div style={{ padding: "20px" }}>

      {/* 41 & 42 */}
      <h4>41 & 42. Simple greeting & conditional rendering</h4>
      <button onClick={() => setShowGreeting(!showGreeting)}>
        Toggle Greeting
      </button>
      <Greeting show={showGreeting} />
      <hr />

      {/* 43, 44, 45 */}
      <h4>43–45. Multiple buttons with click count</h4>
      <button onClick={() => setTotalClicks(totalClicks + 1)}>Button 1</button>
      <button onClick={() => setTotalClicks(totalClicks + 1)}>Button 2</button>
      <button onClick={() => setTotalClicks(totalClicks + 1)}>Button 3</button>
      <p>Total Clicks: {totalClicks}</p>
      <hr />

      {/* 46 & 47 */}
      <h4>46 & 47. Header and Footer Components</h4>
      <Header />
      <Footer />
      <hr />

      {/* 48 */}
      <h4>48. Reusing a component multiple times</h4>
      <Card title="Card 1" content="This is first card" />
      <Card title="Card 2" content="This is second card" />
      <hr />

      {/* 49 */}
      <h4>49. Simple Card Layout</h4>
      <Card title="React Card" content="Card layout using props" />
      <hr />

      {/* 50 */}
      <h4>50. Input + Button + Output</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => alert(input)}>Show Text</button>
      <p>Output: {input}</p>
      <hr />

    </div>
  );
}

export default TasksD445;
