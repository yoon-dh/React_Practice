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

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(todos);

    setTodo("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your todo..."
          value={todo}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
