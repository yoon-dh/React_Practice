import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <strong>Loading</strong> : null}
    </div>
  );
}

export default App;
