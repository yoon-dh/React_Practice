import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <strong>Loading</strong>}
    </div>
  );
}

export default App;
