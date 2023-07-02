import { useRef } from "react";

function UseClick() {
  const potato = useRef();

  return (
    <div>
      <h1>useClick</h1>
      <input ref={potato} type="text" placeholder="la" />
    </div>
  );
}

export default UseClick;
