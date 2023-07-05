import { useEffect } from "react";

function App2() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
}

export default App2;
