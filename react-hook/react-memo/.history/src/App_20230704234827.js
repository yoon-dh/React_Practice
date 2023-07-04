import { useState } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

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
      <Child name={"홍길동"} age={childAge} />
    </div>
  );
}

export default App;
