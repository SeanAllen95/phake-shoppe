import React from "react";
import ItemAddToBasket from "./ItemAddToBasket";
import styled from "styled-components";

const Item = ({phakeShoppeItems, addItemToBasket}) => {

    const ItemContainer = styled.article`
    border: 2px;
    background-color: aqua;
    width: 300px;
    height: auto;
    font-size: 1em;
    place-items: center;
    border: 1px solid;
    `
    const Image = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    `


    // const GridContainer = styled.article`
    // display: inline-grid;
    // grid-template-columns: auto auto auto;
    // `
    // const Title = styled.h1`
    // font-size: 20px;
    // `
    // const Price = styled.p`
    // font-size: 20px;
    // `

    if (phakeShoppeItems) {

        const listItems = phakeShoppeItems.map((item, index) => {
            return <ItemContainer key={index} >
                    <Image src={item.image}/>
                    <h3>{item.title}</h3>
                    <p>£{item.price}</p>
                    <button onClick={() => addItemToBasket(item)}>Add Item To Basket</button>
                    <route></route>
                    </ItemContainer>
        })

        return (
            <>
                {listItems}
            </>

        )
}}

export default Item