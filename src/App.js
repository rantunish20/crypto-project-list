import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const[coins, coinInfo] = useState([]);

useEffect(() => {
  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false")
  .then((r) => r.json())
  .then((data) => {
    coinInfo(data);
    console.log(data);
  } )

}, []);


  return (
    <div>
      <h1>List Your Favorite Crypto!</h1>
      <Header />
      {coins.map((data) => (
        <div className="coinList" key={data.id}>
          <p>
            <img src={data.image} alt={data.name}/>
            {data.symbol} | 
            {data.name} |
            Price: {data.current_price}
            <button>Add to Fav</button>
          </p>
        </div>
      ))}
    </div>
  );

}

export default App;
