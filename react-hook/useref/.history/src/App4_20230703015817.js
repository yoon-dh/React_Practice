import { useEffect, useRef } from "react";

function App4() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = (e) => {
    alert(e.target.value);
  };
  return (
    <div>
      <h1>contact DOM using useRef</h1>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App4;
