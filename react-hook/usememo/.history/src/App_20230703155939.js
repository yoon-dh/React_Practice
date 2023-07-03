import { useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 9999999; i++) {} // 생각하는 시간
  return number + 100000;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);

  return (
    <div className="App">
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      />
      <span> + 10000 = {hardSum}</span>
    </div>
  );
}

export default App;
