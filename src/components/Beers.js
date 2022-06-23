import BeerMenu from './BeerMenu';
import { Container, Header } from "semantic-ui-react";
import Search from "./Search";

function Beers({ beers, setSearchQuery, addToCart }){
    //if you havent opened a tab yet or added to existing tab, 
    return (
        <Container>
            <Header textAlign='center'>Search For Your Favorite Beer!</Header>
            <Container id='search' textAlign='center'>
                <Search setSearchQuery={setSearchQuery}/>
            </Container>
            <Header textAlign='center'>Browse For Your Favorite Beer!</Header>
            <BeerMenu beers={beers} addToCart={addToCart}/>
        </Container>
    )
}

export default Beers;