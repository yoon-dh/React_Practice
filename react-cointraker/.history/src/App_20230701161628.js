import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState();
  const [dollar, setDollar] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setSelectCoin(json[0].quotes.USD.price);
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
          <select
            onChange={(event) => {
              setSelectCoin(coins[event.target.selectedIndex].quotes.USD.price);
            }}
          >
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          <p>
            <input
              type="text"
              placeholder="dollar"
              value={dollar}
              onChange={(event) => {
                console.log(event.target.value);
                setDollar(event.target.value);
              }}
            />
          </p>
          <p>
            <input type="text" placeholder="convert coin" />
          </p>
        </>
      )}
    </div>
  );
}

export default App;
