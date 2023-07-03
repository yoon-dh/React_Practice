import { useRef } from "react";

function App4() {
  const inputRef = useRef();
  return (
    <div>
      <h1>contact DOM using useRef</h1>
      <input type="text" placeholder="username" />
      <button>로그인</button>
    </div>
  );
}

export default App4;
