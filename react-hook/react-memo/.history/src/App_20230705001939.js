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

  const name = {
    lastName: "홍",
    firstName: "길동",
  };
  console.log("👨‍👩‍👧부모 컴포넌트가 렌더링 되었습니다!");
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
      <button onClick={incrementChildAge}>자녀나이증가(use React.memo)</button>
      <Child name={"홍길동"} age={childAge} />
      <Child2 />
    </div>
  );
}

export default App;
