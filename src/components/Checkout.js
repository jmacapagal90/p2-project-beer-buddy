import React from "react";
import { useHistory } from 'react-router-dom'
import { Card, Button, Container, Menu, MenuItem } from "semantic-ui-react";
import BeerCard from "./BeerCard";

function Checkout({cart,activeTab,deleteBeer,clearCart, sendActiveTab}){
  //if you havent opened a tab yet or added to existing tab, in checkout, if tab is null, create an alert asking to create a tab
  console.log(activeTab)
  const history = useHistory()
  function checkoutCart(){
    
    fetch(`https://sheltered-beach-53138.herokuapp.com/openTabs/${activeTab.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              beersOrdered: [...activeTab.beersOrdered, ...cart]}),
          })
          .then(response => response.json())
          .then(data => 
            sendActiveTab(data))
          .then(clearCart())
          .catch((error) => {
            console.error('Error:', error);
          });
        history.push('/closetab')
  } 

    return (
      <Container>
        <Menu fluid widths="2">
          <MenuItem> Tab Name: {(activeTab) ? (activeTab.tabName) : ""}
          </MenuItem>
          <MenuItem>
            <Button text="Check Out" onClick={checkoutCart}>Check Out</Button>
          </MenuItem>
          </Menu>
        <Card.Group itemsPerRow={4}>
        {cart.length !== 0 ? cart.map((beer) => {
                return(
                    <BeerCard key={beer.id} beer={beer} deleteBeer={deleteBeer}/>
                )
          }) : null}
        </Card.Group>
      </Container>
    )
}

export default Checkout;