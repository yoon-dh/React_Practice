import { useEffect } from "react";

function App2() {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const fetchUrl = (type) => {
    fetch(type + "/" + type)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
}

export default App2;
