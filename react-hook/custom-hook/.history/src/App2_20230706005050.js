import { useEffect } from "react";

function App2() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const fetchUrl = () => {};

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
}

export default App2;
