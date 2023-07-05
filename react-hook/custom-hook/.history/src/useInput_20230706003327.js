import { useState } from "react";

export function useInput(initialvalue) {
  const [inputValue, setInputValue] = useState(initialvalue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [];
}
