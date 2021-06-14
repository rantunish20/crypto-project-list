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

    
return (
    <div> 
        <h1>Favorite List</h1>
        {coinlist.map((data) => (
         <div className="favList" >
             
             <p>
             <img src={data.image} alt={data.name}/>
            {data.symbol} | 
            {data.name} |
            Price: {data.current_price}
             </p>
         </div>   
        ))}
    </div>
)
}

export default ListCoinInfo;