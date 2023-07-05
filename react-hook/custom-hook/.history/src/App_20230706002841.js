import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button>확인</button>
    </div>
  );
}

export default App;
