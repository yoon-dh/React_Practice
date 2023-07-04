import { useState } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };
  return (
    <div
      style={{
        border: "2px solid navy",
        padding: "10px",
      }}
    >
      <h1>👨‍👩‍👧부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모나이증가</button>
      <Child />
    </div>
  );
}

export default App;
