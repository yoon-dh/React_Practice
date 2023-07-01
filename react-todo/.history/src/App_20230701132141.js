import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input type="text" placeholder="Write your todo..." />
    </div>
  );
}

export default App;
