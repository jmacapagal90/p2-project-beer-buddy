import React from "react";
import BeerCard from "./BeerCard";
import { CardGroup } from "semantic-ui-react"

function CloseTab({activeTab}){
    const {name,beersOrdered} = activeTab
    return (
        <CardGroup>
        <h3>Active Tab: {name}</h3>
        {beersOrdered.length != 0 ? 
            beersOrdered.map((beer)=>{
            return (
                <BeerCard key={beer.id} beer={beer}/>
            )
      }): null}
        </CardGroup>       
    )
}

export default CloseTab;