import { useInput } from "./useInput";
import App2 from "./App2";

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput(
    "안녕",
    displayMessage
  );

  return (
    <div className="App">
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
      <hr />
      <App2 />
    </div>
  );
}

export default App;
