import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>My Todo ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your todo..."
          value={todo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        <li>1</li>; })}
      </ul>
    </div>
  );
}

export default App;
