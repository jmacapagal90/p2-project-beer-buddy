import React from "react";
import BeerCard from "./BeerCard";
import { Container, List, Button } from "semantic-ui-react"

function CloseTab({activeTab,onDeleteTab}){
    const {id, tabName,beersOrdered} = activeTab;

    function handleCloseTab(){
        fetch(`https://sheltered-beach-53138.herokuapp.com/openTabs/${id}`, {
            method: 'DELETE',
    })
        onDeleteTab(id)
    }
    return (
        <Container className="homeHeader">
        <h3>Active Tab: {tabName}</h3>
            {beersOrdered.length != 0 ? 
                beersOrdered.map((beer)=>{
                return (
                    <List>
                        <List.Item>{beer.name}</List.Item>
                        <List.Item>{beer.price}</List.Item>
                    </List>
                )
            }): null}
        <Button type="submit" onSubmit={handleCloseTab}>Close Tab</Button>
        </Container>       
    )
}

export default CloseTab;