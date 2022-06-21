import React from "react";
import { Card } from "semantic-ui-react";
import { FaTrash } from "react-icons/fa";

function Checkout({cart}){

    return (
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
            </Card>
           )
        })}
       </Card.Group>
    )
}

export default Checkout;