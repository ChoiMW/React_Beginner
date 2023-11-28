import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [abCoins, setAbCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();

    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json().then(
      json => {
        setAbCoins(json.filter((item) => {
          return item.quotes.USD.price < money;
        }
        )
        );
      }
    ));
  }


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json().then(
      json => { setCoins(json); setLoading(false); }
    )

    );

  }, []);


  return <div>
    <h1>the conis ({coins.length} , {abCoins.length})</h1>
    {loading ? <strong>Loading...</strong> : null
    }
    <hr />
    <form onSubmit={onSubmit}>
      <input type='number' onChange={onChange} value={money}></input>
      <button>Search</button>
      <hr />
      <select>
        {abCoins.map((coin) => <option key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
      </select>
    </form>

    <hr />
    <ul>
      {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>)}
    </ul>
  </div >
}

export default App;
