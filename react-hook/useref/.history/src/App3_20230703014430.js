import { useState } from "react";

function App3() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>good situation to use "useRef"</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}

export default App3;
