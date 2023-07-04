import { memo } from "react";

function Child({ name, age }) {
  console.log("👶🏻자녀 컴포넌트가 렌더링 되었습니다!");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>👶🏻자녀 (React.memo)</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
}

export default memo(Child);
