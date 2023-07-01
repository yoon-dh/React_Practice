import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10");
  }, []);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <strong>Loading</strong> : null}
    </div>
  );
}
// https://api.coinpaprika.com/v1/tickers?limit=10
export default App;
