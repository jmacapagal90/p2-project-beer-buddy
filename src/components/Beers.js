import BeerMenu from './BeerMenu';
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Beers({ beers, setSearchQuery, addToCart }){
    //if you havent opened a tab yet or added to existing tab, clicking cart will send you back to Home to open/update tab
    /// add an alert to make sure to add a tab
    return (
        <Container>
            <Search setSearchQuery={setSearchQuery}/>
            <BeerMenu beers={beers} addToCart={addToCart}/>
        </Container>
    )
}

export default Beers;