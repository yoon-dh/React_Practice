import { useEffect, useRef, useState } from "react";

function App3() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(`렌더링 수 : ${renderCount.current}`);
  });
  return (
    <div>
      <h1>good situation to use "useRef"</h1>
      <p>
        useRef는 변화는 감지하지만, 그 변화가 렌더링을 발생시키면 안되는 값을
        다룰 때!
      </p>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Count up</button>
    </div>
  );
}

export default App3;
