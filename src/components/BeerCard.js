import React from "react";
import { Card } from "semantic-ui-react";
import { FaShoppingCart,FaTrash } from "react-icons/fa";


function BeerCard({ beer, addToCart,deleteBeer }){

function handleClick() {
  // const beerObj = {
  //   name: beer.name,
  //   image: beer.image,
  //   price: beer.price,
  //   average: beer.rating.average
  // }
  addToCart ?  addToCart(beer) : deleteBeer(beer)
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
          <button onClick={handleClick}>{addToCart ? <FaShoppingCart/> : <FaTrash/>}</button>
          <span>
            <i className="icon heartbeat red" />
            Rating: {Math.round(beer.rating.average * 10)/ 10}
          </span>
        </div>
        </Card>
    )
}

export default BeerCard;