import { useState } from "react";

export function useInput(initialvalue, submitAction) {
  const [inputValue, setInputValue] = useState(initialvalue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  };

  return [inputValue, handleChange, handleSubmit];
}
