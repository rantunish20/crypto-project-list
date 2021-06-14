import { useEffect, useState } from 'react';
import ApiList from './components/ApiList';
import ListCoinInfo from './components/ListCoinInfo';

function App() {
 
  const[coins, coinInfo] = useState([]);
  const[search, setSearch] = useState ('')
  const[show, setShow] = useState(true)

  useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((r) => r.json())
      .then((data) => {
        coinInfo(data);
        console.log(data);
      } )
    
    }, []);

  
const handleSearch = e => {
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(data => 
  data.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div>
      <div className="Search-Results">
      <h1>List Your Favorite Crypto!</h1>
      <form>
        <input type='text' placeholder= 'Search'className="searchBttn" onChange={handleSearch}/>
      </form>
      <button onClick={()=>setShow(!show)}>Fav List </button>
      {
        show?<ListCoinInfo />:null
      }
      
      
      <h1>Crypto List</h1>
      {filteredCoins.map(data => {
        return(
          <ApiList coins={coins}
          key={data.id}
          name={data.name}
          image={data.image}
          symbol={data.symbol}
          current_price={data.current_price}
          />
        )
      })}
      </div>
    </div>

  );

}

export default App;
