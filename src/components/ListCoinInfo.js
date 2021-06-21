
import React,{useState, useEffect} from "react";

const ListCoinInfo = () => {
const [coinlist, setCoinList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/Coins")
        .then((r) => r.json())
        .then((data) => {
            setCoinList(data)
            console.log(data);
        })
      }, [])


function handleDelete(id)
{
    fetch(`http://localhost:8000/Coins/`+id, {
        method: 'Delete',
       }).then(() => {
        console.log (id)
      })
}

    
return (
    <div> 
        <h1>Favorite List</h1>
        
         <div className="favList" >
             <table className="favListTable">
                 <tr className="listHeader">
                     <th><h3>Logo</h3></th>
                     <th><h3>Symbol</h3></th>
                     <th><h3>Name</h3></th>
                     <th><h3>Current Price</h3></th>
                     <th> </th>
                 </tr>
                 {coinlist.map((data) => (
                 <tr >
                     <td id="coinImage"className="rotate linear infinite"><img src={data.image} alt={data.name} key={data.id} /></td>
                     <td className="coinSymbol">{data.symbol}</td>
                     <td className="coinName">{data.name} </td>
                     <td className="coinPrice">${data.current_price}</td>
                     <td className="coinBttn"> 
                     <button onClick={() => handleDelete(data.id)} variant="danger" >Remove</button> 
                     <button >Update</button>
                     </td>
                 </tr>))}
             </table>
         </div>   
    </div>
)
}

export default ListCoinInfo;