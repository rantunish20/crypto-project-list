import React, {useSate} from 'react';

const ApiList = ({image, name,symbol,current_price}) => {

  const handleFav = () => {

    
    const coinfav = {image,name, symbol,current_price};

    fetch('http://localhost:8000/Coins', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(coinfav)
    }).then(() => {
      console.log(coinfav)
    })
    }    


    return(
        <div className="coin-List">
        <div className="coinList" >
        <div> 
          <p></p>
        </div>
          <p>
           <img src={image} alt={name}/>
            {symbol} | 
            {name} |
            Price: {current_price}
            <button onClick={handleFav}  >Add to Fav</button>
          </p>
        </div>
      
        </div>
    )
}


export default ApiList; 