import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import NavBar from "../components/NavBar";
import ItemGrid from "../components/ItemGrid";
import Item from "../components/Item";


const ShoppingBasket = ({shoppingBasket, calculateTotal}) => {

    
    if (shoppingBasket) {

        const basketItems = shoppingBasket.map((item, index) => {
            return <div key={index} >
                        <img src={item.image} width='100px' height='100px'/>
                            <h3>{item.title}</h3>
                            <p>£{item.price}</p>
                        {/* <button onClick={() => removeItemFromBasket(index)}>Remove Item From Basket</button> */}
                    </div>
        })

        return (
            <div>
                <h1>Basket Total: £{calculateTotal()}</h1>
                {basketItems}
            </div>

        )
}}

export default ShoppingBasket