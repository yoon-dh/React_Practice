import { useEffect, useState } from "react";

function Input() {
  return (
    <p>
      <input type="text" placeholder="Write"></input>
    </p>
  );
}

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
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <>
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <Input text="Dollar" />
          <Input text="coin" />
        </>
      )}
    </div>
  );
}

export default App;
