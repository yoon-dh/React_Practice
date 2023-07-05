import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";
function App2() {
  const { data: useData } = useFetch(baseUrl, "users");

  return (
    <div>
      <h1>useFetch</h1>

      <pre>{JSON.stringify(userData[0], null, 2)}</pre>
    </div>
  );
}

export default App2;
