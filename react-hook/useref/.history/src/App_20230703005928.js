import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>State : {count}</p>
      <button onClick={increaseCountState}>State Up</button>
    </div>
  );
}

export default App;
