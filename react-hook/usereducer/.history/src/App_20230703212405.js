import { useState } from "react";

// reducer - state를 업데이트 하는 역할
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : ?원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button>예금</button>
      <button>출금</button>
    </div>
  );
}

export default App;
