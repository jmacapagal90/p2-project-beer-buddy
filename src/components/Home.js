import BeerMenu from './BeerMenu';
import Checkout from './Checkout';
import { Container } from "semantic-ui-react";
import Search from "./Search";

function Home({ beers, setSearchQuery }){

    return (
        <Container>
            <Search setSearchQuery={setSearchQuery}/>
            <BeerMenu beers={beers}/>
        </Container>
    )
}

export default Home