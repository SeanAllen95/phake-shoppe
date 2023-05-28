import './App.css';
import React, {useState, useEffect} from 'react';
import HomePage from './containers/HomePage'
import ShoppingBasket from './containers/ShoppingBasket'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemView from './containers/ItemView';



function App() {

  const [phakeShoppeItems, setPhakeShopItems] = useState(null)
  const [shoppingBasket, setShoppingBasket] = useState([])

    useEffect(() => {
        getPhakeShoppeItems()
    }, [])

    const getPhakeShoppeItems = function() {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(phakeShoppeItems => setPhakeShopItems(phakeShoppeItems))
    }

    const addItemToBasket = (item) => {
      const updatedBasketList = [...shoppingBasket, item]
      setShoppingBasket(updatedBasketList)
    }

    // const removeItemFromBasket = (index) => {
    //   const updatedBasketList = shoppingBasket.filter((item, i) => i !== index)
    //   setPhakeShopItems(updatedBasketList)
    // }

    const calculateTotal = () => {
      let total = 0
      for (const item of shoppingBasket) {
        total += item.price
      }
      return total
    }

  return (
    <div className="App">
      <h1 id='page-title'>Welcome to Phake Shoppe!</h1>
      <h2>Buy!</h2>
      <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={ < HomePage phakeShoppeItems={phakeShoppeItems} addItemToBasket={addItemToBasket}/> }/>
                <Route path="/shoppingbasket" element={ < ShoppingBasket 
                shoppingBasket={shoppingBasket} 
                calculateTotal={calculateTotal}
                /> 
                }/>
                <Route path="/itemview/:" element={ < ItemView phakeShoppeItems={phakeShoppeItems} addItemToBasket={addItemToBasket}/> }/>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
