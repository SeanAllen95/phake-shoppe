import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ItemGrid = ({phakeShoppeItems, addItemToBasket}) => {

    const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    `

    return (
       <GridContainer>
            <Item phakeShoppeItems={phakeShoppeItems} addItemToBasket={addItemToBasket}/>
       </GridContainer>
    )
}

export default ItemGrid