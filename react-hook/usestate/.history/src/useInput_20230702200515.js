import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return value;
};

function UseInput() {
  const name = useInput("mr.yoon");
  return (
    <div>
      <h1>UseInput</h1>
      <input type="text" placeholder="Name" value={...name} />
    </div>
  );
}

export default UseInput;
