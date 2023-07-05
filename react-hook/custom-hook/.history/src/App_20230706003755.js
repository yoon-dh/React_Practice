import { useInput } from "./useInput";

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput("안녕");

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default App;
