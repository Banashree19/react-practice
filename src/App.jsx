import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={subValue}>remove value</button>
    </div>
  );
}

export default App;
