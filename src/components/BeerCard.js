import React from "react";
import { Card } from "semantic-ui-react";

function BeerCard({ beer }){

function handleClick(e) {
  console.log(e.target.parentNode.parentNode)
}

    return (
        <Card>
        <div className="image">
          <img src={beer.image} alt={beer.name} />
        </div>
        <div className="content">
          <div className="header">{beer.name}</div>
        </div>
        <div className="extra content">
          <button onClick={handleClick}>Add to Cart</button>
          <span>
            <i className="icon heartbeat red" />
            Rating: {Math.round(beer.rating.average * 10)/ 10}
          </span>
        </div>
        </Card>
    )
}

export default BeerCard;