import { useFetch } from "./useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";
function App2() {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
      <h1>useFetch</h1>

      <h1>User</h1>
      <pre>{userData && JSON.stringify(userData[0], null, 2)}</pre>
      <h1>Post</h1>
      <pre>{postData && JSON.stringify(postData[0], null, 2)}</pre>
    </div>
  );
}

export default App2;
