import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)>{number}</button>
    </div>
  );
}

export default App;
