import { useReducer, useState } from "react";
import Student from "./Student";

const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: "James",
      isHere: false,
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.student, newStudent],
      };
    default:
      return;
  }
};

function App2() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>

      {studentInfo.students.map((student) => {
        return <Student key={student.id} name={student.name} />;
      })}
    </div>
  );
}

export default App2;
