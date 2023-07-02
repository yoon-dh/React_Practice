import { useState } from "react";

function useInput() {
  const useinput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  };

  return <h1>useInput</h1>;
}

export default useInput;
