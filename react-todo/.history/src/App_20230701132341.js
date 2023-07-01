import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <form action="">
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your todo..."
          value={todo}
        />
      </form>
    </div>
  );
}

export default App;
