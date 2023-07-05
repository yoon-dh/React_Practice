import { useState } from "react";

export function useInput(initialvalue, submitAction) {
  const [inputValue, setInputValue] = useState(initialvalue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}
