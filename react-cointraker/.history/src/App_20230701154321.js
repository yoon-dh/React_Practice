import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <h1>The Coins!</h1>
      {loading ? <strong>Loading</strong> : null}
      <ul>
        {coins.map((coin) => {
          <li>
            {coin.name} ({coin.symbol})
          </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
