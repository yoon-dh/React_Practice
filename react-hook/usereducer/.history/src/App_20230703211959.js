import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : ?원</p>
      <input
        type="number"
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
    </div>
  );
}

export default App;
