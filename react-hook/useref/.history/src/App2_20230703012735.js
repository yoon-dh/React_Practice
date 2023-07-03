import { useRef, useState } from "react";

function App2() {
  const [renderer, setRenderer] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`ref : ${countRef.current}`);
  };
  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var : ${countVar}`);
  };
  return (
    <div>
      <h1>component inside VS useRef</h1>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={increaseRef}>Ref up</button>
      <button onClick={increaseVar}>Var up</button>
    </div>
  );
}

export default App2;
