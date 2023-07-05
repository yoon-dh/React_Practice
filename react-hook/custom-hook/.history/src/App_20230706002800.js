import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return <div className="App"></div>;
}

export default App;
