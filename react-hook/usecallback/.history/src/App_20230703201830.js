import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const someFuction = () => {
    console.log(`someFunc : number : ${number}`);
    return;
  };
  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
}

export default App;
