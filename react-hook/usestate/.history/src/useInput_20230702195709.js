import { useState } from "react";

const useinput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
};
function useInput() {
  return <h1>useInput</h1>;
}

export default useInput;
