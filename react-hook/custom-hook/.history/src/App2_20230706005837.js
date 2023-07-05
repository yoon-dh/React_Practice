import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";
function App2() {
  const { data, fetchUrl } = useFetch(baseUrl, "users");

  return (
    <div>
      <h1>useFetch</h1>
      <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App2;
