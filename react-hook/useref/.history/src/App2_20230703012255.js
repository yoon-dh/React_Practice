import { useRef } from "react";

function App2() {
  const countRef = useRef(0);
  let countVar = 0;
  return (
    <div>
      <h1>component inside VS useRef</h1>
    </div>
  );
}

export default App2;
