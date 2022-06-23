import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function BeerMenu({ beers, addToCart }){
    return (
        <Card.Group itemsPerRow={4}>
            {beers && 
             beers.map((beer) => {
                return(
                    <BeerCard key={beer.id} beer={beer} addToCart={addToCart}/>
                )
            })}
        </Card.Group>
    )
}

export default BeerMenu;