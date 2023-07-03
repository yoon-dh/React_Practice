import { useRef } from "react";

function App2() {
  const countRef = useRef(0);
  let countVar = 0;
  return (
    <div>
      <h1>component inside VS useRef</h1>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button>Ref up</button>
      <button>Var up</button>
    </div>
  );
}

export default App2;
