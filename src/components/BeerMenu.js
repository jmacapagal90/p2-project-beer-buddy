import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function BeerMenu(){
    return (
        <Card.Group itemsPerRow={4}>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
            <BeerCard/>
        </Card.Group>
    )
}

export default BeerMenu;