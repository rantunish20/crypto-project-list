import { useEffect, useState } from 'react';
import ApiList from './components/ApiList';
import ListCoinInfo from './components/ListCoinInfo';
import AddCoins from './components/AddCoins';


function App() {
 
  const[coins, coinInfo] = useState([]);
  const[search, setSearch] = useState ('');
  const[show, setShow] = useState(true);
  const[popup, setPopUp] = useState(false);
  

  useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((r) => r.json())
      .then((data) => {
        coinInfo(data);
        
        console.log(data);
      } )
    }, []);

// Search Coin Functions
const handleSearch = e => {
  setSearch(e.target.value)
}

const filteredCoins = coins.filter(data => 
  data.name.toLowerCase().includes(search.toLowerCase())
)

 

  return (
    <div>
      <div className="Search-Results">
      <h1>Track Your Favorite Crypto!</h1>
      <form className="SearchForm">
        <input type='text' placeholder= 'Search Coins'className="searchBttn" onChange={handleSearch}/>
      </form >
      <button className="favBttn" onClick={()=>setShow(!show)}>Fav List </button>
      <button className="favBttn" onClick={()=>setPopUp(true)}>Add Coin</button>
      <AddCoins trigger={popup} setTrigger={setPopUp}/> 
      {
        show?<ListCoinInfo 
        />:null
      }
      <h1>Crypto List</h1>
      {filteredCoins.map(data => {
        return(
          <ApiList coins={coins}
          key={data.id}
          name={data.id}
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
