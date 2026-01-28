import "./Hobbies.css";

function Hobbies(props) {
  return (
    <div className="hobbies-container">
      <h2>My Hobbies</h2>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
