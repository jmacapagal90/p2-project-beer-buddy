import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function BeerMenu({ beers }){
    return (
        <Card.Group itemsPerRow={4}>
            {beers.map((beer) => {
                return(
                    <BeerCard key={beer.id} beer={beer}/>
                )
            })}
        </Card.Group>
    )
}

export default BeerMenu;