import React from 'react';

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
      <div>
        <div className="coin-List">
        <table className="coinlist">
        <tbody className="coinlistTr">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tbody>
        <tbody>
            <td id="coinlistImage" className="rotate linear infinite"><img className="imagetest" src={image} alt={name}/></td>
            <td className="coinlistSymbol">{symbol}</td>
            <td className="coinlistName">{name} </td>
            <td className="coinlistPrice">${current_price}</td>
            <td className="coinlistBttn"> <button onClick={handleFav}  >Add to Fav</button> </td>
        </tbody>
        </table>
      </div>
      </div>
    )
}


export default ApiList; 