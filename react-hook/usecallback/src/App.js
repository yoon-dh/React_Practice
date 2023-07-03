import { useCallback, useEffect, useState } from "react";
import App2 from "./App2";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFuction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다");
  }, [someFuction]);

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFuction}>call someFunc</button>

      <hr />
      <hr />
      <App2 />
    </div>
  );
}

export default App;
