import { useRef, useState } from "react";
import App2 from "./App2";
import App3 from "./App3";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef); // countRef.current

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div className="App">
      <h1>state VS useRef</h1>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State Up</button>
      <button onClick={increaseCountRef}>Ref Up</button>
      <hr />
      <App2 />
      <hr />
      <App3 />
    </div>
  );
}

export default App;
