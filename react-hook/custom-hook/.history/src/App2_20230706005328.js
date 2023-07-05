import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com";
function App2() {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
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
