import BeerMenu from './BeerMenu';
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Beers({ beers, setSearchQuery, addToCart }){
    //if you havent opened a tab yet or added to existing tab, 
    return (
        <Container>
            <Search setSearchQuery={setSearchQuery}/>
            <BeerMenu beers={beers} addToCart={addToCart}/>
        </Container>
    )
}

export default Beers;