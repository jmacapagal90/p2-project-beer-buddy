import React from "react";
import { Card, Image,Button } from "semantic-ui-react";
import { FaShoppingCart,FaTrash } from "react-icons/fa";


function BeerCard({ beer, addToCart,deleteBeer }){

  function handleClick() {
    addToCart ?  addToCart(beer) : deleteBeer(beer)
  }


    return (
          <Card>
            <Image wrapped ui={false} src={beer.image} alt={beer.name} />
            <Card.Content>
              <Card.Header>
                {beer.name}
              </Card.Header>
                {beer.price}
              <Button onClick={handleClick}>{addToCart ? <FaShoppingCart/> : <FaTrash/>}</Button>
                <i className="icon heartbeat red" />
                Rating: {Math.round(beer.rating.average * 10)/ 10}
            </Card.Content>
        </Card>
    )
}

export default BeerCard;