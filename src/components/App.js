import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Beers from './Beers';
import BeerForm from './BeerForm';
import NavBar from './NavBar';
import Checkout from './Checkout';
import Home from './Home';

function App() {

  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart,setCart] = useState([]);
  const [activeTab,setActiveTab] = useState(0);


  function addToCart(beerObj) {
    setCart([...cart,beerObj]);
  }


  function clearCart(){
    setCart([])
  }

  function sendActiveTab(tab){
    setActiveTab(tab)
  }

  function deleteBeer(beerToDelete){
    setCart(cart.filter((cartBeer)=> cartBeer.id !== beerToDelete.id))
  }

  function handleNewBeer(newBeerObj){
    setBeers([...beers, newBeerObj]);
  }

  useEffect(() => {
    fetch("https://sheltered-beach-53138.herokuapp.com/ale")
    .then(res => res.json())
    .then(data => setBeers(data))
  }, [])

  const searchResults = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchQuery.toLowerCase())
    })



  return (
    <div className="App">
      <header className="App-header" >
        <NavBar/>
      </header>
        <Switch>
          <Route exact path="/">
            <Home sendActiveTab={sendActiveTab}/>
          </Route>
          <Route exact path="/beers">
            <Beers beers={searchResults} setSearchQuery={setSearchQuery} addToCart={addToCart}/>
          </Route>
          <Route exact path="/addbeer">
            <BeerForm onHandleNewBeer={handleNewBeer}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} clearCart={clearCart} activeTab={activeTab} deleteBeer={deleteBeer} sendActiveTab={sendActiveTab}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
