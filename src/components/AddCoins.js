import React, {useState} from 'react'
import './AddCoinPopup.css'

function AddCoins (props) {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [symbol, setSymbol] = useState();
    const [current_price, setCurrentPrice] = useState();

    const handleAddCoin = (e) => {
        e.preventDefault();
        const addCoinInfo = {image, name, symbol,current_price};
        console.log(addCoinInfo)

        fetch('http://localhost:8000/Coins', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(addCoinInfo)
        }).then(() => {
            console.log("It Works!")
        })
    }

    return (props.trigger) ? (
        <div className="AddWindow">
            <div className="AddPopup">
            
            <form onSubmit={handleAddCoin}>
                <h1 className="PopupTitle">Add Your Coin Here</h1>
                <label>Coin Name:</label>
                <input className="PopInput" type="text" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br>
                <label>Image URL:</label>
                <input className="PopInput" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
                <label>Symbol:</label>
                <input className="PopInput" type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)}></input><br></br>
                <label>Price:</label>
                <input className="PopInput" type="text" value={current_price} onChange={(e) => setCurrentPrice(e.target.value)}></input><br></br>
                <button className="SubmitBttn">Submit</button>
                <button className="AddBttnClose" onClick={() => props.setTrigger(false)} >Close</button>
            </form>
            {props.children}
            </div>
        </div>
    ) : "";
}


export default AddCoins; 