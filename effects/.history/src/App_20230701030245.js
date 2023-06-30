import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((counter) => counter + 1);
  };

  useEffect(() => {
    console.log("call API");
  }, []);
  return (
    <div>
      <input type="text" placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me </button>
    </div>
  );
}

export default App;
