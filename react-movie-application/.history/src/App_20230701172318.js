import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
export default App;
