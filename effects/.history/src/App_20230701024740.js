import { useState } from "react";

function App() {
  const [counter,setValue] = useState(0)
  const onClick = () => {
    setValue((prev) => prev + 1)
  }
  return (
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={onClick}></button>
      </div>
    )
  );
}

export default App;
