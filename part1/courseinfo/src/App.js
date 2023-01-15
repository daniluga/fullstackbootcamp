import "./App.css";

const Message = (props) => {
  console.log(props);
  return <h2 style={{ color: props.color }}>{props.parametroProps}</h2>;
};

const Description = () => {
  return <strong>Work in progress</strong>;
};

function App() {
  // const msg = "Hello world";
  const a = 2;
  const b = 2;

  return (
    <div className="App">
      <h1> -- App title -- </h1>
      <Message color="red" parametroProps="Test1" />
      <Message color="green" parametroProps="Test2" />
      <Message color="blue" parametroProps="Test3" />
      <Message color="orange" parametroProps="Test4" />
      <Description />
      <br />
      <div>
        <p>Result: {a + b}</p>
      </div>
    </div>
  );
}

export default App;
