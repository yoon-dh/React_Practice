import { useEffect, useState } from "react";
import UseTitle from "./UseTitle";
import UseClick from "./UseClick";

function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const sayhello = () => console.log("hello");

  useEffect(() => {
    sayhello();
  }, [number]);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>

      <div>
        <UseTitle />
        <UseClick />
      </div>
    </div>
  );
}

export default App;
