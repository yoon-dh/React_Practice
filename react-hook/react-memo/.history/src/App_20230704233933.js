import { useState } from "react";

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
    </div>
  );
}

export default App;
