import { useState } from "react";

const useinput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
};

function useInput() {
  return <h1>useInput</h1>;
  <input type="text" placeholder="Name" />;
}

export default useInput;
