import { useInput } from "./useInput";

function App() {
  const [inputValue, handleChange] = useInput();

  const handleSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
