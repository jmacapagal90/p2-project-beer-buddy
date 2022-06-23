import React from "react";
import { Container, List, Button } from "semantic-ui-react"

function CloseTab({activeTab,onDeleteTab}){
    if (activeTab === 0){
        return (
            <h1>No Active Tabs Found</h1>
        )
    }
    const {id, tabName,beersOrdered} = activeTab;

    function handleCloseTab(){
        console.log(id)
        fetch(`https://sheltered-beach-53138.herokuapp.com/openTabs/${id}`, {
            method: 'DELETE',
        }).then(r => r.json());
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
        <Button type="submit" onClick={handleCloseTab}>Close Tab</Button>
        </Container>       
    )
}

export default CloseTab;