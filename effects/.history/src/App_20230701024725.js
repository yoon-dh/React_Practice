import { useState } from "react";

function App() {
  return (
    const [counter,setValue] = useState(0)
    const onClick = () => {
      setValue((prev) => prev + 1)
    }
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={onClick}></button>
      </div>
    )
  );
}

export default App;
