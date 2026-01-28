function Greeting(props) {
  const style = {
    backgroundColor: "lightblue",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <h2>Hello, {props.name}!</h2>
    </div>
  );
}

export default Greeting;
