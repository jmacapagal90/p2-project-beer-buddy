import BeerMenu from './BeerMenu';
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Beers({ beers, setSearchQuery, addToCart }){

    return (
        <Container>
            <Search setSearchQuery={setSearchQuery}/>
            <BeerMenu beers={beers} addToCart={addToCart}/>
        </Container>
    )
}

export default Beers;