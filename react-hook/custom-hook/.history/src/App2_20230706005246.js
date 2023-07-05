import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com";
function App2() {
  cosnt[(data, setData)] = useState();

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetchUrl("users");
  }, []);

  return (
    <div>
      <h1>useFetch</h1>
    </div>
  );
}

export default App2;
