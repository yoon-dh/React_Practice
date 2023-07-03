import { useEffect, useRef } from "react";

function App4() {
  const inputRef = useRef();

  useEffect(() => {}, []);
  return (
    <div>
      <h1>contact DOM using useRef</h1>
      <input ref={inputRef} type="text" placeholder="username" />
      <button>로그인</button>
    </div>
  );
}

export default App4;
