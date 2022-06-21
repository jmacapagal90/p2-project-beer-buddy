import React from "react";
import { Card } from "semantic-ui-react";

function BeerCard(){
    return (
        <Card>
        <div className="image">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">Bulbasaur</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            10
          </span>
        </div>
        </Card>
    )
}

export default BeerCard;