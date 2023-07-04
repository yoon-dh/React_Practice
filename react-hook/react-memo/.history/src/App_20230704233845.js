import { useState } from "react";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };
  return (
    <div className="App">
      <h1>👨‍👩‍👧부모</h1>
      <p>age: {parentAge}</p>
    </div>
  );
}

export default App;
