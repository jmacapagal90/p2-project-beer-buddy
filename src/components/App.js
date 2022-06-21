import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Checkout from './Checkout';

function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <NavBar/>
      </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
