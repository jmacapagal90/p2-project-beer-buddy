import React from "react";
import { Card } from "semantic-ui-react";
import { FaTrash } from "react-icons/fa";

function Checkout({cart,activeTab}){
  //if you havent opened a tab yet or added to existing tab, in checkout, if tab is null, create an alert asking to create a tab
    return (
      <>
      <h1>Tab Name: {(activeTab) ? (activeTab.name) : null}</h1>
      <Card.Group itemsPerRow={4}>
        {cart.map((beer)=>{
           return (
            <Card>
            <div className="image">
              <img src={beer.image} alt={beer.name} />
            </div>
            <div className="content">
              <div className="header">{beer.name}</div>
              <div className="header">{beer.price}</div>
            </div>
            <div className="extra content">
              <button><FaTrash/></button>
            </div>
            {/* input box to name tab */}
            {/* button to create new tab (post tab) */}
            {/* dropdown/button to update existing tab (patch tab) */}
            </Card>
           )
        })}
       </Card.Group>
       </>
    )
}

export default Checkout;