import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        placeholder="Write your todo..."
        value={todo}
      />
    </div>
  );
}

export default App;
