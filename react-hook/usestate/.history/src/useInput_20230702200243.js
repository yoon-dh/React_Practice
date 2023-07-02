import { useState } from "react";

const useinput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return value;
};

function UseInput() {
  const name = useInput("mr.yoon");
  return (
    <div>
      <h1>useInput</h1>;
      <input type="text" placeholder="Name" />;
    </div>
  );
}

export default UseInput;
