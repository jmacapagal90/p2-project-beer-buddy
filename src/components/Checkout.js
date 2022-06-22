import React from "react";
import { Card } from "semantic-ui-react";
import { FaTrash } from "react-icons/fa";
import BeerCard from "./BeerCard";

function Checkout({cart,activeTab,deleteBeer}){
  //if you havent opened a tab yet or added to existing tab, in checkout, if tab is null, create an alert asking to create a tab
  function handleDelete(e){
    console.log(e.target)
    // deleteBeer(deleteBeerName)
  }
    return (
      <>
      <h1>Tab Name: {(activeTab) ? (activeTab.name) : null}</h1>
      <Card.Group itemsPerRow={4}>
        {cart? cart.map((beer) => {
                return(
                    <BeerCard key={beer.id} beer={beer} deleteBeer={deleteBeer}/>
                )
          }) : null}
       </Card.Group>
       </>
    )
}

export default Checkout;