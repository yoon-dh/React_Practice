import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((counter) => counter + 1);
  };
  console.log("i run all time");
  const iRunOnlyOnce = () => {
    console.log("i run only one");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me </button>
    </div>
  );
}

export default App;
