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

  const onDelete = (event) => {
    console.log(event.target);
    console.log(event);
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
        {todos.map((item, index) => (
          <li onClick={onDelete} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
