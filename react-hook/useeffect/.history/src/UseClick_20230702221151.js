import { useRef } from "react";

function UseClick() {
  const input = useRef();
  return (
    <div>
      <h1>useClick</h1>
      <input type="text" placeholder="la" />
    </div>
  );
}

export default UseClick;
