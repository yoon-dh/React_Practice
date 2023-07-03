import { useReducer, useState } from "react";

function App2() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, "");

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : ?</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>추가</button>
    </div>
  );
}
