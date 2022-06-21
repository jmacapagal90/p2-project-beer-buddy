import BeerMenu from './BeerMenu';
import Checkout from './Checkout';
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Beers({ beers, setSearchQuery }){

    return (
        <Container>
            <Search setSearchQuery={setSearchQuery}/>
            <BeerMenu beers={beers}/>
        </Container>
    )
}

export default Beers;