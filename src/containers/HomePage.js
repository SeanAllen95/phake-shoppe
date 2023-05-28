import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import NavBar from "../components/NavBar";
import ItemGrid from "../components/ItemGrid";
import Item from "../components/Item";


const HomePage = ({phakeShoppeItems, addItemToBasket}) => {

    


    return (
        <>
        <ItemGrid phakeShoppeItems={phakeShoppeItems} addItemToBasket={addItemToBasket}/>
        </>
    )
}

export default HomePage